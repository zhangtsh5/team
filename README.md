# 功能需求
在大学众多课程中，作为成绩考核的标准，常常有需要学生组队完成课程设计或者项目大作业的需求，为方便促进学生组队效率，跟进项目进度，及时掌握组队信息，设计一个组队网站，主要具备以下功能：

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
 - vue 全家桶 : vue-cli, vue-router, vue-resource,  axios等
 - UI 框架：Element-UI
 

###### 服务端 node.js
###### 数据库 mongodb
- 公网地址：47.98.189.209; 
- 端口号：27017;
- 数据库名称: team;
- 表设计：user:用户表(用户登录注册)  proList:项目列表(项目信息增删改查)
- 字段说明

项目编号 | 组长姓名  | 组长学号  | 课程名称  | 项目名称 | 项目描述 | 组员列表
 ---- | ----- | ----- | ----- | ----- | ----- | ------  
 id | leaderName  | leaderID | courseName | proName | proDesc | members 



###### 页面逻辑交互


# 项目在线预览
https://zhangtsh5.github.io/team/dist

# 项目截止时间
2020年 1 月 18 日

