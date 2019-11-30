webpackJsonp([1],{"+rSn":function(e,t){},"09yM":function(e,t){},"1asC":function(e,t){},EfF6:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("xd7I"),r=n("3cXf"),s=n.n(r),o={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},randomColor:function(e,t){return"rgb("+this.randomNum(e,t)+","+this.randomNum(e,t)+","+this.randomNum(e,t)+")"},drawPic:function(){var e=document.getElementById("s-canvas").getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var t=0;t<this.identifyCode.length;t++)this.drawText(e,this.identifyCode[t],t);this.drawLine(e),this.drawDot(e)},drawText:function(e,t,n){e.fillStyle=this.randomColor(this.colorMin,this.colorMax),e.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var a=(n+1)*(this.contentWidth/(this.identifyCode.length+1)),r=this.randomNum(this.fontSizeMax,this.contentHeight-5),s=this.randomNum(-45,45);e.translate(a,r),e.rotate(s*Math.PI/180),e.fillText(t,0,0),e.rotate(-s*Math.PI/180),e.translate(-a,-r)},drawLine:function(e){for(var t=0;t<8;t++)e.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),e.beginPath(),e.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),e.stroke()},drawDot:function(e){for(var t=0;t<100;t++)e.fillStyle=this.randomColor(0,255),e.beginPath(),e.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),e.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"s-canvas"},[t("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]},u={name:"login",data:function(){return{identifyCodes:"1234567890",identifyCode:"",errorInfo:!1,student:{name:"",password:"",validate:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],validate:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},components:{"s-identify":n("C7Lr")(o,l,!1,null,null,null).exports},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{submitForm:function(e){this.$router.replace("/home");var t=this;t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;localStorage.setItem("ms_username",t.student.name),localStorage.setItem("ms_user",s()(t.student)),console.log(s()(t.student)),t.$http.post("/api/user/login",s()(t.student)).then(function(e){console.log(e),-1===e.data?(t.errorInfo=!0,t.errInfo="该用户不存在",console.log("该用户不存在")):0===e.data?(console.log("密码错误"),t.errorInfo=!0,t.errInfo="密码错误"):200===e.status&&t.$router.push("/readme")}).then(function(e){console.log(e)})})},handleCommand:function(){this.$router.push("/register")},randomNum:function(e,t){return Math.floor(Math.random()*(t-e)+e)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(e,t){for(var n=0;n<t;n++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];console.log(this.identifyCode)}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"login-wrap__box"},[n("el-form",{ref:"student",staticClass:"login-wrap__box__content",attrs:{model:e.student,rules:e.rules,"label-width":"0px"}},[e.errorInfo?n("div",{staticClass:"login-wrap__box__content__err"},[n("span",[e._v(e._s(e.errInfo))])]):e._e(),e._v(" "),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:"账号/学工号"},model:{value:e.student.name,callback:function(t){e.$set(e.student,"name",t)},expression:"student.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("student")}},model:{value:e.student.password,callback:function(t){e.$set(e.student,"password",t)},expression:"student.password"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"validate"}},[n("el-input",{staticClass:"validate-code",attrs:{placeholder:"验证码"},model:{value:e.student.validate,callback:function(t){e.$set(e.student,"validate",t)},expression:"student.validate"}}),e._v(" "),n("div",{staticClass:"code",on:{click:e.refreshCode}},[n("s-identify",{attrs:{identifyCode:e.identifyCode}})],1)],1),e._v(" "),n("div",{staticClass:"login-wrap__box__content__btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("student")}}},[e._v("登录")])],1),e._v(" "),n("p",{staticClass:"login-wrap__box__content__register",on:{click:function(t){return e.handleCommand()}}},[e._v("注册")])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-wrap__title"},[t("img",{attrs:{src:n("iQH9"),alt:"中山大学logo"}})])}]};var d=n("C7Lr")(u,i,!1,function(e){n("EfF6"),n("UqFa")},"data-v-2a1737de",null).exports,c={name:"App",components:{"v-login":d}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var p=n("C7Lr")(c,m,!1,function(e){n("W5Os")},null,null).exports,f=n("TcQY"),h=n.n(f),N=(n("09yM"),n("7LQH")),v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-pro"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.testData,border:""}},[n("el-table-column",{attrs:{align:"center",prop:"courseName",label:"单位名称（课程名）",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"id",label:"项目编号",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"leaderName",label:"组长姓名",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"projectName",label:"项目名称",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"group.length",label:"小组人数",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"组员信息",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ul",e._l(t.row.group,function(t,a){return n("li",{key:a},[n("span",[e._v(e._s(t.studentID))]),e._v("\n                        -\n                        "),n("span",[e._v(e._s(t.studentName))]),e._v(" "),n("span",[n("el-button",{staticClass:"delete",attrs:{type:"primary",icon:"el-icon-delete"}})],1)])}),0)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary"}},[e._v("添加成员")])]}}])})],1)],1)},staticRenderFns:[]};var g=n("C7Lr")({name:"MyPro",data:function(){return{testData:[{courseName:"计算机网络实验",id:"001",leaderName:"张xx",projectName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"016",leaderName:"张xx",projectName:"网络传输速率研究四网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]}]}}},v,!1,function(e){n("ygan")},"data-v-c1413fa0",null).exports,b={name:"NewPro",data:function(){var e=this;return{labelPosition:"right",newPro:{studentName:"",studentID:"",courseName:"",proName:"",date1:"",date2:"",proDesc:"",pass:"",checkPass:""},rules:{studentName:[{type:"string",required:!0,message:"请输入组长姓名",trigger:"blur"}],studentID:[{type:"number",required:!0,message:"请输入组长学号",trigger:"blur"}],courseName:[{type:"string",required:!0,message:"请输入课程名",trigger:"blur"}],proName:[{type:"string",required:!0,message:"请输入项目名称",trigger:"blur"}],data1:[{type:"string",required:!0,trigger:"blur"}],data2:[{type:"string",required:!0,trigger:"blur"}],proDesc:[{type:"string",required:!0,message:"请输入项目描述",trigger:"blur"}],pass:[{validator:function(t,n,a){""===n?a(new Error("请输入密码")):(""!==e.newPro.checkPass&&e.$refs.newPro.validateField("checkPass"),a())},required:!0,rigger:"blur"}],checkPass:[{validator:function(t,n,a){""===n?a(new Error("请再次输入密码")):n!==e.newPro.pass?a(new Error("两次输入密码不一致!")):a()},required:!0,trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create-wrap"},[n("el-form",{ref:"newPro",attrs:{model:e.newPro,rules:e.rules,"status-icon":"","label-width":"120px","label-position":e.labelPosition}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"组长姓名:",prop:"studentName"}},[n("el-input",{model:{value:e.newPro.studentName,callback:function(t){e.$set(e.newPro,"studentName",t)},expression:"newPro.studentName"}})],1)],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"组长学号:",prop:"studentID"}},[n("el-input",{model:{value:e.newPro.studentID,callback:function(t){e.$set(e.newPro,"studentID",t)},expression:"newPro.studentID"}})],1)],1)])],1),e._v(" "),n("el-form-item",{attrs:{label:"课程名称:",prop:"courseName"}},[n("el-input",{model:{value:e.newPro.courseName,callback:function(t){e.$set(e.newPro,"courseName",t)},expression:"newPro.courseName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目名称:",prop:"proName"}},[n("el-input",{attrs:{placeholder:"用于课程组队PC端网站设计"},model:{value:e.newPro.proName,callback:function(t){e.$set(e.newPro,"proName",t)},expression:"newPro.proName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"项目描述",prop:"proDesc"}},[n("el-input",{attrs:{type:"textarea",placeholder:"项目主要采用vue.js......"},model:{value:e.newPro.proDesc,callback:function(t){e.$set(e.newPro,"proDesc",t)},expression:"newPro.proDesc"}})],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"项目密码:",prop:"pass"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.newPro.pass,callback:function(t){e.$set(e.newPro,"pass",t)},expression:"newPro.pass"}})],1)],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",[n("el-form-item",{attrs:{label:"确认密码:",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",placeholder:"请再次输入密码",autocomplete:"off"},model:{value:e.newPro.checkPass,callback:function(t){e.$set(e.newPro,"checkPass",t)},expression:"newPro.checkPass"}})],1)],1)])],1),e._v(" "),n("el-form-item",{attrs:{label:"截止时间",required:""}},[n("el-col",{attrs:{span:11}},[n("el-form-item",{attrs:{prop:"date1"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.newPro.date1,callback:function(t){e.$set(e.newPro,"date1",t)},expression:"newPro.date1"}})],1)],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-form-item",{attrs:{prop:"date2"}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.newPro.date2,callback:function(t){e.$set(e.newPro,"date2",t)},expression:"newPro.date2"}})],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("newPro")}}},[e._v("立即创建")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.resetForm("newPro")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var I=n("C7Lr")(b,_,!1,function(e){n("1asC")},"data-v-73cd4d80",null).exports,x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search-box"},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}},[n("el-select",{staticClass:"search-box__option",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[n("el-option",{staticClass:"search-box__option__1",attrs:{label:"项目编号",value:"1"}}),e._v(" "),n("el-option",{staticClass:"search-box__option__2",attrs:{label:"组长姓名",value:"2"}})],1),e._v(" "),n("el-button",{staticClass:"search-box__btn",attrs:{slot:"append",type:"primary",icon:"el-icon-search"},slot:"append"},[e._v("搜索\n            ")])],1)],1),e._v(" "),n("div",{staticClass:"pro-list"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.testData,border:""}},[n("el-table-column",{attrs:{align:"center",prop:"courseName",label:"单位名称（课程名）",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"id",label:"项目编号",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"leaderName",label:"组长姓名",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"projectName",label:"项目名称",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"group.length",label:"小组人数",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"组员信息",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ul",e._l(t.row.group,function(t,a){return n("li",{key:a},[e._v("\n                            "+e._s(t.studentID)+" - "+e._s(t.studentName)+"\n                        ")])}),0)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"}})],1)],1)])},staticRenderFns:[]};var w=n("C7Lr")({name:"ProList",data:function(){return{searchInput:"",select:"",testData:[{courseName:"计算机网络实验",id:"001",leaderName:"张xx",projectName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"002",leaderName:"张xx",projectName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"003",leaderName:"张xx",projectName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"004",leaderName:"张xx",projectName:"网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"005",leaderName:"张xx",projectName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"006",leaderName:"张xx",projectName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"007",leaderName:"张xx",projectName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"008",leaderName:"张xx",projectName:"网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"009",leaderName:"张xx",projectName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"010",leaderName:"张xx",projectName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"011",leaderName:"张xx",projectName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"012",leaderName:"张xx",projectName:"网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"013",leaderName:"张xx",projectName:"网络传输速率研究一",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"014",leaderName:"张xx",projectName:"网络传输速率研究二",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"015",leaderName:"张xx",projectName:"网络传输速率研究三",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]},{courseName:"计算机网络实验",id:"016",leaderName:"张xx",projectName:"网络传输速率研究四网络传输速率研究四",group:[{studentID:"15352001",studentName:"张三"},{studentID:"15352002",studentName:"李四"},{studentID:"15352003",studentName:"王五"},{studentID:"15352003",studentName:"赵六"}]}]}}},x,!1,function(e){n("gQ+T")},"data-v-2dccc5e3",null).exports,D={name:"Home",data:function(){return{activeIndex:"/home/MyPro"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{staticClass:"menu-box",attrs:{"default-active":e.activeIndex,mode:"horizontal",router:"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{staticClass:"menu-box__new",attrs:{index:"/home/NewPro"}},[e._v("新建项目")]),e._v(" "),n("el-menu-item",{staticClass:"menu-box__list",attrs:{index:"/home/ProList"}},[e._v("项目列表")]),e._v(" "),n("el-menu-item",{staticClass:"menu-box__mine",attrs:{index:"/home/MyPro"}},[e._v("我的项目")])],1),e._v(" "),n("router-view")],1)},staticRenderFns:[]};var C=n("C7Lr")(D,y,!1,function(e){n("+rSn")},"data-v-b3e943fa",null).exports;a.default.use(N.a);var P=new N.a({mode:"hash",routes:[{path:"/",name:"Login",component:d},{path:"/home",name:"Home",component:C,children:[{path:"/home/MyPro",name:"MyPro",component:g},{path:"/home/NewPro",name:"NewPro",component:I},{path:"/home/ProList",name:"ProList",component:w}]}]});a.default.use(h.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:P,components:{App:p},template:"<App/>"})},UqFa:function(e,t){},W5Os:function(e,t){},"gQ+T":function(e,t){},iQH9:function(e,t,n){e.exports=n.p+"static/img/logo.6f01a24.png"},ygan:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.459449642079eed578c8.js.map