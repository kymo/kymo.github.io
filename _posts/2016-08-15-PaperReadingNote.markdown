---
layout: post
title:  "Paper Reading Note"
date:  2016-08-15 19:24:56
categories: MachineLearning
---
### Learning N-best Correction Models from Implicit User Feedback in a Muti-Modal Local Search Application

> 通过用户的反馈对语音识别的结果进行纠错，通过点击数据构造result confusion matrix,然后利用该矩阵对结果进行重排

通常而言，用户的点击数据可以用来对已有的声学模型或者语言模型进行概率，当然也可以利用这些数据对语言识别的结果进行纠正，本文作者想要构建的就是基于用户数据的纠错模型。

本文的工作和主流的改写流程差不多，主要包含了两个方面：

* 语音识别系统首先会给出n-best候选，不同于一般的候选，这里会增加一部分通过点击数据统计出来的额外的候选。
* 接着进行ReScore，构建更加精确的n-best list

对于第一步，需要从user click data中统计出result confusion matrix,该矩阵揭示了当展现某一个query的时候，用户点击其他query的频次，比如对于识别系统识别出来的n-best list:

> Sterling  Stirling  Burlington  Cooling

通过点击数据可以构造如下的result confusion matrix:

|            | Bar  | Bowling | Burgerking | ...  | Burlington | Sterling |
| ---------- | :--: | :-----: | :--------: | :--: | :--------: | :------: |
| Burlington |  1   |   13    |     2      | ...  |     15     |    0     |
| Cooling    |  0   |    7    |     0      | ...  |     0      |    0     |
| Sterling   |  0   |    4    |     0      | ...  |     0      |    10    |
| Stirling   |  0   |    4    |     0      | ...  |     0      |    4     |

得到这个result confusion matrix之后，就可以将原有的n-best list进行扩充(在矩阵中共现过便可加入），得到如下结果：

> Sterling  Striling  Burlington  Cooling  Bar  Bowling   Burgetking

对于第二步，需要利用矩阵的统计频次.$Score(word_i)=\sum_{i=0}C(word_i, otherword)$，其中$word_i$表示第$i$个n-best list的元素，$otherword$表示用户在展现$word_i$之后点击的$word$.
