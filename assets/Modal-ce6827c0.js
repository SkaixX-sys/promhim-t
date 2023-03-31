import{g as Ge,r as H,a as w,j as D}from"./index-f76da3a1.js";var V={},Xe={get exports(){return V},set exports(e){V=e}};const Qe={},Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"})),le=Ge(Ye),Ze="dotenv",et="16.0.3",tt="Loads environment variables from .env file",nt="lib/main.js",rt="lib/main.d.ts",st={".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},ot={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},it={type:"git",url:"git://github.com/motdotla/dotenv.git"},at=["dotenv","env",".env","environment","variables","config","settings"],ct="README.md",lt="BSD-2-Clause",ut={"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},ft={node:">=12"},dt={name:Ze,version:et,description:tt,main:nt,types:rt,exports:st,scripts:ot,repository:it,keywords:at,readmeFilename:ct,license:lt,devDependencies:ut,engines:ft},pt=le,Pe=le,ht=le,mt=dt,yt=mt.version,Et=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function bt(e){const t={};let n=e.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=Et.exec(n))!=null;){const s=r[1];let o=r[2]||"";o=o.trim();const i=o[0];o=o.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),i==='"'&&(o=o.replace(/\\n/g,`
`),o=o.replace(/\\r/g,"\r")),t[s]=o}return t}function ee(e){console.log(`[dotenv@${yt}][DEBUG] ${e}`)}function wt(e){return e[0]==="~"?Pe.join(ht.homedir(),e.slice(1)):e}function St(e){let t=Pe.resolve(process.cwd(),".env"),n="utf8";const r=Boolean(e&&e.debug),s=Boolean(e&&e.override);e&&(e.path!=null&&(t=wt(e.path)),e.encoding!=null&&(n=e.encoding));try{const o=K.parse(pt.readFileSync(t,{encoding:n}));return Object.keys(o).forEach(function(i){Object.prototype.hasOwnProperty.call(process.env,i)?(s===!0&&(process.env[i]=o[i]),r&&ee(s===!0?`"${i}" is already defined in \`process.env\` and WAS overwritten`:`"${i}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[i]=o[i]}),{parsed:o}}catch(o){return r&&ee(`Failed to load ${t} ${o.message}`),{error:o}}}const K={config:St,parse:bt};V.config=K.config;V.parse=K.parse;Xe.exports=K;function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ce}=Object.prototype,{getPrototypeOf:ue}=Object,fe=(e=>t=>{const n=Ce.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>fe(t)===e),G=e=>t=>typeof t===e,{isArray:j}=Array,v=G("undefined");function gt(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=N("ArrayBuffer");function Ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const Rt=G("string"),_=G("function"),De=G("number"),de=e=>e!==null&&typeof e=="object",At=e=>e===!0||e===!1,q=e=>{if(fe(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Nt=N("Date"),Tt=N("File"),xt=N("Blob"),Pt=N("FileList"),_t=e=>de(e)&&_(e.pipe),Ct=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ce.call(e)===t||_(e.toString)&&e.toString()===t)},Ft=N("URLSearchParams"),Dt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const je=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Be=e=>!v(e)&&e!==je;function oe(){const{caseless:e}=Be(this)&&this||{},t={},n=(r,s)=>{const o=e&&Le(t,s)||s;q(t[o])&&q(r)?t[o]=oe(t[o],r):q(r)?t[o]=oe({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Lt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&_(s)?e[o]=_e(s,n):e[o]=s},{allOwnKeys:r}),e),jt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ut=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},vt=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},It=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Mt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},qt=N("HTMLFormElement"),$t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),zt=N("RegExp"),Ue=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Jt=e=>{Ue(e,(t,n)=>{if(_(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},Wt=()=>{},Kt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),te="abcdefghijklmnopqrstuvwxyz",be="0123456789",ke={DIGIT:be,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+be},Gt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Xt(e){return!!(e&&_(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Qt=e=>{const t=new Array(10),n=(r,s)=>{if(de(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return I(r,(i,c)=>{const d=n(i,s+1);!v(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:j,isArrayBuffer:Fe,isBuffer:gt,isFormData:Ct,isArrayBufferView:Ot,isString:Rt,isNumber:De,isBoolean:At,isObject:de,isPlainObject:q,isUndefined:v,isDate:Nt,isFile:Tt,isBlob:xt,isRegExp:zt,isFunction:_,isStream:_t,isURLSearchParams:Ft,isTypedArray:It,isFileList:Pt,forEach:I,merge:oe,extend:Lt,trim:Dt,stripBOM:jt,inherits:Bt,toFlatObject:Ut,kindOf:fe,kindOfTest:N,endsWith:kt,toArray:vt,forEachEntry:Mt,matchAll:Ht,isHTMLForm:qt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:Ue,freezeMethods:Jt,toObjectSet:Vt,toCamelCase:$t,noop:Wt,toFiniteNumber:Kt,findKey:Le,global:je,isContextDefined:Be,ALPHABET:ke,generateString:Gt,isSpecCompliantForm:Xt,toJSONObject:Qt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=m.prototype,Ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ie[e]={value:e}});Object.defineProperties(m,Ie);Object.defineProperty(ve,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Yt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=Me(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Zt(e){return a.isArray(e)&&!e.some(ie)}const en=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,g){return!a.isUndefined(g[h])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function f(u,h,g){let O=u;if(u&&!g&&typeof u=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Zt(u)||(a.isFileList(u)||a.endsWith(h,"[]"))&&(O=a.toArray(u)))return h=Me(h),O.forEach(function(F,Z){!(a.isUndefined(F)||F===null)&&t.append(i===!0?we([h],Z,o):i===null?h:h+"[]",l(F))}),!1}return ie(u)?!0:(t.append(we(g,h,o),l(u)),!1)}const p=[],y=Object.assign(en,{defaultVisitor:f,convertValue:l,isVisitable:ie});function E(u,h){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(u),a.forEach(u,function(O,T){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(T)?T.trim():T,h,y))===!0&&E(O,h?h.concat(T):[T])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&X(e,this,t)}const He=pe.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function tn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(e,t,n){if(!t)return e;const r=n&&n.encode||tn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class nn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ge=nn,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rn=typeof URLSearchParams<"u"?URLSearchParams:pe,sn=typeof FormData<"u"?FormData:null,on=typeof Blob<"u"?Blob:null,an=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),cn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:rn,FormData:sn,Blob:on},isStandardBrowserEnv:an,isStandardBrowserWebWorkerEnv:cn,protocols:["http","https","file","blob","url","data"]};function ln(e,t){return X(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function un(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ze(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=fn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(un(r),s,n,0)}),n}return null}const dn={"Content-Type":void 0};function pn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Q={transitional:$e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ln(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),pn(t)):t}],transformResponse:[function(t){const n=this.transitional||Q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Q.headers[t]={}});a.forEach(["post","put","patch"],function(t){Q.headers[t]=a.merge(dn)});const he=Q,hn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&hn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function yn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function En(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function bn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const f=k(d);if(!f)throw new Error("header name must be a non-empty string");const p=a.findKey(s,f);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||d]=$(c))}const i=(c,d)=>a.forEach(c,(l,f)=>o(l,f,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!En(t)?i(mn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return yn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||ne(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const c=t?bn(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=k(i);r[c]||(wn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Y.prototype);a.freezeMethods(Y);const A=Y;function re(e,t){const n=this||he,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function Sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const gn=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function On(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Rn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!On(t)?Rn(e,t):t}const An=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Nn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),f=r[o];i||(i=l),n[s]=d,r[s]=l;let p=o,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=f&&l-f;return E?Math.round(y*1e3/E):void 0}}function Re(e,t){let n=0;const r=Tn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),l=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&l?(i-o)/d:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const xn=typeof XMLHttpRequest<"u",Pn=xn&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const E=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(E+":"+u))}const f=Ve(e.baseURL,e.url);l.open(e.method.toUpperCase(),qe(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function p(){if(!l)return;const E=A.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:E,config:e,request:l};Sn(function(O){n(O),d()},function(O){r(O),d()},h),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let u=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||$e;e.timeoutErrorMessage&&(u=e.timeoutErrorMessage),r(new m(u,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){const E=(e.withCredentials||An(f))&&e.xsrfCookieName&&gn.read(e.xsrfCookieName);E&&o.set(e.xsrfHeaderName,E)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(u,h){l.setRequestHeader(h,u)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Re(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Re(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=E=>{l&&(r(!E||E.type?new M(null,e,l):E),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Nn(f);if(y&&R.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},z={http:Yt,xhr:Pn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _n={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Ae(e){return se(e),e.headers=A.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_n.getAdapter(e.adapter||he.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Je(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Ne=e=>e instanceof A?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(l,f,p){return a.isPlainObject(l)&&a.isPlainObject(f)?a.merge.call({caseless:p},l,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(l,f,p){if(a.isUndefined(f)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,f,p)}function o(l,f){if(!a.isUndefined(f))return r(void 0,f)}function i(l,f){if(a.isUndefined(f)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function c(l,f,p){if(p in t)return r(l,f);if(p in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,f)=>s(Ne(l),Ne(f),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const p=d[f]||s,y=p(e[f],t[f],f);a.isUndefined(y)&&p!==c||(n[f]=y)}),n}const We="1.3.4",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};me.transitional=function(t,n,r){function s(o,i){return"[Axios v"+We+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Cn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ae={assertOptions:Cn,validators:me},P=ae.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ae.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!==void 0&&ae.assertOptions(s,{encode:P.function,serialize:P.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=A.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let f,p=0,y;if(!d){const u=[Ae.bind(this),void 0];for(u.unshift.apply(u,c),u.push.apply(u,l),y=u.length,f=Promise.resolve(n);p<y;)f=f.then(u[p++],u[p++]);return f}y=c.length;let E=n;for(p=0;p<y;){const u=c[p++],h=c[p++];try{E=u(E)}catch(g){h.call(this,g);break}}try{f=Ae.call(this,E)}catch(u){return Promise.reject(u)}for(p=0,y=l.length;p<y;)f=f.then(l[p++],l[p++]);return f}getUri(t){t=L(this.defaults,t);const n=Ve(t.baseURL,t.url);return qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(L(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const J=W;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new M(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}const Fn=ye;function Dn(e){return function(n){return e.apply(null,n)}}function Ln(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});const jn=ce;function Ke(e){const t=new J(e),n=_e(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ke(L(e,s))},n}const S=Ke(he);S.Axios=J;S.CanceledError=M;S.CancelToken=Fn;S.isCancel=Je;S.VERSION=We;S.toFormData=X;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Dn;S.isAxiosError=Ln;S.mergeConfig=L;S.AxiosHeaders=A;S.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);S.HttpStatusCode=jn;S.default=S;const xe=S;function Un({active:e,setActive:t}){const[n,r]=H.useState(!0),[s,o]=H.useState({}),[i,c]=H.useState({}),[d,l]=H.useState(),f="https://docs.google.com/forms/d/e/1FAIpQLScrBLtbM9yKksBCU1unfyYCmLoCbzA3O5L_ws1o7jnVIXiD0g/formResponse",p="entry.599392440",y="entry.1131487572",E="https://docs.google.com/forms/d/e/1FAIpQLSelfiy_cnKKQF2E3OvlE9mhjlF-U1Ml0_IIzbu0JRqo2VlOzA/formResponse",u="entry.178226530",h="entry.427354668",g="entry.1638684184",O=()=>{const b={};return s[p]||(b[p]="Введите имя"),s[y]?/^\+?\d+$/.test(s[y])||(b[y]="Неверный формат номера телефона"):b[y]="Введите номер телефона",b},T=()=>{const b={};return s[u]||(b[u]="Введите имя"),s[h]?/\S+@\S+\.\S+/.test(s[h])||(b[h]="Неверный формат адреса электронной почты"):b[h]="Введите почту",s[g]||(b[g]="Введите сообщение"),b},F=async b=>{b.preventDefault();const x=O();if(Object.keys(x).length>0){c(x);return}const U=f,C=new URLSearchParams(s).toString();l("Данные переданы"),o({}),c({}),setTimeout(()=>{t(!1),l("")},2e3),await xe.post(U,C)},Z=async b=>{b.preventDefault();const x=T();if(Object.keys(x).length>0){c(x);return}const U=E,C=new URLSearchParams(s).toString();l("Данные переданы"),o({}),c({}),setTimeout(()=>{l(""),t(!1)},2e3),await xe.post(U,C)},B=b=>{const{name:x,value:U}=b.target;o(C=>({...C,[x]:U})),c(C=>({...C,[x]:null}))};return w("div",{className:e?"modal active":"modal",onClick:()=>{t(!1),o({}),c({}),l("")},children:n?D("div",{className:e?"modal__content active":"modal__content",onClick:b=>b.stopPropagation(),children:[d?w("div",{className:"succes",children:d}):null,w("div",{className:"closeModal",onClick:()=>{t(!1)},children:"×"}),w("div",{className:"ccc",children:"ЗАКАЗАТЬ ЗВОНОК"}),D("form",{className:"form",onSubmit:F,children:[i[p]&&w("div",{className:"error",children:i[p]}),w("input",{type:"text",name:p,placeholder:"Ваше имя",value:s[p]||"",onChange:B}),i[y]&&w("div",{className:"error",children:i[y]}),w("input",{type:"phone",name:y,placeholder:"Ваш номер",value:s[y]||"",onChange:B}),D("div",{className:"take-consultation__callback",children:[w("div",{className:"take-consultation",onClick:()=>{r(!1),c({}),o({})},children:"Связь по почте"}),w("input",{type:"submit",value:"Отправить",className:"callback"})]})]})]}):D("div",{className:e?"modal__content active":"modal__content",onClick:b=>b.stopPropagation(),children:[d?w("div",{className:"succes",children:d}):null,w("div",{className:"ccc",children:"НАПИСАТЬ СООБЩЕНИЕ"}),D("form",{className:"form",onSubmit:Z,children:[i[u]&&w("div",{className:"error",children:i[u]}),w("input",{type:"text",name:u,placeholder:"Ваше имя",value:s[u]||"",onChange:B}),i[h]&&w("div",{className:"error",children:i[h]}),w("input",{type:"email",name:h,placeholder:"Ваша почта",value:s[h]||"",onChange:B}),i[g]&&w("div",{className:"error",children:i[g]}),w("textarea",{type:"text",name:g,placeholder:"Сообщение",value:s[g]||"",onChange:B}),D("div",{className:"take-consultation__callback",children:[w("div",{className:"take-consultation",onClick:()=>{r(!0),c({}),o({})},children:"Заказать звонок"}),w("input",{type:"submit",value:"Отправить",className:"callback"})]})]})]})})}export{Un as default};
