(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function _S(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Qf={exports:{}},wo={};var M0;function vS(){if(M0)return wo;M0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var y0;function xS(){return y0||(y0=1,Qf.exports=vS()),Qf.exports}var W=xS(),Jf={exports:{}},rt={};var E0;function SS(){if(E0)return rt;E0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(U,ee,pe){this.props=U,this.context=ee,this.refs=M,this.updater=pe||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function P(U,ee,pe){this.props=U,this.context=ee,this.refs=M,this.updater=pe||A}var O=P.prototype=new F;O.constructor=P,C(O,x.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function H(){}var L={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(U,ee,pe){var Re=pe.ref;return{$$typeof:o,type:U,key:ee,ref:Re!==void 0?Re:null,props:pe}}function w(U,ee){return R(U.type,ee,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function K(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(pe){return ee[pe]})}var Q=/\/+/g;function le(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):ee.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ee){U.status==="pending"&&(U.status="fulfilled",U.value=ee)},function(ee){U.status==="pending"&&(U.status="rejected",U.reason=ee)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,ee,pe,Re,Ce){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var ce=!1;if(U===null)ce=!0;else switch(J){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(U.$$typeof){case o:case t:ce=!0;break;case _:return ce=U._init,N(ce(U._payload),ee,pe,Re,Ce)}}if(ce)return Ce=Ce(U),ce=Re===""?"."+le(U,0):Re,z(Ce)?(pe="",ce!=null&&(pe=ce.replace(Q,"$&/")+"/"),N(Ce,ee,pe,"",function(Le){return Le})):Ce!=null&&(k(Ce)&&(Ce=w(Ce,pe+(Ce.key==null||U&&U.key===Ce.key?"":(""+Ce.key).replace(Q,"$&/")+"/")+ce)),ee.push(Ce)),1;ce=0;var be=Re===""?".":Re+":";if(z(U))for(var Be=0;Be<U.length;Be++)Re=U[Be],J=be+le(Re,Be),ce+=N(Re,ee,pe,J,Ce);else if(Be=E(U),typeof Be=="function")for(U=Be.call(U),Be=0;!(Re=U.next()).done;)Re=Re.value,J=be+le(Re,Be++),ce+=N(Re,ee,pe,J,Ce);else if(J==="object"){if(typeof U.then=="function")return N(fe(U),ee,pe,Re,Ce);throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ce}function B(U,ee,pe){if(U==null)return U;var Re=[],Ce=0;return N(U,Re,"","",function(J){return ee.call(pe,J,Ce++)}),Re}function ie(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(pe){(U._status===0||U._status===-1)&&(U._status=1,U._result=pe)},function(pe){(U._status===0||U._status===-1)&&(U._status=2,U._result=pe)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:B,forEach:function(U,ee,pe){B(U,function(){ee.apply(this,arguments)},pe)},count:function(U){var ee=0;return B(U,function(){ee++}),ee},toArray:function(U){return B(U,function(ee){return ee})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=v,rt.Children=Se,rt.Component=x,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=P,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,ee,pe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Re=C({},U.props),Ce=U.key;if(ee!=null)for(J in ee.key!==void 0&&(Ce=""+ee.key),ee)!$.call(ee,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&ee.ref===void 0||(Re[J]=ee[J]);var J=arguments.length-2;if(J===1)Re.children=pe;else if(1<J){for(var ce=Array(J),be=0;be<J;be++)ce[be]=arguments[be+2];Re.children=ce}return R(U.type,Ce,Re)},rt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},rt.createElement=function(U,ee,pe){var Re,Ce={},J=null;if(ee!=null)for(Re in ee.key!==void 0&&(J=""+ee.key),ee)$.call(ee,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ce[Re]=ee[Re]);var ce=arguments.length-2;if(ce===1)Ce.children=pe;else if(1<ce){for(var be=Array(ce),Be=0;Be<ce;Be++)be[Be]=arguments[Be+2];Ce.children=be}if(U&&U.defaultProps)for(Re in ce=U.defaultProps,ce)Ce[Re]===void 0&&(Ce[Re]=ce[Re]);return R(U,J,Ce)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:h,render:U}},rt.isValidElement=k,rt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ie}},rt.memo=function(U,ee){return{$$typeof:p,type:U,compare:ee===void 0?null:ee}},rt.startTransition=function(U){var ee=L.T,pe={};L.T=pe;try{var Re=U(),Ce=L.S;Ce!==null&&Ce(pe,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(H,Me)}catch(J){Me(J)}finally{ee!==null&&pe.types!==null&&(ee.types=pe.types),L.T=ee}},rt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},rt.use=function(U){return L.H.use(U)},rt.useActionState=function(U,ee,pe){return L.H.useActionState(U,ee,pe)},rt.useCallback=function(U,ee){return L.H.useCallback(U,ee)},rt.useContext=function(U){return L.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,ee){return L.H.useDeferredValue(U,ee)},rt.useEffect=function(U,ee){return L.H.useEffect(U,ee)},rt.useEffectEvent=function(U){return L.H.useEffectEvent(U)},rt.useId=function(){return L.H.useId()},rt.useImperativeHandle=function(U,ee,pe){return L.H.useImperativeHandle(U,ee,pe)},rt.useInsertionEffect=function(U,ee){return L.H.useInsertionEffect(U,ee)},rt.useLayoutEffect=function(U,ee){return L.H.useLayoutEffect(U,ee)},rt.useMemo=function(U,ee){return L.H.useMemo(U,ee)},rt.useOptimistic=function(U,ee){return L.H.useOptimistic(U,ee)},rt.useReducer=function(U,ee,pe){return L.H.useReducer(U,ee,pe)},rt.useRef=function(U){return L.H.useRef(U)},rt.useState=function(U){return L.H.useState(U)},rt.useSyncExternalStore=function(U,ee,pe){return L.H.useSyncExternalStore(U,ee,pe)},rt.useTransition=function(){return L.H.useTransition()},rt.version="19.2.4",rt}var b0;function Uh(){return b0||(b0=1,Jf.exports=SS()),Jf.exports}var Ai=Uh(),$f={exports:{}},Do={},ed={exports:{}},td={};var T0;function MS(){return T0||(T0=1,(function(o){function t(N,B){var ie=N.length;N.push(B);e:for(;0<ie;){var Me=ie-1>>>1,Se=N[Me];if(0<l(Se,B))N[Me]=B,N[ie]=Se,ie=Me;else break e}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var B=N[0],ie=N.pop();if(ie!==B){N[0]=ie;e:for(var Me=0,Se=N.length,U=Se>>>1;Me<U;){var ee=2*(Me+1)-1,pe=N[ee],Re=ee+1,Ce=N[Re];if(0>l(pe,ie))Re<Se&&0>l(Ce,pe)?(N[Me]=Ce,N[Re]=ie,Me=Re):(N[Me]=pe,N[ee]=ie,Me=ee);else if(Re<Se&&0>l(Ce,ie))N[Me]=Ce,N[Re]=ie,Me=Re;else break e}}return B}function l(N,B){var ie=N.sortIndex-B.sortIndex;return ie!==0?ie:N.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,v=null,S=3,E=!1,A=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(N){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=N)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function z(N){if(C=!1,O(N),!A)if(i(m)!==null)A=!0,H||(H=!0,K());else{var B=i(p);B!==null&&fe(z,B.startTime-N)}}var H=!1,L=-1,$=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<$)}function k(){if(M=!1,H){var N=o.unstable_now();R=N;var B=!0;try{e:{A=!1,C&&(C=!1,F(L),L=-1),E=!0;var ie=S;try{t:{for(O(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,S=v.priorityLevel;var Se=Me(v.expirationTime<=N);if(N=o.unstable_now(),typeof Se=="function"){v.callback=Se,O(N),B=!0;break t}v===i(m)&&s(m),O(N)}else s(m);v=i(m)}if(v!==null)B=!0;else{var U=i(p);U!==null&&fe(z,U.startTime-N),B=!1}}break e}finally{v=null,S=ie,E=!1}B=void 0}}finally{B?K():H=!1}}}var K;if(typeof P=="function")K=function(){P(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,le=Q.port2;Q.port1.onmessage=k,K=function(){le.postMessage(null)}}else K=function(){x(k,0)};function fe(N,B){L=x(function(){N(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(N){switch(S){case 1:case 2:case 3:var B=3;break;default:B=S}var ie=S;S=B;try{return N()}finally{S=ie}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ie=S;S=N;try{return B()}finally{S=ie}},o.unstable_scheduleCallback=function(N,B,ie){var Me=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Me+ie:Me):ie=Me,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ie+Se,N={id:_++,callback:B,priorityLevel:N,startTime:ie,expirationTime:Se,sortIndex:-1},ie>Me?(N.sortIndex=ie,t(p,N),i(m)===null&&N===i(p)&&(C?(F(L),L=-1):C=!0,fe(z,ie-Me))):(N.sortIndex=Se,t(m,N),A||E||(A=!0,H||(H=!0,K()))),N},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(N){var B=S;return function(){var ie=S;S=B;try{return N.apply(this,arguments)}finally{S=ie}}}})(td)),td}var A0;function yS(){return A0||(A0=1,ed.exports=MS()),ed.exports}var nd={exports:{}},wn={};var R0;function ES(){if(R0)return wn;R0=1;var o=Uh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:E}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var C0;function bS(){if(C0)return nd.exports;C0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nd.exports=ES(),nd.exports}var w0;function TS(){if(w0)return Do;w0=1;var o=yS(),t=Uh(),i=bS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,r=f;break}if(b===r){g=!0,r=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,r=c;break}if(b===r){g=!0,r=f,a=c;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var fe=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function U(e){return{current:e}}function ee(e){0>Se||(e.current=Me[Se],Me[Se]=null,Se--)}function pe(e,n){Se++,Me[Se]=e.current,e.current=n}var Re=U(null),Ce=U(null),J=U(null),ce=U(null);function be(e,n){switch(pe(J,n),pe(Ce,e),pe(Re,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xg(n),e=Wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(Re),pe(Re,e)}function Be(){ee(Re),ee(Ce),ee(J)}function Le(e){e.memoizedState!==null&&pe(ce,e);var n=Re.current,a=Wg(n,e.type);n!==a&&(pe(Ce,e),pe(Re,a))}function ot(e){Ce.current===e&&(ee(Re),ee(Ce)),ce.current===e&&(ee(ce),To._currentValue=ie)}var qt,ct;function ut(e){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+ct}var Et=!1;function at(e,n){if(!e||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ue){var se=ue}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(ue){se=ue}e.call(_e.prototype)}}else{try{throw Error()}catch(ue){se=ue}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ue){if(ue&&se&&typeof ue.stack=="string")return[ue.stack,se.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var I=g.split(`
`),ne=b.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===ne.length)for(r=I.length-1,c=ne.length-1;1<=r&&0<=c&&I[r]!==ne[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==ne[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==ne[c]){var he=`
`+I[r].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=r&&0<=c);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function Xt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return ut("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Xt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Zt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,Nt=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,D=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,de=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,De=o.unstable_IdlePriority,Xe=o.log,tt=o.unstable_setDisableYieldValue,Ee=null,Te=null;function He(e){if(typeof Xe=="function"&&tt(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,e)}catch{}}var ze=Math.clz32?Math.clz32:X,Ue=Math.log,ft=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ue(e)/ft|0)|0}var Oe=256,Ae=262144,Ie=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=ye(r):(g&=b,g!==0?c=ye(g):a||(a=b&~e,a!==0&&(c=ye(a))))):(b=r&~f,b!==0?c=ye(b):g!==0?c=ye(g):a||(a=r&~e,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function we(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,r,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,ne=e.hiddenUpdates;for(a=g&~a;0<a;){var he=31-ze(a),_e=1<<he;b[he]=0,I[he]=-1;var se=ne[he];if(se!==null)for(ne[he]=null,he=0;he<se.length;he++){var ue=se[he];ue!==null&&(ue.lane&=-536870913)}a&=~_e}r!==0&&Ko(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Fr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ze(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ds(e,n){var a=n&-n;return a=(a&42)!==0?1:zr(a),(a&(e.suspendedLanes|n))!==0?0:a}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ir(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:p0(e.type))}function Di(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var ni=Math.random().toString(36).slice(2),sn="__reactFiber$"+ni,_n="__reactProps$"+ni,_i="__reactContainer$"+ni,Ns="__reactEvents$"+ni,Ls="__reactListeners$"+ni,Qo="__reactHandles$"+ni,Br="__reactResources$"+ni,es="__reactMarker$"+ni;function Hr(e){delete e[sn],delete e[_n],delete e[Ns],delete e[Ls],delete e[Qo]}function xa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Jg(e);e!==null;){if(a=e[sn])return a;e=Jg(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[sn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ts(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ma(e){var n=e[Br];return n||(n=e[Br]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[es]=!0}var Y=new Set,oe={};function ae(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(oe[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Pe={};function Ve(e){return Zt.call(Pe,e)?!0:Zt.call(Ge,e)?!1:Ne.test(e)?Pe[e]=!0:(Ge[e]=!0,!1)}function We(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=wt(e)?"checked":"value";e._valueTracker=Kt(e,n,""+e[n])}}function Lt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=wt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dt=/[\n"\\]/g;function st(e){return e.replace(Dt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(e,n,a,r,c,f,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?xn(e,g,$e(n)):a!=null?xn(e,g,$e(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$e(b):e.removeAttribute("name")}function Vi(e,n,a,r,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Wt(e)}function xn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ii(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pt(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function Sn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(fe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Wt(e)}function fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Os(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&yn(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&yn(e,f,n[f])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ps=null,Fs=null;function kh(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(vn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[_n]||null;if(!c)throw Error(s(90));vn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Lt(r)}break e;case"textarea":Pt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ii(e,!!a.multiple,n,!1)}}}var Zc=!1;function Xh(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var r=e(n);return r}finally{if(Zc=!1,(Ps!==null||Fs!==null)&&(Bl(),Ps&&(n=Ps,e=Fs,Fs=Ps=null,kh(n),e)))for(n=0;n<e.length;n++)kh(e[n])}}function Gr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Xi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Kc=!1}var ya=null,Qc=null,$o=null;function Wh(){if($o)return $o;var e,n=Qc,a=n.length,r,c="value"in ya?ya.value:ya.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return $o=c.slice(e,1<r?1-r:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function qh(){return!1}function zn(e){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:qh,this.isPropagationStopped=qh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=zn(ns),kr=v({},ns,{view:0,detail:0}),mv=zn(kr),Jc,$c,Xr,il=v({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Jc=e.screenX-Xr.screenX,$c=e.screenY-Xr.screenY):$c=Jc=0,Xr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Yh=zn(il),gv=v({},il,{dataTransfer:0}),_v=zn(gv),vv=v({},kr,{relatedTarget:0}),eu=zn(vv),xv=v({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=zn(xv),Mv=v({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=zn(Mv),Ev=v({},ns,{data:0}),jh=zn(Ev),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Av[e])?!!n[e]:!1}function tu(){return Rv}var Cv=v({},kr,{key:function(e){if(e.key){var n=bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=zn(Cv),Dv=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=zn(Dv),Uv=v({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Nv=zn(Uv),Lv=v({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=zn(Lv),Pv=v({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=zn(Pv),zv=v({},ns,{newState:0,oldState:0}),Iv=zn(zv),Bv=[9,13,27,32],nu=Xi&&"CompositionEvent"in window,Wr=null;Xi&&"documentMode"in document&&(Wr=document.documentMode);var Hv=Xi&&"TextEvent"in window&&!Wr,Kh=Xi&&(!nu||Wr&&8<Wr&&11>=Wr),Qh=" ",Jh=!1;function $h(e,n){switch(e){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function Gv(e,n){switch(e){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:(Jh=!0,Qh);case"textInput":return e=n.data,e===Qh&&Jh?null:e;default:return null}}function Vv(e,n){if(zs)return e==="compositionend"||!nu&&$h(e,n)?(e=Wh(),$o=Qc=ya=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kh&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kv[e.type]:n==="textarea"}function np(e,n,a,r){Ps?Fs?Fs.push(r):Fs=[r]:Ps=r,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var qr=null,Yr=null;function Xv(e){Ig(e,0)}function al(e){var n=ts(e);if(Lt(n))return e}function ip(e,n){if(e==="change")return n}var ap=!1;if(Xi){var iu;if(Xi){var au="oninput"in document;if(!au){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),au=typeof sp.oninput=="function"}iu=au}else iu=!1;ap=iu&&(!document.documentMode||9<document.documentMode)}function rp(){qr&&(qr.detachEvent("onpropertychange",op),Yr=qr=null)}function op(e){if(e.propertyName==="value"&&al(Yr)){var n=[];np(n,Yr,e,jc(e)),Xh(Xv,n)}}function Wv(e,n,a){e==="focusin"?(rp(),qr=n,Yr=a,qr.attachEvent("onpropertychange",op)):e==="focusout"&&rp()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Yr)}function Yv(e,n){if(e==="click")return al(n)}function jv(e,n){if(e==="input"||e==="change")return al(n)}function Zv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Zv;function jr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Zt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,n){var a=lp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lp(a)}}function up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kv=Xi&&"documentMode"in document&&11>=document.documentMode,Is=null,ru=null,Zr=null,ou=!1;function dp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Is==null||Is!==Ke(r)||(r=Is,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=ql(ru,"onSelect"),0<r.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Is)))}function is(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Bs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},lu={},hp={};Xi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function as(e){if(lu[e])return lu[e];if(!Bs[e])return e;var n=Bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return lu[e]=n[a];return e}var pp=as("animationend"),mp=as("animationiteration"),gp=as("animationstart"),Qv=as("transitionrun"),Jv=as("transitionstart"),$v=as("transitioncancel"),_p=as("transitionend"),vp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function xi(e,n){vp.set(e,n),ae(n,[e])}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Hs=0,uu=0;function rl(){for(var e=Hs,n=uu=Hs=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&xp(a,c,f)}}function ol(e,n,a,r){ai[Hs++]=e,ai[Hs++]=n,ai[Hs++]=a,ai[Hs++]=r,uu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fu(e,n,a,r){return ol(e,n,a,r),ll(e)}function ss(e,n){return ol(e,null,null,n),ll(e)}function xp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ze(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ll(e){if(50<vo)throw vo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gs={};function ex(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,r){return new ex(e,n,a,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,r,c,f){var g=0;if(r=e,typeof e=="function")du(e)&&(g=1);else if(typeof e=="string")g=sS(e,a,Re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case R:return e=qn(31,a,n,c),e.elementType=R,e.lanes=f,e;case C:return rs(a.children,c,f,n);case M:g=8,c|=24;break;case x:return e=qn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case z:return e=qn(13,a,n,c),e.elementType=z,e.lanes=f,e;case H:return e=qn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break e;case F:g=9;break e;case O:g=11;break e;case L:g=14;break e;case $:g=16,r=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=qn(g,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function rs(e,n,a,r){return e=qn(7,e,r,n),e.lanes=a,e}function hu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Mp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var yp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},yp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Vs=[],ks=0,ul=null,Kr=0,ri=[],oi=0,Ea=null,Ui=1,Ni="";function qi(e,n){Vs[ks++]=Kr,Vs[ks++]=ul,ul=e,Kr=n}function Ep(e,n,a){ri[oi++]=Ui,ri[oi++]=Ni,ri[oi++]=Ea,Ea=e;var r=Ui;e=Ni;var c=32-ze(r)-1;r&=~(1<<c),a+=1;var f=32-ze(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ui=1<<32-ze(n)+c|a<<c|r,Ni=f+e}else Ui=1<<f|a<<c|r,Ni=e}function mu(e){e.return!==null&&(qi(e,1),Ep(e,1,0))}function gu(e){for(;e===ul;)ul=Vs[--ks],Vs[ks]=null,Kr=Vs[--ks],Vs[ks]=null;for(;e===Ea;)Ea=ri[--oi],ri[oi]=null,Ni=ri[--oi],ri[oi]=null,Ui=ri[--oi],ri[oi]=null}function bp(e,n){ri[oi++]=Ui,ri[oi++]=Ni,ri[oi++]=Ea,Ui=n.id,Ni=n.overflow,Ea=e}var En=null,Yt=null,xt=!1,ba=null,li=!1,_u=Error(s(519));function Ta(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(si(n,e)),_u}function Tp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[_n]=r,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)gt(So[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Vi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Vg(n.textContent,a)?(r.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),r.onScroll!=null&&gt("scroll",n),r.onScrollEnd!=null&&gt("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ta(e,!0)}function Ap(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Xs(e){if(e!==En)return!1;if(!xt)return Ap(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&Yt&&Ta(e),Ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=Qg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=Qg(e)}else n===27?(n=Yt,Ba(e.type)?(e=Gf,Gf=null,Yt=e):Yt=n):Yt=En?ui(e.stateNode.nextSibling):null;return!0}function os(){Yt=En=null,xt=!1}function vu(){var e=ba;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),ba=null),e}function Qr(e){ba===null?ba=[e]:ba.push(e)}var xu=U(null),ls=null,Yi=null;function Aa(e,n,a){pe(xu,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=xu.current,ee(xu)}function Su(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Su(f.return,a,e),r||(g=null);break e}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Su(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ws(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=c.type;Wn(c.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(c===ce.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&Mu(n,e,a,r),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cs(e){ls=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Rp(ls,e)}function dl(e,n){return ls===null&&cs(e),Rp(e,n)}function Rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(e===null)throw Error(s(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return a}var tx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},nx=o.unstable_scheduleCallback,ix=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new tx,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&nx(ix,function(){e.controller.abort()})}var $r=null,Eu=0,qs=0,Ys=null;function ax(e,n){if($r===null){var a=$r=[];Eu=0,qs=Rf(),Ys={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,n.then(Cp,Cp),n}function Cp(){if(--Eu===0&&$r!==null){Ys!==null&&(Ys.status="fulfilled");var e=$r;$r=null,qs=0,Ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var wp=N.S;N.S=function(e,n){dg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(e,n),wp!==null&&wp(e,n)};var us=U(null);function bu(){var e=us.current;return e!==null?e:kt.pooledCache}function hl(e,n){n===null?pe(us,us.current):pe(us,n.pool)}function Dp(){var e=bu();return e===null?null:{parent:rn._currentValue,pool:e}}var js=Error(s(460)),Tu=Error(s(474)),pl=Error(s(542)),ml={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Op(e),e}throw ds=n,js}}function fs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ds=a,js):a}}var ds=null;function Lp(){if(ds===null)throw Error(s(459));var e=ds;return ds=null,e}function Op(e){if(e===js||e===pl)throw Error(s(483))}var Zs=null,eo=0;function gl(e){var n=eo;return eo+=1,Zs===null&&(Zs=[]),Np(Zs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Pp(e){function n(j,V){if(e){var te=j.deletions;te===null?(j.deletions=[V],j.flags|=16):te.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Wi(j,V),j.index=0,j.sibling=null,j}function f(j,V,te){return j.index=te,e?(te=j.alternate,te!==null?(te=te.index,te<V?(j.flags|=67108866,V):te):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,V,te,ge){return V===null||V.tag!==6?(V=hu(te,j.mode,ge),V.return=j,V):(V=c(V,te),V.return=j,V)}function I(j,V,te,ge){var Qe=te.type;return Qe===C?he(j,V,te.props.children,ge,te.key):V!==null&&(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===$&&fs(Qe)===V.type)?(V=c(V,te.props),to(V,te),V.return=j,V):(V=cl(te.type,te.key,te.props,null,j.mode,ge),to(V,te),V.return=j,V)}function ne(j,V,te,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=pu(te,j.mode,ge),V.return=j,V):(V=c(V,te.children||[]),V.return=j,V)}function he(j,V,te,ge,Qe){return V===null||V.tag!==7?(V=rs(te,j.mode,ge,Qe),V.return=j,V):(V=c(V,te),V.return=j,V)}function _e(j,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=hu(""+V,j.mode,te),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return te=cl(V.type,V.key,V.props,null,j.mode,te),to(te,V),te.return=j,te;case A:return V=pu(V,j.mode,te),V.return=j,V;case $:return V=fs(V),_e(j,V,te)}if(fe(V)||K(V))return V=rs(V,j.mode,te,null),V.return=j,V;if(typeof V.then=="function")return _e(j,gl(V),te);if(V.$$typeof===P)return _e(j,dl(j,V),te);_l(j,V)}return null}function se(j,V,te,ge){var Qe=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Qe!==null?null:b(j,V,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case E:return te.key===Qe?I(j,V,te,ge):null;case A:return te.key===Qe?ne(j,V,te,ge):null;case $:return te=fs(te),se(j,V,te,ge)}if(fe(te)||K(te))return Qe!==null?null:he(j,V,te,ge,null);if(typeof te.then=="function")return se(j,V,gl(te),ge);if(te.$$typeof===P)return se(j,V,dl(j,te),ge);_l(j,te)}return null}function ue(j,V,te,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get(te)||null,b(V,j,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case E:return j=j.get(ge.key===null?te:ge.key)||null,I(V,j,ge,Qe);case A:return j=j.get(ge.key===null?te:ge.key)||null,ne(V,j,ge,Qe);case $:return ge=fs(ge),ue(j,V,te,ge,Qe)}if(fe(ge)||K(ge))return j=j.get(te)||null,he(V,j,ge,Qe,null);if(typeof ge.then=="function")return ue(j,V,te,gl(ge),Qe);if(ge.$$typeof===P)return ue(j,V,te,dl(V,ge),Qe);_l(V,ge)}return null}function ke(j,V,te,ge){for(var Qe=null,At=null,je=V,dt=V=0,vt=null;je!==null&&dt<te.length;dt++){je.index>dt?(vt=je,je=null):vt=je.sibling;var Rt=se(j,je,te[dt],ge);if(Rt===null){je===null&&(je=vt);break}e&&je&&Rt.alternate===null&&n(j,je),V=f(Rt,V,dt),At===null?Qe=Rt:At.sibling=Rt,At=Rt,je=vt}if(dt===te.length)return a(j,je),xt&&qi(j,dt),Qe;if(je===null){for(;dt<te.length;dt++)je=_e(j,te[dt],ge),je!==null&&(V=f(je,V,dt),At===null?Qe=je:At.sibling=je,At=je);return xt&&qi(j,dt),Qe}for(je=r(je);dt<te.length;dt++)vt=ue(je,j,dt,te[dt],ge),vt!==null&&(e&&vt.alternate!==null&&je.delete(vt.key===null?dt:vt.key),V=f(vt,V,dt),At===null?Qe=vt:At.sibling=vt,At=vt);return e&&je.forEach(function(Xa){return n(j,Xa)}),xt&&qi(j,dt),Qe}function et(j,V,te,ge){if(te==null)throw Error(s(151));for(var Qe=null,At=null,je=V,dt=V=0,vt=null,Rt=te.next();je!==null&&!Rt.done;dt++,Rt=te.next()){je.index>dt?(vt=je,je=null):vt=je.sibling;var Xa=se(j,je,Rt.value,ge);if(Xa===null){je===null&&(je=vt);break}e&&je&&Xa.alternate===null&&n(j,je),V=f(Xa,V,dt),At===null?Qe=Xa:At.sibling=Xa,At=Xa,je=vt}if(Rt.done)return a(j,je),xt&&qi(j,dt),Qe;if(je===null){for(;!Rt.done;dt++,Rt=te.next())Rt=_e(j,Rt.value,ge),Rt!==null&&(V=f(Rt,V,dt),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return xt&&qi(j,dt),Qe}for(je=r(je);!Rt.done;dt++,Rt=te.next())Rt=ue(je,j,dt,Rt.value,ge),Rt!==null&&(e&&Rt.alternate!==null&&je.delete(Rt.key===null?dt:Rt.key),V=f(Rt,V,dt),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return e&&je.forEach(function(gS){return n(j,gS)}),xt&&qi(j,dt),Qe}function Vt(j,V,te,ge){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case E:e:{for(var Qe=te.key;V!==null;){if(V.key===Qe){if(Qe=te.type,Qe===C){if(V.tag===7){a(j,V.sibling),ge=c(V,te.props.children),ge.return=j,j=ge;break e}}else if(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===$&&fs(Qe)===V.type){a(j,V.sibling),ge=c(V,te.props),to(ge,te),ge.return=j,j=ge;break e}a(j,V);break}else n(j,V);V=V.sibling}te.type===C?(ge=rs(te.props.children,j.mode,ge,te.key),ge.return=j,j=ge):(ge=cl(te.type,te.key,te.props,null,j.mode,ge),to(ge,te),ge.return=j,j=ge)}return g(j);case A:e:{for(Qe=te.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(j,V.sibling),ge=c(V,te.children||[]),ge.return=j,j=ge;break e}else{a(j,V);break}else n(j,V);V=V.sibling}ge=pu(te,j.mode,ge),ge.return=j,j=ge}return g(j);case $:return te=fs(te),Vt(j,V,te,ge)}if(fe(te))return ke(j,V,te,ge);if(K(te)){if(Qe=K(te),typeof Qe!="function")throw Error(s(150));return te=Qe.call(te),et(j,V,te,ge)}if(typeof te.then=="function")return Vt(j,V,gl(te),ge);if(te.$$typeof===P)return Vt(j,V,dl(j,te),ge);_l(j,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(j,V.sibling),ge=c(V,te),ge.return=j,j=ge):(a(j,V),ge=hu(te,j.mode,ge),ge.return=j,j=ge),g(j)):a(j,V)}return function(j,V,te,ge){try{eo=0;var Qe=Vt(j,V,te,ge);return Zs=null,Qe}catch(je){if(je===js||je===pl)throw je;var At=qn(29,je,null,j.mode);return At.lanes=ge,At.return=j,At}}}var hs=Pp(!0),Fp=Pp(!1),Ra=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ut&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ll(e),xp(e,null,a),n}return ol(e,r,n,a),ll(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Fr(e,a)}}function Cu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function io(){if(wu){var e=Ys;if(e!==null)throw e}}function ao(e,n,a,r){wu=!1;var c=e.updateQueue;Ra=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,ne=I.next;I.next=null,g===null?f=ne:g.next=ne,g=I;var he=e.alternate;he!==null&&(he=he.updateQueue,b=he.lastBaseUpdate,b!==g&&(b===null?he.firstBaseUpdate=ne:b.next=ne,he.lastBaseUpdate=I))}if(f!==null){var _e=c.baseState;g=0,he=ne=I=null,b=f;do{var se=b.lane&-536870913,ue=se!==b.lane;if(ue?(_t&se)===se:(r&se)===se){se!==0&&se===qs&&(wu=!0),he!==null&&(he=he.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ke=e,et=b;se=n;var Vt=a;switch(et.tag){case 1:if(ke=et.payload,typeof ke=="function"){_e=ke.call(Vt,_e,se);break e}_e=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=et.payload,se=typeof ke=="function"?ke.call(Vt,_e,se):ke,se==null)break e;_e=v({},_e,se);break e;case 2:Ra=!0}}se=b.callback,se!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=c.callbacks,ue===null?c.callbacks=[se]:ue.push(se))}else ue={lane:se,tag:b.tag,payload:b.payload,callback:b.callback,next:null},he===null?(ne=he=ue,I=_e):he=he.next=ue,g|=se;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ue=b,b=ue.next,ue.next=null,c.lastBaseUpdate=ue,c.shared.pending=null}}while(!0);he===null&&(I=_e),c.baseState=I,c.firstBaseUpdate=ne,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Oa|=g,e.lanes=g,e.memoizedState=_e}}function zp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zp(a[e],n)}var Ks=U(null),vl=U(0);function Bp(e,n){e=ia,pe(vl,e),pe(Ks,n),ia=e|n.baseLanes}function Du(){pe(vl,ia),pe(Ks,Ks.current)}function Uu(){ia=vl.current,ee(Ks),ee(vl)}var Yn=U(null),ci=null;function Da(e){var n=e.alternate;pe(tn,tn.current&1),pe(Yn,e),ci===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(ci=e)}function Nu(e){pe(tn,tn.current),pe(Yn,e),ci===null&&(ci=e)}function Hp(e){e.tag===22?(pe(tn,tn.current),pe(Yn,e),ci===null&&(ci=e)):Ua()}function Ua(){pe(tn,tn.current),pe(Yn,Yn.current)}function jn(e){ee(Yn),ci===e&&(ci=null),ee(tn)}var tn=U(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,lt=null,Ht=null,on=null,Sl=!1,Qs=!1,ps=!1,Ml=0,so=0,Js=null,rx=0;function Jt(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,r,c,f){return Zi=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Em:Zu,ps=!1,f=a(r,c),ps=!1,Qs&&(f=Vp(n,a,r,c)),Gp(e),f}function Gp(e){N.H=lo;var n=Ht!==null&&Ht.next!==null;if(Zi=0,on=Ht=lt=null,Sl=!1,so=0,Js=null,n)throw Error(s(300));e===null||ln||(e=e.dependencies,e!==null&&fl(e)&&(ln=!0))}function Vp(e,n,a,r){lt=e;var c=0;do{if(Qs&&(Js=null),so=0,Qs=!1,25<=c)throw Error(s(301));if(c+=1,on=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=bm,f=n(a,r)}while(Qs);return f}function ox(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(lt.flags|=1024),n}function Pu(){var e=Ml!==0;return Ml=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}Zi=0,on=Ht=lt=null,Qs=!1,so=Ml=0,Js=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?lt.memoizedState=on=e:on=on.next=e,on}function nn(){if(Ht===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=on===null?lt.memoizedState:on.next;if(n!==null)on=n,Ht=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},on===null?lt.memoizedState=on=e:on=on.next=e}return on}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=so;return so+=1,Js===null&&(Js=[]),e=Np(Js,e,n),n=lt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Em:Zu),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===P)return bn(e)}throw Error(s(438,String(e)))}function Iu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=lt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=w;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=nn();return Bu(n,Ht,e)}function Bu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=g=null,I=null,ne=n,he=!1;do{var _e=ne.lane&-536870913;if(_e!==ne.lane?(_t&_e)===_e:(Zi&_e)===_e){var se=ne.revertLane;if(se===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),_e===qs&&(he=!0);else if((Zi&se)===se){ne=ne.next,se===qs&&(he=!0);continue}else _e={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},I===null?(b=I=_e,g=f):I=I.next=_e,lt.lanes|=se,Oa|=se;_e=ne.action,ps&&a(f,_e),f=ne.hasEagerState?ne.eagerState:a(f,_e)}else se={lane:_e,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},I===null?(b=I=se,g=f):I=I.next=se,lt.lanes|=_e,Oa|=_e;ne=ne.next}while(ne!==null&&ne!==n);if(I===null?g=f:I.next=b,!Wn(f,e.memoizedState)&&(ln=!0,he&&(a=Ys,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Hu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function kp(e,n,a){var r=lt,c=nn(),f=xt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Wn((Ht||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,ku(qp.bind(null,r,c,e),[e]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,$s(9,{destroy:void 0},Wp.bind(null,r,c,a,n),null),kt===null)throw Error(s(349));f||(Zi&127)!==0||Xp(r,n,a)}return a}function Xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=yl(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wp(e,n,a,r){n.value=a,n.getSnapshot=r,Yp(n)&&jp(e)}function qp(e,n,a){return a(function(){Yp(n)&&jp(e)})}function Yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function jp(e){var n=ss(e,2);n!==null&&Vn(n,e,2)}function Gu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),ps){He(!0);try{a()}finally{He(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function Zp(e,n,a,r){return e.baseState=a,Bu(e,Ht,typeof r=="function"?r:Ki)}function lx(e,n,a,r,c){if(Rl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Kp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var b=a(c,r),I=N.S;I!==null&&I(g,b),Qp(e,n,b)}catch(ne){Vu(e,n,ne)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(c,r),Qp(e,n,f)}catch(ne){Vu(e,n,ne)}}function Qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Jp(e,n,r)},function(r){return Vu(e,n,r)}):Jp(e,n,a)}function Jp(e,n,a){n.status="fulfilled",n.value=a,$p(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Kp(e,a)))}function Vu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,$p(n),n=n.next;while(n!==r)}e.action=null}function $p(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function em(e,n){return n}function tm(e,n){if(xt){var a=kt.formState;if(a!==null){e:{var r=lt;if(xt){if(Yt){t:{for(var c=Yt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Yt=ui(c.nextSibling),r=c.data==="F!";break e}}Ta(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:em,lastRenderedState:n},a.queue=r,a=Sm.bind(null,lt,r),r.dispatch=a,r=Gu(!1),f=ju.bind(null,lt,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=lx.bind(null,lt,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function nm(e){var n=nn();return im(n,Ht,e)}function im(e,n,a){if(n=Bu(e,n,em)[0],e=bl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(g){throw g===js?pl:g}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,$s(9,{destroy:void 0},cx.bind(null,c,a),null)),[r,f,e]}function cx(e,n){e.action=n}function am(e){var n=nn(),a=Ht;if(a!==null)return im(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function $s(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=lt.updateQueue,n===null&&(n=yl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function sm(){return nn().memoizedState}function Tl(e,n,a,r){var c=Ln();lt.flags|=e,c.memoizedState=$s(1|n,{destroy:void 0},a,r===void 0?null:r)}function Al(e,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Ht!==null&&r!==null&&Lu(r,Ht.memoizedState.deps)?c.memoizedState=$s(n,f,a,r):(lt.flags|=e,c.memoizedState=$s(1|n,f,a,r))}function rm(e,n){Tl(8390656,8,e,n)}function ku(e,n){Al(2048,8,e,n)}function ux(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=yl(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function om(e){var n=nn().memoizedState;return ux({ref:n,nextImpl:e}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function lm(e,n){return Al(4,2,e,n)}function cm(e,n){return Al(4,4,e,n)}function um(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fm(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,um.bind(null,n,e),a)}function Xu(){}function dm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function hm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=e(),ps){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[r,n],r}function Wu(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=pg(),lt.lanes|=e,Oa|=e,a)}function pm(e,n,a,r){return Wn(a,n)?a:Ks.current!==null?(e=Wu(e,a,r),Wn(e,n)||(ln=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(_t&261930)===0?(ln=!0,e.memoizedState=a):(e=pg(),lt.lanes|=e,Oa|=e,n)}function mm(e,n,a,r,c){var f=B.p;B.p=f!==0&&8>f?f:8;var g=N.T,b={};N.T=b,ju(e,!1,n,a);try{var I=c(),ne=N.S;if(ne!==null&&ne(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=sx(I,r);oo(e,n,he,Qn(e))}else oo(e,n,r,Qn(e))}catch(_e){oo(e,n,{then:function(){},status:"rejected",reason:_e},Qn())}finally{B.p=f,g!==null&&b.types!==null&&(g.types=b.types),N.T=g}}function fx(){}function qu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=gm(e).queue;mm(e,c,n,ie,a===null?fx:function(){return _m(e),a(r)})}function gm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _m(e){var n=gm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},Qn())}function Yu(){return bn(To)}function vm(){return nn().memoizedState}function xm(){return nn().memoizedState}function dx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Ca(a);var r=wa(n,e,a);r!==null&&(Vn(r,n,a),no(r,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function hx(e,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)?Mm(n,a):(a=fu(e,n,a,r),a!==null&&(Vn(a,e,r),ym(a,n,r)))}function Sm(e,n,a){var r=Qn();oo(e,n,a,r)}function oo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))Mm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,g))return ol(e,n,c,0),kt===null&&rl(),!1}catch{}if(a=fu(e,n,c,r),a!==null)return Vn(a,e,r),ym(a,n,r),!0}return!1}function ju(e,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(n)throw Error(s(479))}else n=fu(e,a,r,2),n!==null&&Vn(n,e,2)}function Rl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function Mm(e,n){Qs=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Fr(e,a)}}var lo={readContext:bn,use:El,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};lo.useEffectEvent=Jt;var Em={readContext:bn,use:El,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:rm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,um.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var r=e();if(ps){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(ps){He(!0);try{a(n)}finally{He(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=hx.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=Sm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Ln();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=mm.bind(null,lt,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=lt,c=Ln();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(_t&127)!==0||Xp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,rm(qp.bind(null,r,f,e),[e]),r.flags|=2048,$s(9,{destroy:void 0},Wp.bind(null,r,f,a,n),null),a},useId:function(){var e=Ln(),n=kt.identifierPrefix;if(xt){var a=Ni,r=Ui;a=(r&~(1<<32-ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=dx.bind(null,lt)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:bn,use:El,useCallback:dm,useContext:bn,useEffect:ku,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:cm,useMemo:hm,useReducer:bl,useRef:sm,useState:function(){return bl(Ki)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return pm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=bl(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Yu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=nn();return Zp(a,Ht,e,n)},useMemoCache:Iu,useCacheRefresh:xm};Zu.useEffectEvent=om;var bm={readContext:bn,use:El,useCallback:dm,useContext:bn,useEffect:ku,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:cm,useMemo:hm,useReducer:Hu,useRef:sm,useState:function(){return Hu(Ki)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return Ht===null?Wu(a,e,n):pm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Hu(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Yu,useFormState:am,useActionState:am,useOptimistic:function(e,n){var a=nn();return Ht!==null?Zp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:xm};bm.useEffectEvent=om;function Ku(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Qn(),c=Ca(r);c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,r),n!==null&&(Vn(n,e,r),no(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Qn(),c=Ca(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,r),n!==null&&(Vn(n,e,r),no(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),r=Ca(a);r.tag=2,n!=null&&(r.callback=n),n=wa(e,r,a),n!==null&&(Vn(n,e,a),no(n,e,a))}};function Tm(e,n,a,r,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function Am(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function ms(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Rm(e){sl(e)}function Cm(e){console.error(e)}function wm(e){sl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Dm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Um(e){return e=Ca(e),e.tag=3,e}function Nm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Dm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,r),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function px(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Hl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(e,r,c)),!1;case 22:return a.flags|=65536,r===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(e,r,c)),!1}throw Error(s(435,a.tag))}return bf(e,r,c),Hl(),!1}if(xt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==_u&&(e=Error(s(422),{cause:r}),Qr(si(e,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),Qr(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,a),c=Ju(e.stateNode,r,c),Cu(e,c),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),_o===null?_o=[f]:_o.push(f),$t!==4&&($t=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ju(a.stateNode,r,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Um(c),Nm(c,e,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),ln=!1;function Tn(e,n,a,r){n.child=e===null?Fp(n,null,a,r):hs(n,e.child,a,r)}function Lm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return cs(n),r=Ou(e,n,a,g,f,c),b=Pu(),e!==null&&!ln?(Fu(e,n,c),Qi(e,n,c)):(xt&&b&&mu(n),n.flags|=1,Tn(e,n,r,c),n.child)}function Om(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pm(e,n,f,r,c)):(e=cl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(g,r)&&e.ref===n.ref)return Qi(e,n,c)}return n.flags|=1,e=Wi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Pm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(jr(f,r)&&e.ref===n.ref)if(ln=!1,n.pendingProps=r=f,lf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Qi(e,n,c)}return ef(e,n,a,r,c)}function Fm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return zm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Bp(n,f):Du(),Hp(n);else return r=n.lanes=536870912,zm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(hl(n,f.cachePool),Bp(n,f),Ua(),n.memoizedState=null):(e!==null&&hl(n,null),Du(),Ua());return Tn(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zm(e,n,a,r,c){var f=bu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),Du(),Hp(n),e!==null&&Ws(e,n,r,!0),n.childLanes=c,null}function wl(e,n){return n=Ul({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Im(e,n,a){return hs(n,e.child,null,a),e=wl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function mx(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(r.mode==="hidden")return e=wl(n,r),n.lanes=536870912,co(null,e);if(Nu(n),(e=Yt)?(e=Kg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,En=n,Yt=null)):e=null,e===null)throw Ta(n);return n.lanes=536870912,null}return wl(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Im(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||Ws(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(r=kt,r!==null&&(g=Ds(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ss(e,g),Vn(r,e,g),$u;Hl(),n=Im(e,n,a)}else e=f.treeContext,Yt=ui(g.nextSibling),En=n,xt=!0,ba=null,li=!1,e!==null&&bp(n,e),n=wl(n,r),n.flags|=4096;return n}return e=Wi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,r,c){return cs(n),a=Ou(e,n,a,r,void 0,c),r=Pu(),e!==null&&!ln?(Fu(e,n,c),Qi(e,n,c)):(xt&&r&&mu(n),n.flags|=1,Tn(e,n,a,c),n.child)}function Bm(e,n,a,r,c,f){return cs(n),n.updateQueue=null,a=Vp(n,r,a,c),Gp(e),r=Pu(),e!==null&&!ln?(Fu(e,n,f),Qi(e,n,f)):(xt&&r&&mu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Hm(e,n,a,r,c){if(cs(n),n.stateNode===null){var f=Gs,g=a.contextType;typeof g=="object"&&g!==null&&(f=bn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?bn(g):Gs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ku(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Qu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=ms(a,b);f.props=I;var ne=f.context,he=a.contextType;g=Gs,typeof he=="object"&&he!==null&&(g=bn(he));var _e=a.getDerivedStateFromProps;he=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||ne!==g)&&Am(n,f,r,g),Ra=!1;var se=n.memoizedState;f.state=se,ao(n,r,f,c),io(),ne=n.memoizedState,b||se!==ne||Ra?(typeof _e=="function"&&(Ku(n,a,_e,r),ne=n.memoizedState),(I=Ra||Tm(n,a,I,r,se,ne,g))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),f.props=r,f.state=ne,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(e,n),g=n.memoizedProps,he=ms(a,g),f.props=he,_e=n.pendingProps,se=f.context,ne=a.contextType,I=Gs,typeof ne=="object"&&ne!==null&&(I=bn(ne)),b=a.getDerivedStateFromProps,(ne=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_e||se!==I)&&Am(n,f,r,I),Ra=!1,se=n.memoizedState,f.state=se,ao(n,r,f,c),io();var ue=n.memoizedState;g!==_e||se!==ue||Ra||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof b=="function"&&(Ku(n,a,b,r),ue=n.memoizedState),(he=Ra||Tm(n,a,he,r,se,ue,I)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ue,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ue,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ue),f.props=r,f.state=ue,f.context=I,r=he):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=hs(n,e.child,null,c),n.child=hs(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Qi(e,n,c),e}function Gm(e,n,a,r){return os(),n.flags|=256,Tn(e,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Dp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Vm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?Da(n):Ua(),(e=Yt)?(e=Kg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,En=n,Yt=null)):e=null,e===null)throw Ta(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(Ua(),c=n.mode,b=Ul({mode:"hidden",children:b},c),r=rs(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,g,a),n.memoizedState=tf,co(null,r)):(Da(n),sf(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),b=r.fallback,c=n.mode,r=Ul({mode:"visible",children:r.children},c),b=rs(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,hs(n,e.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,g,a),n.memoizedState=tf,n=co(null,r));else if(Da(n),Hf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var ne=g.dgst;g=ne,r=Error(s(419)),r.stack="",r.digest=g,Qr({value:r,source:null,stack:null}),n=rf(e,n,a)}else if(ln||Ws(e,n,a,!1),g=(a&e.childLanes)!==0,ln||g){if(g=kt,g!==null&&(r=Ds(g,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ss(e,r),Vn(g,e,r),$u;Bf(b)||Hl(),n=rf(e,n,a)}else Bf(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Yt=ui(b.nextSibling),En=n,xt=!0,ba=null,li=!1,e!==null&&bp(n,e),n=sf(n,r.children),n.flags|=4096);return n}return c?(Ua(),b=r.fallback,c=n.mode,I=e.child,ne=I.sibling,r=Wi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,ne!==null?b=Wi(ne,b):(b=rs(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,co(null,r),r=n.child,b=e.child.memoizedState,b===null?b=nf(a):(c=b.cachePool,c!==null?(I=rn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Dp(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=af(e,g,a),n.memoizedState=tf,co(e.child,r)):(Da(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return hs(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Su(e.return,n,a)}function of(e,n,a,r,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Xm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=tn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,pe(tn,g),Tn(e,n,r,a),r=xt?Kr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&xl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ws(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function gx(e,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Aa(n,rn,e.memoizedState.cache),os();break;case 27:case 5:Le(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(Da(n),e=Qi(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ws(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Xm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),pe(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Fm(e,n,a,n.pendingProps);case 24:Aa(n,rn,e.memoizedState.cache)}return Qi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return ln=!1,gx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,xt&&(n.flags&1048576)!==0&&Ep(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=fs(n.elementType),n.type=e,typeof e=="function")du(e)?(r=ms(e,r),n.tag=1,n=Hm(null,n,e,r,a)):(n.tag=0,n=ef(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===O){n.tag=11,n=Lm(null,n,e,r,a);break e}else if(c===L){n.tag=14,n=Om(null,n,e,r,a);break e}}throw n=le(e)||e,Error(s(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ms(r,n.pendingProps),Hm(e,n,r,c,a);case 3:e:{if(be(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(e,n),ao(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Aa(n,rn,r),r!==f.cache&&Mu(n,[rn],a,!0),io(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,r,a);break e}else if(r!==c){c=si(Error(s(424)),n),Qr(c),n=Gm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Yt=ui(e.firstChild),En=n,xt=!0,ba=null,li=!0,a=Fp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(os(),r===c){n=Qi(e,n,a);break e}Tn(e,n,r,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=n0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,r=Yl(J.current).createElement(a),r[sn]=n,r[_n]=e,An(r,a,e),T(r),n.stateNode=r):n.memoizedState=n0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Le(n),e===null&&xt&&(r=n.stateNode=$g(n.type,n.pendingProps,J.current),En=n,li=!0,c=Yt,Ba(n.type)?(Gf=c,Yt=ui(r.firstChild)):Yt=c),Tn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=r=Yt)&&(r=qx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,En=n,Yt=ui(r.firstChild),li=!1,c=!0):c=!1),c||Ta(n)),Le(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Ff(c,f)?r=null:g!==null&&Ff(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(e,n,ox,null,null,a),To._currentValue=c),Dl(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&xt&&((e=a=Yt)&&(a=Yx(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,Yt=null,e=!0):e=!1),e||Ta(n)),null;case 13:return Vm(e,n,a);case 4:return be(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=hs(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return Lm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Aa(n,n.type,r.value),Tn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,cs(n),c=bn(c),r=r(c),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Om(e,n,n.type,n.pendingProps,a);case 15:return Pm(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return mx(e,n,a);case 22:return Fm(e,n,a,n.pendingProps);case 24:return cs(n),r=bn(rn),e===null?(c=bu(),c===null&&(c=kt,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),Aa(n,rn,c)):((e.lanes&a)!==0&&(Ru(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,rn,r)):(r=f.cache,Aa(n,rn,r),r!==c.cache&&Mu(n,[rn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(e){e.flags|=4}function cf(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(vg())e.flags|=8192;else throw ds=ml,Tu}else e.flags&=-16777217}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!o0(n))if(vg())e.flags|=8192;else throw ds=ml,Tu}function Nl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,ir|=n)}function uo(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function _x(e,n,a){var r=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(rn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xs(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),jt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(jt(n),qm(n,f)):(jt(n),cf(n,c,null,r,a))):f?f!==e.memoizedState?(Ji(n),jt(n),qm(n,f)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ji(n),jt(n),cf(n,c,e,r,a)),null;case 27:if(ot(n),a=J.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}e=Re.current,Xs(n)?Tp(n):(e=$g(c,r,a),n.stateNode=e,Ji(n))}return jt(n),null;case 5:if(ot(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(f=Re.current,Xs(n))Tp(n);else{var g=Yl(J.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[sn]=n,f[_n]=r;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(An(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ji(n)}}return jt(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,Xs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Vg(e.nodeValue,a)),e||Ta(n,!0)}else e=Yl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Xs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),jt(n),null);case 4:return Be(),e===null&&Uf(n.stateNode.containerInfo),jt(n),null;case 10:return ji(n.type),jt(n),null;case 19:if(ee(tn),r=n.memoizedState,r===null)return jt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,uo(r,!1),e=f.updateQueue,n.updateQueue=e,Nl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return pe(tn,tn.current&1|2),xt&&qi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&y()>zl&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(e=xl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Nl(n,e),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xt)return jt(n),null}else 2*y()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=y(),e.sibling=null,a=tn.current,pe(tn,c?a&1|2:a&1),xt&&qi(n,r.treeForkCount),e):(jt(n),null);case 22:case 23:return jn(n),Uu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ee(us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(rn),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(rn),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ot(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(tn),null;case 4:return Be(),null;case 10:return ji(n.type),null;case 22:case 23:return jn(n),Uu(),e!==null&&ee(us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(rn),null;case 25:return null;default:return null}}function Ym(e,n){switch(gu(n),n.tag){case 3:ji(rn),Be();break;case 26:case 27:case 5:ot(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:ee(tn);break;case 10:ji(n.type);break;case 22:case 23:jn(n),Uu(),e!==null&&ee(us);break;case 24:ji(rn)}}function fo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(b){zt(n,n.return,b)}}function Na(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var I=a,ne=b;try{ne()}catch(he){zt(c,I,he)}}}r=r.next}while(r!==f)}}catch(he){zt(n,n.return,he)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(r){zt(e,e.return,r)}}}function Zm(e,n,a){a.props=ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){zt(e,n,r)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){zt(e,n,c)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function uf(e,n,a){try{var r=e.stateNode;Hx(r,e.type,a,n),r[_n]=n}catch(c){zt(e,e.return,c)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(r!==4&&(r===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Ll(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,r,a),n[sn]=e,n[_n]=a}catch(f){zt(e,e.return,f)}}var $i=!1,cn=!1,hf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,mn=null;function xx(e,n){if(e=e.containerInfo,Of=ec,e=fp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,b=-1,I=-1,ne=0,he=0,_e=e,se=null;t:for(;;){for(var ue;_e!==a||c!==0&&_e.nodeType!==3||(b=g+c),_e!==f||r!==0&&_e.nodeType!==3||(I=g+r),_e.nodeType===3&&(g+=_e.nodeValue.length),(ue=_e.firstChild)!==null;)se=_e,_e=ue;for(;;){if(_e===e)break t;if(se===a&&++ne===c&&(b=g),se===f&&++he===r&&(I=g),(ue=_e.nextSibling)!==null)break;_e=se,se=_e.parentNode}_e=ue}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},ec=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var ke=ms(a.type,c);e=r.getSnapshotBeforeUpdate(ke,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){zt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function eg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&fo(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){zt(a,a.return,g)}else{var c=ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){zt(a,a.return,g)}}r&64&&jm(a),r&512&&ho(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ip(e,n)}catch(g){zt(a,a.return,g)}}break;case 27:n===null&&r&4&&Jm(a);case 26:case 5:ta(e,a),n===null&&r&4&&Km(a),r&512&&ho(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&ig(e,a);break;case 13:ta(e,a),r&4&&ag(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Cx.bind(null,a),jx(e,a))));break;case 22:if(r=a.memoizedState!==null||$i,!r){n=n!==null&&n.memoizedState!==null||cn,c=$i;var f=cn;$i=r,(cn=n)&&!f?na(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),$i=c,cn=f}break;case 30:break;default:ta(e,a)}}function tg(e){var n=e.alternate;n!==null&&(e.alternate=null,tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,In=!1;function ea(e,n,a){for(a=a.child;a!==null;)ng(e,n,a),a=a.sibling}function ng(e,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:cn||Li(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Li(a,n);var r=Qt,c=In;Ba(a.type)&&(Qt=a.stateNode,In=!1),ea(e,n,a),yo(a.stateNode),Qt=r,In=c;break;case 5:cn||Li(a,n);case 6:if(r=Qt,c=In,Qt=null,ea(e,n,a),Qt=r,In=c,Qt!==null)if(In)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Qt!==null&&(In?(e=Qt,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fr(e)):jg(Qt,a.stateNode));break;case 4:r=Qt,c=In,Qt=a.stateNode.containerInfo,In=!0,ea(e,n,a),Qt=r,In=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),ea(e,n,a);break;case 1:cn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Zm(a,n,r)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,ea(e,n,a),cn=r;break;default:ea(e,n,a)}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fr(e)}catch(a){zt(n,n.return,a)}}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fr(e)}catch(a){zt(n,n.return,a)}}function Sx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(s(435,e.tag))}}function Ol(e,n){var a=Sx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=wx.bind(null,e,r);r.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(Ba(b.type)){Qt=b.stateNode,In=!1;break e}break;case 5:Qt=b.stateNode,In=!1;break e;case 3:case 4:Qt=b.stateNode.containerInfo,In=!0;break e}b=b.return}if(Qt===null)throw Error(s(160));ng(f,g,c),Qt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sg(n,e),n=n.sibling}var Si=null;function sg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),r&4&&(Na(3,e,e.return),fo(3,e),Na(5,e,e.return));break;case 1:Bn(n,e),Hn(e),r&512&&(cn||a===null||Li(a,a.return)),r&64&&$i&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Si;if(Bn(n,e),Hn(e),r&512&&(cn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[es]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,r,a),f[sn]=e,T(f),r=f;break e;case"link":var g=s0("link","href",c).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break t}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;case"meta":if(g=s0("meta","content",c).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break t}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,T(f),r=f}e.stateNode=r}else r0(c,e.type,e.stateNode);else e.stateNode=a0(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?r0(c,e.type,e.stateNode):a0(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),r&512&&(cn||a===null||Li(a,a.return)),a!==null&&r&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),r&512&&(cn||a===null||Li(a,a.return)),e.flags&32){c=e.stateNode;try{fn(c,"")}catch(ke){zt(e,e.return,ke)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,uf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(hf=!0);break;case 6:if(Bn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(ke){zt(e,e.return,ke)}}break;case 3:if(Kl=null,c=Si,Si=jl(n.containerInfo),Bn(n,e),Si=c,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(ke){zt(e,e.return,ke)}hf&&(hf=!1,rg(e));break;case 4:r=Si,Si=jl(e.stateNode.containerInfo),Bn(n,e),Hn(e),Si=r;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=y()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,ne=$i,he=cn;if($i=ne||c,cn=he||I,Bn(n,e),cn=he,$i=ne,Hn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||$i||cn||gs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=I.stateNode;var _e=I.memoizedProps.style,se=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;b.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(ke){zt(I,I.return,ke)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(ke){zt(I,I.return,ke)}}}else if(n.tag===18){if(a===null){I=n;try{var ue=I.stateNode;c?Zg(ue,!0):Zg(I.stateNode,!1)}catch(ke){zt(I,I.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ol(e,a))));break;case 19:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Qm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(e);Ll(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var b=ff(e);Ll(e,b,g);break;case 3:case 4:var I=a.stateNode.containerInfo,ne=ff(e);df(e,ne,I);break;default:throw Error(s(161))}}catch(he){zt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function gs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),gs(n);break;case 27:yo(n.stateNode);case 26:case 5:Li(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}e=e.sibling}}function na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),fo(4,f);break;case 1:if(na(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){zt(r,r.return,ne)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)zp(I[c],b)}catch(ne){zt(r,r.return,ne)}}a&&g&64&&jm(f),ho(f,f.return);break;case 27:Jm(f);case 26:case 5:na(c,f,a),a&&r===null&&g&4&&Km(f),ho(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&g&4&&ig(c,f);break;case 13:na(c,f,a),a&&g&4&&ag(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),ho(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function Mi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,r),n=n.sibling}function og(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,r),c&2048&&fo(9,n);break;case 1:Mi(e,n,a,r);break;case 3:Mi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(c&2048){Mi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){zt(n,n.return,I)}}else Mi(e,n,a,r);break;case 31:Mi(e,n,a,r);break;case 13:Mi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,r):po(e,n):f._visibility&2?Mi(e,n,a,r):(f._visibility|=2,er(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(g,n);break;case 24:Mi(e,n,a,r),c&2048&&mf(n.alternate,n);break;default:Mi(e,n,a,r)}}function er(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,b=a,I=r,ne=g.flags;switch(g.tag){case 0:case 11:case 15:er(f,g,b,I,c),fo(8,g);break;case 23:break;case 22:var he=g.stateNode;g.memoizedState!==null?he._visibility&2?er(f,g,b,I,c):po(f,g):(he._visibility|=2,er(f,g,b,I,c)),c&&ne&2048&&pf(g.alternate,g);break;case 24:er(f,g,b,I,c),c&&ne&2048&&mf(g.alternate,g);break;default:er(f,g,b,I,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&pf(r.alternate,r);break;case 24:po(a,r),c&2048&&mf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function tr(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)lg(e,n,a),e=e.sibling}function lg(e,n,a){switch(e.tag){case 26:tr(e,n,a),e.flags&mo&&e.memoizedState!==null&&rS(a,Si,e.memoizedState,e.memoizedProps);break;case 5:tr(e,n,a);break;case 3:case 4:var r=Si;Si=jl(e.stateNode.containerInfo),tr(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,tr(e,n,a),mo=r):tr(e,n,a));break;default:tr(e,n,a)}}function cg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,fg(r,e)}cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ug(e),e=e.sibling}function ug(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Na(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):go(e);break;default:go(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,fg(r,e)}cg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function fg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else e:for(a=e;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(tg(r),r===a){mn=null;break e}if(c!==null){c.return=f,mn=c;break e}mn=f}}}var Mx={getCacheForType:function(e){var n=bn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(rn).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,kt=null,mt=null,_t=0,Ft=0,Zn=null,La=!1,nr=!1,gf=!1,ia=0,$t=0,Oa=0,_s=0,_f=0,Kn=0,ir=0,_o=null,Gn=null,vf=!1,Fl=0,dg=0,zl=1/0,Il=null,Pa=null,dn=0,Fa=null,ar=null,aa=0,xf=0,Sf=null,hg=null,vo=0,Mf=null;function Qn(){return(Ut&2)!==0&&_t!==0?_t&-_t:N.T!==null?Rf():Ir()}function pg(){if(Kn===0)if((_t&536870912)===0||xt){var e=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Vn(e,n,a){(e===kt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(sr(e,0),za(e,_t,Kn,!1)),Cn(e,a),((Ut&2)===0||e!==kt)&&(e===kt&&((Ut&2)===0&&(_s|=a),$t===4&&za(e,_t,Kn,!1)),Oi(e))}function mg(e,n,a){if((Ut&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||we(e,n),c=r?Tx(e,n):Ef(e,n,!0),f=r;do{if(c===0){nr&&!r&&za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ex(a)){c=Ef(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var b=e;c=_o;var I=b.current.memoizedState.isDehydrated;if(I&&(sr(b,g).flags|=256),g=Ef(b,g,!1),g!==2){if(gf&&!I){b.errorRecoveryDisabledLanes|=f,_s|=f,c=4;break e}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){sr(e,0),za(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(r,n,Kn,!La);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fl+300-y(),10<c)){if(za(r,n,Kn,!La),ve(r,0,!0)!==0)break e;aa=n,r.timeoutHandle=qg(gg.bind(null,r,a,Gn,Il,vf,n,Kn,_s,ir,La,f,"Throttled",-0,0),c);break e}gg(r,a,Gn,Il,vf,n,Kn,_s,ir,La,f,null,-0,0)}}break}while(!0);Oi(e)}function gg(e,n,a,r,c,f,g,b,I,ne,he,_e,se,ue){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},lg(n,f,_e);var ke=(f&62914560)===f?Fl-y():(f&4194048)===f?dg-y():0;if(ke=oS(_e,ke),ke!==null){aa=f,e.cancelPendingCommit=ke(bg.bind(null,e,n,f,a,r,c,g,b,I,he,_e,null,se,ue)),za(e,f,g,!ne);return}}bg(e,n,f,a,r,c,g,b,I)}function Ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(e,n,a,r){n&=~_f,n&=~_s,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-ze(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Ko(e,a,n)}function Bl(){return(Ut&6)===0?(xo(0),!1):!0}function yf(){if(mt!==null){if(Ft===0)var e=mt.return;else e=mt,Yi=ls=null,zu(e),Zs=null,eo=0,e=mt;for(;e!==null;)Ym(e.alternate,e),e=e.return;mt=null}}function sr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,yf(),kt=e,mt=a=Wi(e.current,null),_t=n,Ft=0,Zn=null,La=!1,nr=we(e,n),gf=!1,ir=Kn=_f=_s=Oa=$t=0,Gn=_o=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-ze(r),f=1<<c;n|=e[c],r&=~f}return ia=n,rl(),a}function _g(e,n){lt=null,N.H=lo,n===js||n===pl?(n=Lp(),Ft=3):n===Tu?(n=Lp(),Ft=4):Ft=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,mt===null&&($t=1,Cl(e,si(n,e.current)))}function vg(){var e=Yn.current;return e===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ci:!1}function xg(){var e=N.H;return N.H=lo,e===null?lo:e}function Sg(){var e=N.A;return N.A=Mx,e}function Hl(){$t=4,La||(_t&4194048)!==_t&&Yn.current!==null||(nr=!0),(Oa&134217727)===0&&(_s&134217727)===0||kt===null||za(kt,_t,Kn,!1)}function Ef(e,n,a){var r=Ut;Ut|=2;var c=xg(),f=Sg();(kt!==e||_t!==n)&&(Il=null,sr(e,n)),n=!1;var g=$t;e:do try{if(Ft!==0&&mt!==null){var b=mt,I=Zn;switch(Ft){case 8:yf(),g=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var ne=Ft;if(Ft=0,Zn=null,rr(e,b,I,ne),a&&nr){g=0;break e}break;default:ne=Ft,Ft=0,Zn=null,rr(e,b,I,ne)}}bx(),g=$t;break}catch(he){_g(e,he)}while(!0);return n&&e.shellSuspendCounter++,Yi=ls=null,Ut=r,N.H=c,N.A=f,mt===null&&(kt=null,_t=0,rl()),g}function bx(){for(;mt!==null;)Mg(mt)}function Tx(e,n){var a=Ut;Ut|=2;var r=xg(),c=Sg();kt!==e||_t!==n?(Il=null,zl=y()+500,sr(e,n)):nr=we(e,n);e:do try{if(Ft!==0&&mt!==null){n=mt;var f=Zn;t:switch(Ft){case 1:Ft=0,Zn=null,rr(e,n,f,1);break;case 2:case 9:if(Up(f)){Ft=0,Zn=null,yg(n);break}n=function(){Ft!==2&&Ft!==9||kt!==e||(Ft=7),Oi(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Up(f)?(Ft=0,Zn=null,yg(n)):(Ft=0,Zn=null,rr(e,n,f,7));break;case 5:var g=null;switch(mt.tag){case 26:g=mt.memoizedState;case 5:case 27:var b=mt;if(g?o0(g):b.stateNode.complete){Ft=0,Zn=null;var I=b.sibling;if(I!==null)mt=I;else{var ne=b.return;ne!==null?(mt=ne,Gl(ne)):mt=null}break t}}Ft=0,Zn=null,rr(e,n,f,5);break;case 6:Ft=0,Zn=null,rr(e,n,f,6);break;case 8:yf(),$t=6;break e;default:throw Error(s(462))}}Ax();break}catch(he){_g(e,he)}while(!0);return Yi=ls=null,N.H=r,N.A=c,Ut=a,mt!==null?0:(kt=null,_t=0,rl(),$t)}function Ax(){for(;mt!==null&&!Ye();)Mg(mt)}function Mg(e){var n=Wm(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?Gl(e):mt=n}function yg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Bm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=Bm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:zu(n);default:Ym(a,n),n=mt=Sp(n,ia),n=Wm(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?Gl(e):mt=n}function rr(e,n,a,r){Yi=ls=null,zu(n),Zs=null,eo=0;var c=n.return;try{if(px(e,c,n,a,_t)){$t=1,Cl(e,si(a,e.current)),mt=null;return}}catch(f){if(c!==null)throw mt=c,f;$t=1,Cl(e,si(a,e.current)),mt=null;return}n.flags&32768?(xt||r===1?e=!0:nr||(_t&536870912)!==0?e=!1:(La=e=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Eg(n,e)):Gl(n)}function Gl(e){var n=e;do{if((n.flags&32768)!==0){Eg(n,La);return}e=n.return;var a=_x(n.alternate,n,ia);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=e}while(n!==null);$t===0&&($t=5)}function Eg(e,n){do{var a=vx(e.alternate,e);if(a!==null){a.flags&=32767,mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){mt=e;return}mt=e=a}while(e!==null);$t=6,mt=null}function bg(e,n,a,r,c,f,g,b,I){e.cancelPendingCommit=null;do Vl();while(dn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,gi(e,a,f,g,b,I),e===kt&&(mt=kt=null,_t=0),ar=n,Fa=e,aa=a,xf=f,Sf=c,hg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dx(de,function(){return wg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=B.p,B.p=2,g=Ut,Ut|=4;try{xx(e,n,a)}finally{Ut=g,B.p=c,N.T=r}}dn=1,Tg(),Ag(),Rg()}}function Tg(){if(dn===1){dn=0;var e=Fa,n=ar,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=B.p;B.p=2;var c=Ut;Ut|=4;try{sg(n,e);var f=Pf,g=fp(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&up(b.ownerDocument.documentElement,b)){if(I!==null&&su(b)){var ne=I.start,he=I.end;if(he===void 0&&(he=ne),"selectionStart"in b)b.selectionStart=ne,b.selectionEnd=Math.min(he,b.value.length);else{var _e=b.ownerDocument||document,se=_e&&_e.defaultView||window;if(se.getSelection){var ue=se.getSelection(),ke=b.textContent.length,et=Math.min(I.start,ke),Vt=I.end===void 0?et:Math.min(I.end,ke);!ue.extend&&et>Vt&&(g=Vt,Vt=et,et=g);var j=cp(b,et),V=cp(b,Vt);if(j&&V&&(ue.rangeCount!==1||ue.anchorNode!==j.node||ue.anchorOffset!==j.offset||ue.focusNode!==V.node||ue.focusOffset!==V.offset)){var te=_e.createRange();te.setStart(j.node,j.offset),ue.removeAllRanges(),et>Vt?(ue.addRange(te),ue.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),ue.addRange(te))}}}}for(_e=[],ue=b;ue=ue.parentNode;)ue.nodeType===1&&_e.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_e.length;b++){var ge=_e[b];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ec=!!Of,Pf=Of=null}finally{Ut=c,B.p=r,N.T=a}}e.current=n,dn=2}}function Ag(){if(dn===2){dn=0;var e=Fa,n=ar,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=B.p;B.p=2;var c=Ut;Ut|=4;try{eg(e,n.alternate,n)}finally{Ut=c,B.p=r,N.T=a}}dn=3}}function Rg(){if(dn===4||dn===3){dn=0,D();var e=Fa,n=ar,a=aa,r=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ar=Fa=null,Cg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Pa=null),Us(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=B.p,B.p=2,N.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var b=r[g];f(b.value,{componentStack:b.stack})}}finally{N.T=n,B.p=c}}(aa&3)!==0&&Vl(),Oi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Mf?vo++:(vo=0,Mf=e):vo=0,xo(0)}}function Cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function Vl(){return Tg(),Ag(),Rg(),wg()}function wg(){if(dn!==5)return!1;var e=Fa,n=xf;xf=0;var a=Us(aa),r=N.T,c=B.p;try{B.p=32>a?32:a,N.T=null,a=Sf,Sf=null;var f=Fa,g=aa;if(dn=0,ar=Fa=null,aa=0,(Ut&6)!==0)throw Error(s(331));var b=Ut;if(Ut|=4,ug(f.current),og(f,f.current,g,a),Ut=b,xo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{B.p=c,N.T=r,Cg(e,n)}}function Dg(e,n,a){n=si(a,n),n=Ju(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(Cn(e,2),Oi(e))}function zt(e,n,a){if(e.tag===3)Dg(e,e,a);else for(;n!==null;){if(n.tag===3){Dg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){e=si(a,e),a=Um(2),r=wa(n,a,2),r!==null&&(Nm(a,r,n,e),Cn(r,2),Oi(r));break}}n=n.return}}function bf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new yx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Rx.bind(null,e,n,a),n.then(e,e))}function Rx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>y()-Fl?(Ut&2)===0&&sr(e,0):_f|=a,ir===_t&&(ir=0)),Oi(e)}function Ug(e,n){n===0&&(n=Ot()),e=ss(e,n),e!==null&&(Cn(e,n),Oi(e))}function Cx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ug(e,a)}function wx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ug(e,a)}function Dx(e,n){return yt(e,n)}var kl=null,or=null,Tf=!1,Xl=!1,Af=!1,Ia=0;function Oi(e){e!==or&&e.next===null&&(or===null?kl=or=e:or=or.next=e),Xl=!0,Tf||(Tf=!0,Nx())}function xo(e,n){if(!Af&&Xl){Af=!0;do for(var a=!1,r=kl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Pg(r,f))}else f=_t,f=ve(r,r===kt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||we(r,f)||(a=!0,Pg(r,f));r=r.next}while(a);Af=!1}}function Ux(){Ng()}function Ng(){Xl=Tf=!1;var e=0;Ia!==0&&Vx()&&(e=Ia);for(var n=y(),a=null,r=kl;r!==null;){var c=r.next,f=Lg(r,n);f===0?(r.next=null,a===null?kl=c:a.next=c,c===null&&(or=a)):(a=r,(e!==0||(f&3)!==0)&&(Xl=!0)),r=c}dn!==0&&dn!==5||xo(e),Ia!==0&&(Ia=0)}function Lg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-ze(f),b=1<<g,I=c[g];I===-1?((b&a)===0||(b&r)!==0)&&(c[g]=nt(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=kt,a=_t,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Nt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||we(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Nt(r),Us(a)){case 2:case 8:a=xe;break;case 32:a=de;break;case 268435456:a=De;break;default:a=de}return r=Og.bind(null,e),a=yt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Nt(r),e.callbackPriority=2,e.callbackNode=null,2}function Og(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var r=_t;return r=ve(e,e===kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mg(e,r,n),Lg(e,y()),e.callbackNode!=null&&e.callbackNode===a?Og.bind(null,e):null)}function Pg(e,n){if(Vl())return null;mg(e,n,!0)}function Nx(){Xx(function(){(Ut&6)!==0?yt(me,Ux):Ng()})}function Rf(){if(Ia===0){var e=qs;e===0&&(e=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),Ia=e}return Ia}function Fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Lx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Fg((c[_n]||null).action),g=r.submitter;g&&(n=(n=g[_n]||null)?Fg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new nl("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ia!==0){var I=g?zg(c,g):new FormData(c);qu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=g?zg(c,g):new FormData(c),qu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],Ox=wf.toLowerCase(),Px=wf[0].toUpperCase()+wf.slice(1);xi(Ox,"on"+Px)}xi(pp,"onAnimationEnd"),xi(mp,"onAnimationIteration"),xi(gp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Qv,"onTransitionRun"),xi(Jv,"onTransitionStart"),xi($v,"onTransitionCancel"),xi(_p,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var b=r[g],I=b.instance,ne=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=ne;try{f(c)}catch(he){sl(he)}c.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(b=r[g],I=b.instance,ne=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=ne;try{f(c)}catch(he){sl(he)}c.currentTarget=null,f=I}}}}function gt(e,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var r=e+"__bubble";a.has(r)||(Bg(n,e,2,!1),a.add(r))}function Df(e,n,a){var r=0;n&&(r|=4),Bg(a,e,r,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Wl]){e[Wl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Df("selectionchange",!1,n))}}function Bg(e,n,a,r){switch(p0(n)){case 2:var c=uS;break;case 8:c=fS;break;default:c=qf}a=c.bind(null,n,a,e),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=xa(b),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue e}b=b.parentNode}}r=r.return}Xh(function(){var ne=f,he=jc(a),_e=[];e:{var se=vp.get(e);if(se!==void 0){var ue=nl,ke=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":ue=wv;break;case"focusin":ke="focus",ue=eu;break;case"focusout":ke="blur",ue=eu;break;case"beforeblur":case"afterblur":ue=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Nv;break;case pp:case mp:case gp:ue=Sv;break;case _p:ue=Ov;break;case"scroll":case"scrollend":ue=mv;break;case"wheel":ue=Fv;break;case"copy":case"cut":case"paste":ue=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Zh;break;case"toggle":case"beforetoggle":ue=Iv}var et=(n&4)!==0,Vt=!et&&(e==="scroll"||e==="scrollend"),j=et?se!==null?se+"Capture":null:se;et=[];for(var V=ne,te;V!==null;){var ge=V;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||j===null||(ge=Gr(V,j),ge!=null&&et.push(Mo(V,ge,te))),Vt)break;V=V.return}0<et.length&&(se=new ue(se,ke,null,a,he),_e.push({event:se,listeners:et}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",se&&a!==Yc&&(ke=a.relatedTarget||a.fromElement)&&(xa(ke)||ke[_i]))break e;if((ue||se)&&(se=he.window===he?he:(se=he.ownerDocument)?se.defaultView||se.parentWindow:window,ue?(ke=a.relatedTarget||a.toElement,ue=ne,ke=ke?xa(ke):null,ke!==null&&(Vt=u(ke),et=ke.tag,ke!==Vt||et!==5&&et!==27&&et!==6)&&(ke=null)):(ue=null,ke=ne),ue!==ke)){if(et=Yh,ge="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(et=Zh,ge="onPointerLeave",j="onPointerEnter",V="pointer"),Vt=ue==null?se:ts(ue),te=ke==null?se:ts(ke),se=new et(ge,V+"leave",ue,a,he),se.target=Vt,se.relatedTarget=te,ge=null,xa(he)===ne&&(et=new et(j,V+"enter",ke,a,he),et.target=te,et.relatedTarget=Vt,ge=et),Vt=ge,ue&&ke)t:{for(et=zx,j=ue,V=ke,te=0,ge=j;ge;ge=et(ge))te++;ge=0;for(var Qe=V;Qe;Qe=et(Qe))ge++;for(;0<te-ge;)j=et(j),te--;for(;0<ge-te;)V=et(V),ge--;for(;te--;){if(j===V||V!==null&&j===V.alternate){et=j;break t}j=et(j),V=et(V)}et=null}else et=null;ue!==null&&Hg(_e,se,ue,et,!1),ke!==null&&Vt!==null&&Hg(_e,Vt,ke,et,!0)}}e:{if(se=ne?ts(ne):window,ue=se.nodeName&&se.nodeName.toLowerCase(),ue==="select"||ue==="input"&&se.type==="file")var At=ip;else if(tp(se))if(ap)At=jv;else{At=qv;var je=Wv}else ue=se.nodeName,!ue||ue.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ne&&vi(ne.elementType)&&(At=ip):At=Yv;if(At&&(At=At(e,ne))){np(_e,At,a,he);break e}je&&je(e,se,ne),e==="focusout"&&ne&&se.type==="number"&&ne.memoizedProps.value!=null&&xn(se,"number",se.value)}switch(je=ne?ts(ne):window,e){case"focusin":(tp(je)||je.contentEditable==="true")&&(Is=je,ru=ne,Zr=null);break;case"focusout":Zr=ru=Is=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,dp(_e,a,he);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":dp(_e,a,he)}var dt;if(nu)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else zs?$h(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Kh&&a.locale!=="ko"&&(zs||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&zs&&(dt=Wh()):(ya=he,Qc="value"in ya?ya.value:ya.textContent,zs=!0)),je=ql(ne,vt),0<je.length&&(vt=new jh(vt,e,null,a,he),_e.push({event:vt,listeners:je}),dt?vt.data=dt:(dt=ep(a),dt!==null&&(vt.data=dt)))),(dt=Hv?Gv(e,a):Vv(e,a))&&(vt=ql(ne,"onBeforeInput"),0<vt.length&&(je=new jh("onBeforeInput","beforeinput",null,a,he),_e.push({event:je,listeners:vt}),je.data=dt)),Lx(_e,e,ne,a,he)}Ig(_e,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ql(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(e,a),c!=null&&r.unshift(Mo(e,c,f)),c=Gr(e,n),c!=null&&r.push(Mo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hg(e,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var b=a,I=b.alternate,ne=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||ne===null||(I=ne,c?(ne=Gr(a,f),ne!=null&&g.unshift(Mo(a,ne,I))):c||(ne=Gr(a,f),ne!=null&&g.push(Mo(a,ne,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Ix=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Gg(e){return(typeof e=="string"?e:""+e).replace(Ix,`
`).replace(Bx,"")}function Vg(e,n){return n=Gg(n),Gg(e)===n}function Gt(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||fn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&fn(e,""+r);break;case"className":Je(e,"class",r);break;case"tabIndex":Je(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,r);break;case"style":Os(e,r,f);break;case"data":if(n!=="object"){Je(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Jo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Jo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":gt("beforetoggle",e),gt("toggle",e),We(e,"popover",r);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":We(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hv.get(a)||a,We(e,a,r))}}function Lf(e,n,a,r,c,f){switch(a){case"style":Os(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?fn(e,r):(typeof r=="number"||typeof r=="bigint")&&fn(e,""+r);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):We(e,a,r)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,g,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),r&&Gt(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var b=f=g=c=null,I=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var he=a[r];if(he!=null)switch(r){case"name":c=he;break;case"type":g=he;break;case"checked":I=he;break;case"defaultChecked":ne=he;break;case"value":f=he;break;case"defaultValue":b=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:Gt(e,n,r,he,a,null)}}Vi(e,f,b,I,ne,g,c,!1);return;case"select":gt("invalid",e),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Gt(e,n,c,b,a,null)}n=f,a=g,e.multiple=!!r,n!=null?ii(e,!!r,n,!1):a!=null&&ii(e,!!r,a,!0);return;case"textarea":gt("invalid",e),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Gt(e,n,g,b,a,null)}Sn(e,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Gt(e,n,I,r,a,null));return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(r=0;r<So.length;r++)gt(So[r],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,ne,r,a,null)}return;default:if(vi(n)){for(he in a)a.hasOwnProperty(he)&&(r=a[he],r!==void 0&&Lf(e,n,he,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Gt(e,n,b,r,a,null))}function Hx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,I=null,ne=null,he=null;for(ue in a){var _e=a[ue];if(a.hasOwnProperty(ue)&&_e!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":I=_e;default:r.hasOwnProperty(ue)||Gt(e,n,ue,null,r,_e)}}for(var se in r){var ue=r[se];if(_e=a[se],r.hasOwnProperty(se)&&(ue!=null||_e!=null))switch(se){case"type":f=ue;break;case"name":c=ue;break;case"checked":ne=ue;break;case"defaultChecked":he=ue;break;case"value":g=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==_e&&Gt(e,n,se,ue,r,_e)}}vn(e,g,b,I,ne,he,f,c);return;case"select":ue=g=b=se=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ue=I;default:r.hasOwnProperty(f)||Gt(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":se=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==I&&Gt(e,n,c,f,r,I)}n=b,a=g,r=ue,se!=null?ii(e,!!a,se,!1):!!r!=!!a&&(n!=null?ii(e,!!a,n,!0):ii(e,!!a,a?[]:"",!1));return;case"textarea":ue=se=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Gt(e,n,b,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":se=c;break;case"defaultValue":ue=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Gt(e,n,g,c,r,f)}Pt(e,se,ue);return;case"option":for(var ke in a)se=a[ke],a.hasOwnProperty(ke)&&se!=null&&!r.hasOwnProperty(ke)&&(ke==="selected"?e.selected=!1:Gt(e,n,ke,null,r,se));for(I in r)se=r[I],ue=a[I],r.hasOwnProperty(I)&&se!==ue&&(se!=null||ue!=null)&&(I==="selected"?e.selected=se&&typeof se!="function"&&typeof se!="symbol":Gt(e,n,I,se,r,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)se=a[et],a.hasOwnProperty(et)&&se!=null&&!r.hasOwnProperty(et)&&Gt(e,n,et,null,r,se);for(ne in r)if(se=r[ne],ue=a[ne],r.hasOwnProperty(ne)&&se!==ue&&(se!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Gt(e,n,ne,se,r,ue)}return;default:if(vi(n)){for(var Vt in a)se=a[Vt],a.hasOwnProperty(Vt)&&se!==void 0&&!r.hasOwnProperty(Vt)&&Lf(e,n,Vt,void 0,r,se);for(he in r)se=r[he],ue=a[he],!r.hasOwnProperty(he)||se===ue||se===void 0&&ue===void 0||Lf(e,n,he,se,r,ue);return}}for(var j in a)se=a[j],a.hasOwnProperty(j)&&se!=null&&!r.hasOwnProperty(j)&&Gt(e,n,j,null,r,se);for(_e in r)se=r[_e],ue=a[_e],!r.hasOwnProperty(_e)||se===ue||se==null&&ue==null||Gt(e,n,_e,se,r,ue)}function kg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&kg(g)){for(g=0,b=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],ne=I.startTime;if(ne>b)break;var he=I.transferSize,_e=I.initiatorType;he&&kg(_e)&&(I=I.responseEnd,g+=he*(I<b?1:(b-ne)/(I-ne)))}if(--r,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,Pf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Vx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(Wx)}:qg;function Wx(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function jg(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),fr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[es]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&yo(e.ownerDocument.body);a=c}while(a);fr(n)}function Zg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Yx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Kg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function Qg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function $g(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hr(e)}var fi=new Map,e0=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=B.d;B.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:eS,X:nS,S:tS,M:iS};function Zx(){var e=sa.f(),n=Bl();return e||n}function Kx(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?_m(n):sa.r(e)}var lr=typeof document>"u"?null:document;function t0(e,n,a){var r=lr;if(r&&typeof n=="string"&&n){var c=st(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),e0.has(c)||(e0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),An(n,"link",e),T(n),r.head.appendChild(n)))}}function Qx(e){sa.D(e),t0("dns-prefetch",e,null)}function Jx(e,n){sa.C(e,n),t0("preconnect",e,n)}function $x(e,n,a){sa.L(e,n,a);var r=lr;if(r&&e&&n){var c='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+st(a.imageSizes)+'"]')):c+='[href="'+st(e)+'"]';var f=c;switch(n){case"style":f=cr(e);break;case"script":f=ur(e)}fi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),An(n,"link",e),T(n),r.head.appendChild(n)))}}function eS(e,n){sa.m(e,n);var a=lr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+st(r)+'"][href="'+st(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ur(e)}if(!fi.has(f)&&(e=v({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),An(r,"link",e),T(r),a.head.appendChild(r)}}}function tS(e,n,a){sa.S(e,n,a);var r=lr;if(r&&e){var c=Ma(r).hoistableStyles,f=cr(e);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Eo(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Vf(e,a);var I=g=r.createElement("link");T(I),An(I,"link",e),I._p=new Promise(function(ne,he){I.onload=ne,I.onerror=he}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function nS(e,n){sa.X(e,n);var a=lr;if(a&&e){var r=Ma(a).hoistableScripts,c=ur(e),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(e=v({src:e,async:!0},n),(n=fi.get(c))&&kf(e,n),f=a.createElement("script"),T(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function iS(e,n){sa.M(e,n);var a=lr;if(a&&e){var r=Ma(a).hoistableScripts,c=ur(e),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&kf(e,n),f=a.createElement("script"),T(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function n0(e,n,a,r){var c=(c=J.current)?jl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=Ma(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cr(a.href);var f=Ma(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Eo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||aS(c,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=Ma(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function cr(e){return'href="'+st(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function i0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),An(n,"link",a),T(n),e.head.appendChild(n))}function ur(e){return'[src="'+st(e)+'"]'}function bo(e){return"script[async]"+e}function a0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(r)return n.instance=r,T(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),T(r),An(r,"style",c),Zl(r,a.precedence,e),n.instance=r;case"stylesheet":c=cr(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;r=i0(a),(c=fi.get(c))&&Vf(r,c),f=(e.ownerDocument||e).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,I){g.onload=b,g.onerror=I}),An(f,"link",r),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=ur(a.src),(c=e.querySelector(bo(f)))?(n.instance=c,T(c),c):(r=a,(c=fi.get(f))&&(r=v({},a),kf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),T(c),An(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Zl(r,a.precedence,e));return n.instance}function Zl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function s0(e,n,a){if(Kl===null){var r=new Map,c=Kl=new Map;c.set(a,r)}else c=Kl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[es]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var b=r.get(g);b?b.push(f):r.set(g,[f])}}return r}function r0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=cr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,r=i0(r),(c=fi.get(c))&&Vf(r,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,I){g.onload=b,g.onerror=I}),An(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function oS(e,n){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*Gx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function $l(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(lS,e),Jl=null,Ql.call(e))}function lS(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var r=a.get(null);else{a=new Map,Jl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Ql.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function cS(e,n,a,r,c,f,g,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function l0(e,n,a,r,c,f,g,b,I,ne,he,_e){return e=new cS(e,n,a,g,I,ne,he,_e,b),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),e}function c0(e){return e?(e=Gs,e):Gs}function u0(e,n,a,r,c,f){c=c0(c),r.context===null?r.context=c:r.pendingContext=c,r=Ca(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=wa(e,r,n),a!==null&&(Vn(a,e,n),no(a,e,n))}function f0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){f0(e,n),(e=e.alternate)&&f0(e,n)}function d0(e){if(e.tag===13||e.tag===31){var n=ss(e,67108864);n!==null&&Vn(n,e,67108864),Wf(e,67108864)}}function h0(e){if(e.tag===13||e.tag===31){var n=Qn();n=zr(n);var a=ss(e,n);a!==null&&Vn(a,e,n),Wf(e,n)}}var ec=!0;function uS(e,n,a,r){var c=N.T;N.T=null;var f=B.p;try{B.p=2,qf(e,n,a,r)}finally{B.p=f,N.T=c}}function fS(e,n,a,r){var c=N.T;N.T=null;var f=B.p;try{B.p=8,qf(e,n,a,r)}finally{B.p=f,N.T=c}}function qf(e,n,a,r){if(ec){var c=Yf(r);if(c===null)Nf(e,n,r,tc,a),m0(e,r);else if(hS(c,e,n,a,r))r.stopPropagation();else if(m0(e,r),n&4&&-1<dS.indexOf(e)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ye(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var I=1<<31-ze(g);b.entanglements[1]|=I,g&=~I}Oi(f),(Ut&6)===0&&(zl=y()+500,xo(0))}}break;case 31:case 13:b=ss(f,2),b!==null&&Vn(b,f,2),Bl(),Wf(f,2)}if(f=Yf(r),f===null&&Nf(e,n,r,tc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function Yf(e){return e=jc(e),jf(e)}var tc=null;function jf(e){if(tc=null,e=xa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function p0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case me:return 2;case xe:return 8;case de:case Ze:return 32;case De:return 268435456;default:return 32}default:return 32}}var Zf=!1,Ha=null,Ga=null,Va=null,Ao=new Map,Ro=new Map,ka=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m0(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&d0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function hS(e,n,a,r,c){switch(n){case"focusin":return Ha=Co(Ha,e,n,a,r,c),!0;case"dragenter":return Ga=Co(Ga,e,n,a,r,c),!0;case"mouseover":return Va=Co(Va,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,r,c)),!0}return!1}function g0(e){var n=xa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Di(e.priority,function(){h0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Di(e.priority,function(){h0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=Sa(a),n!==null&&d0(n),e.blockedOn=a,!1;n.shift()}return!0}function _0(e,n,a){nc(e)&&a.delete(n)}function pS(){Zf=!1,Ha!==null&&nc(Ha)&&(Ha=null),Ga!==null&&nc(Ga)&&(Ga=null),Va!==null&&nc(Va)&&(Va=null),Ao.forEach(_0),Ro.forEach(_0)}function ic(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pS)))}var ac=null;function v0(e){ac!==e&&(ac=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function fr(e){function n(I){return ic(I,e)}Ha!==null&&ic(Ha,e),Ga!==null&&ic(Ga,e),Va!==null&&ic(Va,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<ka.length;a++){var r=ka[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)g0(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[_n]||null;if(typeof f=="function")g||v0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)b=g.formAction;else if(jf(c)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),v0(a)}}}function x0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(e){this._internalRoot=e}sc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();u0(a,r,e,n,null,null)},sc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;u0(e.current,2,null,e,null,null),Bl(),n[_i]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ir();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&g0(e)}};var S0=t.version;if(S0!=="19.2.4")throw Error(s(527,S0,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var mS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Ee=rc.inject(mS),Te=rc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Rm,f=Cm,g=wm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=l0(e,1,!1,null,null,a,r,null,c,f,g,x0),e[_i]=n.current,Uf(e),new Kf(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Rm,g=Cm,b=wm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=l0(e,1,!0,n,a??null,r,c,I,f,g,b,x0),n.context=c0(null),a=n.current,r=Qn(),r=zr(r),c=Ca(r),c.callback=null,wa(a,c,r),a=r,n.current.lanes=a,Cn(n,a),Oi(n),e[_i]=n.current,Uf(e),new sc(n)},Do.version="19.2.4",Do}var D0;function AS(){if(D0)return $f.exports;D0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=TS(),$f.exports}var RS=AS();const CS=_S(RS);function wS(){const[o,t]=Ai.useState(!1),[i,s]=Ai.useState(!1);return Ai.useEffect(()=>{const l=()=>s(window.scrollY>600);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),W.jsxs("nav",{className:i?"scrolled":"",children:[W.jsx("a",{href:"#",className:"logo cursor-clickable",children:"RM."}),W.jsxs("button",{className:"mobile-menu-btn",onClick:()=>t(!o),"aria-label":"Toggle menu",children:[W.jsx("span",{}),W.jsx("span",{})]}),W.jsxs("ul",{className:`nav-links ${o?"open":""}`,children:[W.jsx("li",{children:W.jsx("a",{href:"#exp",className:"cursor-clickable",onClick:()=>t(!1),children:"Experience"})}),W.jsx("li",{children:W.jsx("a",{href:"#projects",className:"cursor-clickable",onClick:()=>t(!1),children:"Projects"})}),W.jsx("li",{children:W.jsx("a",{href:"#skills",className:"cursor-clickable",onClick:()=>t(!1),children:"Skills"})}),W.jsx("li",{children:W.jsx("a",{href:"#art",className:"cursor-clickable",onClick:()=>t(!1),children:"Art"})})]})]})}function DS(){return W.jsx("section",{className:"hero",children:W.jsxs("div",{className:"hero-container",children:[W.jsxs("div",{className:"hero-content",children:[W.jsx("span",{className:"hero-label",children:"Computer Science Student & Developer"}),W.jsxs("h1",{className:"hero-title",children:["MD RAHBIR",W.jsx("br",{}),W.jsx("span",{className:"hero-title-accent",children:"MAHDI"})]}),W.jsx("p",{className:"hero-subtitle",children:"Full-stack developer focused on building impactful applications. Currently looking for internships while pursuing CS at York University."}),W.jsxs("div",{className:"hero-meta",children:[W.jsxs("div",{className:"meta-item",children:[W.jsx("span",{className:"meta-label",children:"Email"}),W.jsx("a",{href:"mailto:rahbir1518@gmail.com",className:"meta-value cursor-clickable",children:"rahbir1518@gmail.com"})]}),W.jsxs("div",{className:"meta-item",children:[W.jsx("span",{className:"meta-label",children:"Location"}),W.jsx("span",{className:"meta-value",children:"Toronto, ON"})]}),W.jsxs("div",{className:"meta-item",children:[W.jsx("span",{className:"meta-label",children:"Status"}),W.jsx("span",{className:"meta-value",style:{color:"var(--accent)"},children:"● Available"})]})]})]}),W.jsxs("div",{className:"hero-sectors",children:[W.jsx("a",{href:"#exp",className:"sector-link cursor-clickable",children:"Experience"}),W.jsx("a",{href:"#projects",className:"sector-link cursor-clickable",children:"Projects"}),W.jsx("a",{href:"#skills",className:"sector-link cursor-clickable",children:"Skills"}),W.jsx("a",{href:"#art",className:"sector-link cursor-clickable",children:"Art"})]})]})})}function US(){return W.jsx("div",{className:"marquee-container",children:W.jsxs("div",{className:"marquee-content",children:[W.jsx("span",{className:"marquee-item",children:"SECTOR 01 — ABOUT"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 02 — EXPERIENCE"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 03 — PROJECTS"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 04 — SKILLS"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 05 — ART"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 01 — ABOUT"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 02 — EXPERIENCE"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 03 — PROJECTS"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 04 — SKILLS"}),W.jsx("span",{className:"marquee-item",children:"SECTOR 05 — ART"})]})})}function NS(){return W.jsx("section",{id:"exp",className:"experience-section",children:W.jsxs("div",{className:"section-container",children:[W.jsxs("div",{className:"section-header",children:[W.jsx("div",{className:"section-number",children:"02"}),W.jsxs("div",{className:"section-title-block",children:[W.jsx("h2",{children:"Experience"}),W.jsx("p",{children:"Building software that serves communities and scales impact"})]})]}),W.jsxs("div",{className:"experience-list",children:[W.jsxs("div",{className:"experience-card cursor-hover",children:[W.jsx("div",{className:"exp-date",children:"Feb 2026 – Present"}),W.jsxs("div",{className:"exp-content",children:[W.jsx("h3",{children:"Co-Founder & Software Developer"}),W.jsx("div",{className:"exp-company",children:"Clarus (HackCanada 2026 Winner) — NSU Startup Cohort"}),W.jsxs("ul",{className:"exp-points",children:[W.jsx("li",{children:"Selected for the NSU Startup Cohort 2026 to build Clarus into a production healthcare-automation platform, powered by FastAPI, Next.js, React Flow, ElevenLabs, Twilio, and Supabase."}),W.jsx("li",{children:"Won Vivirion Solutions – Best Practical Healthcare Hack and Google – Build with AI at HackCanada 2026."}),W.jsx("li",{children:"Architected a FastAPI rules-based engine that evaluates patient data (age, insurance, lab values) against a decision graph to auto-trigger voice calls, SMS, and referrals with zero clinician review."}),W.jsx("li",{children:"Engineered an ElevenLabs + Twilio outbound call pipeline with webhook-driven status sync."}),W.jsx("li",{children:"Auto-booked Google Calendar appointments upon patient confirmation in real time."}),W.jsx("li",{children:"Built a React Flow drag-and-drop builder for no-code clinical workflow design."})]})]})]}),W.jsxs("div",{className:"experience-card cursor-hover",children:[W.jsx("div",{className:"exp-date",children:"Jul 2026 – Sep 2026"}),W.jsxs("div",{className:"exp-content",children:[W.jsx("h3",{children:"Software Engineer Intern"}),W.jsx("div",{className:"exp-company",children:"Islamic Center of Markham – Masjid Darul Iman — Toronto, ON"}),W.jsxs("ul",{className:"exp-points",children:[W.jsx("li",{children:"Engineered a tilt-compensated digital compass by fusing accelerometer, gyroscope, and magnetometer data via vector-based orientation math to deliver reliable real-time heading estimates at 60Hz."}),W.jsx("li",{children:"Debugged and resolved a platform-specific accelerometer sign-convention bug and inconsistent magnetic declination timeouts on Android, restoring reliable heading accuracy across devices."}),W.jsx("li",{children:"Added confidence-gated dip-angle filtering to fix heading accuracy at high-latitude locations, then implemented AsyncStorage caching so the app stays reliable without a live network connection."}),W.jsx("li",{children:"Built a live announcements feed on the WordPress REST API, sanitizing HTML and stripping CMS markup so third-party content renders reliably, with pull-to-refresh support."}),W.jsx("li",{children:"Built a content-reader with structured multi-section indexing (114 entries) and persistent read-position tracking, then migrated push notifications to native Expo Notifications to cut vendor dependency."}),W.jsx("li",{children:"Unified visual design across native and WebView-rendered components via injected custom CSS."})]})]})]}),W.jsxs("div",{className:"experience-card cursor-hover",children:[W.jsx("div",{className:"exp-date",children:"Jul 2025 – Aug 2025"}),W.jsxs("div",{className:"exp-content",children:[W.jsx("h3",{children:"Software Systems Intern"}),W.jsx("div",{className:"exp-company",children:"Islamic Center of Markham – Masjid Darul Iman — Toronto, ON"}),W.jsxs("ul",{className:"exp-points",children:[W.jsx("li",{children:"Developed a community-facing mobile application using React Native (Expo), serving 1,000+ members with real-time announcements and prayer schedules."}),W.jsx("li",{children:"Implemented push notifications with OneSignal and live data syncing via Supabase, enhancing user engagement."}),W.jsx("li",{children:"Built a full-stack Volunteer Scheduling platform with React.js and Supabase, coordinating 250+ volunteers."}),W.jsx("li",{children:"Integrated secure Supabase Auth with PostgreSQL, enabling role-based access and seamless CRUD operations."})]})]})]})]})]})})}function LS(){const o="/Portfolio-Website/",t=[{title:"Clarus",badge:"Winner • HackCanada 2026 • Vivirion + Google",description:"Automate every step of your clinical workflow.",tags:["Healthcare AI","FastAPI","Workflow Design","Twilio","Voice Automation","Supabase"],link:"https://devpost.com/software/clarus-7werym",image:`${o}/images/Clarus.jpg`},{title:"Mimicoo",badge:"Winner • 6th Place • Hack the Valley 2025",description:"Infant babble analysis tool using MediaPipe and Librosa. Features Gemini API integration for speech disorder risk analysis.",tags:["Audio ML","MediaPipe","Speech Analysis","Python","FastAPI","Gemini API"],link:"https://devpost.com/software/mimicoo",image:`${o}/images/mimicoo.jpg`},{title:"Vroomi",badge:"Winner • 3rd Place • Hack the Valley 2025",description:"Ride-sharing app with geolocation-based cost-splitting. Features route optimization using Travelling Postman Problem algorithms.",tags:["Geolocation","Optimization","React","TypeScript","Supabase","Stripe"],link:"https://devpost.com/software/vroomi",image:`${o}/images/vroomi.jpg`},{title:"Numen",badge:"GenAI Genesis 2026",description:"AI-powered team knowledge automation that answers engineering questions from code, docs, and past conversations with traceable sources.",tags:["AI Search","Knowledge Graph","RAG","FastAPI","Next.js","Gemini API"],link:"https://devpost.com/software/numen-9l43wx",image:`${o}/images/numen.png`},{title:"Corpus",badge:"Hack the 6ix 2026",description:"Persistent cross-tool project memory for AI coding agents, letting sessions resume with relevant context instead of re-deriving everything.",tags:["MCP","AI Memory","Supabase","Graphify","PostgreSQL","Next.js"],link:"https://devpost.com/software/corpus-ixosp5",image:`${o}/images/corpus.png`},{title:"DWS",badge:"CXC 2026 - AI Hackathon",description:"Voice-first indoor navigation assistant that helps visually impaired users navigate buildings using camera input, AI reasoning, and spoken guidance.",tags:["Computer Vision","Mobile Camera","Accessibility","YOLO","Gemini Vision","ElevenLabs"],link:"https://devpost.com/software/dws-4z1rot",image:`${o}/images/dws.jpg`},{title:"Nervy",badge:"HackHive 2026",description:"AI behavioral interview coach delivering real-time video feedback on eye contact, posture, and confidence via MediaPipe/OpenCV.",tags:["OpenCV","MediaPipe","WebSockets","Computer Vision","FastAPI","AI Coaching"],link:"https://devpost.com/software/nervy",image:`${o}/images/nervy.jpg`}];return W.jsx("section",{id:"projects",style:{background:"var(--bg-secondary)"},children:W.jsxs("div",{className:"section-container",children:[W.jsxs("div",{className:"section-header",children:[W.jsx("div",{className:"section-number",children:"03"}),W.jsxs("div",{className:"section-title-block",children:[W.jsx("h2",{children:"Hackathons"}),W.jsx("p",{children:"Building under pressure, winning with innovation"})]})]}),W.jsx("div",{className:"projects-grid",children:t.map((i,s)=>W.jsxs("a",{href:i.link,target:"_blank",className:"project-card cursor-clickable",style:{textDecoration:"none",color:"inherit"},children:[W.jsxs("div",{className:"project-image-wrapper",children:[W.jsx("img",{src:i.image,alt:`${i.title} screenshot`,className:"project-image",loading:"lazy"}),W.jsx("div",{className:"project-image-overlay"})]}),W.jsxs("div",{className:"project-content",children:[W.jsxs("div",{className:"project-header",children:[W.jsx("h3",{className:"project-title",children:i.title}),W.jsx("span",{className:"project-badge",children:i.badge})]}),W.jsx("p",{className:"project-desc",children:i.description}),W.jsx("div",{className:"project-tags",children:i.tags.map((l,u)=>W.jsx("span",{className:"tag",children:l},u))})]})]},s))})]})})}function OS(){return W.jsx("section",{id:"skills",children:W.jsxs("div",{className:"section-container",children:[W.jsxs("div",{className:"section-header",children:[W.jsx("div",{className:"section-number",children:"04"}),W.jsxs("div",{className:"section-title-block",children:[W.jsx("h2",{children:"Toolkit"}),W.jsx("p",{children:"Technologies & tools I work with"})]})]}),W.jsxs("div",{className:"skills-grid",children:[W.jsxs("div",{className:"skill-block",children:[W.jsx("h3",{className:"skill-title",children:"Languages"}),W.jsxs("div",{className:"skill-items",children:[W.jsx("span",{className:"skill-tag",children:"Java"}),W.jsx("span",{className:"skill-tag",children:"Python"}),W.jsx("span",{className:"skill-tag",children:"C/C++"}),W.jsx("span",{className:"skill-tag",children:"JavaScript"}),W.jsx("span",{className:"skill-tag",children:"HTML/CSS"}),W.jsx("span",{className:"skill-tag",children:"R"})]})]}),W.jsxs("div",{className:"skill-block",children:[W.jsx("h3",{className:"skill-title",style:{color:"var(--coffee-light)"},children:"Frameworks"}),W.jsxs("div",{className:"skill-items",children:[W.jsx("span",{className:"skill-tag",children:"ReactJS"}),W.jsx("span",{className:"skill-tag",children:"React Native"}),W.jsx("span",{className:"skill-tag",children:"Next.js"}),W.jsx("span",{className:"skill-tag",children:"Three.js"}),W.jsx("span",{className:"skill-tag",children:"Tailwind CSS"}),W.jsx("span",{className:"skill-tag",children:"MediaPipe"}),W.jsx("span",{className:"skill-tag",children:"OpenCV"}),W.jsx("span",{className:"skill-tag",children:"TensorFlow"})]})]}),W.jsxs("div",{className:"skill-block",children:[W.jsx("h3",{className:"skill-title",style:{color:"var(--cream-muted)"},children:"Tools"}),W.jsxs("div",{className:"skill-items",children:[W.jsx("span",{className:"skill-tag",children:"Git"}),W.jsx("span",{className:"skill-tag",children:"Supabase"}),W.jsx("span",{className:"skill-tag",children:"MongoDB"}),W.jsx("span",{className:"skill-tag",children:"Google Cloud"}),W.jsx("span",{className:"skill-tag",children:"Firebase"}),W.jsx("span",{className:"skill-tag",children:"VS Code"}),W.jsx("span",{className:"skill-tag",children:"Figma"}),W.jsx("span",{className:"skill-tag",children:"GitHub Actions"})]})]})]})]})})}function PS(){const o="/Portfolio-Website/",t=[{id:1,src:`${o}/images/cat.png`,title:"Rainy Night",span:"wide"},{id:2,src:`${o}/images/guitar.jpg`,title:"Nostalgia"},{id:3,src:`${o}/images/lantern.jpg`,title:"Lantern Light"},{id:4,src:`${o}/images/railroad.jpg`,title:"The Crossing"},{id:5,src:`${o}/images/violin.jpg`,title:"Melody"}];return W.jsx("section",{id:"art",className:"art-section",children:W.jsxs("div",{className:"section-container",children:[W.jsxs("div",{className:"art-header-center",children:[W.jsx("p",{className:"art-pretitle",children:"Hey, I also draw in my spare time"}),W.jsx("h2",{className:"art-title",children:"Visual Arts"})]}),W.jsx("div",{className:"art-grid-masonry",children:t.map(i=>W.jsxs("div",{className:`art-item cursor-hover ${i.span||""}`,children:[W.jsx("img",{src:i.src,alt:i.title,className:"art-image",loading:"lazy"}),W.jsx("div",{className:"art-overlay",children:W.jsx("span",{className:"art-caption",children:i.title})})]},i.id))})]})})}function FS(){return W.jsx("footer",{children:W.jsxs("div",{className:"footer-content",children:[W.jsx("h2",{className:"footer-title",children:"Let's create something together"}),W.jsx("p",{className:"footer-text",children:"Open for opportunities in software development, hackathons, and creative collaborations."}),W.jsx("a",{href:"mailto:rahbir1518@gmail.com",className:"footer-cta cursor-clickable",children:"Get in Touch"}),W.jsxs("div",{className:"footer-links",children:[W.jsx("a",{href:"https://www.linkedin.com/in/rahbirmahdi/",target:"_blank",className:"cursor-clickable",children:"LinkedIn"}),W.jsx("a",{href:"https://github.com/Rahbir1518",target:"_blank",className:"cursor-clickable",children:"GitHub"}),W.jsx("a",{href:"https://devpost.com/Rahbir1518?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",target:"_blank",className:"cursor-clickable",children:"Devpost"}),W.jsx("a",{href:"/Portfolio-Website/resume.pdf",download:"Md_Rahbir_Mahdi_Resume.pdf",className:"cursor-clickable",children:"Resume"})]})]})})}const Nh="182",zS=0,U0=1,IS=2,Nc=1,BS=2,Bo=3,$a=0,Xn=1,fa=2,ha=0,Ar=1,Pd=2,N0=3,L0=4,HS=5,Ts=100,GS=101,VS=102,kS=103,XS=104,WS=200,qS=201,YS=202,jS=203,Fd=204,zd=205,ZS=206,KS=207,QS=208,JS=209,$S=210,eM=211,tM=212,nM=213,iM=214,Id=0,Bd=1,Hd=2,Cr=3,Gd=4,Vd=5,kd=6,Xd=7,U_=0,aM=1,sM=2,Bi=0,N_=1,L_=2,O_=3,P_=4,F_=5,z_=6,I_=7,B_=300,ws=301,wr=302,Wd=303,qd=304,kc=306,Yd=1e3,da=1001,jd=1002,Rn=1003,rM=1004,oc=1005,Nn=1006,id=1007,Rs=1008,mi=1009,H_=1010,G_=1011,Go=1012,Lh=1013,Gi=1014,zi=1015,ma=1016,Oh=1017,Ph=1018,Vo=1020,V_=35902,k_=35899,X_=1021,W_=1022,Ri=1023,ga=1026,Cs=1027,q_=1028,Fh=1029,Dr=1030,zh=1031,Ih=1033,Lc=33776,Oc=33777,Pc=33778,Fc=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,eh=37492,th=37496,nh=37488,ih=37489,ah=37490,sh=37491,rh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,Sh=36492,Mh=36494,yh=36495,Eh=36283,bh=36284,Th=36285,Ah=36286,oM=3200,lM=0,cM=1,Qa="",hi="srgb",Ur="srgb-linear",Ic="linear",It="srgb",dr=7680,O0=519,uM=512,fM=513,dM=514,Bh=515,hM=516,pM=517,Hh=518,mM=519,P0=35044,F0="300 es",Ii=2e3,Bc=2001;function Y_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gM(){const o=Hc("canvas");return o.style.display="block",o}const z0={};function I0(...o){const t="THREE."+o.shift();console.log(t,...o)}function it(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ct(...o){const t="THREE."+o.shift();console.error(t,...o)}function ko(...o){const t=o.join(" ");t in z0||(z0[t]=!0,it(...o))}function _M(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Lr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,Rh=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function vM(o,t){return(o%t+t)%t}function sd(o,t,i){return(1-i)*o+i*t}function Uo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,i=0){Bt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],S=u[d+0],E=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(h>=1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=C;return}if(v!==C||m!==S||p!==E||_!==A){let M=m*S+p*E+_*A+v*C;M<0&&(S=-S,E=-E,A=-A,C=-C,M=-M);let x=1-h;if(M<.9995){const F=Math.acos(M),P=Math.sin(F);x=Math.sin(x*F)/P,h=Math.sin(h*F)/P,m=m*x+S*h,p=p*x+E*h,_=_*x+A*h,v=v*x+C*h}else{m=m*x+S*h,p=p*x+E*h,_=_*x+A*h,v=v*x+C*h;const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[d],S=u[d+1],E=u[d+2],A=u[d+3];return t[i]=h*A+_*v+m*E-p*S,t[i+1]=m*A+_*S+p*v-h*E,t[i+2]=p*A+_*E+h*S-m*v,t[i+3]=_*A-h*v-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(u/2),S=m(s/2),E=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*_*v+p*E*A,this._y=p*E*v-S*_*A,this._z=p*_*A+S*E*v,this._w=p*_*v-S*E*A;break;case"YXZ":this._x=S*_*v+p*E*A,this._y=p*E*v-S*_*A,this._z=p*_*A-S*E*v,this._w=p*_*v+S*E*A;break;case"ZXY":this._x=S*_*v-p*E*A,this._y=p*E*v+S*_*A,this._z=p*_*A+S*E*v,this._w=p*_*v-S*E*A;break;case"ZYX":this._x=S*_*v-p*E*A,this._y=p*E*v+S*_*A,this._z=p*_*A-S*E*v,this._w=p*_*v+S*E*A;break;case"YZX":this._x=S*_*v+p*E*A,this._y=p*E*v+S*_*A,this._z=p*_*A-S*E*v,this._w=p*_*v-S*E*A;break;case"XZY":this._x=S*_*v-p*E*A,this._y=p*E*v-S*_*A,this._z=p*_*A+S*E*v,this._w=p*_*v+S*E*A;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+h+v;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(_-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(B0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(B0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-u*l),v=2*(u*s-d*i);return this.x=i+m*p+d*v-h*_,this.y=s+m*_+h*p-u*v,this.z=l+m*v+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return rd.copy(this).projectOnVector(t),this.sub(rd)}reflect(t){return this.sub(rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new re,B0=new qo;class ht{constructor(t,i,s,l,u,d,h,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],E=s[5],A=s[8],C=l[0],M=l[3],x=l[6],F=l[1],P=l[4],O=l[7],z=l[2],H=l[5],L=l[8];return u[0]=d*C+h*F+m*z,u[3]=d*M+h*P+m*H,u[6]=d*x+h*O+m*L,u[1]=p*C+_*F+v*z,u[4]=p*M+_*P+v*H,u[7]=p*x+_*O+v*L,u[2]=S*C+E*F+A*z,u[5]=S*M+E*P+A*H,u[8]=S*x+E*O+A*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*d-h*p,S=h*m-_*u,E=p*u-d*m,A=i*v+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*p-_*s)*C,t[2]=(h*s-l*d)*C,t[3]=S*C,t[4]=(_*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(d*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(od.makeScale(t,i)),this}rotate(t){return this.premultiply(od.makeRotation(-t)),this}translate(t,i){return this.premultiply(od.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ht,H0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const o={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Rr(l.r),l.g=Rr(l.g),l.b=Rr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ur]:{primaries:t,whitePoint:s,transfer:Ic,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:It,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Tt=xM();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hr;class SM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{hr===void 0&&(hr=Hc("canvas")),hr.width=t.width,hr.height=t.height;const l=hr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=hr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:t.width,height:t.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let MM=0;class Gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ld(l[d].image)):u.push(ld(l[d]))}else u=ld(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let yM=0;const cd=new re;class Pn extends Lr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=da,l=da,u=Nn,d=Rs,h=Ri,m=mi,p=Pn.DEFAULT_ANISOTROPY,_=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Wo(),this.name="",this.source=new Gh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==B_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=B_;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],S=m[1],E=m[5],A=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,O=(E+1)/2,z=(x+1)/2,H=(_+S)/4,L=(v+C)/4,$=(A+M)/4;return P>O&&P>z?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=H/s,u=L/s):O>z?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=H/l,u=$/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=L/u,l=$/u),this.set(s,l,u,i),this}let F=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(S-_)*(S-_));return Math.abs(F)<.001&&(F=1),this.x=(M-A)/F,this.y=(v-C)/F,this.z=(S-_)/F,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends Lr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Pn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends EM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class j_ extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),cc.subVectors(this.max,No),pr.subVectors(t.a,No),mr.subVectors(t.b,No),gr.subVectors(t.c,No),Wa.subVectors(mr,pr),qa.subVectors(gr,mr),vs.subVectors(pr,gr);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vs.z,vs.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vs.z,0,-vs.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vs.y,vs.x,0];return!ud(i,pr,mr,gr,cc)||(i=[1,0,0,0,1,0,0,0,1],!ud(i,pr,mr,gr,cc))?!1:(uc.crossVectors(Wa,qa),i=[uc.x,uc.y,uc.z],ud(i,pr,mr,gr,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new re,new re,new re,new re,new re,new re,new re,new re],yi=new re,lc=new Yo,pr=new re,mr=new re,gr=new re,Wa=new re,qa=new re,vs=new re,No=new re,cc=new re,uc=new re,xs=new re;function ud(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){xs.fromArray(o,u);const h=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),m=t.dot(xs),p=i.dot(xs),_=s.dot(xs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const TM=new Yo,Lo=new re,fd=new re;class jo{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):TM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(fd)),this.expandByPoint(Lo.copy(t.center).sub(fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new re,dd=new re,fc=new re,Ya=new re,hd=new re,dc=new re,pd=new re;class Vh{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){dd.copy(t).add(i).multiplyScalar(.5),fc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(dd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(fc),h=Ya.dot(this.direction),m=-Ya.dot(fc),p=Ya.lengthSq(),_=Math.abs(1-d*d);let v,S,E,A;if(_>0)if(v=d*m-h,S=d*h-m,A=u*_,v>=0)if(S>=-A)if(S<=A){const C=1/_;v*=C,S*=C,E=v*(v+d*S+2*h)+S*(d*v+S+2*m)+p}else S=u,v=Math.max(0,-(d*S+h)),E=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(d*S+h)),E=-v*v+S*(S+2*m)+p;else S<=-A?(v=Math.max(0,-(-d*u+h)),S=v>0?-u:Math.min(Math.max(-u,-m),u),E=-v*v+S*(S+2*m)+p):S<=A?(v=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(v=Math.max(0,-(d*u+h)),S=v>0?u:Math.min(Math.max(-u,-m),u),E=-v*v+S*(S+2*m)+p);else S=d>0?-u:u,v=Math.max(0,-(d*S+h)),E=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(dd).addScaledVector(fc,S),E}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(h=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,s,l,u){hd.subVectors(i,t),dc.subVectors(s,t),pd.crossVectors(hd,dc);let d=this.direction.dot(pd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(dc.crossVectors(Ya,dc));if(m<0)return null;const p=h*this.direction.dot(hd.cross(Ya));if(p<0||m+p>d)return null;const _=-h*Ya.dot(pd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,u,d,h,m,p,_,v,S,E,A,C,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,_,v,S,E,A,C,M)}set(t,i,s,l,u,d,h,m,p,_,v,S,E,A,C,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=S,x[3]=E,x[7]=A,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/_r.setFromMatrixColumn(t,0).length(),u=1/_r.setFromMatrixColumn(t,1).length(),d=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=d*_,E=d*v,A=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,E=m*v,A=p*_,C=p*v;i[0]=S+C*h,i[4]=A*h-E,i[8]=d*p,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=E*h-A,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,E=m*v,A=p*_,C=p*v;i[0]=S-C*h,i[4]=-d*v,i[8]=A+E*h,i[1]=E+A*h,i[5]=d*_,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,E=d*v,A=h*_,C=h*v;i[0]=m*_,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,E=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-S*v,i[8]=A*v+E,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=E*v+A,i[10]=S-C*v}else if(t.order==="XZY"){const S=d*m,E=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+C,i[5]=d*_,i[9]=E*v-A,i[2]=A*v-E,i[6]=h*_,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AM,t,RM)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(s,Jn),ja.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(s,Jn)),ja.normalize(),hc.crossVectors(Jn,ja),l[0]=ja.x,l[4]=hc.x,l[8]=Jn.x,l[1]=ja.y,l[5]=hc.y,l[9]=Jn.y,l[2]=ja.z,l[6]=hc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],E=s[13],A=s[2],C=s[6],M=s[10],x=s[14],F=s[3],P=s[7],O=s[11],z=s[15],H=l[0],L=l[4],$=l[8],R=l[12],w=l[1],k=l[5],K=l[9],Q=l[13],le=l[2],fe=l[6],N=l[10],B=l[14],ie=l[3],Me=l[7],Se=l[11],U=l[15];return u[0]=d*H+h*w+m*le+p*ie,u[4]=d*L+h*k+m*fe+p*Me,u[8]=d*$+h*K+m*N+p*Se,u[12]=d*R+h*Q+m*B+p*U,u[1]=_*H+v*w+S*le+E*ie,u[5]=_*L+v*k+S*fe+E*Me,u[9]=_*$+v*K+S*N+E*Se,u[13]=_*R+v*Q+S*B+E*U,u[2]=A*H+C*w+M*le+x*ie,u[6]=A*L+C*k+M*fe+x*Me,u[10]=A*$+C*K+M*N+x*Se,u[14]=A*R+C*Q+M*B+x*U,u[3]=F*H+P*w+O*le+z*ie,u[7]=F*L+P*k+O*fe+z*Me,u[11]=F*$+P*K+O*N+z*Se,u[15]=F*R+P*Q+O*B+z*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],S=t[10],E=t[14],A=t[3],C=t[7],M=t[11],x=t[15],F=m*E-p*S,P=h*E-p*v,O=h*S-m*v,z=d*E-p*_,H=d*S-m*_,L=d*v-h*_;return i*(C*F-M*P+x*O)-s*(A*F-M*z+x*H)+l*(A*P-C*z+x*L)-u*(A*O-C*H+M*L)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],S=t[10],E=t[11],A=t[12],C=t[13],M=t[14],x=t[15],F=v*M*p-C*S*p+C*m*E-h*M*E-v*m*x+h*S*x,P=A*S*p-_*M*p-A*m*E+d*M*E+_*m*x-d*S*x,O=_*C*p-A*v*p+A*h*E-d*C*E-_*h*x+d*v*x,z=A*v*m-_*C*m-A*h*S+d*C*S+_*h*M-d*v*M,H=i*F+s*P+l*O+u*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/H;return t[0]=F*L,t[1]=(C*S*u-v*M*u-C*l*E+s*M*E+v*l*x-s*S*x)*L,t[2]=(h*M*u-C*m*u+C*l*p-s*M*p-h*l*x+s*m*x)*L,t[3]=(v*m*u-h*S*u-v*l*p+s*S*p+h*l*E-s*m*E)*L,t[4]=P*L,t[5]=(_*M*u-A*S*u+A*l*E-i*M*E-_*l*x+i*S*x)*L,t[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*x-i*m*x)*L,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*E+i*m*E)*L,t[8]=O*L,t[9]=(A*v*u-_*C*u-A*s*E+i*C*E+_*s*x-i*v*x)*L,t[10]=(d*C*u-A*h*u+A*s*p-i*C*p-d*s*x+i*h*x)*L,t[11]=(_*h*u-d*v*u-_*s*p+i*v*p+d*s*E-i*h*E)*L,t[12]=z*L,t[13]=(_*C*l-A*v*l+A*s*S-i*C*S-_*s*M+i*v*M)*L,t[14]=(A*h*l-d*C*l-A*s*m+i*C*m+d*s*M-i*h*M)*L,t[15]=(d*v*l-_*h*l+_*s*m-i*v*m-d*s*S+i*h*S)*L,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,v=h+h,S=u*p,E=u*_,A=u*v,C=d*_,M=d*v,x=h*v,F=m*p,P=m*_,O=m*v,z=s.x,H=s.y,L=s.z;return l[0]=(1-(C+x))*z,l[1]=(E+O)*z,l[2]=(A-P)*z,l[3]=0,l[4]=(E-O)*H,l[5]=(1-(S+x))*H,l[6]=(M+F)*H,l[7]=0,l[8]=(A+P)*L,l[9]=(M-F)*L,l[10]=(1-(S+C))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=_r.set(l[0],l[1],l[2]).length();const d=_r.set(l[4],l[5],l[6]).length(),h=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,_=1/d,v=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Ii,m=!1){const p=this.elements,_=2*u/(i-t),v=2*u/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Ii)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Bc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Ii,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Ii)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Bc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const _r=new re,Ei=new en,AM=new re(0,0,0),RM=new re(1,1,1),ja=new re,hc=new re,Jn=new re,V0=new en,k0=new qo;class _a{constructor(t=0,i=0,s=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return V0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(V0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return k0.setFromEuler(this),this.setFromQuaternion(k0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class Z_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let CM=0;const X0=new re,vr=new qo,la=new en,pc=new re,Oo=new re,wM=new re,DM=new qo,W0=new re(1,0,0),q0=new re(0,1,0),Y0=new re(0,0,1),j0={type:"added"},UM={type:"removed"},xr={type:"childadded",child:null},md={type:"childremoved",child:null};class Fn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new re,i=new _a,s=new qo,l=new re(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(W0,t)}rotateY(t){return this.rotateOnAxis(q0,t)}rotateZ(t){return this.rotateOnAxis(Y0,t)}translateOnAxis(t,i){return X0.copy(t).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(W0,t)}translateY(t){return this.translateOnAxis(q0,t)}translateZ(t){return this.translateOnAxis(Y0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pc.copy(t):pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Oo,pc,this.up):la.lookAt(pc,Oo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(la),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ct("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(j0),xr.child=t,this.dispatchEvent(xr),xr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(UM),md.child=t,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(j0),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,wM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,DM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),v=d(t.shapes),S=d(t.skeletons),E=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new re(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new re,ca=new re,gd=new re,ua=new re,Sr=new re,Mr=new re,Z0=new re,_d=new re,vd=new re,xd=new re,Sd=new an,Md=new an,yd=new an;class Ti{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){bi.subVectors(l,i),ca.subVectors(s,i),gd.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(ca),m=bi.dot(gd),p=ca.dot(ca),_=ca.dot(gd),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const S=1/v,E=(p*m-h*_)*S,A=(d*_-h*m)*S;return u.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return Sd.setScalar(0),Md.setScalar(0),yd.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,s),yd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(yd,u.z),d}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),ca.subVectors(t,i),bi.cross(ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),bi.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;Sr.subVectors(l,s),Mr.subVectors(u,s),_d.subVectors(t,s);const m=Sr.dot(_d),p=Mr.dot(_d);if(m<=0&&p<=0)return i.copy(s);vd.subVectors(t,l);const _=Sr.dot(vd),v=Mr.dot(vd);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Sr,d);xd.subVectors(t,u);const E=Sr.dot(xd),A=Mr.dot(xd);if(A>=0&&E<=A)return i.copy(u);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(Mr,h);const M=_*A-E*v;if(M<=0&&v-_>=0&&E-A>=0)return Z0.subVectors(u,l),h=(v-_)/(v-_+(E-A)),i.copy(l).addScaledVector(Z0,h);const x=1/(M+C+S);return d=C*x,h=S*x,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Ed(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Mt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Tt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Tt.workingColorSpace){if(t=vM(t,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Ed(d,u,t+1/3),this.g=Ed(d,u,t),this.b=Ed(d,u,t-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&it("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:it("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);it("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=K_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Tt.workingToColorSpace(Un.copy(this),t),Math.round(St(Un.r*255,0,255))*65536+Math.round(St(Un.g*255,0,255))*256+Math.round(St(Un.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Tt.workingColorSpace){Tt.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=_<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=hi){Tt.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(mc);const s=sd(Za.h,mc.h,i),l=sd(Za.s,mc.s,i),u=sd(Za.l,mc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Mt;Mt.NAMES=K_;let NM=0;class Or extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Ar,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=zd,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fd&&(s.blendSrc=this.blendSrc),this.blendDst!==zd&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Q_ extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new re,gc=new Bt;let LM=0;class ei{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=P0,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==P0&&(t.usage=this.usage),t}}class J_ extends ei{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class $_ extends ei{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ci extends ei{constructor(t,i,s){super(new Float32Array(t),i,s)}}let OM=0;const di=new en,bd=new Fn,yr=new re,$n=new Yo,Po=new Yo,gn=new re;class ti extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y_(t)?$_:J_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ht().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ci(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors($n.min,Po.min),$n.expandByPoint(gn),gn.addVectors($n.max,Po.max),$n.expandByPoint(gn)):($n.expandByPoint(Po.min),$n.expandByPoint(Po.max))}$n.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)gn.fromBufferAttribute(h,p),m&&(yr.fromBufferAttribute(t,p),gn.add(yr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let $=0;$<s.count;$++)h[$]=new re,m[$]=new re;const p=new re,_=new re,v=new re,S=new Bt,E=new Bt,A=new Bt,C=new re,M=new re;function x($,R,w){p.fromBufferAttribute(s,$),_.fromBufferAttribute(s,R),v.fromBufferAttribute(s,w),S.fromBufferAttribute(u,$),E.fromBufferAttribute(u,R),A.fromBufferAttribute(u,w),_.sub(p),v.sub(p),E.sub(S),A.sub(S);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(k),M.copy(v).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(k),h[$].add(C),h[R].add(C),h[w].add(C),m[$].add(M),m[R].add(M),m[w].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let $=0,R=F.length;$<R;++$){const w=F[$],k=w.start,K=w.count;for(let Q=k,le=k+K;Q<le;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const P=new re,O=new re,z=new re,H=new re;function L($){z.fromBufferAttribute(l,$),H.copy(z);const R=h[$];P.copy(R),P.sub(z.multiplyScalar(z.dot(R))).normalize(),O.crossVectors(H,R);const k=O.dot(m[$])<0?-1:1;d.setXYZW($,P.x,P.y,P.z,k)}for(let $=0,R=F.length;$<R;++$){const w=F[$],k=w.start,K=w.count;for(let Q=k,le=k+K;Q<le;Q+=3)L(t.getX(Q+0)),L(t.getX(Q+1)),L(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,_=new re,v=new re;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),C=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,S=new p.constructor(m.length*_);let E=0,A=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*_;for(let x=0;x<_;x++)S[A++]=p[E++]}return new ei(S,_,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,v=p.length;_<v;_++){const S=p[_],E=t(S,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const E=p[v];_.push(E.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let S=0,E=v.length;S<E;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K0=new en,Ss=new Vh,_c=new jo,Q0=new re,vc=new re,xc=new re,Sc=new re,Td=new re,Mc=new re,J0=new re,yc=new re;class va extends Fn{constructor(t=new ti,i=new Q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],v=u[m];_!==0&&(Td.fromBufferAttribute(v,t),d?Mc.addScaledVector(Td,_):Mc.addScaledVector(Td.sub(i),_))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(u),Ss.copy(t.ray).recast(t.near),!(_c.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(_c,Q0)===null||Ss.origin.distanceToSquared(Q0)>(t.far-t.near)**2))&&(K0.copy(u).invert(),Ss.copy(t.ray).applyMatrix4(K0),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ss)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=d[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let O=F,z=P;O<z;O+=3){const H=h.getX(O),L=h.getX(O+1),$=h.getX(O+2);l=Ec(this,x,t,s,p,_,v,H,L,$),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const F=h.getX(M),P=h.getX(M+1),O=h.getX(M+2);l=Ec(this,d,t,s,p,_,v,F,P,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=d[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let O=F,z=P;O<z;O+=3){const H=O,L=O+1,$=O+2;l=Ec(this,x,t,s,p,_,v,H,L,$),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const F=M,P=M+1,O=M+2;l=Ec(this,d,t,s,p,_,v,F,P,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function PM(o,t,i,s,l,u,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===$a,h),m===null)return null;yc.copy(h),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Ec(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,vc),o.getVertexPosition(m,xc),o.getVertexPosition(p,Sc);const _=PM(o,t,i,s,vc,xc,Sc,J0);if(_){const v=new re;Ti.getBarycoord(J0,vc,xc,Sc,v),l&&(_.uv=Ti.getInterpolatedAttribute(l,h,m,p,v,new Bt)),u&&(_.uv1=Ti.getInterpolatedAttribute(u,h,m,p,v,new Bt)),d&&(_.normal=Ti.getInterpolatedAttribute(d,h,m,p,v,new re),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new re,materialIndex:0};Ti.getNormal(vc,xc,Sc,S.normal),_.face=S,_.barycoord=v}return _}class Zo extends ti{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],v=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,d,u,0),A("z","y","x",1,-1,s,i,-t,d,u,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(v,2));function A(C,M,x,F,P,O,z,H,L,$,R){const w=O/L,k=z/$,K=O/2,Q=z/2,le=H/2,fe=L+1,N=$+1;let B=0,ie=0;const Me=new re;for(let Se=0;Se<N;Se++){const U=Se*k-Q;for(let ee=0;ee<fe;ee++){const pe=ee*w-K;Me[C]=pe*F,Me[M]=U*P,Me[x]=le,p.push(Me.x,Me.y,Me.z),Me[C]=0,Me[M]=0,Me[x]=H>0?1:-1,_.push(Me.x,Me.y,Me.z),v.push(ee/L),v.push(1-Se/$),B+=1}}for(let Se=0;Se<$;Se++)for(let U=0;U<L;U++){const ee=S+U+fe*Se,pe=S+U+fe*(Se+1),Re=S+(U+1)+fe*(Se+1),Ce=S+(U+1)+fe*Se;m.push(ee,pe,Ce),m.push(pe,Re,Ce),ie+=6}h.addGroup(E,ie,R),E+=ie,S+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)t[l]=s[l]}return t}function FM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ev(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}const zM={clone:Nr,merge:On};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=FM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new re,$0=new Bt,e_=new Bt;class pi extends tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Rh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rh*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,$0,e_),i.subVectors(e_,$0)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ad*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,br=1;class HM extends Fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Er,br,t,i);l.layers=this.layers,this.add(l);const u=new pi(Er,br,t,i);u.layers=this.layers,this.add(u);const d=new pi(Er,br,t,i);d.layers=this.layers,this.add(d);const h=new pi(Er,br,t,i);h.layers=this.layers,this.add(h);const m=new pi(Er,br,t,i);m.layers=this.layers,this.add(m);const p=new pi(Er,br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class nv extends Pn{constructor(t=[],i=ws,s,l,u,d,h,m,p,_){super(t,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iv extends Hi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zo(5,5,5),u=new wi({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ha});u.uniforms.tEquirect.value=i;const d=new va(l,u),h=i.minFilter;return i.minFilter===Rs&&(i.minFilter=Nn),new HM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class bc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new bc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}let VM=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};class kM extends Pn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=Rn,_=Rn,v,S){super(null,d,h,m,p,_,l,u,v,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rd=new re,XM=new re,WM=new ht;class bs{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Rd.subVectors(s,i).cross(XM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Rd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||WM.getNormalMatrix(t),l=this.coplanarPoint(Rd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new jo,qM=new Bt(.5,.5),Tc=new re;class av{constructor(t=new bs,i=new bs,s=new bs,l=new bs,u=new bs,d=new bs){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],v=u[5],S=u[6],E=u[7],A=u[8],C=u[9],M=u[10],x=u[11],F=u[12],P=u[13],O=u[14],z=u[15];if(l[0].setComponents(p-d,E-_,x-A,z-F).normalize(),l[1].setComponents(p+d,E+_,x+A,z+F).normalize(),l[2].setComponents(p+h,E+v,x+C,z+P).normalize(),l[3].setComponents(p-h,E-v,x-C,z-P).normalize(),s)l[4].setComponents(m,S,M,O).normalize(),l[5].setComponents(p-m,E-S,x-M,z-O).normalize();else if(l[4].setComponents(p-m,E-S,x-M,z-O).normalize(),i===Ii)l[5].setComponents(p+m,E+S,x+M,z+O).normalize();else if(i===Bc)l[5].setComponents(m,S,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const i=qM.distanceTo(t.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sv extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new re,Vc=new re,t_=new en,Fo=new Vh,Ac=new jo,Cd=new re,n_=new re;class YM extends Fn{constructor(t=new ti,i=new sv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Ci(s,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=u,t.ray.intersectsSphere(Ac)===!1)return;t_.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(t_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const E=Math.max(0,d.start),A=Math.min(_.count,d.start+d.count);for(let C=E,M=A-1;C<M;C+=p){const x=_.getX(C),F=_.getX(C+1),P=Rc(this,t,Fo,m,x,F,C);P&&i.push(P)}if(this.isLineLoop){const C=_.getX(A-1),M=_.getX(E),x=Rc(this,t,Fo,m,C,M,A-1);x&&i.push(x)}}else{const E=Math.max(0,d.start),A=Math.min(S.count,d.start+d.count);for(let C=E,M=A-1;C<M;C+=p){const x=Rc(this,t,Fo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Rc(this,t,Fo,m,A-1,E,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Rc(o,t,i,s,l,u,d){const h=o.geometry.attributes.position;if(Gc.fromBufferAttribute(h,l),Vc.fromBufferAttribute(h,u),i.distanceSqToSegment(Gc,Vc,Cd,n_)>s)return;Cd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Cd);if(!(p<t.near||p>t.far))return{distance:p,point:n_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const i_=new re,a_=new re;class jM extends YM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)i_.fromBufferAttribute(i,l),a_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+i_.distanceTo(a_);t.setAttribute("lineDistance",new Ci(s,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZM extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const s_=new en,Ch=new Vh,Cc=new jo,wc=new re;class KM extends Fn{constructor(t=new ti,i=new ZM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=u,t.ray.intersectsSphere(Cc)===!1)return;s_.copy(l).invert(),Ch.copy(t.ray).applyMatrix4(s_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const S=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let A=S,C=E;A<C;A++){const M=p.getX(A);wc.fromBufferAttribute(v,M),r_(wc,M,m,l,t,i,this)}}else{const S=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let A=S,C=E;A<C;A++)wc.fromBufferAttribute(v,A),r_(wc,A,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function r_(o,t,i,s,l,u,d){const h=Ch.distanceSqToPoint(o);if(h<i){const m=new re;Ch.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Xo extends Pn{constructor(t,i,s=Gi,l,u,d,h=Rn,m=Rn,p,_=ga,v=1){if(_!==ga&&_!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class QM extends Xo{constructor(t,i=Gi,s=ws,l,u,d=Rn,h=Rn,m,p=ga){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,u,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xc extends ti{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=t/h,S=i/m,E=[],A=[],C=[],M=[];for(let x=0;x<_;x++){const F=x*S-d;for(let P=0;P<p;P++){const O=P*v-u;A.push(O,-F,0),C.push(0,0,1),M.push(P/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<h;F++){const P=F+p*x,O=F+p*(x+1),z=F+1+p*(x+1),H=F+1+p*x;E.push(P,O,H),E.push(O,z,H)}this.setIndex(E),this.setAttribute("position",new Ci(A,3)),this.setAttribute("normal",new Ci(C,3)),this.setAttribute("uv",new Ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class JM extends wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $M extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ey extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ov extends tv{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ty extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ny{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function o_(o,t,i,s){const l=iy(s);switch(i){case X_:return o*t;case q_:return o*t/l.components*l.byteLength;case Fh:return o*t/l.components*l.byteLength;case Dr:return o*t*2/l.components*l.byteLength;case zh:return o*t*2/l.components*l.byteLength;case W_:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Ih:return o*t*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(t,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(t,8)/2;case $d:case eh:case nh:case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case th:case ah:case sh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case _h:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case vh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sh:case Mh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Eh:case bh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Th:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function iy(o){switch(o){case mi:case H_:return{byteLength:1,components:1};case Go:case G_:case ma:return{byteLength:2,components:1};case Oh:case Ph:return{byteLength:2,components:4};case Gi:case Lh:case zi:return{byteLength:4,components:1};case V_:case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function lv(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ay(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,_);else{v.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<v.length;E++){const A=v[S],C=v[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,v[S]=C)}v.length=S+1;for(let E=0,A=v.length;E<A;E++){const C=v[E];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$E=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,db=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ab=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:sy,alphahash_pars_fragment:ry,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:fy,aomap_pars_fragment:dy,batching_pars_vertex:hy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:_y,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:yy,clipping_planes_vertex:Ey,color_fragment:by,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Uy,displacementmap_vertex:Ny,emissivemap_fragment:Ly,emissivemap_pars_fragment:Oy,colorspace_fragment:Py,colorspace_pars_fragment:Fy,envmap_fragment:zy,envmap_common_pars_fragment:Iy,envmap_pars_fragment:By,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:Qy,envmap_vertex:Gy,fog_vertex:Vy,fog_pars_vertex:ky,fog_fragment:Xy,fog_pars_fragment:Wy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Zy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:$y,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:aE,lights_fragment_maps:sE,lights_fragment_end:rE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:fE,map_pars_fragment:dE,map_particle_fragment:hE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:xE,morphtarget_pars_vertex:SE,morphtarget_vertex:ME,normal_fragment_begin:yE,normal_fragment_maps:EE,normal_pars_fragment:bE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:wE,clearcoat_pars_fragment:DE,iridescence_pars_fragment:UE,opaque_fragment:NE,packing:LE,premultiplied_alpha_fragment:OE,project_vertex:PE,dithering_fragment:FE,dithering_pars_fragment:zE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:GE,shadowmap_vertex:VE,shadowmask_pars_fragment:kE,skinbase_vertex:XE,skinning_pars_vertex:WE,skinning_vertex:qE,skinnormal_vertex:YE,specularmap_fragment:jE,specularmap_pars_fragment:ZE,tonemapping_fragment:KE,tonemapping_pars_fragment:QE,transmission_fragment:JE,transmission_pars_fragment:$E,uv_pars_fragment:eb,uv_pars_vertex:tb,uv_vertex:nb,worldpos_vertex:ib,background_vert:ab,background_frag:sb,backgroundCube_vert:rb,backgroundCube_frag:ob,cube_vert:lb,cube_frag:cb,depth_vert:ub,depth_frag:fb,distance_vert:db,distance_frag:hb,equirect_vert:pb,equirect_frag:mb,linedashed_vert:gb,linedashed_frag:_b,meshbasic_vert:vb,meshbasic_frag:xb,meshlambert_vert:Sb,meshlambert_frag:Mb,meshmatcap_vert:yb,meshmatcap_frag:Eb,meshnormal_vert:bb,meshnormal_frag:Tb,meshphong_vert:Ab,meshphong_frag:Rb,meshphysical_vert:Cb,meshphysical_frag:wb,meshtoon_vert:Db,meshtoon_frag:Ub,points_vert:Nb,points_frag:Lb,shadow_vert:Ob,shadow_frag:Pb,sprite_vert:Fb,sprite_frag:zb},Fe={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Fi={basic:{uniforms:On([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:On([Fe.common,Fe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:On([Fe.lights,Fe.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Fi.physical={uniforms:On([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Dc={r:0,b:0,g:0},ys=new _a,Ib=new en;function Bb(o,t,i,s,l,u,d){const h=new Mt(0);let m=u===!0?0:1,p,_,v=null,S=0,E=null;function A(P){let O=P.isScene===!0?P.background:null;return O&&O.isTexture&&(O=(P.backgroundBlurriness>0?i:t).get(O)),O}function C(P){let O=!1;const z=A(P);z===null?x(h,m):z&&z.isColor&&(x(z,1),O=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,O){const z=A(O);z&&(z.isCubeTexture||z.mapping===kc)?(_===void 0&&(_=new va(new Zo(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Nr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,L,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ys.copy(O.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(ys)),_.material.toneMapped=Tt.getTransfer(z.colorSpace)!==It,(v!==z||S!==z.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,v=z,S=z.version,E=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new va(new Xc(2,2),new wi({name:"BackgroundMaterial",uniforms:Nr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(z.colorSpace)!==It,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||S!==z.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,S=z.version,E=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,O){P.getRGB(Dc,ev(o)),s.buffers.color.setClear(Dc.r,Dc.g,Dc.b,O,d)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,O=1){h.set(P),m=O,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(h,m)},render:C,addToRenderList:M,dispose:F}}function Hb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(w,k,K,Q,le){let fe=!1;const N=v(Q,K,k);u!==N&&(u=N,p(u.object)),fe=E(w,Q,K,le),fe&&A(w,Q,K,le),le!==null&&t.update(le,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,O(w,k,K,Q),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function v(w,k,K){const Q=K.wireframe===!0;let le=s[w.id];le===void 0&&(le={},s[w.id]=le);let fe=le[k.id];fe===void 0&&(fe={},le[k.id]=fe);let N=fe[Q];return N===void 0&&(N=S(m()),fe[Q]=N),N}function S(w){const k=[],K=[],Q=[];for(let le=0;le<i;le++)k[le]=0,K[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:Q,object:w,attributes:{},index:null}}function E(w,k,K,Q){const le=u.attributes,fe=k.attributes;let N=0;const B=K.getAttributes();for(const ie in B)if(B[ie].location>=0){const Se=le[ie];let U=fe[ie];if(U===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;N++}return u.attributesNum!==N||u.index!==Q}function A(w,k,K,Q){const le={},fe=k.attributes;let N=0;const B=K.getAttributes();for(const ie in B)if(B[ie].location>=0){let Se=fe[ie];Se===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),le[ie]=U,N++}u.attributes=le,u.attributesNum=N,u.index=Q}function C(){const w=u.newAttributes;for(let k=0,K=w.length;k<K;k++)w[k]=0}function M(w){x(w,0)}function x(w,k){const K=u.newAttributes,Q=u.enabledAttributes,le=u.attributeDivisors;K[w]=1,Q[w]===0&&(o.enableVertexAttribArray(w),Q[w]=1),le[w]!==k&&(o.vertexAttribDivisor(w,k),le[w]=k)}function F(){const w=u.newAttributes,k=u.enabledAttributes;for(let K=0,Q=k.length;K<Q;K++)k[K]!==w[K]&&(o.disableVertexAttribArray(K),k[K]=0)}function P(w,k,K,Q,le,fe,N){N===!0?o.vertexAttribIPointer(w,k,K,le,fe):o.vertexAttribPointer(w,k,K,Q,le,fe)}function O(w,k,K,Q){C();const le=Q.attributes,fe=K.getAttributes(),N=k.defaultAttributeValues;for(const B in fe){const ie=fe[B];if(ie.location>=0){let Me=le[B];if(Me===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const Se=Me.normalized,U=Me.itemSize,ee=t.get(Me);if(ee===void 0)continue;const pe=ee.buffer,Re=ee.type,Ce=ee.bytesPerElement,J=Re===o.INT||Re===o.UNSIGNED_INT||Me.gpuType===Lh;if(Me.isInterleavedBufferAttribute){const ce=Me.data,be=ce.stride,Be=Me.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<ie.locationSize;Le++)x(ie.location+Le,ce.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<ie.locationSize;Le++)M(ie.location+Le);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let Le=0;Le<ie.locationSize;Le++)P(ie.location+Le,U/ie.locationSize,Re,Se,be*Ce,(Be+U/ie.locationSize*Le)*Ce,J)}else{if(Me.isInstancedBufferAttribute){for(let ce=0;ce<ie.locationSize;ce++)x(ie.location+ce,Me.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ce=0;ce<ie.locationSize;ce++)M(ie.location+ce);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let ce=0;ce<ie.locationSize;ce++)P(ie.location+ce,U/ie.locationSize,Re,Se,U*Ce,U/ie.locationSize*ce*Ce,J)}}else if(N!==void 0){const Se=N[B];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ie.location,Se);break;case 3:o.vertexAttrib3fv(ie.location,Se);break;case 4:o.vertexAttrib4fv(ie.location,Se);break;default:o.vertexAttrib1fv(ie.location,Se)}}}}F()}function z(){$();for(const w in s){const k=s[w];for(const K in k){const Q=k[K];for(const le in Q)_(Q[le].object),delete Q[le];delete k[K]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const K in k){const Q=k[K];for(const le in Q)_(Q[le].object),delete Q[le];delete k[K]}delete s[w.id]}function L(w){for(const k in s){const K=s[k];if(K[w.id]===void 0)continue;const Q=K[w.id];for(const le in Q)_(Q[le].object),delete Q[le];delete K[w.id]}}function $(){R(),d=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:L,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function Gb(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=_[A];i.update(E,s,1)}function m(p,_,v,S){if(v===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)d(p[A],_[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let A=0;for(let C=0;C<v;C++)A+=_[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Vb(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(L){return!(L!==Ri&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const $=L===ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==mi&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==zi&&!$)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(it("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:O,maxSamples:z,samples:H}}function kb(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new bs,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const E=v.length!==0||S||s!==0||l;return l=S,s=v.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,E){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!l||A===null||A.length===0||u&&!M)u?_(null):p();else{const F=u?0:s,P=F*4;let O=x.clippingState||null;m.value=O,O=_(A,S,P,E);for(let z=0;z!==P;++z)O[z]=i[z];x.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,S,E,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const x=E+C*4,F=S.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,O=E;P!==C;++P,O+=4)d.copy(v[P]).applyMatrix4(F,h),d.normal.toArray(M,O),M[O+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function Xb(o){let t=new WeakMap;function i(d,h){return h===Wd?d.mapping=ws:h===qd&&(d.mapping=wr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Wd||h===qd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new iv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Ja=4,l_=[.125,.215,.35,.446,.526,.582],As=20,Wb=256,zo=new ov,c_=new Mt;let wd=null,Dd=0,Ud=0,Nd=!1;const qb=new re;class u_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=qb}=u;wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Dd,Ud),this._renderer.xr.enabled=Nd,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ma,format:Ri,colorSpace:Ur,depthBuffer:!1},l=f_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yb(u)),this._blurMaterial=Zb(u,t,i),this._ggxMaterial=jb(u,t,i)}return l}_compileMaterial(t){const i=new va(new ti,t);this._renderer.compile(i,zo)}_sceneToCubeUV(t,i,s,l,u){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,E=v.toneMapping;v.getClearColor(c_),v.toneMapping=Bi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new va(new Zo,new Q_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const F=t.background;F?F.isColor&&(M.color.copy(F),t.background=null,x=!0):(M.color.copy(c_),x=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[P],u.y,u.z)):O===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[P]));const z=this._cubeSize;Tr(l,O*z,P>2?z:0,z,z),v.setRenderTarget(l),x&&v.render(C,m),v.render(t,m)}v.toneMapping=E,v.autoClear=S,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ws||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=h_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Tr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),S=0+p*1.25,E=v*S,{_lodMax:A}=this,C=this._sizeLods[s],M=3*C*(s>A-Ja?s-A+Ja:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,Tr(u,M,x,3*C,2*C),l.setRenderTarget(u),l.render(h,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,Tr(t,M,x,3*C,2*C),l.setRenderTarget(t),l.render(h,zo)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*As-1),C=u/A,M=isFinite(u)?1+Math.floor(_*C):As;M>As&&it(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${As}`);const x=[];let F=0;for(let L=0;L<As;++L){const $=L/C,R=Math.exp(-$*$/2);x.push(R),L===0?F+=R:L<M&&(F+=2*R)}for(let L=0;L<x.length;L++)x[L]=x[L]/F;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:P}=this;S.dTheta.value=A,S.mipInt.value=P-s;const O=this._sizeLods[l],z=3*O*(l>P-Ja?l-P+Ja:0),H=4*(this._cubeSize-O);Tr(i,z,H,3*O,2*O),m.setRenderTarget(i),m.render(v,zo)}}function Yb(o){const t=[],i=[],s=[];let l=o;const u=o-Ja+1+l_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ja?m=l_[d-o+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],E=6,A=6,C=3,M=2,x=1,F=new Float32Array(C*A*E),P=new Float32Array(M*A*E),O=new Float32Array(x*A*E);for(let H=0;H<E;H++){const L=H%3*2/3-1,$=H>2?0:-1,R=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];F.set(R,C*A*H),P.set(S,M*A*H);const w=[H,H,H,H,H,H];O.set(w,x*A*H)}const z=new ti;z.setAttribute("position",new ei(F,C)),z.setAttribute("uv",new ei(P,M)),z.setAttribute("faceIndex",new ei(O,x)),s.push(new va(z,null)),l>Ja&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function f_(o,t,i){const s=new Hi(o,t,i);return s.texture.mapping=kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function jb(o,t,i){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Zb(o,t,i){const s=new Float32Array(As),l=new re(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function d_(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function h_(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kb(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Wd||m===qd,_=m===ws||m===wr;if(p||_){let v=t.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new u_(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const E=h.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new u_(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Qb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("WebGLRenderer: "+s+" extension not supported."),l}}}function Jb(o,t,i,s){const l={},u=new WeakMap;function d(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(t.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const E in S)t.update(S[E],o.ARRAY_BUFFER)}function p(v){const S=[],E=v.index,A=v.attributes.position;let C=0;if(E!==null){const F=E.array;C=E.version;for(let P=0,O=F.length;P<O;P+=3){const z=F[P+0],H=F[P+1],L=F[P+2];S.push(z,H,H,L,L,z)}}else if(A!==void 0){const F=A.array;C=A.version;for(let P=0,O=F.length/3-1;P<O;P+=3){const z=P+0,H=P+1,L=P+2;S.push(z,H,H,L,L,z)}}else return;const M=new(Y_(S)?$_:J_)(S,1);M.version=C;const x=u.get(v);x&&t.remove(x),u.set(v,M)}function _(v){const S=u.get(v);if(S){const E=v.index;E!==null&&S.version<E.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function $b(o,t,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,E){o.drawElements(s,E,u,S*d),i.update(E,s,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,u,S*d,A),i.update(E,s,A))}function _(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,s,1)}function v(S,E,A,C){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/d,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,C,0,A);let x=0;for(let F=0;F<A;F++)x+=E[F]*C[F];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function eT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ct("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function tT(o,t,i){const s=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(h);if(S===void 0||S.count!==v){let w=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let O=0;A===!0&&(O=1),C===!0&&(O=2),M===!0&&(O=3);let z=h.attributes.position.count*O,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const L=new Float32Array(z*H*4*v),$=new j_(L,z,H,v);$.type=zi,$.needsUpdate=!0;const R=O*4;for(let k=0;k<v;k++){const K=x[k],Q=F[k],le=P[k],fe=z*H*4*k;for(let N=0;N<K.count;N++){const B=N*R;A===!0&&(l.fromBufferAttribute(K,N),L[fe+B+0]=l.x,L[fe+B+1]=l.y,L[fe+B+2]=l.z,L[fe+B+3]=0),C===!0&&(l.fromBufferAttribute(Q,N),L[fe+B+4]=l.x,L[fe+B+5]=l.y,L[fe+B+6]=l.z,L[fe+B+7]=0),M===!0&&(l.fromBufferAttribute(le,N),L[fe+B+8]=l.x,L[fe+B+9]=l.y,L[fe+B+10]=l.z,L[fe+B+11]=le.itemSize===4?l.w:1)}}S={count:v,texture:$,size:new Bt(z,H)},s.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function nT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const iT={[N_]:"LINEAR_TONE_MAPPING",[L_]:"REINHARD_TONE_MAPPING",[O_]:"CINEON_TONE_MAPPING",[P_]:"ACES_FILMIC_TONE_MAPPING",[z_]:"AGX_TONE_MAPPING",[I_]:"NEUTRAL_TONE_MAPPING",[F_]:"CUSTOM_TONE_MAPPING"};function aT(o,t,i,s,l){const u=new Hi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Hi(t,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),h=new ti;h.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const m=new JM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new va(h,m),_=new ov(-1,1,1,-1,0,1);let v=null,S=null,E=!1,A,C=null,M=[],x=!1;this.setSize=function(F,P){u.setSize(F,P),d.setSize(F,P);for(let O=0;O<M.length;O++){const z=M[O];z.setSize&&z.setSize(F,P)}},this.setEffects=function(F){M=F,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,O=u.height;for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(P,O)}},this.begin=function(F,P){if(E||F.toneMapping===Bi&&M.length===0)return!1;if(C=P,P!==null){const O=P.width,z=P.height;(u.width!==O||u.height!==z)&&this.setSize(O,z)}return x===!1&&F.setRenderTarget(u),A=F.toneMapping,F.toneMapping=Bi,!0},this.hasRenderPass=function(){return x},this.end=function(F,P){F.toneMapping=A,E=!0;let O=u,z=d;for(let H=0;H<M.length;H++){const L=M[H];if(L.enabled!==!1&&(L.render(F,z,O,P),L.needsSwap!==!1)){const $=O;O=z,z=$}}if(v!==F.outputColorSpace||S!==F.toneMapping){v=F.outputColorSpace,S=F.toneMapping,m.defines={},Tt.getTransfer(v)===It&&(m.defines.SRGB_TRANSFER="");const H=iT[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(C),F.render(p,_),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const cv=new Pn,wh=new Xo(1,1),uv=new j_,fv=new bM,dv=new nv,p_=[],m_=[],g_=new Float32Array(16),__=new Float32Array(9),v_=new Float32Array(4);function Pr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=p_[l];if(u===void 0&&(u=new Float32Array(l),p_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function qc(o,t){let i=m_[t];i===void 0&&(i=new Int32Array(t),m_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function cT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;v_.set(s),o.uniformMatrix2fv(this.addr,!1,v_),pn(i,s)}}function uT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;__.set(s),o.uniformMatrix3fv(this.addr,!1,__),pn(i,s)}}function fT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;g_.set(s),o.uniformMatrix4fv(this.addr,!1,g_),pn(i,s)}}function dT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function hT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function gT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function ST(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(wh.compareFunction=i.isReversedDepthBuffer()?Hh:Bh,u=wh):u=cv,i.setTexture2D(t||u,l)}function MT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||fv,l)}function yT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||dv,l)}function ET(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||uv,l)}function bT(o){switch(o){case 5126:return sT;case 35664:return rT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ET}}function TT(o,t){o.uniform1fv(this.addr,t)}function AT(o,t){const i=Pr(t,this.size,2);o.uniform2fv(this.addr,i)}function RT(o,t){const i=Pr(t,this.size,3);o.uniform3fv(this.addr,i)}function CT(o,t){const i=Pr(t,this.size,4);o.uniform4fv(this.addr,i)}function wT(o,t){const i=Pr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function DT(o,t){const i=Pr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function UT(o,t){const i=Pr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function NT(o,t){o.uniform1iv(this.addr,t)}function LT(o,t){o.uniform2iv(this.addr,t)}function OT(o,t){o.uniform3iv(this.addr,t)}function PT(o,t){o.uniform4iv(this.addr,t)}function FT(o,t){o.uniform1uiv(this.addr,t)}function zT(o,t){o.uniform2uiv(this.addr,t)}function IT(o,t){o.uniform3uiv(this.addr,t)}function BT(o,t){o.uniform4uiv(this.addr,t)}function HT(o,t,i){const s=this.cache,l=t.length,u=qc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=wh:d=cv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function GT(o,t,i){const s=this.cache,l=t.length,u=qc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||fv,u[d])}function VT(o,t,i){const s=this.cache,l=t.length,u=qc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||dv,u[d])}function kT(o,t,i){const s=this.cache,l=t.length,u=qc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||uv,u[d])}function XT(o){switch(o){case 5126:return TT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return wT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return LT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return FT;case 36294:return zT;case 36295:return IT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}class WT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=bT(i.type)}}class qT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XT(i.type)}}class YT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function x_(o,t){o.seq.push(t),o.map[t.id]=t}function jT(o,t,i){const s=o.name,l=s.length;for(Ld.lastIndex=0;;){const u=Ld.exec(s),d=Ld.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){x_(i,p===void 0?new WT(h,o,t):new qT(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new YT(h),x_(i,v)),i=v}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);jT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function S_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const ZT=37297;let KT=0;function QT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const M_=new ht;function JT(o){Tt._getMatrix(M_,Tt.workingColorSpace,o);const t=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Ic:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function y_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+QT(o.getShaderSource(t),h)}else return u}function $T(o,t){const i=JT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const eA={[N_]:"Linear",[L_]:"Reinhard",[O_]:"Cineon",[P_]:"ACESFilmic",[z_]:"AgX",[I_]:"Neutral",[F_]:"Custom"};function tA(o,t){const i=eA[t];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new re;function nA(){Tt.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function aA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function sA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Ho(o){return o!==""}function E_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(o){return o.replace(rA,lA)}const oA=new Map;function lA(o,t){let i=pt[t];if(i===void 0){const s=oA.get(t);if(s!==void 0)i=pt[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Dh(i)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(o){return o.replace(cA,uA)}function uA(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function A_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const fA={[Nc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function dA(o){return fA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hA={[ws]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[kc]:"ENVMAP_TYPE_CUBE_UV"};function pA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":hA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const mA={[wr]:"ENVMAP_MODE_REFRACTION"};function gA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _A={[U_]:"ENVMAP_BLENDING_MULTIPLY",[aM]:"ENVMAP_BLENDING_MIX",[sM]:"ENVMAP_BLENDING_ADD"};function vA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":_A[o.combine]||"ENVMAP_BLENDING_NONE"}function xA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function SA(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=dA(i),p=pA(i),_=gA(i),v=vA(i),S=xA(i),E=iA(i),A=aA(u),C=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ho).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ho).join(`
`),x.length>0&&(x+=`
`)):(M=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),x=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Bi?tA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,$T("linearToOutputTexel",i.outputColorSpace),nA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Dh(d),d=E_(d,i),d=b_(d,i),h=Dh(h),h=E_(h,i),h=b_(h,i),d=T_(d),h=T_(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===F0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=F+M+d,O=F+x+h,z=S_(l,l.VERTEX_SHADER,P),H=S_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,z),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function L(k){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",Q=l.getShaderInfoLog(z)||"",le=l.getShaderInfoLog(H)||"",fe=K.trim(),N=Q.trim(),B=le.trim();let ie=!0,Me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,H);else{const Se=y_(l,z,"vertex"),U=y_(l,H,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+Se+`
`+U)}else fe!==""?it("WebGLProgram: Program Info Log:",fe):(N===""||B==="")&&(Me=!1);Me&&(k.diagnostics={runnable:ie,programLog:fe,vertexShader:{log:N,prefix:M},fragmentShader:{log:B,prefix:x}})}l.deleteShader(z),l.deleteShader(H),$=new zc(l,C),R=sA(l,C)}let $;this.getUniforms=function(){return $===void 0&&L(this),$};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,ZT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=H,this}let MA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new EA(t),i.set(t,s)),s}}class EA{constructor(t){this.id=MA++,this.code=t,this.usedTimes=0}}function bA(o,t,i,s,l,u,d){const h=new Z_,m=new yA,p=new Set,_=[],v=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,k,K,Q){const le=K.fog,fe=Q.geometry,N=R.isMeshStandardMaterial?K.environment:null,B=(R.isMeshStandardMaterial?i:t).get(R.envMap||N),ie=B&&B.mapping===kc?B.image.height:null,Me=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&it("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ee=0;fe.morphAttributes.position!==void 0&&(ee=1),fe.morphAttributes.normal!==void 0&&(ee=2),fe.morphAttributes.color!==void 0&&(ee=3);let pe,Re,Ce,J;if(Me){const bt=Fi[Me];pe=bt.vertexShader,Re=bt.fragmentShader}else pe=R.vertexShader,Re=R.fragmentShader,m.update(R),Ce=m.getVertexShaderID(R),J=m.getFragmentShaderID(R);const ce=o.getRenderTarget(),be=o.state.buffers.depth.getReversed(),Be=Q.isInstancedMesh===!0,Le=Q.isBatchedMesh===!0,ot=!!R.map,qt=!!R.matcap,ct=!!B,ut=!!R.aoMap,Et=!!R.lightMap,at=!!R.bumpMap,Xt=!!R.normalMap,G=!!R.displacementMap,Zt=!!R.emissiveMap,yt=!!R.metalnessMap,Nt=!!R.roughnessMap,Ye=R.anisotropy>0,D=R.clearcoat>0,y=R.dispersion>0,q=R.iridescence>0,me=R.sheen>0,xe=R.transmission>0,de=Ye&&!!R.anisotropyMap,Ze=D&&!!R.clearcoatMap,De=D&&!!R.clearcoatNormalMap,Xe=D&&!!R.clearcoatRoughnessMap,tt=q&&!!R.iridescenceMap,Ee=q&&!!R.iridescenceThicknessMap,Te=me&&!!R.sheenColorMap,He=me&&!!R.sheenRoughnessMap,ze=!!R.specularMap,Ue=!!R.specularColorMap,ft=!!R.specularIntensityMap,X=xe&&!!R.transmissionMap,Oe=xe&&!!R.thicknessMap,Ae=!!R.gradientMap,Ie=!!R.alphaMap,ye=R.alphaTest>0,ve=!!R.alphaHash,we=!!R.extensions;let nt=Bi;R.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Ot={shaderID:Me,shaderType:R.type,shaderName:R.name,vertexShader:pe,fragmentShader:Re,defines:R.defines,customVertexShaderID:Ce,customFragmentShaderID:J,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Le,batchingColor:Le&&Q._colorsTexture!==null,instancing:Be,instancingColor:Be&&Q.instanceColor!==null,instancingMorph:Be&&Q.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ur,alphaToCoverage:!!R.alphaToCoverage,map:ot,matcap:qt,envMap:ct,envMapMode:ct&&B.mapping,envMapCubeUVHeight:ie,aoMap:ut,lightMap:Et,bumpMap:at,normalMap:Xt,displacementMap:G,emissiveMap:Zt,normalMapObjectSpace:Xt&&R.normalMapType===cM,normalMapTangentSpace:Xt&&R.normalMapType===lM,metalnessMap:yt,roughnessMap:Nt,anisotropy:Ye,anisotropyMap:de,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:De,clearcoatRoughnessMap:Xe,dispersion:y,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Te,sheenRoughnessMap:He,specularMap:ze,specularColorMap:Ue,specularIntensityMap:ft,transmission:xe,transmissionMap:X,thicknessMap:Oe,gradientMap:Ae,opaque:R.transparent===!1&&R.blending===Ar&&R.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ye,alphaHash:ve,combine:R.combine,mapUv:ot&&C(R.map.channel),aoMapUv:ut&&C(R.aoMap.channel),lightMapUv:Et&&C(R.lightMap.channel),bumpMapUv:at&&C(R.bumpMap.channel),normalMapUv:Xt&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Zt&&C(R.emissiveMap.channel),metalnessMapUv:yt&&C(R.metalnessMap.channel),roughnessMapUv:Nt&&C(R.roughnessMap.channel),anisotropyMapUv:de&&C(R.anisotropyMap.channel),clearcoatMapUv:Ze&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:De&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:He&&C(R.sheenRoughnessMap.channel),specularMapUv:ze&&C(R.specularMap.channel),specularColorMapUv:Ue&&C(R.specularColorMap.channel),specularIntensityMapUv:ft&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Oe&&C(R.thicknessMap.channel),alphaMapUv:Ie&&C(R.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Xt||Ye),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!fe.attributes.uv&&(ot||Ie),fog:!!le,useFog:R.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:be,skinning:Q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:ot&&R.map.isVideoTexture===!0&&Tt.getTransfer(R.map.colorSpace)===It,decodeVideoTextureEmissive:Zt&&R.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(R.emissiveMap.colorSpace)===It,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fa,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:we&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&R.extensions.multiDraw===!0||Le)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)w.push(k),w.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(F(w,R),P(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function F(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function P(R,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),R.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),R.push(h.mask)}function O(R){const w=A[R.type];let k;if(w){const K=Fi[w];k=zM.clone(K.uniforms)}else k=R.uniforms;return k}function z(R,w){let k=v.get(w);return k!==void 0?++k.usedTimes:(k=new SA(o,w,R,u),_.push(k),v.set(w,k)),k}function H(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),v.delete(R.cacheKey),R.destroy()}}function L(R){m.remove(R)}function $(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:O,acquireProgram:z,releaseProgram:H,releaseShaderCache:L,programs:_,dispose:$}}function TA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function AA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function R_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function C_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(v,S,E,A,C,M){let x=o[t];return x===void 0?(x={id:v.id,object:v,geometry:S,material:E,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[t]=x):(x.id=v.id,x.object=v,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=v.renderOrder,x.z=C,x.group=M),t++,x}function h(v,S,E,A,C,M){const x=d(v,S,E,A,C,M);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(v,S,E,A,C,M){const x=d(v,S,E,A,C,M);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,S){i.length>1&&i.sort(v||AA),s.length>1&&s.sort(S||R_),l.length>1&&l.sort(S||R_)}function _(){for(let v=t,S=o.length;v<S;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function RA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new C_,o.set(s,[d])):l>=u.length?(d=new C_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function CA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Mt};break;case"SpotLight":i={position:new re,direction:new re,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function wA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let DA=0;function UA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function NA(o){const t=new CA,i=wA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,u=new en,d=new en;function h(p){let _=0,v=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let E=0,A=0,C=0,M=0,x=0,F=0,P=0,O=0,z=0,H=0,L=0;p.sort(UA);for(let R=0,w=p.length;R<w;R++){const k=p[R],K=k.color,Q=k.intensity,le=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Dr?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=K.r*Q,v+=K.g*Q,S+=K.b*Q;else if(k.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(k.sh.coefficients[N],Q);L++}else if(k.isDirectionalLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const B=k.shadow,ie=i.get(k);ie.shadowIntensity=B.intensity,ie.shadowBias=B.bias,ie.shadowNormalBias=B.normalBias,ie.shadowRadius=B.radius,ie.shadowMapSize=B.mapSize,s.directionalShadow[E]=ie,s.directionalShadowMap[E]=fe,s.directionalShadowMatrix[E]=k.shadow.matrix,F++}s.directional[E]=N,E++}else if(k.isSpotLight){const N=t.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(K).multiplyScalar(Q),N.distance=le,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,s.spot[C]=N;const B=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,B.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[C]=B.matrix,k.castShadow){const ie=i.get(k);ie.shadowIntensity=B.intensity,ie.shadowBias=B.bias,ie.shadowNormalBias=B.normalBias,ie.shadowRadius=B.radius,ie.shadowMapSize=B.mapSize,s.spotShadow[C]=ie,s.spotShadowMap[C]=fe,O++}C++}else if(k.isRectAreaLight){const N=t.get(k);N.color.copy(K).multiplyScalar(Q),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=N,M++}else if(k.isPointLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),N.distance=k.distance,N.decay=k.decay,k.castShadow){const B=k.shadow,ie=i.get(k);ie.shadowIntensity=B.intensity,ie.shadowBias=B.bias,ie.shadowNormalBias=B.normalBias,ie.shadowRadius=B.radius,ie.shadowMapSize=B.mapSize,ie.shadowCameraNear=B.camera.near,ie.shadowCameraFar=B.camera.far,s.pointShadow[A]=ie,s.pointShadowMap[A]=fe,s.pointShadowMatrix[A]=k.shadow.matrix,P++}s.point[A]=N,A++}else if(k.isHemisphereLight){const N=t.get(k);N.skyColor.copy(k.color).multiplyScalar(Q),N.groundColor.copy(k.groundColor).multiplyScalar(Q),s.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const $=s.hash;($.directionalLength!==E||$.pointLength!==A||$.spotLength!==C||$.rectAreaLength!==M||$.hemiLength!==x||$.numDirectionalShadows!==F||$.numPointShadows!==P||$.numSpotShadows!==O||$.numSpotMaps!==z||$.numLightProbes!==L)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=M,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=O+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=L,$.directionalLength=E,$.pointLength=A,$.spotLength=C,$.rectAreaLength=M,$.hemiLength=x,$.numDirectionalShadows=F,$.numPointShadows=P,$.numSpotShadows=O,$.numSpotMaps=z,$.numLightProbes=L,s.version=DA++)}function m(p,_){let v=0,S=0,E=0,A=0,C=0;const M=_.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const P=p[x];if(P.isDirectionalLight){const O=s.directional[v];O.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),v++}else if(P.isSpotLight){const O=s.spot[E];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const O=s.rectArea[A];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(M),d.identity(),u.copy(P.matrixWorld),u.premultiply(M),d.extractRotation(u),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),A++}else if(P.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(M),S++}else if(P.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:s}}function w_(o){const t=new NA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function LA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new w_(o),t.set(l,[h])):u>=d.length?(h=new w_(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],zA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],D_=new en,Io=new re,Od=new re;function IA(o,t,i){let s=new av;const l=new Bt,u=new Bt,d=new an,h=new $M,m=new ey,p={},_=i.maxTextureSize,v={[$a]:Xn,[Xn]:$a,[fa]:fa},S=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:OA,fragmentShader:PA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new ti;A.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new va(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let x=this.type;this.render=function(H,L,$){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===BS&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Nc);const R=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),K=o.state;K.setBlending(ha),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=x!==this.type;Q&&L.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(fe=>fe.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,fe=H.length;le<fe;le++){const N=H[le],B=N.shadow;if(B===void 0){it("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ie=B.getFrameExtents();if(l.multiply(ie),u.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ie.x),l.x=u.x*ie.x,B.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ie.y),l.y=u.y*ie.y,B.mapSize.y=u.y)),B.map===null||Q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Bo){if(N.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Hi(l.x,l.y,{format:Dr,type:ma,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Xo(l.x,l.y,zi),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=ga,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}else{N.isPointLight?(B.map=new iv(l.x),B.map.depthTexture=new QM(l.x,Gi)):(B.map=new Hi(l.x,l.y),B.map.depthTexture=new Xo(l.x,l.y,Gi)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=ga;const Se=o.state.buffers.depth.getReversed();this.type===Nc?(B.map.depthTexture.compareFunction=Se?Hh:Bh,B.map.depthTexture.minFilter=Nn,B.map.depthTexture.magFilter=Nn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn)}B.camera.updateProjectionMatrix()}const Me=B.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(B.map),o.clear());const U=B.getViewport(Se);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),K.viewport(d)}if(N.isPointLight){const U=B.camera,ee=B.matrix,pe=N.distance||U.far;pe!==U.far&&(U.far=pe,U.updateProjectionMatrix()),Io.setFromMatrixPosition(N.matrixWorld),U.position.copy(Io),Od.copy(U.position),Od.add(FA[Se]),U.up.copy(zA[Se]),U.lookAt(Od),U.updateMatrixWorld(),ee.makeTranslation(-Io.x,-Io.y,-Io.z),D_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B._frustum.setFromProjectionMatrix(D_,U.coordinateSystem,U.reversedDepth)}else B.updateMatrices(N);s=B.getFrustum(),O(L,$,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===Bo&&F(B,$),B.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,k)};function F(H,L){const $=t.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Hi(l.x,l.y,{format:Dr,type:ma})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(L,null,$,S,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(L,null,$,E,C,null)}function P(H,L,$,R){let w=null;const k=$.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)w=k;else if(w=$.isPointLight===!0?m:h,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const K=w.uuid,Q=L.uuid;let le=p[K];le===void 0&&(le={},p[K]=le);let fe=le[Q];fe===void 0&&(fe=w.clone(),le[Q]=fe,L.addEventListener("dispose",z)),w=fe}if(w.visible=L.visible,w.wireframe=L.wireframe,R===Bo?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:v[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=o.properties.get(w);K.light=$}return w}function O(H,L,$,R,w){if(H.visible===!1)return;if(H.layers.test(L.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Bo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,H.matrixWorld);const Q=t.update(H),le=H.material;if(Array.isArray(le)){const fe=Q.groups;for(let N=0,B=fe.length;N<B;N++){const ie=fe[N],Me=le[ie.materialIndex];if(Me&&Me.visible){const Se=P(H,Me,R,w);H.onBeforeShadow(o,H,L,$,Q,Se,ie),o.renderBufferDirect($,null,Q,Se,H,ie),H.onAfterShadow(o,H,L,$,Q,Se,ie)}}}else if(le.visible){const fe=P(H,le,R,w);H.onBeforeShadow(o,H,L,$,Q,fe,null),o.renderBufferDirect($,null,Q,fe,H,null),H.onAfterShadow(o,H,L,$,Q,fe,null)}}const K=H.children;for(let Q=0,le=K.length;Q<le;Q++)O(K[Q],L,$,R,w)}function z(H){H.target.removeEventListener("dispose",z);for(const $ in p){const R=p[$],w=H.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const BA={[Id]:Bd,[Hd]:kd,[Gd]:Xd,[Cr]:Vd,[Bd]:Id,[kd]:Hd,[Xd]:Gd,[Vd]:Cr};function HA(o,t){function i(){let X=!1;const Oe=new an;let Ae=null;const Ie=new an(0,0,0,0);return{setMask:function(ye){Ae!==ye&&!X&&(o.colorMask(ye,ye,ye,ye),Ae=ye)},setLocked:function(ye){X=ye},setClear:function(ye,ve,we,nt,Ot){Ot===!0&&(ye*=nt,ve*=nt,we*=nt),Oe.set(ye,ve,we,nt),Ie.equals(Oe)===!1&&(o.clearColor(ye,ve,we,nt),Ie.copy(Oe))},reset:function(){X=!1,Ae=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,Oe=!1,Ae=null,Ie=null,ye=null;return{setReversed:function(ve){if(Oe!==ve){const we=t.get("EXT_clip_control");ve?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Oe=ve;const nt=ye;ye=null,this.setClear(nt)}},getReversed:function(){return Oe},setTest:function(ve){ve?ce(o.DEPTH_TEST):be(o.DEPTH_TEST)},setMask:function(ve){Ae!==ve&&!X&&(o.depthMask(ve),Ae=ve)},setFunc:function(ve){if(Oe&&(ve=BA[ve]),Ie!==ve){switch(ve){case Id:o.depthFunc(o.NEVER);break;case Bd:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case Cr:o.depthFunc(o.LEQUAL);break;case Gd:o.depthFunc(o.EQUAL);break;case Vd:o.depthFunc(o.GEQUAL);break;case kd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=ve}},setLocked:function(ve){X=ve},setClear:function(ve){ye!==ve&&(Oe&&(ve=1-ve),o.clearDepth(ve),ye=ve)},reset:function(){X=!1,Ae=null,Ie=null,ye=null,Oe=!1}}}function l(){let X=!1,Oe=null,Ae=null,Ie=null,ye=null,ve=null,we=null,nt=null,Ot=null;return{setTest:function(bt){X||(bt?ce(o.STENCIL_TEST):be(o.STENCIL_TEST))},setMask:function(bt){Oe!==bt&&!X&&(o.stencilMask(bt),Oe=bt)},setFunc:function(bt,Cn,gi){(Ae!==bt||Ie!==Cn||ye!==gi)&&(o.stencilFunc(bt,Cn,gi),Ae=bt,Ie=Cn,ye=gi)},setOp:function(bt,Cn,gi){(ve!==bt||we!==Cn||nt!==gi)&&(o.stencilOp(bt,Cn,gi),ve=bt,we=Cn,nt=gi)},setLocked:function(bt){X=bt},setClear:function(bt){Ot!==bt&&(o.clearStencil(bt),Ot=bt)},reset:function(){X=!1,Oe=null,Ae=null,Ie=null,ye=null,ve=null,we=null,nt=null,Ot=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,F=null,P=null,O=null,z=null,H=null,L=new Mt(0,0,0),$=0,R=!1,w=null,k=null,K=null,Q=null,le=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ie)[1]),N=B>=1):ie.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),N=B>=2);let Me=null,Se={};const U=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),pe=new an().fromArray(U),Re=new an().fromArray(ee);function Ce(X,Oe,Ae,Ie){const ye=new Uint8Array(4),ve=o.createTexture();o.bindTexture(X,ve),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let we=0;we<Ae;we++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Oe,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Oe+we,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return ve}const J={};J[o.TEXTURE_2D]=Ce(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ce(o.DEPTH_TEST),d.setFunc(Cr),at(!1),Xt(U0),ce(o.CULL_FACE),ut(ha);function ce(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function be(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Be(X,Oe){return v[X]!==Oe?(o.bindFramebuffer(X,Oe),v[X]=Oe,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Oe),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Le(X,Oe){let Ae=E,Ie=!1;if(X){Ae=S.get(Oe),Ae===void 0&&(Ae=[],S.set(Oe,Ae));const ye=X.textures;if(Ae.length!==ye.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,we=ye.length;ve<we;ve++)Ae[ve]=o.COLOR_ATTACHMENT0+ve;Ae.length=ye.length,Ie=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Ae)}function ot(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const qt={[Ts]:o.FUNC_ADD,[GS]:o.FUNC_SUBTRACT,[VS]:o.FUNC_REVERSE_SUBTRACT};qt[kS]=o.MIN,qt[XS]=o.MAX;const ct={[WS]:o.ZERO,[qS]:o.ONE,[YS]:o.SRC_COLOR,[Fd]:o.SRC_ALPHA,[$S]:o.SRC_ALPHA_SATURATE,[QS]:o.DST_COLOR,[ZS]:o.DST_ALPHA,[jS]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[JS]:o.ONE_MINUS_DST_COLOR,[KS]:o.ONE_MINUS_DST_ALPHA,[eM]:o.CONSTANT_COLOR,[tM]:o.ONE_MINUS_CONSTANT_COLOR,[nM]:o.CONSTANT_ALPHA,[iM]:o.ONE_MINUS_CONSTANT_ALPHA};function ut(X,Oe,Ae,Ie,ye,ve,we,nt,Ot,bt){if(X===ha){C===!0&&(be(o.BLEND),C=!1);return}if(C===!1&&(ce(o.BLEND),C=!0),X!==HS){if(X!==M||bt!==R){if((x!==Ts||O!==Ts)&&(o.blendEquation(o.FUNC_ADD),x=Ts,O=Ts),bt)switch(X){case Ar:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pd:o.blendFunc(o.ONE,o.ONE);break;case N0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case L0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case Ar:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case N0:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L0:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}F=null,P=null,z=null,H=null,L.set(0,0,0),$=0,M=X,R=bt}return}ye=ye||Oe,ve=ve||Ae,we=we||Ie,(Oe!==x||ye!==O)&&(o.blendEquationSeparate(qt[Oe],qt[ye]),x=Oe,O=ye),(Ae!==F||Ie!==P||ve!==z||we!==H)&&(o.blendFuncSeparate(ct[Ae],ct[Ie],ct[ve],ct[we]),F=Ae,P=Ie,z=ve,H=we),(nt.equals(L)===!1||Ot!==$)&&(o.blendColor(nt.r,nt.g,nt.b,Ot),L.copy(nt),$=Ot),M=X,R=!1}function Et(X,Oe){X.side===fa?be(o.CULL_FACE):ce(o.CULL_FACE);let Ae=X.side===Xn;Oe&&(Ae=!Ae),at(Ae),X.blending===Ar&&X.transparent===!1?ut(ha):ut(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ie=X.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):be(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Xt(X){X!==zS?(ce(o.CULL_FACE),X!==k&&(X===U0?o.cullFace(o.BACK):X===IS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):be(o.CULL_FACE),k=X}function G(X){X!==K&&(N&&o.lineWidth(X),K=X)}function Zt(X,Oe,Ae){X?(ce(o.POLYGON_OFFSET_FILL),(Q!==Oe||le!==Ae)&&(o.polygonOffset(Oe,Ae),Q=Oe,le=Ae)):be(o.POLYGON_OFFSET_FILL)}function yt(X){X?ce(o.SCISSOR_TEST):be(o.SCISSOR_TEST)}function Nt(X){X===void 0&&(X=o.TEXTURE0+fe-1),Me!==X&&(o.activeTexture(X),Me=X)}function Ye(X,Oe,Ae){Ae===void 0&&(Me===null?Ae=o.TEXTURE0+fe-1:Ae=Me);let Ie=Se[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Ae]=Ie),(Ie.type!==X||Ie.texture!==Oe)&&(Me!==Ae&&(o.activeTexture(Ae),Me=Ae),o.bindTexture(X,Oe||J[X]),Ie.type=X,Ie.texture=Oe)}function D(){const X=Se[Me];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function me(){try{o.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function xe(){try{o.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function De(){try{o.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Xe(){try{o.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function tt(){try{o.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ee(){try{o.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Te(X){pe.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),pe.copy(X))}function He(X){Re.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function ze(X,Oe){let Ae=p.get(Oe);Ae===void 0&&(Ae=new WeakMap,p.set(Oe,Ae));let Ie=Ae.get(X);Ie===void 0&&(Ie=o.getUniformBlockIndex(Oe,X.name),Ae.set(X,Ie))}function Ue(X,Oe){const Ie=p.get(Oe).get(X);m.get(Oe)!==Ie&&(o.uniformBlockBinding(Oe,Ie,X.__bindingPointIndex),m.set(Oe,Ie))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Me=null,Se={},v={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,F=null,P=null,O=null,z=null,H=null,L=new Mt(0,0,0),$=0,R=!1,w=null,k=null,K=null,Q=null,le=null,pe.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ce,disable:be,bindFramebuffer:Be,drawBuffers:Le,useProgram:ot,setBlending:ut,setMaterial:Et,setFlipSided:at,setCullFace:Xt,setLineWidth:G,setPolygonOffset:Zt,setScissorTest:yt,activeTexture:Nt,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:tt,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:Xe,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ze,scissor:Te,viewport:He,reset:ft}}function GA(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,_=new WeakMap;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,y){return E?new OffscreenCanvas(D,y):Hc("canvas")}function C(D,y,q){let me=1;const xe=Ye(D);if((xe.width>q||xe.height>q)&&(me=q/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(me*xe.width),Ze=Math.floor(me*xe.height);v===void 0&&(v=A(de,Ze));const De=y?A(de,Ze):v;return De.width=de,De.height=Ze,De.getContext("2d").drawImage(D,0,0,de,Ze),it("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ze+")."),De}else return"data"in D&&it("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,y,q,me,xe=!1){if(D!==null){if(o[D]!==void 0)return o[D];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=y;if(y===o.RED&&(q===o.FLOAT&&(de=o.R32F),q===o.HALF_FLOAT&&(de=o.R16F),q===o.UNSIGNED_BYTE&&(de=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.R8UI),q===o.UNSIGNED_SHORT&&(de=o.R16UI),q===o.UNSIGNED_INT&&(de=o.R32UI),q===o.BYTE&&(de=o.R8I),q===o.SHORT&&(de=o.R16I),q===o.INT&&(de=o.R32I)),y===o.RG&&(q===o.FLOAT&&(de=o.RG32F),q===o.HALF_FLOAT&&(de=o.RG16F),q===o.UNSIGNED_BYTE&&(de=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.RG8UI),q===o.UNSIGNED_SHORT&&(de=o.RG16UI),q===o.UNSIGNED_INT&&(de=o.RG32UI),q===o.BYTE&&(de=o.RG8I),q===o.SHORT&&(de=o.RG16I),q===o.INT&&(de=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.RGB8UI),q===o.UNSIGNED_SHORT&&(de=o.RGB16UI),q===o.UNSIGNED_INT&&(de=o.RGB32UI),q===o.BYTE&&(de=o.RGB8I),q===o.SHORT&&(de=o.RGB16I),q===o.INT&&(de=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),q===o.UNSIGNED_INT&&(de=o.RGBA32UI),q===o.BYTE&&(de=o.RGBA8I),q===o.SHORT&&(de=o.RGBA16I),q===o.INT&&(de=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),y===o.RGBA){const Ze=xe?Ic:Tt.getTransfer(me);q===o.FLOAT&&(de=o.RGBA32F),q===o.HALF_FLOAT&&(de=o.RGBA16F),q===o.UNSIGNED_BYTE&&(de=Ze===It?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function O(D,y){let q;return D?y===null||y===Gi||y===Vo?q=o.DEPTH24_STENCIL8:y===zi?q=o.DEPTH32F_STENCIL8:y===Go&&(q=o.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===Vo?q=o.DEPTH_COMPONENT24:y===zi?q=o.DEPTH_COMPONENT32F:y===Go&&(q=o.DEPTH_COMPONENT16),q}function z(D,y){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Nn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function H(D){const y=D.target;y.removeEventListener("dispose",H),$(y),y.isVideoTexture&&_.delete(y)}function L(D){const y=D.target;y.removeEventListener("dispose",L),w(y)}function $(D){const y=s.get(D);if(y.__webglInit===void 0)return;const q=D.source,me=S.get(q);if(me){const xe=me[y.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(D),Object.keys(me).length===0&&S.delete(q)}s.remove(D)}function R(D){const y=s.get(D);o.deleteTexture(y.__webglTexture);const q=D.source,me=S.get(q);delete me[y.__cacheKey],d.memory.textures--}function w(D){const y=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(y.__webglFramebuffer[me]))for(let xe=0;xe<y.__webglFramebuffer[me].length;xe++)o.deleteFramebuffer(y.__webglFramebuffer[me][xe]);else o.deleteFramebuffer(y.__webglFramebuffer[me]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[me])}else{if(Array.isArray(y.__webglFramebuffer))for(let me=0;me<y.__webglFramebuffer.length;me++)o.deleteFramebuffer(y.__webglFramebuffer[me]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let me=0;me<y.__webglColorRenderbuffer.length;me++)y.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[me]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=D.textures;for(let me=0,xe=q.length;me<xe;me++){const de=s.get(q[me]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),d.memory.textures--),s.remove(q[me])}s.remove(D)}let k=0;function K(){k=0}function Q(){const D=k;return D>=l.maxTextures&&it("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function le(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function fe(D,y){const q=s.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const me=D.image;if(me===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,D,y);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function N(D,y){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){J(q,D,y);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function B(D,y){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){J(q,D,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function ie(D,y){const q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){ce(q,D,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const Me={[Yd]:o.REPEAT,[da]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},Se={[Rn]:o.NEAREST,[rM]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[id]:o.LINEAR_MIPMAP_NEAREST,[Rs]:o.LINEAR_MIPMAP_LINEAR},U={[uM]:o.NEVER,[mM]:o.ALWAYS,[fM]:o.LESS,[Bh]:o.LEQUAL,[dM]:o.EQUAL,[Hh]:o.GEQUAL,[hM]:o.GREATER,[pM]:o.NOTEQUAL};function ee(D,y){if(y.type===zi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Nn||y.magFilter===id||y.magFilter===oc||y.magFilter===Rs||y.minFilter===Nn||y.minFilter===id||y.minFilter===oc||y.minFilter===Rs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[y.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[y.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[y.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Se[y.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rn||y.minFilter!==oc&&y.minFilter!==Rs||y.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function pe(D,y){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",H));const me=y.source;let xe=S.get(me);xe===void 0&&(xe={},S.set(me,xe));const de=le(y);if(de!==D.__cacheKey){xe[de]===void 0&&(xe[de]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xe[de].usedTimes++;const Ze=xe[D.__cacheKey];Ze!==void 0&&(xe[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&R(y)),D.__cacheKey=de,D.__webglTexture=xe[de].texture}return q}function Re(D,y,q){return Math.floor(Math.floor(D/q)/y)}function Ce(D,y,q,me){const de=D.updateRanges;if(de.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,me,y.data);else{de.sort((Ee,Te)=>Ee.start-Te.start);let Ze=0;for(let Ee=1;Ee<de.length;Ee++){const Te=de[Ze],He=de[Ee],ze=Te.start+Te.count,Ue=Re(He.start,y.width,4),ft=Re(Te.start,y.width,4);He.start<=ze+1&&Ue===ft&&Re(He.start+He.count-1,y.width,4)===Ue?Te.count=Math.max(Te.count,He.start+He.count-Te.start):(++Ze,de[Ze]=He)}de.length=Ze+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Ee=0,Te=de.length;Ee<Te;Ee++){const He=de[Ee],ze=Math.floor(He.start/4),Ue=Math.ceil(He.count/4),ft=ze%y.width,X=Math.floor(ze/y.width),Oe=Ue,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ft,X,Oe,Ae,q,me,y.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function J(D,y,q){let me=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(me=o.TEXTURE_3D);const xe=pe(D,y),de=y.source;i.bindTexture(me,D.__webglTexture,o.TEXTURE0+q);const Ze=s.get(de);if(de.version!==Ze.__version||xe===!0){i.activeTexture(o.TEXTURE0+q);const De=Tt.getPrimaries(Tt.workingColorSpace),Xe=y.colorSpace===Qa?null:Tt.getPrimaries(y.colorSpace),tt=y.colorSpace===Qa||De===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ee=C(y.image,!1,l.maxTextureSize);Ee=Nt(y,Ee);const Te=u.convert(y.format,y.colorSpace),He=u.convert(y.type);let ze=P(y.internalFormat,Te,He,y.colorSpace,y.isVideoTexture);ee(me,y);let Ue;const ft=y.mipmaps,X=y.isVideoTexture!==!0,Oe=Ze.__version===void 0||xe===!0,Ae=de.dataReady,Ie=z(y,Ee);if(y.isDepthTexture)ze=O(y.format===Cs,y.type),Oe&&(X?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Te,He,null));else if(y.isDataTexture)if(ft.length>0){X&&Oe&&i.texStorage2D(o.TEXTURE_2D,Ie,ze,ft[0].width,ft[0].height);for(let ye=0,ve=ft.length;ye<ve;ye++)Ue=ft[ye],X?Ae&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,Te,He,Ue.data):i.texImage2D(o.TEXTURE_2D,ye,ze,Ue.width,Ue.height,0,Te,He,Ue.data);y.generateMipmaps=!1}else X?(Oe&&i.texStorage2D(o.TEXTURE_2D,Ie,ze,Ee.width,Ee.height),Ae&&Ce(y,Ee,Te,He)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Te,He,Ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){X&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ze,ft[0].width,ft[0].height,Ee.depth);for(let ye=0,ve=ft.length;ye<ve;ye++)if(Ue=ft[ye],y.format!==Ri)if(Te!==null)if(X){if(Ae)if(y.layerUpdates.size>0){const we=o_(Ue.width,Ue.height,y.format,y.type);for(const nt of y.layerUpdates){const Ot=Ue.data.subarray(nt*we/Ue.data.BYTES_PER_ELEMENT,(nt+1)*we/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,nt,Ue.width,Ue.height,1,Te,Ot)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,ze,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,Ee.depth,Te,He,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,ze,Ue.width,Ue.height,Ee.depth,0,Te,He,Ue.data)}else{X&&Oe&&i.texStorage2D(o.TEXTURE_2D,Ie,ze,ft[0].width,ft[0].height);for(let ye=0,ve=ft.length;ye<ve;ye++)Ue=ft[ye],y.format!==Ri?Te!==null?X?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,Te,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,ze,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ae&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,Te,He,Ue.data):i.texImage2D(o.TEXTURE_2D,ye,ze,Ue.width,Ue.height,0,Te,He,Ue.data)}else if(y.isDataArrayTexture)if(X){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ze,Ee.width,Ee.height,Ee.depth),Ae)if(y.layerUpdates.size>0){const ye=o_(Ee.width,Ee.height,y.format,y.type);for(const ve of y.layerUpdates){const we=Ee.data.subarray(ve*ye/Ee.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,Te,He,we)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,He,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Te,He,Ee.data);else if(y.isData3DTexture)X?(Oe&&i.texStorage3D(o.TEXTURE_3D,Ie,ze,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,He,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Te,He,Ee.data);else if(y.isFramebufferTexture){if(Oe)if(X)i.texStorage2D(o.TEXTURE_2D,Ie,ze,Ee.width,Ee.height);else{let ye=Ee.width,ve=Ee.height;for(let we=0;we<Ie;we++)i.texImage2D(o.TEXTURE_2D,we,ze,ye,ve,0,Te,He,null),ye>>=1,ve>>=1}}else if(ft.length>0){if(X&&Oe){const ye=Ye(ft[0]);i.texStorage2D(o.TEXTURE_2D,Ie,ze,ye.width,ye.height)}for(let ye=0,ve=ft.length;ye<ve;ye++)Ue=ft[ye],X?Ae&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Te,He,Ue):i.texImage2D(o.TEXTURE_2D,ye,ze,Te,He,Ue);y.generateMipmaps=!1}else if(X){if(Oe){const ye=Ye(Ee);i.texStorage2D(o.TEXTURE_2D,Ie,ze,ye.width,ye.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,He,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,Te,He,Ee);M(y)&&x(me),Ze.__version=de.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ce(D,y,q){if(y.image.length!==6)return;const me=pe(D,y),xe=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+q);const de=s.get(xe);if(xe.version!==de.__version||me===!0){i.activeTexture(o.TEXTURE0+q);const Ze=Tt.getPrimaries(Tt.workingColorSpace),De=y.colorSpace===Qa?null:Tt.getPrimaries(y.colorSpace),Xe=y.colorSpace===Qa||Ze===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const tt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ee=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!tt&&!Ee?Te[ve]=C(y.image[ve],!0,l.maxCubemapSize):Te[ve]=Ee?y.image[ve].image:y.image[ve],Te[ve]=Nt(y,Te[ve]);const He=Te[0],ze=u.convert(y.format,y.colorSpace),Ue=u.convert(y.type),ft=P(y.internalFormat,ze,Ue,y.colorSpace),X=y.isVideoTexture!==!0,Oe=de.__version===void 0||me===!0,Ae=xe.dataReady;let Ie=z(y,He);ee(o.TEXTURE_CUBE_MAP,y);let ye;if(tt){X&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ft,He.width,He.height);for(let ve=0;ve<6;ve++){ye=Te[ve].mipmaps;for(let we=0;we<ye.length;we++){const nt=ye[we];y.format!==Ri?ze!==null?X?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,0,0,nt.width,nt.height,ze,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,ft,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,0,0,nt.width,nt.height,ze,Ue,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we,ft,nt.width,nt.height,0,ze,Ue,nt.data)}}}else{if(ye=y.mipmaps,X&&Oe){ye.length>0&&Ie++;const ve=Ye(Te[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ft,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,ze,Ue,Te[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Te[ve].width,Te[ve].height,0,ze,Ue,Te[ve].data);for(let we=0;we<ye.length;we++){const Ot=ye[we].image[ve].image;X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,0,0,Ot.width,Ot.height,ze,Ue,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,ft,Ot.width,Ot.height,0,ze,Ue,Ot.data)}}else{X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ze,Ue,Te[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,ze,Ue,Te[ve]);for(let we=0;we<ye.length;we++){const nt=ye[we];X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,0,0,ze,Ue,nt.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we+1,ft,ze,Ue,nt.image[ve])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),de.__version=xe.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function be(D,y,q,me,xe,de){const Ze=u.convert(q.format,q.colorSpace),De=u.convert(q.type),Xe=P(q.internalFormat,Ze,De,q.colorSpace),tt=s.get(y),Ee=s.get(q);if(Ee.__renderTarget=y,!tt.__hasExternalTextures){const Te=Math.max(1,y.width>>de),He=Math.max(1,y.height>>de);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,de,Xe,Te,He,y.depth,0,Ze,De,null):i.texImage2D(xe,de,Xe,Te,He,0,Ze,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Zt(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,xe,Ee.__webglTexture,0,G(y)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,xe,Ee.__webglTexture,de),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(D,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),y.depthBuffer){const me=y.depthTexture,xe=me&&me.isDepthTexture?me.type:null,de=O(y.stencilBuffer,xe),Ze=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Zt(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),de,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),de,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,de,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,D)}else{const me=y.textures;for(let xe=0;xe<me.length;xe++){const de=me[xe],Ze=u.convert(de.format,de.colorSpace),De=u.convert(de.type),Xe=P(de.internalFormat,Ze,De,de.colorSpace);Zt(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Xe,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Xe,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Le(D,y,q){const me=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(y.depthTexture);if(xe.__renderTarget=y,(!xe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),me){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,y.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),ee(o.TEXTURE_CUBE_MAP,y.depthTexture);const tt=u.convert(y.depthTexture.format),Ee=u.convert(y.depthTexture.type);let Te;y.depthTexture.format===ga?Te=o.DEPTH_COMPONENT24:y.depthTexture.format===Cs&&(Te=o.DEPTH24_STENCIL8);for(let He=0;He<6;He++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Te,y.width,y.height,0,tt,Ee,null)}}else fe(y.depthTexture,0);const de=xe.__webglTexture,Ze=G(y),De=me?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xe=y.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ga)Zt(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,De,de,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,De,de,0);else if(y.depthTexture.format===Cs)Zt(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,De,de,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,De,de,0);else throw new Error("Unknown depthTexture format")}function ot(D){const y=s.get(D),q=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),me){const xe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),y.__depthDisposeCallback=xe}y.__boundDepthTexture=me}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)Le(y.__webglFramebuffer[me],D,me);else{const me=D.texture.mipmaps;me&&me.length>0?Le(y.__webglFramebuffer[0],D,0):Le(y.__webglFramebuffer,D,0)}else if(q){y.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[me]),y.__webglDepthbuffer[me]===void 0)y.__webglDepthbuffer[me]=o.createRenderbuffer(),Be(y.__webglDepthbuffer[me],D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,de)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Be(y.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,de)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(D,y,q){const me=s.get(D);y!==void 0&&be(me.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ot(D)}function ct(D){const y=D.texture,q=s.get(D),me=s.get(y);D.addEventListener("dispose",L);const xe=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=y.version,d.memory.textures++),de){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let Xe=0;Xe<y.mipmaps.length;Xe++)q.__webglFramebuffer[De][Xe]=o.createFramebuffer()}else q.__webglFramebuffer[De]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<y.mipmaps.length;De++)q.__webglFramebuffer[De]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let De=0,Xe=xe.length;De<Xe;De++){const tt=s.get(xe[De]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Zt(D)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let De=0;De<xe.length;De++){const Xe=xe[De];q.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[De]);const tt=u.convert(Xe.format,Xe.colorSpace),Ee=u.convert(Xe.type),Te=P(Xe.internalFormat,tt,Ee,Xe.colorSpace,D.isXRRenderTarget===!0),He=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,He,Te,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,q.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Be(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),ee(o.TEXTURE_CUBE_MAP,y);for(let De=0;De<6;De++)if(y.mipmaps&&y.mipmaps.length>0)for(let Xe=0;Xe<y.mipmaps.length;Xe++)be(q.__webglFramebuffer[De][Xe],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Xe);else be(q.__webglFramebuffer[De],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let De=0,Xe=xe.length;De<Xe;De++){const tt=xe[De],Ee=s.get(tt);let Te=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ee.__webglTexture),ee(Te,tt),be(q.__webglFramebuffer,D,tt,o.COLOR_ATTACHMENT0+De,Te,0),M(tt)&&x(Te)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,me.__webglTexture),ee(De,y),y.mipmaps&&y.mipmaps.length>0)for(let Xe=0;Xe<y.mipmaps.length;Xe++)be(q.__webglFramebuffer[Xe],D,y,o.COLOR_ATTACHMENT0,De,Xe);else be(q.__webglFramebuffer,D,y,o.COLOR_ATTACHMENT0,De,0);M(y)&&x(De),i.unbindTexture()}D.depthBuffer&&ot(D)}function ut(D){const y=D.textures;for(let q=0,me=y.length;q<me;q++){const xe=y[q];if(M(xe)){const de=F(D),Ze=s.get(xe).__webglTexture;i.bindTexture(de,Ze),x(de),i.unbindTexture()}}}const Et=[],at=[];function Xt(D){if(D.samples>0){if(Zt(D)===!1){const y=D.textures,q=D.width,me=D.height;let xe=o.COLOR_BUFFER_BIT;const de=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=s.get(D),De=y.length>1;if(De)for(let tt=0;tt<y.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<y.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const Ee=s.get(y[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,q,me,0,0,q,me,xe,o.NEAREST),m===!0&&(Et.length=0,at.length=0,Et.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Et.push(de),at.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,at)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let tt=0;tt<y.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const Ee=s.get(y[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const y=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Zt(D){const y=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function yt(D){const y=d.render.frame;_.get(D)!==y&&(_.set(D,y),D.update())}function Nt(D,y){const q=D.colorSpace,me=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ur&&q!==Qa&&(Tt.getTransfer(q)===It?(me!==Ri||xe!==mi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",q)),y}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=ie,this.rebindTextures=qt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function VA(o,t){function i(s,l=Qa){let u;const d=Tt.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Oh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ph)return o.UNSIGNED_SHORT_5_5_5_1;if(s===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===k_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===H_)return o.BYTE;if(s===G_)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===Lh)return o.INT;if(s===Gi)return o.UNSIGNED_INT;if(s===zi)return o.FLOAT;if(s===ma)return o.HALF_FLOAT;if(s===X_)return o.ALPHA;if(s===W_)return o.RGB;if(s===Ri)return o.RGBA;if(s===ga)return o.DEPTH_COMPONENT;if(s===Cs)return o.DEPTH_STENCIL;if(s===q_)return o.RED;if(s===Fh)return o.RED_INTEGER;if(s===Dr)return o.RG;if(s===zh)return o.RG_INTEGER;if(s===Ih)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===Fc)if(d===It)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Zd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$d||s===eh||s===th||s===nh||s===ih||s===ah||s===sh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===$d||s===eh)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===th)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===nh)return u.COMPRESSED_R11_EAC;if(s===ih)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ah)return u.COMPRESSED_RG11_EAC;if(s===sh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===rh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ch)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ph)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_h)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sh||s===Mh||s===yh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Sh)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Eh||s===bh||s===Th||s===Ah)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Eh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===bh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Th)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ah)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new wi({vertexShader:kA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new va(new Xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qA extends Lr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,v=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",M=new WA,x={},F=i.getContextAttributes();let P=null,O=null;const z=[],H=[],L=new Bt;let $=null;const R=new pi;R.viewport=new an;const w=new pi;w.viewport=new an;const k=[R,w],K=new ty;let Q=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=z[J];return ce===void 0&&(ce=new Ad,z[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=z[J];return ce===void 0&&(ce=new Ad,z[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=z[J];return ce===void 0&&(ce=new Ad,z[J]=ce),ce.getHandSpace()};function fe(J){const ce=H.indexOf(J.inputSource);if(ce===-1)return;const be=z[ce];be!==void 0&&(be.update(J.inputSource,J.frame,p||d),be.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",B);for(let J=0;J<z.length;J++){const ce=H[J];ce!==null&&(H[J]=null,z[J].disconnect(ce))}Q=null,le=null,M.reset();for(const J in x)delete x[J];t.setRenderTarget(P),E=null,S=null,v=null,l=null,O=null,Ce.stop(),s.isPresenting=!1,t.setPixelRatio($),t.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",N),l.addEventListener("inputsourceschange",B),F.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(L),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,Le=null;F.depth&&(Le=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=F.stencil?Cs:ga,Be=F.stencil?Vo:Gi);const ot={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(ot),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Hi(S.textureWidth,S.textureHeight,{format:Ri,type:mi,depthTexture:new Xo(S.textureWidth,S.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const be={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Hi(E.framebufferWidth,E.framebufferHeight,{format:Ri,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(J){for(let ce=0;ce<J.removed.length;ce++){const be=J.removed[ce],Be=H.indexOf(be);Be>=0&&(H[Be]=null,z[Be].disconnect(be))}for(let ce=0;ce<J.added.length;ce++){const be=J.added[ce];let Be=H.indexOf(be);if(Be===-1){for(let ot=0;ot<z.length;ot++)if(ot>=H.length){H.push(be),Be=ot;break}else if(H[ot]===null){H[ot]=be,Be=ot;break}if(Be===-1)break}const Le=z[Be];Le&&Le.connect(be)}}const ie=new re,Me=new re;function Se(J,ce,be){ie.setFromMatrixPosition(ce.matrixWorld),Me.setFromMatrixPosition(be.matrixWorld);const Be=ie.distanceTo(Me),Le=ce.projectionMatrix.elements,ot=be.projectionMatrix.elements,qt=Le[14]/(Le[10]-1),ct=Le[14]/(Le[10]+1),ut=(Le[9]+1)/Le[5],Et=(Le[9]-1)/Le[5],at=(Le[8]-1)/Le[0],Xt=(ot[8]+1)/ot[0],G=qt*at,Zt=qt*Xt,yt=Be/(-at+Xt),Nt=yt*-at;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(yt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ye=qt+yt,D=ct+yt,y=G-Nt,q=Zt+(Be-Nt),me=ut*ct/D*Ye,xe=Et*ct/D*Ye;J.projectionMatrix.makePerspective(y,q,me,xe,Ye,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ce=J.near,be=J.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(be=M.depthFar)),K.near=w.near=R.near=ce,K.far=w.far=R.far=be,(Q!==K.near||le!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,le=K.far),K.layers.mask=J.layers.mask|6,R.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;const Be=J.parent,Le=K.cameras;U(K,Be);for(let ot=0;ot<Le.length;ot++)U(Le[ot],Be);Le.length===2?Se(K,R,w):K.projectionMatrix.copy(R.projectionMatrix),ee(J,K,Be)};function ee(J,ce,be){be===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(J){return x[J]};let pe=null;function Re(J,ce){if(_=ce.getViewerPose(p||d),A=ce,_!==null){const be=_.views;E!==null&&(t.setRenderTargetFramebuffer(O,E.framebuffer),t.setRenderTarget(O));let Be=!1;be.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let ct=0;ct<be.length;ct++){const ut=be[ct];let Et=null;if(E!==null)Et=E.getViewport(ut);else{const Xt=v.getViewSubImage(S,ut);Et=Xt.viewport,ct===0&&(t.setRenderTargetTextures(O,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(O))}let at=k[ct];at===void 0&&(at=new pi,at.layers.enable(ct),at.viewport=new an,k[ct]=at),at.matrix.fromArray(ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Et.x,Et.y,Et.width,Et.height),ct===0&&(K.matrix.copy(at.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(at)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const ct=v.getDepthInformation(be[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,l.renderState)}if(Le&&Le.includes("camera-access")&&C){t.state.unbindTexture(),v=s.getBinding();for(let ct=0;ct<be.length;ct++){const ut=be[ct].camera;if(ut){let Et=x[ut];Et||(Et=new rv,x[ut]=Et);const at=v.getCameraImage(ut);Et.sourceTexture=at}}}}for(let be=0;be<z.length;be++){const Be=H[be],Le=z[be];Be!==null&&Le!==void 0&&Le.update(Be,ce,p||d)}pe&&pe(J,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),A=null}const Ce=new lv;Ce.setAnimationLoop(Re),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}}const Es=new _a,YA=new en;function jA(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,ev(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,P,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),v(M,x)):x.isMeshPhongMaterial?(u(M,x),_(M,x)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,O)):x.isMeshMatcapMaterial?(u(M,x),A(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,F,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=t.get(x),P=F.envMap,O=F.envMapRotation;P&&(M.envMap.value=P,Es.copy(O),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),M.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Es)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,F,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const F=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ZA(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,P){const O=P.program;s.uniformBlockBinding(F,O)}function p(F,P){let O=l[F.id];O===void 0&&(A(F),O=_(F),l[F.id]=O,F.addEventListener("dispose",M));const z=P.program;s.updateUBOMapping(F,z);const H=t.render.frame;u[F.id]!==H&&(S(F),u[F.id]=H)}function _(F){const P=v();F.__bindingPointIndex=P;const O=o.createBuffer(),z=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,O),O}function v(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const P=l[F.id],O=F.uniforms,z=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,L=O.length;H<L;H++){const $=Array.isArray(O[H])?O[H]:[O[H]];for(let R=0,w=$.length;R<w;R++){const k=$[R];if(E(k,H,R,z)===!0){const K=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let fe=0;fe<Q.length;fe++){const N=Q[fe],B=C(N);typeof N=="number"||typeof N=="boolean"?(k.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,K+le,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=0,k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=0,k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=0):(N.toArray(k.__data,le),le+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,P,O,z){const H=F.value,L=P+"_"+O;if(z[L]===void 0)return typeof H=="number"||typeof H=="boolean"?z[L]=H:z[L]=H.clone(),!0;{const $=z[L];if(typeof H=="number"||typeof H=="boolean"){if($!==H)return z[L]=H,!0}else if($.equals(H)===!1)return $.copy(H),!0}return!1}function A(F){const P=F.uniforms;let O=0;const z=16;for(let L=0,$=P.length;L<$;L++){const R=Array.isArray(P[L])?P[L]:[P[L]];for(let w=0,k=R.length;w<k;w++){const K=R[w],Q=Array.isArray(K.value)?K.value:[K.value];for(let le=0,fe=Q.length;le<fe;le++){const N=Q[le],B=C(N),ie=O%z,Me=ie%B.boundary,Se=ie+Me;O+=Me,Se!==0&&z-Se<B.storage&&(O+=z-Se),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=O,O+=B.storage}}}const H=O%z;return H>0&&(O+=z-H),F.__size=O,F.__cache={},this}function C(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",F),P}function M(F){const P=F.target;P.removeEventListener("dispose",M);const O=d.indexOf(P.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const KA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function QA(){return Pi===null&&(Pi=new kM(KA,16,16,Dr,ma),Pi.name="DFG_LUT",Pi.minFilter=Nn,Pi.magFilter=Nn,Pi.wrapS=da,Pi.wrapT=da,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class JA{constructor(t={}){const{canvas:i=gM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:E=mi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const C=E,M=new Set([Ih,zh,Fh]),x=new Set([mi,Gi,Go,Vo,Oh,Ph]),F=new Uint32Array(4),P=new Int32Array(4);let O=null,z=null;const H=[],L=[];let $=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=hi;let k=0,K=0,Q=null,le=-1,fe=null;const N=new an,B=new an;let ie=null;const Me=new Mt(0);let Se=0,U=i.width,ee=i.height,pe=1,Re=null,Ce=null;const J=new an(0,0,U,ee),ce=new an(0,0,U,ee);let be=!1;const Be=new av;let Le=!1,ot=!1;const qt=new en,ct=new re,ut=new an,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Xt(){return Q===null?pe:1}let G=s;function Zt(T,Y){return i.getContext(T,Y)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const Y="webgl2";if(G=Zt(Y,T),G===null)throw Zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ct("WebGLRenderer: "+T.message),T}let yt,Nt,Ye,D,y,q,me,xe,de,Ze,De,Xe,tt,Ee,Te,He,ze,Ue,ft,X,Oe,Ae,Ie,ye;function ve(){yt=new Qb(G),yt.init(),Ae=new VA(G,yt),Nt=new Vb(G,yt,t,Ae),Ye=new HA(G,yt),Nt.reversedDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),D=new eT(G),y=new TA,q=new GA(G,yt,Ye,y,Nt,Ae,D),me=new Xb(R),xe=new Kb(R),de=new ay(G),Ie=new Hb(G,de),Ze=new Jb(G,de,D,Ie),De=new nT(G,Ze,de,D),ft=new tT(G,Nt,q),He=new kb(y),Xe=new bA(R,me,xe,yt,Nt,Ie,He),tt=new jA(R,y),Ee=new RA,Te=new LA(yt),Ue=new Bb(R,me,xe,Ye,De,A,m),ze=new IA(R,De,Nt),ye=new ZA(G,D,Nt,Ye),X=new Gb(G,yt,D),Oe=new $b(G,yt,D),D.programs=Xe.programs,R.capabilities=Nt,R.extensions=yt,R.properties=y,R.renderLists=Ee,R.shadowMap=ze,R.state=Ye,R.info=D}ve(),C!==mi&&($=new aT(C,i.width,i.height,l,u));const we=new qA(R,G);this.xr=we,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(U,ee,!1))},this.getSize=function(T){return T.set(U,ee)},this.setSize=function(T,Y,oe=!0){if(we.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,ee=Y,i.width=Math.floor(T*pe),i.height=Math.floor(Y*pe),oe===!0&&(i.style.width=T+"px",i.style.height=Y+"px"),$!==null&&$.setSize(i.width,i.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(U*pe,ee*pe).floor()},this.setDrawingBufferSize=function(T,Y,oe){U=T,ee=Y,pe=oe,i.width=Math.floor(T*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,Y,oe,ae){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,Y,oe,ae),Ye.viewport(N.copy(J).multiplyScalar(pe).round())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,Y,oe,ae){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,Y,oe,ae),Ye.scissor(B.copy(ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){Ye.setScissorTest(be=T)},this.setOpaqueSort=function(T){Re=T},this.setTransparentSort=function(T){Ce=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,oe=!0){let ae=0;if(T){let Z=!1;if(Q!==null){const Ne=Q.texture.format;Z=M.has(Ne)}if(Z){const Ne=Q.texture.type,Ge=x.has(Ne),Pe=Ue.getClearColor(),Ve=Ue.getClearAlpha(),We=Pe.r,Je=Pe.g,qe=Pe.b;Ge?(F[0]=We,F[1]=Je,F[2]=qe,F[3]=Ve,G.clearBufferuiv(G.COLOR,0,F)):(P[0]=We,P[1]=Je,P[2]=qe,P[3]=Ve,G.clearBufferiv(G.COLOR,0,P))}else ae|=G.COLOR_BUFFER_BIT}Y&&(ae|=G.DEPTH_BUFFER_BIT),oe&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Ue.dispose(),Ee.dispose(),Te.dispose(),y.dispose(),me.dispose(),xe.dispose(),De.dispose(),Ie.dispose(),ye.dispose(),Xe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Us),we.removeEventListener("sessionend",Ir),Di.stop()};function nt(T){T.preventDefault(),I0("WebGLRenderer: Context Lost."),w=!0}function Ot(){I0("WebGLRenderer: Context Restored."),w=!1;const T=D.autoReset,Y=ze.enabled,oe=ze.autoUpdate,ae=ze.needsUpdate,Z=ze.type;ve(),D.autoReset=T,ze.enabled=Y,ze.autoUpdate=oe,ze.needsUpdate=ae,ze.type=Z}function bt(T){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Cn(T){const Y=T.target;Y.removeEventListener("dispose",Cn),gi(Y)}function gi(T){Ko(T),y.remove(T)}function Ko(T){const Y=y.get(T).programs;Y!==void 0&&(Y.forEach(function(oe){Xe.releaseProgram(oe)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,oe,ae,Z,Ne){Y===null&&(Y=Et);const Ge=Z.isMesh&&Z.matrixWorld.determinant()<0,Pe=es(T,Y,oe,ae,Z);Ye.setMaterial(ae,Ge);let Ve=oe.index,We=1;if(ae.wireframe===!0){if(Ve=Ze.getWireframeAttribute(oe),Ve===void 0)return;We=2}const Je=oe.drawRange,qe=oe.attributes.position;let $e=Je.start*We,wt=(Je.start+Je.count)*We;Ne!==null&&($e=Math.max($e,Ne.start*We),wt=Math.min(wt,(Ne.start+Ne.count)*We)),Ve!==null?($e=Math.max($e,0),wt=Math.min(wt,Ve.count)):qe!=null&&($e=Math.max($e,0),wt=Math.min(wt,qe.count));const Kt=wt-$e;if(Kt<0||Kt===1/0)return;Ie.setup(Z,ae,Pe,oe,Ve);let Wt,Lt=X;if(Ve!==null&&(Wt=de.get(Ve),Lt=Oe,Lt.setIndex(Wt)),Z.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*Xt()),Lt.setMode(G.LINES)):Lt.setMode(G.TRIANGLES);else if(Z.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),Ye.setLineWidth(Ke*Xt()),Z.isLineSegments?Lt.setMode(G.LINES):Z.isLineLoop?Lt.setMode(G.LINE_LOOP):Lt.setMode(G.LINE_STRIP)}else Z.isPoints?Lt.setMode(G.POINTS):Z.isSprite&&Lt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Dt=Z._multiDrawCounts,st=Z._multiDrawCount,vn=Ve?de.get(Ve).bytesPerElement:1,Vi=y.get(ae).currentProgram.getUniforms();for(let xn=0;xn<st;xn++)Vi.setValue(G,"_gl_DrawID",xn),Lt.render(Ke[xn]/vn,Dt[xn])}else if(Z.isInstancedMesh)Lt.renderInstances($e,Kt,Z.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Dt=Math.min(oe.instanceCount,Ke);Lt.renderInstances($e,Kt,Dt)}else Lt.render($e,Kt)};function Fr(T,Y,oe){T.transparent===!0&&T.side===fa&&T.forceSinglePass===!1?(T.side=Xn,T.needsUpdate=!0,Ls(T,Y,oe),T.side=$a,T.needsUpdate=!0,Ls(T,Y,oe),T.side=fa):Ls(T,Y,oe)}this.compile=function(T,Y,oe=null){oe===null&&(oe=T),z=Te.get(oe),z.init(Y),L.push(z),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),T!==oe&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const ae=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ne=Z.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Pe=Ne[Ge];Fr(Pe,oe,Z),ae.add(Pe)}else Fr(Ne,oe,Z),ae.add(Ne)}),z=L.pop(),ae},this.compileAsync=function(T,Y,oe=null){const ae=this.compile(T,Y,oe);return new Promise(Z=>{function Ne(){if(ae.forEach(function(Ge){y.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){Z(T);return}setTimeout(Ne,10)}yt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ds=null;function zr(T){Ds&&Ds(T)}function Us(){Di.stop()}function Ir(){Di.start()}const Di=new lv;Di.setAnimationLoop(zr),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(T){Ds=T,we.setAnimationLoop(T),T===null?Di.stop():Di.start()},we.addEventListener("sessionstart",Us),we.addEventListener("sessionend",Ir),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=we.enabled===!0&&we.isPresenting===!0,ae=$!==null&&(Q===null||oe)&&$.begin(R,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,Y,Q),z=Te.get(T,L.length),z.init(Y),L.push(z),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Be.setFromProjectionMatrix(qt,Ii,Y.reversedDepth),ot=this.localClippingEnabled,Le=He.init(this.clippingPlanes,ot),O=Ee.get(T,H.length),O.init(),H.push(O),we.enabled===!0&&we.isPresenting===!0){const Ge=R.xr.getDepthSensingMesh();Ge!==null&&ni(Ge,Y,-1/0,R.sortObjects)}ni(T,Y,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(Re,Ce),at=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,at&&Ue.addToRenderList(O,T),this.info.render.frame++,Le===!0&&He.beginShadows();const Z=z.state.shadowsArray;if(ze.render(Z,T,Y),Le===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&$.hasRenderPass())===!1){const Ge=O.opaque,Pe=O.transmissive;if(z.setupLights(),Y.isArrayCamera){const Ve=Y.cameras;if(Pe.length>0)for(let We=0,Je=Ve.length;We<Je;We++){const qe=Ve[We];_n(Ge,Pe,T,qe)}at&&Ue.render(T);for(let We=0,Je=Ve.length;We<Je;We++){const qe=Ve[We];sn(O,T,qe,qe.viewport)}}else Pe.length>0&&_n(Ge,Pe,T,Y),at&&Ue.render(T),sn(O,T,Y)}Q!==null&&K===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),ae&&$.end(R),T.isScene===!0&&T.onAfterRender(R,T,Y),Ie.resetDefaultState(),le=-1,fe=null,L.pop(),L.length>0?(z=L[L.length-1],Le===!0&&He.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?O=H[H.length-1]:O=null};function ni(T,Y,oe,ae){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)z.pushLight(T),T.castShadow&&z.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){ae&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qt);const Ge=De.update(T),Pe=T.material;Pe.visible&&O.push(T,Ge,Pe,oe,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const Ge=De.update(T),Pe=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ut.copy(Ge.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(qt)),Array.isArray(Pe)){const Ve=Ge.groups;for(let We=0,Je=Ve.length;We<Je;We++){const qe=Ve[We],$e=Pe[qe.materialIndex];$e&&$e.visible&&O.push(T,Ge,$e,oe,ut.z,qe)}}else Pe.visible&&O.push(T,Ge,Pe,oe,ut.z,null)}}const Ne=T.children;for(let Ge=0,Pe=Ne.length;Ge<Pe;Ge++)ni(Ne[Ge],Y,oe,ae)}function sn(T,Y,oe,ae){const{opaque:Z,transmissive:Ne,transparent:Ge}=T;z.setupLightsView(oe),Le===!0&&He.setGlobalState(R.clippingPlanes,oe),ae&&Ye.viewport(N.copy(ae)),Z.length>0&&_i(Z,Y,oe),Ne.length>0&&_i(Ne,Y,oe),Ge.length>0&&_i(Ge,Y,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function _n(T,Y,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ae.id]===void 0){const $e=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ae.id]=new Hi(1,1,{generateMipmaps:!0,type:$e?ma:mi,minFilter:Rs,samples:Nt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=z.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||N;Ne.setSize(Ge.z*R.transmissionResolutionScale,Ge.w*R.transmissionResolutionScale);const Pe=R.getRenderTarget(),Ve=R.getActiveCubeFace(),We=R.getActiveMipmapLevel();R.setRenderTarget(Ne),R.getClearColor(Me),Se=R.getClearAlpha(),Se<1&&R.setClearColor(16777215,.5),R.clear(),at&&Ue.render(oe);const Je=R.toneMapping;R.toneMapping=Bi;const qe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),z.setupLightsView(ae),Le===!0&&He.setGlobalState(R.clippingPlanes,ae),_i(T,oe,ae),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),yt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let wt=0,Kt=Y.length;wt<Kt;wt++){const Wt=Y[wt],{object:Lt,geometry:Ke,material:Dt,group:st}=Wt;if(Dt.side===fa&&Lt.layers.test(ae.layers)){const vn=Dt.side;Dt.side=Xn,Dt.needsUpdate=!0,Ns(Lt,oe,ae,Ke,Dt,st),Dt.side=vn,Dt.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}R.setRenderTarget(Pe,Ve,We),R.setClearColor(Me,Se),qe!==void 0&&(ae.viewport=qe),R.toneMapping=Je}function _i(T,Y,oe){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ne=T.length;Z<Ne;Z++){const Ge=T[Z],{object:Pe,geometry:Ve,group:We}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ae!==null&&(Je=ae),Pe.layers.test(oe.layers)&&Ns(Pe,Y,oe,Ve,Je,We)}}function Ns(T,Y,oe,ae,Z,Ne){T.onBeforeRender(R,Y,oe,ae,Z,Ne),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(R,Y,oe,ae,T,Ne),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,R.renderBufferDirect(oe,Y,ae,Z,T,Ne),Z.side=$a,Z.needsUpdate=!0,R.renderBufferDirect(oe,Y,ae,Z,T,Ne),Z.side=fa):R.renderBufferDirect(oe,Y,ae,Z,T,Ne),T.onAfterRender(R,Y,oe,ae,Z,Ne)}function Ls(T,Y,oe){Y.isScene!==!0&&(Y=Et);const ae=y.get(T),Z=z.state.lights,Ne=z.state.shadowsArray,Ge=Z.state.version,Pe=Xe.getParameters(T,Z.state,Ne,Y,oe),Ve=Xe.getProgramCacheKey(Pe);let We=ae.programs;ae.environment=T.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(T.isMeshStandardMaterial?xe:me).get(T.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",Cn),We=new Map,ae.programs=We);let Je=We.get(Ve);if(Je!==void 0){if(ae.currentProgram===Je&&ae.lightsStateVersion===Ge)return Br(T,Pe),Je}else Pe.uniforms=Xe.getUniforms(T),T.onBeforeCompile(Pe,R),Je=Xe.acquireProgram(Pe,Ve),We.set(Ve,Je),ae.uniforms=Pe.uniforms;const qe=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=He.uniform),Br(T,Pe),ae.needsLights=xa(T),ae.lightsStateVersion=Ge,ae.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ae.currentProgram=Je,ae.uniformsList=null,Je}function Qo(T){if(T.uniformsList===null){const Y=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function Br(T,Y){const oe=y.get(T);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function es(T,Y,oe,ae,Z){Y.isScene!==!0&&(Y=Et),q.resetTextureUnits();const Ne=Y.fog,Ge=ae.isMeshStandardMaterial?Y.environment:null,Pe=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ur,Ve=(ae.isMeshStandardMaterial?xe:me).get(ae.envMap||Ge),We=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),qe=!!oe.morphAttributes.position,$e=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Kt=Bi;ae.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Kt=R.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Lt=Wt!==void 0?Wt.length:0,Ke=y.get(ae),Dt=z.state.lights;if(Le===!0&&(ot===!0||T!==fe)){const Mn=T===fe&&ae.id===le;He.setState(ae,T,Mn)}let st=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Dt.state.version||Ke.outputColorSpace!==Pe||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Ve||ae.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==He.numPlanes||Ke.numIntersection!==He.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==$e||Ke.morphColors!==wt||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==Lt)&&(st=!0):(st=!0,Ke.__version=ae.version);let vn=Ke.currentProgram;st===!0&&(vn=Ls(ae,Y,Z));let Vi=!1,xn=!1,ii=!1;const Pt=vn.getUniforms(),Sn=Ke.uniforms;if(Ye.useProgram(vn.program)&&(Vi=!0,xn=!0,ii=!0),ae.id!==le&&(le=ae.id,xn=!0),Vi||fe!==T){Ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(G,"projectionMatrix",T.projectionMatrix),Pt.setValue(G,"viewMatrix",T.matrixWorldInverse);const yn=Pt.map.cameraPosition;yn!==void 0&&yn.setValue(G,ct.setFromMatrixPosition(T.matrixWorld)),Nt.logarithmicDepthBuffer&&Pt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),fe!==T&&(fe=T,xn=!0,ii=!0)}if(Ke.needsLights&&(Dt.state.directionalShadowMap.length>0&&Pt.setValue(G,"directionalShadowMap",Dt.state.directionalShadowMap,q),Dt.state.spotShadowMap.length>0&&Pt.setValue(G,"spotShadowMap",Dt.state.spotShadowMap,q),Dt.state.pointShadowMap.length>0&&Pt.setValue(G,"pointShadowMap",Dt.state.pointShadowMap,q)),Z.isSkinnedMesh){Pt.setOptional(G,Z,"bindMatrix"),Pt.setOptional(G,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pt.setValue(G,"boneTexture",Mn.boneTexture,q))}Z.isBatchedMesh&&(Pt.setOptional(G,Z,"batchingTexture"),Pt.setValue(G,"batchingTexture",Z._matricesTexture,q),Pt.setOptional(G,Z,"batchingIdTexture"),Pt.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Pt.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pt.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const fn=oe.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ft.update(Z,oe,vn),(xn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Pt.setValue(G,"receiveShadow",Z.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Sn.envMap.value=Ve,Sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(Sn.envMapIntensity.value=Y.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=QA()),xn&&(Pt.setValue(G,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&Hr(Sn,ii),Ne&&ae.fog===!0&&tt.refreshFogUniforms(Sn,Ne),tt.refreshMaterialUniforms(Sn,ae,pe,ee,z.state.transmissionRenderTarget[T.id]),zc.upload(G,Qo(Ke),Sn,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(zc.upload(G,Qo(Ke),Sn,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(G,"center",Z.center),Pt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(G,"normalMatrix",Z.normalMatrix),Pt.setValue(G,"modelMatrix",Z.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Mn=ae.uniformsGroups;for(let yn=0,Os=Mn.length;yn<Os;yn++){const vi=Mn[yn];ye.update(vi,vn),ye.bind(vi,vn)}}return vn}function Hr(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function xa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,Y,oe){const ae=y.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),y.get(T.texture).__webglTexture=Y,y.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){const oe=y.get(T);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(T,Y=0,oe=0){Q=T,k=Y,K=oe;let ae=null,Z=!1,Ne=!1;if(T){const Pe=y.get(T);if(Pe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),N.copy(T.viewport),B.copy(T.scissor),ie=T.scissorTest,Ye.viewport(N),Ye.scissor(B),Ye.setScissorTest(ie),le=-1;return}else if(Pe.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(Pe.__hasExternalTextures)q.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&y.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const We=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?ae=We[Y][oe]:ae=We[Y],Z=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?ae=y.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?ae=We[oe]:ae=We,N.copy(T.viewport),B.copy(T.scissor),ie=T.scissorTest}else N.copy(J).multiplyScalar(pe).floor(),B.copy(ce).multiplyScalar(pe).floor(),ie=be;if(oe!==0&&(ae=Sa),Ye.bindFramebuffer(G.FRAMEBUFFER,ae)&&Ye.drawBuffers(T,ae),Ye.viewport(N),Ye.scissor(B),Ye.setScissorTest(ie),Z){const Pe=y.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,oe)}else if(Ne){const Pe=Y;for(let Ve=0;Ve<T.textures.length;Ve++){const We=y.get(T.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,We.__webglTexture,oe,Pe)}}else if(T!==null&&oe!==0){const Pe=y.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,oe)}le=-1},this.readRenderTargetPixels=function(T,Y,oe,ae,Z,Ne,Ge,Pe=0){if(!(T&&T.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const We=T.textures[Pe],Je=We.format,qe=We.type;if(!Nt.textureFormatReadable(Je)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-ae&&oe>=0&&oe<=T.height-Z&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(Y,oe,ae,Z,Ae.convert(Je),Ae.convert(qe),Ne))}finally{const We=Q!==null?y.get(Q).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,Y,oe,ae,Z,Ne,Ge,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(Y>=0&&Y<=T.width-ae&&oe>=0&&oe<=T.height-Z){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);const We=T.textures[Pe],Je=We.format,qe=We.type;if(!Nt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe),G.readPixels(Y,oe,ae,Z,Ae.convert(Je),Ae.convert(qe),0);const wt=Q!==null?y.get(Q).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,wt);const Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await _M(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer($e),G.deleteSync(Kt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,oe=0){const ae=Math.pow(2,-oe),Z=Math.floor(T.image.width*ae),Ne=Math.floor(T.image.height*ae),Ge=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;q.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Ge,Pe,Z,Ne),Ye.unbindTexture()};const ts=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(T,Y,oe=null,ae=null,Z=0,Ne=null){Ne===null&&(Z!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=Z,Z=0):Ne=0);let Ge,Pe,Ve,We,Je,qe,$e,wt,Kt;const Wt=T.isCompressedTexture?T.mipmaps[Ne]:T.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Pe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,Je=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const fn=Math.pow(2,-Z);Ge=Math.floor(Wt.width*fn),Pe=Math.floor(Wt.height*fn),T.isDataArrayTexture?Ve=Wt.depth:T.isData3DTexture?Ve=Math.floor(Wt.depth*fn):Ve=1,We=0,Je=0,qe=0}ae!==null?($e=ae.x,wt=ae.y,Kt=ae.z):($e=0,wt=0,Kt=0);const Lt=Ae.convert(Y.format),Ke=Ae.convert(Y.type);let Dt;Y.isData3DTexture?(q.setTexture3D(Y,0),Dt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Dt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Dt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const st=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vi=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const Pt=T.isDataArrayTexture||T.isData3DTexture,Sn=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){const fn=y.get(T),Mn=y.get(Y),yn=y.get(fn.__renderTarget),Os=y.get(Mn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let vi=0;vi<Ve;vi++)Pt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(T).__webglTexture,Z,qe+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(Y).__webglTexture,Ne,Kt+vi)),G.blitFramebuffer(We,Je,Ge,Pe,$e,wt,Ge,Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||y.has(T)){const fn=y.get(T),Mn=y.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,ts),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let yn=0;yn<Ve;yn++)Pt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qe+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ne,Kt+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ne),Z!==0?G.blitFramebuffer(We,Je,Ge,Pe,$e,wt,Ge,Pe,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Dt,Ne,$e,wt,Kt+yn,We,Je,Ge,Pe):G.copyTexSubImage2D(Dt,Ne,$e,wt,We,Je,Ge,Pe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Dt,Ne,$e,wt,Kt,Ge,Pe,Ve,Lt,Ke,Wt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Dt,Ne,$e,wt,Kt,Ge,Pe,Ve,Lt,Wt.data):G.texSubImage3D(Dt,Ne,$e,wt,Kt,Ge,Pe,Ve,Lt,Ke,Wt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,$e,wt,Ge,Pe,Lt,Ke,Wt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,$e,wt,Wt.width,Wt.height,Lt,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,$e,wt,Ge,Pe,Lt,Ke,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,st),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),Ne===0&&Y.generateMipmaps&&G.generateMipmap(Dt),Ye.unbindTexture()},this.initRenderTarget=function(T){y.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){k=0,K=0,Q=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function $A(){const o=Ai.useRef(null),t=Ai.useRef(!1),i=Ai.useRef(null);return Ai.useEffect(()=>{if(t.current||!o.current)return;t.current=!0;const s=new VM,l=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),u=new JA({alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(u.domElement);const d=[new Mt(8086344),new Mt(9335637),new Mt(11044451),new Mt(13215610),new Mt(6245177)],h=80,m=80,p=h*m,_=new Float32Array(p*3),v=new Float32Array(p*3),S=new Float32Array(p*3),E=new Float32Array(p*3);for(let K=0,Q=0;K<h;K++)for(let le=0;le<m;le++){const fe=(K-h/2)*.5,N=(le-m/2)*.5;_[Q]=fe,_[Q+1]=0,_[Q+2]=N,S[Q]=fe,S[Q+1]=0,S[Q+2]=N;const B=d[Math.floor(Math.random()*d.length)];v[Q]=B.r,v[Q+1]=B.g,v[Q+2]=B.b,Q+=3}const A=Math.PI*(3-Math.sqrt(5)),C=6;for(let K=0;K<p;K++){const Q=1-K/(p-1)*2,le=Math.sqrt(1-Q*Q),fe=A*K;E[K*3]=Math.cos(fe)*le*C,E[K*3+1]=Q*C,E[K*3+2]=Math.sin(fe)*le*C}const M=new ti;M.setAttribute("position",new ei(_,3)),M.setAttribute("color",new ei(v,3));const x=()=>window.innerWidth<480?.4:window.innerWidth<768?.6:window.innerWidth<1024?.8:1,F=new wi({uniforms:{time:{value:0},scrollProgress:{value:0},mouse:{value:new Bt(0,0)},pointScale:{value:x()}},vertexShader:`
        uniform float time;
        uniform float scrollProgress;
        uniform float pointScale;  // New uniform for size control
        attribute vec3 color;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          // Multiply base size by pointScale - smaller on mobile
          gl_PointSize = (4.0 * pointScale * (1.0 + sin(time) * 0.2)) * (10.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(vColor, 0.8);
        }
      `,transparent:!0,blending:Pd,depthWrite:!1}),P=new KM(M,F);s.add(P);const O=new ti,z=new sv({color:10123866,transparent:!0,opacity:.12});O.setAttribute("position",new ei(new Float32Array(p*6),3));const H=new jM(O,z);s.add(H),l.position.set(0,0,15);const L={mouseX:0,mouseY:0,targetMouseX:0,targetMouseY:0,scrollProgress:0,targetScroll:0,frameId:null,clock:new ny},$=K=>{L.targetMouseX=K.clientX/window.innerWidth*2-1,L.targetMouseY=-(K.clientY/window.innerHeight)*2+1},R=()=>{L.targetScroll=Math.max(0,Math.min(1,window.scrollY/800))},w=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),F.uniforms.pointScale.value=x()};window.addEventListener("mousemove",$),window.addEventListener("scroll",R),window.addEventListener("resize",w);const k=()=>{L.frameId=requestAnimationFrame(k);const K=L.clock.getElapsedTime(),Q=M.attributes.position,le=Q.array,fe=O.attributes.position,N=fe.array;L.mouseX+=(L.targetMouseX-L.mouseX)*.15,L.mouseY+=(L.targetMouseY-L.mouseY)*.15,L.scrollProgress+=(L.targetScroll-L.scrollProgress)*.1,F.uniforms.time.value=K,F.uniforms.scrollProgress.value=L.scrollProgress;const B=K*.3,ie=Math.cos(B),Me=Math.sin(B),Se=L.mouseX*6,U=L.mouseY*6,ee=L.scrollProgress;let pe=0;for(let Ce=0;Ce<h;Ce++)for(let J=0;J<m;J++){const ce=S[pe],be=S[pe+2],Be=Math.sqrt((ce-Se)**2+(be-U)**2),Le=Math.sin((ce-Se)*.5+K*.8)*.5+Math.cos((be-U)*.3+K*.6)*.5+Math.max(0,3-Be*.3)*1.2;let ot=E[pe],qt=E[pe+1],ct=E[pe+2];if(ee>0){const Et=ot*ie-ct*Me,at=ot*Me+ct*ie,Xt=1+Math.sin(K*1.5)*.03*ee;ot=Et*Xt,qt*=Xt,ct=at*Xt}const ut=ee*ee*(3-2*ee);le[pe]=ce+(ot-ce)*ut,le[pe+1]=Le+(qt-Le)*ut,le[pe+2]=be+(ct-be)*ut,pe+=3}if(Q.needsUpdate=!0,ee<=.8){H.visible=!0;let Ce=0,J=4;for(let ce=0;ce<h;ce+=J)for(let be=0;be<m;be+=J){const Be=(ce*m+be)*3;if(ce<h-J&&Ce<N.length-6){const Le=((ce+J)*m+be)*3;N[Ce++]=le[Be],N[Ce++]=le[Be+1],N[Ce++]=le[Be+2],N[Ce++]=le[Le],N[Ce++]=le[Le+1],N[Ce++]=le[Le+2]}if(be<m-J&&Ce<N.length-6){const Le=(ce*m+(be+J))*3;N[Ce++]=le[Be],N[Ce++]=le[Be+1],N[Ce++]=le[Be+2],N[Ce++]=le[Le],N[Ce++]=le[Le+1],N[Ce++]=le[Le+2]}}fe.needsUpdate=!0,z.opacity=.1*(1-ee)}else H.visible=!1;const Re=15-ee*6;l.position.z+=(Re-l.position.z)*.1,l.position.y=ee*2,l.lookAt(0,0,0),u.render(s,l)};return k(),i.current=()=>{L.frameId&&cancelAnimationFrame(L.frameId),window.removeEventListener("mousemove",$),window.removeEventListener("scroll",R),window.removeEventListener("resize",w),o.current&&u.domElement.parentNode===o.current&&o.current.removeChild(u.domElement),u.dispose(),M.dispose(),O.dispose(),F.dispose(),t.current=!1},()=>{i.current&&i.current()}},[]),W.jsx("div",{ref:o,id:"canvas-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})}function e1(){const o=Ai.useRef(null),t=Ai.useRef(null),[i,s]=Ai.useState(!1);return Ai.useEffect(()=>{const l=()=>{const _=window.matchMedia("(pointer: coarse)").matches;s(_),_?document.body.style.cursor="auto":document.body.style.cursor="none"};if(l(),window.addEventListener("resize",l),i)return;const u=_=>{o.current&&(o.current.style.left=_.clientX+"px",o.current.style.top=_.clientY+"px"),t.current&&(t.current.style.left=_.clientX+"px",t.current.style.top=_.clientY+"px")},d=()=>{t.current&&t.current.classList.add("hover")},h=()=>{t.current&&t.current.classList.remove("hover")};document.addEventListener("mousemove",u);const m=()=>{document.querySelectorAll(".cursor-hover, a, button, .mobile-menu-btn").forEach(_=>{_.addEventListener("mouseenter",d),_.addEventListener("mouseleave",h)})};m();const p=new MutationObserver(m);return p.observe(document.body,{childList:!0,subtree:!0}),()=>{document.removeEventListener("mousemove",u),window.removeEventListener("resize",l),p.disconnect(),document.querySelectorAll(".cursor-hover, a, button").forEach(_=>{_.removeEventListener("mouseenter",d),_.removeEventListener("mouseleave",h)})}},[i]),i?null:W.jsxs(W.Fragment,{children:[W.jsx("div",{ref:o,className:"cursor-dot"}),W.jsx("div",{ref:t,className:"cursor-outline"})]})}function t1(){return W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"noise"}),W.jsx($A,{}),W.jsx(e1,{}),W.jsx(wS,{}),W.jsxs("main",{children:[W.jsx(DS,{}),W.jsx(US,{}),W.jsx(NS,{}),W.jsx(LS,{}),W.jsx(OS,{}),W.jsx(PS,{})]}),W.jsx(FS,{})]})}CS.createRoot(document.getElementById("root")).render(W.jsx(t1,{}));
