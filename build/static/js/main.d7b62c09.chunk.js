(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{19:function(e,t,n){e.exports={Employees:"Employees_Employees__1ufSJ"}},20:function(e,t,n){e.exports={Employee:"Employee_Employee__3ISAy"}},25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),o=n(18),s=n.n(o),c=(n(25),n(3)),i=n(4),p=n(6),r=n(5),m=(n(26),n(19)),y=n.n(m),u=n(20),d=n.n(u),h=n(0),j=function(e){Object(p.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:d.a.Employee,onClick:function(){e.props.showSelectedEmployee(e.props.id)},children:["Name: ",this.props.name]})}}]),n}(a.Component),E=function(e){Object(p.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.employees.map((function(t,n){return Object(h.jsx)(j,{name:t.employee_name,showSelectedEmployee:e.props.showSelectedEmployee,id:t.id},t.id)}));return Object(h.jsx)("div",{className:y.a.Employees,children:t})}}]),n}(a.Component),b=n(7),f=n.n(b),v=n(8),O=n.n(v),x=function(e){Object(p.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:O.a.EmployeeDetails,children:[Object(h.jsxs)("div",{className:O.a.EmployeeDetails,children:["Name: ",this.props.name]}),Object(h.jsxs)("div",{className:O.a.EmployeeDetails,children:["Salary: ",this.props.salary]}),Object(h.jsxs)("div",{className:O.a.EmployeeDetails,children:["Age: ",this.props.age]})]})}}]),n}(a.Component),g=function(e){Object(p.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],selectedEmployee:null},e.showSelectedEmployeeHandler=function(t){console.log("Employee nr: "+t),f.a.get("http://dummy.restapiexample.com/api/v1/employee/"+t).then((function(t){e.setState({selectedEmployee:t.data})}))},e.saveEmployeeHandler=function(){f.a.post("http://dummy.restapiexample.com/api/v1/create",{name:"Maria123",salary:4500,age:25}).then((function(e){console.log(e)}))},e.deleteEmployeeHandler=function(){f.a.delete("http://dummy.restapiexample.com/api/v1/delete/2").then((function(e){console.log(e)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://dummy.restapiexample.com/api/v1/employees",null).then((function(t){console.log(t),console.log(t.data.data);var n=t.data.data;e.setState({employees:n})}))}},{key:"render",value:function(){var e=null;return null!==this.state.selectedEmployee&&(e=Object(h.jsx)(x,{name:this.state.selectedEmployee.employee_name,salary:this.state.selectedEmployee.employee_salary,age:this.state.selectedEmployee.employee_age})),Object(h.jsxs)("div",{className:"App",children:[e,Object(h.jsx)("h1",{children:"Employees"}),Object(h.jsx)(E,{employees:this.state.employees,showSlectedEmployee:this.showSelectedEmployeeHandler}),Object(h.jsx)("button",{onClick:this.saveEmployeeHandler,className:"UpdateButton",children:"Save Employee"}),Object(h.jsx)("button",{onClick:this.deleteEmployeeHandler,className:"UpdateButton",children:"Delete Employee"})]})}}]),n}(a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),l(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),_()},8:function(e,t,n){e.exports={EmployeeDetails:"EmployeeDetails_EmployeeDetails__1NXa7",EmployeeDetailsDiv:"EmployeeDetails_EmployeeDetailsDiv__i8flG"}}},[[46,1,2]]]);
//# sourceMappingURL=main.d7b62c09.chunk.js.map