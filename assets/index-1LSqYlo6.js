import{g as $,r as R,j as d}from"./index-DXnnGGDh.js";var O={},D={exports:{}};(function(r){function o(e){return e&&e.__esModule?e:{default:e}}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports})(D);var N=D.exports,g={exports:{}},w={exports:{}},I;function U(){return I||(I=1,function(r){function o(e){if(Array.isArray(e))return e}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports}(w)),w.exports}var T={exports:{}},k;function C(){return k||(k=1,function(r){function o(e,t){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var n,u,p,c,a=[],s=!0,l=!1;try{if(p=(i=i.call(e)).next,t===0){if(Object(i)!==i)return;s=!1}else for(;!(s=(n=p.call(i)).done)&&(a.push(n.value),a.length!==t);s=!0);}catch(f){l=!0,u=f}finally{try{if(!s&&i.return!=null&&(c=i.return(),Object(c)!==c))return}finally{if(l)throw u}}return a}}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports}(T)),T.exports}var m={exports:{}},j={exports:{}},L;function Q(){return L||(L=1,function(r){function o(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports}(j)),j.exports}var M;function F(){return M||(M=1,function(r){var o=Q();function e(t,i){if(t){if(typeof t=="string")return o(t,i);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,i):void 0}}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}(m)),m.exports}var q={exports:{}},S;function P(){return S||(S=1,function(r){function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports}(q)),q.exports}var H;function z(){return H||(H=1,function(r){var o=U(),e=C(),t=F(),i=P();function n(u,p){return o(u)||e(u,p)||t(u,p)||i()}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports}(g)),g.exports}(function(r){var o=N;Object.defineProperty(r,"__esModule",{value:!0}),r.root=r.remove=r.get=r.file=r.default=void 0;var e=o(z()),t=r.get=function(a){var s=window.location.href.split("?");if(s.length<2)return!1;var l=s[1].split("&"),f=l.filter(function(h){var b=h.split("="),_=(0,e.default)(b,1),A=_[0];return A===a});if(f.length===0)return!1;var v=f[0].split("="),x=(0,e.default)(v,2),y=x[1];return y.split("#")[0]},i=r.remove=function(a){var s=window.location.href.split("?"),l=window.location.origin+window.location.pathname;if(s.length<2)return!1;var f=s[1].split("&"),v=a.split(" ").join("").split(","),x=f.filter(function(y){var h=y.split("="),b=(0,e.default)(h,1),_=b[0],A=v.filter(function(W){return W===_});return!(A.length>0)});return"".concat(l).concat(x.length>0?"?":"").concat(x.join("&"))},n=r.root=function(){var a=window.location.origin+window.location.pathname;if(a.indexOf(".")>0){var s=a.split("/");s.pop();var l=s.splice(0,2),f=(0,e.default)(l,1),v=f[0];return"".concat(v,"//").concat(s.join("/"),"/")}return a},u=r.file=function(){var a=window.location.pathname;return a.indexOf(".")>0?a.split("/").pop():"index.html"},p={file:u,root:n,get:t,remove:i};r.default=p})(O);const B=$(O),E={1:"https://30table.bitbucket.io/studio-template/2024-10-18__73d16/preview/","0.5":"https://30table.bitbucket.io/studio-template/2024-10-18__86a3e/preview/",0:"https://30table.bitbucket.io/studio-template/2024-10-18__1e556/preview/"},J=R.memo(()=>{R.useEffect(()=>{},[]);const r=B.get("threshold");return d.jsxs("div",{className:"Home",children:[d.jsx("div",{id:"parent-bg"}),d.jsx("div",{className:"flex h-[480px] w-full items-center justify-center bg-red-500",children:r&&E[r]&&d.jsx("iframe",{src:E[r],width:320,height:480})}),d.jsx("div",{id:"parent-bg"})]})});export{J as default};
