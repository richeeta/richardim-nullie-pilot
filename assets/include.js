/* Rocket Loader safe includes + nav wiring */
(function (){
  const includeAttr = 'data-include';

  async function injectIncludes(){
    const nodes = document.querySelectorAll('['+includeAttr+']');
    for (const el of nodes){
      const url = el.getAttribute(includeAttr);
      try{
        const res = await fetch(url, {cache:'no-store'});
        el.innerHTML = await res.text();
      } catch(e){
        el.innerHTML = '<!-- include failed: '+url+' -->';
      }
    }
  }

  function wireNav(){
    const mnav = document.getElementById('mnav');
    const hamm = document.getElementById('hamb');
    if (hamm && mnav){
      hamm.addEventListener('click', ()=> mnav.classList.toggle('open'));
      const mq = window.matchMedia('(min-width:768px)');
      function sync(){ if (mq.matches) mnav.classList.remove('open'); }
      (mq.addEventListener? mq.addEventListener('change',sync): mq.addListener(sync));
      sync();
    }
  }

  // Run when DOM ready
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', async () => { await injectIncludes(); wireNav(); });
  } else {
    (async () => { await injectIncludes(); wireNav(); })();
  }
})();
