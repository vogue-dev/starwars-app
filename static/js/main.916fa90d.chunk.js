(this["webpackJsonpstarwars-app"]=this["webpackJsonpstarwars-app"]||[]).push([[0],{69:function(e,t,a){e.exports=a(87)},78:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),c=a(28),i=a(27),m=a(65),s=a(32),u=a(9),p=a(100),d=r.a.memo((function(e){var t=e.login,a=e.pass,n=e.handleChange,l=e.onLogin;return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"},r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("span",null,"Login:"),r.a.createElement("input",{name:"login",type:"text",placeholder:"admin",value:t,onChange:function(e){return n(e)}}),r.a.createElement("span",null,"Password: 1111"),r.a.createElement("input",{name:"pass",type:"password",value:a,onChange:function(e){return n(e)}})),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(e){return l(e)}},"Submit")))))})),g=r.a.memo((function(e){var t=e.login,a=e.pass,n=e.handleChange,l=e.onLogin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{login:t,pass:a,handleChange:n,onLogin:l}))})),E=r.a.memo((function(e){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"},r.a.createElement("div",null,"You realy wonna to logout?"),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return alert("You logged Out!"),e.setAuth(!1),e.setSearch(""),e.setRedirect("fromLogoutPage"),void e.setSearchHistory([])}},"Submit"))))})),h=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{setAuth:e.setAuth,setSearch:e.setSearch,setRedirect:e.setRedirect,setSearchHistory:e.setSearchHistory}),")}")})),f=function(){return r.a.createElement("div",{className:"error404"},r.a.createElement("img",{src:"./img/error404.jpg",alt:"error404"}))},v=r.a.memo((function(e){var t=e.eachPerson,a=t.gender,n="";return n="male"===a?"./img/male.png":"female"===a?"./img/female.png":"n/a"===a?"./img/na.png":"hermaphrodite"===a?"./img/hermaphrodite.png":"./img/none.jpg",r.a.createElement("div",{className:"item col-sm-12 col-md-6 col-lg-4"},r.a.createElement("img",{src:n,alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("b",null,t.name)),r.a.createElement("div",null,"Gender: ",t.gender),r.a.createElement("div",null,"Height: ",t.height," sm")))})),b=r.a.memo((function(e){return e.data.map((function(e){return r.a.createElement(v,{eachPerson:e,key:e.id})}))})),w=r.a.memo((function(e){var t=e.isAuth;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tagline"},"SW Person Searcher"),r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"./img/Star_Wars_Yellow_Logo.png",alt:"logo"}))),r.a.createElement("div",{className:"login"},t?r.a.createElement(s.b,{to:"/logout"},"Logout"):r.a.createElement(s.b,{to:"/login"},"Login"))))})),S=r.a.memo((function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){document.body.addEventListener("click",a)}));var a=function(a){(a.path||a.composedPath&&a.composedPath()||a.composedPath(a.target)).includes(t.current)||e.setDropDownClose(!0)};return e.isDroppedDown?r.a.createElement("div",{className:"filter__dropped__down",ref:t},r.a.createElement("ul",null,e.data.map((function(t){return r.a.createElement("li",{key:t.id,onClick:function(){return e.onClickDropDownFilter(t.name,!0)}},t.name)})))):""})),D=r.a.memo((function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement("input",{placeholder:"Search...",value:e.searchValue,onChange:function(t){return e.filterFilms(t)}}),r.a.createElement(S,{data:e.filtered,isDroppedDown:e.isDroppedDown,setDropDownClose:e.setDropDownClose,setSearchHistory:e.setSearchHistory,searchHistory:e.searchHistory,searchValue:e.searchValue,setSearch:e.setSearch,filterFilms:e.filterFilms,setFilter:e.setFilter,onClickDropDownFilter:e.onClickDropDownFilter})))}));a(78);function y(){var e=Object(m.a)(["\n\tquery getPerson {\n\t\tallPeople {\n\t\t\tpeople {\n\t\t\t\tname\n\t\t\t\tgender\n\t\t\t\tid\n\t\t\t\theight\n\t\t\t}\n\t\t}\n\t}\n"]);return y=function(){return e},e}var C=Object(c.gql)(y()),j=function(){var e=Object(c.useQuery)(C),t=e.loading,a=e.data,l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],d=o[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),y=v[0],j=v[1],O=Object(n.useState)(!1),L=Object(i.a)(O,2),P=L[0],N=L[1],k=Object(n.useState)(""),F=Object(i.a)(k,2),H=F[0],_=F[1],A=Object(n.useState)(""),x=Object(i.a)(A,2),R=x[0],V=x[1],Y=Object(n.useState)(""),q=Object(i.a)(Y,2),I=q[0],J=q[1],W=Object(n.useState)([]),B=Object(i.a)(W,2),G=B[0],M=B[1],Q=Object(n.useState)([]),z=Object(i.a)(Q,2),K=z[0],T=z[1],U=function(e){var t=e.target.value;"login"===e.target.name?(_(t),M(a.allPeople.people)):V(t)},X=function(e){e.preventDefault(),"admin"===H&&"1111"===R?(alert("Login success!"),d(!0),_(""),V(""),J(""),j("fromLoginPage")):alert("Please, try again")},Z=function(e){var t=e.target.value;J(t);var n=a.allPeople.people.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));M(n),N(!0)},$=function(e,t){var n=K;!0===t&&(n.push(e),T(n));var r=a.allPeople.people.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));J(e),M(r),ee(!0)},ee=function(){N(!1)};return r.a.createElement(s.a,null,r.a.createElement(w,{isAuth:m}),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,m?r.a.createElement(D,{filtered:G,isDroppedDown:P,setDropDownClose:ee,searchValue:I,filterFilms:Z,FitlerDropDown:S,setSearchHistory:T,searchHistory:K,seatchValue:I,setSearch:J,onClickDropDownFilter:$}):"",r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"col-3"},r.a.createElement("ul",null,"Search History:"),K.map((function(e){return r.a.createElement("li",{key:e,onClick:function(){return $(e,!1)}},e)})),r.a.createElement(p.a,{variant:"contained",className:"reset__history",onClick:function(){return T([]),J(""),void M(a.allPeople.people)}},"Reset")),m?r.a.createElement("section",{className:"col-9"},r.a.createElement("div",{className:"items row"},t?"Loading...":r.a.createElement(b,{data:G}))):""))))}}),r.a.createElement(u.b,{exact:!0,path:"/login",render:function(){return"fromLoginPage"===y?r.a.createElement(u.a,{to:"/"}):r.a.createElement(g,{isAuth:m,login:H,pass:R,handleChange:U,onLogin:X})}}),r.a.createElement(u.b,{exact:!0,path:"/logout",render:function(){return"fromLogoutPage"===y?r.a.createElement(u.a,{to:"/"}):r.a.createElement(h,{setAuth:d,setSearch:J,setRedirect:j,setSearchHistory:T})}}),r.a.createElement(u.b,{component:f})))},O=(a(84),a(85),new c.ApolloClient({cache:new c.InMemoryCache,link:new c.HttpLink({uri:"https://swapi.apis.guru/"})}));o.a.render(r.a.createElement(c.ApolloProvider,{client:O},r.a.createElement(j,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.916fa90d.chunk.js.map