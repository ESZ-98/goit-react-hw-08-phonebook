"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{518:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(439),r=n(791),s=n(434),i=n(812),o="UserForm_container__Wfyic",u="UserForm_form__Rtz4A",c="UserForm_button__pDShj",l=n(184),m=function(e){var t=e.typeOfForm,n=(0,r.useState)(""),m=(0,a.Z)(n,2),f=m[0],p=m[1],d=(0,r.useState)(""),h=(0,a.Z)(d,2),g=h[0],v=h[1],_=(0,r.useState)(""),j=(0,a.Z)(_,2),x=j[0],w=j[1],b=(0,s.I0)(),Z=function(e,t,n,a){"Register"===e?function(e,t,n){if(n.length<6)alert("Password must be at least 7 characters long");else{var a={name:"".concat(e),email:"".concat(t),password:"".concat(n)};b(i.Z.register(a))}}(t,n,a):function(e,t){var n={email:e,password:t};b(i.Z.logIn(n))}(n,a)},k=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?v(a):"name"===n?p(a):w(a)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Z(t,f,g,x),function(e){"Register"===e?(p(""),v(""),w("")):(v(""),w(""))}()},className:o+u,children:["Register"===t&&(0,l.jsx)("input",{type:"text",name:"name",title:"Your username for this site",onChange:k,value:f,required:!0}),(0,l.jsx)("input",{type:"email",name:"email",title:"Must contain @ and the site, e.g. john.doe@example.com",onChange:k,value:g,required:!0}),(0,l.jsx)("input",{type:"password",name:"password",title:"Make sure to remember it well.",onChange:k,value:x,required:!0}),(0,l.jsx)("button",{type:"submit",className:c,children:"Register"===t?t:"Log In"})]})})}},285:function(e,t,n){n.r(t);n(791);var a=n(518),r=n(58),s=n(184);t.default=function(){return(0,s.jsx)("div",{className:r.Z.background,children:(0,s.jsx)("div",{className:r.Z.container,children:(0,s.jsx)(a.Z,{typeOfForm:"Register"})})})}}}]);
//# sourceMappingURL=285.e1f4ac12.chunk.js.map