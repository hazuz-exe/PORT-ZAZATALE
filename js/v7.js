/* ===== V7: arena avançada (almas vermelha, azul e amarela), lutas da Chara e do Gaster e Sans reforçado ===== */
const rnd=(a,b)=>a+Math.random()*(b-a),rI=n=>Math.random()*n|0,FS=()=>window.FASTF||1;
const sbp=$('#sbp'),bhp=$('#bhp'),bhn=$('#bhn'),bhb=$('#bhb'),sstg=$('#sst'),bossHp=v=>{bhb.style.width=Math.max(0,v)+'%'};
/* ---- sprites e retratos por personagem ---- */
const FM={sans:{n:'sn_idle',w:'sn_idle2',c:'sn_idle',d:'sn_blue',h:'sn_hurt',pt:'sn_point',up:'sn_up',sw:'sn_sweep',tl:'sn_tail'},
 chara:{n:'ch_face_00',w:'ch_face_08',c:'ch_face_02',d:'ch_face_03',h:'ch_face_13',s:'ch_face_11'},
 gaster:{n:'g3_ex2',w:'g3_ex3',c:'g3_ex1',d:'g3_ex0',h:'g3_ex4'}};
FACE=f=>{const b=SR.boss||'sans';if(b==='sans'){sans.src=A[FM.sans[f]||'sn_idle'];sbp.hidden=true}else{sbp.src=A[FM[b][f]||FM[b].n];sbp.hidden=false}};
function cyc(list,ms){clearInterval(SR.anim);let i=0;sans.src=A[list[0]];if(list.length>1)SR.anim=setInterval(()=>{sans.src=A[list[++i%list.length]]},ms)}
const _er=enterRoom;
enterRoom=()=>{SR.boss='sans';SR.mus='rain';SR.vox='sans';SR.keepHp=0;sbp.hidden=true;sbub.className='';bhp.hidden=true;clearInterval(SR.anim);sstg.style.background='';_er();FACE('n')};
window.roomCleanup=()=>{clearInterval(SR.anim);bhp.hidden=true;sbp.hidden=true;sbub.className='';sstg.style.background='';sans.classList.remove('dst','vn');sans.style.cssText='';AU.nightmare.pause();AU.gaster.pause();SR.boss=null;const f=SR.onExit;SR.onExit=null;f&&f()};
/* ---- padrões de ataque (edite aqui!) ---- */
const HINT={red:'ALMA VERMELHA: MOVA-SE',blue:'ALMA AZUL: PULE (↑ / Z / TOQUE ACIMA)',yellow:'ALMA AMARELA: ATIRE (Z / ESPAÇO / TOQUE)'};
const PATS={
 sans:{ph:[
  {d:6,m:'red',pose:'pt',sfx:'bonezone',f:Z=>{Z.ev('a',.95,()=>{const g=rnd(20,Z.H-120);Z.bone(Z.W,0,12,g,-190,0);Z.bone(Z.W,g+85,12,Z.H-g-85,-190,0);sfx('bone',.25)});Z.ev('c',2.4,()=>Z.bone(Z.W,rnd(30,120),12,44,-150,0,'c'))}},
  {d:6,m:'blue',pose:'up',f:Z=>{Z.ev('s0',99,()=>Z.slam());Z.ev('b',1.1,()=>{const h=rnd(26,56);Z.bone(Z.W,Z.H-h,14,h,-200,0);sfx('bone',.2)});Z.ev('t',2.6,()=>Z.bone(Z.W,0,14,56,-200,0))}},
  {d:6,m:'red',pose:'sw',f:Z=>{Z.ev('z',1.4,()=>Z.beam(rI(4),null,'sn'))}},
  {d:6,m:'red',pose:'tl',f:Z=>{Z.ev('o',1.0,()=>Z.bone(0,-12,Z.W,12,0,150,'o'));Z.ev('c',1.8,()=>Z.bone(Z.W,0,12,Z.H,-130,0,'c'))}}]},
 chara:[
  {ph:[{d:9,m:'red',f:Z=>{Z.ev('s',1.2,()=>Z.slash(Z.sl.x+rnd(-18,18),Z.sl.y+rnd(-14,14),rnd(-.8,.8)))}}]},
  {ph:[{d:10,m:'red',f:Z=>{Z.ev('k',.3,()=>Z.knife(rnd(10,Z.W-10),rnd(130,210)));Z.ev('s',2,()=>Z.slash(Z.sl.x,Z.sl.y,rnd(-1,1)))}}]},
  {ph:[{d:10,m:'red',f:Z=>{Z.ev('l',1.5,()=>Z.beam(rI(2)?0:2,null,null,'#f22'));Z.ev('s',1.5,()=>Z.slash(Z.sl.x+rnd(-20,20),Z.sl.y,rnd(-1.2,1.2)))}}]},
  {ph:[{d:12,m:'red',f:Z=>{Z.ev('k',.22,()=>Z.knife(rnd(10,Z.W-10),rnd(160,240)));Z.ev('l',1.3,()=>Z.beam(rI(4),null,null,'#f22'));Z.ev('s',.9,()=>Z.slash(Z.sl.x+rnd(-16,16),Z.sl.y+rnd(-12,12),rnd(-1.4,1.4)))}}]}],
 gaster:[
  {hands:1,ph:[{d:9,m:'red',f:Z=>{Z.ev('z',1.25,()=>Z.beam(rI(4),null,'g4'));Z.ev('h',2.2,()=>{const L=rI(2);Z.hand(L?-30:Z.W+30,rnd(30,Z.H-30),L?140:-140,0)})}}]},
  {hands:1,ph:[{d:10,m:'blue',f:Z=>{Z.ev('s0',99,()=>Z.slam());Z.ev('h',.95,()=>Z.hand(rnd(20,Z.W-20),-30,0,170));Z.ev('z',2.8,()=>Z.beam(rI(2),Z.H-18,'g4'))}}]},
  {hands:1,ph:[{d:11,m:'yellow',f:Z=>{Z.ev('k',.5,()=>Z.block(rnd(14,Z.W-14),rnd(55,95)));Z.ev('z',3,()=>Z.beam(rI(2),Z.H-24,'g4'))}}]},
  {hands:1,ph:[{d:12,m:'red',f:Z=>{Z.glitch=1;Z.ev('z',.9,()=>Z.beam(rI(4),null,'g4'));Z.ev('h',1.3,()=>{const L=rI(2);Z.hand(L?-30:Z.W+30,rnd(30,Z.H-30),L?170:-170,0)})}}]}]};
/* ---- motor da arena ---- */
function attack(cfg){cfg=cfg||PATS[SR.boss||'sans'];
 return new Promise(res=>{
  const cv=$('#bc'),x=cv.getContext('2d'),W=360,H=200,my=SR.k,F=FS(),IM={};
  const I=n=>IM[n]||(IM[n]=Object.assign(new Image(),{src:A[n]}));
  const sl={x:W/2,y:H/2,vy:0,fl:0,m:'red'},tg={x:W/2,y:H/2,on:0},ob=[],bl=[],acc={},bounds=[];
  cfg.ph.reduce((s,p)=>{s+=p.d*F;bounds.push(s);return s},0);const total=bounds[bounds.length-1];
  let hp=SR.keepHp?SR.hp:20,inv=0,t=0,pi=-1,last=performance.now(),done=0,fx=0,fxm='',hint='',hT=0,pd=0,cd=0;
  hpSet(hp);
  const shake=()=>{sbox.classList.remove('shk');void sbox.offsetWidth;sbox.classList.add('shk')};
  const hit=d=>{if(inv>0||window.GOD)return;hp-=d;inv=.9;sfx('hit',.6);hpSet(hp);shake()};
  const Z={W,H,sl,dt:0,glitch:0,
   ev(k,p,fn){acc[k]=(acc[k]===undefined?0:acc[k])-Z.dt;if(acc[k]<=0){acc[k]=p;fn()}},
   bone(a,b,w,h,vx,vy,c){ob.push({k:'b',x:a,y:b,w,h,vx,vy,c:c||'w'})},
   beam(e,v,spr,col){ob.push({k:'z',e,v:v==null?(e<2?sl.y:sl.x):v,t:0,spr,col:col||'#fff'})},
   slash(a,b,r){ob.push({k:'s',x:a,y:b,r:r||0,t:0})},
   knife(a,vy){ob.push({k:'n',x:a,y:-10,vy,r:0})},
   hand(a,b,vx,vy,c){ob.push({k:'h',x:a,y:b,vx,vy,c:c||'black'})},
   block(a,vy){ob.push({k:'k',x:a,y:-16,w:24,h:16,vy})},
   slam(){sl.vy=720;sfx('slam',.7);shake()}};
  const start=i=>{const p=cfg.ph[i];pi=i;sl.m=p.m||'red';for(const k in acc)delete acc[k];hint=HINT[sl.m];hT=2.4;
   if(p.pose&&SR.boss==='sans')FACE(p.pose);p.sfx&&sfx(p.sfx,.5);
   if(cfg.hands){fx=.8;fxm=sl.m;sfx(sl.m==='yellow'?'yellow':sl.m==='blue'?'slam':'select',.5)}if(sl.m==='blue')sl.vy=0};
  cv.onpointermove=cv.onpointerdown=e=>{const r=cv.getBoundingClientRect();tg.x=(e.clientX-r.left)*W/r.width;tg.y=(e.clientY-r.top)*H/r.height;tg.on=1;if(e.type==='pointerdown')pd=1};
  cv.onpointerup=cv.onpointerleave=()=>pd=0;
  const fin=ok=>{done=1;cv.onpointermove=cv.onpointerdown=cv.onpointerup=cv.onpointerleave=null;if(SR.boss==='sans')FACE('n');SR.hp=hp;res(ok)};
  const loop=now=>{if(my!==SR.k||done)return;const dt=Math.min(.05,(now-last)/1000);last=now;Z.dt=dt;t+=dt;inv=Math.max(0,inv-dt);hT-=dt;fx=Math.max(0,fx-dt);
   const ix=bounds.findIndex(b=>t<b),cur=ix<0?cfg.ph.length-1:ix;if(cur!==pi)start(cur);
   const dx=(K.arrowright||K.d?1:0)-(K.arrowleft||K.a?1:0),dy=(K.arrowdown||K.s?1:0)-(K.arrowup||K.w?1:0);let mv=false;
   if(sl.m==='blue'){
    const jump=K.arrowup||K.w||K.z||K[' ']||(tg.on&&tg.y<sl.y-26);
    sl.vy+=900*dt;sl.y+=sl.vy*dt;if(sl.y>=H-8){sl.y=H-8;sl.vy=0;sl.fl=1}else sl.fl=0;
    if(sl.fl&&jump){sl.vy=-380;sl.fl=0}if(!jump&&sl.vy<-130)sl.vy=-130;if(sl.y<8){sl.y=8;sl.vy=Math.max(sl.vy,0)}
    let mx=dx;if(!mx&&tg.on){const e=tg.x-sl.x;if(Math.abs(e)>4)mx=Math.sign(e)}
    if(mx){sl.x+=mx*150*dt;mv=true}if(!sl.fl)mv=true}
   else{if(dx||dy){tg.on=0;const n=Math.hypot(dx,dy);sl.x+=dx/n*170*dt;sl.y+=dy/n*170*dt;mv=true}
    else if(tg.on){const ex=tg.x-sl.x,ey=tg.y-sl.y,d=Math.hypot(ex,ey);if(d>3){const m=Math.min(d,170*dt);sl.x+=ex/d*m;sl.y+=ey/d*m;mv=true}}}
   sl.x=clamp(sl.x,7,W-7);sl.y=clamp(sl.y,7,H-7);
   if(sl.m==='yellow'){cd-=dt;if((K.z||K[' ']||K.x||pd)&&cd<=0){cd=.28;bl.push({x:sl.x,y:sl.y-10});sfx('yellow',.15)}}
   const pf=cfg.ph[pi].f;pf&&pf(Z);
   x.fillStyle='#000';x.fillRect(0,0,W,H);
   if(Z.glitch&&Math.random()<.08){x.fillStyle=Math.random()<.5?'#fff':'#0ff';x.fillRect(0,rnd(0,H),W,rnd(1,4))}
   for(let i=ob.length-1;i>=0;i--){const o=ob[i];
    if(o.k==='b'){o.x+=o.vx*dt;o.y+=o.vy*dt;if(o.x<-400||o.x>W+60||o.y>H+60){ob.splice(i,1);continue}
     x.fillStyle=o.c==='c'?'#18e0ff':o.c==='o'?'#ff9a1f':'#fff';x.fillRect(o.x,o.y,o.w,o.h);
     if(o.w<=16){x.fillRect(o.x-2,o.y,o.w+4,3);x.fillRect(o.x-2,o.y+o.h-3,o.w+4,3)}else{x.fillRect(o.x,o.y-2,3,o.h+4);x.fillRect(o.x+o.w-3,o.y-2,3,o.h+4)}
     if(sl.x+5>o.x&&sl.x-5<o.x+o.w&&sl.y+5>o.y&&sl.y-5<o.y+o.h&&(o.c==='w'||(o.c==='c'&&mv)||(o.c==='o'&&!mv)))hit(3)}
    else if(o.k==='z'){o.t+=dt;if(o.t>1.25){ob.splice(i,1);continue}const h=o.e<2,r=h?[0,o.v-15,W,30]:[o.v-15,0,30,H];
     if(o.spr){const im=I(o.spr==='sn'?'sn_bl0':'g4_bl0'),w=34,hh=o.spr==='sn'?42:46;if(h)x.drawImage(im,o.e===0?0:W-w,o.v-hh/2,w,hh);else x.drawImage(im,o.v-w/2,o.e===2?0:H-hh,w,hh)}
     if(o.t<.7){x.globalAlpha=Math.floor(o.t*14)%2?.9:.3;x.fillStyle=o.col;x.fillRect(h?0:o.v-1,h?o.v-1:0,h?W:2,h?2:H);x.globalAlpha=1}
     else if(o.t<1.05){if(!o.f){o.f=1;sfx(o.spr?'blaster':'blade',.35)}x.fillStyle=o.col;x.fillRect(...r);if(sl.x+5>r[0]&&sl.x-5<r[0]+r[2]&&sl.y+5>r[1]&&sl.y-5<r[1]+r[3])hit(5)}}
    else if(o.k==='s'){o.t+=dt;if(o.t>1.1){ob.splice(i,1);continue}
     if(o.t<.8){x.strokeStyle='#f22';x.lineWidth=2;x.beginPath();x.arc(o.x,o.y,26*(1-o.t/.8)+8,0,7);x.stroke()}
     else{if(!o.f){o.f=1;sfx('blade',.45)}const fr=Math.min(5,((o.t-.8)/.045)|0);x.save();x.translate(o.x,o.y);x.rotate(o.r);x.drawImage(I('slash_'+fr),-21,-88,42,176);x.restore();
      if(fr>=1&&fr<=4){const c=Math.cos(-o.r),s=Math.sin(-o.r),ddx=sl.x-o.x,ddy=sl.y-o.y;if(Math.abs(ddx*c-ddy*s)<14&&Math.abs(ddx*s+ddy*c)<86)hit(5)}}}
    else if(o.k==='n'){o.y+=o.vy*dt;o.r+=dt*8;if(o.y>H+20){ob.splice(i,1);continue}x.save();x.translate(o.x,o.y);x.rotate(o.r);x.fillStyle='#e11';x.beginPath();x.moveTo(0,-10);x.lineTo(4,6);x.lineTo(-4,6);x.fill();x.fillStyle='#fff';x.fillRect(-2,6,4,5);x.restore();if(Math.hypot(sl.x-o.x,sl.y-o.y)<9)hit(3)}
    else if(o.k==='h'){o.x+=o.vx*dt;o.y+=o.vy*dt;if(o.x<-60||o.x>W+60||o.y>H+60){ob.splice(i,1);continue}x.save();x.translate(o.x,o.y);if(o.vx<0)x.scale(-1,1);if(o.vy>0)x.rotate(Math.PI);x.drawImage(I('g4_hand_'+o.c),-20,-24,40,48);x.restore();if(Math.abs(sl.x-o.x)<18&&Math.abs(sl.y-o.y)<22)hit(4)}
    else if(o.k==='k'){o.y+=o.vy*dt;if(o.y>H+20){ob.splice(i,1);continue}x.fillStyle='#000';x.strokeStyle='#fff';x.lineWidth=2;x.fillRect(o.x-o.w/2,o.y,o.w,o.h);x.strokeRect(o.x-o.w/2,o.y,o.w,o.h);x.fillStyle='#ff0';x.fillRect(o.x-3,o.y+5,6,6);if(Math.abs(sl.x-o.x)<o.w/2+4&&sl.y+5>o.y&&sl.y-5<o.y+o.h)hit(3)}}
   for(let i=bl.length-1;i>=0;i--){const b=bl[i];b.y-=330*dt;if(b.y<-10){bl.splice(i,1);continue}x.fillStyle='#ff0';x.fillRect(b.x-2,b.y-5,4,10);
    const j=ob.findIndex(o=>o.k==='k'&&Math.abs(b.x-o.x)<o.w/2+3&&b.y<o.y+o.h&&b.y>o.y-4);if(j>=0){ob.splice(j,1);bl.splice(i,1);sfx('hit2',.15)}}
   if(inv<=0||Math.floor(inv*12)%2)x.drawImage(I('soul_'+sl.m),sl.x-8,sl.y-8,16,16);
   if(fx>0&&cfg.hands){x.globalAlpha=Math.min(1,fx/.8);x.drawImage(I('g4_hand_'+(fxm==='blue'?'blue':fxm==='yellow'?'yellow':'red')),W/2-40,H/2-48,80,96);x.globalAlpha=1}
   if(hT>0){x.fillStyle='#ccc';x.font="13px DMono, monospace";x.fillText(hint,6,14)}
   if(hp<=0)return fin(false);if(t>=total)return fin(true);requestAnimationFrame(loop)};
  requestAnimationFrame(loop)})}
/* ---- apoio das lutas ---- */
function enterBoss(b,o){SR.k++;Object.assign(SR,{on:1,boss:b,mus:o.mus,vox:o.vox,fs:0,ms:0,di:0,armed:0,stop:null,next:null,keepHp:1,hp:20,turn:0,forgive:0,heals:3,bhp:100,hits:0,ready:0});
 stopV();music(0);$('main').inert=true;sr.hidden=false;['send','sgo','bc','tgw'].forEach(i=>$('#'+i).hidden=true);sbox.classList.remove('atk');
 sstg.style.background=o.bg;sans.style.cssText='';sans.classList.remove('dst','vn');sbub.className=o.cls;bhp.hidden=false;bhn.textContent=o.name;bossHp(100);
 hpSet(20);lock(1);sit.hidden=false;sit.textContent='';const a=AU[o.mus];a.loop=true;a.volume=o.volm;if(!mute&&a.paused)a.play().catch(blocked)}
function leaveBoss(){clearInterval(SR.anim);SR.k++;SR.on=0;SR.onExit=null;sr.hidden=true;bhp.hidden=true;sbp.hidden=true;sbub.className='';sstg.style.background='';stopV()}
const endScr=(txt,bg)=>{const e=$('#send');$('#sen').textContent=txt;e.style.background=bg;e.hidden=false;$('#sev').focus()};
const unlock=txt=>{sbub.hidden=true;sit.hidden=false;sit.textContent=txt;lock(0);const b=$('button',smn);b&&b.focus()};
function bar(){const tw=$('#tgw'),tb=$('#tgb');sit.hidden=true;tw.hidden=false;
 return new Promise(r=>{let p=0,d=1,id;const stop=()=>{cancelAnimationFrame(id);tw.onclick=null;SR.stop=null;tw.hidden=true;sit.hidden=false;r(p)};
  const f=()=>{if(!SR.on)return;p+=d*2.1;if(p>=100||p<=0)d*=-1;tb.style.left=`calc(${p}% - 5px)`;id=requestAnimationFrame(f)};f();tw.onclick=stop;SR.stop=stop})}
async function runTurn(cfg){const cv=$('#bc');sit.hidden=true;cv.hidden=false;sbox.classList.add('atk');sbub.hidden=true;
 let ok=await attack(cfg);
 while(!ok){cv.hidden=true;sbox.classList.remove('atk');await gameOver();cv.hidden=false;sbox.classList.add('atk');ok=await attack(cfg)}
 cv.hidden=true;sbox.classList.remove('atk');sit.hidden=false}
async function itemB(){if(SR.heals<=0){sit.textContent='* Você não tem mais itens.';return 0}SR.heals--;SR.hp=Math.min(20,SR.hp+12);hpSet(SR.hp);sfx('save',.5);sit.textContent=`* Você comeu torta de caramelo. +12 HP (restam ${SR.heals}).`;return 1}
const _act=act;act=k=>SR.boss==='chara'?actC(k):SR.boss==='gaster'?actG(k):_act(k);
/* ---- CHARA ---- */
const CT=['Vamos ver o quanto você aguenta.','Ainda de pé? Interessante.','Cada erro seu deixa uma marca. Eu só cobro os juros.','Chega de brincadeira.'],
 CHF=['Isso... doeu.','Você luta bem para quem diz ser gentil.','Continue. Veja até onde isso te leva.'],
 CHA=[['Perdão? Eu não preciso do seu perdão.','d'],['Para. Eu mandei parar.','w'],['...Por que ninguém me perdoou antes?','c']];
async function turnC(){const i=Math.min(SR.turn,3);await sayS(CT[i],i>2?'d':'n',900);sbub.hidden=true;cyc(['ch_f2','ch_f3','ch_f4','ch_f5'],130);const cfg=PATS.chara[i];SR.turn++;await runTurn(cfg);cyc(['ch_f0','ch_f1'],600)}
async function charaFight(){enterBoss('chara',{mus:'nightmare',volm:.3,vox:'chara',cls:'cb',name:'CHARA',bg:'radial-gradient(#3a0000,#0a0000 75%)'});cyc(['ch_f0','ch_f1'],600);
 try{await sayS('Agora é a sua vez de pagar.','d',1200);await turnC()}catch(e){return}unlock('* Chara te encara. O que você vai fazer?')}
async function actC(k){lock(1);sbub.hidden=true;try{
  if(k==='fight'){const p=await bar(),dmg=Math.round(18+30*(1-Math.abs(p-50)/50));slashFx();await W8(350);sfx('hit2',.7);fxText('-'+dmg,'r');SR.bhp-=dmg;bossHp(SR.bhp);FACE('h');cyc(['ch_f5'],1000);await W8(700);
   if(SR.bhp<=0){await killC();return}await sayS(CHF[Math.min(SR.hits++,2)],'h')}
  else if(k==='act'){SR.forgive++;const[t,f]=CHA[Math.min(SR.forgive,3)-1];sit.textContent='* Você tenta perdoar a Chara.';await sayS(t,f);
   if(SR.forgive===3){await W8(600);unlock('* Chara baixou a faca. Talvez agora seja possível poupá-la.');return}}
  else if(k==='item'){if(!await itemB()){unlock(sit.textContent);return}}
  else{if(SR.forgive>=3){await spareC();return}await sayS('Piedade? Não de você.','d');await punishC();return}
  await turnC()}catch(e){return}
 unlock(SR.forgive>=3?'* A faca de Chara está abaixada.':'* O que você vai fazer?')}
async function killC(){try{for(const t of ['...Então é assim.','Você me derrotou. Mas lembre-se: foi você quem escolheu continuar atacando.','Os erros humanos nunca acabam.'])await sayS(t,'h');
 sbub.hidden=true;AU.nightmare.pause();dust(sans);await W8(1900);sans.style.visibility='hidden';endScr('ROTA SOMBRIA: VOCÊ VENCEU. MAS A QUE CUSTO?','#000')}catch(e){}}
async function spareC(){try{for(const[t,f]of [['Obrigada.','c'],['Obrigada por não ser como os outros humanos.','s'],['Talvez eu também mereça uma segunda chance.','c']])await sayS(t,f,1500);
 sbub.hidden=true;clearInterval(SR.anim);sfx('barrier',.7);sans.classList.add('vn');await W8(1800);endScr('FINAL DO PERDÃO: ATÉ OS ERROS MAIS PESADOS PODEM SER PERDOADOS.','#000a')}catch(e){}}
async function punishC(){slashFx();await W8(400);sfx('heavy',.8);sbox.classList.add('shk');await W8(700);AU.nightmare.pause();leaveBoss();gv.hidden=false;$('#gdl').hidden=true;await overTail()}
/* ---- GASTER ---- */
const GT=['VAMOS TESTAR ESSA SUA CHAMA.','ALTERANDO A GRAVIDADE DA SUA ALMA...','AGORA... É VOCÊ QUEM ATIRA.','MOSTRE-ME TODA A SUA DETERMINAÇÃO.'];
async function turnG(){const i=Math.min(SR.turn,3);await sayS(GT[i],i%2?'d':'n',900);sbub.hidden=true;const cfg=PATS.gaster[i];SR.turn++;if(SR.turn>=4)SR.ready=1;await runTurn(cfg)}
function gasterFight(){return new Promise(async res=>{
 enterBoss('gaster',{mus:'gaster',volm:.35,vox:'gaster',cls:'gb',name:'GASTER',bg:'linear-gradient(#000c,#000c),url('+A.bg_lab+') center/cover'});
 SR.onExit=()=>res('exit');SR.res=res;cyc(['g3_idle0','g3_idle1','g3_idle2','g3_idle1'],260);sfx('glitch',.3);
 try{await turnG()}catch(e){return}unlock('* Gaster te observa em silêncio.')})}
async function actG(k){lock(1);sbub.hidden=true;try{
  if(k==='fight'){await bar();slashFx();await W8(350);fxText('0');sfx('hit2',.4);await sayS('O ataque atravessa Gaster sem efeito.','n');await sayS('ELE SÓ SORRI.','d')}
  else if(k==='act'){if(SR.ready){await sayS('VOCÊ... SOBREVIVEU. INTERESSANTE.','w',1200);const r=SR.res;leaveBoss();r('soul');return}sit.textContent='* Gaster observa você em silêncio.';await sayS('...','n',900)}
  else if(k==='item'){if(!await itemB()){unlock(sit.textContent);return}}
  else{if(SR.ready){await sayS('VOCÊ... ME POUPA? NINGUÉM FAZIA ISSO.','w',1300);const r=SR.res;leaveBoss();r('vanish');return}await sayS('NÃO HÁ PIEDADE... AINDA.','d')}
  await turnG()}catch(e){return}
 unlock(SR.ready?'* Gaster espera. AGIR para compreender, PIEDADE para poupar.':'* Gaster te observa em silêncio.')}
