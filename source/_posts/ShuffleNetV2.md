---
title: ShuffleNetV2
copyright: true
mathjax: false
date: 2019-07-31 19:27:27
updated: 2019-08-02 18:04:25
tags: CNN
categories: PaperReading
description: 本文指出模型加速和压缩不应仅关注计算量(FLOPs)这一个指标，还应关注如MAC(memory access coss)等其他损失。并根据不同方面的损失通过多组实验给予了模型设计时的4点建议。
summary_img:
---

原文：[ShuffleNet V2: Practical Guidelines for Ecient CNN Architecture Design](http://xxx.itp.ac.cn/pdf/1807.11164.pdf)

### 模型性能指标

​	绝大多数的模型压缩和加速的文章中都使用FLOPs(float-point operations)作为模型的评价指标,用来衡量卷积计算量。但是本文开始就通过一组对比试验指出即使是相同MFOPs的模型，在不同平台上实际的处理速度仍差别很大。![GPU和ARM平台上相同MFLOPs的模型处理速度对比](./ShuffleNetV2/001-ft1.png)

文中分析了相同FLOPs时造成模型速度差别的原因：

- 有很多影响速度的因素FLOPs指标没能包含，比如并行程度和MAC。例如对于分组卷积，在算力强的平台上MAC会成为运算性能的瓶颈。
- 相同FLOPs时在不同平台上进行操作也会有不同的时间。CUDNN针对$3\times3$的卷积进行了优化，所以速度上不是$1\times1$卷积的9倍

接着指出评价网络的效率时：

- 使用更直接的指标，比如上文测试的处理速度
- 评价指标时需要针对具体平台进行测试

### 加速网络的四点准则

文中通过实验体现模型的运行时间的主要组成中，不仅仅是FLOPs体现的卷积运算量(卷积运算是主要部分)，也有很多数据有关的I/O操作或者element-wise的操作(ReLU,AddTensor)等。

![测试不同平台上模型运行的消耗来源](./ShuffleNetV2/ft2.png)

#### G1：输入输出通道相同时MAC最小

使用$1\times1$卷积核时，记输入通道$c_{1}$输出通道$c_{2}$，输入尺寸$h, w$，卷积层FLOPs记作$B$就是：
$$
B=1\times1\times c_{1}\times c_{2}\times h \times w
$$
也即是$B=hwc_{1}c_{2}$

卷积层的内存操作过程，输入特征需要$h\times w\times c_{1}$输出需要$h\times w\times c_{2}$,卷积核自身需要$c_{1}c_{2}$所以总的内存消耗：
$$
MAC=hw(c_{1}+c_{2})+c_{1}c_{2}
$$

在FLOPs一定时，也即$B=hwc_{1}c_{2}$一定，对MAC使用均值不等式，进行简单的变换带入B便可得到
$$
MAC \geq 2\sqrt{hwB}+\frac{B}{hw}
$$
等号成立条件$c_{1}==c_{2}$，所以得出$1\times 1$卷积操作输入输出通道数相同时$MAC$最小

接着文中进行了对比实验，实验网络是10个block组成，每个block是2个$1\times 1$卷积操作，第一个是$c_{1}$到$c_{2}$,第二个是$c_{2}$到$c_{1}$. 对比了四种不同比例下的运算处理速度，可以看到$c_{1}==c_{2}$时速度最快，如下表：

![验证第一点，对不同比例的输入输出通道数进行测试](./ShuffleNetV2/ft3.png)



#### G2：过多的分组使得MAC增加

分组卷积有效的减少了FLOPs，成为了模型加速的一个主要方法。分组卷积中FLOPs是:
$$
B=\frac{hwc_{1}}{g}
$$
分组计算中MAC如下：
$$
MAC=hw(c_{1}+c_{2})+\frac{c_{1}c_{2}}{g}
$$
在FLOPs相同时，对MAC进行代换得到：
$$
MAC=hwc_{1}+\frac{Bg}{c_{1}}+\frac{B}{hw}
$$
可以看到，此时随着分组$g$的增加$MAC$也会随之增加。

接着文中对不同的分组数$g$时的速度进行了对比实验，$c$表示$c_{1}+c_{2}$，保证FLOPs相同时，对比不同的$g$

![验证第一点，对不同比例的输入输出通道数进行测试](./ShuffleNetV2/ft4.png)



#### G3：

#### G4：