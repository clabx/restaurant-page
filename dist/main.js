(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var l=e.g.document;if(!t&&l&&(l.currentScript&&(t=l.currentScript.src),!t)){var n=l.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=document.querySelector("#main"),l=()=>{const e=t.childElementCount;for(let l=0;l<e;l++)t.removeChild(t.childNodes[0])},n=e.p+"afcc4f991c07efc12d87.webp",c=e.p+"11bb86910fde24350ddc.webp",d=e.p+"0cc4661ecb938a2459d1.webp",o=e.p+"f563321386ec0d0cc894.webp",r=e.p+"f950b98fbae120b99e91.webp",a=()=>{const e=document.querySelector("#main");e.classList.add("flex","flex-col","flex-wrap");const t=document.createElement("div");t.classList.add("h-full","w-4/6","h-full","bg-slate-300","rounded-xl","flex","flex-col","gap-4","p-4","overflow-clip");const l=document.createElement("div");l.classList.add("h-1/3","overflow-clip","w-full","flex","gap-6","pl-6","pr-6");const a=new Image;a.src=n,a.classList.add("w-1/3","rounded-2xl","hover:scale-105","hover:transition");const s=new Image;s.src=o,s.classList.add("w-2/3","rounded-2xl","hover:scale-105","hover:transition"),l.appendChild(a),l.appendChild(s);const i=document.createElement("div");i.classList.add("h-1/3","overflow-clip","w-full","flex","gap-6","pl-6","pr-6","justify-evenly");const p=new Image;p.src=c,p.classList.add("w-[40%]","rounded-2xl","flex","hover:scale-105","hover:transition"),i.appendChild(p);const u=new Image;u.src=d,u.classList.add("w-[40%]","rounded-2xl","hover:scale-105","hover:transition"),i.appendChild(u);const m=document.createElement("div");m.classList.add("h-1/4","w-full","flex","gap-6","pl-6","pr-6");const f=document.createElement("div");f.classList.add("h-full","w-full","rounded-2xl","overflow-hidden","grow-0","flex-none");const h=new Image;h.src=r,h.classList.add("h-32","w-full","flex","flex-none","hover:scale-105","hover:transition"),f.appendChild(h),m.appendChild(f),t.appendChild(l),t.appendChild(i),t.appendChild(m),e.appendChild(t);const w=document.createElement("div");w.classList.add("flex","flex-col","w-2/6","border-2","ml-3","mt-auto","mb-auto","p-4","rounded-md","bg-slate-300","border-slate-300");const v=document.createElement("div"),x=document.createElement("div");v.textContent="Welcome to La Cafelería!",v.classList.add("p-4","text-4xl","text-center"),x.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo ante, eleifend in eros eget, scelerisque placerat dui. Ut et nisl ultrices, molestie arcu non, elementum eros.",w.appendChild(v),w.appendChild(x),e.appendChild(w)};a(),document.querySelector("#Home").addEventListener("click",(()=>{l(),a()})),document.querySelector("#Menu").addEventListener("click",(()=>{l()})),document.querySelector("#Contact").addEventListener("click",(()=>{l()}))})();