---
layout: post
title:  "Ensemble Learning Methods"
date:  2016-04-02 19:24:56
categories: MachineLearning
---

集成学习的关键是弱学习器的组合，目标是为了提升模型的性能，一般用在Model Selection，此时降低了选择弱名的可能性。当然集成学习也广泛的应用于结果置信度检验、特征选择、数据融合、增量学习等方面，取得了良好的效果。

一般而言，对于给定的任务，比如分类，首先在处理完特征之后，我们需要考虑的是选择何种模型来对这些样本进行训练。一般我们没有样本数据产生过程的先验知识，只能通过手动的选择调参，才有可能得到一个较好拟合已知样本的模型。集成学习给了一个非常完美的模型选择的解决方案，通过训练多个子模型，组成committee，最后综合决策，达到了自动选择模型的效果。

一般模型的性能某种程度取决于数据集的大小，也即观测样本的覆盖度。数据集过大对于一般模型可能会导致训练过拟合或者训练性能瓶颈，此时则可以切分数据集，在子数据集上单独训练模型，然后按照某种组合策略构建committee。数据集过小对于一般模型则会欠拟合，此时可以使用bootstrap等抽样方法，在每一份抽样样本中单独训练模型，组成committee。

一般而言，样本的分类边界十分复杂，如果仅仅使用一般的模型，则很难学习出能够较好拟合样本的分类边界。
但是如果使用集成学习框架，通过学习多个子模型，则能够很好的学习出该分类边界。

另外，如果我们收集到的数据来源很多，导致数据的类型、维度不同，如果将所有来源的数据都放在同一个向量中，可能会降低模型的学习能力。
但是假如我们在不同来源的数据中根据该数据特性或者其他先验知识单独训练模型，则效果一般都会好很多。
今天看了一篇关于新浪微博垃圾用户检测的论文，研究现状里就提到了采用这种思想的方法，通过观测，发现垃圾用户一般有三种行为：广告、重复转发和恶意关注，然后根据这三种类型去抽取特征，得到三种类型的特征向量之后，然后分别在三种特征上进行子模型训练，最后效果也还不错。

此外，集成学习框架还可以用来对结果进行评估，可以根据committee中的子模型的vote去计算。

有人总结了使用ensemble learning的三大原因：

* 统计学，已知样本无法完成的表达原始数据的生成分布，通过bootstrap等方法，可以尽量的拟合原始分布训练模型。
* 可计算，体现于模型选择，通过模型融合的解决方案将缺乏模型先验知识的人从单模型调优中解放出来。
* 任意拟合，单模型无法拟合出复杂分类边界，则模型融合则很好的解决了这一问题。

参考文献 [http://www.scholarpedia.org/article/Ensemble_learning](http://www.scholarpedia.org/article/Ensemble_learning)


[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

