/* ===== V2: sons reais, cena do Flowey, almas, Toriel, monstros e segredos ===== */
const AU={};for(const k in SFX)AU[k]=new Audio(SFX[k]);
AU.fall.loop=true;AU.fall.volume=.3;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
let VOX='sans',started=0,TS='normal';const _b=blip,TSP={lento:1.6,normal:1,inst:0};try{TS=localStorage.getItem('ts')||'normal'}catch(e){}
let AB=0;const blocked=e=>{if(e&&(e.name==='NotAllowedError'||e.name==='NotSupportedError')){AB=1;const b=$('#abn');b&&(b.hidden=false)}};
const MUSK=['fall','rain','nightmare','gaster','hopes'];let dkT;
const duck=on=>MUSK.forEach(k=>{const a=AU[k];if(!a)return;if(on){if(!a.paused&&!a._bv){a._bv=a.volume;a.volume=a._bv*.4}}else if(a._bv){a.volume=a._bv;a._bv=0}});
const duckOn=()=>{clearTimeout(dkT);duck(1)},duckOff=()=>{clearTimeout(dkT);dkT=setTimeout(()=>duck(0),700)};
const sfx=(k,v=.6)=>{if(mute||!AU[k])return;const a=AU[k].cloneNode();a.volume=v;const r=a.play();r&&r.catch(e=>{blocked(e);if(!e||e.name!=='NotAllowedError'){const o=AU[k];o.currentTime=0;o.volume=v;o.play().catch(blocked)}})};
const VK={sans:'sans',flowey:'flowey',gaster:'vgaster',toriel:'vtoriel',chara:'vchara'},stopV=()=>Object.values(VK).forEach(k=>AU[k]&&AU[k].pause()),VA=()=>!!AU[VK[VOX]];
const music=on=>{if(on&&!mute&&started){const r=AU.fall.play();r&&r.then(()=>{AB=0;const b=$('#abn');b&&(b.hidden=true)},blocked)}else AU.fall.pause()};
blip=f=>{if(f)sfx(f===880?'save':'select',.5)};
typ=function(el,t,cb,sp=46){clearInterval(el._t);stopV();
 const end=()=>{clearInterval(el._t);el.textContent=t;el._skip=null;stopV();duckOff();cb&&cb()};
 const tk=TSP[TS]??1;if(tk===0){end();return}sp*=tk;let i=0;el.textContent='';el._skip=end;
 if(VA()&&!mute){const a=AU[VK[VOX]];a.loop=true;a.currentTime=0;a.volume=.6;a.play().catch(blocked);duckOn()}
 el._t=setInterval(()=>{el.textContent=t.slice(0,++i);if(!VA()&&VOX!=='quiet'&&i%2)_b(300,.04);if(i>=t.length)end()},sp)};
const _go=go;go=id=>{VOX=id==='habilidades'?'toriel':'sans';_go(id)};
$('#snd').addEventListener('click',()=>{mute?(stopV(),music(0)):music(1)});
clearInterval(dp._t);dp._skip=null;dp.textContent='';
hyd();
/* ---- Habilidades: almas + Toriel como guia ---- */
$('#sg').insertAdjacentHTML('afterbegin',`<article class="box card" style="--c:#fff;grid-column:1/-1"><h3><img data-src="soul_red" alt="">ALMAS HUMANAS</h3><p>As sete almas de Undertale, na versão Zaza.</p><ul class="sk al">${AL.map(([k,c,n,v,d])=>`<li tabindex="0" data-d="${n} ${v}%: ${d}"><div class="row"><span class="nm" style="color:${c}">${n}</span><span>${v}%</span></div><div class="hp"><i style="--v:${v}%;background:${c}"></i></div></li>`).join('')}</ul></article>`);
hyd($('#sg'));
const ti=$('#sd').closest('.dlg').querySelector('img');ti.src=A.toriel_0;ti.style.cssText='width:44px;height:auto';
$('#sd').textContent='* Oh, meu bem... passe o mouse (ou toque) em uma habilidade e eu explico o que ela significa.';
/* ---- Projetos: monstros das Ruínas, corte e batalha ---- */
$$('.enemy').forEach((b,i)=>{const m=document.createElement('img');m.className='ms';m.src=A[J[i].m];m.alt='';b.querySelector('.im').append(m)});
const _fight=fight,_shut=shut;
fight=i=>{VOX='mon';_fight(i);const p=J[i],b=$('#bimg');b.style.backgroundImage=`linear-gradient(#000b,#000b),url(${A[p.img]})`;b.innerHTML=`<img class="bm" src="${A[p.m]}" alt="">`};
shut=()=>{VOX='sans';_shut()};
function slash(cb){const b=$('#bimg'),im=document.createElement('img');im.className='sl';im.alt='';b.append(im);sfx('slash',.6);let k=0;
 const t=setInterval(()=>{if(k>5){clearInterval(t);im.remove();cb&&cb();return}im.src=A['slash_'+k++]},70)}
/* ---- Sobre mim: pontos de save ---- */
$$('.sv li').forEach(l=>l.onclick=l.onkeydown=e=>{if(e.type==='click'||e.key==='Enter'){sfx('save');if(!l.dataset.s){l.dataset.s=1;l.classList.add('sd');l.append(' ★ salvo!')}}});
/* ---- Entrada + cena do Flowey ---- */
const ov=$('#ov'),fl=$('#fl'),gs=$('#gs'),gv=$('#go');
async function enter(){if(started)return;started=1;ov.remove();sfx('title',.6);music(1);setTimeout(()=>{if(!mute&&AU.fall.paused)blocked({name:'NotAllowedError'})},1800);
 let first=!location.hash||location.hash==='#inicio';try{first=first&&!sessionStorage.getItem('fl')}catch(e){}
 if(first)flowey();else if(cur==='inicio'){li=0;say()}}
ov.onclick=enter;
addEventListener('keydown',e=>{const k=e.key.toLowerCase();
 if(!started){if(k==='enter'||k===' '){e.preventDefault();e.stopPropagation();enter()}return}
 if(!fl.hidden||!gs.hidden||!gv.hidden||$$('.sc3').some(x=>!x.hidden)){e.stopPropagation();if(window.SCN&&(k==='enter'||k===' '||k==='z')){e.preventDefault();SCN.click()}if(!fl.hidden&&(k==='enter'||k===' '||k==='z')){e.preventDefault();$('#fbx').click()}}},true);
const FL=[['t','Olá! Eu sou o FLOWEY. FLOWEY, a flor!'],['t','Hmm... você é novo por aqui, não é? Deve estar totalmente PERDIDO.'],['t','Alguém precisa te explicar como as coisas funcionam. Eu aceito o trabalho!'],
 ['t','Este é o portfólio de JONATHAN MOURA, o ZAZA. Ele cria sites, desenhos, roteiros e jogos, tudo ainda em evolução, mas com DETERMINAÇÃO de sobra.'],
 ['t','Lá embaixo fica o menu de batalha: INÍCIO, HABILIDADES, PROJETOS, SOBRE MIM e CONTATOS. Clique neles, ou use as teclas de 1 a 5.'],
 ['t','Em HABILIDADES, as almas humanas mostram quem ele é. Em PROJETOS, cada trabalho vira um inimigo: você escolhe lutar... ou POUPAR.'],
 ['t','Tudo aqui é inspirado em UNDERTALE: o RPG onde ninguém precisa morrer, onde cada escolha muda a história e onde a gentileza também é uma arma.'],
 ['e','Ah, e cuidado com os cantinhos escondidos por aí. Nem tudo é o que parece... hi hi hi!'],['l','Neste mundo, é CLICAR ou ser clicado! Brincadeira. Divirta-se!']];
async function flowey(){
 const fw=$('#ffw'),fa=$('#fgf'),tx=$('#ftx'),pt=$('#ffc'),bx=$('#fbx');let adv=null,skip=0,ex='t',k=0;
 fl.hidden=false;VOX='flowey';fa.style.cssText='left:34%;top:-8%';
 const face=s=>fw.src=pt.src=A['flowey_'+s];
 const mt=setInterval(()=>{if(ex==='t'){k^=1;face(tx._skip?'talk_'+k:'talk_0')}else if(ex==='l'){k=(k+1)%3;face('laugh_'+k)}},150);
 bx.onclick=()=>{if(tx._skip)tx._skip();else if(adv){const a=adv;adv=null;bx.classList.remove('done');a()}};
 $('#fsk').onclick=()=>{skip=1;if(tx._skip)tx._skip();adv&&adv()};
 await wait(500);fa.style.transition='top 1.4s steps(14)';fa.style.top='78%';await wait(1700);
 for(let i=3;i>=0&&!skip;i--){fw.src=A['flowey_sink_'+i];await wait(130)}
 for(const[e,t]of FL){if(skip)break;ex=e;if(e==='e')face('grow_6');
  await new Promise(r=>typ(tx,t,()=>{bx.classList.add('done');adv=r}));}
 let atk=0;if(!skip){ex='l';stopV();tx.textContent='HI HI HI HI HI HI!';sfx('laugh',.8);fw.classList.add('lg');await wait(Math.min(4300,(AU.laugh.duration||4)*1000));fw.classList.remove('lg');ex='t';face('talk_0');atk=await offer()}
 clearInterval(mt);if(atk){await toChara();return}
 for(let i=0;i<5;i++){fw.src=A['flowey_sink_'+i];await wait(110)}
 fl.classList.add('out');await wait(650);fl.hidden=true;stopV();VOX='sans';
 try{sessionStorage.setItem('fl',1)}catch(e){}li=0;say()}
/* ---- Segredo 1: Gaster ---- */
$('#gx').onclick=async()=>{if(gs.busy)return;gs.busy=1;music(0);if(!mute){AU.gaster.currentTime=0;AU.gaster.volume=.5;AU.gaster.play().catch(()=>{})}
 document.body.classList.add('gl');gs.hidden=false;VOX='gaster';
 typ($('#gst'),'...Z A Z A... ELE SABE O SEU NOME... DETERMINAÇÃO: 100%... VOCÊ NÃO DEVERIA ESTAR AQUI... MAS JÁ QUE ESTÁ: OBRIGADO POR EXPLORAR.',null,70);
 await wait(1800);document.body.classList.remove('gl');await wait(7500);
 gs.hidden=true;AU.gaster.pause();VOX='sans';music(1);gs.busy=0};
/* ---- Segredo 2: Sans e Game Over ---- */
$('#nc').onclick=async()=>{if(gv.busy)return;gv.busy=1;music(0);$('main').inert=true;gv.hidden=false;VOX='sans';
 const t=$('#gdt'),bk=$('#gbk'),bm=$('#gbm');
 for(const[f,s]of [[0,'ei. você realmente clicou nisso?'],[3,'está um dia lindo lá fora. os pássaros cantam, as flores desabrocham...'],[5,'em dias como esse, quem clica em botões proibidos...'],[1,'...tem um péssimo momento pela frente.']]){
  $('#gsf').src=A['sans_face_'+f];await new Promise(r=>typ(t,s,()=>setTimeout(r,900)))}
 $('#gdl').hidden=true;bk.hidden=false;void bk.offsetWidth;bk.classList.add('in');sfx('blaster',.7);await wait(800);
 bk.src=A.blaster_3;bm.classList.add('on');gv.classList.add('shk');await wait(1100);
 bm.classList.remove('on');bk.hidden=true;gv.classList.remove('shk');
 await overTail()};
$('#gct').onclick=()=>{sfx('save');setTimeout(()=>{location.hash='inicio';location.reload()},500)};
