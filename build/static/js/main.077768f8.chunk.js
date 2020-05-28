(this["webpackJsonpbetter-professor"]=this["webpackJsonpbetter-professor"]||[]).push([[0],{45:function(e,a,t){e.exports=t(57)},50:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),o=t.n(l),m=t(15),i=(t(50),t(84)),c=t(6),u=t(42),s=Object(u.a)({palette:{common:{blue:"".concat("#2196F3")},primary:{main:"".concat("#2196F3")},secondary:{main:"".concat("#0A2738")}},typography:{fontFamily:"Roboto"}}),d=t(19),p=t(12),h=t(22),b=function(){var e=Object(n.useState)({name:"",email:"",password:"",confirm:""}),a=Object(h.a)(e,2),t=a[0],l=a[1],o=function(e){l(Object(p.a)(Object(p.a)({},t),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"login-container"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(e)}},r.a.createElement("label",null,"Full Name",r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your full name",value:t.name,onChange:o})),r.a.createElement("label",null,"Email",r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter your email address",value:t.email,onChange:o})),r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"Create a password",value:t.password,onChange:o})),r.a.createElement("label",null,"Confirm password",r.a.createElement("input",{type:"password",name:"name",placeholder:"Re-enter password",value:t.confirm,onChange:o})),r.a.createElement("button",null,"Create Account")))},E=t(86),f=t(81),N=t(82),g=t(85),y=t(83);function v(e){return r.a.createElement(E.a,{position:"relative"},r.a.createElement(f.a,null,r.a.createElement(N.a,{variant:"h4"},"Better Professor"),r.a.createElement(g.a,{classes:!0},r.a.createElement(y.a,{component:m.b,to:"/",label:"Home"}),r.a.createElement(y.a,{component:m.b,to:"/about",label:"About"}),r.a.createElement(y.a,{component:m.b,to:"/signup",label:"Sign Up"}),r.a.createElement(y.a,{component:m.b,to:"/login",label:"Login"}),r.a.createElement(y.a,{component:m.b,to:"/dashboard",label:"Dashboard"}))))}var C=t(21),w=function(e){return r.a.createElement("div",{className:"student",key:e.key,style:{border:"2px dashed black"}},r.a.createElement("h3",null,e.student.firstName," ",e.student.middleName," ",e.student.lastName),r.a.createElement("p",null,"ID#: ",r.a.createElement("strong",null,e.student.studentNumber)),r.a.createElement("p",null,"Class Year: ",r.a.createElement("strong",null,e.student.classYear)),r.a.createElement("p",null,"Email: ",r.a.createElement("strong",null,e.student.studentEmail)),r.a.createElement("div",{style:{border:"2px solid navy",width:"80%",margin:"15px 10%"}},r.a.createElement("h4",null,"Student's Projects"),e.projects.map((function(e){return r.a.createElement("div",{key:e.id,style:{border:"2px dashed black",width:"70%",padding:"5px",margin:"15px 15%"}},r.a.createElement("h5",null,e.name),r.a.createElement("p",null,"Due Date: ",r.a.createElement("strong",null,e.dueDate)),r.a.createElement("p",null,"Description: ",r.a.createElement("strong",null,e.description)))}))))},j=Object(C.b)((function(e){return{students:e.students}}),{})((function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Professor's Dashboard"),r.a.createElement(m.b,{to:"/add-student"},r.a.createElement("button",null,"Add Student")),r.a.createElement("div",{className:"dashboard-container"},e.students.map((function(e){return r.a.createElement(w,{key:e.id,student:e,projects:e.projects})}))))})),x={firstName:"",middleName:"",lastName:"",studentNumber:"",classYear:"",studentEmail:"",projects:[]},D=Object(C.b)((function(e){return{students:e.students}}),{addStudent:function(e){return function(a){a({type:"ADD_STUDENT",payload:e})}}})((function(e){var a=Object(n.useState)(x),t=Object(h.a)(a,2),l=t[0],o=t[1],m=function(e){e.preventDefault(),o(Object(p.a)(Object(p.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Student"),r.a.createElement("form",{className:"form",onSubmit:function(a){a.preventDefault(),e.addStudent(l),e.history.push("/dashboard")}},r.a.createElement("div",null,r.a.createElement("label",{className:"form-label",htmlFor:"inputFirstName"},"First Name: "),r.a.createElement("input",{type:"text",name:"firstName",id:"inputFirstName",placeholder:"ex. Neil",autoFocus:"true",width:30,value:l.firstName,onChange:m,required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"inputMiddle"},"Middle Name: "),r.a.createElement("input",{type:"text",name:"middleName",id:"inputMiddle",placeholder:"ex. Alden",width:30,value:l.middleName,onChange:m}),r.a.createElement("label",{className:"form-label",htmlFor:"inputLastName"},"Last Name: "),r.a.createElement("input",{type:"text",name:"lastName",id:"inputLastName",placeholder:"ex. Armstrong",width:30,value:l.lastName,onChange:m,required:!0})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"form-label",htmlFor:"inputStudentNumber"},"Student Number: "),r.a.createElement("input",{type:"number",name:"studentNumber",id:"inputStudentNumber",placeholder:"ex. 11183021",maxLength:8,width:30,value:l.studentNumber,onChange:m,required:!0})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h4",null,"Class Year"),r.a.createElement("input",{type:"radio",id:"radioFreshman",name:"classYear",value:"Freshman",checked:l.classYear="Freshman",onChange:m}),r.a.createElement("label",{htmlFor:"radioFreshman"}," Freshman"),r.a.createElement("input",{type:"radio",id:"radioSophmore",name:"classYear",value:"Sophmore",checked:l.classYear="Sophmore",onChange:m}),r.a.createElement("label",{htmlFor:"radioSophmore"}," Sophmore"),r.a.createElement("input",{type:"radio",id:"radioJunior",name:"classYear",value:"Junior",checked:l.classYear="Junior",onChange:m}),r.a.createElement("label",{htmlFor:"radioJunior"}," Junior"),r.a.createElement("input",{type:"radio",id:"radioSenior",name:"classYear",value:"Senior",checked:l.classYear="Senior",onChange:m}),r.a.createElement("label",{htmlFor:"radioSenior"}," Senior")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"form-label",htmlFor:"inputEmail"},"Student Email: "),r.a.createElement("input",{type:"email",name:"studentEmail",id:"inputEmail",placeholder:"myemail@school.edu",width:30,value:l.studentEmail,onChange:m,required:!0})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("button",null,"Clear"))))})),S=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(h.a)(e,2),t=a[0],l=a[1],o=function(e){l(Object(p.a)(Object(p.a)({},t),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"login-container"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",null,r.a.createElement("label",null,"Email",r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter your email address",value:t.email,onChange:o})),r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"Create a password",value:t.password,onChange:o})),r.a.createElement("button",null,"Log In")))};t(56);var F=function(){return r.a.createElement(i.a,{theme:s},r.a.createElement(v,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:function(){return r.a.createElement("h1",null,"Home")}}),r.a.createElement(c.a,{exact:!0,path:"/about",component:function(){return r.a.createElement("h1",null,"About")}}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:b}),r.a.createElement(c.a,{exact:!0,path:"/login",component:S}),r.a.createElement(c.a,{path:"/dashboard",component:j}),r.a.createElement(c.a,{path:"/add-student",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(28),A=t(41),R={students:[{id:1,firstName:"Meridith",middleName:"Nigella",lastName:"Rickard",studentNumber:11389538,classYear:"Sophmore",studentEmail:"meridith-rickard@school.edu",projects:[{id:1,name:"Create Hobby Website",dueDate:"03/03/2021",description:"Create a website about your favorite hobby."},{id:2,name:"Create Todo App",dueDate:"03/23/2021",description:"Create an app where the user can create a todo list."},{id:3,name:"Create a React App with Redux",dueDate:"04/01/2021",description:"Create a React app that uses redux for state management."}]},{id:2,firstName:"Paquito",middleName:"Julia",lastName:"Cu\xe9llar",studentNumber:11166997,classYear:"Junior",studentEmail:"paquito-cuellar@school.edu",projects:[{id:1,name:"Create Hobby Website",dueDate:"03/03/2021",description:"Create a website about your favorite hobby."},{id:2,name:"Create Todo App",dueDate:"03/23/2021",description:"Create an app where the user can create a todo list."},{id:3,name:"Create a React App with Redux",dueDate:"04/01/2021",description:"Create a React app that uses redux for state management."}]},{id:3,firstName:"Russell",middleName:"Eldred",lastName:"Taft",studentNumber:11630960,classYear:"Sophmore",studentEmail:"russell-taft@school.edu",projects:[{id:1,name:"Create Hobby Website",dueDate:"03/03/2021",description:"Create a website about your favorite hobby."},{id:2,name:"Create Todo App",dueDate:"03/23/2021",description:"Create an app where the user can create a todo list."},{id:3,name:"Create a React App with Redux",dueDate:"04/01/2021",description:"Create a React app that uses redux for state management."}]},{id:4,firstName:"Lupita",middleName:"Dolores",lastName:"L\xf3pez",studentNumber:11061466,classYear:"Senior",studentEmail:"lupita-lopez@school.edu",projects:[{id:1,name:"Create Hobby Website",dueDate:"03/03/2021",description:"Create a website about your favorite hobby."},{id:2,name:"Create Todo App",dueDate:"03/23/2021",description:"Create an app where the user can create a todo list."},{id:3,name:"Create a React App with Redux",dueDate:"04/01/2021",description:"Create a React app that uses redux for state management."}]},{id:5,firstName:"Hylda",middleName:"Thornton",lastName:"Ellsworth",studentNumber:11342406,classYear:"Junior",studentEmail:"hylda-ellsworth@school.edu",projects:[{id:1,name:"Create Hobby Website",dueDate:"03/03/2021",description:"Create a website about your favorite hobby."},{id:2,name:"Create Todo App",dueDate:"03/23/2021",description:"Create an app where the user can create a todo list."},{id:3,name:"Create a React App with Redux",dueDate:"04/01/2021",description:"Create a React app that uses redux for state management."}]}]},Y=Object(O.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_STUDENT":return Object(p.a)(Object(p.a)({},e),{},{students:e.students.concat(a.payload)});default:return e}}),Object(O.a)(A.a));o.a.render(r.a.createElement(C.a,{store:Y},r.a.createElement(m.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.077768f8.chunk.js.map