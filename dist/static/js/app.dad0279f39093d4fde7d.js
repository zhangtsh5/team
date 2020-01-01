webpackJsonp([1],{"09yM":function(e,t){},FlXR:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("xd7I"),a=n("6sKG"),s=n.n(a).a.create({baseURL:"http://localhost:8080/",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},transformRequest:[function(e){var t="";for(var n in e)!0===e.hasOwnProperty(n)&&(t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&");return t}]});function o(e,t,n,r){s({method:e,url:t,data:"POST"===e||"PUT"===e?n:null,params:"GET"===e||"DELETE"===e?n:null}).then(function(e){r(e)}).catch(function(e){r(e)})}var i={get:function(e,t,n){return o("GET",e,t,n)},post:function(e,t,n){return o("POST",e,t,n)},put:function(e,t,n){return o("PUT",e,t,n)},delete:function(e,t,n){return o("DELETE",e,t,n)}},l=n("3cXf"),d=n.n(l),u={name:"login",data:function(){return{errorInfo:!1,student:{name:"",password:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}]}}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{submitForm:function(e){this.$router.replace("/home");var t=this;t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;localStorage.setItem("ms_username",t.student.name),localStorage.setItem("ms_user",d()(t.student)),console.log(d()(t.student)),t.$http.post("/api/user/login",d()(t.student)).then(function(e){console.log(e),-1===e.data?(t.errorInfo=!0,t.errInfo="该用户不存在",console.log("该用户不存在")):0===e.data?(console.log("密码错误"),t.errorInfo=!0,t.errInfo="密码错误"):200===e.status&&t.$router.push("/readme")}).then(function(e){console.log(e)})})},handleCommand:function(){this.$router.replace("/regist")}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"login-wrap__box"},[n("el-form",{ref:"student",staticClass:"login-wrap__box__content",attrs:{model:e.student,rules:e.rules,"label-width":"0px"}},[e.errorInfo?n("div",{staticClass:"login-wrap__box__content__err"},[n("span",[e._v(e._s(e.errInfo))])]):e._e(),e._v(" "),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:"账号/学工号"},model:{value:e.student.name,callback:function(t){e.$set(e.student,"name",t)},expression:"student.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("student")}},model:{value:e.student.password,callback:function(t){e.$set(e.student,"password",t)},expression:"student.password"}})],1),e._v(" "),n("div",{staticClass:"login-wrap__box__content__btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("student")}}},[e._v("登录")])],1),e._v(" "),n("p",{staticClass:"login-wrap__box__content__register",on:{click:function(t){return e.handleCommand()}}},[e._v("还没有注册？点击注册")])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-wrap__title"},[t("img",{attrs:{src:n("iQH9"),alt:"中山大学logo"}}),this._v(" "),t("p",[this._v("中山大学课程项目组队信息管理网站")])])}]};var m=n("C7Lr")(u,c,!1,function(e){n("e1H2")},null,null).exports,p={name:"App",components:{"v-login":m}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var f=n("C7Lr")(p,h,!1,function(e){n("isql")},null,null).exports,_=n("TcQY"),v=n.n(_),g=(n("09yM"),n("7LQH")),N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-pro"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.testData,border:"",height:"400"}},[n("el-table-column",{attrs:{align:"center",prop:"courseName",label:"单位名称（课程名）",width:"160"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"id",label:"项目编号",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"leaderName",label:"组长姓名",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"leaderID",label:"组长学号",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"proName",label:"项目名称",width:"240"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"group.length",label:"小组人数",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"组员信息",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ul",e._l(t.row.group,function(t,r){return n("li",{key:r},[n("span",[e._v(e._s(t.studentID))]),e._v("\n                        -\n                        "),n("span",[e._v(e._s(t.studentName))]),e._v(" "),n("span",[n("el-button",{staticClass:"delete",attrs:{type:"primary",icon:"el-icon-delete",plain:""}})],1)])}),0)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",plain:""}},[e._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]};var b=n("C7Lr")({name:"MyPro",data:function(){return{testData:[{courseName:"计算机网络实验",id:"001",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"016",leaderName:"张xx",proName:"网络传输速率研究四网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]}]}}},N,!1,function(e){n("Snu1")},"data-v-74edea30",null).exports,w={name:"NewPro",data:function(){var e=this;return{labelPosition:"right",newPro:{leaderName:"",leaderID:"",groupCount:"",courseName:"",proName:"",date1:"",date2:"",proDesc:"",password:"",checkPass:""},rules:{leaderName:[{type:"string",required:!0,trigger:"change"}],leaderID:[{type:"number",required:!0,message:"请输入组长学号",trigger:"change"}],courseName:[{type:"string",required:!0,message:"请输入课程名",trigger:"change"}],groupCount:[{type:"number",required:!0,trigger:"change"}],proName:[{type:"string",required:!0,message:"请输入项目名称",trigger:"change"}],data1:[{type:"string",required:!0,trigger:"change"}],data2:[{type:"string",required:!0,trigger:"change"}],proDesc:[{type:"string",required:!0,message:"请输入项目描述",trigger:"change"}],password:[{validator:function(t,n,r){""===n?r(new Error("请输入密码")):(""!==e.newPro.checkPass&&e.$refs.newPro.validateField("checkPass"),r())},required:!0,rigger:"change"}],checkPass:[{validator:function(t,n,r){""===n?r(new Error("请再次输入密码")):n!==e.newPro.password?r(new Error("两次输入密码不一致!")):r()},required:!0,trigger:"change"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create-wrap"},[n("el-form",{ref:"newPro",attrs:{model:e.newPro,rules:e.rules,"status-icon":"","label-width":"120px","label-position":e.labelPosition}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"组长姓名",prop:"leaderName"}},[n("el-input",{model:{value:e.newPro.leaderName,callback:function(t){e.$set(e.newPro,"leaderName",t)},expression:"newPro.leaderName"}})],1)],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"组长学号",prop:"leaderID"}},[n("el-input",{model:{value:e.newPro.leaderID,callback:function(t){e.$set(e.newPro,"leaderID",t)},expression:"newPro.leaderID"}})],1)],1)])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"课程名称",prop:"courseName"}},[n("el-input",{model:{value:e.newPro.courseName,callback:function(t){e.$set(e.newPro,"courseName",t)},expression:"newPro.courseName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"项目人数限制",prop:"groupCount"}},[n("el-input",{model:{value:e.newPro.groupCount,callback:function(t){e.$set(e.newPro,"groupCount",t)},expression:"newPro.groupCount"}})],1)],1)])],1),e._v(" "),n("el-form-item",{attrs:{label:"项目名称",prop:"proName"}},[n("el-input",{attrs:{placeholder:"例：用于课程组队PC端网站设计"},model:{value:e.newPro.proName,callback:function(t){e.$set(e.newPro,"proName",t)},expression:"newPro.proName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目描述",prop:"proDesc"}},[n("el-input",{attrs:{type:"textarea",placeholder:"例：采用vue.js开发的一个商城网站......"},model:{value:e.newPro.proDesc,callback:function(t){e.$set(e.newPro,"proDesc",t)},expression:"newPro.proDesc"}})],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"项目密码",prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.newPro.password,callback:function(t){e.$set(e.newPro,"password",t)},expression:"newPro.password"}})],1)],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",autocomplete:"off"},model:{value:e.newPro.checkPass,callback:function(t){e.$set(e.newPro,"checkPass",t)},expression:"newPro.checkPass"}})],1)],1)])],1),e._v(" "),n("el-form-item",{attrs:{label:"截止时间",required:""}},[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{prop:"date1"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.newPro.date1,callback:function(t){e.$set(e.newPro,"date1",t)},expression:"newPro.date1"}})],1)],1),e._v(" "),n("el-col",{staticClass:"line",staticStyle:{"{text-align":"center}"},attrs:{span:1}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{prop:"date2"}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.newPro.date2,callback:function(t){e.$set(e.newPro,"date2",t)},expression:"newPro.date2"}})],1)],1)],1),e._v(" "),n("el-form-item",{staticClass:"create-wrap__btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("newPro")}}},[e._v("立即创建")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.resetForm("newPro")}}},[e._v("重置输入")])],1)],1)],1)},staticRenderFns:[]};var I=n("C7Lr")(w,x,!1,function(e){n("OyTc")},null,null).exports,y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"top-box"},[n("el-col",{attrs:{span:20}},[n("div",[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}},[n("el-select",{staticClass:"top-box__option",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[n("el-option",{staticClass:"top-box__option__1",attrs:{label:"项目编号",value:"1"}}),e._v(" "),n("el-option",{staticClass:"top-box__option__2",attrs:{label:"组长姓名",value:"2"}})],1),e._v(" "),n("el-button",{staticClass:"top-box__btn",attrs:{slot:"append",type:"primary",icon:"el-icon-search"},slot:"append"},[e._v("搜索\n                    ")])],1)],1)]),e._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"top-box__print"},[n("el-button",{attrs:{type:"primary",plain:""}},[e._v("打印表格")])],1)])],1),e._v(" "),n("div",{staticClass:"pro-list"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.testData,height:"400",border:""}},[n("el-table-column",{attrs:{align:"center",prop:"courseName",label:"单位名称（课程名）",width:"160"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"id",label:"项目编号",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"leaderName",label:"组长姓名",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"leaderID",label:"组长学号",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"proName",label:"项目名称",width:"240"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"group.length",label:"小组人数",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"组员信息",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ul",e._l(t.row.group,function(t,r){return n("li",{key:r},[e._v("\n                            "+e._s(t.studentID)+" - "+e._s(t.studentName)+"\n                        ")])}),0)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",plain:""}},[e._v("加入该组")])]}}])})],1)],1)],1)},staticRenderFns:[]};var C=n("C7Lr")({name:"ProList",data:function(){return{searchInput:"",select:"",testData:[{courseName:"计算机网络实验",id:"001",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"002",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"003",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"004",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"005",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"006",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"007",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"008",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"009",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"010",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"011",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"012",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"013",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"014",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"015",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]},{courseName:"计算机网络实验",id:"016",leaderName:"张xx",leaderID:"12345678",proName:"网络传输速率研究四网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"}]}]}}},y,!1,function(e){n("nhAa")},"data-v-5e876a35",null).exports,D={name:"Home",data:function(){return{activeIndex:"",isHintShow:!0}},methods:{handleSelect:function(e,t){console.log(e,t)},hideHint:function(){this.isHintShow=!1}}},P={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-menu",{staticClass:"menu-box",attrs:{"default-active":e.activeIndex,mode:"horizontal",router:"","background-color":"#489cf6","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[r("div",{staticClass:"menu-box__doc"},[r("img",{attrs:{src:n("iQH9"),alt:"中山大学课程项目组队管理平台"}}),e._v(" "),r("p",[e._v("中山大学课程项目组队信息管理平台")])]),e._v(" "),r("el-menu-item",{staticClass:"menu-box__new",attrs:{index:"/home/NewPro"},on:{click:e.hideHint}},[e._v("新建项目")]),e._v(" "),r("el-menu-item",{staticClass:"menu-box__list",attrs:{index:"/home/ProList"},on:{click:e.hideHint}},[e._v("项目列表")]),e._v(" "),r("el-menu-item",{staticClass:"menu-box__mine",attrs:{index:"/home/MyPro"},on:{click:e.hideHint}},[e._v("我的项目")])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isHintShow,expression:"isHintShow"}],staticClass:"hint"},[r("p",{staticClass:"hint__header"},[e._v("操作指引")]),e._v(" "),e._m(0)]),e._v(" "),r("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hint__content"},[t("ul",[t("li",[t("p",[this._v("如果您有自己的想法，可以点击右上方菜单-新建项目，填写相关项目信息，建立一组")])]),this._v(" "),t("li",[t("p",[this._v("如果您暂时没有什么想法，可以点击右上方菜单-项目列表，查看已有的项目组队情况，选择您喜欢的队伍，联系该队伍的组长获取到该项目的密码，点击加入该组按钮，输入项目密码进行加入操作")])]),this._v(" "),t("li",[t("p",[this._v("点击右上方菜单-我的项目，可以查看您加入的或者创建的项目组队情况")])])])])}]};var k=n("C7Lr")(D,P,!1,function(e){n("FlXR")},"data-v-7f1e6492",null).exports,$={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},randomColor:function(e,t){return"rgb("+this.randomNum(e,t)+","+this.randomNum(e,t)+","+this.randomNum(e,t)+")"},drawPic:function(){var e=document.getElementById("s-canvas").getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var t=0;t<this.identifyCode.length;t++)this.drawText(e,this.identifyCode[t],t);this.drawLine(e),this.drawDot(e)},drawText:function(e,t,n){e.fillStyle=this.randomColor(this.colorMin,this.colorMax),e.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var r=(n+1)*(this.contentWidth/(this.identifyCode.length+1)),a=this.randomNum(this.fontSizeMax,this.contentHeight-5),s=this.randomNum(-45,45);e.translate(r,a),e.rotate(s*Math.PI/180),e.fillText(t,0,0),e.rotate(-s*Math.PI/180),e.translate(-r,-a)},drawLine:function(e){for(var t=0;t<8;t++)e.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),e.beginPath(),e.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.stroke()},drawDot:function(e){for(var t=0;t<100;t++)e.fillStyle=this.randomColor(0,255),e.beginPath(),e.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),e.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"s-canvas"},[t("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]},M={name:"regist",data:function(){return{identifyCodes:"1234567890",identifyCode:"",errorInfo:!1,student:{name:"",password:"",checkPass:"",validate:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}],checkPass:[{required:!0,message:"请再次输入密码",trigger:"change"}],validate:[{required:!0,message:"请输入验证码",trigger:"change"}]}}},components:{"s-identify":n("C7Lr")($,S,!1,null,null,null).exports},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{submitForm:function(e){this.$router.replace("/home");var t=this;t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;localStorage.setItem("ms_username",t.student.name),localStorage.setItem("ms_user",d()(t.student)),console.log(d()(t.student)),t.$http.post("/api/user/regist",d()(t.student)).then(function(e){console.log(e),-1===e.data?(t.errorInfo=!0,t.errInfo="该用户不存在",console.log("该用户不存在")):0===e.data?(console.log("密码错误"),t.errorInfo=!0,t.errInfo="密码错误"):200===e.status&&t.$router.push("/readme")}).then(function(e){console.log(e)})})},handleCommand:function(){this.$router.push("/register")},randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(e,t){for(var n=0;n<t;n++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];console.log(this.identifyCode)}}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"regist"},[n("div",{staticClass:"regist-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"regist-wrap__box"},[n("el-form",{ref:"student",staticClass:"regist-wrap__box__content",attrs:{model:e.student,rules:e.rules,"label-width":"0px"}},[e.errorInfo?n("div",{staticClass:"regist-wrap__box__content__err"},[n("span",[e._v(e._s(e.errInfo))])]):e._e(),e._v(" "),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:"账号/学工号"},model:{value:e.student.name,callback:function(t){e.$set(e.student,"name",t)},expression:"student.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("student")}},model:{value:e.student.password,callback:function(t){e.$set(e.student,"password",t)},expression:"student.password"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password",placeholder:"确认密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("student")}},model:{value:e.student.checkPass,callback:function(t){e.$set(e.student,"checkPass",t)},expression:"student.checkPass"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"validate"}},[n("el-input",{staticClass:"validate-code",attrs:{placeholder:"验证码"},model:{value:e.student.validate,callback:function(t){e.$set(e.student,"validate",t)},expression:"student.validate"}}),e._v(" "),n("div",{staticClass:"code",on:{click:e.refreshCode}},[n("s-identify",{attrs:{identifyCode:e.identifyCode}})],1)],1),e._v(" "),n("div",{staticClass:"regist-wrap__box__content__btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("student")}}},[e._v("注册")])],1)],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"regist-wrap__title"},[t("img",{attrs:{src:n("iQH9"),alt:"中山大学logo"}}),this._v(" "),t("p",[this._v("中山大学课程项目组队信息管理网站")])])}]};var E=n("C7Lr")(M,H,!1,function(e){n("ci8y")},null,null).exports;r.default.use(g.a);var F=new g.a({mode:"hash",routes:[{path:"/",name:"Login",component:m},{path:"/regist",name:"Regist",component:E},{path:"/home",name:"Home",component:k,children:[{path:"/home/MyPro",name:"MyPro",component:b},{path:"/home/NewPro",name:"NewPro",component:I},{path:"/home/ProList",name:"ProList",component:C}]}]});r.default.use(v.a),r.default.config.productionTip=!1,r.default.prototype.$api=i,new r.default({el:"#app",router:F,components:{App:f},template:"<App/>"})},OyTc:function(e,t){},Snu1:function(e,t){},ci8y:function(e,t){},e1H2:function(e,t){},iQH9:function(e,t,n){e.exports=n.p+"static/img/logo.6f01a24.png"},isql:function(e,t){},nhAa:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dad0279f39093d4fde7d.js.map