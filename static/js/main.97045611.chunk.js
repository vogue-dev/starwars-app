(this["webpackJsonpstarwars-app"]=this["webpackJsonpstarwars-app"]||[]).push([[0],{69:function(e,t,a){e.exports=a(87)},78:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),c=a(28),i=a(27),s=a(65),m=a(32),u=a(9),p=a(100),d=r.a.memo((function(e){var t=e.eachPerson,a=t.gender,n="";return n="male"===a?"http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Luke-Skywalker.png":"female"===a?"http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Princess-Leia.png":"n/a"===a?"http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-R2D2.png":"hermaphrodite"===a?"https://i.pinimg.com/originals/13/a9/20/13a9203c8ade09e700bbb4dc753014b2.png":"https://star-shop.kiev.ua/image/cache/data/catalog/kids-toys/star-wars/1d52fabe-e53e-4331-9938-15f7f7b92563-500x500.jpg",r.a.createElement("div",{className:"item col-sm-12 col-md-6 col-lg-4"},r.a.createElement("img",{src:n,alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("b",null,t.name)),r.a.createElement("div",null,"Gender: ",t.gender),r.a.createElement("div",null,"Height: ",t.height," sm")))})),g=r.a.memo((function(e){return e.data.map((function(e){return r.a.createElement(d,{eachPerson:e,key:e.id})}))})),E=r.a.memo((function(e){var t=e.login,a=e.pass,n=e.handleChange,l=e.onLogin;return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"},r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("span",null,"Login:"),r.a.createElement("input",{name:"login",type:"text",placeholder:"admin",value:t,onChange:function(e){return n(e)}}),r.a.createElement("span",null,"Password: 1111"),r.a.createElement("input",{name:"pass",type:"password",value:a,onChange:function(e){return n(e)}})),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(e){return l(e)}},"Submit")))))})),h=r.a.memo((function(e){var t=e.login,a=e.pass,n=e.handleChange,l=e.onLogin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{login:t,pass:a,handleChange:n,onLogin:l}))})),f=r.a.memo((function(e){var t=e.onClickLogout;return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"},r.a.createElement("div",null,"You realy wonna to logout?"),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return t()}},"Submit"))))})),v=r.a.memo((function(e){var t=e.onClickLogout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onClickLogout:t}),")}")})),b=function(){return r.a.createElement("div",{className:"container"},"This is 404 page")},w=r.a.memo((function(e){var t=e.isAuth;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tagline"},"SW Person Searcher"),r.a.createElement(m.b,{to:"/"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"./img/Star_Wars_Yellow_Logo.png",alt:"logo"}))),r.a.createElement("div",{className:"login"},t?r.a.createElement(m.b,{to:"/logout"},"Logout"):r.a.createElement(m.b,{to:"/login"},"Login"))))})),C=r.a.memo((function(e){var t=e.data,a=e.isDroppedDown,l=e.setDropDownClose,o=e.onClickDropDownFilter,c=Object(n.useRef)();Object(n.useEffect)((function(){document.body.addEventListener("click",i)}));var i=function(e){(e.path||e.composedPath&&e.composedPath()||e.composedPath(e.target)).includes(c.current)||l(!0)};return a?r.a.createElement("div",{className:"filter__dropped__down",ref:c},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id,onClick:function(){return o(e.name,!0)}},e.name)})))):""}));function D(e){var t=e.filtered,a=e.isDroppedDown,n=e.setDropDownClose,l=e.searchValue,o=e.setSearch,c=e.filterFilms,i=e.setSearchHistory,s=e.searchHistory,m=e.setFilter,u=e.onClickDropDownFilter;return r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement("input",{placeholder:"Search...",value:l,onChange:function(e){return c(e)}}),r.a.createElement(C,{data:t,isDroppedDown:a,setDropDownClose:n,setSearchHistory:i,searchHistory:s,searchValue:l,setSearch:o,filterFilms:c,setFilter:m,onClickDropDownFilter:u})))}a(78);function y(){var e=Object(s.a)(["\n\tquery getPerson {\n\t\tallPeople {\n\t\t\tpeople {\n\t\t\t\tname\n\t\t\t\tgender\n\t\t\t\tid\n\t\t\t\theight\n\t\t\t}\n\t\t}\n\t}\n"]);return y=function(){return e},e}var k=Object(c.gql)(y()),S=function(){var e=Object(c.useQuery)(k),t=e.loading,a=e.data,l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],d=o[1],E=Object(n.useState)(!1),f=Object(i.a)(E,2),y=f[0],S=f[1],j=Object(n.useState)(!1),L=Object(i.a)(j,2),O=L[0],N=L[1],P=Object(n.useState)(""),F=Object(i.a)(P,2),_=F[0],x=F[1],H=Object(n.useState)(""),A=Object(i.a)(H,2),W=A[0],V=A[1],z=Object(n.useState)(""),R=Object(i.a)(z,2),q=R[0],I=R[1],J=Object(n.useState)([]),Y=Object(i.a)(J,2),B=Y[0],G=Y[1],M=Object(n.useState)([]),Q=Object(i.a)(M,2),T=Q[0],K=Q[1],U=function(e){var t=e.target.value;"login"===e.target.name?(x(t),G(a.allPeople.people)):V(t)},X=function(e){e.preventDefault(),"admin"===_&&"1111"===W?(alert("Login success!"),d(!0),x(""),V(""),I(""),S(!0)):alert("Please, try again")},Z=function(e){var t=e.target.value;I(t);var n=a.allPeople.people.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));G(n),N(!0),console.log(t)},$=function(e,t){var n=T;!0===t&&(n.push(e),K(n));var r=a.allPeople.people.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));I(e),G(r),te(!0)},ee=function(){alert("success!"),d(!1),I(""),S(!1),K([])},te=function(){N(!1)};return r.a.createElement(m.a,null,r.a.createElement(w,{isAuth:s}),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(D,{filtered:B,isDroppedDown:O,setDropDownClose:te,searchValue:q,filterFilms:Z,FitlerDropDown:C,setSearchHistory:K,searchHistory:T,seatchValue:q,setSearch:I,onClickDropDownFilter:$}):"",r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"col-3"},r.a.createElement("ul",null,"Search History:"),T.map((function(e){return r.a.createElement("li",{key:e,onClick:function(){return $(e,!1)}},e)})),r.a.createElement(p.a,{variant:"contained",className:"reset__history",onClick:function(){return K([]),void I("")}},"Reset")),s?r.a.createElement("section",{className:"col-9"},r.a.createElement("div",{className:"items row"},t?"Loading...":r.a.createElement(g,{data:B}))):""))))}}),r.a.createElement(u.b,{exact:!0,path:"/login",render:function(){return y?r.a.createElement(u.a,{to:"/"}):r.a.createElement(h,{isAuth:s,login:_,pass:W,handleChange:U,onLogin:X})}}),r.a.createElement(u.b,{exact:!0,path:"/logout",render:function(){return r.a.createElement(v,{onClickLogout:ee})}}),r.a.createElement(u.b,{component:b})))},j=(a(84),a(85),new c.ApolloClient({cache:new c.InMemoryCache,link:new c.HttpLink({uri:"https://swapi.apis.guru/"})}));o.a.render(r.a.createElement(c.ApolloProvider,{client:j},r.a.createElement(S,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.97045611.chunk.js.map