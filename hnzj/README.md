# 河南专技在线辅助

## 继续教育公需科目专业科目辅助|自动静音播放|手动暂停播放时，课程进度仍继续增加|自动播放下一个视频|自动答题(去掉答题弹窗)

最近需要学习继续教育课程，发现课程视频不能自动播放，也没有找到好用的辅助插件。分析了一下播放页面，自写了一个脚本,能够实现以下功能：

 1. 进入播放页面后自动静音播放；
 2. 手动暂停播放时，课程进度仍继续增加
 3. 视频播放完毕自动播放下一个；
 4. 自动答题（去掉答题弹窗）。

## Notice：

**脚本不具备自动登录，选课等功能**。因此需要用户登录河南专技在线的账号，选择课程，进入播放页面，然后脚本才能开始正常运行。

第一次成功加载视频播放器时会弹出脚本运行提示如下图，此时要**点击确定，视频才开始自动静音播放**，之后没有其他任何提示。

![首次提示](https://raw.githubusercontent.com/huangdiv/user-scripts/master/hnzj/1.png)

播放页面按F12进入Console界面可看到脚本运行的提示类似下图。

![提示](https://raw.githubusercontent.com/huangdiv/user-scripts/master/hnzj/2.png)

## 【更新日志】
### 2020年8月1日更新：
- 发布1.6版，完善了对HTML5播放器的支持，所有功能已恢复正常。
- 有问题请在本页面或GitHub的issues页面反馈。
- 按F12进入Console界面，键入window.s2j会得到下面的功能提示，如果与此不同，说明该播放器不被脚本支持。

![功能提示](https://raw.githubusercontent.com/huangdiv/user-scripts/master/hnzj/3.png)

### 2020年4月30日更新：
- 发布1.5版，新增对HTML5播放器的支持，功能够用，但还比较简陋。

脚本反馈：[Github][1]
         [我的博客][2]　


  [1]:https://github.com/huangdiv/user-scripts/issues/2
  [2]:https://huangdiv.com/tech/ghlearning-assist/

