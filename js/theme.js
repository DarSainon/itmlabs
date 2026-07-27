(function(){
  const key='itmorev-theme';
  const saved=localStorage.getItem(key);
  const theme=saved||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',theme);
  document.addEventListener('DOMContentLoaded',function(){
    const icon=document.querySelector('.theme-icon')||document.getElementById('themeToggle');
    if(icon)icon.textContent=theme==='dark'?'☀️':'🌙';
    const btn=document.getElementById('themeToggle');
    if(!btn)return;
    btn.addEventListener('click',function(){
      const next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
      document.documentElement.setAttribute('data-theme',next);
      if(icon)icon.textContent=next==='dark'?'☀️':'🌙';
      localStorage.setItem(key,next);
    });
  });
})();
