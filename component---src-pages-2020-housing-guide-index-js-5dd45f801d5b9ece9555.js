(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0cv1":function(e,a,t){e.exports=t.p+"static/hero-4dabc3569a3c8c1fc3a5ea4d735c4a91.png"},H7us:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("vOnD"),c=t("Wbzz"),i=t("9eSz"),o=t.n(i),s=t("qhky"),m=t("wx14"),d=t("zLVn"),u=t("TSYQ"),p=t.n(u),f=t("vUet"),g=["xl","lg","md","sm","xs"],b=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.noGutters,c=e.as,i=void 0===c?"div":c,o=Object(d.a)(e,["bsPrefix","className","noGutters","as"]),s=Object(f.a)(t,"row"),u=s+"-cols",b=[];return g.forEach((function(e){var a,t=o[e];delete o[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&b.push(""+u+n+"-"+a)})),r.a.createElement(i,Object(m.a)({ref:a},o,{className:p.a.apply(void 0,[n,s,l&&"no-gutters"].concat(b))}))}));b.displayName="Row",b.defaultProps={noGutters:!1};var E=b,h=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.fluid,l=e.as,c=void 0===l?"div":l,i=e.className,o=Object(d.a)(e,["bsPrefix","fluid","as","className"]),s=Object(f.a)(t,"container"),u="string"==typeof n?"-"+n:"-fluid";return r.a.createElement(c,Object(m.a)({ref:a},o,{className:p()(i,n?""+s+u:s)}))}));h.displayName="Container",h.defaultProps={fluid:!1};var v=h,x=["xl","lg","md","sm","xs"],y=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,c=void 0===l?"div":l,i=Object(d.a)(e,["bsPrefix","className","as"]),o=Object(f.a)(t,"col"),s=[],u=[];return x.forEach((function(e){var a,t,n,r=i[e];if(delete i[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&s.push(!0===a?""+o+c:""+o+c+"-"+a),null!=n&&u.push("order"+c+"-"+n),null!=t&&u.push("offset"+c+"-"+t)})),s.length||s.push(o),r.a.createElement(c,Object(m.a)({},i,{ref:a,className:p.a.apply(void 0,[n].concat(s,u))}))}));y.displayName="Col";var w=y,N=t("Jzpe"),O=t("FkXu"),j=l.a.div.attrs((function(e){return{className:e.className}})).withConfig({displayName:"Card__CardWrapper",componentId:"sc-19niiz-0"})(["background-color:",";border-radius:15px;box-shadow:",";display:flex;justify-content:center;flex-direction:column;"," transition:all 0.3s;margin-bottom:60px;overflow:hidden;"],"#FFFFFF","0px 5px 20px rgba(0, 0, 0, 0.1)",(function(e){return e.flush||"padding-bottom: 30px;"})),C=function(e){var a=e.className,t=e.children,n=e.flush;return r.a.createElement(j,{className:a,flush:n},t)},k=l.a.a.withConfig({displayName:"Card__Link",componentId:"sc-19niiz-1"})([":hover{color:initial;text-decoration:none;}"]),P=l.a.h2.withConfig({displayName:"Card__Header",componentId:"sc-19niiz-2"})([""," margin-right:40px;margin-left:40px;margin-top:30px;",""],O.a,(function(e){var a=e.color;return a&&"color: "+a+";"})),_=l.a.p.withConfig({displayName:"Card__Subheader",componentId:"sc-19niiz-3"})([""," "," margin-right:40px;margin-left:40px;font-style:italic;"],(function(e){var a=e.color;return a&&"color: "+a+";"}),O.k),F=l.a.p.withConfig({displayName:"Card__Content",componentId:"sc-19niiz-4"})(["margin-right:40px;margin-left:40px;color:",";",";"],"#494748",O.k),I=function(e){var a=e.title,t=e.link,n=e.authors,l=e.abstract,c=e.image,i=e.primary,s=e.secondary,m=e.noImg;return r.a.createElement(k,{href:t,target:"_blank"},!m&&r.a.createElement(o.a,{fluid:c.src.childImageSharp.fluid,className:"img-fluid"}),r.a.createElement(P,{href:t,color:i},a),r.a.createElement(_,{color:s},n),r.a.createElement(F,null,l))},T=t("0cv1"),z=t.n(T),S=l.a.img.withConfig({displayName:"Hero__StyledImage",componentId:"sc-1t2wlxl-0"})(["width:100%;"]),D=function(){return r.a.createElement(S,{src:z.a})},A=t("JCAc"),R=t("YdCC"),M=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,c=Object(d.a)(e,["bsPrefix","className","as"]);t=Object(f.a)(t,"navbar-brand");var i=l||(c.href?"a":"span");return r.a.createElement(i,Object(m.a)({},c,{ref:a,className:p()(n,t)}))}));M.displayName="NavbarBrand";var G,H=M,J=t("7j6X"),L=t("YECM"),Y=t("dRu9"),V=t("Qg85"),X=t("z+q/"),q={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function B(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],n=q[e];return t+parseInt(Object(J.a)(a,n[0]),10)+parseInt(Object(J.a)(a,n[1]),10)}var W=((G={})[Y.c]="collapse",G[Y.d]="collapsing",G[Y.b]="collapsing",G[Y.a]="collapse show",G),Q={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:B},U=r.a.forwardRef((function(e,a){var t=e.onEnter,l=e.onEntering,c=e.onEntered,i=e.onExit,o=e.onExiting,s=e.className,u=e.children,f=e.dimension,g=void 0===f?"height":f,b=e.getDimensionValue,E=void 0===b?B:b,h=Object(d.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),v="function"==typeof g?g():g,x=Object(n.useMemo)((function(){return Object(V.a)((function(e){e.style[v]="0"}),t)}),[v,t]),y=Object(n.useMemo)((function(){return Object(V.a)((function(e){var a="scroll"+v[0].toUpperCase()+v.slice(1);e.style[v]=e[a]+"px"}),l)}),[v,l]),w=Object(n.useMemo)((function(){return Object(V.a)((function(e){e.style[v]=null}),c)}),[v,c]),N=Object(n.useMemo)((function(){return Object(V.a)((function(e){e.style[v]=E(v,e)+"px",Object(X.a)(e)}),i)}),[i,E,v]),O=Object(n.useMemo)((function(){return Object(V.a)((function(e){e.style[v]=null}),o)}),[v,o]);return r.a.createElement(Y.e,Object(m.a)({ref:a,addEndListener:L.a},h,{"aria-expanded":h.role?h.in:null,onEnter:x,onEntering:y,onEntered:w,onExit:N,onExiting:O}),(function(e,a){return r.a.cloneElement(u,Object(m.a)({},a,{className:p()(s,u.props.className,W[e],"width"===v&&"width")}))}))}));U.defaultProps=Q;var Z=U,K=r.a.createContext(null);K.displayName="NavbarContext";var $=K,ee=r.a.forwardRef((function(e,a){var t=e.children,n=e.bsPrefix,l=Object(d.a)(e,["children","bsPrefix"]);return n=Object(f.a)(n,"navbar-collapse"),r.a.createElement($.Consumer,null,(function(e){return r.a.createElement(Z,Object(m.a)({in:!(!e||!e.expanded)},l),r.a.createElement("div",{ref:a,className:n},t))}))}));ee.displayName="NavbarCollapse";var ae=ee,te=t("ZCiN"),ne=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.children,i=e.label,o=e.as,s=void 0===o?"button":o,u=e.onClick,g=Object(d.a)(e,["bsPrefix","className","children","label","as","onClick"]);t=Object(f.a)(t,"navbar-toggler");var b=Object(n.useContext)($)||{},E=b.onToggle,h=b.expanded,v=Object(te.a)((function(e){u&&u(e),E&&E()}));return"button"===s&&(g.type="button"),r.a.createElement(s,Object(m.a)({},g,{ref:a,onClick:v,"aria-label":i,className:p()(l,t,!h&&"collapsed")}),c||r.a.createElement("span",{className:t+"-icon"}))}));ne.displayName="NavbarToggle",ne.defaultProps={label:"Toggle navigation"};var re=ne,le=r.a.createContext(null),ce=Object(R.a)("navbar-text",{Component:"span"}),ie=r.a.forwardRef((function(e,a){var t=Object(A.a)(e,{expanded:"onToggle"}),l=t.bsPrefix,c=t.expand,i=t.variant,o=t.bg,s=t.fixed,u=t.sticky,g=t.className,b=t.children,E=t.as,h=void 0===E?"nav":E,v=t.expanded,x=t.onToggle,y=t.onSelect,w=t.collapseOnSelect,N=Object(d.a)(t,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),O=Object(f.a)(l,"navbar"),j=Object(n.useCallback)((function(){y&&y.apply(void 0,arguments),w&&v&&x&&x(!1)}),[y,w,v,x]);void 0===N.role&&"nav"!==h&&(N.role="navigation");var C=O+"-expand";"string"==typeof c&&(C=C+"-"+c);var k=Object(n.useMemo)((function(){return{onToggle:function(){return x&&x(!v)},bsPrefix:O,expanded:!!v}}),[O,v,x]);return r.a.createElement($.Provider,{value:k},r.a.createElement(le.Provider,{value:j},r.a.createElement(h,Object(m.a)({ref:a},N,{className:p()(g,O,c&&C,i&&O+"-"+i,o&&"bg-"+o,u&&"sticky-"+u,s&&"fixed-"+s)}),b)))}));ie.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ie.displayName="Navbar",ie.Brand=H,ie.Toggle=re,ie.Collapse=ae,ie.Text=ce;var oe=ie,se=l.a.img.attrs((function(){return{className:"header"}})).withConfig({displayName:"Navbar__Image",componentId:"sc-36nykr-0"})(["width:250px;max-height:90px;@media (max-width:768px){max-height:30px;}"]),me=Object(l.a)(oe).attrs((function(){return{sticky:"top",expand:"lg"}})).withConfig({displayName:"Navbar__Wrapper",componentId:"sc-36nykr-1"})(["background-color:",";box-shadow:0px 5px 6px #00000029;opacity:1;text-align:center;padding 0.5rem 1rem;"],"#FFFFFF"),de=function(){return r.a.createElement(me,null,r.a.createElement("a",{href:"https://www.thedp.com",className:"mx-auto",target:"_blank"},r.a.createElement(se,{src:"/img/DP-Logo-Full.png",alt:"The Daily Pennsylvanian"})))},ue=l.a.h1.attrs((function(){return{className:"mx-auto"}})).withConfig({displayName:"Typography__HeaderWrapper",componentId:"e7t2fi-0"})([""," border-bottom-style:solid;border-bottom-width:3px;border-bottom-color:",";color:",";display:inline-block;text-align:center;"],O.b,(function(e){return e.inverted?"#F29F4D":"#AE7794"}),(function(e){return e.inverted?"#AE7794":"#F29F4D"})),pe=function(e){var a=e.children,t=e.inverted;return r.a.createElement(ue,{inverted:t},a)},fe=function(){return r.a.createElement(s.a,null,r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("title",null,"Housing Guide 2020 | The Daily Pennsylvanian"),r.a.createElement("meta",{property:"og:title",content:"Housing Guide 2020 | The Daily Pennsylvanian"}),r.a.createElement("meta",{property:"og:image",content:"https://snworksceo.imgix.net/dpn/9cc22c52-fbc5-48f7-a43c-bfda087332ec.sized-1000x1000.png"}),r.a.createElement("meta",{property:"og:description",content:"Your guide to living at Penn"}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:url",content:"https://projects.thedp.com/2020/housing-guide/"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:"Housing Guide 2020 | The Daily Pennsylvanian"}),r.a.createElement("meta",{name:"twitter:image",content:"https://snworksceo.imgix.net/dpn/9cc22c52-fbc5-48f7-a43c-bfda087332ec.sized-1000x1000.png"}),r.a.createElement("meta",{name:"twitter:description",content:"Your guide to living at Penn"}),r.a.createElement("meta",{name:"twitter:url",content:"https://projects.thedp.com/2020/housing-guide/"}),r.a.createElement("meta",{name:"twitter:site",content:"@dailypenn"}),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",crossorigin:"anonymous"}))},ge=l.a.section.withConfig({displayName:"housing-guide__Section",componentId:"sc-1028e7s-0"})(["padding-top:60px;padding-bottom:60px;",""],(function(e){var a=e.background;return a&&"background-color: "+a})),be=Object(l.a)(E).withConfig({displayName:"housing-guide__SpacedRow",componentId:"sc-1028e7s-1"})(["margin-top:50px;"]),Ee=l.a.footer.withConfig({displayName:"housing-guide__Footer",componentId:"sc-1028e7s-2"})(["color:",";padding:20px 0px;text-align:center;"],"#70380A"),he=Object(l.a)(C).withConfig({displayName:"housing-guide__DomCard",componentId:"sc-1028e7s-3"})(["@media (min-width:768px){width:45%;margin-left:auto;margin-top:-300px;}"]),ve=function(){return r.a.createElement("div",{style:{marginBottom:"1rem"}},r.a.createElement("broadstreet-zone",{"zone-id":"69577"}))};a.default=function(){return r.a.createElement(c.StaticQuery,{query:"4031103710",render:function(e){var a,t=e.news.edges[0].node.childrenNewsHg2020Json,n=e.opinion.edges[0].node.childOpinionHg2020Json;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(de,null),r.a.createElement(D,null),r.a.createElement(ge,null,r.a.createElement(E,null,r.a.createElement(pe,null,"Guide")),r.a.createElement(v,null,r.a.createElement(be,null,r.a.createElement(w,{sm:12,md:6},r.a.createElement(C,null,r.a.createElement(I,Object.assign({},t[0],{primary:"#70380A",secondary:"#A56021"})))),r.a.createElement(w,{sm:12,md:6},r.a.createElement("div",null,"Ad1"),r.a.createElement("div",null,"Ad2"))))),r.a.createElement(ge,{background:"#F9EDF4"},r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(pe,{inverted:!0},"News")),r.a.createElement(be,null,r.a.createElement(w,{sm:12,md:6},r.a.createElement(C,null,r.a.createElement(I,Object.assign({},t[1],{primary:"#60113E",secondary:"#932C6C"})))),r.a.createElement(w,{sm:12,md:6},r.a.createElement(C,null,r.a.createElement(I,Object.assign({},t[2],{primary:"#60113E",secondary:"#932C6C"}))))),r.a.createElement(E,null,r.a.createElement(w,{sm:12,md:6},r.a.createElement(C,null,r.a.createElement(I,Object.assign({},t[3],{primary:"#60113E",secondary:"#932C6C"})))),r.a.createElement(w,((a={md:12}).md=6,a),r.a.createElement("div",null,"Ad1"),r.a.createElement(ve,null))))),r.a.createElement(ge,null,r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(N.a,null)),r.a.createElement(E,null,r.a.createElement(pe,null," Opinion ")),r.a.createElement(be,null,r.a.createElement(w,{sm:12,md:8},r.a.createElement(C,{flush:!0},r.a.createElement(o.a,{fluid:n.image.src.childImageSharp.fluid,className:"img-fluid"})),r.a.createElement(he,null,r.a.createElement(I,Object.assign({},n,{primary:"#70380A",secondary:"#A56021",noImg:!0})))),r.a.createElement(w,null,r.a.createElement(ve,null),r.a.createElement(ve,null),r.a.createElement(ve,null))))),r.a.createElement(Ee,null,"Made with 🏠 by The Daily Pennsylvanian © 2020. All rights reserved."))}})}}}]);
//# sourceMappingURL=component---src-pages-2020-housing-guide-index-js-5dd45f801d5b9ece9555.js.map