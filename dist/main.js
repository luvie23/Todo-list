(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]),d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),d.push([e.id,"html{\n    font-size: 14px;\n\n}\n\nbody{\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #6D6875;\n}\n\nheader{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n#content{\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    align-items: center;\n\n    background-color: #6D6875;\n}\n\n\n\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 200px;\n    font-size: 2rem;\n    background-color: #E5989B ;\n    color: white;\n    font-family: 'Bebas Neue', cursive;\n\n}\n\n#board{\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));\n    gap: 20px;\n    background-color: #B5838D;\n    height: 60vh;\n    width: 60vw;\n    margin-left: 5vw;\n    margin-right: 5vw;\n    border-radius: 5px;\n    overflow: auto;\n    padding: 50px;\n}\n\n.cards{\n    color: aliceblue;\n    font-family: 'Roboto', sans-serif;\n    width: 200px;\n    height: fit-content;\n    background-color: rgb(255, 180, 162, .4);\n    padding: 10px;\n    border-radius: 5px;\n    overflow-wrap: break-word;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.cards>p{\n    font-size: 1rem;\n    font-weight: 400;\n}\n\n.cards>span{\n    font-size: .8rem;\n    margin-right: 2vw;\n    font-weight: lighter;\n}\n\n\n#buttons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n    padding-bottom: 300px;\n    gap: 20px;\n\n}\n.card-button{\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    cursor: pointer;\n    \n\n}\n\n.button{\n    width: 120px;\n    height: 50px;\n    font-size: 2rem;\n    border: 0;\n    border-radius: 20px;\n    color: white;\n    background-color: rgb(10,10,10, .3);\n    font-family: 'Bebas Neue', cursive;\n    cursor: pointer;\n}\n\ntextarea {\n    resize: none;\n    border-radius: 5px;\n    border: 2px solid #ccc;\n}\ninput {\n    border-radius: 5px;\n    border: 2px solid #ccc;\n}\n  \n\nform{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 300px;\n    width: 200px;\n    background-color: rgb(255, 180, 162, .4);\n    font-family: 'Bebas Neue', cursive;\n    position: absolute;\n    margin-top: 30vh;\n    margin-left:  2vw;\n    z-index: 3;\n    gap: 10px;\n    border-radius: 5px;\n    border: 1px solid black;\n    \n}\n\nform>div{\n    display: flex;\n    margin-top: 20px;\n    gap: 2vw;\n\n}\n\n#buttonDiv>button{\n    border: 1px solid black;\n    cursor: pointer;\n    border-radius: 5px;\n    font-family: 'Bebas Neue', cursive;\n}\n\n#description{\n    height: 50px;\n}\n\n\n#completedPage{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(10,10,10, .5);\n    position: absolute;\n    z-index: 4;\n}\n\n\n@media only screen and (max-width: 600px) {\n    form {\n        margin-top: 50vh;\n    }\n  }",""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),d=n.n(i),a=n(565),c=n.n(a),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let b=[];function h(e){let t=e,n=document.getElementById("board");n.textContent="";for(let e=0;e<t.length;e++){let o=document.createElement("div");o.setAttribute("id","card"+e),o.className="cards",o.textContent=t[e].title;let r=document.createElement("p");r.textContent=t[e].description;let i=document.createElement("span");i.textContent=`Finish by: ${t[e].dueDate}`;let d=document.createElement("button");d.setAttribute("id","remove-button"+e),d.textContent="Done",d.className="card-button",d.onclick=function(){y(d.getAttribute("id").charAt(d.getAttribute("id").length-1))},o.appendChild(r),o.appendChild(i),o.appendChild(d),n.appendChild(o)}}let g=[];function v(e,t,n){return{title:e,description:t,dueDate:n}}const x=v("sample withadadasdasd long title","quick description on sample todo","2022-09-28");function y(e){var t,n;t=g.splice(e,1),n=(new Date).toISOString().slice(0,10),b.push(t[0].title+" Description: "+t[0].description+" Was due on: "+t[0].dueDate+" Completed on: "+n),h(g)}function E(){h(g)}g.push(x),function(){!function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","sidebar");const n=document.createElement("div");n.setAttribute("id","buttons");const o=document.createElement("button");o.textContent="COMPLETED",o.setAttribute("id","completedButton"),o.classList.add("button");const r=document.createElement("button");r.textContent="+ TODO",r.setAttribute("id","addTodo"),r.classList.add("button");const i=document.createElement("h1");i.textContent="TODO LIST",n.appendChild(o),n.appendChild(r),t.appendChild(i),t.appendChild(n),e.appendChild(t)}();const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","board"),e.appendChild(t)}(),E(),document.getElementById("addTodo").addEventListener("click",(function(){E(),this.disabled=!0,function(){const e=document.getElementById("content"),t=document.createElement("form");t.setAttribute("id","form");const n=document.createElement("input");n.setAttribute("id","title"),n.setAttribute("type","text");const o=document.createElement("label");o.innerText="Title:",o.setAttribute("for","title");const r=document.createElement("textarea");r.setAttribute("id","description"),r.setAttribute("type","text");const i=document.createElement("label");i.innerText="Description:",i.setAttribute("for","description");const d=document.createElement("input");d.setAttribute("id","dueDate"),d.setAttribute("type","date");const a=document.createElement("label");a.innerText="Due Date:",a.setAttribute("for","dueDate");const c=document.createElement("div");c.setAttribute("id","buttonDiv");const s=document.createElement("button");s.setAttribute("id","saveButton"),s.setAttribute("type","button"),s.textContent="Save";const l=document.createElement("button");l.setAttribute("id","closeButton"),l.setAttribute("type","button"),l.textContent="X",c.appendChild(l),c.appendChild(s),e.appendChild(t),t.appendChild(o),t.appendChild(n),t.appendChild(i),t.appendChild(r),t.appendChild(a),t.appendChild(d),t.appendChild(c),document.getElementById("closeButton").addEventListener("click",(function(){const e=document.getElementById("form");e.parentNode.removeChild(e),document.getElementById("addTodo").disabled=!1}))}(),document.getElementById("saveButton").addEventListener("click",(function(){!function(){let e=document.getElementById("title"),t=document.getElementById("description"),n=document.getElementById("dueDate");""===e.value||""===t.value||""===n.value?alert("Please enter the complete details"):(g.push(v(e.value,t.value,n.value)),h(g))}()}))})),document.getElementById("completedButton").addEventListener("click",(function(){!function(){const e=document.createElement("div");e.setAttribute("id","completedPage");const t=document.getElementById("content"),n=document.createElement("button");n.setAttribute("id","completePageClose"),n.textContent="X",n.classList.add("card-button"),t.appendChild(e),e.appendChild(n),function(){const e=document.getElementById("completedPage"),t=document.createElement("div");t.textContent="";for(let e=0;e<b.length;e++){const n=document.createElement("p");n.classList.add("cards"),n.textContent=b[e],t.appendChild(n)}e.appendChild(t)}(),document.getElementById("completePageClose").addEventListener("click",(function(){e.parentNode.removeChild(e)}))}()}))})()})();