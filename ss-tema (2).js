/* ss-tema.js — Modo Semana Santa. Cargar DESPUÉS del script principal de index.html */
(function(){
if(window.__ss)return;window.__ss=1;
const $=s=>document.querySelector(s);
const L=document.createElement('link');L.rel='stylesheet';L.href='https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&display=swap';document.head.appendChild(L);
const st=document.createElement('style');st.textContent=`
body.ss{--bg:#0c0911;--bg2:#130e1b;--line:#2a2036;--mute:#8d8497;--serif:'Cinzel',Georgia,serif;background:#0c0911;color:#f1e9d8}
body.ss nav{mix-blend-mode:normal;background:linear-gradient(#0c0911ee,transparent)}
body.ss .logo{color:#f0dba6;font-family:'Cinzel',serif;font-weight:400}
body.ss nav ul a::after{background:#c9a86a}
body.ss .cartbtn span{border-color:#c9a86a;color:#f0dba6}
body.ss .cur{background:#f0dba6}body.ss .cur2{border-color:rgba(201,168,106,.6)}body.ss .cur2.big{background:rgba(201,168,106,.12);border-color:#c9a86a}
body.ss .hero{background:radial-gradient(ellipse at 50% 0%,#2a1840,#0c0911 62%)}
body.ss .hero::before{background:radial-gradient(ellipse at center,transparent 25%,#0c0911 85%)}
body.ss #bg{opacity:0}
body.ss .hero h1{font-family:'Cinzel',serif;font-weight:400;font-size:clamp(46px,13vw,190px);filter:drop-shadow(0 0 18px rgba(201,168,106,.45));animation:ssglow 4s ease-in-out infinite}
body.ss .hero h1 span{background:linear-gradient(180deg,#fbeec6,#b48e4e);-webkit-background-clip:text;background-clip:text;color:transparent}
@keyframes ssglow{50%{filter:drop-shadow(0 0 38px rgba(240,219,166,.75))}}
body.ss .eyebrow{color:#c9a86a}
body.ss .cta{border-color:#c9a86a;color:#f0dba6}body.ss .cta::before{background:#c9a86a}body.ss .cta:hover,body.ss form .cta:hover{color:#1a1208}
body.ss form .cta{color:#f0dba6}
body.ss .scroll{background:linear-gradient(#c9a86a,transparent)}
body.ss .mq div{color:#5b5068}body.ss .mq b{color:#c9a86a}
body.ss .title h2{font-family:'Cinzel',serif;font-weight:400;font-size:clamp(32px,5vw,70px)}
body.ss .title h2 i{font-family:'Cormorant Garamond',serif;color:#c9a86a}
body.ss .num{color:#c9a86a}
body.ss .filters button:hover,body.ss .filters button.on{color:#1a1208;background:#c9a86a;border-color:#c9a86a}
body.ss .card .im{border:1px solid rgba(201,168,106,.3);padding:10px;transition:border-color .6s,box-shadow .6s}
body.ss .card:hover .im{border-color:#c9a86a;box-shadow:0 0 40px rgba(201,168,106,.2)}
body.ss .card .im::after{background:rgba(12,9,17,.55);color:#f0dba6}
body.ss .meta h3{font-size:19px;letter-spacing:.05em}
body.ss .add{border-color:#c9a86a}
body.ss .about p{color:#d9d0c3}body.ss .about p b{color:#f0dba6}
body.ss .frame{border-color:#c9a86a;border-radius:999px 999px 0 0;overflow:hidden;box-shadow:0 0 60px rgba(201,168,106,.14)}
body.ss .frame::before{display:none}body.ss .frame img{border-radius:999px 999px 0 0}
body.ss .f input,body.ss .f select,body.ss .f textarea{border-bottom-color:#3a2f48;color:#f1e9d8}
body.ss .f input:focus,body.ss .f select:focus,body.ss .f textarea:focus{border-color:#c9a86a}
body.ss footer h2{font-family:'Cinzel',serif;font-weight:400;-webkit-text-stroke-color:#6e5c3a;font-size:clamp(40px,10vw,150px)}
body.ss footer h2:hover{color:#c9a86a;-webkit-text-stroke-color:#c9a86a}
body.ss footer .l{color:#f0dba6}
body.ss .lb{background:rgba(8,6,12,.96)}body.ss .lb img#lbi{border:1px solid rgba(201,168,106,.4);box-shadow:0 0 120px rgba(201,168,106,.14)}
body.ss .lb .d{color:#c9a86a}body.ss .lb .pr,body.ss .x,body.ss .tot{color:#f0dba6}
body.ss .dr{background:#0f0b15;border-left-color:#2a2036}
body.ss .toast{background:#c9a86a;color:#1a1208}
.ssnav{color:#c9a86a}.ssbtn{margin-left:16px;animation-delay:2.4s!important}
.ssdeco{position:absolute;inset:0;pointer-events:none}
.ssrays{position:absolute;inset:-30% -10% 0;background:repeating-conic-gradient(from -32deg at 50% -8%,rgba(240,219,166,.1) 0 3deg,transparent 3deg 11deg);-webkit-mask-image:linear-gradient(#000,transparent 80%);mask-image:linear-gradient(#000,transparent 80%);animation:ssray 7s ease-in-out infinite alternate}
@keyframes ssray{from{opacity:.35}to{opacity:1;transform:scale(1.06)}}
.sscross{position:absolute;left:50%;top:50%;height:92vh;transform:translate(-50%,-50%);opacity:.14;filter:drop-shadow(0 0 22px #c9a86a);animation:sspulse 5s ease-in-out infinite}
@keyframes sspulse{50%{opacity:.27}}
#ssem{position:absolute;inset:0;width:100%;height:100%}
#ssov{position:fixed;inset:0;z-index:300;background:#07050b;display:grid;place-items:center;opacity:0;animation:ssfade .7s forwards;overflow:hidden}
#ssov.out{animation:ssout 1s forwards;pointer-events:none}
@keyframes ssfade{to{opacity:1}}@keyframes ssout{from{opacity:1}to{opacity:0}}
.ssburst{position:absolute;inset:-50%;background:repeating-conic-gradient(rgba(240,219,166,.15) 0 3deg,transparent 3deg 12deg);-webkit-mask-image:radial-gradient(circle,#000,transparent 55%);mask-image:radial-gradient(circle,#000,transparent 55%);opacity:0;animation:ssspin 14s linear infinite,ssfade 1.4s .6s forwards}
@keyframes ssspin{to{transform:rotate(360deg)}}
#ssov svg{position:absolute;height:46vh;filter:drop-shadow(0 0 18px #c9a86a)}
.ssdraw{fill:rgba(201,168,106,0);stroke:#f0dba6;stroke-width:.8;stroke-dasharray:1;stroke-dashoffset:1;animation:ssd 1.6s .5s cubic-bezier(.6,0,.2,1) forwards,ssfill 1s 2s forwards}
@keyframes ssd{to{stroke-dashoffset:0}}@keyframes ssfill{to{fill:rgba(201,168,106,.2)}}
.sstxt{position:absolute;bottom:20vh;display:flex;font-family:'Cinzel',serif;font-size:clamp(20px,5vw,56px);letter-spacing:.45em;color:#f0dba6}
.sstxt span{opacity:0;filter:blur(8px);animation:sstl 1s forwards}
@keyframes sstl{to{opacity:1;filter:none}}
.sssub{position:absolute;bottom:14vh;font:300 12px 'Inter',sans-serif;letter-spacing:.5em;text-transform:uppercase;color:#8d8497;opacity:0;animation:ssfade 1s 2.4s forwards}
.ssflash{position:absolute;inset:0;background:radial-gradient(circle,#fff6d8 0,#f0dba6 25%,transparent 62%);opacity:0;transform:scale(.1);animation:ssfl 1.1s 2.15s ease-in forwards}
@keyframes ssfl{60%{opacity:1}100%{opacity:1;transform:scale(3.2)}}
`;
document.head.appendChild(st);

let on=false,busy=false,set=new Set(),AC;
const pick=a=>on?set.has(a.id):!set.has(a.id);
const g0=grid,b0=buildFilters;
grid=function(){const f=ART;ART=f.filter(pick);try{g0();if(on&&!ART.length&&f.length)$('#grid').innerHTML='<p style="color:#8d8497;letter-spacing:.25em;font-size:12px;text-transform:uppercase">Próximamente: nuevas obras de Semana Santa</p>'}finally{ART=f}};
buildFilters=function(){const f=ART;ART=f.filter(pick);try{b0()}finally{ART=f}};
const refresh=()=>{filt='Todo';buildFilters();grid()};

const SW=[['.eyebrow','Colección Semana Santa · Arte sacro'],['.hero em','Fe, silencio y devoción hecha a mano.'],['#galeria .num','I — OBRAS SAGRADAS'],['#galeria .title h2','La <i>colección</i>'],['#mq',('<b>✝</b>Pasión<b>✝</b>Vía Crucis<b>✝</b>Silencio<b>✝</b>Esperanza<b>✝</b>Resurrección<b>✝</b>Arte sacro').repeat(4)]];
SW.forEach(s=>{const e=$(s[0]);s.push(e?e.innerHTML:'')});

fetch('data/obras.json?v='+Date.now()).then(r=>r.json()).then(j=>{(j.obras||[]).filter(o=>!o.oculta).forEach((o,i)=>{if(o.semana_santa)set.add(i+1)});refresh()}).catch(()=>{});

function embers(){const cv=$('#ssem');if(!cv)return;const x=cv.getContext('2d');let W,H,P=[];
  const mk=r=>({x:Math.random()*W,y:r?Math.random()*H:H+10,s:.6+Math.random()*1.8,v:.25+Math.random()*.6,ph:Math.random()*6,a:.2+Math.random()*.6});
  W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=Array.from({length:60},()=>mk(1));
  (function t(){if(!on||!cv.isConnected)return;x.clearRect(0,0,W,H);
    P.forEach((p,i)=>{p.y-=p.v;p.ph+=.03;p.x+=Math.sin(p.ph)*.35;if(p.y<-10)P[i]=mk(0);
      x.beginPath();x.fillStyle=`rgba(240,219,166,${p.a*(.6+.4*Math.sin(p.ph*3))})`;x.shadowColor='#c9a86a';x.shadowBlur=10;x.arc(p.x,p.y,p.s,0,7);x.fill()});
    requestAnimationFrame(t)})()}
function deco(a){let d=$('.ssdeco');if(!a){d&&d.remove();return}if(d)return;d=document.createElement('div');d.className='ssdeco';
  d.innerHTML='<div class="ssrays"></div><svg class="sscross" viewBox="0 0 100 160" fill="none" stroke="#c9a86a" stroke-width=".6"><path d="M43 0h14v48h38v14H57v98H43V62H5V48h38z"/></svg><canvas id="ssem"></canvas>';
  $('.hero').prepend(d);embers()}
function lab(){const a=$('#ssGo'),b=$('#ssHero');if(a)a.textContent=on?'Estilo VITAMIN':'Semana Santa ✝';if(b)b.textContent=on?'↩ Volver al estilo VITAMIN':'✝ Colección Semana Santa'}
function h1(){$('#h1').innerHTML=[...CFG.nombre].map((c,i)=>`<span style="animation-delay:${.3+i*.12}s">${c}</span>`).join('')}
function apply(v){
  on=v;document.body.classList.toggle('ss',v);
  SW.forEach(s=>{const e=$(s[0]);if(e)e.innerHTML=v?s[1]:s[2]});
  deco(v);h1();refresh();lab();scrollTo({top:0,behavior:'instant'});
  try{history.replaceState(null,'',v?'#semana-santa':location.pathname+location.search)}catch(e){}
  if(typeof track=='function')track('filtro',v?'semana_santa':'estilo_vitamin');
}
function bell(){if(!AC)return;try{AC.resume();
  const c=AC,t=c.currentTime+.05;
  /* volumen general: sube con la entrada de la luz y se apaga suave */
  const M=c.createGain();M.gain.setValueAtTime(0,t);M.gain.linearRampToValueAtTime(.55,t+1.8);M.gain.setValueAtTime(.55,t+3.4);M.gain.exponentialRampToValueAtTime(.0001,t+7);
  /* eco de catedral (reverb generada) */
  const n=Math.floor(c.sampleRate*3.4),ir=c.createBuffer(2,n,c.sampleRate);
  for(let k=0;k<2;k++){const d=ir.getChannelData(k);for(let q=0;q<n;q++)d[q]=(Math.random()*2-1)*Math.pow(1-q/n,2.4)}
  const rv=c.createConvolver();rv.buffer=ir;const wet=c.createGain();wet.gain.value=.9;
  const dry2=c.createGain();dry2.gain.value=.45;
  const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=5600;
  M.connect(lp);lp.connect(dry2);lp.connect(rv);rv.connect(wet);dry2.connect(c.destination);wet.connect(c.destination);
  /* coro celestial: acorde de Do mayor con novena, voces desafinadas y con vibrato suave */
  [[261.6,.5],[392,.45],[523.3,.5],[659.3,.42],[784,.36],[987.8,.26],[1174.7,.18]].forEach(([f,v],k)=>{
    [-7,7].forEach(det=>{
      const o=c.createOscillator(),g=c.createGain(),lf=c.createOscillator(),lg=c.createGain(),s=t+k*.12;
      o.type=k<3?'triangle':'sine';o.frequency.value=f;o.detune.value=det;
      lf.frequency.value=4.3+Math.random();lg.gain.value=f*.004;lf.connect(lg);lg.connect(o.frequency);
      g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v*.09,s+1.5);g.gain.setValueAtTime(v*.09,s+3);g.gain.linearRampToValueAtTime(0,s+6);
      o.connect(g);g.connect(M);o.start(s);lf.start(s);o.stop(s+6.1);lf.stop(s+6.1)})});
  /* destellos mágicos: arpegio ascendente de campanitas */
  [1046.5,1318.5,1568,1975.5,2349.3,2637,3136,3951].forEach((f,i)=>{
    const s=t+.5+i*.2,o=c.createOscillator(),g=c.createGain();
    o.type='sine';o.frequency.value=f;
    g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.11,s+.01);g.gain.exponentialRampToValueAtTime(.0001,s+2.2);
    o.connect(g);g.connect(lp);o.start(s);o.stop(s+2.3)});
}catch(e){}}
function go(e){
  if(e)e.preventDefault();if(busy)return;busy=true;
  const o=document.createElement('div');o.id='ssov';document.body.appendChild(o);
  let sw=false;const doSwap=()=>{if(sw)return;sw=true;apply(!on)};
  if(!on){ // ENTRAR: ceremonia completa
    try{if(localStorage.getItem('batmute')!='1')AC=AC||new (window.AudioContext||window.webkitAudioContext)()}catch(x){}
    o.innerHTML='<div class="ssburst"></div><svg viewBox="0 0 100 160"><path class="ssdraw" pathLength="1" d="M43 0h14v48h38v14H57v98H43V62H5V48h38z"/></svg><div class="sstxt">'+[...'SEMANA SANTA'].map((c,i)=>`<span style="animation-delay:${1.4+i*.07}s">${c==' '?'&nbsp;':c}</span>`).join('')+'</div><div class="sssub">Fe · Silencio · Devoción</div><div class="ssflash"></div>';
    setTimeout(bell,1500);
    const t2=setTimeout(()=>o.classList.add('out'),3000);setTimeout(doSwap,2900);
    o.onclick=()=>{doSwap();clearTimeout(t2);o.classList.add('out')};
    setTimeout(()=>{o.remove();busy=false},4200);
  }else{ // SALIR: fundido breve
    setTimeout(doSwap,700);setTimeout(()=>o.classList.add('out'),800);setTimeout(()=>{o.remove();busy=false},1900);
  }
}
const li=document.createElement('li');li.innerHTML='<a href="#" id="ssGo" class="ssnav"></a>';
const ul=$('nav ul');ul.insertBefore(li,ul.lastElementChild);
const hb=document.createElement('a');hb.href='#';hb.id='ssHero';hb.className='cta ssbtn';
const hc=$('.hero .cta');hc.insertAdjacentElement('afterend',hb);
$('#ssGo').onclick=go;hb.onclick=go;lab();
if(location.hash=='#semana-santa'||new URLSearchParams(location.search).get('tema')=='semana-santa')apply(true);
})();
