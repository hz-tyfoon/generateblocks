(()=>{const e="a[data-gb-prefetch][href]",t={};document.body.addEventListener("mouseenter",(function(r){const n=r.target.closest(e);if(n){var o;if(null!==(o=t[n.href])&&void 0!==o&&o)return;const e=document.createElement("link");e.rel="prefetch",e.href=n.href,document.head.appendChild(e),t[n.href]=!0}}),!0),document.addEventListener("click",(t=>{const r=t.target.closest(e);if(r&&r.href){const e=r.getAttribute("data-gb-router-target");if(!e)return;t.preventDefault();const n=r.href;(function(e){return fetch(e).then((e=>{if(!e.ok)throw new Error("Network error");return e.text()})).catch((e=>{console.error("Error fetching prefetched page:",e)}))})(n).then((t=>{!function(e="",t=""){const r=document.querySelector(`[data-gb-router-region="${e}"]`);if(!r||!t)throw new Error("Missing container or prefetched content");const n=r.parentNode.querySelector(".gb-query-loop-pagination"),o=document.createElement("div");o.innerHTML=t;const c=o.querySelector(`[data-gb-router-region="${e}"]`),i=c.parentNode.querySelector(".gb-query-loop-pagination");c&&r?(r.innerHTML=c.innerHTML,r.scrollIntoView({behavior:"smooth",block:"start"}),n.innerHTML=i.innerHTML):console.error("Unable to update posts container: Missing elements")}(e,t),history.pushState(null,"",n)}))}}))})();