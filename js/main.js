// Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('[data-count]');
  const counterIO = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimal || "0");
        const suffix = el.dataset.suffix || (decimals>0 ? "" : "%");
        let cur = 0;
        const step = target / 60;
        const tick = ()=>{
          cur += step;
          if(cur >= target){ cur = target; }
          el.textContent = (decimals>0 ? cur.toFixed(decimals) : Math.round(cur)) + suffix;
          if(cur < target) requestAnimationFrame(tick);
        };
        tick();
        counterIO.unobserve(el);
      }
    });
  }, {threshold:0.4});
  counters.forEach(c=>counterIO.observe(c));

  