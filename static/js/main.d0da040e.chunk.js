(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),r=a(2),l=a(24),o=a.p+"static/media/grabaphone.fa12f8cb.png",d=a.p+"static/media/yeti.5bfde2ec.jpg",j={FFL:{title:"Fantasy Football Trade Tips",description:"Fantasy Trade Tips is a full stack web application that allows fantasy football players to view stats, get trade suggestions, and simulate trades to view the impact on their new team. It's written in Python, and uses Flask, SQLAlchemy, & WTForms on the backend. It's currently hosted on Heroku, so it may take a moment to spin up.",image:a.p+"static/media/ffl.712c17a9.png",url:"https://ffl-trade-tips.herokuapp.com",github:"https://github.com/leshawn-rice/ffl-trade-tips"},GBP:{title:"Grabaphone API",description:"Grabaphone is a RESTful API that can be used to retrieve data on over 5000 cellular devices. It's written in Python, and uses Flask & SQLAlchemy on the backend. It's currently hosted on Heroku, so it may take a moment to spin up.",image:o,url:"https://grabaphone.herokuapp.com",github:"https://github.com/leshawn-rice/grabaphone"},YTI:{title:"Yeti",description:"Yeti is a full stack web application, and a mobile app that empowers users to engage with their community. It uses Express on the backend, and React on the frontend for the web and mobile apps, respectively.",image:d,url:"https://goyeti.surge.sh",github:"https://github.com/leshawn-rice/yeti"},TKT:{title:"TicketMaster",description:"TicketMaster is a full stack web application that allows users to create and manage workspaces & projects. Admins of a workspace can generate, assign, and set priority on projects and tickets, while regular users in a workspace can view, edit, and complete tickets."}},h=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Resume",href:"/Leshawn_Rice_Resume.pdf",target:"_blank"},{label:"Github",href:"https://github.com/leshawn-rice",target:"_blank"},{label:"LinkedIn",href:"https://linkedin.in/in/leshawn-rice",target:"_blank"}],b=(a(9),a(10),a(0)),u=function(e){var t=e.open,a=e.onClose,n=e.links,s=void 0===n?[]:n;return t?Object(b.jsxs)("div",{className:"Drawer",id:"Nav-Drawer",children:[Object(b.jsx)("div",{className:"Drawer-Content",children:Object(b.jsx)("div",{className:"Drawer-Links",children:s.map((function(e){return Object(b.jsx)("a",{href:e.href,target:e.target,className:"Drawer-Link",onClick:a,children:e.label},"".concat(e.label,"-navlink"))}))})}),Object(b.jsx)("div",{onClick:a,className:"Drawer-Page"})]}):null},m=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),i=Object(r.a)(c,2),o=i[0],d=i[1],j=Object(n.useState)(!1),m=Object(r.a)(j,2),p=(m[0],m[1]);Object(n.useEffect)((function(){window.innerWidth<900?d(!0):d(!1)}),[]);return Object(b.jsxs)("div",{className:"Navbar",id:"navbar",children:[Object(b.jsx)("div",{className:"Navbar-Name",children:"Leshawn Rice"}),Object(b.jsxs)("div",{className:"Navbar-Hamburger",children:[a?o?Object(b.jsx)(u,{open:!0,onClose:function(){document.querySelector("#Nav-Drawer").classList.add("Drawer-Closed"),setTimeout((function(){p(!1),s(!1)}),500)},links:h}):Object(b.jsx)("div",{className:"Navbar-Links",id:"navbar-links",children:h.map((function(e){return Object(b.jsx)("a",{href:e.href,target:e.target,className:"Navbar-Link",children:e.label},"".concat(e.label,"-navlink"))}))}):null,Object(b.jsx)(l.a,{toggled:a,toggle:function(){s(!a)}})]})]})},p=(a(12),function(e){var t=e.img,a=e.title;Object(n.useEffect)((function(){var e=function(e){var t=e.target,n=document.getElementById("".concat(a,"-image"));n!==t||n.classList.contains("active")?n!==t&&n.classList.contains("active")&&n.classList.remove("active"):n.classList.add("active")};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}));return Object(b.jsx)("div",{className:"Project-Image",onClick:function(e){},children:Object(b.jsx)("img",{id:"".concat(a,"-image"),src:t,alt:a})})}),k=(a(13),function(e){var t=e.url,a=e.github,n=e.handleLink;return Object(b.jsxs)("div",{className:"Project-Footer",children:[Object(b.jsx)("button",{"data-url":t,onClick:n,className:"Project-Btn Project-Link",children:"View Project"}),Object(b.jsx)("button",{"data-url":a,onClick:n,className:"Project-Btn Project-Source",children:"View Code"})]})}),v=(a(14),function(e){var t=e.project,a=e.handleLink,n=t.title,s=t.image,c=t.description,i=t.url,r=t.github;return Object(b.jsxs)("div",{className:"Project",id:"project-".concat(n),children:[Object(b.jsxs)("div",{className:"Project-Info",children:[Object(b.jsx)("h1",{className:"Project-Header",children:n}),Object(b.jsx)("p",{className:"Project-Description",children:c}),Object(b.jsx)(k,{url:i,github:r,handleLink:a})]}),Object(b.jsx)(p,{img:s,title:n})]})}),f=(a(15),function(){return Object(b.jsx)("div",{className:"Seperator"})}),O=(a(16),function(e){var t=e.handleLink;return Object(b.jsxs)("div",{className:"Projects",id:"projects",children:[Object(b.jsx)(f,{}),Object(b.jsx)("h1",{className:"Projects-Header",children:"Recent Projects"}),Object(b.jsxs)("div",{className:"Projects-Blurb",children:[Object(b.jsxs)("p",{className:"Projects-Text",children:["My bread and butter is Express. When working in a backend in Javascript, the stack I'm most familiar with is PostgreSQL, Express, and Node.js, but like I said picking up a new language or framework isn't a problem for me. I can quickly adapt to a different stack as necessary. My most recent project, ",Object(b.jsx)("span",{onClick:t,className:"Projects-Link","data-url":"https://goyeti.surge.sh",children:"Yeti,"})," was built with a PERN stack."]}),Object(b.jsx)("p",{className:"Projects-Text",children:"I am currently migrating my portfolio projects. The code will remain available on Github, but the live sites are not currently available"})]}),Object(b.jsx)("div",{className:"Projects-Content",children:Object(b.jsx)(v,{project:j.YTI,handleLink:t})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"Projects-Blurb",children:Object(b.jsxs)("p",{className:"Projects-Text",children:["When working in a Python backend, the framework I'm most familiar with is Flask. While Flask is easy to work with and provides a lot of flexibiliy, I've been getting more into using Django since they added asynchronous support. The ",Object(b.jsx)("span",{onClick:t,className:"Projects-Link","data-url":"https://grabaphone.herokuapp.com",children:"Grabaphone API"}),", and ",Object(b.jsx)("span",{onClick:t,className:"Projects-Link","data-url":"https://grabaphone.herokuapp.com",children:"Fantasy Football Trade Tips"}),", both have a backend built with Flask."]})}),Object(b.jsx)("div",{className:"Projects-Content",children:Object(b.jsx)(v,{project:j.GBP,handleLink:t})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"Projects-Content",children:Object(b.jsx)(v,{project:j.FFL,handleLink:t})})]})}),x=(a(17),function(e){var t=e.handleLink;return Object(n.useEffect)((function(){var e=["Backend Developer.","Frontend Developer.","DevOps Developer.","Software Developer."],t=2e3;var a=setInterval((function(){document.querySelector(".About-Header").classList.toggle("has-border")}),750);return function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=e[n].slice(0,s);document.querySelector(".About-Header-Span").textContent=i,i.length>=e[n].length?setTimeout((function(){return a(n,s-1,-1)}),t):0===i.length?setTimeout((function(){return a((n+1)%e.length)}),t):setTimeout((function(){return a(n,s+c,c)}),200)}(),function(){clearInterval(a)}}),[]),Object(b.jsxs)("div",{className:"About",id:"about",children:[Object(b.jsx)("div",{className:"About-BG",children:Object(b.jsxs)("h1",{className:"About-Header",children:["Leshawn Rice. ",Object(b.jsx)("span",{className:"About-Header-Span"})]})}),Object(b.jsxs)("div",{className:"About-Content",children:[Object(b.jsx)("p",{className:"About-Body",children:"My name is Leshawn Rice, and I'm a Software Developer in Vancouver, WA. I primarily use Javascript and Python but picking up a new language or framework isn't a problem for me. I'm comfortable developing on the frontend and the backend, and I enjoy challenging myself to make seamless, efficient, and scalable applications."}),Object(b.jsxs)("div",{className:"About-Footer",children:[Object(b.jsx)("button",{className:"About-Contact",onClick:function(){window.open("mailto:leshawn.rice@outlook.com?subject=From your site")},children:"Get in touch"}),Object(b.jsxs)("p",{className:"About-Social",children:[Object(b.jsx)("span",{onClick:t,className:"About-Link","data-url":"https://github.com/leshawn-rice",children:"GitHub"})," ",Object(b.jsx)("span",{className:"About-Seperator",children:" |"})," ",Object(b.jsx)("span",{onClick:t,className:"About-Link","data-url":"https://linkedin.com/in/leshawn-rice",children:"LinkedIn"})]})]})]})]})}),g=(a(18),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)("h1",{className:"Skills-Header",children:"Skills"}),Object(b.jsxs)("div",{className:"Skills",children:[Object(b.jsx)("div",{className:"Skill-Pill",children:"Javascript"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"Python"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"SQL"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"Express"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"Flask"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"Django"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"React"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"React Native"}),Object(b.jsx)("div",{className:"Skill-Pill",children:"Ansible"})]})]})}),w=(a(19),function(e){var t=e.handleLink;return Object(b.jsxs)("div",{className:"Footer",children:[Object(b.jsx)("h1",{children:"Leshawn Rice"}),Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{onClick:t,"data-url":"/Leshawn_Rice_Resume.pdf",className:"Footer-Link",children:"Resume"}),"\xa0|\xa0",Object(b.jsx)("span",{onClick:t,"data-url":"https://github.com/leshawn-rice",className:"Footer-Link",children:"Github"}),"\xa0|\xa0",Object(b.jsx)("span",{onClick:t,"data-url":"https://linkedin.com/in/leshawn-rice",className:"Footer-Link",children:"LinkedIn"})]})]})}),N=(a(20),function(){var e=function(e){var t=e.target.dataset.url;window.open(t,"_blank")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(x,{handleLink:e}),Object(b.jsx)(g,{}),Object(b.jsx)(O,{handleLink:e})]}),Object(b.jsx)(w,{handleLink:e})]})});a(21);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d0da040e.chunk.js.map