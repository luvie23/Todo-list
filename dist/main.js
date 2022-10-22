(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]),a.push([t.id,"html{\n    font-size: 14px;\n\n}\n\nbody{\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #06B6D4;\n}\n\n\n\n#content{\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    align-items: center;\n\n    background-color: #38BDF8;\n}\n\n#sidebar{\n    height: 100%;\n    width: 200px;\n    background-color: #BAE6FD;\n}\n\n#board{\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));\n    gap: 20px;\n    background-color: #0C4A6E;\n    height: 60%;\n    width: 60%;\n    margin-left: 10%;\n    overflow: auto;\n    padding: 50px;\n}\n\n.cards{\n\n    width: 200px;\n    height: 150px;\n    background-color: antiquewhite;\n    padding: 10px;\n\n    overflow-wrap: break-word;\n}\n\n\n#buttons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 200px;\n    gap: 20px;\n\n}\n\n.button{\n    width: 120px;\n    height: 50px;\n    font-size: 2rem;\n    border: 0;\n    border-radius: 20px;\n    color: white;\n    background-color: rgb(10,10,10, .2);\n    font-family: 'Bebas Neue', cursive;\n}\n\ntextarea {\n    resize: none;\n}\n  \n\nform{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 300px;\n    width: 200px;\n    background-color: white;\n    position: absolute;\n    margin-top: 20vh;\n    margin-left:  2vw;\n    z-index: 3;\n\n    gap: 10px;\n}\n\nform>div{\n    display: flex;\n    margin-top: 20px;\n    gap: 2vw;\n}\n\n#description{\n    height: 50px;\n}\n",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var d=t[c],s=o.base?d[0]+o.base:d[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var p=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var d=o(t,r),s=0;s<i.length;s++){var u=n(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),u=n.n(s),l=n(589),p=n.n(l),m=n(426),f={};function h(t){let e=t,n=document.getElementById("board");n.textContent="";for(let t=0;t<e.length;t++){let o=document.createElement("div");o.setAttribute("id","card"+t),o.className="cards",o.textContent=e[t].title;let r=document.createElement("p");r.textContent=e[t].description;let i=document.createElement("span");i.textContent=`Finish by: ${e[t].dueDate}`;let a=document.createElement("button");a.setAttribute("id","remove-button"+t),a.textContent="Done",a.className="card-button",a.onclick=function(){g(a.getAttribute("id").charAt(a.getAttribute("id").length-1))},o.appendChild(r),o.appendChild(i),o.appendChild(a),n.appendChild(o)}}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let b=[],v=[];function g(t){v.push(b.splice(t,1)),h(b),console.log(v)}!function(){!function(){const t=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","sidebar");const n=document.createElement("div");n.setAttribute("id","buttons");const o=document.createElement("button");o.textContent="PROJECTS",o.setAttribute("id","projects"),o.classList.add("button");const r=document.createElement("button");r.textContent="+ TODO",r.setAttribute("id","addTodo"),r.classList.add("button"),n.appendChild(o),n.appendChild(r),e.appendChild(n),t.appendChild(e)}();const t=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","board"),t.appendChild(e)}(),document.getElementById("addTodo").addEventListener("click",(function(){this.disabled=!0,function(){const t=document.getElementById("content"),e=document.createElement("form");e.setAttribute("id","form");const n=document.createElement("input");n.setAttribute("id","title"),n.setAttribute("type","text");const o=document.createElement("label");o.innerText="Title:",o.setAttribute("for","title");const r=document.createElement("textarea");r.setAttribute("id","description"),r.setAttribute("type","text");const i=document.createElement("label");i.innerText="Description:",i.setAttribute("for","description");const a=document.createElement("input");a.setAttribute("id","dueDate"),a.setAttribute("type","date");const c=document.createElement("label");c.innerText="Due Date:",c.setAttribute("for","dueDate");const d=document.createElement("div"),s=document.createElement("button");s.setAttribute("id","saveButton"),s.setAttribute("type","button"),s.textContent="Save";const u=document.createElement("button");u.setAttribute("id","closeButton"),u.setAttribute("type","button"),u.textContent="X",d.appendChild(u),d.appendChild(s),t.appendChild(e),e.appendChild(o),e.appendChild(n),e.appendChild(i),e.appendChild(r),e.appendChild(c),e.appendChild(a),e.appendChild(d)}(),document.getElementById("saveButton").addEventListener("click",(function(){!function(){let t=document.getElementById("title"),e=document.getElementById("description"),n=document.getElementById("dueDate");""===t.value||""===e.value||""===n.value?alert("Please enter the complete details"):(b.push(function(t,e,n){return{title:t,description:e,dueDate:n}}(t.value,e.value,n.value)),h(b))}()}))}))})()})();