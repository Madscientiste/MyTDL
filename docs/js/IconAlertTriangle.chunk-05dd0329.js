import{r as i,R as f,t as O,i as P,j as R,B as b,l as w,m as E,n as S}from"./index.chunk-71d40fc6.js";import{r as T,c as N}from"./notifications.store.chunk-9fb243d2.js";const j=typeof document<"u"?i.useLayoutEffect:i.useEffect,x=f["useId".toString()]||(()=>{});function z(){const e=x();return e?`mantine-${e.replace(/:/g,"")}`:""}function L(e){const r=z(),[t,s]=i.useState(r);return j(()=>{s(T())},[]),typeof e=="string"?e:typeof window>"u"?r:t}var C={root:"m-7341320d"};const u=C;var M=Object.defineProperty,n=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(n)for(var t of n(r))m.call(r,t)&&c(e,t,r[t]);return e},k=(e,r)=>{var t={};for(var s in e)p.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&n)for(var s of n(e))r.indexOf(s)<0&&m.call(e,s)&&(t[s]=e[s]);return t};const A={},B=w((e,{size:r,radius:t,variant:s,gradient:l,color:a})=>{const o=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:l,variant:s||"filled"});return{root:{"--ti-size":E(r,"ti-size"),"--ti-radius":t===void 0?void 0:S(t),"--ti-bg":a||s?o.background:void 0,"--ti-color":a||s?o.color:void 0,"--ti-bd":a||s?o.border:void 0}}}),v=O((e,r)=>{const t=P("ThemeIcon",A,e),s=t,{classNames:l,className:a,style:o,styles:y,unstyled:_,vars:g}=s,I=k(s,["classNames","className","style","styles","unstyled","vars"]),h=R({name:"ThemeIcon",classes:u,props:t,className:a,style:o,classNames:l,styles:y,unstyled:_,vars:g,varsResolver:B});return f.createElement(b,d(d({ref:r},h("root")),I))});v.classes=u;v.displayName="@mantine/core/ThemeIcon";var U=N("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);export{U as I,v as T,L as a,j as u};
