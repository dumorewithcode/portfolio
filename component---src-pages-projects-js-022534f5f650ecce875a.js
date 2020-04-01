(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"16l3":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),o=t("cKdq"),c=(t("tUrg"),t("R/WZ")),s=t("iuhU"),i=t("wx14"),l=t("Ff2n"),m=(t("17x9"),t("kKAo")),d=t("H2TA"),u=n.a.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.raised,c=void 0!==o&&o,d=Object(l.a)(e,["classes","className","raised"]);return n.a.createElement(m.a,Object(i.a)({className:Object(s.a)(t.root,r),elevation:c?8:1,ref:a},d))})),p=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u),f=t("ofer"),h=n.a.forwardRef((function(e,a){var t=e.action,r=e.avatar,o=e.classes,c=e.className,m=e.component,d=void 0===m?"div":m,u=e.disableTypography,p=void 0!==u&&u,h=e.subheader,g=e.subheaderTypographyProps,b=e.title,y=e.titleTypographyProps,v=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=b;null==E||E.type===f.a||p||(E=n.a.createElement(f.a,Object(i.a)({variant:r?"body2":"h5",className:o.title,component:"span",display:"block"},y),E));var N=h;return null==N||N.type===f.a||p||(N=n.a.createElement(f.a,Object(i.a)({variant:r?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},g),N)),n.a.createElement(d,Object(i.a)({className:Object(s.a)(o.root,c),ref:a},v),r&&n.a.createElement("div",{className:o.avatar},r),n.a.createElement("div",{className:o.content},E,N),t&&n.a.createElement("div",{className:o.action},t))})),g=Object(d.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(h),b=(t("V+eJ"),["video","audio","picture","iframe","img"]),y=n.a.forwardRef((function(e,a){var t=e.children,r=e.classes,o=e.className,c=e.component,m=void 0===c?"div":c,d=e.image,u=e.src,p=e.style,f=Object(l.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==b.indexOf(m),g=!h&&d?Object(i.a)({backgroundImage:'url("'.concat(d,'")')},p):p;return n.a.createElement(m,Object(i.a)({className:Object(s.a)(r.root,o,h&&r.media,-1!=="picture img".indexOf(m)&&r.img),ref:a,style:g,src:h?d||u:void 0},f),t)})),v=Object(d.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(y),E=n.a.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.component,c=void 0===o?"div":o,m=Object(l.a)(e,["classes","className","component"]);return n.a.createElement(c,Object(i.a)({className:Object(s.a)(t.root,r),ref:a},m))})),N=Object(d.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(E),O=n.a.forwardRef((function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,o=e.classes,c=e.className,m=Object(l.a)(e,["disableSpacing","classes","className"]);return n.a.createElement("div",Object(i.a)({className:Object(s.a)(o.root,c,!r&&o.spacing),ref:a},m))})),x=Object(d.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(O),j=t("VD++"),w=n.a.forwardRef((function(e,a){var t=e.children,r=e.classes,o=e.className,c=e.focusVisibleClassName,m=Object(l.a)(e,["children","classes","className","focusVisibleClassName"]);return n.a.createElement(j.a,Object(i.a)({className:Object(s.a)(r.root,o),focusVisibleClassName:Object(s.a)(c,r.focusVisible),ref:a},m),t,n.a.createElement("span",{className:r.focusHighlight}))})),k=Object(d.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(w),H=t("dRu9"),C=t("wpWl"),S=t("4Hym"),M=t("tr08"),R=n.a.forwardRef((function(e,a){var t=e.children,r=e.classes,o=e.className,c=e.collapsedHeight,m=void 0===c?"0px":c,d=e.component,u=void 0===d?"div":d,p=e.in,f=e.onEnter,h=e.onEntered,g=e.onEntering,b=e.onExit,y=e.onExiting,v=e.style,E=e.timeout,N=void 0===E?C.b.standard:E,O=Object(l.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),x=Object(M.a)(),j=n.a.useRef(),w=n.a.useRef(null),k=n.a.useRef(),R="number"==typeof m?"".concat(m,"px"):m;n.a.useEffect((function(){return function(){clearTimeout(j.current)}}),[]);return n.a.createElement(H.a,Object(i.a)({in:p,onEnter:function(e,a){e.style.height=R,f&&f(e,a)},onEntered:function(e,a){e.style.height="auto",h&&h(e,a)},onEntering:function(e,a){var t=w.current?w.current.clientHeight:0,r=Object(S.a)({style:v,timeout:N},{mode:"enter"}).duration;if("auto"===N){var n=x.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),k.current=n}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style.height="".concat(t,"px"),g&&g(e,a)},onExit:function(e){var a=w.current?w.current.clientHeight:0;e.style.height="".concat(a,"px"),b&&b(e)},onExiting:function(e){var a=w.current?w.current.clientHeight:0,t=Object(S.a)({style:v,timeout:N},{mode:"exit"}).duration;if("auto"===N){var r=x.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),k.current=r}else e.style.transitionDuration="string"==typeof t?t:"".concat(t,"ms");e.style.height=R,y&&y(e)},addEndListener:function(e,a){"auto"===N&&(j.current=setTimeout(a,k.current||0))},timeout:"auto"===N?null:N},O),(function(e,c){return n.a.createElement(u,Object(i.a)({className:Object(s.a)(r.container,o,{entered:r.entered,exited:!p&&"0px"===R&&r.hidden}[e]),style:Object(i.a)({minHeight:R},v),ref:a},c),n.a.createElement("div",{className:r.wrapper,ref:w},n.a.createElement("div",{className:r.wrapperInner},t)))}))}));R.muiSupportAuto=!0;var T=Object(d.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(R),A=t("PsDL"),I=t("1iKp"),V=t.n(I),D=t("NqtD"),W=t("Z79C"),B=t("bfFb"),q=n.a.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.color,c=void 0===o?"primary":o,m=e.component,d=void 0===m?"a":m,u=e.onBlur,p=e.onFocus,h=e.TypographyClasses,g=e.underline,b=void 0===g?"hover":g,y=e.variant,v=void 0===y?"inherit":y,E=Object(l.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=Object(W.a)(),O=N.isFocusVisible,x=N.onBlurVisible,j=N.ref,w=n.a.useState(!1),k=w[0],H=w[1],C=Object(B.a)(a,j);return n.a.createElement(f.a,Object(i.a)({className:Object(s.a)(t.root,t["underline".concat(Object(D.a)(b))],r,k&&t.focusVisible,{button:t.button}[d]),classes:h,color:c,component:d,onBlur:function(e){k&&(x(),H(!1)),u&&u(e)},onFocus:function(e){O(e)&&H(!0),p&&p(e)},ref:C,variant:v},E))})),F=Object(d.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(q),P=(t("tb+u"),Object(c.a)((function(e){var a;return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center"},card:{maxWidth:400,minHeight:700,margin:"3%",backgroundColor:"transparent"},media:{height:360,maxWidth:400},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cardHeader:(a={textAlign:"center",fontFamily:'"Montserrat"',color:"#fff"},a.color="#727272",a),iconButton:{"&:hover":{backgroundColor:"transparent"}},githubAvatar:{maxWidth:30},link:{fontFamily:'"Montserrat"',color:"#727272","&:hover":{textDecoration:"none"}},typography:{fontFamily:'"Montserrat"',fontSize:17,color:"#fff"},cardInfoHeaders:{fontFamily:'"Montserrat"',fontSize:19,color:"#727272"}}})));function L(){var e,a,t=P(),r=n.a.useState(!1),o=r[0],c=r[1],i=function(){c(!o)};return n.a.createElement("div",{id:"mainRoot",className:t.root},n.a.createElement("div",{id:"card1"},n.a.createElement(p,{className:t.card,elevation:0,key:1},n.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p",className:t.cardHeader},n.a.createElement(g,{title:"Command Line Web Scraper"})),n.a.createElement(k,null,n.a.createElement(v,{id:"iframeM",component:"iframe",className:t.media,image:"https://www.youtube.com/embed/yVb1EeJr90I",title:"scraper",frameBorder:0,allowfullscreen:!0})),n.a.createElement(N,null,n.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p",className:t.typography},"Written in Python and bundled for Windows, Linux and Mac, this tool was written for a colleague that required gamelogs data for each team listed on",n.a.createElement(F,{href:"https://www.sports-reference.com/cbb/seasons/2019-school-stats.html",target:"_blank",rel:"noopener noreferrer",className:t.link}," this page"),". This tool retrieves the gamelogs for each team for a specific year or start from a specific year and return the gamelogs for every subsequent year e.g.(2012 - current year). This data is then exported as a csv document. Instructions for usage and modules used are specified below.")),n.a.createElement(x,{disableSpacing:!0},n.a.createElement(A.a,{"aria-label":"add to favorites",className:t.iconButton},n.a.createElement("a",{href:"https://github.com/jmsct/scraper",target:"_blank",rel:"noopener noreferrer",className:t.a},n.a.createElement("img",{src:"https://cdn.svgporn.com/logos/github-icon.svg",className:t.githubAvatar}))),n.a.createElement(A.a,{className:Object(s.a)(t.expand,(e={},e[t.expandOpen]=o,e)),onClick:i,"aria-expanded":o,"aria-label":"show more"},n.a.createElement(V.a,null))),n.a.createElement(T,{in:o,timeout:"auto",unmountOnExit:!0},n.a.createElement(N,null,n.a.createElement(f.a,{paragraph:!0,className:t.cardInfoHeaders},"Usage:"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"git clone https://github.com/jmsct/scraper"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"Open relevant OS folder and run scraper"),n.a.createElement(f.a,{paragraph:!0,className:t.cardInfoHeaders},"Modules used:"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"Python csv (makes exporting to csv a breeze)"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"BeautifulSoup (html parser)"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"grequests (for making asynchronous calls)"))))),n.a.createElement("div",{id:"card2"},n.a.createElement(p,{className:t.card,elevation:0,key:2},n.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p",className:t.cardHeader},n.a.createElement(g,{title:"Command Line Web Scraper"})),n.a.createElement(k,null,n.a.createElement(v,{id:"iframeM",component:"iframe",className:t.media,image:"https://www.youtube.com/embed/yVb1EeJr90I",title:"scraper",frameBorder:0,allowfullscreen:!0})),n.a.createElement(N,null,n.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p",className:t.typography},"Written in Python and bundled for Windows, Linux and Mac, this tool was written for a colleague that required gamelogs data for each team listed on",n.a.createElement(F,{href:"https://www.sports-reference.com/cbb/seasons/2019-school-stats.html",target:"_blank",rel:"noopener noreferrer",className:t.link}," this page"),". This tool retrieves the gamelogs for each team for a specific year or start from a specific year and return the gamelogs for every subsequent year e.g.(2012 - current year). This data is then exported as a csv document. Instructions for usage and modules used are specified below.")),n.a.createElement(x,{disableSpacing:!0},n.a.createElement(A.a,{"aria-label":"add to favorites",className:t.iconButton},n.a.createElement("a",{href:"https://github.com/jmsct/scraper",target:"_blank",rel:"noopener noreferrer",className:t.a},n.a.createElement("img",{src:"https://cdn.svgporn.com/logos/github-icon.svg",className:t.githubAvatar}))),n.a.createElement(A.a,{className:Object(s.a)(t.expand,(a={},a[t.expandOpen]=o,a)),onClick:i,"aria-expanded":o,"aria-label":"show more"},n.a.createElement(V.a,null))),n.a.createElement(T,{in:o,timeout:"auto",unmountOnExit:!0},n.a.createElement(N,null,n.a.createElement(f.a,{paragraph:!0,className:t.cardInfoHeaders},"Usage:"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"git clone https://github.com/jmsct/scraper"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"Open relevant OS folder and run scraper"),n.a.createElement(f.a,{paragraph:!0,className:t.cardInfoHeaders},"Modules used:"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"Python csv (makes exporting to csv a breeze)"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"BeautifulSoup (html parser)"),n.a.createElement(f.a,{paragraph:!0,className:t.typography},"grequests (for making asynchronous calls)"))))))}var z=function(){return n.a.createElement("div",null,n.a.createElement(o.a,null),n.a.createElement(L,null))};a.default=function(){return n.a.createElement("div",null,n.a.createElement(z,null))}},"1iKp":function(e,a,t){"use strict";t("HAE/");var r=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("q1tI")),o=(0,r(t("8/g6")).default)(n.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.default=o}}]);
//# sourceMappingURL=component---src-pages-projects-js-022534f5f650ecce875a.js.map