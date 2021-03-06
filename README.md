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

# 技术栈
###### 前端

 - html, css, javascript
 - vue 全家桶 : vue-cli, vue-router, axios等
 - UI 框架：Element-UI
 

###### 服务端 
- node.js, express框架

###### 数据库 mongodb


# 页面逻辑交互


<img src="https://github.com/zhangtsh5/team/blob/master/src/assets/pages/logic.png" width="60%" />

##### 实现功能（按页面操作流程顺序）

- 页面适配PC端和移动端

<div style="display:flex;align-items:center">
 <img src="./src/assets/pages/pc-new.png" height="250px" /> <img src="./src/assets/pages/new.jpg" height="250px" />
</div>

- 用户注册：同一学号只能注册一次
- 用户登录：只有注册过的用户，并且输入正确的密码才能登录，密码错误等弹框提示

<div style="display:flex;align-items:center">
 <img src="./src/assets/pages/login.jpg" height="300px" />
 <img src="./src/assets/pages/regist.jpg" height="300px" />
 <img src="./src/assets/pages/tasks.jpg" height="300px" />

</div>

- 登录拦截：未登录状态，直接打开其它链接（如首页，项目列表页），将自动跳到登录页面
- 选择项目：输入项目密码才可以进入该项目进行组队等操作，密码错误等弹框提示，成功登录跳转到首页
- 首页展示：展示当前登录用户名（要求注册时以学号为用户名，即用户名为学号），展示当前项目，另外提供三个子菜单，分别是新建小组，小组列表，我的小组

<div style="display:flex;align-items:center">
 <img src="./src/assets/pages/taskPass.jpg" height="300px" />
 <img src="./src/assets/pages/rule.jpg" height="300px" />
</div>

- 新建小组：点击新建小组，填写相关表单信息，提交，可以自己创建一支队伍，默认创建者为本小组组长；同一个项目下，同一个人只能建立一支队伍，即同一个项目下，一个学生只能存在于一个小组
- 小组列表：展示了当前项目的组队情况，如果学生不想自己新建一个小组，也可以在小组列表中选择自己想要加入的小组，自行联系小组组长，获取到该小组密码，点击加入小组按钮，输入姓名学号和小组密码，即可成功加入该小组。也可以由组长在我的小组页面，点击添加组员，输入新添加的组员姓名学号，进行添加

<img src="./src/assets/pages/pc-list.png" height="250px" />

- 我的小组：展示了自己所在的所有小组（不分项目），如果学生想要离开某项目的某一小组，可以到我的小组页面，找到该小组，点击自己学号后面的删除按钮，即可成功离开该组

<img src="./src/assets/pages/pc-mine.png" height="250px" />

- 小组人数限制：在新建小组的表单中，要求输入小组人数限制，即当某一个小组人数已经满时，学生无法加入该小组
- 组队情况表格下载至本地excel:到任何项目的小组列表页，最下方有个下载表格按钮，点击该按钮，即可将该项目的小组列表下载到本地，支持wps,office等办公软件打开和编辑




# 网站 url: 
- http://172.18.187.6:8081  （仅限中大校园网能访问）



# 本地运行
- 1、克隆至本地 git clone
- 2、运行服务端 <br />
  2.1、切换目录至服务端 cd server <br />
  2.2、安装服务端依赖 npm install <br />
  2.3、启动服务端 node app.js <br />
 
- 3、返回team目录 <br />
  3.1、安装客户端依赖 npm install <br />
  3.2、运行项目 npm run dev <br />


