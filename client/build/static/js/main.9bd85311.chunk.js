(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{208:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(187),r=n.n(s),i=n(44),o=(n(208),n(203)),j=n(129),u=n(133),h=n(189),b=n(202),d=n(3);var l=function(e){var t=e.socket,n=e.username,a=e.room,s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],O=Object(c.useState)([]),m=Object(i.a)(O,2),x=m[0],p=m[1],f=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===o){e.next=6;break}return c={room:a,author:n,message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=4,t.emit("send_message",c);case 4:p((function(e){return[].concat(Object(u.a)(e),[c])})),l("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.on("receive_message",(function(e){p((function(t){return[].concat(Object(u.a)(t),[e])}))}))}),[t]),Object(d.jsxs)("div",{className:"chat-window",children:[Object(d.jsx)("div",{className:"chat-header",children:Object(d.jsx)("p",{children:"Live Chat"})}),Object(d.jsx)("div",{className:"chat-body",children:Object(d.jsx)(b.a,{className:"message-container",children:x.map((function(e){return Object(d.jsx)("div",{className:"message",id:n===e.author?"you":"other",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"message-content",children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsxs)("div",{className:"message-meta",children:[Object(d.jsx)("p",{id:"time",children:e.time}),Object(d.jsx)("p",{id:"author",children:e.author})]})]})})}))})}),Object(d.jsxs)("div",{className:"chat-footer",children:[Object(d.jsx)("input",{type:"text",value:o,placeholder:"Hey...",onChange:function(e){l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}),Object(d.jsx)("button",{onClick:f,children:"\u25ba"})]})]})},O=o.a.connect("https://chatapp-h27d.onrender.com");var m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)(!1),h=Object(i.a)(u,2),b=h[0],m=h[1];return Object(d.jsx)("div",{className:"App",children:b?Object(d.jsx)(l,{socket:O,username:n,room:o}):Object(d.jsxs)("div",{className:"joinChatContainer",children:[Object(d.jsx)("h3",{children:"Join A Chat"}),Object(d.jsx)("input",{type:"text",placeholder:"Your Name...",onChange:function(e){a(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Room ID...",onChange:function(e){j(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){""!==n&&""!==o&&(O.emit("join_room",o),m(!0))},children:"Join A Room"})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,418)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[417,1,2]]]);
//# sourceMappingURL=main.9bd85311.chunk.js.map