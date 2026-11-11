
const $=id=>document.getElementById(id);
document.querySelectorAll('.flogo').forEach(i=>i.src=document.querySelector('.brand img').src);try{(function(){
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,$q=(s,r=document)=>[...r.querySelectorAll(s)];
document.body.insertAdjacentHTML('beforeend','<div id="prog"></div><div id="rail" role="navigation" aria-label="Story chapters"></div>'+(fine&&!rm?'<div id="cur"></div>':''));
const rail=document.getElementById('rail'),prog=document.getElementById('prog');
const ch=[['.hero','Hello'],['#what','Services'],['#diwali','Diwali'],['#work','Work'],['#process','Process'],['#about','About']].map(([s,t])=>[document.querySelector(s),t]).filter(c=>c[0]);
ch.forEach(([e,t],i)=>{rail.insertAdjacentHTML('beforeend','<a href="#" data-i="'+i+'"><span>'+t+'</span></a>');const h=i&&e.querySelector('h2');if(h)h.insertAdjacentHTML('beforebegin','<p class="chap">Chapter 0'+(i+1)+' · '+t+'</p>')});
rail.onclick=e=>{const a=e.target.closest('a');if(!a)return;e.preventDefault();ch[a.dataset.i][0].scrollIntoView({behavior:rm?'auto':'smooth'})};
if(!rm){const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const e=x.target;io.unobserve(e);e.classList.add('in');setTimeout(()=>{e.classList.remove('rv','in');e.style.removeProperty('--d')},1300)}),{threshold:.15});
$q('.sec h2,.sec .kw,.chap,.site,.tz li,.about-text').forEach((e,i)=>{e.classList.add('rv');e.style.setProperty('--d',(i%4)*.08+'s');io.observe(e)})}
const T=[];[['.mock a:nth-child(1)',-.07],['.mock a:nth-child(2)',.1],['.hero-copy',.05],['.about-logo',-.06],['.drift',.08],['.tz li:nth-child(odd)',-.04],['.tz li:nth-child(even)',.05],['.site',-.03],['.cta h2',.06]].forEach(([s,k])=>$q(s).forEach(e=>{e.classList.add('px');T.push([e,k])}));
let tk=0;function upd(){tk=0;const vh=innerHeight;prog.style.setProperty('--p',Math.min(1,scrollY/((document.documentElement.scrollHeight-vh)||1)));
if(!rm)T.forEach(a=>{const e=a[0],r=e.getBoundingClientRect();if(!r.height||r.bottom<-200||r.top>vh+200)return;const c=r.top+r.height/2-(a[2]||0),v=(c-vh/2)*a[1];a[2]=v;e.style.setProperty('--py',v.toFixed(1)+'px')});
rail.style.display=ch[0][0].offsetHeight?'':'none';let on=0;ch.forEach(([e],i)=>{if(e.getBoundingClientRect().top<=vh*.45)on=i});$q('#rail a').forEach((l,i)=>l.classList.toggle('on',i==on))}
addEventListener('scroll',()=>{tk||(tk=requestAnimationFrame(upd))},{passive:true});addEventListener('resize',upd);addEventListener('hashchange',()=>setTimeout(upd,50));upd();
const hero=ch[0][0],mock=document.querySelector('.mock');
if(fine&&!rm){const cur=document.getElementById('cur');
if(hero&&mock)hero.addEventListener('pointermove',e=>{mock.style.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(2));mock.style.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(2))});
addEventListener('pointermove',e=>{cur.style.opacity=1;cur.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';cur.classList.toggle('big',!!e.target.closest('a,button,.site'))});
$q('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=(e.clientX-r.left-r.width/2)*.22+'px '+(e.clientY-r.top-r.height/2)*.32+'px'});b.addEventListener('pointerleave',()=>b.style.translate='')});
$q('.tz a,.site:not(.next)').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateX('+(-y*6).toFixed(1)+'deg) rotateY('+(x*8).toFixed(1)+'deg) translateY(-6px)'});c.addEventListener('pointerleave',()=>c.style.transform='')})}
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),s=document.createElement('span');s.className='rip';s.style.left=e.clientX-r.left+'px';s.style.top=e.clientY-r.top+'px';b.appendChild(s);setTimeout(()=>s.remove(),600)});
})()}catch(err){console.warn(err)}
try{const t=document.getElementById('dwTrack');if(t){let d=1,p=0,x=0;const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
[...t.children].forEach(f=>t.appendChild(f.cloneNode(true)));const step=()=>{const m=t.scrollWidth-t.clientWidth;if(p||rm||m<=0)x=t.scrollLeft;else{x+=.6;if(x>=t.scrollWidth/2)x-=t.scrollWidth/2;t.scrollLeft=x}requestAnimationFrame(step)};
['pointerenter','touchstart','focusin'].forEach(e=>t.addEventListener(e,()=>p=1));['pointerleave','touchend','focusout'].forEach(e=>t.addEventListener(e,()=>setTimeout(()=>p=0,1500)));
document.querySelectorAll('[data-dw]').forEach(b=>b.onclick=()=>{p=1;t.scrollBy({left:b.dataset.dw*320,behavior:'smooth'});setTimeout(()=>p=0,2500)});requestAnimationFrame(step)}}catch(e){}
try{const I={Home:'M3 11l9-8 9 8v10H3z',Services:'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',Work:'M3 8h18v12H3zM9 8V5h6v3',About:'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 100-5M17 15c3 0 4 2 4 5',Contact:'M3 5h18v14H3zM3 6l9 7 9-7'};
document.querySelectorAll('.navlinks a,.navlinks button').forEach(a=>{const k=a.textContent.trim();if(I[k])a.insertAdjacentHTML('afterbegin','<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="'+I[k]+'"/></svg>')});
const h=document.getElementById('top');if(h)h.insertAdjacentHTML('beforeend','<a class="hint" href="#what"><span>&darr;</span> Scroll to explore</a>')}catch(e){}
try{const cards=[...document.querySelectorAll('.scard')],T={'Websites':['Mobile-first design','Google-friendly basics','Call & WhatsApp buttons'],'Landing Pages':['One clear offer','Fast loading','Enquiry form'],'Social Media Designs':['Posters & posts','Festival creatives','Consistent brand style'],'Reels & Content Videos':['Shoot & edit','Hooks & captions','Instagram & YouTube'],'Social Media Management':['Content calendar','Weekly posting','Monthly report']};
if(cards.length){cards.forEach((c,i)=>{const h=c.querySelector('h2'),k=h.textContent.trim();c.querySelector('p:not(.chap)').insertAdjacentHTML('afterend','<div class="tags">'+(T[k]||[]).map(x=>'<span>'+x+'</span>').join('')+'</div>');c.classList.add('rv')});
cards[0].insertAdjacentHTML('beforebegin','<aside class="sidx"><h3>Chapter 02 \u00b7 Services</h3>'+cards.map((c,i)=>'<a href="#" data-k="'+i+'">'+c.querySelector('h2').textContent+'</a>').join('')+'</aside>');
const L=[...document.querySelectorAll('.sidx a')];document.querySelector('.sidx').onclick=e=>{const a=e.target.closest('a');if(!a)return;e.preventDefault();cards[a.dataset.k].scrollIntoView({behavior:'smooth',block:'center'})};
const o=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.15});cards.forEach(c=>o.observe(c));
addEventListener('scroll',()=>{let on=0;cards.forEach((c,i)=>{if(c.getBoundingClientRect().top<innerHeight*.5)on=i});L.forEach((a,i)=>a.classList.toggle('on',i==on))},{passive:true})}
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#services"]');if(!a)return;e.preventDefault();if(location.hash==='#services')route();else location.hash='services'})}catch(e){}
const mnav=$('mnav');$('burger').onclick=()=>mnav.classList.toggle('open');

/* two views: home and the separate services page */
const home=$('home'),svc=$('svcpage'),ghost=$('ghost');
function route(){
  const h=location.hash.slice(1),s=h==='services';
  mnav.classList.remove('open');home.hidden=s;svc.hidden=!s;document.body.classList.toggle('is-svc',s);document.querySelectorAll('.navlinks a,.mnav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')===(s?'#services':'#top')));
  if(s){scrollTo({top:0,behavior:'instant'});requestAnimationFrame(()=>scrollTo({top:0,behavior:'instant'}))}else if(h&&$(h))$(h).scrollIntoView();else scrollTo(0,0);
}
addEventListener('hashchange',route);route();
addEventListener('scroll',()=>{
  if(svc.hidden)return;
  ghost.style.setProperty('--gx',(-scrollY*.35+innerWidth*.2)+'px');
  let g='Websites';
  document.querySelectorAll('.scard').forEach(c=>{if(c.getBoundingClientRect().top<innerHeight*.55)g=c.dataset.g;});
  if(ghost.textContent!==g)ghost.textContent=g;
},{passive:true});

/* process chapters reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.35});
document.querySelectorAll('.ch').forEach(c=>io.observe(c));

/* dialogs + form (builds one message for WhatsApp or email) */
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{mnav.classList.remove('open');$(b.dataset.open).showModal();}));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d||e.target.hasAttribute('data-close'))d.close();}));
function msg(){
  const f=$('pform');if(!f.reportValidity())return null;const d=new FormData(f);
  return 'Hi Adhyaaya, I would like to start a project.\nName: '+d.get('name')+'\nPhone: '+(d.get('phone')||'-')+'\nBusiness: '+(d.get('biz')||'-')+'\nNeed: '+d.get('msg');
}
$('sendWa').onclick=()=>{const m=msg();if(m)window.open('https://wa.me/917901232423?text='+encodeURIComponent(m),'_blank');};
$('sendMail').onclick=()=>{const m=msg();if(m)location.href='mailto:adhyaaya24@gmail.com?subject='+encodeURIComponent('New project enquiry')+'&body='+encodeURIComponent(m);};

/* hero: dots gather into the logo's lotus */
(function(){
  const c=$('lotus'),x=c.getContext('2d'),still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W,H,dots=[],mx=-999,my=-999,vis=true,t=0;
  const o=document.createElement('canvas');o.width=o.height=200;const g=o.getContext('2d');g.fillStyle='#000';
  g.beginPath();g.moveTo(100,8);g.bezierCurveTo(62,52,66,108,100,150);g.bezierCurveTo(134,108,138,52,100,8);g.fill();
  [-1,1].forEach(s=>{g.save();g.translate(100,150);g.rotate(s);g.beginPath();g.moveTo(0,0);g.bezierCurveTo(-34,-30,-30,-72,0,-92);g.bezierCurveTo(30,-72,34,-30,0,0);g.fill();g.restore();});
  const px=g.getImageData(0,0,200,200).data,pts=[];
  for(let y=0;y<200;y+=5)for(let i=0;i<200;i+=5)if(px[(y*200+i)*4+3]>128)pts.push([i/200,y/200]);
  function size(){
    const r=c.getBoundingClientRect(),k=Math.min(devicePixelRatio||1,2);
    if(!r.width)return;W=r.width;H=r.height;c.width=W*k;c.height=H*k;x.setTransform(k,0,0,k,0,0);
    const S=Math.min(W*.95,H*.95,640),ox=W/2-S/2,oy=H/2-S/2+S*.04;
    dots=pts.map((p,i)=>{const d=dots[i];return{tx:ox+p[0]*S,ty:oy+p[1]*S,x:d?d.x:Math.random()*W,y:d?d.y:Math.random()*H,vx:0,vy:0,r:1.6+Math.random()*1.8,ph:Math.random()*6.28};});
    if(still)dots.forEach(d=>{d.x=d.tx;d.y=d.ty;});draw();
  }
  function draw(){x.clearRect(0,0,W,H);x.fillStyle='rgba(82,7,11,.35)';for(const d of dots){x.beginPath();x.arc(d.x,d.y,d.r,0,6.283);x.fill();}}
  function tick(){
    requestAnimationFrame(tick);if(!vis||still||!W)return;t+=.015;
    for(const d of dots){
      d.vx+=(d.tx+Math.sin(t+d.ph)*2.2-d.x)*.012;d.vy+=(d.ty+Math.cos(t*.9+d.ph)*2.2-d.y)*.012;
      const dx=d.x-mx,dy=d.y-my,q=dx*dx+dy*dy;
      if(q<9000){const f=(1-q/9000)*1.6,m=Math.sqrt(q)||1;d.vx+=dx/m*f;d.vy+=dy/m*f;}
      d.vx*=.88;d.vy*=.88;d.x+=d.vx;d.y+=d.vy;
    }
    draw();
  }
  const hero=$('top');
  hero.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
  hero.addEventListener('pointerleave',()=>{mx=my=-999;});
  new IntersectionObserver(e=>{vis=e[0].isIntersecting;}).observe(hero);
  new ResizeObserver(size).observe(c);size();tick();
})();
