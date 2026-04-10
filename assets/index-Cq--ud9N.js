(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`./legacy`,t=`20260410-2`;function n(n){return`${e}/${n}?v=${t}`}function r(){if(document.getElementById(`legacy-planner-style`))return;let e=document.createElement(`link`);e.id=`legacy-planner-style`,e.rel=`stylesheet`,e.href=n(`planner.css`),document.head.appendChild(e)}function i(){let e=document.getElementById(`legacy-planner-script`);e&&e.remove();let t=document.createElement(`script`);t.id=`legacy-planner-script`,t.src=n(`planner.js`),document.body.appendChild(t)}async function a(e){e.innerHTML=`
    <div class="app-shell">
      <div id="legacy-app-root"></div>
    </div>
  `;let t=document.getElementById(`legacy-app-root`);if(!t)return;r();let a=await fetch(n(`layout.html`),{cache:`no-store`});if(!a.ok)throw Error(`Failed to load legacy layout: ${a.status}`);t.innerHTML=await a.text(),i()}var o=document.querySelector(`#app`);if(!o)throw Error(`Could not find #app root`);a(o).catch(e=>{console.error(e),o.innerHTML=`
    <div class="app-shell">
      <div class="app-banner">
        <p>SIMTOS Route Webapp</p>
        <h1>Legacy planner failed to load</h1>
        <span>${e.message}</span>
      </div>
    </div>
  `});