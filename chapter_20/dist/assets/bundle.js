(()=>{"use strict";var n={426:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.container {\r\n    margin: 40px;\r\n    margin-top: 60px;\r\n}\r\n\r\nbutton {\r\n    width: 200px;\r\n    background: #eee;\r\n    padding: 10px;\r\n    margin: 20px auto;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\nbutton:hover {\r\n    background: #d6d6d6;\r\n}",""]);const s=i},109:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,'.dropdown .trigger {\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 10px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown .trigger::after {\r\n    content: ">";\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 15px;\r\n    transform: rotate(90deg) scale(0.5, 1);\r\n    font-weight: bold;\r\n    transition: transform .3s;\r\n}\r\n\r\n.dropdown .trigger.active::after {\r\n    transform: rotate(-90deg) scale(0.5, 1);\r\n}\r\n\r\n.dropdown .content {\r\n    display: none;\r\n}\r\n\r\n.dropdown .content.active {\r\n    display: block;\r\n}',""]);const s=i},442:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,".snackbar {\r\n    width: 200px;\r\n    padding: 10px 20px;\r\n    position: fixed;\r\n    left: 50%;\r\n    margin-left: -120px;\r\n    top: 0;\r\n    border-radius: 0 0 5px 5px;\r\n    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);\r\n    background: #ffa1ed;\r\n    text-align: center;\r\n    color: #fff;\r\n    /* margin-top: -100%; */\r\n    transition: all .2s;\r\n    display: none;\r\n}\r\n\r\n.snackbar.active {\r\n    margin-top: 15px;\r\n    display: initial;\r\n}",""]);const s=i},27:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,".tabs>ul {\r\n    padding: 0;\r\n}\r\n\r\n.tabs .trigger {\r\n    list-style-type: none;\r\n    padding: 10px;\r\n    background: #f2f2f2;\r\n    margin: 4px;\r\n    border-radius: 6px;\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.tabs .trigger.active {\r\n    background: #ffa1ed;\r\n    color: white;\r\n    font-weight: 700;\r\n}\r\n\r\n.tabs .content {\r\n    background: #fbfbfb;\r\n    padding: 10px 20px;\r\n    border-radius: 6px;\r\n    display: none;\r\n}\r\n\r\n.tabs .content.active {\r\n    display: block;\r\n}",""]);const s=i},915:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,'.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    color: #ffa1ed;\r\n    border-bottom: 3px dotted #ffa1ed;\r\n    cursor: help;\r\n}\r\n\r\n.tip {\r\n    visibility: hidden;\r\n    width: 150px;\r\n    background-color: #ffa1ed;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    padding: 5px 2px;\r\n    position: absolute;\r\n    bottom: 120%;\r\n    left: 50%;\r\n    margin-left: -75px;\r\n    opacity: 0;\r\n    transition: opacity .3s;\r\n}\r\n\r\n.tip.active {\r\n    visibility: visible;\r\n    opacity: .85;\r\n}\r\n\r\n.tip::after {\r\n    content: "";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -4px;\r\n    border: 8px solid transparent;\r\n    border-top-color: #ffa1ed;\r\n    opacity: .85;\r\n}',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);e&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=e.base?c[0]+e.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var v=o(f,e);e.byIndex=s,r.splice(s,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);r[s].references--}for(var c=e(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=t(379),r=t.n(n),e=t(795),o=t.n(e),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var b=t(915),g={};function h(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),r()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var m=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=r,this.message=r.getAttribute("data-message")}var r,t;return r=n,(t=[{key:"init",value:function(){var n=document.createElement("div");n.classList.add("tip"),n.textContent=this.message,this.element.appendChild(n),this.element.addEventListener("mouseenter",(function(){return n.classList.add("active")})),this.element.addEventListener("mouseleave",(function(){return n.classList.remove("active")}))}}])&&h(r.prototype,t),n}(),y=t(109),x={};function k(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}x.styleTagTransform=p(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),r()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var w=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=r,this.trigger=r.querySelector(".trigger"),this.content=r.querySelector(".content")}var r,t;return r=n,(t=[{key:"init",value:function(){var n=this;this.trigger.addEventListener("click",(function(){n.trigger.classList.toggle("active"),n.content.classList.toggle("active")}))}}])&&k(r.prototype,t),n}(),E=t(27),Z={};function T(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}Z.styleTagTransform=p(),Z.setAttributes=c(),Z.insert=i().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=d(),r()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;var S=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=r,this.tabs=r.querySelectorAll(".trigger")}var r,t;return r=n,(t=[{key:"init",value:function(){var n=this;this.tabs.forEach((function(r){r.addEventListener("click",(function(r){n.toggleTabs(r),n.toggleContent(r)}))}))}},{key:"toggleTabs",value:function(n){this.tabs.forEach((function(n){return n.classList.remove("active")})),n.target.classList.add("active")}},{key:"toggleContent",value:function(n){this.container.querySelectorAll(".content").forEach((function(n){n.classList.remove("active")}));var r=n.target.getAttribute("data-target");this.container.querySelector(r).classList.add("active")}}])&&T(r.prototype,t),n}(),L=t(442),A={};function C(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}A.styleTagTransform=p(),A.setAttributes=c(),A.insert=i().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=d(),r()(L.Z,A),L.Z&&L.Z.locals&&L.Z.locals;var P=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.snackbar=document.createElement("div")}var r,t;return r=n,(t=[{key:"init",value:function(){this.snackbar.classList.add("snackbar"),document.querySelector("body").appendChild(this.snackbar)}},{key:"show",value:function(n){var r=this;this.snackbar.textContent=n,this.snackbar.classList.add("active"),setTimeout((function(){r.snackbar.classList.remove("active")}),4e3)}}])&&C(r.prototype,t),n}();new m(document.querySelector(".tooltip")).init(),document.querySelectorAll(".dropdown").forEach((function(n){new w(n).init()})),new S(document.querySelector(".tabs")).init();var q=new P;q.init(),document.querySelector("button").addEventListener("click",(function(){return q.show("you clicked me!")}))})()})();