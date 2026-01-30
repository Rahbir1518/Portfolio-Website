(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function _S(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Qf={exports:{}},wo={};var M0;function vS(){if(M0)return wo;M0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var y0;function xS(){return y0||(y0=1,Qf.exports=vS()),Qf.exports}var j=xS(),Jf={exports:{}},re={};var E0;function SS(){if(E0)return re;E0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(U,tt,pt){this.props=U,this.context=tt,this.refs=M,this.updater=pt||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function P(U,tt,pt){this.props=U,this.context=tt,this.refs=M,this.updater=pt||A}var O=P.prototype=new F;O.constructor=P,C(O,x.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function H(){}var L={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(U,tt,pt){var Rt=pt.ref;return{$$typeof:o,type:U,key:tt,ref:Rt!==void 0?Rt:null,props:pt}}function w(U,tt){return R(U.type,tt,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function K(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(pt){return tt[pt]})}var Q=/\/+/g;function lt(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):tt.toString(36)}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,tt,pt,Rt,Ct){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var ct=!1;if(U===null)ct=!0;else switch(J){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(U.$$typeof){case o:case e:ct=!0;break;case _:return ct=U._init,N(ct(U._payload),tt,pt,Rt,Ct)}}if(ct)return Ct=Ct(U),ct=Rt===""?"."+lt(U,0):Rt,z(Ct)?(pt="",ct!=null&&(pt=ct.replace(Q,"$&/")+"/"),N(Ct,tt,pt,"",function(Lt){return Lt})):Ct!=null&&(k(Ct)&&(Ct=w(Ct,pt+(Ct.key==null||U&&U.key===Ct.key?"":(""+Ct.key).replace(Q,"$&/")+"/")+ct)),tt.push(Ct)),1;ct=0;var Tt=Rt===""?".":Rt+":";if(z(U))for(var It=0;It<U.length;It++)Rt=U[It],J=Tt+lt(Rt,It),ct+=N(Rt,tt,pt,J,Ct);else if(It=E(U),typeof It=="function")for(U=It.call(U),It=0;!(Rt=U.next()).done;)Rt=Rt.value,J=Tt+lt(Rt,It++),ct+=N(Rt,tt,pt,J,Ct);else if(J==="object"){if(typeof U.then=="function")return N(ft(U),tt,pt,Rt,Ct);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function I(U,tt,pt){if(U==null)return U;var Rt=[],Ct=0;return N(U,Rt,"","",function(J){return tt.call(pt,J,Ct++)}),Rt}function it(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(pt){(U._status===0||U._status===-1)&&(U._status=1,U._result=pt)},function(pt){(U._status===0||U._status===-1)&&(U._status=2,U._result=pt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var Mt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},St={map:I,forEach:function(U,tt,pt){I(U,function(){tt.apply(this,arguments)},pt)},count:function(U){var tt=0;return I(U,function(){tt++}),tt},toArray:function(U){return I(U,function(tt){return tt})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=v,re.Children=St,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,tt,pt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=C({},U.props),Ct=U.key;if(tt!=null)for(J in tt.key!==void 0&&(Ct=""+tt.key),tt)!$.call(tt,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&tt.ref===void 0||(Rt[J]=tt[J]);var J=arguments.length-2;if(J===1)Rt.children=pt;else if(1<J){for(var ct=Array(J),Tt=0;Tt<J;Tt++)ct[Tt]=arguments[Tt+2];Rt.children=ct}return R(U.type,Ct,Rt)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,tt,pt){var Rt,Ct={},J=null;if(tt!=null)for(Rt in tt.key!==void 0&&(J=""+tt.key),tt)$.call(tt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Ct[Rt]=tt[Rt]);var ct=arguments.length-2;if(ct===1)Ct.children=pt;else if(1<ct){for(var Tt=Array(ct),It=0;It<ct;It++)Tt[It]=arguments[It+2];Ct.children=Tt}if(U&&U.defaultProps)for(Rt in ct=U.defaultProps,ct)Ct[Rt]===void 0&&(Ct[Rt]=ct[Rt]);return R(U,J,Ct)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=k,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:it}},re.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},re.startTransition=function(U){var tt=L.T,pt={};L.T=pt;try{var Rt=U(),Ct=L.S;Ct!==null&&Ct(pt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(H,Mt)}catch(J){Mt(J)}finally{tt!==null&&pt.types!==null&&(tt.types=pt.types),L.T=tt}},re.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},re.use=function(U){return L.H.use(U)},re.useActionState=function(U,tt,pt){return L.H.useActionState(U,tt,pt)},re.useCallback=function(U,tt){return L.H.useCallback(U,tt)},re.useContext=function(U){return L.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,tt){return L.H.useDeferredValue(U,tt)},re.useEffect=function(U,tt){return L.H.useEffect(U,tt)},re.useEffectEvent=function(U){return L.H.useEffectEvent(U)},re.useId=function(){return L.H.useId()},re.useImperativeHandle=function(U,tt,pt){return L.H.useImperativeHandle(U,tt,pt)},re.useInsertionEffect=function(U,tt){return L.H.useInsertionEffect(U,tt)},re.useLayoutEffect=function(U,tt){return L.H.useLayoutEffect(U,tt)},re.useMemo=function(U,tt){return L.H.useMemo(U,tt)},re.useOptimistic=function(U,tt){return L.H.useOptimistic(U,tt)},re.useReducer=function(U,tt,pt){return L.H.useReducer(U,tt,pt)},re.useRef=function(U){return L.H.useRef(U)},re.useState=function(U){return L.H.useState(U)},re.useSyncExternalStore=function(U,tt,pt){return L.H.useSyncExternalStore(U,tt,pt)},re.useTransition=function(){return L.H.useTransition()},re.version="19.2.4",re}var T0;function Ud(){return T0||(T0=1,Jf.exports=SS()),Jf.exports}var Ai=Ud(),$f={exports:{}},Do={},th={exports:{}},eh={};var b0;function MS(){return b0||(b0=1,(function(o){function e(N,I){var it=N.length;N.push(I);t:for(;0<it;){var Mt=it-1>>>1,St=N[Mt];if(0<l(St,I))N[Mt]=I,N[it]=St,it=Mt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var I=N[0],it=N.pop();if(it!==I){N[0]=it;t:for(var Mt=0,St=N.length,U=St>>>1;Mt<U;){var tt=2*(Mt+1)-1,pt=N[tt],Rt=tt+1,Ct=N[Rt];if(0>l(pt,it))Rt<St&&0>l(Ct,pt)?(N[Mt]=Ct,N[Rt]=it,Mt=Rt):(N[Mt]=pt,N[tt]=it,Mt=tt);else if(Rt<St&&0>l(Ct,it))N[Mt]=Ct,N[Rt]=it,Mt=Rt;else break t}}return I}function l(N,I){var it=N.sortIndex-I.sortIndex;return it!==0?it:N.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,E=!1,A=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(N){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=N)s(p),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(p)}}function z(N){if(C=!1,O(N),!A)if(i(m)!==null)A=!0,H||(H=!0,K());else{var I=i(p);I!==null&&ft(z,I.startTime-N)}}var H=!1,L=-1,$=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<$)}function k(){if(M=!1,H){var N=o.unstable_now();R=N;var I=!0;try{t:{A=!1,C&&(C=!1,F(L),L=-1),E=!0;var it=S;try{e:{for(O(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,S=v.priorityLevel;var St=Mt(v.expirationTime<=N);if(N=o.unstable_now(),typeof St=="function"){v.callback=St,O(N),I=!0;break e}v===i(m)&&s(m),O(N)}else s(m);v=i(m)}if(v!==null)I=!0;else{var U=i(p);U!==null&&ft(z,U.startTime-N),I=!1}}break t}finally{v=null,S=it,E=!1}I=void 0}}finally{I?K():H=!1}}}var K;if(typeof P=="function")K=function(){P(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,lt=Q.port2;Q.port1.onmessage=k,K=function(){lt.postMessage(null)}}else K=function(){x(k,0)};function ft(N,I){L=x(function(){N(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(N){switch(S){case 1:case 2:case 3:var I=3;break;default:I=S}var it=S;S=I;try{return N()}finally{S=it}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var it=S;S=N;try{return I()}finally{S=it}},o.unstable_scheduleCallback=function(N,I,it){var Mt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Mt+it:Mt):it=Mt,N){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=it+St,N={id:_++,callback:I,priorityLevel:N,startTime:it,expirationTime:St,sortIndex:-1},it>Mt?(N.sortIndex=it,e(p,N),i(m)===null&&N===i(p)&&(C?(F(L),L=-1):C=!0,ft(z,it-Mt))):(N.sortIndex=St,e(m,N),A||E||(A=!0,H||(H=!0,K()))),N},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(N){var I=S;return function(){var it=S;S=I;try{return N.apply(this,arguments)}finally{S=it}}}})(eh)),eh}var A0;function yS(){return A0||(A0=1,th.exports=MS()),th.exports}var nh={exports:{}},wn={};var R0;function ES(){if(R0)return wn;R0=1;var o=Ud();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:E}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var C0;function TS(){if(C0)return nh.exports;C0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nh.exports=ES(),nh.exports}var w0;function bS(){if(w0)return Do;w0=1;var o=yS(),e=Ud(),i=TS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,r=f;break}if(T===r){g=!0,r=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,r=c;break}if(T===r){g=!0,r=f,a=c;break}T=T.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case P:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case $:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var ft=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Mt=[],St=-1;function U(t){return{current:t}}function tt(t){0>St||(t.current=Mt[St],Mt[St]=null,St--)}function pt(t,n){St++,Mt[St]=t.current,t.current=n}var Rt=U(null),Ct=U(null),J=U(null),ct=U(null);function Tt(t,n){switch(pt(J,n),pt(Ct,t),pt(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Xg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Xg(n),t=Wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(Rt),pt(Rt,t)}function It(){tt(Rt),tt(Ct),tt(J)}function Lt(t){t.memoizedState!==null&&pt(ct,t);var n=Rt.current,a=Wg(n,t.type);n!==a&&(pt(Ct,t),pt(Rt,a))}function oe(t){Ct.current===t&&(tt(Rt),tt(Ct)),ct.current===t&&(tt(ct),bo._currentValue=it)}var qe,ce;function ue(t){if(qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qe=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+t+ce}var Ee=!1;function ae(t,n){if(!t||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var st=ut}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ut){st=ut}t.call(_t.prototype)}}else{try{throw Error()}catch(ut){st=ut}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var B=g.split(`
`),nt=T.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===nt.length)for(r=B.length-1,c=nt.length-1;1<=r&&0<=c&&B[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==nt[c]){var dt=`
`+B[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=c);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ue(a):""}function Xe(t,n){switch(t.tag){case 26:case 27:case 5:return ue(t.type);case 16:return ue("Lazy");case 13:return t.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return ae(t.type,!1);case 11:return ae(t.type.render,!1);case 1:return ae(t.type,!0);case 31:return ue("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Xe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ze=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,D=o.unstable_requestPaint,y=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,Et=null,bt=null;function Ht(t){if(typeof Xt=="function"&&ee(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,t)}catch{}}var zt=Math.clz32?Math.clz32:X,Ut=Math.log,fe=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ut(t)/fe|0)|0}var Ot=256,At=262144,Bt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=yt(r):(g&=T,g!==0?c=yt(g):a||(a=T&~t,a!==0&&(c=yt(a))))):(T=r&~f,T!==0?c=yt(T):g!==0?c=yt(g):a||(a=r&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,nt=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-zt(a),_t=1<<dt;T[dt]=0,B[dt]=-1;var st=nt[dt];if(st!==null)for(nt[dt]=null,dt=0;dt<st.length;dt++){var ut=st[dt];ut!==null&&(ut.lane&=-536870913)}a&=~_t}r!==0&&Ko(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ko(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-zt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Fr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-zt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ds(t,n){var a=n&-n;return a=(a&42)!==0?1:zr(a),(a&(t.suspendedLanes|n))!==0?0:a}function zr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Us(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Br(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:p0(t.type))}function Di(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var ni=Math.random().toString(36).slice(2),sn="__reactFiber$"+ni,_n="__reactProps$"+ni,_i="__reactContainer$"+ni,Ns="__reactEvents$"+ni,Ls="__reactListeners$"+ni,Qo="__reactHandles$"+ni,Ir="__reactResources$"+ni,ts="__reactMarker$"+ni;function Hr(t){delete t[sn],delete t[_n],delete t[Ns],delete t[Ls],delete t[Qo]}function xa(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Jg(t);t!==null;){if(a=t[sn])return a;t=Jg(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[sn]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ma(t){var n=t[Ir];return n||(n=t[Ir]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(t){t[ts]=!0}var q=new Set,ot={};function at(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(ot[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Pt={};function Vt(t){return Ze.call(Pt,t)?!0:Ze.call(Gt,t)?!1:Nt.test(t)?Pt[t]=!0:(Gt[t]=!0,!1)}function Wt(t,n,a){if(Vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=we(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Le(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=we(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var De=/[\n"\\]/g;function se(t){return t.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(t,n,a,r,c,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xn(t,g,$t(n)):a!=null?xn(t,g,$t(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+$t(T):t.removeAttribute("name")}function Vi(t,n,a,r,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),We(t)}function xn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ii(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Pe(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function Sn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),We(t)}function fn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Os(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&yn(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&yn(t,f,n[f])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(t){return pv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Yc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ps=null,Fs=null;function kd(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[_n]||null;if(!c)throw Error(s(90));vn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Le(r)}break t;case"textarea":Pe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ii(t,!!a.multiple,n,!1)}}}var Zc=!1;function Xd(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(Ps!==null||Fs!==null)&&(Il(),Ps&&(n=Ps,t=Fs,Fs=Ps=null,kd(n),t)))for(n=0;n<t.length;n++)kd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Xi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Kc=!1}var ya=null,Qc=null,$o=null;function Wd(){if($o)return $o;var t,n=Qc,a=n.length,r,c="value"in ya?ya.value:ya.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return $o=c.slice(t,1<r?1-r:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function qd(){return!1}function zn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:qd,this.isPropagationStopped=qd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=zn(ns),kr=v({},ns,{view:0,detail:0}),mv=zn(kr),Jc,$c,Xr,il=v({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Jc=t.screenX-Xr.screenX,$c=t.screenY-Xr.screenY):$c=Jc=0,Xr=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Yd=zn(il),gv=v({},il,{dataTransfer:0}),_v=zn(gv),vv=v({},kr,{relatedTarget:0}),tu=zn(vv),xv=v({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=zn(xv),Mv=v({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yv=zn(Mv),Ev=v({},ns,{data:0}),jd=zn(Ev),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Av[t])?!!n[t]:!1}function eu(){return Rv}var Cv=v({},kr,{key:function(t){if(t.key){var n=Tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wv=zn(Cv),Dv=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=zn(Dv),Uv=v({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Nv=zn(Uv),Lv=v({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=zn(Lv),Pv=v({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=zn(Pv),zv=v({},ns,{newState:0,oldState:0}),Bv=zn(zv),Iv=[9,13,27,32],nu=Xi&&"CompositionEvent"in window,Wr=null;Xi&&"documentMode"in document&&(Wr=document.documentMode);var Hv=Xi&&"TextEvent"in window&&!Wr,Kd=Xi&&(!nu||Wr&&8<Wr&&11>=Wr),Qd=" ",Jd=!1;function $d(t,n){switch(t){case"keyup":return Iv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function Gv(t,n){switch(t){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Jd=!0,Qd);case"textInput":return t=n.data,t===Qd&&Jd?null:t;default:return null}}function Vv(t,n){if(zs)return t==="compositionend"||!nu&&$d(t,n)?(t=Wd(),$o=Qc=ya=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kd&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kv[t.type]:n==="textarea"}function np(t,n,a,r){Ps?Fs?Fs.push(r):Fs=[r]:Ps=r,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function Xv(t){Bg(t,0)}function al(t){var n=es(t);if(Le(n))return t}function ip(t,n){if(t==="change")return n}var ap=!1;if(Xi){var iu;if(Xi){var au="oninput"in document;if(!au){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),au=typeof sp.oninput=="function"}iu=au}else iu=!1;ap=iu&&(!document.documentMode||9<document.documentMode)}function rp(){qr&&(qr.detachEvent("onpropertychange",op),Yr=qr=null)}function op(t){if(t.propertyName==="value"&&al(Yr)){var n=[];np(n,Yr,t,jc(t)),Xd(Xv,n)}}function Wv(t,n,a){t==="focusin"?(rp(),qr=n,Yr=a,qr.attachEvent("onpropertychange",op)):t==="focusout"&&rp()}function qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Yr)}function Yv(t,n){if(t==="click")return al(n)}function jv(t,n){if(t==="input"||t==="change")return al(n)}function Zv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Zv;function jr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ze.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,n){var a=lp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lp(a)}}function up(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?up(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Kv=Xi&&"documentMode"in document&&11>=document.documentMode,Bs=null,ru=null,Zr=null,ou=!1;function hp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Bs==null||Bs!==Kt(r)||(r=Bs,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=ql(ru,"onSelect"),0<r.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Bs)))}function is(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Is={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},lu={},dp={};Xi&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function as(t){if(lu[t])return lu[t];if(!Is[t])return t;var n=Is[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in dp)return lu[t]=n[a];return t}var pp=as("animationend"),mp=as("animationiteration"),gp=as("animationstart"),Qv=as("transitionrun"),Jv=as("transitionstart"),$v=as("transitioncancel"),_p=as("transitionend"),vp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function xi(t,n){vp.set(t,n),at(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Hs=0,uu=0;function rl(){for(var t=Hs,n=uu=Hs=0;n<t;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&xp(a,c,f)}}function ol(t,n,a,r){ai[Hs++]=t,ai[Hs++]=n,ai[Hs++]=a,ai[Hs++]=r,uu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function fu(t,n,a,r){return ol(t,n,a,r),ll(t)}function ss(t,n){return ol(t,null,null,n),ll(t)}function xp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-zt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<vo)throw vo=0,Mf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function tx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new tx(t,n,a,r)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")hu(t)&&(g=1);else if(typeof t=="string")g=sS(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=qn(31,a,n,c),t.elementType=R,t.lanes=f,t;case C:return rs(a.children,c,f,n);case M:g=8,c|=24;break;case x:return t=qn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case z:return t=qn(13,a,n,c),t.elementType=z,t.lanes=f,t;case H:return t=qn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case F:g=9;break t;case O:g=11;break t;case L:g=14;break t;case $:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function rs(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function du(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Mp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function pu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var yp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},yp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Vs=[],ks=0,ul=null,Kr=0,ri=[],oi=0,Ea=null,Ui=1,Ni="";function qi(t,n){Vs[ks++]=Kr,Vs[ks++]=ul,ul=t,Kr=n}function Ep(t,n,a){ri[oi++]=Ui,ri[oi++]=Ni,ri[oi++]=Ea,Ea=t;var r=Ui;t=Ni;var c=32-zt(r)-1;r&=~(1<<c),a+=1;var f=32-zt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ui=1<<32-zt(n)+c|a<<c|r,Ni=f+t}else Ui=1<<f|a<<c|r,Ni=t}function mu(t){t.return!==null&&(qi(t,1),Ep(t,1,0))}function gu(t){for(;t===ul;)ul=Vs[--ks],Vs[ks]=null,Kr=Vs[--ks],Vs[ks]=null;for(;t===Ea;)Ea=ri[--oi],ri[oi]=null,Ni=ri[--oi],ri[oi]=null,Ui=ri[--oi],ri[oi]=null}function Tp(t,n){ri[oi++]=Ui,ri[oi++]=Ni,ri[oi++]=Ea,Ui=n.id,Ni=n.overflow,Ea=t}var En=null,Ye=null,xe=!1,Ta=null,li=!1,_u=Error(s(519));function ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(si(n,t)),_u}function bp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[sn]=t,n[_n]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ge(So[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Vi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Vg(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||ba(t,!0)}function Ap(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Xs(t){if(t!==En)return!1;if(!xe)return Ap(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ff(t.type,t.memoizedProps)),a=!a),a&&Ye&&ba(t),Ap(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=Qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=Qg(t)}else n===27?(n=Ye,Ia(t.type)?(t=Gf,Gf=null,Ye=t):Ye=n):Ye=En?ui(t.stateNode.nextSibling):null;return!0}function os(){Ye=En=null,xe=!1}function vu(){var t=Ta;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Ta=null),t}function Qr(t){Ta===null?Ta=[t]:Ta.push(t)}var xu=U(null),ls=null,Yi=null;function Aa(t,n,a){pt(xu,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=xu.current,tt(xu)}function Su(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Mu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Su(f.return,a,t),r||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Su(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ws(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var T=c.type;Wn(c.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(c===ct.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&Mu(n,t,a,r),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cs(t){ls=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Rp(ls,t)}function hl(t,n){return ls===null&&cs(t),Rp(t,n)}function Rp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nx=o.unstable_scheduleCallback,ix=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new ex,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&nx(ix,function(){t.controller.abort()})}var $r=null,Eu=0,qs=0,Ys=null;function ax(t,n){if($r===null){var a=$r=[];Eu=0,qs=Rf(),Ys={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,n.then(Cp,Cp),n}function Cp(){if(--Eu===0&&$r!==null){Ys!==null&&(Ys.status="fulfilled");var t=$r;$r=null,qs=0,Ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var wp=N.S;N.S=function(t,n){hg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(t,n),wp!==null&&wp(t,n)};var us=U(null);function Tu(){var t=us.current;return t!==null?t:ke.pooledCache}function dl(t,n){n===null?pt(us,us.current):pt(us,n.pool)}function Dp(){var t=Tu();return t===null?null:{parent:rn._currentValue,pool:t}}var js=Error(s(460)),bu=Error(s(474)),pl=Error(s(542)),ml={then:function(){}};function Up(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Np(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Op(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Op(t),t}throw hs=n,js}}function fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,js):a}}var hs=null;function Lp(){if(hs===null)throw Error(s(459));var t=hs;return hs=null,t}function Op(t){if(t===js||t===pl)throw Error(s(483))}var Zs=null,to=0;function gl(t){var n=to;return to+=1,Zs===null&&(Zs=[]),Np(Zs,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _l(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pp(t){function n(Y,V){if(t){var et=Y.deletions;et===null?(Y.deletions=[V],Y.flags|=16):et.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Wi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,et){return Y.index=et,t?(et=Y.alternate,et!==null?(et=et.index,et<V?(Y.flags|=67108866,V):et):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,et,gt){return V===null||V.tag!==6?(V=du(et,Y.mode,gt),V.return=Y,V):(V=c(V,et),V.return=Y,V)}function B(Y,V,et,gt){var Qt=et.type;return Qt===C?dt(Y,V,et.props.children,gt,et.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&fs(Qt)===V.type)?(V=c(V,et.props),eo(V,et),V.return=Y,V):(V=cl(et.type,et.key,et.props,null,Y.mode,gt),eo(V,et),V.return=Y,V)}function nt(Y,V,et,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=pu(et,Y.mode,gt),V.return=Y,V):(V=c(V,et.children||[]),V.return=Y,V)}function dt(Y,V,et,gt,Qt){return V===null||V.tag!==7?(V=rs(et,Y.mode,gt,Qt),V.return=Y,V):(V=c(V,et),V.return=Y,V)}function _t(Y,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=du(""+V,Y.mode,et),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return et=cl(V.type,V.key,V.props,null,Y.mode,et),eo(et,V),et.return=Y,et;case A:return V=pu(V,Y.mode,et),V.return=Y,V;case $:return V=fs(V),_t(Y,V,et)}if(ft(V)||K(V))return V=rs(V,Y.mode,et,null),V.return=Y,V;if(typeof V.then=="function")return _t(Y,gl(V),et);if(V.$$typeof===P)return _t(Y,hl(Y,V),et);_l(Y,V)}return null}function st(Y,V,et,gt){var Qt=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Qt!==null?null:T(Y,V,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case E:return et.key===Qt?B(Y,V,et,gt):null;case A:return et.key===Qt?nt(Y,V,et,gt):null;case $:return et=fs(et),st(Y,V,et,gt)}if(ft(et)||K(et))return Qt!==null?null:dt(Y,V,et,gt,null);if(typeof et.then=="function")return st(Y,V,gl(et),gt);if(et.$$typeof===P)return st(Y,V,hl(Y,et),gt);_l(Y,et)}return null}function ut(Y,V,et,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(et)||null,T(V,Y,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return Y=Y.get(gt.key===null?et:gt.key)||null,B(V,Y,gt,Qt);case A:return Y=Y.get(gt.key===null?et:gt.key)||null,nt(V,Y,gt,Qt);case $:return gt=fs(gt),ut(Y,V,et,gt,Qt)}if(ft(gt)||K(gt))return Y=Y.get(et)||null,dt(V,Y,gt,Qt,null);if(typeof gt.then=="function")return ut(Y,V,et,gl(gt),Qt);if(gt.$$typeof===P)return ut(Y,V,et,hl(V,gt),Qt);_l(V,gt)}return null}function kt(Y,V,et,gt){for(var Qt=null,Ae=null,jt=V,he=V=0,ve=null;jt!==null&&he<et.length;he++){jt.index>he?(ve=jt,jt=null):ve=jt.sibling;var Re=st(Y,jt,et[he],gt);if(Re===null){jt===null&&(jt=ve);break}t&&jt&&Re.alternate===null&&n(Y,jt),V=f(Re,V,he),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,jt=ve}if(he===et.length)return a(Y,jt),xe&&qi(Y,he),Qt;if(jt===null){for(;he<et.length;he++)jt=_t(Y,et[he],gt),jt!==null&&(V=f(jt,V,he),Ae===null?Qt=jt:Ae.sibling=jt,Ae=jt);return xe&&qi(Y,he),Qt}for(jt=r(jt);he<et.length;he++)ve=ut(jt,Y,he,et[he],gt),ve!==null&&(t&&ve.alternate!==null&&jt.delete(ve.key===null?he:ve.key),V=f(ve,V,he),Ae===null?Qt=ve:Ae.sibling=ve,Ae=ve);return t&&jt.forEach(function(Xa){return n(Y,Xa)}),xe&&qi(Y,he),Qt}function te(Y,V,et,gt){if(et==null)throw Error(s(151));for(var Qt=null,Ae=null,jt=V,he=V=0,ve=null,Re=et.next();jt!==null&&!Re.done;he++,Re=et.next()){jt.index>he?(ve=jt,jt=null):ve=jt.sibling;var Xa=st(Y,jt,Re.value,gt);if(Xa===null){jt===null&&(jt=ve);break}t&&jt&&Xa.alternate===null&&n(Y,jt),V=f(Xa,V,he),Ae===null?Qt=Xa:Ae.sibling=Xa,Ae=Xa,jt=ve}if(Re.done)return a(Y,jt),xe&&qi(Y,he),Qt;if(jt===null){for(;!Re.done;he++,Re=et.next())Re=_t(Y,Re.value,gt),Re!==null&&(V=f(Re,V,he),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return xe&&qi(Y,he),Qt}for(jt=r(jt);!Re.done;he++,Re=et.next())Re=ut(jt,Y,he,Re.value,gt),Re!==null&&(t&&Re.alternate!==null&&jt.delete(Re.key===null?he:Re.key),V=f(Re,V,he),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&jt.forEach(function(gS){return n(Y,gS)}),xe&&qi(Y,he),Qt}function Ve(Y,V,et,gt){if(typeof et=="object"&&et!==null&&et.type===C&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case E:t:{for(var Qt=et.key;V!==null;){if(V.key===Qt){if(Qt=et.type,Qt===C){if(V.tag===7){a(Y,V.sibling),gt=c(V,et.props.children),gt.return=Y,Y=gt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&fs(Qt)===V.type){a(Y,V.sibling),gt=c(V,et.props),eo(gt,et),gt.return=Y,Y=gt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}et.type===C?(gt=rs(et.props.children,Y.mode,gt,et.key),gt.return=Y,Y=gt):(gt=cl(et.type,et.key,et.props,null,Y.mode,gt),eo(gt,et),gt.return=Y,Y=gt)}return g(Y);case A:t:{for(Qt=et.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){a(Y,V.sibling),gt=c(V,et.children||[]),gt.return=Y,Y=gt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}gt=pu(et,Y.mode,gt),gt.return=Y,Y=gt}return g(Y);case $:return et=fs(et),Ve(Y,V,et,gt)}if(ft(et))return kt(Y,V,et,gt);if(K(et)){if(Qt=K(et),typeof Qt!="function")throw Error(s(150));return et=Qt.call(et),te(Y,V,et,gt)}if(typeof et.then=="function")return Ve(Y,V,gl(et),gt);if(et.$$typeof===P)return Ve(Y,V,hl(Y,et),gt);_l(Y,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(a(Y,V.sibling),gt=c(V,et),gt.return=Y,Y=gt):(a(Y,V),gt=du(et,Y.mode,gt),gt.return=Y,Y=gt),g(Y)):a(Y,V)}return function(Y,V,et,gt){try{to=0;var Qt=Ve(Y,V,et,gt);return Zs=null,Qt}catch(jt){if(jt===js||jt===pl)throw jt;var Ae=qn(29,jt,null,Y.mode);return Ae.lanes=gt,Ae.return=Y,Ae}}}var ds=Pp(!0),Fp=Pp(!1),Ra=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ll(t),xp(t,null,a),n}return ol(t,r,n,a),ll(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Fr(t,a)}}function Cu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var wu=!1;function io(){if(wu){var t=Ys;if(t!==null)throw t}}function ao(t,n,a,r){wu=!1;var c=t.updateQueue;Ra=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,nt=B.next;B.next=null,g===null?f=nt:g.next=nt,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==g&&(T===null?dt.firstBaseUpdate=nt:T.next=nt,dt.lastBaseUpdate=B))}if(f!==null){var _t=c.baseState;g=0,dt=nt=B=null,T=f;do{var st=T.lane&-536870913,ut=st!==T.lane;if(ut?(_e&st)===st:(r&st)===st){st!==0&&st===qs&&(wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var kt=t,te=T;st=n;var Ve=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){_t=kt.call(Ve,_t,st);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,st=typeof kt=="function"?kt.call(Ve,_t,st):kt,st==null)break t;_t=v({},_t,st);break t;case 2:Ra=!0}}st=T.callback,st!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(nt=dt=ut,B=_t):dt=dt.next=ut,g|=st;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ut=T,T=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(B=_t),c.baseState=B,c.firstBaseUpdate=nt,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Oa|=g,t.lanes=g,t.memoizedState=_t}}function zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}var Ks=U(null),vl=U(0);function Ip(t,n){t=ia,pt(vl,t),pt(Ks,n),ia=t|n.baseLanes}function Du(){pt(vl,ia),pt(Ks,Ks.current)}function Uu(){ia=vl.current,tt(Ks),tt(vl)}var Yn=U(null),ci=null;function Da(t){var n=t.alternate;pt(en,en.current&1),pt(Yn,t),ci===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(ci=t)}function Nu(t){pt(en,en.current),pt(Yn,t),ci===null&&(ci=t)}function Hp(t){t.tag===22?(pt(en,en.current),pt(Yn,t),ci===null&&(ci=t)):Ua()}function Ua(){pt(en,en.current),pt(Yn,Yn.current)}function jn(t){tt(Yn),ci===t&&(ci=null),tt(en)}var en=U(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,le=null,He=null,on=null,Sl=!1,Qs=!1,ps=!1,Ml=0,so=0,Js=null,rx=0;function Je(){throw Error(s(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Ou(t,n,a,r,c,f){return Zi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Em:Zu,ps=!1,f=a(r,c),ps=!1,Qs&&(f=Vp(n,a,r,c)),Gp(t),f}function Gp(t){N.H=lo;var n=He!==null&&He.next!==null;if(Zi=0,on=He=le=null,Sl=!1,so=0,Js=null,n)throw Error(s(300));t===null||ln||(t=t.dependencies,t!==null&&fl(t)&&(ln=!0))}function Vp(t,n,a,r){le=t;var c=0;do{if(Qs&&(Js=null),so=0,Qs=!1,25<=c)throw Error(s(301));if(c+=1,on=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Tm,f=n(a,r)}while(Qs);return f}function ox(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(le.flags|=1024),n}function Pu(){var t=Ml!==0;return Ml=0,t}function Fu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(Sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sl=!1}Zi=0,on=He=le=null,Qs=!1,so=Ml=0,Js=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=t:on=on.next=t,on}function nn(){if(He===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=on===null?le.memoizedState:on.next;if(n!==null)on=n,He=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?le.memoizedState=on=t:on=on.next=t}return on}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,Js===null&&(Js=[]),t=Np(Js,t,n),n=le,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Em:Zu),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===P)return Tn(t)}throw Error(s(438,String(t)))}function Bu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=nn();return Iu(n,He,t)}function Iu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=g=null,B=null,nt=n,dt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(_e&_t)===_t:(Zi&_t)===_t){var st=nt.revertLane;if(st===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===qs&&(dt=!0);else if((Zi&st)===st){nt=nt.next,st===qs&&(dt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(T=B=_t,g=f):B=B.next=_t,le.lanes|=st,Oa|=st;_t=nt.action,ps&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else st={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(T=B=st,g=f):B=B.next=st,le.lanes|=_t,Oa|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?g=f:B.next=T,!Wn(f,t.memoizedState)&&(ln=!0,dt&&(a=Ys,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Hu(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function kp(t,n,a){var r=le,c=nn(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Wn((He||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,ku(qp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,$s(9,{destroy:void 0},Wp.bind(null,r,c,a,n),null),ke===null)throw Error(s(349));f||(Zi&127)!==0||Xp(r,n,a)}return a}function Xp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=yl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Wp(t,n,a,r){n.value=a,n.getSnapshot=r,Yp(n)&&jp(t)}function qp(t,n,a){return a(function(){Yp(n)&&jp(t)})}function Yp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function jp(t){var n=ss(t,2);n!==null&&Vn(n,t,2)}function Gu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ps){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function Zp(t,n,a,r){return t.baseState=a,Iu(t,He,typeof r=="function"?r:Ki)}function lx(t,n,a,r,c){if(Rl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Kp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var T=a(c,r),B=N.S;B!==null&&B(g,T),Qp(t,n,T)}catch(nt){Vu(t,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(c,r),Qp(t,n,f)}catch(nt){Vu(t,n,nt)}}function Qp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Jp(t,n,r)},function(r){return Vu(t,n,r)}):Jp(t,n,a)}function Jp(t,n,a){n.status="fulfilled",n.value=a,$p(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Kp(t,a)))}function Vu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,$p(n),n=n.next;while(n!==r)}t.action=null}function $p(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tm(t,n){return n}function em(t,n){if(xe){var a=ke.formState;if(a!==null){t:{var r=le;if(xe){if(Ye){e:{for(var c=Ye,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=ui(c.nextSibling),r=c.data==="F!";break t}}ba(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},a.queue=r,a=Sm.bind(null,le,r),r.dispatch=a,r=Gu(!1),f=ju.bind(null,le,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=lx.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function nm(t){var n=nn();return im(n,He,t)}function im(t,n,a){if(n=Iu(t,n,tm)[0],t=Tl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(g){throw g===js?pl:g}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,$s(9,{destroy:void 0},cx.bind(null,c,a),null)),[r,f,t]}function cx(t,n){t.action=n}function am(t){var n=nn(),a=He;if(a!==null)return im(n,a,t);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function $s(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=yl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function sm(){return nn().memoizedState}function bl(t,n,a,r){var c=Ln();le.flags|=t,c.memoizedState=$s(1|n,{destroy:void 0},a,r===void 0?null:r)}function Al(t,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;He!==null&&r!==null&&Lu(r,He.memoizedState.deps)?c.memoizedState=$s(n,f,a,r):(le.flags|=t,c.memoizedState=$s(1|n,f,a,r))}function rm(t,n){bl(8390656,8,t,n)}function ku(t,n){Al(2048,8,t,n)}function ux(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=yl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function om(t){var n=nn().memoizedState;return ux({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function lm(t,n){return Al(4,2,t,n)}function cm(t,n){return Al(4,4,t,n)}function um(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fm(t,n,a){a=a!=null?a.concat([t]):null,Al(4,4,um.bind(null,n,t),a)}function Xu(){}function hm(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function dm(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=t(),ps){Ht(!0);try{t()}finally{Ht(!1)}}return a.memoizedState=[r,n],r}function Wu(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=pg(),le.lanes|=t,Oa|=t,a)}function pm(t,n,a,r){return Wn(a,n)?a:Ks.current!==null?(t=Wu(t,a,r),Wn(t,n)||(ln=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=pg(),le.lanes|=t,Oa|=t,n)}function mm(t,n,a,r,c){var f=I.p;I.p=f!==0&&8>f?f:8;var g=N.T,T={};N.T=T,ju(t,!1,n,a);try{var B=c(),nt=N.S;if(nt!==null&&nt(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=sx(B,r);oo(t,n,dt,Qn(t))}else oo(t,n,r,Qn(t))}catch(_t){oo(t,n,{then:function(){},status:"rejected",reason:_t},Qn())}finally{I.p=f,g!==null&&T.types!==null&&(g.types=T.types),N.T=g}}function fx(){}function qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=gm(t).queue;mm(t,c,n,it,a===null?fx:function(){return _m(t),a(r)})}function gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _m(t){var n=gm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Qn())}function Yu(){return Tn(bo)}function vm(){return nn().memoizedState}function xm(){return nn().memoizedState}function hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ca(a);var r=wa(n,t,a);r!==null&&(Vn(r,n,a),no(r,n,a)),n={cache:yu()},t.payload=n;return}n=n.return}}function dx(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?Mm(n,a):(a=fu(t,n,a,r),a!==null&&(Vn(a,t,r),ym(a,n,r)))}function Sm(t,n,a){var r=Qn();oo(t,n,a,r)}function oo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))Mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,g))return ol(t,n,c,0),ke===null&&rl(),!1}catch{}if(a=fu(t,n,c,r),a!==null)return Vn(a,t,r),ym(a,n,r),!0}return!1}function ju(t,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(s(479))}else n=fu(t,a,r,2),n!==null&&Vn(n,t,2)}function Rl(t){var n=t.alternate;return t===le||n!==null&&n===le}function Mm(t,n){Qs=Sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ym(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Fr(t,a)}}var lo={readContext:Tn,use:El,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};lo.useEffectEvent=Je;var Em={readContext:Tn,use:El,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:rm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,um.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(ps){Ht(!0);try{t()}finally{Ht(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(ps){Ht(!0);try{a(n)}finally{Ht(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=dx.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Gu(t);var n=t.queue,a=Sm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Ln();return Wu(a,t,n)},useTransition:function(){var t=Gu(!1);return t=mm.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Ln();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(_e&127)!==0||Xp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,rm(qp.bind(null,r,f,t),[t]),r.flags|=2048,$s(9,{destroy:void 0},Wp.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=ke.identifierPrefix;if(xe){var a=Ni,r=Ui;a=(r&~(1<<32-zt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yu,useFormState:em,useActionState:em,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bu,useCacheRefresh:function(){return Ln().memoizedState=hx.bind(null,le)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Tn,use:El,useCallback:hm,useContext:Tn,useEffect:ku,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:cm,useMemo:dm,useReducer:Tl,useRef:sm,useState:function(){return Tl(Ki)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=nn();return pm(a,He.memoizedState,t,n)},useTransition:function(){var t=Tl(Ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Yu,useFormState:nm,useActionState:nm,useOptimistic:function(t,n){var a=nn();return Zp(a,He,t,n)},useMemoCache:Bu,useCacheRefresh:xm};Zu.useEffectEvent=om;var Tm={readContext:Tn,use:El,useCallback:hm,useContext:Tn,useEffect:ku,useImperativeHandle:fm,useInsertionEffect:lm,useLayoutEffect:cm,useMemo:dm,useReducer:Hu,useRef:sm,useState:function(){return Hu(Ki)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=nn();return He===null?Wu(a,t,n):pm(a,He.memoizedState,t,n)},useTransition:function(){var t=Hu(Ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:kp,useId:vm,useHostTransitionStatus:Yu,useFormState:am,useActionState:am,useOptimistic:function(t,n){var a=nn();return He!==null?Zp(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:xm};Tm.useEffectEvent=om;function Ku(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=Ca(r);c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,r),n!==null&&(Vn(n,t,r),no(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=Ca(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,r),n!==null&&(Vn(n,t,r),no(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=Ca(a);r.tag=2,n!=null&&(r.callback=n),n=wa(t,r,a),n!==null&&(Vn(n,t,a),no(n,t,a))}};function bm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function Am(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qu.enqueueReplaceState(n,n.state,null)}function ms(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Rm(t){sl(t)}function Cm(t){console.error(t)}function wm(t){sl(t)}function Cl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Dm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(t,n)},a}function Um(t){return t=Ca(t),t.tag=3,t}function Nm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Dm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Dm(n,a,r),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function px(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Hl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Tf(t,r,c)),!1;case 22:return a.flags|=65536,r===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Tf(t,r,c)),!1}throw Error(s(435,a.tag))}return Tf(t,r,c),Hl(),!1}if(xe)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==_u&&(t=Error(s(422),{cause:r}),Qr(si(t,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),Qr(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=si(r,a),c=Ju(t.stateNode,r,c),Cu(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),_o===null?_o=[f]:_o.push(f),$e!==4&&($e=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ju(a.stateNode,r,t),Cu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Um(c),Nm(c,t,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),ln=!1;function bn(t,n,a,r){n.child=t===null?Fp(n,null,a,r):ds(n,t.child,a,r)}function Lm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var T in r)T!=="ref"&&(g[T]=r[T])}else g=r;return cs(n),r=Ou(t,n,a,g,f,c),T=Pu(),t!==null&&!ln?(Fu(t,n,c),Qi(t,n,c)):(xe&&T&&mu(n),n.flags|=1,bn(t,n,r,c),n.child)}function Om(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pm(t,n,f,r,c)):(t=cl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(g,r)&&t.ref===n.ref)return Qi(t,n,c)}return n.flags|=1,t=Wi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Pm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jr(f,r)&&t.ref===n.ref)if(ln=!1,n.pendingProps=r=f,lf(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Qi(t,n,c)}return tf(t,n,a,r,c)}function Fm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return zm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Du(),Hp(n);else return r=n.lanes=536870912,zm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(dl(n,f.cachePool),Ip(n,f),Ua(),n.memoizedState=null):(t!==null&&dl(n,null),Du(),Ua());return bn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zm(t,n,a,r,c){var f=Tu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Du(),Hp(n),t!==null&&Ws(t,n,r,!0),n.childLanes=c,null}function wl(t,n){return n=Ul({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Bm(t,n,a){return ds(n,t.child,null,a),t=wl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function mx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=wl(n,r),n.lanes=536870912,co(null,t);if(Nu(n),(t=Ye)?(t=Kg(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Mp(t),a.return=n,n.child=a,En=n,Ye=null)):t=null,t===null)throw ba(n);return n.lanes=536870912,null}return wl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Bm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||Ws(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(r=ke,r!==null&&(g=Ds(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ss(t,g),Vn(r,t,g),$u;Hl(),n=Bm(t,n,a)}else t=f.treeContext,Ye=ui(g.nextSibling),En=n,xe=!0,Ta=null,li=!1,t!==null&&Tp(n,t),n=wl(n,r),n.flags|=4096;return n}return t=Wi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function tf(t,n,a,r,c){return cs(n),a=Ou(t,n,a,r,void 0,c),r=Pu(),t!==null&&!ln?(Fu(t,n,c),Qi(t,n,c)):(xe&&r&&mu(n),n.flags|=1,bn(t,n,a,c),n.child)}function Im(t,n,a,r,c,f){return cs(n),n.updateQueue=null,a=Vp(n,r,a,c),Gp(t),r=Pu(),t!==null&&!ln?(Fu(t,n,f),Qi(t,n,f)):(xe&&r&&mu(n),n.flags|=1,bn(t,n,a,f),n.child)}function Hm(t,n,a,r,c){if(cs(n),n.stateNode===null){var f=Gs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Gs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ku(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Qu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=ms(a,T);f.props=B;var nt=f.context,dt=a.contextType;g=Gs,typeof dt=="object"&&dt!==null&&(g=Tn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||nt!==g)&&Am(n,f,r,g),Ra=!1;var st=n.memoizedState;f.state=st,ao(n,r,f,c),io(),nt=n.memoizedState,T||st!==nt||Ra?(typeof _t=="function"&&(Ku(n,a,_t,r),nt=n.memoizedState),(B=Ra||bm(n,a,B,r,st,nt,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=g,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(t,n),g=n.memoizedProps,dt=ms(a,g),f.props=dt,_t=n.pendingProps,st=f.context,nt=a.contextType,B=Gs,typeof nt=="object"&&nt!==null&&(B=Tn(nt)),T=a.getDerivedStateFromProps,(nt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||st!==B)&&Am(n,f,r,B),Ra=!1,st=n.memoizedState,f.state=st,ao(n,r,f,c),io();var ut=n.memoizedState;g!==_t||st!==ut||Ra||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof T=="function"&&(Ku(n,a,T,r),ut=n.memoizedState),(dt=Ra||bm(n,a,dt,r,st,ut,B)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=B,r=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ds(n,t.child,null,c),n.child=ds(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Qi(t,n,c),t}function Gm(t,n,a,r){return os(),n.flags|=256,bn(t,n,a,r),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Dp()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Vm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?Da(n):Ua(),(t=Ye)?(t=Kg(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Mp(t),a.return=n,n.child=a,En=n,Ye=null)):t=null,t===null)throw ba(n);return Hf(t)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(Ua(),c=n.mode,T=Ul({mode:"hidden",children:T},c),r=rs(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,g,a),n.memoizedState=ef,co(null,r)):(Da(n),sf(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),T=r.fallback,c=n.mode,r=Ul({mode:"visible",children:r.children},c),T=rs(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,ds(n,t.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,g,a),n.memoizedState=ef,n=co(null,r));else if(Da(n),Hf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var nt=g.dgst;g=nt,r=Error(s(419)),r.stack="",r.digest=g,Qr({value:r,source:null,stack:null}),n=rf(t,n,a)}else if(ln||Ws(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=ke,g!==null&&(r=Ds(g,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ss(t,r),Vn(g,t,r),$u;If(T)||Hl(),n=rf(t,n,a)}else If(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ye=ui(T.nextSibling),En=n,xe=!0,Ta=null,li=!1,t!==null&&Tp(n,t),n=sf(n,r.children),n.flags|=4096);return n}return c?(Ua(),T=r.fallback,c=n.mode,B=t.child,nt=B.sibling,r=Wi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,nt!==null?T=Wi(nt,T):(T=rs(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,co(null,r),r=n.child,T=t.child.memoizedState,T===null?T=nf(a):(c=T.cachePool,c!==null?(B=rn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Dp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=af(t,g,a),n.memoizedState=ef,co(t.child,r)):(Da(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function sf(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return ds(n,t.child,null,a),t=sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function km(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Su(t.return,n,a)}function of(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Xm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=en.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,pt(en,g),bn(t,n,r,a),r=xe?Kr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,a,n);else if(t.tag===19)km(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function gx(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Aa(n,rn,t.memoizedState.cache),os();break;case 27:case 5:Lt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(t,n,a):(Da(n),t=Qi(t,n,a),t!==null?t.sibling:null);Da(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ws(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Xm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),pt(en,en.current),r)break;return null;case 22:return n.lanes=0,Fm(t,n,a,n.pendingProps);case 24:Aa(n,rn,t.memoizedState.cache)}return Qi(t,n,a)}function Wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return ln=!1,gx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,xe&&(n.flags&1048576)!==0&&Ep(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=fs(n.elementType),n.type=t,typeof t=="function")hu(t)?(r=ms(t,r),n.tag=1,n=Hm(null,n,t,r,a)):(n.tag=0,n=tf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=Lm(null,n,t,r,a);break t}else if(c===L){n.tag=14,n=Om(null,n,t,r,a);break t}}throw n=lt(t)||t,Error(s(306,n,""))}}return n;case 0:return tf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ms(r,n.pendingProps),Hm(t,n,r,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(t,n),ao(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Aa(n,rn,r),r!==f.cache&&Mu(n,[rn],a,!0),io(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(t,n,r,a);break t}else if(r!==c){c=si(Error(s(424)),n),Qr(c),n=Gm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ye=ui(t.firstChild),En=n,xe=!0,Ta=null,li=!0,a=Fp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(os(),r===c){n=Qi(t,n,a);break t}bn(t,n,r,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=n0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Yl(J.current).createElement(a),r[sn]=n,r[_n]=t,An(r,a,t),b(r),n.stateNode=r):n.memoizedState=n0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Lt(n),t===null&&xe&&(r=n.stateNode=$g(n.type,n.pendingProps,J.current),En=n,li=!0,c=Ye,Ia(n.type)?(Gf=c,Ye=ui(r.firstChild)):Ye=c),bn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=Ye)&&(r=qx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,En=n,Ye=ui(r.firstChild),li=!1,c=!0):c=!1),c||ba(n)),Lt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Ff(c,f)?r=null:g!==null&&Ff(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(t,n,ox,null,null,a),bo._currentValue=c),Dl(t,n),bn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Ye)&&(a=Yx(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,Ye=null,t=!0):t=!1),t||ba(n)),null;case 13:return Vm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ds(n,null,r,a):bn(t,n,r,a),n.child;case 11:return Lm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Aa(n,n.type,r.value),bn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,cs(n),c=Tn(c),r=r(c),n.flags|=1,bn(t,n,r,a),n.child;case 14:return Om(t,n,n.type,n.pendingProps,a);case 15:return Pm(t,n,n.type,n.pendingProps,a);case 19:return Xm(t,n,a);case 31:return mx(t,n,a);case 22:return Fm(t,n,a,n.pendingProps);case 24:return cs(n),r=Tn(rn),t===null?(c=Tu(),c===null&&(c=ke,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),Aa(n,rn,c)):((t.lanes&a)!==0&&(Ru(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,rn,r)):(r=f.cache,Aa(n,rn,r),r!==c.cache&&Mu(n,[rn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(t){t.flags|=4}function cf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(vg())t.flags|=8192;else throw hs=ml,bu}else t.flags&=-16777217}function qm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o0(n))if(vg())t.flags|=8192;else throw hs=ml,bu}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,ir|=n)}function uo(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function _x(t,n,a){var r=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(rn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(je(n),qm(n,f)):(je(n),cf(n,c,null,r,a))):f?f!==t.memoizedState?(Ji(n),je(n),qm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ji(n),je(n),cf(n,c,t,r,a)),null;case 27:if(oe(n),a=J.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=Rt.current,Xs(n)?bp(n):(t=$g(c,r,a),n.stateNode=t,Ji(n))}return je(n),null;case 5:if(oe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=Rt.current,Xs(n))bp(n);else{var g=Yl(J.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[sn]=n,f[_n]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(An(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ji(n)}}return je(n),cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=J.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Vg(t.nodeValue,a)),t||ba(n,!0)}else t=Yl(t).createTextNode(r),t[sn]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Xs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),je(n),null);case 4:return It(),t===null&&Uf(n.stateNode.containerInfo),je(n),null;case 10:return ji(n.type),je(n),null;case 19:if(tt(en),r=n.memoizedState,r===null)return je(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,uo(r,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sp(a,t),a=a.sibling;return pt(en,en.current&1|2),xe&&qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&y()>zl&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(t=xl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return je(n),null}else 2*y()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=y(),t.sibling=null,a=en.current,pt(en,c?a&1|2:a&1),xe&&qi(n,r.treeForkCount),t):(je(n),null);case 22:case 23:return jn(n),Uu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&tt(us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(rn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vx(t,n){switch(gu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(rn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(en),null;case 4:return It(),null;case 10:return ji(n.type),null;case 22:case 23:return jn(n),Uu(),t!==null&&tt(us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(rn),null;case 25:return null;default:return null}}function Ym(t,n){switch(gu(n),n.tag){case 3:ji(rn),It();break;case 26:case 27:case 5:oe(n);break;case 4:It();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:tt(en);break;case 10:ji(n.type);break;case 22:case 23:jn(n),Uu(),t!==null&&tt(us);break;case 24:ji(rn)}}function fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(T){ze(n,n.return,T)}}function Na(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var B=a,nt=T;try{nt()}catch(dt){ze(c,B,dt)}}}r=r.next}while(r!==f)}}catch(dt){ze(n,n.return,dt)}}function jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bp(n,a)}catch(r){ze(t,t.return,r)}}}function Zm(t,n,a){a.props=ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){ze(t,n,c)}}function Li(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Km(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function uf(t,n,a){try{var r=t.stateNode;Hx(r,t.type,a,n),r[_n]=n}catch(c){ze(t,t.return,c)}}function Qm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function ff(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(r!==4&&(r===27&&Ia(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Ll(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ia(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ll(t,n,a),t=t.sibling;t!==null;)Ll(t,n,a),t=t.sibling}function Jm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,r,a),n[sn]=t,n[_n]=a}catch(f){ze(t,t.return,f)}}var $i=!1,cn=!1,df=!1,$m=typeof WeakSet=="function"?WeakSet:Set,mn=null;function xx(t,n){if(t=t.containerInfo,Of=tc,t=fp(t),su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,B=-1,nt=0,dt=0,_t=t,st=null;e:for(;;){for(var ut;_t!==a||c!==0&&_t.nodeType!==3||(T=g+c),_t!==f||r!==0&&_t.nodeType!==3||(B=g+r),_t.nodeType===3&&(g+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)st=_t,_t=ut;for(;;){if(_t===t)break e;if(st===a&&++nt===c&&(T=g),st===f&&++dt===r&&(B=g),(ut=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=ut}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:t,selectionRange:a},tc=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var kt=ms(a.type,c);t=r.getSnapshotBeforeUpdate(kt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){ze(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function tg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),r&4&&fo(5,a);break;case 1:if(ea(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var c=ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}r&64&&jm(a),r&512&&ho(a,a.return);break;case 3:if(ea(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&r&4&&Jm(a);case 26:case 5:ea(t,a),n===null&&r&4&&Km(a),r&512&&ho(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),r&4&&ig(t,a);break;case 13:ea(t,a),r&4&&ag(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cx.bind(null,a),jx(t,a))));break;case 22:if(r=a.memoizedState!==null||$i,!r){n=n!==null&&n.memoizedState!==null||cn,c=$i;var f=cn;$i=r,(cn=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),$i=c,cn=f}break;case 30:break;default:ea(t,a)}}function eg(t){var n=t.alternate;n!==null&&(t.alternate=null,eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Bn=!1;function ta(t,n,a){for(a=a.child;a!==null;)ng(t,n,a),a=a.sibling}function ng(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:cn||Li(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Li(a,n);var r=Qe,c=Bn;Ia(a.type)&&(Qe=a.stateNode,Bn=!1),ta(t,n,a),yo(a.stateNode),Qe=r,Bn=c;break;case 5:cn||Li(a,n);case 6:if(r=Qe,c=Bn,Qe=null,ta(t,n,a),Qe=r,Bn=c,Qe!==null)if(Bn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Qe!==null&&(Bn?(t=Qe,jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fr(t)):jg(Qe,a.stateNode));break;case 4:r=Qe,c=Bn,Qe=a.stateNode.containerInfo,Bn=!0,ta(t,n,a),Qe=r,Bn=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),ta(t,n,a);break;case 1:cn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Zm(a,n,r)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,ta(t,n,a),cn=r;break;default:ta(t,n,a)}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fr(t)}catch(a){ze(n,n.return,a)}}}function ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fr(t)}catch(a){ze(n,n.return,a)}}function Sx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $m),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $m),n;default:throw Error(s(435,t.tag))}}function Ol(t,n){var a=Sx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=wx.bind(null,t,r);r.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){Qe=T.stateNode,Bn=!1;break t}break;case 5:Qe=T.stateNode,Bn=!1;break t;case 3:case 4:Qe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Qe===null)throw Error(s(160));ng(f,g,c),Qe=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sg(n,t),n=n.sibling}var Si=null;function sg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Hn(t),r&4&&(Na(3,t,t.return),fo(3,t),Na(5,t,t.return));break;case 1:In(n,t),Hn(t),r&512&&(cn||a===null||Li(a,a.return)),r&64&&$i&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Si;if(In(n,t),Hn(t),r&512&&(cn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ts]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,r,a),f[sn]=t,b(f),r=f;break t;case"link":var g=s0("link","href",c).get(r+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;case"meta":if(g=s0("meta","content",c).get(r+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=t,b(f),r=f}t.stateNode=r}else r0(c,t.type,t.stateNode);else t.stateNode=a0(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?r0(c,t.type,t.stateNode):a0(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Hn(t),r&512&&(cn||a===null||Li(a,a.return)),a!==null&&r&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Hn(t),r&512&&(cn||a===null||Li(a,a.return)),t.flags&32){c=t.stateNode;try{fn(c,"")}catch(kt){ze(t,t.return,kt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(df=!0);break;case 6:if(In(n,t),Hn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(kt){ze(t,t.return,kt)}}break;case 3:if(Kl=null,c=Si,Si=jl(n.containerInfo),In(n,t),Si=c,Hn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(kt){ze(t,t.return,kt)}df&&(df=!1,rg(t));break;case 4:r=Si,Si=jl(t.stateNode.containerInfo),In(n,t),Hn(t),Si=r;break;case 12:In(n,t),Hn(t);break;case 31:In(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ol(t,r)));break;case 13:In(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=y()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ol(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,nt=$i,dt=cn;if($i=nt||c,cn=dt||B,In(n,t),cn=dt,$i=nt,Hn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||$i||cn||gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode;var _t=B.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(kt){ze(B,B.return,kt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(kt){ze(B,B.return,kt)}}}else if(n.tag===18){if(a===null){B=n;try{var ut=B.stateNode;c?Zg(ut,!0):Zg(B.stateNode,!1)}catch(kt){ze(B,B.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ol(t,a))));break;case 19:In(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ol(t,r)));break;case 30:break;case 21:break;default:In(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Qm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(t);Ll(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var T=ff(t);Ll(t,T,g);break;case 3:case 4:var B=a.stateNode.containerInfo,nt=ff(t);hf(t,nt,B);break;default:throw Error(s(161))}}catch(dt){ze(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(t,n.alternate,n),n=n.sibling}function gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),gs(n);break;case 27:yo(n.stateNode);case 26:case 5:Li(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),fo(4,f);break;case 1:if(na(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){ze(r,r.return,nt)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)zp(B[c],T)}catch(nt){ze(r,r.return,nt)}}a&&g&64&&jm(f),ho(f,f.return);break;case 27:Jm(f);case 26:case 5:na(c,f,a),a&&r===null&&g&4&&Km(f),ho(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&g&4&&ig(c,f);break;case 13:na(c,f,a),a&&g&4&&ag(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),ho(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function Mi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(t,n,a,r),n=n.sibling}function og(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,r),c&2048&&fo(9,n);break;case 1:Mi(t,n,a,r);break;case 3:Mi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){Mi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else Mi(t,n,a,r);break;case 31:Mi(t,n,a,r);break;case 13:Mi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,r):po(t,n):f._visibility&2?Mi(t,n,a,r):(f._visibility|=2,tr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(g,n);break;case 24:Mi(t,n,a,r),c&2048&&mf(n.alternate,n);break;default:Mi(t,n,a,r)}}function tr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,B=r,nt=g.flags;switch(g.tag){case 0:case 11:case 15:tr(f,g,T,B,c),fo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?tr(f,g,T,B,c):po(f,g):(dt._visibility|=2,tr(f,g,T,B,c)),c&&nt&2048&&pf(g.alternate,g);break;case 24:tr(f,g,T,B,c),c&&nt&2048&&mf(g.alternate,g);break;default:tr(f,g,T,B,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&pf(r.alternate,r);break;case 24:po(a,r),c&2048&&mf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function er(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)lg(t,n,a),t=t.sibling}function lg(t,n,a){switch(t.tag){case 26:er(t,n,a),t.flags&mo&&t.memoizedState!==null&&rS(a,Si,t.memoizedState,t.memoizedProps);break;case 5:er(t,n,a);break;case 3:case 4:var r=Si;Si=jl(t.stateNode.containerInfo),er(t,n,a),Si=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,er(t,n,a),mo=r):er(t,n,a));break;default:er(t,n,a)}}function cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,fg(r,t)}cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ug(t),t=t.sibling}function ug(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Na(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):go(t);break;default:go(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,fg(r,t)}cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function fg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(eg(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Mx={getCacheForType:function(t){var n=Tn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(rn).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,me=null,_e=0,Fe=0,Zn=null,La=!1,nr=!1,gf=!1,ia=0,$e=0,Oa=0,_s=0,_f=0,Kn=0,ir=0,_o=null,Gn=null,vf=!1,Fl=0,hg=0,zl=1/0,Bl=null,Pa=null,hn=0,Fa=null,ar=null,aa=0,xf=0,Sf=null,dg=null,vo=0,Mf=null;function Qn(){return(Ue&2)!==0&&_e!==0?_e&-_e:N.T!==null?Rf():Br()}function pg(){if(Kn===0)if((_e&536870912)===0||xe){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Vn(t,n,a){(t===ke&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(sr(t,0),za(t,_e,Kn,!1)),Cn(t,a),((Ue&2)===0||t!==ke)&&(t===ke&&((Ue&2)===0&&(_s|=a),$e===4&&za(t,_e,Kn,!1)),Oi(t))}function mg(t,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||wt(t,n),c=r?bx(t,n):Ef(t,n,!0),f=r;do{if(c===0){nr&&!r&&za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ex(a)){c=Ef(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;c=_o;var B=T.current.memoizedState.isDehydrated;if(B&&(sr(T,g).flags|=256),g=Ef(T,g,!1),g!==2){if(gf&&!B){T.errorRecoveryDisabledLanes|=f,_s|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){sr(t,0),za(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(r,n,Kn,!La);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fl+300-y(),10<c)){if(za(r,n,Kn,!La),vt(r,0,!0)!==0)break t;aa=n,r.timeoutHandle=qg(gg.bind(null,r,a,Gn,Bl,vf,n,Kn,_s,ir,La,f,"Throttled",-0,0),c);break t}gg(r,a,Gn,Bl,vf,n,Kn,_s,ir,La,f,null,-0,0)}}break}while(!0);Oi(t)}function gg(t,n,a,r,c,f,g,T,B,nt,dt,_t,st,ut){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},lg(n,f,_t);var kt=(f&62914560)===f?Fl-y():(f&4194048)===f?hg-y():0;if(kt=oS(_t,kt),kt!==null){aa=f,t.cancelPendingCommit=kt(Tg.bind(null,t,n,f,a,r,c,g,T,B,dt,_t,null,st,ut)),za(t,f,g,!nt);return}}Tg(t,n,f,a,r,c,g,T,B)}function Ex(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,r){n&=~_f,n&=~_s,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-zt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Ko(t,a,n)}function Il(){return(Ue&6)===0?(xo(0),!1):!0}function yf(){if(me!==null){if(Fe===0)var t=me.return;else t=me,Yi=ls=null,zu(t),Zs=null,to=0,t=me;for(;t!==null;)Ym(t.alternate,t),t=t.return;me=null}}function sr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,yf(),ke=t,me=a=Wi(t.current,null),_e=n,Fe=0,Zn=null,La=!1,nr=wt(t,n),gf=!1,ir=Kn=_f=_s=Oa=$e=0,Gn=_o=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-zt(r),f=1<<c;n|=t[c],r&=~f}return ia=n,rl(),a}function _g(t,n){le=null,N.H=lo,n===js||n===pl?(n=Lp(),Fe=3):n===bu?(n=Lp(),Fe=4):Fe=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,me===null&&($e=1,Cl(t,si(n,t.current)))}function vg(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?ci===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ci:!1}function xg(){var t=N.H;return N.H=lo,t===null?lo:t}function Sg(){var t=N.A;return N.A=Mx,t}function Hl(){$e=4,La||(_e&4194048)!==_e&&Yn.current!==null||(nr=!0),(Oa&134217727)===0&&(_s&134217727)===0||ke===null||za(ke,_e,Kn,!1)}function Ef(t,n,a){var r=Ue;Ue|=2;var c=xg(),f=Sg();(ke!==t||_e!==n)&&(Bl=null,sr(t,n)),n=!1;var g=$e;t:do try{if(Fe!==0&&me!==null){var T=me,B=Zn;switch(Fe){case 8:yf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var nt=Fe;if(Fe=0,Zn=null,rr(t,T,B,nt),a&&nr){g=0;break t}break;default:nt=Fe,Fe=0,Zn=null,rr(t,T,B,nt)}}Tx(),g=$e;break}catch(dt){_g(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Yi=ls=null,Ue=r,N.H=c,N.A=f,me===null&&(ke=null,_e=0,rl()),g}function Tx(){for(;me!==null;)Mg(me)}function bx(t,n){var a=Ue;Ue|=2;var r=xg(),c=Sg();ke!==t||_e!==n?(Bl=null,zl=y()+500,sr(t,n)):nr=wt(t,n);t:do try{if(Fe!==0&&me!==null){n=me;var f=Zn;e:switch(Fe){case 1:Fe=0,Zn=null,rr(t,n,f,1);break;case 2:case 9:if(Up(f)){Fe=0,Zn=null,yg(n);break}n=function(){Fe!==2&&Fe!==9||ke!==t||(Fe=7),Oi(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Up(f)?(Fe=0,Zn=null,yg(n)):(Fe=0,Zn=null,rr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var T=me;if(g?o0(g):T.stateNode.complete){Fe=0,Zn=null;var B=T.sibling;if(B!==null)me=B;else{var nt=T.return;nt!==null?(me=nt,Gl(nt)):me=null}break e}}Fe=0,Zn=null,rr(t,n,f,5);break;case 6:Fe=0,Zn=null,rr(t,n,f,6);break;case 8:yf(),$e=6;break t;default:throw Error(s(462))}}Ax();break}catch(dt){_g(t,dt)}while(!0);return Yi=ls=null,N.H=r,N.A=c,Ue=a,me!==null?0:(ke=null,_e=0,rl(),$e)}function Ax(){for(;me!==null&&!Yt();)Mg(me)}function Mg(t){var n=Wm(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Gl(t):me=n}function yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Im(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Im(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:zu(n);default:Ym(a,n),n=me=Sp(n,ia),n=Wm(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Gl(t):me=n}function rr(t,n,a,r){Yi=ls=null,zu(n),Zs=null,to=0;var c=n.return;try{if(px(t,c,n,a,_e)){$e=1,Cl(t,si(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;$e=1,Cl(t,si(a,t.current)),me=null;return}n.flags&32768?(xe||r===1?t=!0:nr||(_e&536870912)!==0?t=!1:(La=t=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Eg(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){Eg(n,La);return}t=n.return;var a=_x(n.alternate,n,ia);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);$e===0&&($e=5)}function Eg(t,n){do{var a=vx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);$e=6,me=null}function Tg(t,n,a,r,c,f,g,T,B){t.cancelPendingCommit=null;do Vl();while(hn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,gi(t,a,f,g,T,B),t===ke&&(me=ke=null,_e=0),ar=n,Fa=t,aa=a,xf=f,Sf=c,dg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dx(ht,function(){return wg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=I.p,I.p=2,g=Ue,Ue|=4;try{xx(t,n,a)}finally{Ue=g,I.p=c,N.T=r}}hn=1,bg(),Ag(),Rg()}}function bg(){if(hn===1){hn=0;var t=Fa,n=ar,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=I.p;I.p=2;var c=Ue;Ue|=4;try{sg(n,t);var f=Pf,g=fp(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&up(T.ownerDocument.documentElement,T)){if(B!==null&&su(T)){var nt=B.start,dt=B.end;if(dt===void 0&&(dt=nt),"selectionStart"in T)T.selectionStart=nt,T.selectionEnd=Math.min(dt,T.value.length);else{var _t=T.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var ut=st.getSelection(),kt=T.textContent.length,te=Math.min(B.start,kt),Ve=B.end===void 0?te:Math.min(B.end,kt);!ut.extend&&te>Ve&&(g=Ve,Ve=te,te=g);var Y=cp(T,te),V=cp(T,Ve);if(Y&&V&&(ut.rangeCount!==1||ut.anchorNode!==Y.node||ut.anchorOffset!==Y.offset||ut.focusNode!==V.node||ut.focusOffset!==V.offset)){var et=_t.createRange();et.setStart(Y.node,Y.offset),ut.removeAllRanges(),te>Ve?(ut.addRange(et),ut.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),ut.addRange(et))}}}}for(_t=[],ut=T;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var gt=_t[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}tc=!!Of,Pf=Of=null}finally{Ue=c,I.p=r,N.T=a}}t.current=n,hn=2}}function Ag(){if(hn===2){hn=0;var t=Fa,n=ar,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=I.p;I.p=2;var c=Ue;Ue|=4;try{tg(t,n.alternate,n)}finally{Ue=c,I.p=r,N.T=a}}hn=3}}function Rg(){if(hn===4||hn===3){hn=0,D();var t=Fa,n=ar,a=aa,r=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,ar=Fa=null,Cg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),Us(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=I.p,I.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var T=r[g];f(T.value,{componentStack:T.stack})}}finally{N.T=n,I.p=c}}(aa&3)!==0&&Vl(),Oi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Mf?vo++:(vo=0,Mf=t):vo=0,xo(0)}}function Cg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Vl(){return bg(),Ag(),Rg(),wg()}function wg(){if(hn!==5)return!1;var t=Fa,n=xf;xf=0;var a=Us(aa),r=N.T,c=I.p;try{I.p=32>a?32:a,N.T=null,a=Sf,Sf=null;var f=Fa,g=aa;if(hn=0,ar=Fa=null,aa=0,(Ue&6)!==0)throw Error(s(331));var T=Ue;if(Ue|=4,ug(f.current),og(f,f.current,g,a),Ue=T,xo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{I.p=c,N.T=r,Cg(t,n)}}function Dg(t,n,a){n=si(a,n),n=Ju(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(Cn(t,2),Oi(t))}function ze(t,n,a){if(t.tag===3)Dg(t,t,a);else for(;n!==null;){if(n.tag===3){Dg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){t=si(a,t),a=Um(2),r=wa(n,a,2),r!==null&&(Nm(a,r,n,t),Cn(r,2),Oi(r));break}}n=n.return}}function Tf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new yx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(gf=!0,c.add(a),t=Rx.bind(null,t,n,a),n.then(t,t))}function Rx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(_e&a)===a&&($e===4||$e===3&&(_e&62914560)===_e&&300>y()-Fl?(Ue&2)===0&&sr(t,0):_f|=a,ir===_e&&(ir=0)),Oi(t)}function Ug(t,n){n===0&&(n=Oe()),t=ss(t,n),t!==null&&(Cn(t,n),Oi(t))}function Cx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ug(t,a)}function wx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ug(t,a)}function Dx(t,n){return Me(t,n)}var kl=null,or=null,bf=!1,Xl=!1,Af=!1,Ba=0;function Oi(t){t!==or&&t.next===null&&(or===null?kl=or=t:or=or.next=t),Xl=!0,bf||(bf=!0,Nx())}function xo(t,n){if(!Af&&Xl){Af=!0;do for(var a=!1,r=kl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Pg(r,f))}else f=_e,f=vt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||wt(r,f)||(a=!0,Pg(r,f));r=r.next}while(a);Af=!1}}function Ux(){Ng()}function Ng(){Xl=bf=!1;var t=0;Ba!==0&&Vx()&&(t=Ba);for(var n=y(),a=null,r=kl;r!==null;){var c=r.next,f=Lg(r,n);f===0?(r.next=null,a===null?kl=c:a.next=c,c===null&&(or=a)):(a=r,(t!==0||(f&3)!==0)&&(Xl=!0)),r=c}hn!==0&&hn!==5||xo(t),Ba!==0&&(Ba=0)}function Lg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-zt(f),T=1<<g,B=c[g];B===-1?((T&a)===0||(T&r)!==0)&&(c[g]=ne(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=_e,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ne(r),Us(a)){case 2:case 8:a=xt;break;case 32:a=ht;break;case 268435456:a=Dt;break;default:a=ht}return r=Og.bind(null,t),a=Me(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ne(r),t.callbackPriority=2,t.callbackNode=null,2}function Og(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var r=_e;return r=vt(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(mg(t,r,n),Lg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Og.bind(null,t):null)}function Pg(t,n){if(Vl())return null;mg(t,n,!0)}function Nx(){Xx(function(){(Ue&6)!==0?Me(mt,Ux):Ng()})}function Rf(){if(Ba===0){var t=qs;t===0&&(t=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Ba=t}return Ba}function Fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jo(""+t)}function zg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Lx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Fg((c[_n]||null).action),g=r.submitter;g&&(n=(n=g[_n]||null)?Fg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new nl("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ba!==0){var B=g?zg(c,g):new FormData(c);qu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=g?zg(c,g):new FormData(c),qu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],Ox=wf.toLowerCase(),Px=wf[0].toUpperCase()+wf.slice(1);xi(Ox,"on"+Px)}xi(pp,"onAnimationEnd"),xi(mp,"onAnimationIteration"),xi(gp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Qv,"onTransitionRun"),xi(Jv,"onTransitionStart"),xi($v,"onTransitionCancel"),xi(_p,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var T=r[g],B=T.instance,nt=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=nt;try{f(c)}catch(dt){sl(dt)}c.currentTarget=null,f=B}else for(g=0;g<r.length;g++){if(T=r[g],B=T.instance,nt=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=nt;try{f(c)}catch(dt){sl(dt)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var r=t+"__bubble";a.has(r)||(Ig(n,t,2,!1),a.add(r))}function Df(t,n,a){var r=0;n&&(r|=4),Ig(a,t,r,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Uf(t){if(!t[Wl]){t[Wl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Df(a,!1,t),Df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Df("selectionchange",!1,n))}}function Ig(t,n,a,r){switch(p0(n)){case 2:var c=uS;break;case 8:c=fS;break;default:c=qf}a=c.bind(null,n,a,t),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Nf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var T=r.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=xa(T),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=f=g;continue t}T=T.parentNode}}r=r.return}Xd(function(){var nt=f,dt=jc(a),_t=[];t:{var st=vp.get(t);if(st!==void 0){var ut=nl,kt=t;switch(t){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":ut=wv;break;case"focusin":kt="focus",ut=tu;break;case"focusout":kt="blur",ut=tu;break;case"beforeblur":case"afterblur":ut=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Nv;break;case pp:case mp:case gp:ut=Sv;break;case _p:ut=Ov;break;case"scroll":case"scrollend":ut=mv;break;case"wheel":ut=Fv;break;case"copy":case"cut":case"paste":ut=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Zd;break;case"toggle":case"beforetoggle":ut=Bv}var te=(n&4)!==0,Ve=!te&&(t==="scroll"||t==="scrollend"),Y=te?st!==null?st+"Capture":null:st;te=[];for(var V=nt,et;V!==null;){var gt=V;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||Y===null||(gt=Gr(V,Y),gt!=null&&te.push(Mo(V,gt,et))),Ve)break;V=V.return}0<te.length&&(st=new ut(st,kt,null,a,dt),_t.push({event:st,listeners:te}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",st&&a!==Yc&&(kt=a.relatedTarget||a.fromElement)&&(xa(kt)||kt[_i]))break t;if((ut||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(kt=a.relatedTarget||a.toElement,ut=nt,kt=kt?xa(kt):null,kt!==null&&(Ve=u(kt),te=kt.tag,kt!==Ve||te!==5&&te!==27&&te!==6)&&(kt=null)):(ut=null,kt=nt),ut!==kt)){if(te=Yd,gt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=Zd,gt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ve=ut==null?st:es(ut),et=kt==null?st:es(kt),st=new te(gt,V+"leave",ut,a,dt),st.target=Ve,st.relatedTarget=et,gt=null,xa(dt)===nt&&(te=new te(Y,V+"enter",kt,a,dt),te.target=et,te.relatedTarget=Ve,gt=te),Ve=gt,ut&&kt)e:{for(te=zx,Y=ut,V=kt,et=0,gt=Y;gt;gt=te(gt))et++;gt=0;for(var Qt=V;Qt;Qt=te(Qt))gt++;for(;0<et-gt;)Y=te(Y),et--;for(;0<gt-et;)V=te(V),gt--;for(;et--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;ut!==null&&Hg(_t,st,ut,te,!1),kt!==null&&Ve!==null&&Hg(_t,Ve,kt,te,!0)}}t:{if(st=nt?es(nt):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var Ae=ip;else if(ep(st))if(ap)Ae=jv;else{Ae=qv;var jt=Wv}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&vi(nt.elementType)&&(Ae=ip):Ae=Yv;if(Ae&&(Ae=Ae(t,nt))){np(_t,Ae,a,dt);break t}jt&&jt(t,st,nt),t==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&xn(st,"number",st.value)}switch(jt=nt?es(nt):window,t){case"focusin":(ep(jt)||jt.contentEditable==="true")&&(Bs=jt,ru=nt,Zr=null);break;case"focusout":Zr=ru=Bs=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,hp(_t,a,dt);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":hp(_t,a,dt)}var he;if(nu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else zs?$d(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Kd&&a.locale!=="ko"&&(zs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&zs&&(he=Wd()):(ya=dt,Qc="value"in ya?ya.value:ya.textContent,zs=!0)),jt=ql(nt,ve),0<jt.length&&(ve=new jd(ve,t,null,a,dt),_t.push({event:ve,listeners:jt}),he?ve.data=he:(he=tp(a),he!==null&&(ve.data=he)))),(he=Hv?Gv(t,a):Vv(t,a))&&(ve=ql(nt,"onBeforeInput"),0<ve.length&&(jt=new jd("onBeforeInput","beforeinput",null,a,dt),_t.push({event:jt,listeners:ve}),jt.data=he)),Lx(_t,t,nt,a,dt)}Bg(_t,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&r.unshift(Mo(t,c,f)),c=Gr(t,n),c!=null&&r.push(Mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hg(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var T=a,B=T.alternate,nt=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||nt===null||(B=nt,c?(nt=Gr(a,f),nt!=null&&g.unshift(Mo(a,nt,B))):c||(nt=Gr(a,f),nt!=null&&g.push(Mo(a,nt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Bx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(Bx,`
`).replace(Ix,"")}function Vg(t,n){return n=Gg(n),Gg(t)===n}function Ge(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||fn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&fn(t,""+r);break;case"className":Jt(t,"class",r);break;case"tabIndex":Jt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,r);break;case"style":Os(t,r,f);break;case"data":if(n!=="object"){Jt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Jo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Jo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ki);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Jo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Wt(t,"popover",r);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,Wt(t,a,r))}}function Lf(t,n,a,r,c,f){switch(a){case"style":Os(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?fn(t,r):(typeof r=="number"||typeof r=="bigint")&&fn(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Wt(t,a,r)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,f,g,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=g=c=null,B=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ge(t,n,r,dt,a,null)}}Vi(t,f,T,B,nt,g,c,!1);return;case"select":ge("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":r=T;default:Ge(t,n,c,T,a,null)}n=f,a=g,t.multiple=!!r,n!=null?ii(t,!!r,n,!1):a!=null&&ii(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ge(t,n,g,T,a,null)}Sn(t,r,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,B,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)ge(So[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,nt,r,a,null)}return;default:if(vi(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Lf(t,n,dt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ge(t,n,T,r,a,null))}function Hx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,B=null,nt=null,dt=null;for(ut in a){var _t=a[ut];if(a.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=_t;default:r.hasOwnProperty(ut)||Ge(t,n,ut,null,r,_t)}}for(var st in r){var ut=r[st];if(_t=a[st],r.hasOwnProperty(st)&&(ut!=null||_t!=null))switch(st){case"type":f=ut;break;case"name":c=ut;break;case"checked":nt=ut;break;case"defaultChecked":dt=ut;break;case"value":g=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==_t&&Ge(t,n,st,ut,r,_t)}}vn(t,g,T,B,nt,dt,f,c);return;case"select":ut=g=T=st=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:r.hasOwnProperty(f)||Ge(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":st=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==B&&Ge(t,n,c,f,r,B)}n=T,a=g,r=ut,st!=null?ii(t,!!a,st,!1):!!r!=!!a&&(n!=null?ii(t,!!a,n,!0):ii(t,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(t,n,T,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":st=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ge(t,n,g,c,r,f)}Pe(t,st,ut);return;case"option":for(var kt in a)st=a[kt],a.hasOwnProperty(kt)&&st!=null&&!r.hasOwnProperty(kt)&&(kt==="selected"?t.selected=!1:Ge(t,n,kt,null,r,st));for(B in r)st=r[B],ut=a[B],r.hasOwnProperty(B)&&st!==ut&&(st!=null||ut!=null)&&(B==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":Ge(t,n,B,st,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)st=a[te],a.hasOwnProperty(te)&&st!=null&&!r.hasOwnProperty(te)&&Ge(t,n,te,null,r,st);for(nt in r)if(st=r[nt],ut=a[nt],r.hasOwnProperty(nt)&&st!==ut&&(st!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ge(t,n,nt,st,r,ut)}return;default:if(vi(n)){for(var Ve in a)st=a[Ve],a.hasOwnProperty(Ve)&&st!==void 0&&!r.hasOwnProperty(Ve)&&Lf(t,n,Ve,void 0,r,st);for(dt in r)st=r[dt],ut=a[dt],!r.hasOwnProperty(dt)||st===ut||st===void 0&&ut===void 0||Lf(t,n,dt,st,r,ut);return}}for(var Y in a)st=a[Y],a.hasOwnProperty(Y)&&st!=null&&!r.hasOwnProperty(Y)&&Ge(t,n,Y,null,r,st);for(_t in r)st=r[_t],ut=a[_t],!r.hasOwnProperty(_t)||st===ut||st==null&&ut==null||Ge(t,n,_t,st,r,ut)}function kg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&kg(g)){for(g=0,T=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],nt=B.startTime;if(nt>T)break;var dt=B.transferSize,_t=B.initiatorType;dt&&kg(_t)&&(B=B.responseEnd,g+=dt*(B<T?1:(T-nt)/(B-nt)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Of=null,Pf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function Xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Vx(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(t){return Yg.resolve(null).then(t).catch(Wx)}:qg;function Wx(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function jg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),fr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[ts]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);fr(n)}function Zg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ts])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Yx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function If(t){return t.data==="$?"||t.data==="$~"}function Hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gf=null;function Qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function $g(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hr(t)}var fi=new Map,t0=new Set;function jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=I.d;I.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:tS,X:nS,S:eS,M:iS};function Zx(){var t=sa.f(),n=Il();return t||n}function Kx(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?_m(n):sa.r(t)}var lr=typeof document>"u"?null:document;function e0(t,n,a){var r=lr;if(r&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),t0.has(c)||(t0.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),An(n,"link",t),b(n),r.head.appendChild(n)))}}function Qx(t){sa.D(t),e0("dns-prefetch",t,null)}function Jx(t,n){sa.C(t,n),e0("preconnect",t,n)}function $x(t,n,a){sa.L(t,n,a);var r=lr;if(r&&t&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(t)+'"]';var f=c;switch(n){case"style":f=cr(t);break;case"script":f=ur(t)}fi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),An(n,"link",t),b(n),r.head.appendChild(n)))}}function tS(t,n){sa.m(t,n);var a=lr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ur(t)}if(!fi.has(f)&&(t=v({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),An(r,"link",t),b(r),a.head.appendChild(r)}}}function eS(t,n,a){sa.S(t,n,a);var r=lr;if(r&&t){var c=Ma(r).hoistableStyles,f=cr(t);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=r.querySelector(Eo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Vf(t,a);var B=g=r.createElement("link");b(B),An(B,"link",t),B._p=new Promise(function(nt,dt){B.onload=nt,B.onerror=dt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function nS(t,n){sa.X(t,n);var a=lr;if(a&&t){var r=Ma(a).hoistableScripts,c=ur(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=v({src:t,async:!0},n),(n=fi.get(c))&&kf(t,n),f=a.createElement("script"),b(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function iS(t,n){sa.M(t,n);var a=lr;if(a&&t){var r=Ma(a).hoistableScripts,c=ur(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&kf(t,n),f=a.createElement("script"),b(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function n0(t,n,a,r){var c=(c=J.current)?jl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=Ma(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cr(a.href);var f=Ma(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||aS(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=Ma(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function cr(t){return'href="'+se(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function i0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function aS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),An(n,"link",a),b(n),t.head.appendChild(n))}function ur(t){return'[src="'+se(t)+'"]'}function To(t){return"script[async]"+t}function a0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,b(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),b(r),An(r,"style",c),Zl(r,a.precedence,t),n.instance=r;case"stylesheet":c=cr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,b(f),f;r=i0(a),(c=fi.get(c))&&Vf(r,c),f=(t.ownerDocument||t).createElement("link"),b(f);var g=f;return g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),An(f,"link",r),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=ur(a.src),(c=t.querySelector(To(f)))?(n.instance=c,b(c),c):(r=a,(c=fi.get(f))&&(r=v({},a),kf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),b(c),An(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Zl(r,a.precedence,t));return n.instance}function Zl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var T=r[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function s0(t,n,a){if(Kl===null){var r=new Map,c=Kl=new Map;c.set(a,r)}else c=Kl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ts]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=r.get(g);T?T.push(f):r.set(g,[f])}}return r}function r0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function sS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=cr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,r=i0(r),(c=fi.get(c))&&Vf(r,c),f=f.createElement("link"),b(f);var g=f;g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),An(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function oS(t,n){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*Gx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(lS,t),Jl=null,Ql.call(t))}function lS(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var r=a.get(null);else{a=new Map,Jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Ql.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function cS(t,n,a,r,c,f,g,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function l0(t,n,a,r,c,f,g,T,B,nt,dt,_t){return t=new cS(t,n,a,g,B,nt,dt,_t,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=yu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),t}function c0(t){return t?(t=Gs,t):Gs}function u0(t,n,a,r,c,f){c=c0(c),r.context===null?r.context=c:r.pendingContext=c,r=Ca(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=wa(t,r,n),a!==null&&(Vn(a,t,n),no(a,t,n))}function f0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Wf(t,n){f0(t,n),(t=t.alternate)&&f0(t,n)}function h0(t){if(t.tag===13||t.tag===31){var n=ss(t,67108864);n!==null&&Vn(n,t,67108864),Wf(t,67108864)}}function d0(t){if(t.tag===13||t.tag===31){var n=Qn();n=zr(n);var a=ss(t,n);a!==null&&Vn(a,t,n),Wf(t,n)}}var tc=!0;function uS(t,n,a,r){var c=N.T;N.T=null;var f=I.p;try{I.p=2,qf(t,n,a,r)}finally{I.p=f,N.T=c}}function fS(t,n,a,r){var c=N.T;N.T=null;var f=I.p;try{I.p=8,qf(t,n,a,r)}finally{I.p=f,N.T=c}}function qf(t,n,a,r){if(tc){var c=Yf(r);if(c===null)Nf(t,n,r,ec,a),m0(t,r);else if(dS(c,t,n,a,r))r.stopPropagation();else if(m0(t,r),n&4&&-1<hS.indexOf(t)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var B=1<<31-zt(g);T.entanglements[1]|=B,g&=~B}Oi(f),(Ue&6)===0&&(zl=y()+500,xo(0))}}break;case 31:case 13:T=ss(f,2),T!==null&&Vn(T,f,2),Il(),Wf(f,2)}if(f=Yf(r),f===null&&Nf(t,n,r,ec,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Nf(t,n,r,null,a)}}function Yf(t){return t=jc(t),jf(t)}var ec=null;function jf(t){if(ec=null,t=xa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ec=t,null}function p0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case mt:return 2;case xt:return 8;case ht:case Zt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Zf=!1,Ha=null,Ga=null,Va=null,Ao=new Map,Ro=new Map,ka=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&h0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function dS(t,n,a,r,c){switch(n){case"focusin":return Ha=Co(Ha,t,n,a,r,c),!0;case"dragenter":return Ga=Co(Ga,t,n,a,r,c),!0;case"mouseover":return Va=Co(Va,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,r,c)),!0}return!1}function g0(t){var n=xa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Di(t.priority,function(){d0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){d0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=Sa(a),n!==null&&h0(n),t.blockedOn=a,!1;n.shift()}return!0}function _0(t,n,a){nc(t)&&a.delete(n)}function pS(){Zf=!1,Ha!==null&&nc(Ha)&&(Ha=null),Ga!==null&&nc(Ga)&&(Ga=null),Va!==null&&nc(Va)&&(Va=null),Ao.forEach(_0),Ro.forEach(_0)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pS)))}var ac=null;function v0(t){ac!==t&&(ac=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function fr(t){function n(B){return ic(B,t)}Ha!==null&&ic(Ha,t),Ga!==null&&ic(Ga,t),Va!==null&&ic(Va,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<ka.length;a++){var r=ka[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)g0(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[_n]||null;if(typeof f=="function")g||v0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)T=g.formAction;else if(jf(c)!==null)continue}else T=g.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),v0(a)}}}function x0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(t){this._internalRoot=t}sc.prototype.render=Kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();u0(a,r,t,n,null,null)},sc.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;u0(t.current,2,null,t,null,null),Il(),n[_i]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Br();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&g0(t)}};var S0=e.version;if(S0!=="19.2.4")throw Error(s(527,S0,"19.2.4"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var mS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Et=rc.inject(mS),bt=rc}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Rm,f=Cm,g=wm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=l0(t,1,!1,null,null,a,r,null,c,f,g,x0),t[_i]=n.current,Uf(t),new Kf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Rm,g=Cm,T=wm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=l0(t,1,!0,n,a??null,r,c,B,f,g,T,x0),n.context=c0(null),a=n.current,r=Qn(),r=zr(r),c=Ca(r),c.callback=null,wa(a,c,r),a=r,n.current.lanes=a,Cn(n,a),Oi(n),t[_i]=n.current,Uf(t),new sc(n)},Do.version="19.2.4",Do}var D0;function AS(){if(D0)return $f.exports;D0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=bS(),$f.exports}var RS=AS();const CS=_S(RS);function wS(){const[o,e]=Ai.useState(!1),[i,s]=Ai.useState(!1);return Ai.useEffect(()=>{const l=()=>s(window.scrollY>50);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),j.jsxs("nav",{className:i?"scrolled":"",children:[j.jsx("a",{href:"#",className:"logo cursor-clickable",children:"RM."}),j.jsxs("button",{className:"mobile-menu-btn",onClick:()=>e(!o),"aria-label":"Toggle menu",children:[j.jsx("span",{}),j.jsx("span",{})]}),j.jsxs("ul",{className:`nav-links ${o?"open":""}`,children:[j.jsx("li",{children:j.jsx("a",{href:"#exp",className:"cursor-clickable",onClick:()=>e(!1),children:"Experience"})}),j.jsx("li",{children:j.jsx("a",{href:"#projects",className:"cursor-clickable",onClick:()=>e(!1),children:"Projects"})}),j.jsx("li",{children:j.jsx("a",{href:"#skills",className:"cursor-clickable",onClick:()=>e(!1),children:"Skills"})}),j.jsx("li",{children:j.jsx("a",{href:"#art",className:"cursor-clickable",onClick:()=>e(!1),children:"Art"})})]})]})}function DS(){return j.jsx("section",{className:"hero",children:j.jsxs("div",{className:"hero-container",children:[j.jsxs("div",{className:"hero-content",children:[j.jsx("span",{className:"hero-label",children:"Computer Science Student & Developer"}),j.jsxs("h1",{className:"hero-title",children:["MD RAHBIR",j.jsx("br",{}),j.jsx("span",{className:"hero-title-accent",children:"MAHDI"})]}),j.jsx("p",{className:"hero-subtitle",children:"Full-stack developer focused on building impactful applications. Currently looking for internships while pursuing CS at York University."}),j.jsxs("div",{className:"hero-meta",children:[j.jsxs("div",{className:"meta-item",children:[j.jsx("span",{className:"meta-label",children:"Email"}),j.jsx("a",{href:"mailto:rahbir1518@gmail.com",className:"meta-value cursor-clickable",children:"rahbir1518@gmail.com"})]}),j.jsxs("div",{className:"meta-item",children:[j.jsx("span",{className:"meta-label",children:"Location"}),j.jsx("span",{className:"meta-value",children:"Toronto, ON"})]}),j.jsxs("div",{className:"meta-item",children:[j.jsx("span",{className:"meta-label",children:"Status"}),j.jsx("span",{className:"meta-value",style:{color:"var(--accent)"},children:"● Available"})]})]})]}),j.jsxs("div",{className:"hero-sectors",children:[j.jsx("a",{href:"#exp",className:"sector-link cursor-clickable",children:"Experience"}),j.jsx("a",{href:"#projects",className:"sector-link cursor-clickable",children:"Projects"}),j.jsx("a",{href:"#skills",className:"sector-link cursor-clickable",children:"Skills"}),j.jsx("a",{href:"#art",className:"sector-link cursor-clickable",children:"Art"})]})]})})}function US(){return j.jsx("div",{className:"marquee-container",children:j.jsxs("div",{className:"marquee-content",children:[j.jsx("span",{className:"marquee-item",children:"SECTOR 01 — ABOUT"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 02 — EXPERIENCE"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 03 — PROJECTS"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 04 — SKILLS"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 05 — ART"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 01 — ABOUT"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 02 — EXPERIENCE"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 03 — PROJECTS"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 04 — SKILLS"}),j.jsx("span",{className:"marquee-item",children:"SECTOR 05 — ART"})]})})}function NS(){return j.jsx("section",{id:"exp",className:"experience-section",children:j.jsxs("div",{className:"section-container",children:[j.jsxs("div",{className:"section-header",children:[j.jsx("div",{className:"section-number",children:"02"}),j.jsxs("div",{className:"section-title-block",children:[j.jsx("h2",{children:"Experience"}),j.jsx("p",{children:"Building software that serves communities and scales impact"})]})]}),j.jsxs("div",{className:"experience-list",children:[j.jsxs("div",{className:"experience-card cursor-hover",children:[j.jsx("div",{className:"exp-date",children:"Jul 2025 – Aug 2025"}),j.jsxs("div",{className:"exp-content",children:[j.jsx("h3",{children:"Software Developer Intern"}),j.jsx("div",{className:"exp-company",children:"Islamic Center of Markham — Toronto, ON"}),j.jsxs("ul",{className:"exp-points",children:[j.jsx("li",{children:"Developed community-facing mobile app serving 1,000+ members using React Native (Expo) with real-time announcements and prayer schedules"}),j.jsx("li",{children:"Implemented push notifications via OneSignal and live data syncing with Supabase"}),j.jsx("li",{children:"Engineered full-stack Volunteer Scheduling platform using React.js and Supabase for 250+ volunteers"}),j.jsx("li",{children:"Integrated secure Supabase Auth with PostgreSQL and role-based access control"}),j.jsx("li",{children:"Created scalable RESTful APIs, automated volunteer onboarding workflows, and responsive layouts for use across desktop and mobile."})]})]})]}),j.jsxs("div",{className:"experience-card cursor-hover",children:[j.jsx("div",{className:"exp-date",children:"Apr 2025 – Present"}),j.jsxs("div",{className:"exp-content",children:[j.jsx("h3",{children:"Freelance Web Developer"}),j.jsx("div",{className:"exp-company",children:"Independent — Remote"}),j.jsxs("ul",{className:"exp-points",children:[j.jsx("li",{children:"Built responsive websites with React, Next.js and Tailwind CSS resulting in 3x traffic increase and 25% mailing list growth"}),j.jsx("li",{children:"Implemented automated testing with Jest and Postman, reducing bugs by 60%"}),j.jsx("li",{children:"Streamlined CI/CD via GitHub Actions, reducing release time by 900s"})]})]})]})]})]})})}function LS(){const o=[{title:"Vroomi",badge:"3rd Place",description:"Ride-sharing app with geolocation-based cost-splitting. Features route optimization using Travelling Postman Problem algorithms.",tags:["React","TypeScript","Supabase","Stripe"],link:"https://devpost.com/software/vroomi",image:"images/vroomi.jpg"},{title:"Mimicoo",badge:"6th Place",description:"Infant babble analysis tool using MediaPipe and Librosa. Features Gemini API integration for speech disorder risk analysis.",tags:["Python","MediaPipe","Gemini API","FastAPI"],link:"https://devpost.com/software/mimicoo",image:"images/mimicoo.jpg"},{title:"Nervy",badge:"Hackathon Project",description:"AI behavioral interview coach delivering real-time video feedback on eye contact, posture, and confidence via MediaPipe/OpenCV.",tags:["FastAPI","MediaPipe","OpenCV","Gemini API","WebSockets"],link:"https://devpost.com/software/nervy",image:"images/nervy.jpg"}];return j.jsx("section",{id:"projects",style:{background:"var(--bg-secondary)"},children:j.jsxs("div",{className:"section-container",children:[j.jsxs("div",{className:"section-header",children:[j.jsx("div",{className:"section-number",children:"03"}),j.jsxs("div",{className:"section-title-block",children:[j.jsx("h2",{children:"Hackathons"}),j.jsx("p",{children:"Building under pressure, winning with innovation"})]})]}),j.jsx("div",{className:"projects-grid",children:o.map((e,i)=>j.jsxs("a",{href:e.link,target:"_blank",className:"project-card cursor-clickable",style:{textDecoration:"none",color:"inherit"},children:[j.jsxs("div",{className:"project-image-wrapper",children:[j.jsx("img",{src:e.image,alt:`${e.title} screenshot`,className:"project-image",loading:"lazy"}),j.jsx("div",{className:"project-image-overlay"})]}),j.jsxs("div",{className:"project-content",children:[j.jsxs("div",{className:"project-header",children:[j.jsx("h3",{className:"project-title",children:e.title}),j.jsx("span",{className:"project-badge",children:e.badge})]}),j.jsx("p",{className:"project-desc",children:e.description}),j.jsx("div",{className:"project-tags",children:e.tags.map((s,l)=>j.jsx("span",{className:"tag",children:s},l))})]})]},i))})]})})}function OS(){return j.jsx("section",{id:"skills",children:j.jsxs("div",{className:"section-container",children:[j.jsxs("div",{className:"section-header",children:[j.jsx("div",{className:"section-number",children:"04"}),j.jsxs("div",{className:"section-title-block",children:[j.jsx("h2",{children:"Toolkit"}),j.jsx("p",{children:"Technologies & tools I work with"})]})]}),j.jsxs("div",{className:"skills-grid",children:[j.jsxs("div",{className:"skill-block",children:[j.jsx("h3",{className:"skill-title",children:"Languages"}),j.jsxs("div",{className:"skill-items",children:[j.jsx("span",{className:"skill-tag",children:"Java"}),j.jsx("span",{className:"skill-tag",children:"Python"}),j.jsx("span",{className:"skill-tag",children:"C/C++"}),j.jsx("span",{className:"skill-tag",children:"JavaScript"}),j.jsx("span",{className:"skill-tag",children:"HTML/CSS"}),j.jsx("span",{className:"skill-tag",children:"R"})]})]}),j.jsxs("div",{className:"skill-block",children:[j.jsx("h3",{className:"skill-title",style:{color:"var(--coffee-light)"},children:"Frameworks"}),j.jsxs("div",{className:"skill-items",children:[j.jsx("span",{className:"skill-tag",children:"ReactJS"}),j.jsx("span",{className:"skill-tag",children:"React Native"}),j.jsx("span",{className:"skill-tag",children:"Next.js"}),j.jsx("span",{className:"skill-tag",children:"Three.js"}),j.jsx("span",{className:"skill-tag",children:"Tailwind CSS"}),j.jsx("span",{className:"skill-tag",children:"MediaPipe"}),j.jsx("span",{className:"skill-tag",children:"OpenCV"}),j.jsx("span",{className:"skill-tag",children:"TensorFlow"})]})]}),j.jsxs("div",{className:"skill-block",children:[j.jsx("h3",{className:"skill-title",style:{color:"var(--cream-muted)"},children:"Tools"}),j.jsxs("div",{className:"skill-items",children:[j.jsx("span",{className:"skill-tag",children:"Git"}),j.jsx("span",{className:"skill-tag",children:"Supabase"}),j.jsx("span",{className:"skill-tag",children:"MongoDB"}),j.jsx("span",{className:"skill-tag",children:"Google Cloud"}),j.jsx("span",{className:"skill-tag",children:"Firebase"}),j.jsx("span",{className:"skill-tag",children:"VS Code"}),j.jsx("span",{className:"skill-tag",children:"Figma"}),j.jsx("span",{className:"skill-tag",children:"GitHub Actions"})]})]})]})]})})}function PS(){const o=[{id:1,src:"images/cat.png",title:"Rainy Night",span:"wide"},{id:2,src:"images/guitar.jpg",title:"Nostalgia"},{id:3,src:"images/lantern.jpg",title:"Lantern Light"},{id:4,src:"images/railroad.jpg",title:"The Crossing"},{id:5,src:"images/violin.jpg",title:"Melody"}];return j.jsx("section",{id:"art",className:"art-section",children:j.jsxs("div",{className:"section-container",children:[j.jsxs("div",{className:"art-header-center",children:[j.jsx("p",{className:"art-pretitle",children:"Hey, I also draw in my spare time"}),j.jsx("h2",{className:"art-title",children:"Visual Arts"})]}),j.jsx("div",{className:"art-grid-masonry",children:o.map(e=>j.jsxs("div",{className:`art-item cursor-hover ${e.span||""}`,children:[j.jsx("img",{src:e.src,alt:e.title,className:"art-image",loading:"lazy"}),j.jsx("div",{className:"art-overlay",children:j.jsx("span",{className:"art-caption",children:e.title})})]},e.id))})]})})}function FS(){return j.jsx("footer",{children:j.jsxs("div",{className:"footer-content",children:[j.jsx("h2",{className:"footer-title",children:"Let's create something together"}),j.jsx("p",{className:"footer-text",children:"Open for opportunities in software development, hackathons, and creative collaborations."}),j.jsx("a",{href:"mailto:rahbir1518@gmail.com",className:"footer-cta cursor-clickable",children:"Get in Touch"}),j.jsxs("div",{className:"footer-links",children:[j.jsx("a",{href:"https://www.linkedin.com/in/rahbirmahdi/",target:"_blank",className:"cursor-clickable",children:"LinkedIn"}),j.jsx("a",{href:"https://github.com/Rahbir1518",target:"_blank",className:"cursor-clickable",children:"GitHub"}),j.jsx("a",{href:"https://devpost.com/Rahbir1518?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",target:"_blank",className:"cursor-clickable",children:"Devpost"}),j.jsx("a",{href:"/resume.pdf",download:"Md_Rahbir_Mahdi_Resume.pdf",className:"cursor-clickable",children:"Resume"})]})]})})}const Nd="182",zS=0,U0=1,BS=2,Nc=1,IS=2,Io=3,$a=0,Xn=1,fa=2,da=0,Ar=1,Ph=2,N0=3,L0=4,HS=5,bs=100,GS=101,VS=102,kS=103,XS=104,WS=200,qS=201,YS=202,jS=203,Fh=204,zh=205,ZS=206,KS=207,QS=208,JS=209,$S=210,tM=211,eM=212,nM=213,iM=214,Bh=0,Ih=1,Hh=2,Cr=3,Gh=4,Vh=5,kh=6,Xh=7,U_=0,aM=1,sM=2,Ii=0,N_=1,L_=2,O_=3,P_=4,F_=5,z_=6,B_=7,I_=300,ws=301,wr=302,Wh=303,qh=304,kc=306,Yh=1e3,ha=1001,jh=1002,Rn=1003,rM=1004,oc=1005,Nn=1006,ih=1007,Rs=1008,mi=1009,H_=1010,G_=1011,Go=1012,Ld=1013,Gi=1014,zi=1015,ma=1016,Od=1017,Pd=1018,Vo=1020,V_=35902,k_=35899,X_=1021,W_=1022,Ri=1023,ga=1026,Cs=1027,q_=1028,Fd=1029,Dr=1030,zd=1031,Bd=1033,Lc=33776,Oc=33777,Pc=33778,Fc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37488,id=37489,ad=37490,sd=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,xd=37821,Sd=36492,Md=36494,yd=36495,Ed=36283,Td=36284,bd=36285,Ad=36286,oM=3200,lM=0,cM=1,Qa="",di="srgb",Ur="srgb-linear",Bc="linear",Be="srgb",hr=7680,O0=519,uM=512,fM=513,hM=514,Id=515,dM=516,pM=517,Hd=518,mM=519,P0=35044,F0="300 es",Bi=2e3,Ic=2001;function Y_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gM(){const o=Hc("canvas");return o.style.display="block",o}const z0={};function B0(...o){const e="THREE."+o.shift();console.log(e,...o)}function ie(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ce(...o){const e="THREE."+o.shift();console.error(e,...o)}function ko(...o){const e=o.join(" ");e in z0||(z0[e]=!0,ie(...o))}function _M(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Lr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Rd=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function vM(o,e){return(o%e+e)%e}function sh(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,i=0){Ie.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],S=u[h+0],E=u[h+1],A=u[h+2],C=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=A,e[i+3]=C;return}if(v!==C||m!==S||p!==E||_!==A){let M=m*S+p*E+_*A+v*C;M<0&&(S=-S,E=-E,A=-A,C=-C,M=-M);let x=1-d;if(M<.9995){const F=Math.acos(M),P=Math.sin(F);x=Math.sin(x*F)/P,d=Math.sin(d*F)/P,m=m*x+S*d,p=p*x+E*d,_=_*x+A*d,v=v*x+C*d}else{m=m*x+S*d,p=p*x+E*d,_=_*x+A*d,v=v*x+C*d;const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],S=u[h+1],E=u[h+2],A=u[h+3];return e[i]=d*A+_*v+m*E-p*S,e[i+1]=m*A+_*S+p*v-d*E,e[i+2]=p*A+_*E+d*S-m*v,e[i+3]=_*A-d*v-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),S=m(s/2),E=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*_*v+p*E*A,this._y=p*E*v-S*_*A,this._z=p*_*A+S*E*v,this._w=p*_*v-S*E*A;break;case"YXZ":this._x=S*_*v+p*E*A,this._y=p*E*v-S*_*A,this._z=p*_*A-S*E*v,this._w=p*_*v+S*E*A;break;case"ZXY":this._x=S*_*v-p*E*A,this._y=p*E*v+S*_*A,this._z=p*_*A+S*E*v,this._w=p*_*v-S*E*A;break;case"ZYX":this._x=S*_*v-p*E*A,this._y=p*E*v+S*_*A,this._z=p*_*A-S*E*v,this._w=p*_*v+S*E*A;break;case"YZX":this._x=S*_*v+p*E*A,this._y=p*E*v+S*_*A,this._z=p*_*A-S*E*v,this._w=p*_*v-S*E*A;break;case"XZY":this._x=S*_*v-p*E*A,this._y=p*E*v-S*_*A,this._z=p*_*A+S*E*v,this._w=p*_*v+S*E*A;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(s>d&&s>v){const E=2*Math.sqrt(1+s-d-v);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-s-v);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+v-s-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,s=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(I0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new rt,I0=new qo;class de{constructor(e,i,s,l,u,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],E=s[5],A=s[8],C=l[0],M=l[3],x=l[6],F=l[1],P=l[4],O=l[7],z=l[2],H=l[5],L=l[8];return u[0]=h*C+d*F+m*z,u[3]=h*M+d*P+m*H,u[6]=h*x+d*O+m*L,u[1]=p*C+_*F+v*z,u[4]=p*M+_*P+v*H,u[7]=p*x+_*O+v*L,u[2]=S*C+E*F+A*z,u[5]=S*M+E*P+A*H,u[8]=S*x+E*O+A*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,S=d*m-_*u,E=p*u-h*m,A=i*v+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*p-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=E*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(oh.makeScale(e,i)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,i){return this.premultiply(oh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new de,H0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const o={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Rr(l.r),l.g=Rr(l.g),l.b=Rr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ur]:{primaries:e,whitePoint:s,transfer:Bc,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const be=xM();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let dr;class SM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{dr===void 0&&(dr=Hc("canvas")),dr.width=e.width,dr.height=e.height;const l=dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Hc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=pa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(lh(l[h].image)):u.push(lh(l[h]))}else u=lh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function lh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let yM=0;const ch=new rt;class Pn extends Lr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ha,l=ha,u=Nn,h=Rs,d=Ri,m=mi,p=Pn.DEFAULT_ANISOTROPY,_=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Wo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ha:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ha:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=I_;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],S=m[1],E=m[5],A=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,O=(E+1)/2,z=(x+1)/2,H=(_+S)/4,L=(v+C)/4,$=(A+M)/4;return P>O&&P>z?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=H/s,u=L/s):O>z?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=H/l,u=$/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=L/u,l=$/u),this.set(s,l,u,i),this}let F=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(S-_)*(S-_));return Math.abs(F)<.001&&(F=1),this.x=(M-A)/F,this.y=(v-C)/F,this.z=(S-_)/F,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends Lr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new Pn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends EM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class j_ extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),cc.subVectors(this.max,No),pr.subVectors(e.a,No),mr.subVectors(e.b,No),gr.subVectors(e.c,No),Wa.subVectors(mr,pr),qa.subVectors(gr,mr),vs.subVectors(pr,gr);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vs.z,vs.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vs.z,0,-vs.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vs.y,vs.x,0];return!uh(i,pr,mr,gr,cc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,pr,mr,gr,cc))?!1:(uc.crossVectors(Wa,qa),i=[uc.x,uc.y,uc.z],uh(i,pr,mr,gr,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],yi=new rt,lc=new Yo,pr=new rt,mr=new rt,gr=new rt,Wa=new rt,qa=new rt,vs=new rt,No=new rt,cc=new rt,uc=new rt,xs=new rt;function uh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){xs.fromArray(o,u);const d=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),m=e.dot(xs),p=i.dot(xs),_=s.dot(xs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const bM=new Yo,Lo=new rt,fh=new rt;class jo{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):bM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(fh)),this.expandByPoint(Lo.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new rt,hh=new rt,fc=new rt,Ya=new rt,dh=new rt,hc=new rt,ph=new rt;class Vd{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){hh.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(hh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(fc),d=Ya.dot(this.direction),m=-Ya.dot(fc),p=Ya.lengthSq(),_=Math.abs(1-h*h);let v,S,E,A;if(_>0)if(v=h*m-d,S=h*d-m,A=u*_,v>=0)if(S>=-A)if(S<=A){const C=1/_;v*=C,S*=C,E=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;else S<=-A?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),E=-v*v+S*(S+2*m)+p):S<=A?(v=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),E=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(hh).addScaledVector(fc,S),E}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,s,l,u){dh.subVectors(i,e),hc.subVectors(s,e),ph.crossVectors(dh,hc);let h=this.direction.dot(ph),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,e);const m=d*this.direction.dot(hc.crossVectors(Ya,hc));if(m<0)return null;const p=d*this.direction.dot(dh.cross(Ya));if(p<0||m+p>h)return null;const _=-d*Ya.dot(ph);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,u,h,d,m,p,_,v,S,E,A,C,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,_,v,S,E,A,C,M)}set(e,i,s,l,u,h,d,m,p,_,v,S,E,A,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=S,x[3]=E,x[7]=A,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),u=1/_r.setFromMatrixColumn(e,1).length(),h=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*_,E=h*v,A=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,E=m*v,A=p*_,C=p*v;i[0]=S+C*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=E*d-A,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,E=m*v,A=p*_,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,E=h*v,A=d*_,C=d*v;i[0]=m*_,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=C-S*v,i[8]=A*v+E,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*v+A,i[10]=S-C*v}else if(e.order==="XZY"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+C,i[5]=h*_,i[9]=E*v-A,i[2]=A*v-E,i[6]=d*_,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AM,e,RM)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(s,Jn),ja.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(s,Jn)),ja.normalize(),dc.crossVectors(Jn,ja),l[0]=ja.x,l[4]=dc.x,l[8]=Jn.x,l[1]=ja.y,l[5]=dc.y,l[9]=Jn.y,l[2]=ja.z,l[6]=dc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],E=s[13],A=s[2],C=s[6],M=s[10],x=s[14],F=s[3],P=s[7],O=s[11],z=s[15],H=l[0],L=l[4],$=l[8],R=l[12],w=l[1],k=l[5],K=l[9],Q=l[13],lt=l[2],ft=l[6],N=l[10],I=l[14],it=l[3],Mt=l[7],St=l[11],U=l[15];return u[0]=h*H+d*w+m*lt+p*it,u[4]=h*L+d*k+m*ft+p*Mt,u[8]=h*$+d*K+m*N+p*St,u[12]=h*R+d*Q+m*I+p*U,u[1]=_*H+v*w+S*lt+E*it,u[5]=_*L+v*k+S*ft+E*Mt,u[9]=_*$+v*K+S*N+E*St,u[13]=_*R+v*Q+S*I+E*U,u[2]=A*H+C*w+M*lt+x*it,u[6]=A*L+C*k+M*ft+x*Mt,u[10]=A*$+C*K+M*N+x*St,u[14]=A*R+C*Q+M*I+x*U,u[3]=F*H+P*w+O*lt+z*it,u[7]=F*L+P*k+O*ft+z*Mt,u[11]=F*$+P*K+O*N+z*St,u[15]=F*R+P*Q+O*I+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],S=e[10],E=e[14],A=e[3],C=e[7],M=e[11],x=e[15],F=m*E-p*S,P=d*E-p*v,O=d*S-m*v,z=h*E-p*_,H=h*S-m*_,L=h*v-d*_;return i*(C*F-M*P+x*O)-s*(A*F-M*z+x*H)+l*(A*P-C*z+x*L)-u*(A*O-C*H+M*L)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],S=e[10],E=e[11],A=e[12],C=e[13],M=e[14],x=e[15],F=v*M*p-C*S*p+C*m*E-d*M*E-v*m*x+d*S*x,P=A*S*p-_*M*p-A*m*E+h*M*E+_*m*x-h*S*x,O=_*C*p-A*v*p+A*d*E-h*C*E-_*d*x+h*v*x,z=A*v*m-_*C*m-A*d*S+h*C*S+_*d*M-h*v*M,H=i*F+s*P+l*O+u*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/H;return e[0]=F*L,e[1]=(C*S*u-v*M*u-C*l*E+s*M*E+v*l*x-s*S*x)*L,e[2]=(d*M*u-C*m*u+C*l*p-s*M*p-d*l*x+s*m*x)*L,e[3]=(v*m*u-d*S*u-v*l*p+s*S*p+d*l*E-s*m*E)*L,e[4]=P*L,e[5]=(_*M*u-A*S*u+A*l*E-i*M*E-_*l*x+i*S*x)*L,e[6]=(A*m*u-h*M*u-A*l*p+i*M*p+h*l*x-i*m*x)*L,e[7]=(h*S*u-_*m*u+_*l*p-i*S*p-h*l*E+i*m*E)*L,e[8]=O*L,e[9]=(A*v*u-_*C*u-A*s*E+i*C*E+_*s*x-i*v*x)*L,e[10]=(h*C*u-A*d*u+A*s*p-i*C*p-h*s*x+i*d*x)*L,e[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*E-i*d*E)*L,e[12]=z*L,e[13]=(_*C*l-A*v*l+A*s*S-i*C*S-_*s*M+i*v*M)*L,e[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*M-i*d*M)*L,e[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*S+i*d*S)*L,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,S=u*p,E=u*_,A=u*v,C=h*_,M=h*v,x=d*v,F=m*p,P=m*_,O=m*v,z=s.x,H=s.y,L=s.z;return l[0]=(1-(C+x))*z,l[1]=(E+O)*z,l[2]=(A-P)*z,l[3]=0,l[4]=(E-O)*H,l[5]=(1-(S+x))*H,l[6]=(M+F)*H,l[7]=0,l[8]=(A+P)*L,l[9]=(M-F)*L,l[10]=(1-(S+C))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=_r.set(l[0],l[1],l[2]).length();const h=_r.set(l[4],l[5],l[6]).length(),d=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,_=1/h,v=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Bi,m=!1){const p=this.elements,_=2*u/(i-e),v=2*u/(s-l),S=(i+e)/(i-e),E=(s+l)/(s-l);let A,C;if(m)A=u/(h-u),C=h*u/(h-u);else if(d===Bi)A=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Ic)A=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Bi,m=!1){const p=this.elements,_=2/(i-e),v=2/(s-l),S=-(i+e)/(i-e),E=-(s+l)/(s-l);let A,C;if(m)A=1/(h-u),C=h/(h-u);else if(d===Bi)A=-2/(h-u),C=-(h+u)/(h-u);else if(d===Ic)A=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new rt,Ei=new tn,AM=new rt(0,0,0),RM=new rt(1,1,1),ja=new rt,dc=new rt,Jn=new rt,V0=new tn,k0=new qo;class _a{constructor(e=0,i=0,s=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return V0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class Z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CM=0;const X0=new rt,vr=new qo,la=new tn,pc=new rt,Oo=new rt,wM=new rt,DM=new qo,W0=new rt(1,0,0),q0=new rt(0,1,0),Y0=new rt(0,0,1),j0={type:"added"},UM={type:"removed"},xr={type:"childadded",child:null},mh={type:"childremoved",child:null};class Fn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new rt,i=new _a,s=new qo,l=new rt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new de}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(W0,e)}rotateY(e){return this.rotateOnAxis(q0,e)}rotateZ(e){return this.rotateOnAxis(Y0,e)}translateOnAxis(e,i){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(W0,e)}translateY(e){return this.translateOnAxis(q0,e)}translateZ(e){return this.translateOnAxis(Y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?pc.copy(e):pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Oo,pc,this.up):la.lookAt(pc,Oo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(la),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),xr.child=e,this.dispatchEvent(xr),xr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(UM),mh.child=e,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),S=h(e.skeletons),E=h(e.animations),A=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new rt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new rt,ca=new rt,gh=new rt,ua=new rt,Sr=new rt,Mr=new rt,Z0=new rt,_h=new rt,vh=new rt,xh=new rt,Sh=new an,Mh=new an,yh=new an;class bi{constructor(e=new rt,i=new rt,s=new rt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ti.subVectors(l,i),ca.subVectors(s,i),gh.subVectors(e,i);const h=Ti.dot(Ti),d=Ti.dot(ca),m=Ti.dot(gh),p=ca.dot(ca),_=ca.dot(gh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,E=(p*m-d*_)*S,A=(h*_-d*m)*S;return u.set(1-E-A,A,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(h,ua.y),m.addScaledVector(d,ua.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return Sh.setScalar(0),Mh.setScalar(0),yh.setScalar(0),Sh.fromBufferAttribute(e,i),Mh.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Sh,u.x),h.addScaledVector(Mh,u.y),h.addScaledVector(yh,u.z),h}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),ca.subVectors(e,i),Ti.cross(ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ti.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;Sr.subVectors(l,s),Mr.subVectors(u,s),_h.subVectors(e,s);const m=Sr.dot(_h),p=Mr.dot(_h);if(m<=0&&p<=0)return i.copy(s);vh.subVectors(e,l);const _=Sr.dot(vh),v=Mr.dot(vh);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Sr,h);xh.subVectors(e,u);const E=Sr.dot(xh),A=Mr.dot(xh);if(A>=0&&E<=A)return i.copy(u);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(Mr,d);const M=_*A-E*v;if(M<=0&&v-_>=0&&E-A>=0)return Z0.subVectors(u,l),d=(v-_)/(v-_+(E-A)),i.copy(l).addScaledVector(Z0,d);const x=1/(M+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Sr,h).addScaledVector(Mr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Eh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=be.workingColorSpace){if(e=vM(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Eh(h,u,e+1/3),this.g=Eh(h,u,e),this.b=Eh(h,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function s(u){u!==void 0&&parseFloat(u)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=K_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return be.workingToColorSpace(Un.copy(this),e),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=di){be.workingToColorSpace(Un.copy(this),e);const i=Un.r,s=Un.g,l=Un.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(mc);const s=sh(Za.h,mc.h,i),l=sh(Za.s,mc.s,i),u=sh(Za.l,mc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new ye;ye.NAMES=K_;let NM=0;class Or extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Ar,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=zh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Q_ extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new rt,gc=new Ie;let LM=0;class ti{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=P0,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}}class J_ extends ti{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class $_ extends ti{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ci extends ti{constructor(e,i,s){super(new Float32Array(e),i,s)}}let OM=0;const hi=new tn,Th=new Fn,yr=new rt,$n=new Yo,Po=new Yo,gn=new rt;class ei extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?$_:J_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ci(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors($n.min,Po.min),$n.expandByPoint(gn),gn.addVectors($n.max,Po.max),$n.expandByPoint(gn)):($n.expandByPoint(Po.min),$n.expandByPoint(Po.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)gn.fromBufferAttribute(d,p),m&&(yr.fromBufferAttribute(e,p),gn.add(yr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<s.count;$++)d[$]=new rt,m[$]=new rt;const p=new rt,_=new rt,v=new rt,S=new Ie,E=new Ie,A=new Ie,C=new rt,M=new rt;function x($,R,w){p.fromBufferAttribute(s,$),_.fromBufferAttribute(s,R),v.fromBufferAttribute(s,w),S.fromBufferAttribute(u,$),E.fromBufferAttribute(u,R),A.fromBufferAttribute(u,w),_.sub(p),v.sub(p),E.sub(S),A.sub(S);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(k),M.copy(v).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(k),d[$].add(C),d[R].add(C),d[w].add(C),m[$].add(M),m[R].add(M),m[w].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let $=0,R=F.length;$<R;++$){const w=F[$],k=w.start,K=w.count;for(let Q=k,lt=k+K;Q<lt;Q+=3)x(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new rt,O=new rt,z=new rt,H=new rt;function L($){z.fromBufferAttribute(l,$),H.copy(z);const R=d[$];P.copy(R),P.sub(z.multiplyScalar(z.dot(R))).normalize(),O.crossVectors(H,R);const k=O.dot(m[$])<0?-1:1;h.setXYZW($,P.x,P.y,P.z,k)}for(let $=0,R=F.length;$<R;++$){const w=F[$],k=w.start,K=w.count;for(let Q=k,lt=k+K;Q<lt;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ti(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,_=new rt,v=new rt;if(e)for(let S=0,E=e.count;S<E;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let E=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*_;for(let x=0;x<_;x++)S[A++]=p[E++]}return new ti(S,_,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ei,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],E=e(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const E=p[v];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let S=0,E=v.length;S<E;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K0=new tn,Ss=new Vd,_c=new jo,Q0=new rt,vc=new rt,xc=new rt,Sc=new rt,bh=new rt,Mc=new rt,J0=new rt,yc=new rt;class va extends Fn{constructor(e=new ei,i=new Q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(bh.fromBufferAttribute(v,e),h?Mc.addScaledVector(bh,_):Mc.addScaledVector(bh.sub(i),_))}i.add(Mc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(u),Ss.copy(e.ray).recast(e.near),!(_c.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(_c,Q0)===null||Ss.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(K0.copy(u).invert(),Ss.copy(e.ray).applyMatrix4(K0),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ss)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=h[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let O=F,z=P;O<z;O+=3){const H=d.getX(O),L=d.getX(O+1),$=d.getX(O+2);l=Ec(this,x,e,s,p,_,v,H,L,$),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const F=d.getX(M),P=d.getX(M+1),O=d.getX(M+2);l=Ec(this,h,e,s,p,_,v,F,P,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=h[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let O=F,z=P;O<z;O+=3){const H=O,L=O+1,$=O+2;l=Ec(this,x,e,s,p,_,v,H,L,$),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const F=M,P=M+1,O=M+2;l=Ec(this,h,e,s,p,_,v,F,P,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function PM(o,e,i,s,l,u,h,d){let m;if(e.side===Xn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===$a,d),m===null)return null;yc.copy(d),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Ec(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,vc),o.getVertexPosition(m,xc),o.getVertexPosition(p,Sc);const _=PM(o,e,i,s,vc,xc,Sc,J0);if(_){const v=new rt;bi.getBarycoord(J0,vc,xc,Sc,v),l&&(_.uv=bi.getInterpolatedAttribute(l,d,m,p,v,new Ie)),u&&(_.uv1=bi.getInterpolatedAttribute(u,d,m,p,v,new Ie)),h&&(_.normal=bi.getInterpolatedAttribute(h,d,m,p,v,new rt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};bi.getNormal(vc,xc,Sc,S.normal),_.face=S,_.barycoord=v}return _}class Zo extends ei{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,e,h,u,0),A("z","y","x",1,-1,s,i,-e,h,u,1),A("x","z","y",1,1,e,s,i,l,h,2),A("x","z","y",1,-1,e,s,-i,l,h,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(v,2));function A(C,M,x,F,P,O,z,H,L,$,R){const w=O/L,k=z/$,K=O/2,Q=z/2,lt=H/2,ft=L+1,N=$+1;let I=0,it=0;const Mt=new rt;for(let St=0;St<N;St++){const U=St*k-Q;for(let tt=0;tt<ft;tt++){const pt=tt*w-K;Mt[C]=pt*F,Mt[M]=U*P,Mt[x]=lt,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[M]=0,Mt[x]=H>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(tt/L),v.push(1-St/$),I+=1}}for(let St=0;St<$;St++)for(let U=0;U<L;U++){const tt=S+U+ft*St,pt=S+U+ft*(St+1),Rt=S+(U+1)+ft*(St+1),Ct=S+(U+1)+ft*St;m.push(tt,pt,Ct),m.push(pt,Rt,Ct),it+=6}d.addGroup(E,it,R),E+=it,S+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)e[l]=s[l]}return e}function FM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function tv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const zM={clone:Nr,merge:On};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ev extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new rt,$0=new Ie,t_=new Ie;class pi extends ev{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,$0,t_),i.subVectors(t_,$0)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ah*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,Tr=1;class HM extends Fn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Er,Tr,e,i);l.layers=this.layers,this.add(l);const u=new pi(Er,Tr,e,i);u.layers=this.layers,this.add(u);const h=new pi(Er,Tr,e,i);h.layers=this.layers,this.add(h);const d=new pi(Er,Tr,e,i);d.layers=this.layers,this.add(d);const m=new pi(Er,Tr,e,i);m.layers=this.layers,this.add(m);const p=new pi(Er,Tr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,S,E),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class nv extends Pn{constructor(e=[],i=ws,s,l,u,h,d,m,p,_){super(e,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iv extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Zo(5,5,5),u=new wi({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:da});u.uniforms.tEquirect.value=i;const h=new va(l,u),d=i.minFilter;return i.minFilter===Rs&&(i.minFilter=Nn),new HM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class Tc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}let VM=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};class kM extends Pn{constructor(e=null,i=1,s=1,l,u,h,d,m,p=Rn,_=Rn,v,S){super(null,h,d,m,p,_,l,u,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rh=new rt,XM=new rt,WM=new de;class Ts{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Rh.subVectors(s,i).cross(XM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||WM.getNormalMatrix(e),l=this.coplanarPoint(Rh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new jo,qM=new Ie(.5,.5),bc=new rt;class av{constructor(e=new Ts,i=new Ts,s=new Ts,l=new Ts,u=new Ts,h=new Ts){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Bi,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],v=u[5],S=u[6],E=u[7],A=u[8],C=u[9],M=u[10],x=u[11],F=u[12],P=u[13],O=u[14],z=u[15];if(l[0].setComponents(p-h,E-_,x-A,z-F).normalize(),l[1].setComponents(p+h,E+_,x+A,z+F).normalize(),l[2].setComponents(p+d,E+v,x+C,z+P).normalize(),l[3].setComponents(p-d,E-v,x-C,z-P).normalize(),s)l[4].setComponents(m,S,M,O).normalize(),l[5].setComponents(p-m,E-S,x-M,z-O).normalize();else if(l[4].setComponents(p-m,E-S,x-M,z-O).normalize(),i===Bi)l[5].setComponents(p+m,E+S,x+M,z+O).normalize();else if(i===Ic)l[5].setComponents(m,S,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const i=qM.distanceTo(e.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sv extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new rt,Vc=new rt,e_=new tn,Fo=new Vd,Ac=new jo,Ch=new rt,n_=new rt;class YM extends Fn{constructor(e=new ei,i=new sv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);e.setAttribute("lineDistance",new Ci(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=u,e.ray.intersectsSphere(Ac)===!1)return;e_.copy(l).invert(),Fo.copy(e.ray).applyMatrix4(e_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const E=Math.max(0,h.start),A=Math.min(_.count,h.start+h.count);for(let C=E,M=A-1;C<M;C+=p){const x=_.getX(C),F=_.getX(C+1),P=Rc(this,e,Fo,m,x,F,C);P&&i.push(P)}if(this.isLineLoop){const C=_.getX(A-1),M=_.getX(E),x=Rc(this,e,Fo,m,C,M,A-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),A=Math.min(S.count,h.start+h.count);for(let C=E,M=A-1;C<M;C+=p){const x=Rc(this,e,Fo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Rc(this,e,Fo,m,A-1,E,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Rc(o,e,i,s,l,u,h){const d=o.geometry.attributes.position;if(Gc.fromBufferAttribute(d,l),Vc.fromBufferAttribute(d,u),i.distanceSqToSegment(Gc,Vc,Ch,n_)>s)return;Ch.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ch);if(!(p<e.near||p>e.far))return{distance:p,point:n_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const i_=new rt,a_=new rt;class jM extends YM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)i_.fromBufferAttribute(i,l),a_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+i_.distanceTo(a_);e.setAttribute("lineDistance",new Ci(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZM extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s_=new tn,Cd=new Vd,Cc=new jo,wc=new rt;class KM extends Fn{constructor(e=new ei,i=new ZM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=u,e.ray.intersectsSphere(Cc)===!1)return;s_.copy(l).invert(),Cd.copy(e.ray).applyMatrix4(s_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let A=S,C=E;A<C;A++){const M=p.getX(A);wc.fromBufferAttribute(v,M),r_(wc,M,m,l,e,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let A=S,C=E;A<C;A++)wc.fromBufferAttribute(v,A),r_(wc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function r_(o,e,i,s,l,u,h){const d=Cd.distanceSqToPoint(o);if(d<i){const m=new rt;Cd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Xo extends Pn{constructor(e,i,s=Gi,l,u,h,d=Rn,m=Rn,p,_=ga,v=1){if(_!==ga&&_!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class QM extends Xo{constructor(e,i=Gi,s=ws,l,u,h=Rn,d=Rn,m,p=ga){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,u,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xc extends ei{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=e/d,S=i/m,E=[],A=[],C=[],M=[];for(let x=0;x<_;x++){const F=x*S-h;for(let P=0;P<p;P++){const O=P*v-u;A.push(O,-F,0),C.push(0,0,1),M.push(P/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<d;F++){const P=F+p*x,O=F+p*(x+1),z=F+1+p*(x+1),H=F+1+p*x;E.push(P,O,H),E.push(O,z,H)}this.setIndex(E),this.setAttribute("position",new Ci(A,3)),this.setAttribute("normal",new Ci(C,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class JM extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $M extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ty extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ov extends ev{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ey extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ny{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function o_(o,e,i,s){const l=iy(s);switch(i){case X_:return o*e;case q_:return o*e/l.components*l.byteLength;case Fd:return o*e/l.components*l.byteLength;case Dr:return o*e*2/l.components*l.byteLength;case zd:return o*e*2/l.components*l.byteLength;case W_:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case Bd:return o*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(o,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(o,8)*Math.max(e,8)/2;case $h:case td:case nd:case id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ed:case ad:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sd:case Md:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ed:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case bd:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function iy(o){switch(o){case mi:case H_:return{byteLength:1,components:1};case Go:case G_:case ma:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Gi:case Ld:case zi:return{byteLength:4,components:1};case V_:case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);function lv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ay(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<v.length;E++){const A=v[S],C=v[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,v[S]=C)}v.length=S+1;for(let E=0,A=v.length;E<A;E++){const C=v[E];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var sy=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
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
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
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
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
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
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sT=`uniform sampler2D t2D;
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
}`,fT=`#if DEPTH_PACKING == 3200
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
}`,hT=`#define DISTANCE
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
}`,dT=`#define DISTANCE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`uniform float scale;
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 diffuse;
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
}`,ST=`#define LAMBERT
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
}`,MT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,ET=`#define MATCAP
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
}`,TT=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,AT=`#define PHONG
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
}`,RT=`#define PHONG
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
}`,CT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,DT=`#define TOON
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
}`,UT=`#define TOON
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
}`,NT=`uniform float size;
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
}`,LT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,PT=`uniform vec3 color;
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
}`,FT=`uniform float rotation;
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
}`,zT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:sy,alphahash_pars_fragment:ry,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:fy,aomap_pars_fragment:hy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:_y,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:yy,clipping_planes_vertex:Ey,color_fragment:Ty,color_pars_fragment:by,color_pars_vertex:Ay,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Uy,displacementmap_vertex:Ny,emissivemap_fragment:Ly,emissivemap_pars_fragment:Oy,colorspace_fragment:Py,colorspace_pars_fragment:Fy,envmap_fragment:zy,envmap_common_pars_fragment:By,envmap_pars_fragment:Iy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:Qy,envmap_vertex:Gy,fog_vertex:Vy,fog_pars_vertex:ky,fog_fragment:Xy,fog_pars_fragment:Wy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Zy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:$y,lights_phong_fragment:tE,lights_phong_pars_fragment:eE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:aE,lights_fragment_maps:sE,lights_fragment_end:rE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:fE,map_pars_fragment:hE,map_particle_fragment:dE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:xE,morphtarget_pars_vertex:SE,morphtarget_vertex:ME,normal_fragment_begin:yE,normal_fragment_maps:EE,normal_pars_fragment:TE,normal_pars_vertex:bE,normal_vertex:AE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:wE,clearcoat_pars_fragment:DE,iridescence_pars_fragment:UE,opaque_fragment:NE,packing:LE,premultiplied_alpha_fragment:OE,project_vertex:PE,dithering_fragment:FE,dithering_pars_fragment:zE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:GE,shadowmap_vertex:VE,shadowmask_pars_fragment:kE,skinbase_vertex:XE,skinning_pars_vertex:WE,skinning_vertex:qE,skinnormal_vertex:YE,specularmap_fragment:jE,specularmap_pars_fragment:ZE,tonemapping_fragment:KE,tonemapping_pars_fragment:QE,transmission_fragment:JE,transmission_pars_fragment:$E,uv_pars_fragment:tT,uv_pars_vertex:eT,uv_vertex:nT,worldpos_vertex:iT,background_vert:aT,background_frag:sT,backgroundCube_vert:rT,backgroundCube_frag:oT,cube_vert:lT,cube_frag:cT,depth_vert:uT,depth_frag:fT,distance_vert:hT,distance_frag:dT,equirect_vert:pT,equirect_frag:mT,linedashed_vert:gT,linedashed_frag:_T,meshbasic_vert:vT,meshbasic_frag:xT,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:yT,meshmatcap_frag:ET,meshnormal_vert:TT,meshnormal_frag:bT,meshphong_vert:AT,meshphong_frag:RT,meshphysical_vert:CT,meshphysical_frag:wT,meshtoon_vert:DT,meshtoon_frag:UT,points_vert:NT,points_frag:LT,shadow_vert:OT,shadow_frag:PT,sprite_vert:FT,sprite_frag:zT},Ft={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Fi={basic:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ye(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Ft.points,Ft.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Ft.common,Ft.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Ft.sprite,Ft.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:On([Ft.common,Ft.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:On([Ft.lights,Ft.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Fi.physical={uniforms:On([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Dc={r:0,b:0,g:0},ys=new _a,BT=new tn;function IT(o,e,i,s,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,_,v=null,S=0,E=null;function A(P){let O=P.isScene===!0?P.background:null;return O&&O.isTexture&&(O=(P.backgroundBlurriness>0?i:e).get(O)),O}function C(P){let O=!1;const z=A(P);z===null?x(d,m):z&&z.isColor&&(x(z,1),O=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,O){const z=A(O);z&&(z.isCubeTexture||z.mapping===kc)?(_===void 0&&(_=new va(new Zo(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Nr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,L,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ys.copy(O.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(BT.makeRotationFromEuler(ys)),_.material.toneMapped=be.getTransfer(z.colorSpace)!==Be,(v!==z||S!==z.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,v=z,S=z.version,E=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new va(new Xc(2,2),new wi({name:"BackgroundMaterial",uniforms:Nr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||S!==z.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,S=z.version,E=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,O){P.getRGB(Dc,tv(o)),s.buffers.color.setClear(Dc.r,Dc.g,Dc.b,O,h)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,O=1){d.set(P),m=O,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:C,addToRenderList:M,dispose:F}}function HT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(w,k,K,Q,lt){let ft=!1;const N=v(Q,K,k);u!==N&&(u=N,p(u.object)),ft=E(w,Q,K,lt),ft&&A(w,Q,K,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,O(w,k,K,Q),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function v(w,k,K){const Q=K.wireframe===!0;let lt=s[w.id];lt===void 0&&(lt={},s[w.id]=lt);let ft=lt[k.id];ft===void 0&&(ft={},lt[k.id]=ft);let N=ft[Q];return N===void 0&&(N=S(m()),ft[Q]=N),N}function S(w){const k=[],K=[],Q=[];for(let lt=0;lt<i;lt++)k[lt]=0,K[lt]=0,Q[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:Q,object:w,attributes:{},index:null}}function E(w,k,K,Q){const lt=u.attributes,ft=k.attributes;let N=0;const I=K.getAttributes();for(const it in I)if(I[it].location>=0){const St=lt[it];let U=ft[it];if(U===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),St===void 0||St.attribute!==U||U&&St.data!==U.data)return!0;N++}return u.attributesNum!==N||u.index!==Q}function A(w,k,K,Q){const lt={},ft=k.attributes;let N=0;const I=K.getAttributes();for(const it in I)if(I[it].location>=0){let St=ft[it];St===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const U={};U.attribute=St,St&&St.data&&(U.data=St.data),lt[it]=U,N++}u.attributes=lt,u.attributesNum=N,u.index=Q}function C(){const w=u.newAttributes;for(let k=0,K=w.length;k<K;k++)w[k]=0}function M(w){x(w,0)}function x(w,k){const K=u.newAttributes,Q=u.enabledAttributes,lt=u.attributeDivisors;K[w]=1,Q[w]===0&&(o.enableVertexAttribArray(w),Q[w]=1),lt[w]!==k&&(o.vertexAttribDivisor(w,k),lt[w]=k)}function F(){const w=u.newAttributes,k=u.enabledAttributes;for(let K=0,Q=k.length;K<Q;K++)k[K]!==w[K]&&(o.disableVertexAttribArray(K),k[K]=0)}function P(w,k,K,Q,lt,ft,N){N===!0?o.vertexAttribIPointer(w,k,K,lt,ft):o.vertexAttribPointer(w,k,K,Q,lt,ft)}function O(w,k,K,Q){C();const lt=Q.attributes,ft=K.getAttributes(),N=k.defaultAttributeValues;for(const I in ft){const it=ft[I];if(it.location>=0){let Mt=lt[I];if(Mt===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const St=Mt.normalized,U=Mt.itemSize,tt=e.get(Mt);if(tt===void 0)continue;const pt=tt.buffer,Rt=tt.type,Ct=tt.bytesPerElement,J=Rt===o.INT||Rt===o.UNSIGNED_INT||Mt.gpuType===Ld;if(Mt.isInterleavedBufferAttribute){const ct=Mt.data,Tt=ct.stride,It=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let Lt=0;Lt<it.locationSize;Lt++)x(it.location+Lt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Lt=0;Lt<it.locationSize;Lt++)M(it.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,pt);for(let Lt=0;Lt<it.locationSize;Lt++)P(it.location+Lt,U/it.locationSize,Rt,St,Tt*Ct,(It+U/it.locationSize*Lt)*Ct,J)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<it.locationSize;ct++)x(it.location+ct,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<it.locationSize;ct++)M(it.location+ct);o.bindBuffer(o.ARRAY_BUFFER,pt);for(let ct=0;ct<it.locationSize;ct++)P(it.location+ct,U/it.locationSize,Rt,St,U*Ct,U/it.locationSize*ct*Ct,J)}}else if(N!==void 0){const St=N[I];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(it.location,St);break;case 3:o.vertexAttrib3fv(it.location,St);break;case 4:o.vertexAttrib4fv(it.location,St);break;default:o.vertexAttrib1fv(it.location,St)}}}}F()}function z(){$();for(const w in s){const k=s[w];for(const K in k){const Q=k[K];for(const lt in Q)_(Q[lt].object),delete Q[lt];delete k[K]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const K in k){const Q=k[K];for(const lt in Q)_(Q[lt].object),delete Q[lt];delete k[K]}delete s[w.id]}function L(w){for(const k in s){const K=s[k];if(K[w.id]===void 0)continue;const Q=K[w.id];for(const lt in Q)_(Q[lt].object),delete Q[lt];delete K[w.id]}}function $(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:L,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function GT(o,e,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=_[A];i.update(E,s,1)}function m(p,_,v,S){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],_[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let A=0;for(let C=0;C<v;C++)A+=_[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function VT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Ri&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const $=L===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==mi&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==zi&&!$)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:O,maxSamples:z,samples:H}}function kT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Ts,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const E=v.length!==0||S||s!==0||l;return l=S,s=v.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,E){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!l||A===null||A.length===0||u&&!M)u?_(null):p();else{const F=u?0:s,P=F*4;let O=x.clippingState||null;m.value=O,O=_(A,S,P,E);for(let z=0;z!==P;++z)O[z]=i[z];x.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,S,E,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const x=E+C*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,O=E;P!==C;++P,O+=4)h.copy(v[P]).applyMatrix4(F,d),h.normal.toArray(M,O),M[O+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function XT(o){let e=new WeakMap;function i(h,d){return d===Wh?h.mapping=ws:d===qh&&(h.mapping=wr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wh||d===qh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new iv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Ja=4,l_=[.125,.215,.35,.446,.526,.582],As=20,WT=256,zo=new ov,c_=new ye;let wh=null,Dh=0,Uh=0,Nh=!1;const qT=new rt;class u_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=qT}=u;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Dh,Uh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ma,format:Ri,colorSpace:Ur,depthBuffer:!1},l=f_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YT(u)),this._blurMaterial=ZT(u,e,i),this._ggxMaterial=jT(u,e,i)}return l}_compileMaterial(e){const i=new va(new ei,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,s,l,u){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,E=v.toneMapping;v.getClearColor(c_),v.toneMapping=Ii,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new va(new Zo,new Q_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,x=!0):(M.color.copy(c_),x=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[P],u.y,u.z)):O===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[P]));const z=this._cubeSize;br(l,O*z,P>2?z:0,z,z),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}v.toneMapping=E,v.autoClear=S,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ws||e.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=d_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),S=0+p*1.25,E=v*S,{_lodMax:A}=this,C=this._sizeLods[s],M=3*C*(s>A-Ja?s-A+Ja:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,br(u,M,x,3*C,2*C),l.setRenderTarget(u),l.render(d,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,br(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(d,zo)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*As-1),C=u/A,M=isFinite(u)?1+Math.floor(_*C):As;M>As&&ie(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${As}`);const x=[];let F=0;for(let L=0;L<As;++L){const $=L/C,R=Math.exp(-$*$/2);x.push(R),L===0?F+=R:L<M&&(F+=2*R)}for(let L=0;L<x.length;L++)x[L]=x[L]/F;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=A,S.mipInt.value=P-s;const O=this._sizeLods[l],z=3*O*(l>P-Ja?l-P+Ja:0),H=4*(this._cubeSize-O);br(i,z,H,3*O,2*O),m.setRenderTarget(i),m.render(v,zo)}}function YT(o){const e=[],i=[],s=[];let l=o;const u=o-Ja+1+l_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Ja?m=l_[h-o+Ja-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],E=6,A=6,C=3,M=2,x=1,F=new Float32Array(C*A*E),P=new Float32Array(M*A*E),O=new Float32Array(x*A*E);for(let H=0;H<E;H++){const L=H%3*2/3-1,$=H>2?0:-1,R=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];F.set(R,C*A*H),P.set(S,M*A*H);const w=[H,H,H,H,H,H];O.set(w,x*A*H)}const z=new ei;z.setAttribute("position",new ti(F,C)),z.setAttribute("uv",new ti(P,M)),z.setAttribute("faceIndex",new ti(O,x)),s.push(new va(z,null)),l>Ja&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function f_(o,e,i){const s=new Hi(o,e,i);return s.texture.mapping=kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function br(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function jT(o,e,i){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function ZT(o,e,i){const s=new Float32Array(As),l=new rt(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function h_(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function d_(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function KT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,_=m===ws||m===wr;if(p||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new u_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new u_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function QT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("WebGLRenderer: "+s+" extension not supported."),l}}}function JT(o,e,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(v){const S=[],E=v.index,A=v.attributes.position;let C=0;if(E!==null){const F=E.array;C=E.version;for(let P=0,O=F.length;P<O;P+=3){const z=F[P+0],H=F[P+1],L=F[P+2];S.push(z,H,H,L,L,z)}}else if(A!==void 0){const F=A.array;C=A.version;for(let P=0,O=F.length/3-1;P<O;P+=3){const z=P+0,H=P+1,L=P+2;S.push(z,H,H,L,L,z)}}else return;const M=new(Y_(S)?$_:J_)(S,1);M.version=C;const x=u.get(v);x&&e.remove(x),u.set(v,M)}function _(v){const S=u.get(v);if(S){const E=v.index;E!==null&&S.version<E.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function $T(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(s,E,u,S*h),i.update(E,s,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,u,S*h,A),i.update(E,s,A))}function _(S,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,s,1)}function v(S,E,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,C,0,A);let x=0;for(let F=0;F<A;F++)x+=E[F]*C[F];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function tb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function eb(o,e,i){const s=new WeakMap,l=new an;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let w=function(){$.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let O=0;A===!0&&(O=1),C===!0&&(O=2),M===!0&&(O=3);let z=d.attributes.position.count*O,H=1;z>e.maxTextureSize&&(H=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const L=new Float32Array(z*H*4*v),$=new j_(L,z,H,v);$.type=zi,$.needsUpdate=!0;const R=O*4;for(let k=0;k<v;k++){const K=x[k],Q=F[k],lt=P[k],ft=z*H*4*k;for(let N=0;N<K.count;N++){const I=N*R;A===!0&&(l.fromBufferAttribute(K,N),L[ft+I+0]=l.x,L[ft+I+1]=l.y,L[ft+I+2]=l.z,L[ft+I+3]=0),C===!0&&(l.fromBufferAttribute(Q,N),L[ft+I+4]=l.x,L[ft+I+5]=l.y,L[ft+I+6]=l.z,L[ft+I+7]=0),M===!0&&(l.fromBufferAttribute(lt,N),L[ft+I+8]=l.x,L[ft+I+9]=l.y,L[ft+I+10]=l.z,L[ft+I+11]=lt.itemSize===4?l.w:1)}}S={count:v,texture:$,size:new Ie(z,H)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function nb(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const ib={[N_]:"LINEAR_TONE_MAPPING",[L_]:"REINHARD_TONE_MAPPING",[O_]:"CINEON_TONE_MAPPING",[P_]:"ACES_FILMIC_TONE_MAPPING",[z_]:"AGX_TONE_MAPPING",[B_]:"NEUTRAL_TONE_MAPPING",[F_]:"CUSTOM_TONE_MAPPING"};function ab(o,e,i,s,l){const u=new Hi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Hi(e,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),d=new ei;d.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const m=new JM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new va(d,m),_=new ov(-1,1,1,-1,0,1);let v=null,S=null,E=!1,A,C=null,M=[],x=!1;this.setSize=function(F,P){u.setSize(F,P),h.setSize(F,P);for(let O=0;O<M.length;O++){const z=M[O];z.setSize&&z.setSize(F,P)}},this.setEffects=function(F){M=F,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,O=u.height;for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(P,O)}},this.begin=function(F,P){if(E||F.toneMapping===Ii&&M.length===0)return!1;if(C=P,P!==null){const O=P.width,z=P.height;(u.width!==O||u.height!==z)&&this.setSize(O,z)}return x===!1&&F.setRenderTarget(u),A=F.toneMapping,F.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(F,P){F.toneMapping=A,E=!0;let O=u,z=h;for(let H=0;H<M.length;H++){const L=M[H];if(L.enabled!==!1&&(L.render(F,z,O,P),L.needsSwap!==!1)){const $=O;O=z,z=$}}if(v!==F.outputColorSpace||S!==F.toneMapping){v=F.outputColorSpace,S=F.toneMapping,m.defines={},be.getTransfer(v)===Be&&(m.defines.SRGB_TRANSFER="");const H=ib[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(C),F.render(p,_),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const cv=new Pn,wd=new Xo(1,1),uv=new j_,fv=new TM,hv=new nv,p_=[],m_=[],g_=new Float32Array(16),__=new Float32Array(9),v_=new Float32Array(4);function Pr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=p_[l];if(u===void 0&&(u=new Float32Array(l),p_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function qc(o,e){let i=m_[e];i===void 0&&(i=new Int32Array(e),m_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function sb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function ob(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function cb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;v_.set(s),o.uniformMatrix2fv(this.addr,!1,v_),pn(i,s)}}function ub(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;__.set(s),o.uniformMatrix3fv(this.addr,!1,__),pn(i,s)}}function fb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,s))return;g_.set(s),o.uniformMatrix4fv(this.addr,!1,g_),pn(i,s)}}function hb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function gb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function vb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function Sb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(wd.compareFunction=i.isReversedDepthBuffer()?Hd:Id,u=wd):u=cv,i.setTexture2D(e||u,l)}function Mb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||fv,l)}function yb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||hv,l)}function Eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||uv,l)}function Tb(o){switch(o){case 5126:return sb;case 35664:return rb;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Eb}}function bb(o,e){o.uniform1fv(this.addr,e)}function Ab(o,e){const i=Pr(e,this.size,2);o.uniform2fv(this.addr,i)}function Rb(o,e){const i=Pr(e,this.size,3);o.uniform3fv(this.addr,i)}function Cb(o,e){const i=Pr(e,this.size,4);o.uniform4fv(this.addr,i)}function wb(o,e){const i=Pr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Db(o,e){const i=Pr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Ub(o,e){const i=Pr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Nb(o,e){o.uniform1iv(this.addr,e)}function Lb(o,e){o.uniform2iv(this.addr,e)}function Ob(o,e){o.uniform3iv(this.addr,e)}function Pb(o,e){o.uniform4iv(this.addr,e)}function Fb(o,e){o.uniform1uiv(this.addr,e)}function zb(o,e){o.uniform2uiv(this.addr,e)}function Bb(o,e){o.uniform3uiv(this.addr,e)}function Ib(o,e){o.uniform4uiv(this.addr,e)}function Hb(o,e,i){const s=this.cache,l=e.length,u=qc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=wd:h=cv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function Gb(o,e,i){const s=this.cache,l=e.length,u=qc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||fv,u[h])}function Vb(o,e,i){const s=this.cache,l=e.length,u=qc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||hv,u[h])}function kb(o,e,i){const s=this.cache,l=e.length,u=qc(i,l);dn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||uv,u[h])}function Xb(o){switch(o){case 5126:return bb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return wb;case 35675:return Db;case 35676:return Ub;case 5124:case 35670:return Nb;case 35667:case 35671:return Lb;case 35668:case 35672:return Ob;case 35669:case 35673:return Pb;case 5125:return Fb;case 36294:return zb;case 36295:return Bb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return kb}}class Wb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Tb(i.type)}}class qb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Xb(i.type)}}class Yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function x_(o,e){o.seq.push(e),o.map[e.id]=e}function jb(o,e,i){const s=o.name,l=s.length;for(Lh.lastIndex=0;;){const u=Lh.exec(s),h=Lh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){x_(i,p===void 0?new Wb(d,o,e):new qb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Yb(d),x_(i,v)),i=v}}}class zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);jb(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function S_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Zb=37297;let Kb=0;function Qb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const M_=new de;function Jb(o){be._getMatrix(M_,be.workingColorSpace,o);const e=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Bc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function y_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Qb(o.getShaderSource(e),d)}else return u}function $b(o,e){const i=Jb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const tA={[N_]:"Linear",[L_]:"Reinhard",[O_]:"Cineon",[P_]:"ACESFilmic",[z_]:"AgX",[B_]:"Neutral",[F_]:"Custom"};function eA(o,e){const i=tA[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new rt;function nA(){be.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function aA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function sA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ho(o){return o!==""}function E_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(o){return o.replace(rA,lA)}const oA=new Map;function lA(o,e){let i=pe[e];if(i===void 0){const s=oA.get(e);if(s!==void 0)i=pe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dd(i)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(o){return o.replace(cA,uA)}function uA(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function A_(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fA={[Nc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function hA(o){return fA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dA={[ws]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[kc]:"ENVMAP_TYPE_CUBE_UV"};function pA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":dA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const mA={[wr]:"ENVMAP_MODE_REFRACTION"};function gA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _A={[U_]:"ENVMAP_BLENDING_MULTIPLY",[aM]:"ENVMAP_BLENDING_MIX",[sM]:"ENVMAP_BLENDING_ADD"};function vA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":_A[o.combine]||"ENVMAP_BLENDING_NONE"}function xA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function SA(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=hA(i),p=pA(i),_=gA(i),v=vA(i),S=xA(i),E=iA(i),A=aA(u),C=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ho).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ho).join(`
`),x.length>0&&(x+=`
`)):(M=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),x=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ii?eA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,$b("linearToOutputTexel",i.outputColorSpace),nA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=Dd(h),h=E_(h,i),h=T_(h,i),d=Dd(d),d=E_(d,i),d=T_(d,i),h=b_(h),d=b_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===F0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=F+M+h,O=F+x+d,z=S_(l,l.VERTEX_SHADER,P),H=S_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,z),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function L(k){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",Q=l.getShaderInfoLog(z)||"",lt=l.getShaderInfoLog(H)||"",ft=K.trim(),N=Q.trim(),I=lt.trim();let it=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,H);else{const St=y_(l,z,"vertex"),U=y_(l,H,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+St+`
`+U)}else ft!==""?ie("WebGLProgram: Program Info Log:",ft):(N===""||I==="")&&(Mt=!1);Mt&&(k.diagnostics={runnable:it,programLog:ft,vertexShader:{log:N,prefix:M},fragmentShader:{log:I,prefix:x}})}l.deleteShader(z),l.deleteShader(H),$=new zc(l,C),R=sA(l,C)}let $;this.getUniforms=function(){return $===void 0&&L(this),$};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Zb)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=H,this}let MA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new EA(e),i.set(e,s)),s}}class EA{constructor(e){this.id=MA++,this.code=e,this.usedTimes=0}}function TA(o,e,i,s,l,u,h){const d=new Z_,m=new yA,p=new Set,_=[],v=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,k,K,Q){const lt=K.fog,ft=Q.geometry,N=R.isMeshStandardMaterial?K.environment:null,I=(R.isMeshStandardMaterial?i:e).get(R.envMap||N),it=I&&I.mapping===kc?I.image.height:null,Mt=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&ie("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const St=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,U=St!==void 0?St.length:0;let tt=0;ft.morphAttributes.position!==void 0&&(tt=1),ft.morphAttributes.normal!==void 0&&(tt=2),ft.morphAttributes.color!==void 0&&(tt=3);let pt,Rt,Ct,J;if(Mt){const Te=Fi[Mt];pt=Te.vertexShader,Rt=Te.fragmentShader}else pt=R.vertexShader,Rt=R.fragmentShader,m.update(R),Ct=m.getVertexShaderID(R),J=m.getFragmentShaderID(R);const ct=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),It=Q.isInstancedMesh===!0,Lt=Q.isBatchedMesh===!0,oe=!!R.map,qe=!!R.matcap,ce=!!I,ue=!!R.aoMap,Ee=!!R.lightMap,ae=!!R.bumpMap,Xe=!!R.normalMap,G=!!R.displacementMap,Ze=!!R.emissiveMap,Me=!!R.metalnessMap,Ne=!!R.roughnessMap,Yt=R.anisotropy>0,D=R.clearcoat>0,y=R.dispersion>0,W=R.iridescence>0,mt=R.sheen>0,xt=R.transmission>0,ht=Yt&&!!R.anisotropyMap,Zt=D&&!!R.clearcoatMap,Dt=D&&!!R.clearcoatNormalMap,Xt=D&&!!R.clearcoatRoughnessMap,ee=W&&!!R.iridescenceMap,Et=W&&!!R.iridescenceThicknessMap,bt=mt&&!!R.sheenColorMap,Ht=mt&&!!R.sheenRoughnessMap,zt=!!R.specularMap,Ut=!!R.specularColorMap,fe=!!R.specularIntensityMap,X=xt&&!!R.transmissionMap,Ot=xt&&!!R.thicknessMap,At=!!R.gradientMap,Bt=!!R.alphaMap,yt=R.alphaTest>0,vt=!!R.alphaHash,wt=!!R.extensions;let ne=Ii;R.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Oe={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:pt,fragmentShader:Rt,defines:R.defines,customVertexShaderID:Ct,customFragmentShaderID:J,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Lt,batchingColor:Lt&&Q._colorsTexture!==null,instancing:It,instancingColor:It&&Q.instanceColor!==null,instancingMorph:It&&Q.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ur,alphaToCoverage:!!R.alphaToCoverage,map:oe,matcap:qe,envMap:ce,envMapMode:ce&&I.mapping,envMapCubeUVHeight:it,aoMap:ue,lightMap:Ee,bumpMap:ae,normalMap:Xe,displacementMap:G,emissiveMap:Ze,normalMapObjectSpace:Xe&&R.normalMapType===cM,normalMapTangentSpace:Xe&&R.normalMapType===lM,metalnessMap:Me,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:ht,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Xt,dispersion:y,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:Et,sheen:mt,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Ut,specularIntensityMap:fe,transmission:xt,transmissionMap:X,thicknessMap:Ot,gradientMap:At,opaque:R.transparent===!1&&R.blending===Ar&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:vt,combine:R.combine,mapUv:oe&&C(R.map.channel),aoMapUv:ue&&C(R.aoMap.channel),lightMapUv:Ee&&C(R.lightMap.channel),bumpMapUv:ae&&C(R.bumpMap.channel),normalMapUv:Xe&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ze&&C(R.emissiveMap.channel),metalnessMapUv:Me&&C(R.metalnessMap.channel),roughnessMapUv:Ne&&C(R.roughnessMap.channel),anisotropyMapUv:ht&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&C(R.sheenRoughnessMap.channel),specularMapUv:zt&&C(R.specularMap.channel),specularColorMapUv:Ut&&C(R.specularColorMap.channel),specularIntensityMapUv:fe&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Ot&&C(R.thicknessMap.channel),alphaMapUv:Bt&&C(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Xe||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ft.attributes.uv&&(oe||Bt),fog:!!lt,useFog:R.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:Q.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:oe&&R.map.isVideoTexture===!0&&be.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:Ze&&R.emissiveMap.isVideoTexture===!0&&be.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fa,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:wt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&R.extensions.multiDraw===!0||Lt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)w.push(k),w.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(F(w,R),P(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function F(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function P(R,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function O(R){const w=A[R.type];let k;if(w){const K=Fi[w];k=zM.clone(K.uniforms)}else k=R.uniforms;return k}function z(R,w){let k=v.get(w);return k!==void 0?++k.usedTimes:(k=new SA(o,w,R,u),_.push(k),v.set(w,k)),k}function H(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),v.delete(R.cacheKey),R.destroy()}}function L(R){m.remove(R)}function $(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:O,acquireProgram:z,releaseProgram:H,releaseShaderCache:L,programs:_,dispose:$}}function bA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function AA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function R_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function C_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v,S,E,A,C,M){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:S,material:E,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[e]=x):(x.id=v.id,x.object=v,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=v.renderOrder,x.z=C,x.group=M),e++,x}function d(v,S,E,A,C,M){const x=h(v,S,E,A,C,M);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(v,S,E,A,C,M){const x=h(v,S,E,A,C,M);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,S){i.length>1&&i.sort(v||AA),s.length>1&&s.sort(S||R_),l.length>1&&l.sort(S||R_)}function _(){for(let v=e,S=o.length;v<S;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function RA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new C_,o.set(s,[h])):l>=u.length?(h=new C_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function CA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new ye};break;case"SpotLight":i={position:new rt,direction:new rt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function wA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let DA=0;function UA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function NA(o){const e=new CA,i=wA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new rt);const l=new rt,u=new tn,h=new tn;function d(p){let _=0,v=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let E=0,A=0,C=0,M=0,x=0,F=0,P=0,O=0,z=0,H=0,L=0;p.sort(UA);for(let R=0,w=p.length;R<w;R++){const k=p[R],K=k.color,Q=k.intensity,lt=k.distance;let ft=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Dr?ft=k.shadow.map.texture:ft=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=K.r*Q,v+=K.g*Q,S+=K.b*Q;else if(k.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(k.sh.coefficients[N],Q);L++}else if(k.isDirectionalLight){const N=e.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const I=k.shadow,it=i.get(k);it.shadowIntensity=I.intensity,it.shadowBias=I.bias,it.shadowNormalBias=I.normalBias,it.shadowRadius=I.radius,it.shadowMapSize=I.mapSize,s.directionalShadow[E]=it,s.directionalShadowMap[E]=ft,s.directionalShadowMatrix[E]=k.shadow.matrix,F++}s.directional[E]=N,E++}else if(k.isSpotLight){const N=e.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(K).multiplyScalar(Q),N.distance=lt,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,s.spot[C]=N;const I=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,I.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[C]=I.matrix,k.castShadow){const it=i.get(k);it.shadowIntensity=I.intensity,it.shadowBias=I.bias,it.shadowNormalBias=I.normalBias,it.shadowRadius=I.radius,it.shadowMapSize=I.mapSize,s.spotShadow[C]=it,s.spotShadowMap[C]=ft,O++}C++}else if(k.isRectAreaLight){const N=e.get(k);N.color.copy(K).multiplyScalar(Q),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=N,M++}else if(k.isPointLight){const N=e.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),N.distance=k.distance,N.decay=k.decay,k.castShadow){const I=k.shadow,it=i.get(k);it.shadowIntensity=I.intensity,it.shadowBias=I.bias,it.shadowNormalBias=I.normalBias,it.shadowRadius=I.radius,it.shadowMapSize=I.mapSize,it.shadowCameraNear=I.camera.near,it.shadowCameraFar=I.camera.far,s.pointShadow[A]=it,s.pointShadowMap[A]=ft,s.pointShadowMatrix[A]=k.shadow.matrix,P++}s.point[A]=N,A++}else if(k.isHemisphereLight){const N=e.get(k);N.skyColor.copy(k.color).multiplyScalar(Q),N.groundColor.copy(k.groundColor).multiplyScalar(Q),s.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const $=s.hash;($.directionalLength!==E||$.pointLength!==A||$.spotLength!==C||$.rectAreaLength!==M||$.hemiLength!==x||$.numDirectionalShadows!==F||$.numPointShadows!==P||$.numSpotShadows!==O||$.numSpotMaps!==z||$.numLightProbes!==L)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=M,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=O+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=L,$.directionalLength=E,$.pointLength=A,$.spotLength=C,$.rectAreaLength=M,$.hemiLength=x,$.numDirectionalShadows=F,$.numPointShadows=P,$.numSpotShadows=O,$.numSpotMaps=z,$.numLightProbes=L,s.version=DA++)}function m(p,_){let v=0,S=0,E=0,A=0,C=0;const M=_.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const P=p[x];if(P.isDirectionalLight){const O=s.directional[v];O.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),v++}else if(P.isSpotLight){const O=s.spot[E];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const O=s.rectArea[A];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(M),S++}else if(P.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function w_(o){const e=new NA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function LA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new w_(o),e.set(l,[d])):u>=h.length?(d=new w_(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const OA=`void main() {
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
}`,FA=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],zA=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],D_=new tn,Bo=new rt,Oh=new rt;function BA(o,e,i){let s=new av;const l=new Ie,u=new Ie,h=new an,d=new $M,m=new ty,p={},_=i.maxTextureSize,v={[$a]:Xn,[Xn]:$a,[fa]:fa},S=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:OA,fragmentShader:PA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new ei;A.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new va(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let x=this.type;this.render=function(H,L,$){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===IS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Nc);const R=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),K=o.state;K.setBlending(da),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=x!==this.type;Q&&L.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(ft=>ft.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,ft=H.length;lt<ft;lt++){const N=H[lt],I=N.shadow;if(I===void 0){ie("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const it=I.getFrameExtents();if(l.multiply(it),u.copy(I.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/it.x),l.x=u.x*it.x,I.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/it.y),l.y=u.y*it.y,I.mapSize.y=u.y)),I.map===null||Q===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Io){if(N.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Hi(l.x,l.y,{format:Dr,type:ma,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new Xo(l.x,l.y,zi),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=ga,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Rn,I.map.depthTexture.magFilter=Rn}else{N.isPointLight?(I.map=new iv(l.x),I.map.depthTexture=new QM(l.x,Gi)):(I.map=new Hi(l.x,l.y),I.map.depthTexture=new Xo(l.x,l.y,Gi)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=ga;const St=o.state.buffers.depth.getReversed();this.type===Nc?(I.map.depthTexture.compareFunction=St?Hd:Id,I.map.depthTexture.minFilter=Nn,I.map.depthTexture.magFilter=Nn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Rn,I.map.depthTexture.magFilter=Rn)}I.camera.updateProjectionMatrix()}const Mt=I.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Mt;St++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,St),o.clear();else{St===0&&(o.setRenderTarget(I.map),o.clear());const U=I.getViewport(St);h.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),K.viewport(h)}if(N.isPointLight){const U=I.camera,tt=I.matrix,pt=N.distance||U.far;pt!==U.far&&(U.far=pt,U.updateProjectionMatrix()),Bo.setFromMatrixPosition(N.matrixWorld),U.position.copy(Bo),Oh.copy(U.position),Oh.add(FA[St]),U.up.copy(zA[St]),U.lookAt(Oh),U.updateMatrixWorld(),tt.makeTranslation(-Bo.x,-Bo.y,-Bo.z),D_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),I._frustum.setFromProjectionMatrix(D_,U.coordinateSystem,U.reversedDepth)}else I.updateMatrices(N);s=I.getFrustum(),O(L,$,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Io&&F(I,$),I.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,k)};function F(H,L){const $=e.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Hi(l.x,l.y,{format:Dr,type:ma})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(L,null,$,S,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(L,null,$,E,C,null)}function P(H,L,$,R){let w=null;const k=$.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)w=k;else if(w=$.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const K=w.uuid,Q=L.uuid;let lt=p[K];lt===void 0&&(lt={},p[K]=lt);let ft=lt[Q];ft===void 0&&(ft=w.clone(),lt[Q]=ft,L.addEventListener("dispose",z)),w=ft}if(w.visible=L.visible,w.wireframe=L.wireframe,R===Io?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:v[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=o.properties.get(w);K.light=$}return w}function O(H,L,$,R,w){if(H.visible===!1)return;if(H.layers.test(L.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Io)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,H.matrixWorld);const Q=e.update(H),lt=H.material;if(Array.isArray(lt)){const ft=Q.groups;for(let N=0,I=ft.length;N<I;N++){const it=ft[N],Mt=lt[it.materialIndex];if(Mt&&Mt.visible){const St=P(H,Mt,R,w);H.onBeforeShadow(o,H,L,$,Q,St,it),o.renderBufferDirect($,null,Q,St,H,it),H.onAfterShadow(o,H,L,$,Q,St,it)}}}else if(lt.visible){const ft=P(H,lt,R,w);H.onBeforeShadow(o,H,L,$,Q,ft,null),o.renderBufferDirect($,null,Q,ft,H,null),H.onAfterShadow(o,H,L,$,Q,ft,null)}}const K=H.children;for(let Q=0,lt=K.length;Q<lt;Q++)O(K[Q],L,$,R,w)}function z(H){H.target.removeEventListener("dispose",z);for(const $ in p){const R=p[$],w=H.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const IA={[Bh]:Ih,[Hh]:kh,[Gh]:Xh,[Cr]:Vh,[Ih]:Bh,[kh]:Hh,[Xh]:Gh,[Vh]:Cr};function HA(o,e){function i(){let X=!1;const Ot=new an;let At=null;const Bt=new an(0,0,0,0);return{setMask:function(yt){At!==yt&&!X&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){X=yt},setClear:function(yt,vt,wt,ne,Oe){Oe===!0&&(yt*=ne,vt*=ne,wt*=ne),Ot.set(yt,vt,wt,ne),Bt.equals(Ot)===!1&&(o.clearColor(yt,vt,wt,ne),Bt.copy(Ot))},reset:function(){X=!1,At=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,Ot=!1,At=null,Bt=null,yt=null;return{setReversed:function(vt){if(Ot!==vt){const wt=e.get("EXT_clip_control");vt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Ot=vt;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Ot},setTest:function(vt){vt?ct(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(vt){At!==vt&&!X&&(o.depthMask(vt),At=vt)},setFunc:function(vt){if(Ot&&(vt=IA[vt]),Bt!==vt){switch(vt){case Bh:o.depthFunc(o.NEVER);break;case Ih:o.depthFunc(o.ALWAYS);break;case Hh:o.depthFunc(o.LESS);break;case Cr:o.depthFunc(o.LEQUAL);break;case Gh:o.depthFunc(o.EQUAL);break;case Vh:o.depthFunc(o.GEQUAL);break;case kh:o.depthFunc(o.GREATER);break;case Xh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){yt!==vt&&(Ot&&(vt=1-vt),o.clearDepth(vt),yt=vt)},reset:function(){X=!1,At=null,Bt=null,yt=null,Ot=!1}}}function l(){let X=!1,Ot=null,At=null,Bt=null,yt=null,vt=null,wt=null,ne=null,Oe=null;return{setTest:function(Te){X||(Te?ct(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Te){Ot!==Te&&!X&&(o.stencilMask(Te),Ot=Te)},setFunc:function(Te,Cn,gi){(At!==Te||Bt!==Cn||yt!==gi)&&(o.stencilFunc(Te,Cn,gi),At=Te,Bt=Cn,yt=gi)},setOp:function(Te,Cn,gi){(vt!==Te||wt!==Cn||ne!==gi)&&(o.stencilOp(Te,Cn,gi),vt=Te,wt=Cn,ne=gi)},setLocked:function(Te){X=Te},setClear:function(Te){Oe!==Te&&(o.clearStencil(Te),Oe=Te)},reset:function(){X=!1,Ot=null,At=null,Bt=null,yt=null,vt=null,wt=null,ne=null,Oe=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,F=null,P=null,O=null,z=null,H=null,L=new ye(0,0,0),$=0,R=!1,w=null,k=null,K=null,Q=null,lt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(it)[1]),N=I>=1):it.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),N=I>=2);let Mt=null,St={};const U=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),pt=new an().fromArray(U),Rt=new an().fromArray(tt);function Ct(X,Ot,At,Bt){const yt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(X,vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let wt=0;wt<At;wt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Ot+wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return vt}const J={};J[o.TEXTURE_2D]=Ct(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Cr),ae(!1),Xe(U0),ct(o.CULL_FACE),ue(da);function ct(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Tt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function It(X,Ot){return v[X]!==Ot?(o.bindFramebuffer(X,Ot),v[X]=Ot,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ot),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Lt(X,Ot){let At=E,Bt=!1;if(X){At=S.get(Ot),At===void 0&&(At=[],S.set(Ot,At));const yt=X.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,wt=yt.length;vt<wt;vt++)At[vt]=o.COLOR_ATTACHMENT0+vt;At.length=yt.length,Bt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(At)}function oe(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const qe={[bs]:o.FUNC_ADD,[GS]:o.FUNC_SUBTRACT,[VS]:o.FUNC_REVERSE_SUBTRACT};qe[kS]=o.MIN,qe[XS]=o.MAX;const ce={[WS]:o.ZERO,[qS]:o.ONE,[YS]:o.SRC_COLOR,[Fh]:o.SRC_ALPHA,[$S]:o.SRC_ALPHA_SATURATE,[QS]:o.DST_COLOR,[ZS]:o.DST_ALPHA,[jS]:o.ONE_MINUS_SRC_COLOR,[zh]:o.ONE_MINUS_SRC_ALPHA,[JS]:o.ONE_MINUS_DST_COLOR,[KS]:o.ONE_MINUS_DST_ALPHA,[tM]:o.CONSTANT_COLOR,[eM]:o.ONE_MINUS_CONSTANT_COLOR,[nM]:o.CONSTANT_ALPHA,[iM]:o.ONE_MINUS_CONSTANT_ALPHA};function ue(X,Ot,At,Bt,yt,vt,wt,ne,Oe,Te){if(X===da){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),X!==HS){if(X!==M||Te!==R){if((x!==bs||O!==bs)&&(o.blendEquation(o.FUNC_ADD),x=bs,O=bs),Te)switch(X){case Ar:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ph:o.blendFunc(o.ONE,o.ONE);break;case N0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case L0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",X);break}else switch(X){case Ar:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ph:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case N0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",X);break}F=null,P=null,z=null,H=null,L.set(0,0,0),$=0,M=X,R=Te}return}yt=yt||Ot,vt=vt||At,wt=wt||Bt,(Ot!==x||yt!==O)&&(o.blendEquationSeparate(qe[Ot],qe[yt]),x=Ot,O=yt),(At!==F||Bt!==P||vt!==z||wt!==H)&&(o.blendFuncSeparate(ce[At],ce[Bt],ce[vt],ce[wt]),F=At,P=Bt,z=vt,H=wt),(ne.equals(L)===!1||Oe!==$)&&(o.blendColor(ne.r,ne.g,ne.b,Oe),L.copy(ne),$=Oe),M=X,R=!1}function Ee(X,Ot){X.side===fa?Tt(o.CULL_FACE):ct(o.CULL_FACE);let At=X.side===Xn;Ot&&(At=!At),ae(At),X.blending===Ar&&X.transparent===!1?ue(da):ue(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ze(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Xe(X){X!==zS?(ct(o.CULL_FACE),X!==k&&(X===U0?o.cullFace(o.BACK):X===BS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),k=X}function G(X){X!==K&&(N&&o.lineWidth(X),K=X)}function Ze(X,Ot,At){X?(ct(o.POLYGON_OFFSET_FILL),(Q!==Ot||lt!==At)&&(o.polygonOffset(Ot,At),Q=Ot,lt=At)):Tt(o.POLYGON_OFFSET_FILL)}function Me(X){X?ct(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Ne(X){X===void 0&&(X=o.TEXTURE0+ft-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function Yt(X,Ot,At){At===void 0&&(Mt===null?At=o.TEXTURE0+ft-1:At=Mt);let Bt=St[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},St[At]=Bt),(Bt.type!==X||Bt.texture!==Ot)&&(Mt!==At&&(o.activeTexture(At),Mt=At),o.bindTexture(X,Ot||J[X]),Bt.type=X,Bt.texture=Ot)}function D(){const X=St[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function mt(){try{o.texSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Dt(){try{o.texStorage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function bt(X){pt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),pt.copy(X))}function Ht(X){Rt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Rt.copy(X))}function zt(X,Ot){let At=p.get(Ot);At===void 0&&(At=new WeakMap,p.set(Ot,At));let Bt=At.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(Ot,X.name),At.set(X,Bt))}function Ut(X,Ot){const Bt=p.get(Ot).get(X);m.get(Ot)!==Bt&&(o.uniformBlockBinding(Ot,Bt,X.__bindingPointIndex),m.set(Ot,Bt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,St={},v={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,F=null,P=null,O=null,z=null,H=null,L=new ye(0,0,0),$=0,R=!1,w=null,k=null,K=null,Q=null,lt=null,pt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:Tt,bindFramebuffer:It,drawBuffers:Lt,useProgram:oe,setBlending:ue,setMaterial:Ee,setFlipSided:ae,setCullFace:Xe,setLineWidth:G,setPolygonOffset:Ze,setScissorTest:Me,activeTexture:Ne,bindTexture:Yt,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:ee,texImage3D:Et,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:Xt,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Zt,scissor:bt,viewport:Ht,reset:fe}}function GA(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,_=new WeakMap;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,y){return E?new OffscreenCanvas(D,y):Hc("canvas")}function C(D,y,W){let mt=1;const xt=Yt(D);if((xt.width>W||xt.height>W)&&(mt=W/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ht=Math.floor(mt*xt.width),Zt=Math.floor(mt*xt.height);v===void 0&&(v=A(ht,Zt));const Dt=y?A(ht,Zt):v;return Dt.width=ht,Dt.height=Zt,Dt.getContext("2d").drawImage(D,0,0,ht,Zt),ie("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+Zt+")."),Dt}else return"data"in D&&ie("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,y,W,mt,xt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ht=y;if(y===o.RED&&(W===o.FLOAT&&(ht=o.R32F),W===o.HALF_FLOAT&&(ht=o.R16F),W===o.UNSIGNED_BYTE&&(ht=o.R8)),y===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ht=o.R8UI),W===o.UNSIGNED_SHORT&&(ht=o.R16UI),W===o.UNSIGNED_INT&&(ht=o.R32UI),W===o.BYTE&&(ht=o.R8I),W===o.SHORT&&(ht=o.R16I),W===o.INT&&(ht=o.R32I)),y===o.RG&&(W===o.FLOAT&&(ht=o.RG32F),W===o.HALF_FLOAT&&(ht=o.RG16F),W===o.UNSIGNED_BYTE&&(ht=o.RG8)),y===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ht=o.RG8UI),W===o.UNSIGNED_SHORT&&(ht=o.RG16UI),W===o.UNSIGNED_INT&&(ht=o.RG32UI),W===o.BYTE&&(ht=o.RG8I),W===o.SHORT&&(ht=o.RG16I),W===o.INT&&(ht=o.RG32I)),y===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),W===o.UNSIGNED_INT&&(ht=o.RGB32UI),W===o.BYTE&&(ht=o.RGB8I),W===o.SHORT&&(ht=o.RGB16I),W===o.INT&&(ht=o.RGB32I)),y===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),W===o.UNSIGNED_INT&&(ht=o.RGBA32UI),W===o.BYTE&&(ht=o.RGBA8I),W===o.SHORT&&(ht=o.RGBA16I),W===o.INT&&(ht=o.RGBA32I)),y===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),y===o.RGBA){const Zt=xt?Bc:be.getTransfer(mt);W===o.FLOAT&&(ht=o.RGBA32F),W===o.HALF_FLOAT&&(ht=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ht=Zt===Be?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function O(D,y){let W;return D?y===null||y===Gi||y===Vo?W=o.DEPTH24_STENCIL8:y===zi?W=o.DEPTH32F_STENCIL8:y===Go&&(W=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===Vo?W=o.DEPTH_COMPONENT24:y===zi?W=o.DEPTH_COMPONENT32F:y===Go&&(W=o.DEPTH_COMPONENT16),W}function z(D,y){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Nn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function H(D){const y=D.target;y.removeEventListener("dispose",H),$(y),y.isVideoTexture&&_.delete(y)}function L(D){const y=D.target;y.removeEventListener("dispose",L),w(y)}function $(D){const y=s.get(D);if(y.__webglInit===void 0)return;const W=D.source,mt=S.get(W);if(mt){const xt=mt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&R(D),Object.keys(mt).length===0&&S.delete(W)}s.remove(D)}function R(D){const y=s.get(D);o.deleteTexture(y.__webglTexture);const W=D.source,mt=S.get(W);delete mt[y.__cacheKey],h.memory.textures--}function w(D){const y=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(y.__webglFramebuffer[mt]))for(let xt=0;xt<y.__webglFramebuffer[mt].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[mt][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[mt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[mt])}else{if(Array.isArray(y.__webglFramebuffer))for(let mt=0;mt<y.__webglFramebuffer.length;mt++)o.deleteFramebuffer(y.__webglFramebuffer[mt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let mt=0;mt<y.__webglColorRenderbuffer.length;mt++)y.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[mt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=D.textures;for(let mt=0,xt=W.length;mt<xt;mt++){const ht=s.get(W[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(W[mt])}s.remove(D)}let k=0;function K(){k=0}function Q(){const D=k;return D>=l.maxTextures&&ie("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function lt(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function ft(D,y){const W=s.get(D);if(D.isVideoTexture&&Me(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const mt=D.image;if(mt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,D,y);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+y)}function N(D,y){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){J(W,D,y);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+y)}function I(D,y){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){J(W,D,y);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+y)}function it(D,y){const W=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ct(W,D,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+y)}const Mt={[Yh]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[jh]:o.MIRRORED_REPEAT},St={[Rn]:o.NEAREST,[rM]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[ih]:o.LINEAR_MIPMAP_NEAREST,[Rs]:o.LINEAR_MIPMAP_LINEAR},U={[uM]:o.NEVER,[mM]:o.ALWAYS,[fM]:o.LESS,[Id]:o.LEQUAL,[hM]:o.EQUAL,[Hd]:o.GEQUAL,[dM]:o.GREATER,[pM]:o.NOTEQUAL};function tt(D,y){if(y.type===zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nn||y.magFilter===ih||y.magFilter===oc||y.magFilter===Rs||y.minFilter===Nn||y.minFilter===ih||y.minFilter===oc||y.minFilter===Rs)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[y.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[y.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[y.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,St[y.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,St[y.minFilter]),y.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rn||y.minFilter!==oc&&y.minFilter!==Rs||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function pt(D,y){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",H));const mt=y.source;let xt=S.get(mt);xt===void 0&&(xt={},S.set(mt,xt));const ht=lt(y);if(ht!==D.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),xt[ht].usedTimes++;const Zt=xt[D.__cacheKey];Zt!==void 0&&(xt[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(y)),D.__cacheKey=ht,D.__webglTexture=xt[ht].texture}return W}function Rt(D,y,W){return Math.floor(Math.floor(D/W)/y)}function Ct(D,y,W,mt){const ht=D.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,W,mt,y.data);else{ht.sort((Et,bt)=>Et.start-bt.start);let Zt=0;for(let Et=1;Et<ht.length;Et++){const bt=ht[Zt],Ht=ht[Et],zt=bt.start+bt.count,Ut=Rt(Ht.start,y.width,4),fe=Rt(bt.start,y.width,4);Ht.start<=zt+1&&Ut===fe&&Rt(Ht.start+Ht.count-1,y.width,4)===Ut?bt.count=Math.max(bt.count,Ht.start+Ht.count-bt.start):(++Zt,ht[Zt]=Ht)}ht.length=Zt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Et=0,bt=ht.length;Et<bt;Et++){const Ht=ht[Et],zt=Math.floor(Ht.start/4),Ut=Math.ceil(Ht.count/4),fe=zt%y.width,X=Math.floor(zt/y.width),Ot=Ut,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,fe,X,Ot,At,W,mt,y.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function J(D,y,W){let mt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(mt=o.TEXTURE_3D);const xt=pt(D,y),ht=y.source;i.bindTexture(mt,D.__webglTexture,o.TEXTURE0+W);const Zt=s.get(ht);if(ht.version!==Zt.__version||xt===!0){i.activeTexture(o.TEXTURE0+W);const Dt=be.getPrimaries(be.workingColorSpace),Xt=y.colorSpace===Qa?null:be.getPrimaries(y.colorSpace),ee=y.colorSpace===Qa||Dt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=C(y.image,!1,l.maxTextureSize);Et=Ne(y,Et);const bt=u.convert(y.format,y.colorSpace),Ht=u.convert(y.type);let zt=P(y.internalFormat,bt,Ht,y.colorSpace,y.isVideoTexture);tt(mt,y);let Ut;const fe=y.mipmaps,X=y.isVideoTexture!==!0,Ot=Zt.__version===void 0||xt===!0,At=ht.dataReady,Bt=z(y,Et);if(y.isDepthTexture)zt=O(y.format===Cs,y.type),Ot&&(X?i.texStorage2D(o.TEXTURE_2D,1,zt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,bt,Ht,null));else if(y.isDataTexture)if(fe.length>0){X&&Ot&&i.texStorage2D(o.TEXTURE_2D,Bt,zt,fe[0].width,fe[0].height);for(let yt=0,vt=fe.length;yt<vt;yt++)Ut=fe[yt],X?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,bt,Ht,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Ut.width,Ut.height,0,bt,Ht,Ut.data);y.generateMipmaps=!1}else X?(Ot&&i.texStorage2D(o.TEXTURE_2D,Bt,zt,Et.width,Et.height),At&&Ct(y,Et,bt,Ht)):i.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,bt,Ht,Et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){X&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,zt,fe[0].width,fe[0].height,Et.depth);for(let yt=0,vt=fe.length;yt<vt;yt++)if(Ut=fe[yt],y.format!==Ri)if(bt!==null)if(X){if(At)if(y.layerUpdates.size>0){const wt=o_(Ut.width,Ut.height,y.format,y.type);for(const ne of y.layerUpdates){const Oe=Ut.data.subarray(ne*wt/Ut.data.BYTES_PER_ELEMENT,(ne+1)*wt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,Ut.width,Ut.height,1,bt,Oe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Et.depth,bt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Ut.width,Ut.height,Et.depth,0,Ut.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Et.depth,bt,Ht,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Ut.width,Ut.height,Et.depth,0,bt,Ht,Ut.data)}else{X&&Ot&&i.texStorage2D(o.TEXTURE_2D,Bt,zt,fe[0].width,fe[0].height);for(let yt=0,vt=fe.length;yt<vt;yt++)Ut=fe[yt],y.format!==Ri?bt!==null?X?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,bt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,zt,Ut.width,Ut.height,0,Ut.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,bt,Ht,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Ut.width,Ut.height,0,bt,Ht,Ut.data)}else if(y.isDataArrayTexture)if(X){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,zt,Et.width,Et.height,Et.depth),At)if(y.layerUpdates.size>0){const yt=o_(Et.width,Et.height,y.format,y.type);for(const vt of y.layerUpdates){const wt=Et.data.subarray(vt*yt/Et.data.BYTES_PER_ELEMENT,(vt+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,bt,Ht,wt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ht,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Et.width,Et.height,Et.depth,0,bt,Ht,Et.data);else if(y.isData3DTexture)X?(Ot&&i.texStorage3D(o.TEXTURE_3D,Bt,zt,Et.width,Et.height,Et.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ht,Et.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Et.width,Et.height,Et.depth,0,bt,Ht,Et.data);else if(y.isFramebufferTexture){if(Ot)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,zt,Et.width,Et.height);else{let yt=Et.width,vt=Et.height;for(let wt=0;wt<Bt;wt++)i.texImage2D(o.TEXTURE_2D,wt,zt,yt,vt,0,bt,Ht,null),yt>>=1,vt>>=1}}else if(fe.length>0){if(X&&Ot){const yt=Yt(fe[0]);i.texStorage2D(o.TEXTURE_2D,Bt,zt,yt.width,yt.height)}for(let yt=0,vt=fe.length;yt<vt;yt++)Ut=fe[yt],X?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,Ht,Ut):i.texImage2D(o.TEXTURE_2D,yt,zt,bt,Ht,Ut);y.generateMipmaps=!1}else if(X){if(Ot){const yt=Yt(Et);i.texStorage2D(o.TEXTURE_2D,Bt,zt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Ht,Et)}else i.texImage2D(o.TEXTURE_2D,0,zt,bt,Ht,Et);M(y)&&x(mt),Zt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ct(D,y,W){if(y.image.length!==6)return;const mt=pt(D,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const ht=s.get(xt);if(xt.version!==ht.__version||mt===!0){i.activeTexture(o.TEXTURE0+W);const Zt=be.getPrimaries(be.workingColorSpace),Dt=y.colorSpace===Qa?null:be.getPrimaries(y.colorSpace),Xt=y.colorSpace===Qa||Zt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!ee&&!Et?bt[vt]=C(y.image[vt],!0,l.maxCubemapSize):bt[vt]=Et?y.image[vt].image:y.image[vt],bt[vt]=Ne(y,bt[vt]);const Ht=bt[0],zt=u.convert(y.format,y.colorSpace),Ut=u.convert(y.type),fe=P(y.internalFormat,zt,Ut,y.colorSpace),X=y.isVideoTexture!==!0,Ot=ht.__version===void 0||mt===!0,At=xt.dataReady;let Bt=z(y,Ht);tt(o.TEXTURE_CUBE_MAP,y);let yt;if(ee){X&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,fe,Ht.width,Ht.height);for(let vt=0;vt<6;vt++){yt=bt[vt].mipmaps;for(let wt=0;wt<yt.length;wt++){const ne=yt[wt];y.format!==Ri?zt!==null?X?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,0,0,ne.width,ne.height,zt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,fe,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,0,0,ne.width,ne.height,zt,Ut,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,fe,ne.width,ne.height,0,zt,Ut,ne.data)}}}else{if(yt=y.mipmaps,X&&Ot){yt.length>0&&Bt++;const vt=Yt(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,fe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,zt,Ut,bt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,bt[vt].width,bt[vt].height,0,zt,Ut,bt[vt].data);for(let wt=0;wt<yt.length;wt++){const Oe=yt[wt].image[vt].image;X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,0,0,Oe.width,Oe.height,zt,Ut,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,fe,Oe.width,Oe.height,0,zt,Ut,Oe.data)}}else{X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt,Ut,bt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,zt,Ut,bt[vt]);for(let wt=0;wt<yt.length;wt++){const ne=yt[wt];X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,0,0,zt,Ut,ne.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,fe,zt,Ut,ne.image[vt])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),ht.__version=xt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Tt(D,y,W,mt,xt,ht){const Zt=u.convert(W.format,W.colorSpace),Dt=u.convert(W.type),Xt=P(W.internalFormat,Zt,Dt,W.colorSpace),ee=s.get(y),Et=s.get(W);if(Et.__renderTarget=y,!ee.__hasExternalTextures){const bt=Math.max(1,y.width>>ht),Ht=Math.max(1,y.height>>ht);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ht,Xt,bt,Ht,y.depth,0,Zt,Dt,null):i.texImage2D(xt,ht,Xt,bt,Ht,0,Zt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ze(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,xt,Et.__webglTexture,0,G(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,xt,Et.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(D,y,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),y.depthBuffer){const mt=y.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,ht=O(y.stencilBuffer,xt),Zt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ze(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ht,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ht,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ht,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,D)}else{const mt=y.textures;for(let xt=0;xt<mt.length;xt++){const ht=mt[xt],Zt=u.convert(ht.format,ht.colorSpace),Dt=u.convert(ht.type),Xt=P(ht.internalFormat,Zt,Dt,ht.colorSpace);Ze(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Xt,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Xt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(D,y,W){const mt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),mt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",H)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,y.depthTexture);const ee=u.convert(y.depthTexture.format),Et=u.convert(y.depthTexture.type);let bt;y.depthTexture.format===ga?bt=o.DEPTH_COMPONENT24:y.depthTexture.format===Cs&&(bt=o.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,bt,y.width,y.height,0,ee,Et,null)}}else ft(y.depthTexture,0);const ht=xt.__webglTexture,Zt=G(y),Dt=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=y.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ga)Ze(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Dt,ht,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Dt,ht,0);else if(y.depthTexture.format===Cs)Ze(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Dt,ht,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Dt,ht,0);else throw new Error("Unknown depthTexture format")}function oe(D){const y=s.get(D),W=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const mt=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),mt){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=mt}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let mt=0;mt<6;mt++)Lt(y.__webglFramebuffer[mt],D,mt);else{const mt=D.texture.mipmaps;mt&&mt.length>0?Lt(y.__webglFramebuffer[0],D,0):Lt(y.__webglFramebuffer,D,0)}else if(W){y.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[mt]),y.__webglDepthbuffer[mt]===void 0)y.__webglDepthbuffer[mt]=o.createRenderbuffer(),It(y.__webglDepthbuffer[mt],D,!1);else{const xt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ht)}}else{const mt=D.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),It(y.__webglDepthbuffer,D,!1);else{const xt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qe(D,y,W){const mt=s.get(D);y!==void 0&&Tt(mt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&oe(D)}function ce(D){const y=D.texture,W=s.get(D),mt=s.get(y);D.addEventListener("dispose",L);const xt=D.textures,ht=D.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(Zt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=y.version,h.memory.textures++),ht){W.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Dt]=[];for(let Xt=0;Xt<y.mipmaps.length;Xt++)W.__webglFramebuffer[Dt][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Dt=0;Dt<y.mipmaps.length;Dt++)W.__webglFramebuffer[Dt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Dt=0,Xt=xt.length;Dt<Xt;Dt++){const ee=s.get(xt[Dt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Ze(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Xt=xt[Dt];W.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Dt]);const ee=u.convert(Xt.format,Xt.colorSpace),Et=u.convert(Xt.type),bt=P(Xt.internalFormat,ee,Et,Xt.colorSpace,D.isXRRenderTarget===!0),Ht=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),It(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,y);for(let Dt=0;Dt<6;Dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Xt=0;Xt<y.mipmaps.length;Xt++)Tt(W.__webglFramebuffer[Dt][Xt],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Xt);else Tt(W.__webglFramebuffer[Dt],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Dt=0,Xt=xt.length;Dt<Xt;Dt++){const ee=xt[Dt],Et=s.get(ee);let bt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),tt(bt,ee),Tt(W.__webglFramebuffer,D,ee,o.COLOR_ATTACHMENT0+Dt,bt,0),M(ee)&&x(bt)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Dt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,mt.__webglTexture),tt(Dt,y),y.mipmaps&&y.mipmaps.length>0)for(let Xt=0;Xt<y.mipmaps.length;Xt++)Tt(W.__webglFramebuffer[Xt],D,y,o.COLOR_ATTACHMENT0,Dt,Xt);else Tt(W.__webglFramebuffer,D,y,o.COLOR_ATTACHMENT0,Dt,0);M(y)&&x(Dt),i.unbindTexture()}D.depthBuffer&&oe(D)}function ue(D){const y=D.textures;for(let W=0,mt=y.length;W<mt;W++){const xt=y[W];if(M(xt)){const ht=F(D),Zt=s.get(xt).__webglTexture;i.bindTexture(ht,Zt),x(ht),i.unbindTexture()}}}const Ee=[],ae=[];function Xe(D){if(D.samples>0){if(Ze(D)===!1){const y=D.textures,W=D.width,mt=D.height;let xt=o.COLOR_BUFFER_BIT;const ht=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(D),Dt=y.length>1;if(Dt)for(let ee=0;ee<y.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=D.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<y.length;ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=s.get(y[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,W,mt,0,0,W,mt,xt,o.NEAREST),m===!0&&(Ee.length=0,ae.length=0,Ee.push(o.COLOR_ATTACHMENT0+ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ee.push(ht),ae.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ee))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let ee=0;ee<y.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=s.get(y[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const y=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Ze(D){const y=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(D){const y=h.render.frame;_.get(D)!==y&&(_.set(D,y),D.update())}function Ne(D,y){const W=D.colorSpace,mt=D.format,xt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Ur&&W!==Qa&&(be.getTransfer(W)===Be?(mt!==Ri||xt!==mi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",W)),y}function Yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=ft,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=it,this.rebindTextures=qe,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function VA(o,e){function i(s,l=Qa){let u;const h=be.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===k_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===H_)return o.BYTE;if(s===G_)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===Ld)return o.INT;if(s===Gi)return o.UNSIGNED_INT;if(s===zi)return o.FLOAT;if(s===ma)return o.HALF_FLOAT;if(s===X_)return o.ALPHA;if(s===W_)return o.RGB;if(s===Ri)return o.RGBA;if(s===ga)return o.DEPTH_COMPONENT;if(s===Cs)return o.DEPTH_STENCIL;if(s===q_)return o.RED;if(s===Fd)return o.RED_INTEGER;if(s===Dr)return o.RG;if(s===zd)return o.RG_INTEGER;if(s===Bd)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===Fc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===$h||s===td)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===nd)return u.COMPRESSED_R11_EAC;if(s===id)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ad)return u.COMPRESSED_RG11_EAC;if(s===sd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sd||s===Md||s===yd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Sd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===Td||s===bd||s===Ad)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ed)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const kA=`
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

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new rv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new wi({vertexShader:kA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new va(new Xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qA extends Lr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",M=new WA,x={},F=i.getContextAttributes();let P=null,O=null;const z=[],H=[],L=new Ie;let $=null;const R=new pi;R.viewport=new an;const w=new pi;w.viewport=new an;const k=[R,w],K=new ey;let Q=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=z[J];return ct===void 0&&(ct=new Ah,z[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=z[J];return ct===void 0&&(ct=new Ah,z[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=z[J];return ct===void 0&&(ct=new Ah,z[J]=ct),ct.getHandSpace()};function ft(J){const ct=H.indexOf(J.inputSource);if(ct===-1)return;const Tt=z[ct];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,p||h),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let J=0;J<z.length;J++){const ct=H[J];ct!==null&&(H[J]=null,z[J].disconnect(ct))}Q=null,lt=null,M.reset();for(const J in x)delete x[J];e.setRenderTarget(P),E=null,S=null,v=null,l=null,O=null,Ct.stop(),s.isPresenting=!1,e.setPixelRatio($),e.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),F.xrCompatible!==!0&&await i.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(L),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,It=null,Lt=null;F.depth&&(Lt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=F.stencil?Cs:ga,It=F.stencil?Vo:Gi);const oe={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Hi(S.textureWidth,S.textureHeight,{format:Ri,type:mi,depthTexture:new Xo(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Tt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Hi(E.framebufferWidth,E.framebufferHeight,{format:Ri,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(J){for(let ct=0;ct<J.removed.length;ct++){const Tt=J.removed[ct],It=H.indexOf(Tt);It>=0&&(H[It]=null,z[It].disconnect(Tt))}for(let ct=0;ct<J.added.length;ct++){const Tt=J.added[ct];let It=H.indexOf(Tt);if(It===-1){for(let oe=0;oe<z.length;oe++)if(oe>=H.length){H.push(Tt),It=oe;break}else if(H[oe]===null){H[oe]=Tt,It=oe;break}if(It===-1)break}const Lt=z[It];Lt&&Lt.connect(Tt)}}const it=new rt,Mt=new rt;function St(J,ct,Tt){it.setFromMatrixPosition(ct.matrixWorld),Mt.setFromMatrixPosition(Tt.matrixWorld);const It=it.distanceTo(Mt),Lt=ct.projectionMatrix.elements,oe=Tt.projectionMatrix.elements,qe=Lt[14]/(Lt[10]-1),ce=Lt[14]/(Lt[10]+1),ue=(Lt[9]+1)/Lt[5],Ee=(Lt[9]-1)/Lt[5],ae=(Lt[8]-1)/Lt[0],Xe=(oe[8]+1)/oe[0],G=qe*ae,Ze=qe*Xe,Me=It/(-ae+Xe),Ne=Me*-ae;if(ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ne),J.translateZ(Me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=qe+Me,D=ce+Me,y=G-Ne,W=Ze+(It-Ne),mt=ue*ce/D*Yt,xt=Ee*ce/D*Yt;J.projectionMatrix.makePerspective(y,W,mt,xt,Yt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ct=J.near,Tt=J.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),K.near=w.near=R.near=ct,K.far=w.far=R.far=Tt,(Q!==K.near||lt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,lt=K.far),K.layers.mask=J.layers.mask|6,R.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;const It=J.parent,Lt=K.cameras;U(K,It);for(let oe=0;oe<Lt.length;oe++)U(Lt[oe],It);Lt.length===2?St(K,R,w):K.projectionMatrix.copy(R.projectionMatrix),tt(J,K,It)};function tt(J,ct,Tt){Tt===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(J){return x[J]};let pt=null;function Rt(J,ct){if(_=ct.getViewerPose(p||h),A=ct,_!==null){const Tt=_.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let It=!1;Tt.length!==K.cameras.length&&(K.cameras.length=0,It=!0);for(let ce=0;ce<Tt.length;ce++){const ue=Tt[ce];let Ee=null;if(E!==null)Ee=E.getViewport(ue);else{const Xe=v.getViewSubImage(S,ue);Ee=Xe.viewport,ce===0&&(e.setRenderTargetTextures(O,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(O))}let ae=k[ce];ae===void 0&&(ae=new pi,ae.layers.enable(ce),ae.viewport=new an,k[ce]=ae),ae.matrix.fromArray(ue.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ce===0&&(K.matrix.copy(ae.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),It===!0&&K.cameras.push(ae)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const ce=v.getDepthInformation(Tt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,l.renderState)}if(Lt&&Lt.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let ce=0;ce<Tt.length;ce++){const ue=Tt[ce].camera;if(ue){let Ee=x[ue];Ee||(Ee=new rv,x[ue]=Ee);const ae=v.getCameraImage(ue);Ee.sourceTexture=ae}}}}for(let Tt=0;Tt<z.length;Tt++){const It=H[Tt],Lt=z[Tt];It!==null&&Lt!==void 0&&Lt.update(It,ct,p||h)}pt&&pt(J,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),A=null}const Ct=new lv;Ct.setAnimationLoop(Rt),this.setAnimationLoop=function(J){pt=J},this.dispose=function(){}}}const Es=new _a,YA=new tn;function jA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,tv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,P,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),v(M,x)):x.isMeshPhongMaterial?(u(M,x),_(M,x)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,O)):x.isMeshMatcapMaterial?(u(M,x),A(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,F,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=e.get(x),P=F.envMap,O=F.envMapRotation;P&&(M.envMap.value=P,Es.copy(O),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),M.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Es)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,F,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const F=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ZA(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,P){const O=P.program;s.uniformBlockBinding(F,O)}function p(F,P){let O=l[F.id];O===void 0&&(A(F),O=_(F),l[F.id]=O,F.addEventListener("dispose",M));const z=P.program;s.updateUBOMapping(F,z);const H=e.render.frame;u[F.id]!==H&&(S(F),u[F.id]=H)}function _(F){const P=v();F.__bindingPointIndex=P;const O=o.createBuffer(),z=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,O),O}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const P=l[F.id],O=F.uniforms,z=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,L=O.length;H<L;H++){const $=Array.isArray(O[H])?O[H]:[O[H]];for(let R=0,w=$.length;R<w;R++){const k=$[R];if(E(k,H,R,z)===!0){const K=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let lt=0;for(let ft=0;ft<Q.length;ft++){const N=Q[ft],I=C(N);typeof N=="number"||typeof N=="boolean"?(k.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,K+lt,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=0,k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=0,k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=0):(N.toArray(k.__data,lt),lt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,P,O,z){const H=F.value,L=P+"_"+O;if(z[L]===void 0)return typeof H=="number"||typeof H=="boolean"?z[L]=H:z[L]=H.clone(),!0;{const $=z[L];if(typeof H=="number"||typeof H=="boolean"){if($!==H)return z[L]=H,!0}else if($.equals(H)===!1)return $.copy(H),!0}return!1}function A(F){const P=F.uniforms;let O=0;const z=16;for(let L=0,$=P.length;L<$;L++){const R=Array.isArray(P[L])?P[L]:[P[L]];for(let w=0,k=R.length;w<k;w++){const K=R[w],Q=Array.isArray(K.value)?K.value:[K.value];for(let lt=0,ft=Q.length;lt<ft;lt++){const N=Q[lt],I=C(N),it=O%z,Mt=it%I.boundary,St=it+Mt;O+=Mt,St!==0&&z-St<I.storage&&(O+=z-St),K.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=O,O+=I.storage}}}const H=O%z;return H>0&&(O+=z-H),F.__size=O,F.__cache={},this}function C(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",F),P}function M(F){const P=F.target;P.removeEventListener("dispose",M);const O=h.indexOf(P.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const KA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function QA(){return Pi===null&&(Pi=new kM(KA,16,16,Dr,ma),Pi.name="DFG_LUT",Pi.minFilter=Nn,Pi.magFilter=Nn,Pi.wrapS=ha,Pi.wrapT=ha,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class JA{constructor(e={}){const{canvas:i=gM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:E=mi}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const C=E,M=new Set([Bd,zd,Fd]),x=new Set([mi,Gi,Go,Vo,Od,Pd]),F=new Uint32Array(4),P=new Int32Array(4);let O=null,z=null;const H=[],L=[];let $=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=di;let k=0,K=0,Q=null,lt=-1,ft=null;const N=new an,I=new an;let it=null;const Mt=new ye(0);let St=0,U=i.width,tt=i.height,pt=1,Rt=null,Ct=null;const J=new an(0,0,U,tt),ct=new an(0,0,U,tt);let Tt=!1;const It=new av;let Lt=!1,oe=!1;const qe=new tn,ce=new rt,ue=new an,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Xe(){return Q===null?pt:1}let G=s;function Ze(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Oe,!1),i.addEventListener("webglcontextcreationerror",Te,!1),G===null){const q="webgl2";if(G=Ze(q,b),G===null)throw Ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ce("WebGLRenderer: "+b.message),b}let Me,Ne,Yt,D,y,W,mt,xt,ht,Zt,Dt,Xt,ee,Et,bt,Ht,zt,Ut,fe,X,Ot,At,Bt,yt;function vt(){Me=new QT(G),Me.init(),At=new VA(G,Me),Ne=new VT(G,Me,e,At),Yt=new HA(G,Me),Ne.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),D=new tb(G),y=new bA,W=new GA(G,Me,Yt,y,Ne,At,D),mt=new XT(R),xt=new KT(R),ht=new ay(G),Bt=new HT(G,ht),Zt=new JT(G,ht,D,Bt),Dt=new nb(G,Zt,ht,D),fe=new eb(G,Ne,W),Ht=new kT(y),Xt=new TA(R,mt,xt,Me,Ne,Bt,Ht),ee=new jA(R,y),Et=new RA,bt=new LA(Me),Ut=new IT(R,mt,xt,Yt,Dt,A,m),zt=new BA(R,Dt,Ne),yt=new ZA(G,D,Ne,Yt),X=new GT(G,Me,D),Ot=new $T(G,Me,D),D.programs=Xt.programs,R.capabilities=Ne,R.extensions=Me,R.properties=y,R.renderLists=Et,R.shadowMap=zt,R.state=Yt,R.info=D}vt(),C!==mi&&($=new ab(C,i.width,i.height,l,u));const wt=new qA(R,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(b){b!==void 0&&(pt=b,this.setSize(U,tt,!1))},this.getSize=function(b){return b.set(U,tt)},this.setSize=function(b,q,ot=!0){if(wt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,tt=q,i.width=Math.floor(b*pt),i.height=Math.floor(q*pt),ot===!0&&(i.style.width=b+"px",i.style.height=q+"px"),$!==null&&$.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(U*pt,tt*pt).floor()},this.setDrawingBufferSize=function(b,q,ot){U=b,tt=q,pt=ot,i.width=Math.floor(b*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,q,ot,at){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,q,ot,at),Yt.viewport(N.copy(J).multiplyScalar(pt).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,q,ot,at){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,q,ot,at),Yt.scissor(I.copy(ct).multiplyScalar(pt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(b){Yt.setScissorTest(Tt=b)},this.setOpaqueSort=function(b){Rt=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ot=!0){let at=0;if(b){let Z=!1;if(Q!==null){const Nt=Q.texture.format;Z=M.has(Nt)}if(Z){const Nt=Q.texture.type,Gt=x.has(Nt),Pt=Ut.getClearColor(),Vt=Ut.getClearAlpha(),Wt=Pt.r,Jt=Pt.g,qt=Pt.b;Gt?(F[0]=Wt,F[1]=Jt,F[2]=qt,F[3]=Vt,G.clearBufferuiv(G.COLOR,0,F)):(P[0]=Wt,P[1]=Jt,P[2]=qt,P[3]=Vt,G.clearBufferiv(G.COLOR,0,P))}else at|=G.COLOR_BUFFER_BIT}q&&(at|=G.DEPTH_BUFFER_BIT),ot&&(at|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Oe,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ut.dispose(),Et.dispose(),bt.dispose(),y.dispose(),mt.dispose(),xt.dispose(),Dt.dispose(),Bt.dispose(),yt.dispose(),Xt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Us),wt.removeEventListener("sessionend",Br),Di.stop()};function ne(b){b.preventDefault(),B0("WebGLRenderer: Context Lost."),w=!0}function Oe(){B0("WebGLRenderer: Context Restored."),w=!1;const b=D.autoReset,q=zt.enabled,ot=zt.autoUpdate,at=zt.needsUpdate,Z=zt.type;vt(),D.autoReset=b,zt.enabled=q,zt.autoUpdate=ot,zt.needsUpdate=at,zt.type=Z}function Te(b){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Cn(b){const q=b.target;q.removeEventListener("dispose",Cn),gi(q)}function gi(b){Ko(b),y.remove(b)}function Ko(b){const q=y.get(b).programs;q!==void 0&&(q.forEach(function(ot){Xt.releaseProgram(ot)}),b.isShaderMaterial&&Xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ot,at,Z,Nt){q===null&&(q=Ee);const Gt=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=ts(b,q,ot,at,Z);Yt.setMaterial(at,Gt);let Vt=ot.index,Wt=1;if(at.wireframe===!0){if(Vt=Zt.getWireframeAttribute(ot),Vt===void 0)return;Wt=2}const Jt=ot.drawRange,qt=ot.attributes.position;let $t=Jt.start*Wt,we=(Jt.start+Jt.count)*Wt;Nt!==null&&($t=Math.max($t,Nt.start*Wt),we=Math.min(we,(Nt.start+Nt.count)*Wt)),Vt!==null?($t=Math.max($t,0),we=Math.min(we,Vt.count)):qt!=null&&($t=Math.max($t,0),we=Math.min(we,qt.count));const Ke=we-$t;if(Ke<0||Ke===1/0)return;Bt.setup(Z,at,Pt,ot,Vt);let We,Le=X;if(Vt!==null&&(We=ht.get(Vt),Le=Ot,Le.setIndex(We)),Z.isMesh)at.wireframe===!0?(Yt.setLineWidth(at.wireframeLinewidth*Xe()),Le.setMode(G.LINES)):Le.setMode(G.TRIANGLES);else if(Z.isLine){let Kt=at.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*Xe()),Z.isLineSegments?Le.setMode(G.LINES):Z.isLineLoop?Le.setMode(G.LINE_LOOP):Le.setMode(G.LINE_STRIP)}else Z.isPoints?Le.setMode(G.POINTS):Z.isSprite&&Le.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,De=Z._multiDrawCounts,se=Z._multiDrawCount,vn=Vt?ht.get(Vt).bytesPerElement:1,Vi=y.get(at).currentProgram.getUniforms();for(let xn=0;xn<se;xn++)Vi.setValue(G,"_gl_DrawID",xn),Le.render(Kt[xn]/vn,De[xn])}else if(Z.isInstancedMesh)Le.renderInstances($t,Ke,Z.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,De=Math.min(ot.instanceCount,Kt);Le.renderInstances($t,Ke,De)}else Le.render($t,Ke)};function Fr(b,q,ot){b.transparent===!0&&b.side===fa&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,Ls(b,q,ot),b.side=$a,b.needsUpdate=!0,Ls(b,q,ot),b.side=fa):Ls(b,q,ot)}this.compile=function(b,q,ot=null){ot===null&&(ot=b),z=bt.get(ot),z.init(q),L.push(z),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),b!==ot&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const at=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Nt=Z.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Pt=Nt[Gt];Fr(Pt,ot,Z),at.add(Pt)}else Fr(Nt,ot,Z),at.add(Nt)}),z=L.pop(),at},this.compileAsync=function(b,q,ot=null){const at=this.compile(b,q,ot);return new Promise(Z=>{function Nt(){if(at.forEach(function(Gt){y.get(Gt).currentProgram.isReady()&&at.delete(Gt)}),at.size===0){Z(b);return}setTimeout(Nt,10)}Me.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ds=null;function zr(b){Ds&&Ds(b)}function Us(){Di.stop()}function Br(){Di.start()}const Di=new lv;Di.setAnimationLoop(zr),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){Ds=b,wt.setAnimationLoop(b),b===null?Di.stop():Di.start()},wt.addEventListener("sessionstart",Us),wt.addEventListener("sessionend",Br),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ot=wt.enabled===!0&&wt.isPresenting===!0,at=$!==null&&(Q===null||ot)&&$.begin(R,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,q,Q),z=bt.get(b,L.length),z.init(q),L.push(z),qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),It.setFromProjectionMatrix(qe,Bi,q.reversedDepth),oe=this.localClippingEnabled,Lt=Ht.init(this.clippingPlanes,oe),O=Et.get(b,H.length),O.init(),H.push(O),wt.enabled===!0&&wt.isPresenting===!0){const Gt=R.xr.getDepthSensingMesh();Gt!==null&&ni(Gt,q,-1/0,R.sortObjects)}ni(b,q,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(Rt,Ct),ae=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ae&&Ut.addToRenderList(O,b),this.info.render.frame++,Lt===!0&&Ht.beginShadows();const Z=z.state.shadowsArray;if(zt.render(Z,b,q),Lt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&$.hasRenderPass())===!1){const Gt=O.opaque,Pt=O.transmissive;if(z.setupLights(),q.isArrayCamera){const Vt=q.cameras;if(Pt.length>0)for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const qt=Vt[Wt];_n(Gt,Pt,b,qt)}ae&&Ut.render(b);for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const qt=Vt[Wt];sn(O,b,qt,qt.viewport)}}else Pt.length>0&&_n(Gt,Pt,b,q),ae&&Ut.render(b),sn(O,b,q)}Q!==null&&K===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),at&&$.end(R),b.isScene===!0&&b.onAfterRender(R,b,q),Bt.resetDefaultState(),lt=-1,ft=null,L.pop(),L.length>0?(z=L[L.length-1],Lt===!0&&Ht.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?O=H[H.length-1]:O=null};function ni(b,q,ot,at){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ot=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)z.pushLight(b),b.castShadow&&z.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||It.intersectsSprite(b)){at&&ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qe);const Gt=Dt.update(b),Pt=b.material;Pt.visible&&O.push(b,Gt,Pt,ot,ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||It.intersectsObject(b))){const Gt=Dt.update(b),Pt=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ue.copy(b.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ue.copy(Gt.boundingSphere.center)),ue.applyMatrix4(b.matrixWorld).applyMatrix4(qe)),Array.isArray(Pt)){const Vt=Gt.groups;for(let Wt=0,Jt=Vt.length;Wt<Jt;Wt++){const qt=Vt[Wt],$t=Pt[qt.materialIndex];$t&&$t.visible&&O.push(b,Gt,$t,ot,ue.z,qt)}}else Pt.visible&&O.push(b,Gt,Pt,ot,ue.z,null)}}const Nt=b.children;for(let Gt=0,Pt=Nt.length;Gt<Pt;Gt++)ni(Nt[Gt],q,ot,at)}function sn(b,q,ot,at){const{opaque:Z,transmissive:Nt,transparent:Gt}=b;z.setupLightsView(ot),Lt===!0&&Ht.setGlobalState(R.clippingPlanes,ot),at&&Yt.viewport(N.copy(at)),Z.length>0&&_i(Z,q,ot),Nt.length>0&&_i(Nt,q,ot),Gt.length>0&&_i(Gt,q,ot),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function _n(b,q,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[at.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[at.id]=new Hi(1,1,{generateMipmaps:!0,type:$t?ma:mi,minFilter:Rs,samples:Ne.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Nt=z.state.transmissionRenderTarget[at.id],Gt=at.viewport||N;Nt.setSize(Gt.z*R.transmissionResolutionScale,Gt.w*R.transmissionResolutionScale);const Pt=R.getRenderTarget(),Vt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Nt),R.getClearColor(Mt),St=R.getClearAlpha(),St<1&&R.setClearColor(16777215,.5),R.clear(),ae&&Ut.render(ot);const Jt=R.toneMapping;R.toneMapping=Ii;const qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),z.setupLightsView(at),Lt===!0&&Ht.setGlobalState(R.clippingPlanes,at),_i(b,ot,at),W.updateMultisampleRenderTarget(Nt),W.updateRenderTargetMipmap(Nt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let we=0,Ke=q.length;we<Ke;we++){const We=q[we],{object:Le,geometry:Kt,material:De,group:se}=We;if(De.side===fa&&Le.layers.test(at.layers)){const vn=De.side;De.side=Xn,De.needsUpdate=!0,Ns(Le,ot,at,Kt,De,se),De.side=vn,De.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Nt),W.updateRenderTargetMipmap(Nt))}R.setRenderTarget(Pt,Vt,Wt),R.setClearColor(Mt,St),qt!==void 0&&(at.viewport=qt),R.toneMapping=Jt}function _i(b,q,ot){const at=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Nt=b.length;Z<Nt;Z++){const Gt=b[Z],{object:Pt,geometry:Vt,group:Wt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&at!==null&&(Jt=at),Pt.layers.test(ot.layers)&&Ns(Pt,q,ot,Vt,Jt,Wt)}}function Ns(b,q,ot,at,Z,Nt){b.onBeforeRender(R,q,ot,at,Z,Nt),b.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(R,q,ot,at,b,Nt),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,R.renderBufferDirect(ot,q,at,Z,b,Nt),Z.side=$a,Z.needsUpdate=!0,R.renderBufferDirect(ot,q,at,Z,b,Nt),Z.side=fa):R.renderBufferDirect(ot,q,at,Z,b,Nt),b.onAfterRender(R,q,ot,at,Z,Nt)}function Ls(b,q,ot){q.isScene!==!0&&(q=Ee);const at=y.get(b),Z=z.state.lights,Nt=z.state.shadowsArray,Gt=Z.state.version,Pt=Xt.getParameters(b,Z.state,Nt,q,ot),Vt=Xt.getProgramCacheKey(Pt);let Wt=at.programs;at.environment=b.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(b.isMeshStandardMaterial?xt:mt).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",Cn),Wt=new Map,at.programs=Wt);let Jt=Wt.get(Vt);if(Jt!==void 0){if(at.currentProgram===Jt&&at.lightsStateVersion===Gt)return Ir(b,Pt),Jt}else Pt.uniforms=Xt.getUniforms(b),b.onBeforeCompile(Pt,R),Jt=Xt.acquireProgram(Pt,Vt),Wt.set(Vt,Jt),at.uniforms=Pt.uniforms;const qt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=Ht.uniform),Ir(b,Pt),at.needsLights=xa(b),at.lightsStateVersion=Gt,at.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),at.currentProgram=Jt,at.uniformsList=null,Jt}function Qo(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=zc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ir(b,q){const ot=y.get(b);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function ts(b,q,ot,at,Z){q.isScene!==!0&&(q=Ee),W.resetTextureUnits();const Nt=q.fog,Gt=at.isMeshStandardMaterial?q.environment:null,Pt=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ur,Vt=(at.isMeshStandardMaterial?xt:mt).get(at.envMap||Gt),Wt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),qt=!!ot.morphAttributes.position,$t=!!ot.morphAttributes.normal,we=!!ot.morphAttributes.color;let Ke=Ii;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ke=R.toneMapping);const We=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Le=We!==void 0?We.length:0,Kt=y.get(at),De=z.state.lights;if(Lt===!0&&(oe===!0||b!==ft)){const Mn=b===ft&&at.id===lt;Ht.setState(at,b,Mn)}let se=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==De.state.version||Kt.outputColorSpace!==Pt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Vt||at.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ht.numPlanes||Kt.numIntersection!==Ht.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==we||Kt.toneMapping!==Ke||Kt.morphTargetsCount!==Le)&&(se=!0):(se=!0,Kt.__version=at.version);let vn=Kt.currentProgram;se===!0&&(vn=Ls(at,q,Z));let Vi=!1,xn=!1,ii=!1;const Pe=vn.getUniforms(),Sn=Kt.uniforms;if(Yt.useProgram(vn.program)&&(Vi=!0,xn=!0,ii=!0),at.id!==lt&&(lt=at.id,xn=!0),Vi||ft!==b){Yt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",b.projectionMatrix),Pe.setValue(G,"viewMatrix",b.matrixWorldInverse);const yn=Pe.map.cameraPosition;yn!==void 0&&yn.setValue(G,ce.setFromMatrixPosition(b.matrixWorld)),Ne.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),ft!==b&&(ft=b,xn=!0,ii=!0)}if(Kt.needsLights&&(De.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),Z.isSkinnedMesh){Pe.setOptional(G,Z,"bindMatrix"),Pe.setOptional(G,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pe.setValue(G,"boneTexture",Mn.boneTexture,W))}Z.isBatchedMesh&&(Pe.setOptional(G,Z,"batchingTexture"),Pe.setValue(G,"batchingTexture",Z._matricesTexture,W),Pe.setOptional(G,Z,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Pe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const fn=ot.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&fe.update(Z,ot,vn),(xn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Pe.setValue(G,"receiveShadow",Z.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Sn.envMap.value=Vt,Sn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=QA()),xn&&(Pe.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Hr(Sn,ii),Nt&&at.fog===!0&&ee.refreshFogUniforms(Sn,Nt),ee.refreshMaterialUniforms(Sn,at,pt,tt,z.state.transmissionRenderTarget[b.id]),zc.upload(G,Qo(Kt),Sn,W)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(zc.upload(G,Qo(Kt),Sn,W),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Pe.setValue(G,"center",Z.center),Pe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(G,"normalMatrix",Z.normalMatrix),Pe.setValue(G,"modelMatrix",Z.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Mn=at.uniformsGroups;for(let yn=0,Os=Mn.length;yn<Os;yn++){const vi=Mn[yn];yt.update(vi,vn),yt.bind(vi,vn)}}return vn}function Hr(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function xa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,q,ot){const at=y.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=q,y.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ot=y.get(b);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(b,q=0,ot=0){Q=b,k=q,K=ot;let at=null,Z=!1,Nt=!1;if(b){const Pt=y.get(b);if(Pt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Pt.__webglFramebuffer),N.copy(b.viewport),I.copy(b.scissor),it=b.scissorTest,Yt.viewport(N),Yt.scissor(I),Yt.setScissorTest(it),lt=-1;return}else if(Pt.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(Pt.__hasExternalTextures)W.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Jt=b.depthTexture;if(Pt.__boundDepthTexture!==Jt){if(Jt!==null&&y.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);const Wt=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?at=Wt[q][ot]:at=Wt[q],Z=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?at=y.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?at=Wt[ot]:at=Wt,N.copy(b.viewport),I.copy(b.scissor),it=b.scissorTest}else N.copy(J).multiplyScalar(pt).floor(),I.copy(ct).multiplyScalar(pt).floor(),it=Tt;if(ot!==0&&(at=Sa),Yt.bindFramebuffer(G.FRAMEBUFFER,at)&&Yt.drawBuffers(b,at),Yt.viewport(N),Yt.scissor(I),Yt.setScissorTest(it),Z){const Pt=y.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,ot)}else if(Nt){const Pt=q;for(let Vt=0;Vt<b.textures.length;Vt++){const Wt=y.get(b.textures[Vt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,ot,Pt)}}else if(b!==null&&ot!==0){const Pt=y.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,ot)}lt=-1},this.readRenderTargetPixels=function(b,q,ot,at,Z,Nt,Gt,Pt=0){if(!(b&&b.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt){Yt.bindFramebuffer(G.FRAMEBUFFER,Vt);try{const Wt=b.textures[Pt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-at&&ot>=0&&ot<=b.height-Z&&(b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(q,ot,at,Z,At.convert(Jt),At.convert(qt),Nt))}finally{const Wt=Q!==null?y.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(b,q,ot,at,Z,Nt,Gt,Pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Gt!==void 0&&(Vt=Vt[Gt]),Vt)if(q>=0&&q<=b.width-at&&ot>=0&&ot<=b.height-Z){Yt.bindFramebuffer(G.FRAMEBUFFER,Vt);const Wt=b.textures[Pt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Nt.byteLength,G.STREAM_READ),b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(q,ot,at,Z,At.convert(Jt),At.convert(qt),0);const we=Q!==null?y.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,we);const Ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await _M(G,Ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Nt),G.deleteBuffer($t),G.deleteSync(Ke),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ot=0){const at=Math.pow(2,-ot),Z=Math.floor(b.image.width*at),Nt=Math.floor(b.image.height*at),Gt=q!==null?q.x:0,Pt=q!==null?q.y:0;W.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Gt,Pt,Z,Nt),Yt.unbindTexture()};const es=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(b,q,ot=null,at=null,Z=0,Nt=null){Nt===null&&(Z!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=Z,Z=0):Nt=0);let Gt,Pt,Vt,Wt,Jt,qt,$t,we,Ke;const We=b.isCompressedTexture?b.mipmaps[Nt]:b.image;if(ot!==null)Gt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,Vt=ot.isBox3?ot.max.z-ot.min.z:1,Wt=ot.min.x,Jt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const fn=Math.pow(2,-Z);Gt=Math.floor(We.width*fn),Pt=Math.floor(We.height*fn),b.isDataArrayTexture?Vt=We.depth:b.isData3DTexture?Vt=Math.floor(We.depth*fn):Vt=1,Wt=0,Jt=0,qt=0}at!==null?($t=at.x,we=at.y,Ke=at.z):($t=0,we=0,Ke=0);const Le=At.convert(q.format),Kt=At.convert(q.type);let De;q.isData3DTexture?(W.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vi=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,We.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,We.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const Pe=b.isDataArrayTexture||b.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const fn=y.get(b),Mn=y.get(q),yn=y.get(fn.__renderTarget),Os=y.get(Mn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let vi=0;vi<Vt;vi++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(b).__webglTexture,Z,qt+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(q).__webglTexture,Nt,Ke+vi)),G.blitFramebuffer(Wt,Jt,Gt,Pt,$t,we,Gt,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||y.has(b)){const fn=y.get(b),Mn=y.get(q);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,es),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let yn=0;yn<Vt;yn++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Nt,Ke+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Nt),Z!==0?G.blitFramebuffer(Wt,Jt,Gt,Pt,$t,we,Gt,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(De,Nt,$t,we,Ke+yn,Wt,Jt,Gt,Pt):G.copyTexSubImage2D(De,Nt,$t,we,Wt,Jt,Gt,Pt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(De,Nt,$t,we,Ke,Gt,Pt,Vt,Le,Kt,We.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Nt,$t,we,Ke,Gt,Pt,Vt,Le,We.data):G.texSubImage3D(De,Nt,$t,we,Ke,Gt,Pt,Vt,Le,Kt,We):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Nt,$t,we,Gt,Pt,Le,Kt,We.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Nt,$t,we,We.width,We.height,Le,We.data):G.texSubImage2D(G.TEXTURE_2D,Nt,$t,we,Gt,Pt,Le,Kt,We);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),Nt===0&&q.generateMipmaps&&G.generateMipmap(De),Yt.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),Yt.unbindTexture()},this.resetState=function(){k=0,K=0,Q=null,Yt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}function $A(){const o=Ai.useRef(null),e=Ai.useRef(!1),i=Ai.useRef(null);return Ai.useEffect(()=>{if(e.current||!o.current)return;e.current=!0;const s=new VM,l=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),u=new JA({alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(u.domElement);const h=[new ye(9137991),new ye(13935988),new ye(16118248),new ye(11045738)],d=100,m=100,p=d*m,_=new Float32Array(p*3),v=new Float32Array(p*3),S=new Float32Array(p*3),E=new Float32Array(p*3);for(let K=0,Q=0;K<d;K++)for(let lt=0;lt<m;lt++){const ft=(K-d/2)*.5,N=(lt-m/2)*.5;_[Q]=ft,_[Q+1]=0,_[Q+2]=N,S[Q]=ft,S[Q+1]=0,S[Q+2]=N;const I=h[Math.floor(Math.random()*h.length)];v[Q]=I.r,v[Q+1]=I.g,v[Q+2]=I.b,Q+=3}const A=Math.PI*(3-Math.sqrt(5)),C=6;for(let K=0;K<p;K++){const Q=1-K/(p-1)*2,lt=Math.sqrt(1-Q*Q),ft=A*K;E[K*3]=Math.cos(ft)*lt*C,E[K*3+1]=Q*C,E[K*3+2]=Math.sin(ft)*lt*C}const M=new ei;M.setAttribute("position",new ti(_,3)),M.setAttribute("color",new ti(v,3));const x=()=>window.innerWidth<480?.4:window.innerWidth<768?.6:window.innerWidth<1024?.8:1,F=new wi({uniforms:{time:{value:0},scrollProgress:{value:0},mouse:{value:new Ie(0,0)},pointScale:{value:x()}},vertexShader:`
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
      `,transparent:!0,blending:Ph,depthWrite:!1}),P=new KM(M,F);s.add(P);const O=new ei,z=new sv({color:9137991,transparent:!0,opacity:.1});O.setAttribute("position",new ti(new Float32Array(p*6),3));const H=new jM(O,z);s.add(H),l.position.set(0,0,15);const L={mouseX:0,mouseY:0,targetMouseX:0,targetMouseY:0,scrollProgress:0,targetScroll:0,frameId:null,clock:new ny},$=K=>{L.targetMouseX=K.clientX/window.innerWidth*2-1,L.targetMouseY=-(K.clientY/window.innerHeight)*2+1},R=()=>{L.targetScroll=Math.max(0,Math.min(1,window.scrollY/800))},w=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),F.uniforms.pointScale.value=x()};window.addEventListener("mousemove",$),window.addEventListener("scroll",R),window.addEventListener("resize",w);const k=()=>{L.frameId=requestAnimationFrame(k);const K=L.clock.getElapsedTime(),Q=M.attributes.position,lt=Q.array,ft=O.attributes.position,N=ft.array;L.mouseX+=(L.targetMouseX-L.mouseX)*.15,L.mouseY+=(L.targetMouseY-L.mouseY)*.15,L.scrollProgress+=(L.targetScroll-L.scrollProgress)*.1,F.uniforms.time.value=K,F.uniforms.scrollProgress.value=L.scrollProgress;const I=K*.3,it=Math.cos(I),Mt=Math.sin(I),St=L.mouseX*6,U=L.mouseY*6,tt=L.scrollProgress;let pt=0;for(let Ct=0;Ct<d;Ct++)for(let J=0;J<m;J++){const ct=S[pt],Tt=S[pt+2],It=Math.sqrt((ct-St)**2+(Tt-U)**2),Lt=Math.sin((ct-St)*.5+K*.8)*.5+Math.cos((Tt-U)*.3+K*.6)*.5+Math.max(0,3-It*.3)*1.2;let oe=E[pt],qe=E[pt+1],ce=E[pt+2];if(tt>0){const Ee=oe*it-ce*Mt,ae=oe*Mt+ce*it,Xe=1+Math.sin(K*1.5)*.03*tt;oe=Ee*Xe,qe*=Xe,ce=ae*Xe}const ue=tt*tt*(3-2*tt);lt[pt]=ct+(oe-ct)*ue,lt[pt+1]=Lt+(qe-Lt)*ue,lt[pt+2]=Tt+(ce-Tt)*ue,pt+=3}if(Q.needsUpdate=!0,tt<=.8){H.visible=!0;let Ct=0,J=4;for(let ct=0;ct<d;ct+=J)for(let Tt=0;Tt<m;Tt+=J){const It=(ct*m+Tt)*3;if(ct<d-J&&Ct<N.length-6){const Lt=((ct+J)*m+Tt)*3;N[Ct++]=lt[It],N[Ct++]=lt[It+1],N[Ct++]=lt[It+2],N[Ct++]=lt[Lt],N[Ct++]=lt[Lt+1],N[Ct++]=lt[Lt+2]}if(Tt<m-J&&Ct<N.length-6){const Lt=(ct*m+(Tt+J))*3;N[Ct++]=lt[It],N[Ct++]=lt[It+1],N[Ct++]=lt[It+2],N[Ct++]=lt[Lt],N[Ct++]=lt[Lt+1],N[Ct++]=lt[Lt+2]}}ft.needsUpdate=!0,z.opacity=.1*(1-tt)}else H.visible=!1;const Rt=15-tt*6;l.position.z+=(Rt-l.position.z)*.1,l.position.y=tt*2,l.lookAt(0,0,0),u.render(s,l)};return k(),i.current=()=>{L.frameId&&cancelAnimationFrame(L.frameId),window.removeEventListener("mousemove",$),window.removeEventListener("scroll",R),window.removeEventListener("resize",w),o.current&&u.domElement.parentNode===o.current&&o.current.removeChild(u.domElement),u.dispose(),M.dispose(),O.dispose(),F.dispose(),e.current=!1},()=>{i.current&&i.current()}},[]),j.jsx("div",{ref:o,id:"canvas-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})}function t1(){const o=Ai.useRef(null),e=Ai.useRef(null),[i,s]=Ai.useState(!1);return Ai.useEffect(()=>{const l=()=>{const _=window.matchMedia("(pointer: coarse)").matches;s(_),_?document.body.style.cursor="auto":document.body.style.cursor="none"};if(l(),window.addEventListener("resize",l),i)return;const u=_=>{o.current&&(o.current.style.left=_.clientX+"px",o.current.style.top=_.clientY+"px"),e.current&&(e.current.style.left=_.clientX+"px",e.current.style.top=_.clientY+"px")},h=()=>{e.current&&e.current.classList.add("hover")},d=()=>{e.current&&e.current.classList.remove("hover")};document.addEventListener("mousemove",u);const m=()=>{document.querySelectorAll(".cursor-hover, a, button, .mobile-menu-btn").forEach(_=>{_.addEventListener("mouseenter",h),_.addEventListener("mouseleave",d)})};m();const p=new MutationObserver(m);return p.observe(document.body,{childList:!0,subtree:!0}),()=>{document.removeEventListener("mousemove",u),window.removeEventListener("resize",l),p.disconnect(),document.querySelectorAll(".cursor-hover, a, button").forEach(_=>{_.removeEventListener("mouseenter",h),_.removeEventListener("mouseleave",d)})}},[i]),i?null:j.jsxs(j.Fragment,{children:[j.jsx("div",{ref:o,className:"cursor-dot"}),j.jsx("div",{ref:e,className:"cursor-outline"})]})}function e1(){return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"noise"}),j.jsx($A,{}),j.jsx(t1,{}),j.jsx(wS,{}),j.jsxs("main",{children:[j.jsx(DS,{}),j.jsx(US,{}),j.jsx(NS,{}),j.jsx(LS,{}),j.jsx(OS,{}),j.jsx(PS,{})]}),j.jsx(FS,{})]})}CS.createRoot(document.getElementById("root")).render(j.jsx(e1,{}));
