const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};u();let c=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],i=document.querySelector("body"),n=document.querySelector("button"),f=document.querySelector("#gradient");window.addEventListener("DOMContentLoaded",()=>{let o=d();i.style.backgroundColor=o,n.innerText=o});n==null||n.addEventListener("click",()=>{let o=d(),t=null;f.checked&&(t=d()),t!=null?(i.style.background=`linear-gradient(to right, ${o}, ${t})`,n.innerText=`${o},${t}`):(i.style.background="",i.style.backgroundColor=o,n.innerText=`${o}`)});function d(){let o="#";for(let t=0;t<6;t++)o+=c[Math.floor(Math.random()*c.length)];return o}