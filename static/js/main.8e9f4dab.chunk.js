(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(3),c=n.n(r),u=(n(15),n(4)),o=n(5),i=n(7),m=n(6),s=n(8),d=(n(17),n(1)),f={ThemeContext:l.createContext("light")},E=function(){return l.createElement("div",null,l.createElement("h3",null,"Child Context"),l.createElement(f.ThemeContext.Consumer,null,function(e){return l.createElement("h2",null,e)}))},h=function(){var e=l.useState("dark"),t=Object(d.a)(e,2),n=t[0],a=t[1];return l.createElement(f.ThemeContext.Provider,{value:n},l.createElement("div",null,l.createElement("h1",null,"Context"),l.createElement("button",{onClick:function(){return a("dark"===n?"light":"dark")}},"Toggle"),l.createElement(E,null)))},v=function(){var e=l.useState(0),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Math.random();return l.useEffect(function(){console.log("effect"),document.title="".concat(r)},[n]),l.createElement("div",null,l.createElement("p",null,"You clicked ",n," times"),l.createElement("button",{onClick:function(){return a(n+1)}},"Click me"))},p=l.lazy(function(){return n.e(1).then(n.bind(null,20))}),k=function(e){switch(e.type){case"default":return l.createElement("div",null,l.createElement("h1",null,"Default"));case"suspense":return l.createElement(l.Suspense,{fallback:l.createElement("div",null,"Loading...")},l.createElement(p,null));case"context":return l.createElement(h,null);case"hooks":return l.createElement(v,null);default:return l.createElement("div",null,l.createElement("h1",null,"notfound"))}},b=function(){var e=l.useState("default"),t=Object(d.a)(e,2),n=t[0],a=t[1];return l.createElement("div",null,l.createElement("div",null,"React V16.8.0-alpha"),l.createElement("select",{name:"choices",value:n,onChange:function(e){return a(e.target.value)}},["default","suspense","context","hooks"].map(function(e){return l.createElement("option",{key:e,value:e},e)})),l.createElement(k,{type:n}))},w=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,3,2]]]);
//# sourceMappingURL=main.8e9f4dab.chunk.js.map