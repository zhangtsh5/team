# 功能需求
做一个课程设计组队网站
- 要求用户注册登录
- 每个项目有项目名称、项目密码和负责人；只有知道项目密码的用户才能进入一个项目组队
- 谁都可以建立一个空组（可以只允许项目负责人建立空组）
- 每个人最后只能在一个组。
- 可以限定一些人只能加入几个组之一。
- 每个组要有一个组长
- 到了截止日期将不允许任何改变。
- 分组情况可以转换到excel表中。
# 主要使用技术
###### 前端

 - html, css, javascript
 - vue 全家桶 : vue-cli, vue-router, axios等
 - UI 框架：Element-UI
 

###### 服务端 
- node.js, express框架

###### 数据库 mongodb 目前部署在阿里云服务器
- 公网地址：47.98.189.209; 
- 端口号：27017;
- 数据库名称: team;
- 表设计：userTable:用户表(用户登录注册)  pros:项目列表(项目信息增删改查)
- 用户表字段说明

用户名 | 密码
 ---- | ------  
 username | password 
 
- 项目列表字段说明



项目编号 | 组长姓名  | 组长学号  | 人数限制  | 专业  | 项目名称 | 项目描述 | 组员列表
 ---- | ----- | ----- | ----- | ----- | ----- | ----- | ------  
 _id | leaderName  | leaderID | maxCount | major | proName | proDesc | members 



# 页面逻辑交互
联系具体实际后，实现以下功能，流程如下：

<img src="https://github.com/zhangtsh5/team/blob/master/src/assets/pages/logic.png" width="80%" />

##### 规则说明

1、用户注册登录：
 - 一个学号只能注册一次
 - cookie登录状态保存，有效期内第二次登录密码用户名密码自动填充上一次登录的用户名和密码
 - 未注册用户不能登录
 
2、新建项目
 - 输入表单信息，所有新建的项目将自动更新到项目列表，自己新建的项目将同时更新到我的项目列表
 - 每个人只能出现在一个项目中，组长默认同时也是组员，即人数限制包括组长
 
3、添加组员

<img src="https://github.com/zhangtsh5/team/blob/master/src/assets/pages/add.png" width="80%" />

 - 选择任意一组，且自己还没有存在于任何一个其它项目中，点击添加组员按钮，输入姓名和学号以及项目密码，密码正确即可加入该组
 - 当一组项目组员人数到达该组设定的人数上限后，不再允许添加进该组
 - 组长默认是该组组员了，重复添加进该组无效
 
4、删除项目

<img src="https://github.com/zhangtsh5/team/blob/master/src/assets/pages/del-pro.png" width="80%" />

 - 当需要改动自己的项目信息情况时，在项目列表中，找到需要改动信息的项目，点击删除项目按钮，弹出危险提示，确认删除即可删除，然后再去新建项目页面重新输入表单信息，提交改动后的项目信息
 - 只有一组的组长有权限删除项目列表中该组长创建的项目
 
5、删除组员

<img src="https://github.com/zhangtsh5/team/blob/master/src/assets/pages/delete.png" width="80%" />

 - 去到我的项目界面，这是是自己创建的项目，也就是说只有自己是组长的项目才会出现我的项目列表，只有组长有权限删除自己组的组员
 
6、登录拦截
 - 用户未登录直接输入首页链接，将进行登录拦截，重定向到登录页面，即只有登录后才能到达首页
 
7、将表格信息保存至excel中并下载，点击项目列表菜单，右上角 “下载表格” 按钮，即可下载 xlsx格式的文档，支持office, excel 等软件打开编辑


# 项目在线预览
https://zhangtsh5.github.io/team/dist

# 项目截止时间
2020年 1 月 18 日

# 本地运行
- 克隆至本地 git clone
- 安装依赖 npm install
- 启动服务端 

 - 切换目录至服务端 cd server
 
 - 运行 node app.js
 
- 运行 npm run dev
 


