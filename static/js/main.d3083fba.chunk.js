(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{18:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/JA logo.47d39c00.png"},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/react.85ee91e5.png"},43:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bootstrap.24d68855.png"},44:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/jquery.bc48ed42.png"},45:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/sass.1c48a542.png"},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(26),c=n.n(s),d=(n(32),n(23),n(34),n(8)),o=n(3),l=n(9),r=n(10),u=n(12),m=n(11),b=n(0),j=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){n(36);return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:[Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(b.jsxs)("ul",{className:"navbar-nav nav-fill w-100",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(d.b,{className:"nav-link",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link",to:"Projects",children:"Projects"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link",to:"Contact",children:"Contact"})})]})})]})})}}]),i}(i.Component),p=n(2),h=n.n(p),x=n(49);n(18);function v(e){h()("#visibleText").hide(),h()("#hiddenText").show(),h()("#hiddenTextFunny").show(),h()("#hiddenTextFunnySub").show(),setTimeout((function(){h()("#hiddenTextFunnySub2").show()}),1e3)}function f(e){h()("#visibleText").show(),h()("#hiddenText").hide(),h()("#hiddenTextFunny").hide(),h()("#hiddenTextFunnySub").hide(),h()("#hiddenTextFunnySub2").is(":hidden")?setTimeout((function(){h()("#hiddenTextFunnySub2").hide()}),1e3):h()("#hiddenTextFunnySub2").hide()}var y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),e=t.call(this),x.a.addEventListener("change",(function(){e.updateBodyStyles()})),e}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"mainBody",id:"mainBody",children:Object(b.jsxs)("main",{role:"main",className:"container",children:[Object(b.jsxs)("div",{onMouseOver:v,onMouseOut:f,children:[Object(b.jsx)("div",{id:"mainText",className:"mainText",children:"Hello"}),Object(b.jsx)("div",{className:"tinyText",id:"tinyText",children:Object(b.jsxs)("mark",{children:["< ",Object(b.jsx)("text",{id:"mobile",children:"tap"}),Object(b.jsx)("text",{id:"desktop",children:"mouseover"})," for fun />"]})})]}),Object(b.jsxs)("div",{className:"text",children:["I am ",Object(b.jsx)("b",{children:"Jeff"}),"."]}),Object(b.jsx)("div",{id:"visibleText",className:"text",children:"A Full-Stack Developer."}),Object(b.jsx)("div",{id:"hiddenText",className:"strikethroughtextHidden",children:"A Full-Stack Developer."}),Object(b.jsx)("div",{id:"hiddenTextFunny",className:"textHidden",children:"I turn caffeine into lines of code."}),Object(b.jsx)("div",{id:"hiddenTextFunnySub",className:"textHidden",children:"With ninja tools."}),Object(b.jsx)("div",{id:"hiddenTextFunnySub2",className:"textHidden",children:"And some magic."})]})})}},{key:"updateBodyStyles",value:function(){var e="undefined"!==typeof window.orientation,t=window.innerHeight>window.innerWidth;h()("#App").removeClass("AppMobile").addClass("App"),e?(h()("#mainText").removeClass("mainTextMobile").addClass("mainText"),document.getElementById("mobile").style.display="inline",document.getElementById("desktop").style.display="none",h()("#tinyText").removeClass("tinyText").addClass("tinyTextMobile"),h()("#visibleText").removeClass("text").addClass("textMobile"),h()("#hiddenText").removeClass("strikethroughtextHidden").addClass("strikethroughtextMobileHidden"),h()("#mainBody").removeClass("mainBody").addClass("mainBodyMobile"),h()("#App").css("background-position-y","55px"),t?(document.getElementById("mainBody").style.textAlign="left",h()("#App").removeClass("SubApp").removeClass("App").addClass("AppMobile")):(document.getElementById("mainBody").style.textAlign="right",h()("#App").removeClass("SubApp").addClass("App"),h()("#App").css("background-position-y","55px"),h()("#mainApp").css("font-size","60px")),h()("#hiddenTextFunny").text("I turn caffeine into lines of code.").html(),window.innerHeight<650&&(t&&h()("#hiddenTextFunny").text("I turn caffeine into\nlines of code.").html(h()("#hiddenTextFunny").text().replace(/\n/g,"<br />")),h()("#mainText").removeClass("mainText").addClass("mainTextMobile"))):h()("#App").removeClass("SubApp").addClass("App")}},{key:"componentDidMount",value:function(){this.updateBodyStyles(),window.addEventListener("resize",this.updateBodyStyles()),h()(".nav-item").on("click",(function(e){var t=h()(this);h()(".nav-item").each((function(){h()(this).removeClass("active")})),t.addClass("active")}))}}]),n}(i.Component),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"mainBody",id:"mainBody",style:{marginTop:"10vh"},children:Object(b.jsx)("main",{role:"main",className:"container",children:Object(b.jsx)("div",{className:"underConstruction"})})})}},{key:"componentDidMount",value:function(){h()("#App").removeClass("App").removeClass("AppMobile").addClass("SubApp")}}]),n}(i.Component),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"mainBody",id:"mainBody",style:{marginTop:"10vh"},children:Object(b.jsx)("main",{role:"main",className:"container",children:Object(b.jsx)("div",{className:"underConstruction"})})})}},{key:"componentDidMount",value:function(){h()("#App").removeClass("App").removeClass("AppMobile").addClass("SubApp")}}]),n}(i.Component),C=n(22),T=(n(41),function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var e,t=n(42),i=n(43),a=n(44),s=n(45);return Object(b.jsx)("footer",{class:"footer",children:Object(b.jsxs)("div",(e={class:"container"},Object(C.a)(e,"class","mx-auto"),Object(C.a)(e,"children",[Object(b.jsx)("div",{className:"poweredByText",children:"I made this site with:"}),Object(b.jsx)("img",{className:"imgIcons",height:30,title:"React.js",width:30,src:t.default}),Object(b.jsx)("img",{className:"imgIcons",height:30,title:"Bootstrap",width:30,src:i.default}),Object(b.jsx)("img",{className:"imgIcons",height:40,title:"jQuery",width:40,src:a.default}),Object(b.jsx)("img",{className:"imgIcons",height:30,title:"Sass",width:30,src:s.default})]),e))})}},{key:"componentDidMount",value:function(){"undefined"!==typeof window.orientation&&h()("footer").addClass("footerMobile")}}]),i}(i.Component));n(46);var N=function(){return Object(b.jsx)("div",{className:"App",id:"App",children:Object(b.jsxs)(d.a,{basename:"/my-portfolio",children:[Object(b.jsx)(j,{}),Object(b.jsx)("br",{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(b.jsx)(o.a,{path:"/Projects",component:O}),Object(b.jsx)(o.a,{path:"/Contact",component:g})]}),Object(b.jsx)(T,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),A()}},[[47,1,2]]]);
//# sourceMappingURL=main.d3083fba.chunk.js.map