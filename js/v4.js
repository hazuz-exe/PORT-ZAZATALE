/* ===== V4: poeira, ponto de save e sala do Sans ===== */
function dust(el,n=24){const r=el.getBoundingClientRect();sfx('dust',.8);el.classList.add('dst');
 for(let i=0;i<n;i++){const p=document.createElement('i');p.className='pt';p.style.cssText=`left:${r.left+Math.random()*r.width}px;top:${r.top+Math.random()*r.height}px;--dx:${40+Math.random()*90}px;--dy:${-30-Math.random()*70}px;animation-delay:${Math.random()*.5}s`;document.body.append(p);setTimeout(()=>p.remove(),1900)}}
const sp=$('#sp');
function showSave(){if(!sp.hidden)return;sp.hidden=false;sfx('save',.5)}
sp.onclick=async e=>{e.stopPropagation();sfx('save');sp.classList.add('on');await wait(600);sp.classList.remove('on');enterRoom()};
/* ---- Sala do Sans ---- */
const sr=$('#sr'),sbt=$('#sbt'),sbub=$('#sbub'),sit=$('#sit'),smn=$('#smn'),sans=$('#sans'),sbox=$('#sbox'),fxl=$('#sfxl'),K={},SR={k:0,on:0,fs:0,ms:0,di:0,armed:0,stop:null};
const OP=[['ei. você veio até aqui.','n'],['lá fora tá chovendo, mas eu gosto de pensar que, em algum outro lugar, o sol tá nascendo.','c'],['sabe... eu já vi muita gente desistir. e eu entendo. às vezes tudo parece pesado demais.','n'],['mas sonhos não precisam ser grandes pra valer a pena.','w'],['se hoje não deu certo, amanhã tem outro dia. a chuva passa, kid.','c']];
const DR=['todo mundo cai uma hora. o que importa é a próxima vez que você levanta.','não desiste, tá? nem do seu sonho, nem de você.','um passo pequeno por dia ainda é um passo. isso conta.','e se te disserem que é impossível... lembra que alguém já ouviu isso antes de fazer.'];
const ME=['obrigado por não me machucar.','a maioria das pessoas aperta o outro botão primeiro.','você escolheu poupar. de novo. isso diz muito sobre quem você é.'];
const BL=['olha... eu não sou de falar muito.','mas eu queria te agradecer.','obrigado por ter vindo até aqui, por ter me ouvido, por não desistir de nada no caminho.','mesmo depois de tanta chuva, o sol sempre dá um jeito de voltar.'];
let FACE=f=>sans.src=A['sansb_'+f];const hpSet=v=>{v=Math.max(0,v);$('#spb').style.width=v*5+'%';$('#spn').textContent=v+'/20'};
const W8=async ms=>{const k=SR.k;await wait(ms);if(k!==SR.k)throw 0};
const sayS=async(t,f='n',hold=1100)=>{const k=SR.k;FACE(f);sbub.hidden=false;sbub.classList.remove('done');VOX=SR.vox||'sans';await new Promise(r=>typ(sbt,t,r,52));if(k!==SR.k)throw 0;sbub.classList.add('done');
 await new Promise(r=>{const id=setTimeout(nx,Math.max(hold,1400+t.length*55)*(TS==='lento'?1.4:1));function nx(){clearTimeout(id);SR.next=null;r()}SR.next=nx});sbub.classList.remove('done');if(k!==SR.k)throw 0};
const lock=v=>{smn.style.visibility=v?'hidden':'visible';$$('button',smn).forEach(b=>b.disabled=!!v)};
smn.innerHTML=[['fight','ATACAR'],['act','AGIR'],['item','ITEM'],['mercy','PIEDADE']].map(([k,l])=>`<button data-k="${k}"><img class="ic" data-src="icon_${k}" alt=""><img class="ht" data-src="soul_red" alt="">${l}</button>`).join('');hyd(smn);
smn.onclick=e=>{const b=e.target.closest('button');if(b&&!b.disabled){sfx('select');act(b.dataset.k)}};
function slashFx(){const im=document.createElement('img');im.className='sl2';im.alt='';fxl.append(im);sfx('slash',.6);let i=0;const t=setInterval(()=>{if(i>5){clearInterval(t);im.remove();return}im.src=A['slash_'+i++]},70)}
function fxText(t,c){const s=document.createElement('span');s.className='fxt '+(c||'');s.textContent=t;fxl.append(s);setTimeout(()=>s.remove(),1000)}
function enterRoom(){SR.k++;Object.assign(SR,{on:1,fs:0,ms:0,di:0,armed:0,stop:null});music(0);stopV();$('main').inert=true;sr.hidden=false;
 $('#sst').style.backgroundImage=`url(${A.bg_snowdin})`;sans.style.cssText='';sans.classList.remove('dst');FACE('n');['send','sgo','bc','tgw'].forEach(i=>$('#'+i).hidden=true);sbox.classList.remove('atk');
 AU.rain.loop=true;AU.rain.currentTime=0;AU.rain.volume=.4;if(!mute)AU.rain.play().catch(()=>{});sit.hidden=false;sit.textContent='';lock(1);hpSet(20);
 (async()=>{for(const[t,f]of OP)await sayS(t,f);sbub.hidden=true;sit.textContent='* Você sente a chuva passar. O que vai fazer?';lock(0);$('button',smn).focus()})().catch(()=>{})}
function exitRoom(){window.roomCleanup&&roomCleanup();SR.k++;SR.next=null;SR.on=0;sr.hidden=true;AU.rain.pause();AU.over.pause();stopV();clearInterval(sbt._t);$('main').inert=false;VOX='sans';music(1)}
$('#srx').onclick=$('#sev').onclick=exitRoom;
async function act(k){lock(1);sbub.hidden=true;try{
  if(k!=='fight')SR.fs=0;if(k!=='mercy')SR.ms=0;
  if(k==='fight'){SR.fs++;SR.ms=0;if(await doFight())return}
  else if(k==='act'){sit.textContent='* Você conversa com o Sans.';await sayS(DR[SR.di++%DR.length],'c')}
  else if(k==='item'){sit.textContent='* Sans te entrega um ketchup.';await sayS('não cura nada, mas o gesto conta, né?','w')}
  else{SR.ms++;sit.textContent='* Você poupa o Sans.';if(SR.ms>=4){await finale(0);return}await sayS(ME[SR.ms-1],'c')}
 }catch(e){return}
 sbub.hidden=true;sit.textContent=SR.armed?'* Sans parece exausto. Ele não vai se mexer.':'* O que você vai fazer?';lock(0);$('button',smn).focus()}
async function doFight(){sit.hidden=true;const tw=$('#tgw'),tb=$('#tgb');tw.hidden=false;
 await new Promise(r=>{let p=0,d=1,id;const stop=()=>{cancelAnimationFrame(id);tw.onclick=null;SR.stop=null;r()};
  const f=()=>{if(!SR.on)return;p+=d*1.9;if(p>=100||p<=0)d*=-1;tb.style.left=`calc(${p}% - 5px)`;id=requestAnimationFrame(f)};f();tw.onclick=stop;SR.stop=stop});
 tw.hidden=true;sit.hidden=false;
 if(SR.armed){slashFx();await W8(450);fxText('9999999','r');sfx('hit',.9);FACE('h');AU.rain.pause();sans.style.transform='translateX(6px)';await W8(900);sans.style.transform='';await finale(1);return 1}
 const dir=Math.random()<.5?-1:1;sans.style.transform=`translateX(${dir*120}px)`;slashFx();await W8(300);fxText('MISS');await W8(800);sans.style.transform='';
 if(SR.fs===1)await sayS('ei, calma aí.','w');else if(SR.fs===2)await sayS('você tá me testando, né?','n');
 else{await sayS('tá bom. você pediu.','d',900);await attackPhase()}}
async function attackPhase(){const cv=$('#bc');sit.hidden=true;cv.hidden=false;sbox.classList.add('atk');sbub.hidden=true;hpSet(20);
 const ok=await attack();cv.hidden=true;sbox.classList.remove('atk');sit.hidden=false;
 if(!ok){await gameOver();return attackPhase()}
 SR.armed=1;SR.fs=0;await sayS('...heh.','c');await sayS('você é persistente, kid. tô cansado.','c');await sayS('vou ficar parado. faz o que você tem que fazer.','n',1400)}
function gameOver(){return new Promise(r=>{const g=$('#sgo');AU[SR.mus||'rain'].pause();sfx('shatter',.9);if(!mute){AU.over.currentTime=0;AU.over.volume=.5;AU.over.play().catch(()=>{})}
 g.hidden=false;$('#sgc').focus();$('#sgc').onclick=()=>{g.hidden=true;AU.over.pause();if(!mute&&SR.on)AU[SR.mus||'rain'].play().catch(()=>{});SR.hp=20;hpSet(20);sfx('save');r()}})}
async function finale(kind){lock(1);try{
  for(const t of BL)await sayS(t,kind?'h':'c');
  if(!kind){$('#sst').style.backgroundImage=`url(${A.bg_surface})`;await sayS('e sabe o que eu aprendi? que ainda existem pessoas boas no mundo.','c');await sayS('e você é uma delas.','w',1800)}
  else{await sayS('...','d',1200);await sayS('não. na verdade, não existem.','d');await sayS('todas elas merecem queimar no fundo do inferno.','d',1600);sbub.hidden=true;dust(sans);await W8(1900);sans.style.visibility='hidden'}
  sbub.hidden=true;const e=$('#send');$('#sen').textContent=kind?'VOCÊ VENCEU. MAS NINGUÉM COMEMOROU.':'FINAL PACIFISTA: AINDA EXISTEM PESSOAS BOAS NO MUNDO.';e.style.background=kind?'#000':'#000a';e.hidden=false;$('#sev').focus()
 }catch(e){}}
/* ---- Ataques do Sans (bullet hell) ---- */
function attack(){return new Promise(res=>{const cv=$('#bc'),x=cv.getContext('2d'),W=360,H=200,my=SR.k,heart=new Image(),sk=new Image();heart.src=A.soul_red;sk.src=A.blaster_0;
 const sl={x:W/2,y:H/2},tg={x:W/2,y:H/2,on:0},ob=[];let hp=20,inv=0,t=0,nb=0,last=performance.now(),done=0;
 const hit=d=>{if(inv>0)return;hp-=d;inv=.9;sfx('hit',.5);hpSet(hp)};
 cv.onpointermove=cv.onpointerdown=e=>{const r=cv.getBoundingClientRect();tg.x=(e.clientX-r.left)*W/r.width;tg.y=(e.clientY-r.top)*H/r.height;tg.on=1};
 const bone=(a,b,w,h,vx,vy)=>ob.push({k:'b',x:a,y:b,w,h,vx,vy});
 const fin=ok=>{done=1;cv.onpointermove=cv.onpointerdown=null;res(ok)};
 const loop=now=>{if(my!==SR.k||done)return;const dt=Math.min(.05,(now-last)/1000);last=now;t+=dt;inv=Math.max(0,inv-dt);
  const dx=(K.arrowright||K.d?1:0)-(K.arrowleft||K.a?1:0),dy=(K.arrowdown||K.s?1:0)-(K.arrowup||K.w?1:0);
  if(dx||dy){tg.on=0;const n=Math.hypot(dx,dy);sl.x+=dx/n*170*dt;sl.y+=dy/n*170*dt}
  else if(tg.on){const ex=tg.x-sl.x,ey=tg.y-sl.y,d=Math.hypot(ex,ey);if(d>3){const m=Math.min(d,170*dt);sl.x+=ex/d*m;sl.y+=ey/d*m}}
  sl.x=clamp(sl.x,7,W-7);sl.y=clamp(sl.y,7,H-7);nb-=dt;
  if(t<7&&nb<=0){nb=.95;const g=20+Math.random()*(H-120);bone(W,0,12,g,-190,0);bone(W,g+85,12,H-g-85,-190,0)}
  else if(t>=7&&t<13&&nb<=0){nb=.85;const g=20+Math.random()*(W-120);bone(0,-12,g,12,0,170);bone(g+90,-12,W-g-90,12,0,170)}
  else if(t>=13&&t<19&&nb<=0){nb=1.5;const e=Math.random()*4|0;ob.push({k:'z',e,v:e<2?sl.y:sl.x,t:0})}
  x.fillStyle='#000';x.fillRect(0,0,W,H);x.fillStyle='#fff';
  for(let i=ob.length-1;i>=0;i--){const o=ob[i];
   if(o.k==='b'){o.x+=o.vx*dt;o.y+=o.vy*dt;if(o.x<-40||o.x>W+40||o.y>H+40){ob.splice(i,1);continue}
    x.fillRect(o.x,o.y,o.w,o.h);x.fillRect(o.x-2,o.y,o.w+4,3);x.fillRect(o.x-2,o.y+o.h-3,o.w+4,3);
    if(sl.x+5>o.x&&sl.x-5<o.x+o.w&&sl.y+5>o.y&&sl.y-5<o.y+o.h)hit(3)}
   else{o.t+=dt;if(o.t>1.25){ob.splice(i,1);continue}const h=o.e<2,r=h?[0,o.v-15,W,30]:[o.v-15,0,30,H];
    const ex=o.e===0?0:o.e===1?W-30:0,ey=o.e===2?0:o.e===3?H-34:0;
    if(h)x.drawImage(sk,o.e===0?0:W-30,o.v-17,30,34);else x.drawImage(sk,o.v-15,o.e===2?0:H-34,30,34);
    if(o.t<.7){x.globalAlpha=Math.floor(o.t*14)%2?.9:.3;x.fillRect(h?0:o.v-1,h?o.v-1:0,h?W:2,h?2:H);x.globalAlpha=1}
    else if(o.t<1.05){x.fillRect(...r);if(sl.x+5>r[0]&&sl.x-5<r[0]+r[2]&&sl.y+5>r[1]&&sl.y-5<r[1]+r[3])hit(5)}}}
  if(inv<=0||Math.floor(inv*12)%2)x.drawImage(heart,sl.x-8,sl.y-8,16,16);
  if(hp<=0)return fin(false);if(t>=19)return fin(true);requestAnimationFrame(loop)};
 requestAnimationFrame(loop)})}
/* ---- Teclado da sala ---- */
addEventListener('keydown',e=>{const k=e.key.toLowerCase();K[k]=1;if(sr.hidden)return;if(k.startsWith('arrow'))e.preventDefault();
 if(k==='escape')return exitRoom();
 if(k==='enter'||k==='z'||k===' '){if(SR.stop){e.preventDefault();return SR.stop()}
  if(!sbub.hidden&&smn.style.visibility==='hidden'){e.preventDefault();return sbt._skip?sbt._skip():SR.next&&SR.next()}
  const b=document.activeElement;if(k!==' '&&b&&b.closest('#smn')&&!b.disabled){e.preventDefault();b.click()}}
 if((k==='arrowleft'||k==='arrowright')&&smn.style.visibility!=='hidden'){const bs=$$('button',smn),i=bs.indexOf(document.activeElement);bs[(i+(k==='arrowright'?1:-1)+4)%4].focus();sfx('select',.4)}},true);
addEventListener('keyup',e=>{delete K[e.key.toLowerCase()]},true);
