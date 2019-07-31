---
title: ShuffleNetV2
copyright: true
mathjax: false
date: 2019-07-31 19:27:27
updated: 2019-07-31 19:27:27
tags: CNN
categories: PaperReading
description: 本文指出模型加速和压缩不应仅关注计算量(FLOPs)这一个指标，还应关注如MAC(memory access coss)等其他损失。并根据不同方面的损失通过多组实验给予了模型设计时的4点建议。
summary_img:
---

原文：[ShuffleNet V2: Practical Guidelines for Ecient CNN Architecture Design](http://xxx.itp.ac.cn/pdf/1807.11164.pdf)

### 模型性能指标

​	绝大多数的模型压缩和加速的文章中都使用FLOPs(float-point operations)作为模型的评价指标,用来衡量卷积计算量。但是本文开始就通过一组对比试验指出即使是相同MFOPs的模型，在不同平台上实际的处理速度仍差别很大。![GPU和ARM平台上相同MFLOPs的模型处理速度对比](./ShuffleNetV2/001-ft1.png)