(()=>{var t={469:t=>{t.exports=t=>{let{title:r,year:a,duration:e,rate:s,poster:n}=t;const c=document.createElement("div");c.classList.add("tarjeta");const o=document.getElementById("repositorio");c.innerHTML=`<div class="card border border-0 m-2">\n    <img src="${n}" class="card-img-top p-4 object-fit-contain" alt="imagen">\n    <div class="card-body">\n      <h3 class="card-title">${r}</h3>\n      <p class="card-text">Año: ${a}</p>\n      <p class="card-text">Duracion: ${e}</p>\n      <p class="card-text rate">Rating: ${s}⭐</p>\n      </div>\n    </div>`,o.appendChild(c)}}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}(()=>{const t=a(469);$.get("https://students-api.2.us-1.fl0.io/movies",((r,a)=>{if("success"!==a)return alert("Error al cargar la informacion");r.map((r=>t(r)))}))})()})();