(this.webpackJsonpfleetech=this.webpackJsonpfleetech||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(19),a=n.n(s),r=n(29),i=n(21),o=n(9),l=n(15),u=n(14),j=n(32),d=n(28);d.a.initializeApp({apiKey:"AIzaSyBuqaomcvf7LW3PqgvrpzIZTESqHsiJgno",authDomain:"fletech.firebaseapp.com",messagingSenderId:"326620542095",projectId:"fletech",storageBucket:"fletech.appspot.com",appId:"1:326620542095:web:722a3a96847948264d6cfa"});var b=d.a,m=n(3),h=Object(c.createContext)();function f(e){var t=b.auth(),n=Object(j.a)(t),c=Object(l.a)(n,2),s=c[0],a=c[1];return console.log(s),Object(m.jsx)(h.Provider,{value:{user:s,loading:a},children:e.children})}function x(){var e=Object(c.useContext)(h).user,t=Object(u.d)(),n=Object(c.useState)(!1),s=Object(l.a)(n,2),a=s[0],r=s[1],j=Object(c.useRef)(""),d=Object(c.useRef)("");return null!==e?Object(m.jsx)(o.a,{to:"/"}):Object(m.jsx)("div",{className:"d-flex justify-content-center align-items-centers",children:Object(m.jsxs)("div",{className:"col-lg-5 col-md-7 col-10 mt-5 py-4 px-5 shadow rounded auth-container",children:[Object(m.jsx)("h1",{className:"text-center mb-4",children:"Sign In"}),Object(m.jsxs)("form",{className:"px-lg-5 px-md-3 mt-3 mb-4 d-flex flex-column justify-content-between",onSubmit:function(e){return function(e){r(!0),e.preventDefault(),b.auth().signInWithEmailAndPassword(j.current.value,d.current.value).then((function(e){r(!1)})).catch((function(e){r(!1),t.error(e.message)}))}(e)},children:[Object(m.jsx)("input",{placeholder:"Email",ref:j,type:"email",required:!0}),Object(m.jsx)("input",{placeholder:"Password",ref:d,type:"password",required:!0}),Object(m.jsx)("button",{className:"btn btn-success w-100 align-self-center",type:"submit",children:a?"Loading...":"Sign In"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"w-100 d-flex flex-lg-row flex-md-row flex-sm-column flex-xsm-column flex-column flex-wrap justify-content-around align-items-center mb-4",style:{columnGap:"1rem",rowGap:"0.5rem"},children:[Object(m.jsxs)("button",{className:"btn btn-light d-flex align-items-center shadow",style:{columnGap:"0.5rem"},onClick:function(){var e=new b.auth.GoogleAuthProvider;b.auth().signInWithPopup(e).then((function(e){console.log(e)})).catch((function(e){t.error(e.message)}))},children:[Object(m.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png",className:"m-0"}),"       Google"]}),Object(m.jsx)("p",{children:"or"}),Object(m.jsx)("button",{className:"btn shadow btn-primary",onClick:function(){b.auth().signInAnonymously().then((function(e){console.log(e)})).catch((function(e){t.error(e.message)}))},children:"Annonymously"})]}),Object(m.jsx)("p",{className:"text-center mb-3",children:Object(m.jsx)(i.b,{to:"/signUp",children:"Create an account"})})]})})}function p(){var e=Object(c.useContext)(h).user,t=Object(u.d)(),n=Object(c.useState)(""),s=Object(l.a)(n,2),a=s[0],r=s[1],j=Object(c.useState)(""),d=Object(l.a)(j,2),f=d[0],x=d[1],p=Object(c.useState)(""),O=Object(l.a)(p,2),g=O[0],v=O[1],w=Object(c.useState)(!1),y=Object(l.a)(w,2),S=y[0],N=y[1];return null!==e?Object(m.jsx)(o.a,{to:"/"}):Object(m.jsx)("div",{className:"d-flex justify-content-center align-items-centers",children:Object(m.jsxs)("div",{className:"col-lg-5 col-md-7 col-10 mt-5 py-4 px-5 shadow rounded auth-container",children:[Object(m.jsx)("h1",{className:"text-center mb-4",children:"Sign Up"}),Object(m.jsxs)("form",{className:"px-lg-5 px-md-3 mt-3 mb-4 d-flex flex-column justify-content-between",onSubmit:function(e){return function(e){N(!0),e.preventDefault(),b.auth().createUserWithEmailAndPassword(a,f).then((function(e){N(!1)})).catch((function(e){N(!1),t.error(e.message)}))}(e)},children:[Object(m.jsx)("input",{placeholder:"Email",type:"email",onChange:function(e){return r(e.target.value)},required:!0}),Object(m.jsx)("input",{placeholder:"Password",type:"password",onChange:function(e){return x(e.target.value)},required:!0}),Object(m.jsx)("input",{placeholder:"Confirm Password",type:"password",onChange:function(e){return v(e.target.value)},required:!0}),Object(m.jsx)("button",{className:"btn btn-success w-100 align-self-center",disabled:""===f||g!==f,type:"submit",children:S?"Loading...":"Sign Up"})]}),Object(m.jsx)("p",{className:"text-center mb-3",children:Object(m.jsx)(i.b,{to:"/signIn",children:"Already have an account"})})]})})}var O=n(34),g={positions:u.b.TOP_RIGHT,timeout:5e3,offset:"20px",transitions:u.c.FADE};function v(){var e=Object(c.useContext)(h).user,t=b.firestore(),n=Object(c.useRef)(""),s=Object(u.d)();return Object(m.jsxs)("form",{onSubmit:function(c){return function(c){c.preventDefault(),t.collection("weights").add({userId:e.uid,weight:n.current.value,timeStamp:b.firestore.FieldValue.serverTimestamp()}).then((function(){s.success("Weight Added Succesfully"),n.current.value=""})).catch((function(e){s.error(e.message),n.current.value=""}))}(c)},className:"d-flex align-items-center mt-5 mb-3 mx-auto add-weight",children:[Object(m.jsx)("input",{type:"number",ref:n,required:!0,placeholder:"Enter weight",step:"any"}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add Weight"})]})}function w(e){var t=Object(u.d)();return Object(m.jsxs)("div",{className:"shadow px-lg-4 px-md-4 px-2 d-flex py-1 justify-content-between align-items-center navigation",children:[Object(m.jsx)("h4",{children:"Weight Tracker"}),null!==e.user?Object(m.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){b.auth().signOut().then((function(e){})).catch((function(e){t.error(e.message)}))},children:"Sign out"}):Object(m.jsx)(m.Fragment,{})]})}function y(e){var t,n=Object(c.useState)(!1),s=Object(l.a)(n,2),a=s[0],r=s[1],i=null===(t=e.snapShot.data().timeStamp)||void 0===t?void 0:t.seconds;i=new Date(1e3*i).toLocaleDateString();var o=b.firestore(),j=Object(u.d)(),d=Object(c.useRef)(e.snapShot.data().weight);return Object(m.jsxs)("div",{className:"w-75 py-3 rounded d-flex align-items-center justify-content-around weight-item",children:[a?Object(m.jsx)("input",{type:"number",ref:d,step:"any",defaultValue:e.snapShot.data().weight}):Object(m.jsx)("p",{className:"text-center",children:e.snapShot.data().weight}),Object(m.jsx)("p",{className:"text-center",children:"Invalid Date"===i?"":i}),Object(m.jsxs)("div",{className:"d-flex justify-content-around align-items-center",style:{columnGap:"1rem"},children:[a?Object(m.jsx)("i",{className:"fa fa-check text-success",onClick:function(){if(""===d.current.value)return d.current.value=e.snapShot.data().weight,void r(!1);o.collection("weights").doc(e.snapShot.id).update({weight:d.current.value}).then((function(e){r(!1)})).catch((function(t){j.error("Something went wrong"),d.current.value=e.snapShot.data().weight,r(!1)}))}}):Object(m.jsx)("i",{className:"fa fa-edit",onClick:function(){return r(!a)}}),Object(m.jsx)("i",{className:"fa fa-trash",onClick:function(){o.collection("weights").doc(e.snapShot.id).delete().then((function(){j.success("Deleted Successfully")})).catch((function(e){j.error("Something Went Wron")}))}})]})]},e.snapShot.id)}function S(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(h).user;return Object(c.useEffect)((function(){var e=b.firestore().collection("weights").orderBy("timeStamp","desc").where("userId","==",a.uid).onSnapshot((function(e){var t=[];e.docs.map((function(e,n){return t.push(Object(m.jsx)(y,{snapShot:e},n))})),s(t)}));return function(){e()}}),[]),Object(m.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-between weights-container",children:n})}function N(){var e=Object(c.useContext)(h).user;b.firestore().re;return null===e?Object(m.jsx)(o.a,{to:"/signIn"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{user:e}),Object(m.jsxs)("div",{className:"col-lg-10 col-md-11 col-12 mx-lg-auto mx-md-auto py-3",children:[Object(m.jsx)("div",{className:"d-flex justify-content-center mt-5 mb-3",children:Object(m.jsx)(v,{})}),Object(m.jsx)(S,{})]})]})}var C=n(35),I=n.n(C);var k=function(){var e=Object(c.useContext)(h),t=e.user,n=e.loading;return console.log(t,n),!0===n?Object(m.jsx)(I.a,{background:"#D3D3D3",loaderColor:"#3498db"}):Object(m.jsx)(u.a,Object(r.a)(Object(r.a)({template:O.a},g),{},{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/signIn",render:function(){return null===t?Object(m.jsx)(x,{}):Object(m.jsx)(o.a,{to:"/"})}}),Object(m.jsx)(o.b,{exact:!0,path:"/signUp",render:function(){return null===t?Object(m.jsx)(p,{}):Object(m.jsx)(o.a,{to:"/"})}}),Object(m.jsx)(o.b,{exact:!0,path:"/",render:function(){return null!==t?Object(m.jsx)(N,{}):Object(m.jsx)(o.a,{to:"/signIn"})}})]})})}))};a.a.render(Object(m.jsx)(f,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1873272b.chunk.js.map