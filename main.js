(()=>{var t={670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},318:(t,e,r)=>{var n=r(656),o=r(466),i=r(400),a=function(t){return function(e,r,a){var c,u=n(e),s=o(u.length),f=i(a,s);if(t&&r!=r){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},920:(t,e,r)=>{var n=r(871),o=r(887),i=r(236),a=r(463);t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,s=0;s<r.length;s++){var f=r[s];n(t,f)||c(t,f,u(e,f))}}},880:(t,e,r)=>{var n=r(781),o=r(463),i=r(114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},781:(t,e,r)=>{var n=r(293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},109:(t,e,r)=>{var n=r(854),o=r(236).f,i=r(880),a=r(320),c=r(505),u=r(920),s=r(705);t.exports=function(t,e){var r,f,p,l,v,d=t.target,h=t.global,y=t.stat;if(r=h?n:y?n[d]||c(d,{}):(n[d]||{}).prototype)for(f in e){if(l=e[f],p=t.noTargetGet?(v=o(r,f))&&v.value:r[f],!s(h?f:d+(y?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(r,f,l,t)}}},293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5:(t,e,r)=>{var n=r(857),o=r(854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},871:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},501:t=>{t.exports={}},664:(t,e,r)=>{var n=r(781),o=r(293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},361:(t,e,r)=>{var n=r(293),o=r(326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},788:(t,e,r)=>{var n=r(465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},909:(t,e,r)=>{var n,o,i,a=r(536),c=r(854),u=r(111),s=r(880),f=r(871),p=r(465),l=r(200),v=r(501),d=c.WeakMap;if(a){var h=p.state||(p.state=new d),y=h.get,b=h.has,g=h.set;n=function(t,e){return e.facade=t,g.call(h,t,e),e},o=function(t){return y.call(h,t)||{}},i=function(t){return b.call(h,t)}}else{var m=l("state");v[m]=!0,n=function(t,e){return e.facade=t,s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},705:(t,e,r)=>{var n=r(293),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},913:t=>{t.exports=!1},536:(t,e,r)=>{var n=r(854),o=r(788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},463:(t,e,r)=>{var n=r(781),o=r(664),i=r(670),a=r(593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},236:(t,e,r)=>{var n=r(781),o=r(296),i=r(114),a=r(656),c=r(593),u=r(871),s=r(664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},6:(t,e,r)=>{var n=r(324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},181:(t,e)=>{e.f=Object.getOwnPropertySymbols},324:(t,e,r)=>{var n=r(871),o=r(656),i=r(318).indexOf,a=r(501);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(a,r)&&n(c,r)&&s.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~i(s,r)||s.push(r));return s}},296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},887:(t,e,r)=>{var n=r(5),o=r(6),i=r(181),a=r(670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(854);t.exports=n},320:(t,e,r)=>{var n=r(854),o=r(880),i=r(871),a=r(505),c=r(788),u=r(909),s=u.get,f=u.enforce,p=String(String).split("String");(t.exports=function(t,e,r,c){var u,s=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(u=f(r)).source||(u.source=p.join("string"==typeof e?e:""))),t!==n?(s?!v&&t[e]&&(l=!0):delete t[e],l?t[e]=r:o(t,e,r)):l?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},505:(t,e,r)=>{var n=r(854),o=r(880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},200:(t,e,r)=>{var n=r(309),o=r(711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},465:(t,e,r)=>{var n=r(854),o=r(505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},309:(t,e,r)=>{var n=r(913),o=r(465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.10.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},400:(t,e,r)=>{var n=r(958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},656:(t,e,r)=>{var n=r(361),o=r(488);t.exports=function(t){return n(o(t))}},958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},466:(t,e,r)=>{var n=r(958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},70:(t,e,r)=>{var n=r(109),o=r(781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(463).f})},483:(t,e,r)=>{"use strict";var n,o=(n={},function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]});t.exports=function(t,e){if((e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}var i=document.createElement("link");if(i.rel="stylesheet",i.href=t,Object.keys(e.attributes).forEach((function(t){i.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(i);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(i)}return function(t){"string"==typeof t?i.href=t:i.parentNode.removeChild(i)}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.p="/OnlineReporting/",(()=>{"use strict";r(70);const t=r.p+"2d44d3a3acbd2eefe6a7dbc580e18272.png",e=r.p+"e2730aeaea49bf43feb5372f582bd239.png";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.backendUrl=t}var o,i;return o=r,(i=[{key:"run",value:function(){var r=document.querySelector(".online-widget__messages");new EventSource(this.backendUrl).onmessage=function(n){var o=JSON.parse(n.data),i=document.createElement("div");i.classList.add("newContainer");var a=document.createElement("div");a.classList.add("time"),a.textContent="".concat(o.timestamp);var c=document.createElement("div");if(c.classList.add("content"),c.textContent="".concat(o.text),r.appendChild(i),i.appendChild(a),i.appendChild(c),"goal"===o.type){var u=document.createElement("img");u.setAttribute("src",t),u.classList.add("goal"),r.appendChild(u)}if("freekick"===o.type){var s=document.createElement("img");s.setAttribute("src",e),s.classList.add("freekick"),r.appendChild(s)}}}}])&&n(o.prototype,i),r}())("https://daria-chizh-online-reporting.herokuapp.com/sse").run()})(),(()=>{"use strict";var t=r(483),e=r.n(t);const n=r.p+"87e5d6c623e5c748da8c310ac3126539.css";e()(n,{injectType:"linkTag",insert:"head"})})()})();