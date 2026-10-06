const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
function hyd(r=document){$$('[data-src]',r).forEach(e=>e.src=A[e.dataset.src]);$$('[data-bg]',r).forEach(e=>e.style.backgroundImage=`url(${A[e.dataset.bg]})`);$$('[data-p]',r).forEach(e=>e.textContent=P[e.dataset.p])}
/* som */
let AC,mute=false;
function blip(f=520,d=.045){if(mute||!f)return;try{AC=AC||new AudioContext();const o=AC.createOscillator(),g=AC.createGain();o.type='square';o.frequency.value=f;g.gain.value=.035;o.connect(g).connect(AC.destination);o.start();o.stop(AC.currentTime+d)}catch(e){}}
$('#snd').onclick=e=>{mute=!mute;e.target.textContent='SOM: '+(mute?'DESLIGADO':'LIGADO');e.target.setAttribute('aria-pressed',mute)};
/* máquina de escrever */
function typ(el,txt,cb,sp=28){clearInterval(el._t);const end=()=>{clearInterval(el._t);el.textContent=txt;el._skip=null;cb&&cb()};if(RM){end();return}
 let i=0;el.textContent='';el._skip=end;el._t=setInterval(()=>{el.textContent=txt.slice(0,++i);if(i%2)blip(txt[i-1]===' '?0:520);if(i>=txt.length)end()},sp)}
/* montagem */
const T=[['inicio','INÍCIO','save'],['habilidades','HABILIDADES','item'],['projetos','PROJETOS','fight'],['sobre','SOBRE MIM','act'],['contato','CONTATOS','mercy']];
$('nav').innerHTML=T.map(([id,l,ic])=>`<button data-t="${id}"><img class="ic" data-src="icon_${ic}" alt=""><img class="ht" data-src="soul_red" alt="">${l}</button>`).join('');
$('#sg').innerHTML=S.map(([k,c,t,sub,sk])=>`<article class="box card" style="--c:${c}"><h3><img data-src="soul_${k}" alt="">${t}</h3><p>${sub}</p><ul class="sk">${sk.map(([n,v,d])=>`<li tabindex="0" data-d="${n}: ${d}"><div class="row"><span class="nm">${n}</span><span>LV ${Math.round(v/5)}</span></div><div class="hp"><i style="--v:${v}%"></i></div></li>`).join('')}</ul></article>`).join('');
$('#pj').innerHTML=J.map((p,i)=>`<button class="enemy" data-i="${i}"><div class="im px" data-bg="${p.img}"></div><div class="bd"><img class="h" data-src="soul_red" alt=""><h3 class="nm">${p.n}</h3><p>${p.t}</p>${p.s.map(s=>`<span class="tg">${s}</span>`).join('')}</div></button>`).join('');
$('#l1').href='mailto:'+P.email;$('#l2').href=P.git;
hyd();document.body.style.cursor=`url(${A.soul_red}) 9 9,auto`;
const cs=document.createElement('style');cs.textContent=`button,a,.enemy,.stage,.dlg{cursor:url(${A.soul_yellow}) 9 9,pointer}`;document.head.append(cs);

/* navegação */
let cur,said=0;
function go(id){if(!T.some(t=>t[0]===id))id='inicio';cur=id;
 $$('main>section').forEach(s=>{const on=s.id===id;s.hidden=!on;s.classList.remove('in');if(on){void s.offsetWidth;requestAnimationFrame(()=>s.classList.add('in'))}});
 $$('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===id));
 try{history.replaceState(null,'','#'+id)}catch(e){}scrollTo(0,0);
 if(id==='inicio'&&!said){said=1;say()}
 if(id==='contato')typ($('#ctx'),'* quer bater um papo? manda uma mensagem. respondo mais rápido que um esqueleto preguiçoso.')}
$('nav').onclick=e=>{const b=e.target.closest('button');if(b){blip(330,.08);go(b.dataset.t)}};
/* diálogo da home */
const L=[[0,'* e aí. você chegou. beleza.'],[1,'* este é o portfólio de {nome}, o zaza. cria sites, jogos e coisas bem pixeladas.'],[3,'* use as setas (ou clique no cenário) pra andar com o frisk. a porta à direita leva aos projetos.'],[5,'* ou clica nos botões lá embaixo. sem pressa. a gente tem tempo.']];
let li=0;const dl=$('#dlg'),dp=$('#dtx');
function say(){const[f,t]=L[li];$('#dface').src=A['sans_face_'+f];dl.classList.remove('done');typ(dp,t.replace('{nome}',P.nome.toLowerCase()),()=>{dl.classList.add('done');li===L.length-1&&showSave()})}
dl.onclick=()=>{if(dp._skip)return dp._skip();li=(li+1)%L.length;say()};
dl.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();dl.click()}};
/* habilidades */
$('#sg').addEventListener('pointerover',e=>{const l=e.target.closest('li');if(l&&l!==$('#sd')._l){$('#sd')._l=l;typ($('#sd'),'* '+l.dataset.d,null,14)}});
$('#sg').addEventListener('focusin',e=>{const l=e.target.closest('li');if(l)typ($('#sd'),'* '+l.dataset.d,null,14)});
/* frisk */
const fr=$('#fr'),stg=$('#stage'),keys={};let fx=10,fy=72,tgt=null,dir='down',lt=0;
function walk(t){const dt=Math.min(40,t-lt)/16.7;lt=t;
 if(cur==='inicio'&&bt.hidden){let dx=(keys.arrowright||keys.d?1:0)-(keys.arrowleft||keys.a?1:0),dy=(keys.arrowdown||keys.s?1:0)-(keys.arrowup||keys.w?1:0);
  if(tgt&&!dx&&!dy){const ex=tgt.x-fx,ey=tgt.y-fy;if(Math.hypot(ex,ey)<.7)tgt=null;else{dx=Math.abs(ex)>.7?Math.sign(ex):0;dy=Math.abs(ey)>.7?Math.sign(ey):0}}
  if(dx||dy){fx=clamp(fx+dx*.32*dt,4,96);fy=clamp(fy+dy*.22*dt,64,82);dir=dx?(dx<0?'left':'right'):'down';
   fr.src=A[`frisk_${dir==='right'?'left':dir}_${(t/140|0)%4}`];fr.style.transform=`translate(-50%,-100%) scaleX(${dir==='right'?-1:1})`;
   if(fx>89){fx=10;fy=72;tgt=null;blip(660,.15);go('projetos')}}
  else fr.src=A[`frisk_${dir==='right'?'left':dir}_0`];
  fr.style.left=fx+'%';fr.style.top=fy+'%'}
 requestAnimationFrame(walk)}
requestAnimationFrame(walk);
stg.onclick=e=>{const r=stg.getBoundingClientRect();tgt={x:clamp((e.clientX-r.left)/r.width*100,4,96),y:clamp((e.clientY-r.top)/r.height*100,64,82)}};
/* batalha de projeto */
const bt=$('#bt');let opener;
function fight(i){const p=J[i],tx=$('#btx'),m=$('#bmn');opener=document.activeElement;bt.hidden=false;$('main').inert=$('nav').inert=true;
 $('#bimg').style.backgroundImage=`url(${A[p.img]})`;typ(tx,`* ${p.n} apareceu! ${p.d}`);m.innerHTML='';
 const link=u=>u==='#'?typ(tx,p.msg||'* (o link deste projeto ainda não foi configurado)'):/^view:/.test(u)?viewer(u,p):open(u,'_blank','noopener');
 [['fight',p.l1||'CÓDIGO',()=>slash(()=>link(p.code))],['act',p.l2||'DEMO',()=>link(p.demo)],['item','STACK',()=>typ(tx,'* Stack: '+p.s.join(', ')+'.')],['mercy','POUPAR',shut]].forEach(([ic,lb,fn])=>{const b=document.createElement('button');b.innerHTML=`<img class="ic" data-src="icon_${ic}" alt=""><img class="ht" data-src="soul_red" alt="">${lb}`;b.onclick=fn;m.append(b)});
 hyd(m);m.firstChild.focus()}
function shut(){bt.hidden=true;$('main').inert=$('nav').inert=false;opener&&opener.focus()}
$('#pj').onclick=e=>{const b=e.target.closest('.enemy');if(b){blip(440,.1);fight(+b.dataset.i)}};
/* teclado */
addEventListener('keydown',e=>{const k=e.key.toLowerCase();
 if(!bt.hidden){if(k==='escape')shut();if(k==='arrowright'||k==='arrowleft'){const b=$$('#bmn button'),i=b.indexOf(document.activeElement);b[(i+(k==='arrowright'?1:-1)+b.length)%b.length].focus();blip(300,.04)}return}
 if(/input|textarea/i.test(e.target.tagName))return;
 if(cur==='inicio'&&/^(arrow(left|right|up|down)|[wasd])$/.test(k)){e.preventDefault();keys[k]=1;tgt=null}
 else if(/^[1-5]$/.test(k))go(T[k-1][0]);
 else if(k==='z'&&cur==='inicio')dl.click()});
addEventListener('keyup',e=>delete keys[e.key.toLowerCase()]);
/* contato */
$('#f').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);
 $('#sv').hidden=false;typ($('#svt'),'* Isso enche você de determinação.');blip(880,.25);
 setTimeout(()=>location.href=`mailto:${P.email}?subject=${encodeURIComponent('Contato pelo portfólio: '+d.get('n'))}&body=${encodeURIComponent(d.get('m')+'\n\n'+d.get('e'))}`,900)};
go(location.hash.slice(1));
