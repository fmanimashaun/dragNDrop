(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const i=document.getElementById("draggable-list"),g=document.getElementById("check"),l=["Jeff Bezos","Bill Gates","Warren Buffet","Bernard Arnault","Carlos Slim Helu","Amancio Ortega","Larry Ellison","Mark Zuckerberg","Michael Bloomberg","Larry Page"],o=[];let d;const u=(e,t)=>{const r=o[e].querySelector(".draggable"),n=o[t].querySelector(".draggable");o[e].appendChild(n),o[t].appendChild(r)},p=e=>{d=e.target.closest("li").getAttribute("data-index")-1},f=e=>{e.preventDefault()},m=e=>{const t=e.target.closest("li").getAttribute("data-index")-1;u(d,t),e.target.classList.remove("over")},v=e=>{e.target.classList.add("over")},L=e=>{e.target.classList.remove("over")},h=()=>{const e=document.querySelectorAll(".draggable"),t=document.querySelectorAll(".draggable-list li");e.forEach(r=>{r.addEventListener("dragstart",p)}),t.forEach(r=>{r.addEventListener("dragenter",v),r.addEventListener("dragover",f),r.addEventListener("dragleave",L),r.addEventListener("drop",m)})},y=()=>{[...l].map(e=>({value:e,sort:Math.random()})).sort((e,t)=>e.sort-t.sort).sort((e,t)=>e.sort-t.sort).map(e=>e.value).forEach((e,t)=>{const r=document.createElement("li");r.setAttribute("data-index",t+1),r.innerHTML=`
      <span class='number'>${t+1}</span>
      <div class='draggable' draggable="true">
        <p class="person-name">${e}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `,o.push(r),i.appendChild(r)}),h()};y();g.addEventListener("click",()=>{o.forEach((e,t)=>{e.querySelector(".person-name").innerText.trim()!==l[t]?e.classList.add("wrong"):(e.classList.remove("wrong"),e.classList.add("right"))})});
