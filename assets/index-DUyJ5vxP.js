(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`./legacy`;function t(){if(document.getElementById(`legacy-planner-style`))return;let t=document.createElement(`link`);t.id=`legacy-planner-style`,t.rel=`stylesheet`,t.href=`${e}/planner.css`,document.head.appendChild(t)}function n(){let t=document.getElementById(`legacy-planner-script`);t&&t.remove();let n=document.createElement(`script`);n.id=`legacy-planner-script`,n.src=`${e}/planner.js`,document.body.appendChild(n)}async function r(r){r.innerHTML=`
    <div class="app-shell">
      <div class="app-banner">
        <p>SIMTOS 부스 경로 웹앱</p>
        <h1>단일 HTML을 웹앱 구조로 옮긴 첫 버전</h1>
        <span>다음 단계에서 검색, 저장업체, 경로, 지도 기능을 개별 모듈로 더 쪼갤 수 있습니다.</span>
      </div>
      <div id="legacy-app-root"></div>
    </div>
  `;let i=document.getElementById(`legacy-app-root`);if(!i)return;t();let a=await fetch(`${e}/layout.html`);if(!a.ok)throw Error(`Failed to load legacy layout: ${a.status}`);i.innerHTML=await a.text(),n()}var i=document.querySelector(`#app`);if(!i)throw Error(`Could not find #app root`);r(i).catch(e=>{console.error(e),i.innerHTML=`
    <div class="app-shell">
      <div class="app-banner">
        <p>SIMTOS Route Webapp</p>
        <h1>Legacy planner failed to load</h1>
        <span>${e.message}</span>
      </div>
    </div>
  `});