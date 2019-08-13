---
title: Pytorch多机多卡
copyright: true
mathjax: false
date: 2019-08-13 14:05:37
updated: 2019-08-13 14:05:37
tags: ai-research
categories: Pytorch
description: 使用Pytorch(1.1)自带的分布式训练接口，在GPU集群上使用多机多卡训练模型
summary_img:
---

多卡加速训练的话，单机多卡比较容易，简单的使用Pytorch自带的DataParallel即可，不过如果想要更多的卡进行训练，不得不需要多机多卡。主要参考[这篇](https://zhuanlan.zhihu.com/p/68717029)文章，在Slurm上成功实现多机多卡,这里主要是整理和记录

#### Pytorch分布式训练

与单机多卡的区别：

- DataLoader部分需要使用Sampler，保证不同卡处理独立的子集
- 模型部分使用`DistributedDataParallel`

主要代码如下，参考了[这篇](https://zhuanlan.zhihu.com/p/68717029)文章中的内容

```python
from torch.utils.data import Dataset, DataLoader
from torch.utils.data.distributed import DistributedSampler
from torch.nn.parallel import DistributedDataParallel

RANK = int(os.environ['SLURM_PROCID'])
LOCAL_RANK = int(os.environ['SLURM_LOCALID'])
GPU_NUM = int(os.environ['SLURM_NTASKS'])
IP = os.environ['SLURM_STEP_NODELIST']


def dist_init(host_addr, rank, local_rank, world_size, port=23456):
    host_addr_full = 'tcp://' + host_addr + ':' + str(port)
    torch.distributed.init_process_group("nccl", init_method=host_addr_full,
                                         rank=rank, world_size=world_size)
    torch.cuda.set_device(local_rank)
    assert torch.distributed.is_initialized()

    
if __name__ == '__main__':
	dist_init(IP, RANK, LOCAL_RANK, GPU_NUM)
    
   	# DataSet
	datasampler = DistributedSampler(dataset, num_replicas=GPU_NUM, rank=RANK)
	dataloader = DataLoader(dataset, batch_size=BATCH_SIZE, sampler=datasampler)

	# model 
	model = DistributedDataPrallel(model, 
                                   device_ids=[LOCAL_RANK], 
                                   output_device=LOCAL_RANK)
```

注意几个参数的设置：

- GPU_NUM:  要使用的GPU总数
- RANK： 进程序号，用于进程通信
- LOCAL_RANK: 本地设备序号，用于设备分配

- BATCH_SIZE：大小是指单张卡的大小
- IP: 进程节点ip信息

启动多机多卡时，完成`torch.distributed.init_process_group()`初始化，接着对DataLoader进行修改，使用DistributedSampler即可，模型部分对应设置即可

Slurm启动脚本

```shell
#!/bin/bash
#SBATCH --job-name=MultiGPU
#SBATCH --partition=gpu
#SBATCH -n 32
#SBATCH --nodes=8 
#SBATCH --ntasks-per-node=4
#SBATCH --output= your_path.out
#SBATCH --error= your_path.err
#SBATCH --gres=gpu:4

python ...
```



