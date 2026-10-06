/* ===== V3: computador secreto, Chara, Gaster, ataque do Flowey e agradecimentos ===== */
$('#l1').lastChild.textContent='E-mail · '+P.email;$('#l2').lastChild.textContent='GitHub · '+P.git.split('/').pop();
const tm=$('#tm'),tc=$('#tc'),ty=$('#ty'),tyt=$('#tyt'),gz=$('#gz');
/* ---- Flowey: oferta de ataque ---- */
function offer(){return new Promise(r=>{const m=$('#fat'),t=setTimeout(()=>done(0),9000);
 const done=v=>{clearTimeout(t);m.hidden=true;r(v)};
 $('#ftx').textContent='* Flowey está rindo. O que você faz?';m.hidden=false;$('#fa1').focus();
 $('#fa1').onclick=()=>{sfx('select');done(1)};$('#fa2').onclick=()=>{sfx('save');done(0)};$('#fsk').onclick=()=>done(0)})}
async function toChara(){sfx('slash',.7);dust($('#ffw'));await wait(1100);fl.classList.add('out');await wait(650);fl.hidden=true;stopV();return chara()}
/* ---- Game Over (usado por Sans e Chara) ---- */
async function overTail(){gv.hidden=false;$('#gtl').hidden=false;if(!mute){AU.over.currentTime=0;AU.over.volume=.5;AU.over.play().catch(()=>{})}
 await wait(2000);VOX='toriel';$('#gtd').hidden=false;
 typ($('#gtx'),'Fique determinado, Zaza... não desista agora!',()=>{$('#gct').hidden=false;$('#gct').focus()})}
/* ---- Cena da Chara ---- */
const CH=['Então você escolheu me encontrar.','Eu sou Chara. Já fui humana, como você. Por isso conheço tão bem os erros de vocês.','Humanos erram. E, em vez de aprender, inventam desculpas: "foi sem querer", "todo mundo faz", "eu resolvo depois".',
 'Os pecados são velhos conhecidos: a ganância, que nunca se contenta. A inveja, que corrói por dentro. O orgulho, que não aceita perder. A preguiça, que deixa tudo para amanhã.',
 'E o pior: vocês apertam o botão só para ver o que acontece. A curiosidade vem sempre antes da consequência.','Você mesmo escolheu atacar, ou digitou um código proibido. Será que já aprendeu a lição?',
 'Mas eu não vim te julgar. Eu vim cobrar.','Toda escolha tem um preço, Zaza. Agora é a sua vez de pagar.'];
async function chara(){const c=$('#ch'),t=$('#cht'),b=$('#chb');let adv=null;
 music(0);AU.nightmare.loop=true;AU.nightmare.currentTime=0;AU.nightmare.volume=.3;if(!mute)AU.nightmare.play().catch(()=>{});
 $('main').inert=true;c.hidden=false;VOX='chara';window.SCN=b;
 b.onclick=()=>{if(t._skip)t._skip();else if(adv){const a=adv;adv=null;b.classList.remove('done');a()}};
 for(const s of CH)await new Promise(r=>typ(t,s,()=>{b.classList.add('done');adv=r}));
 window.SCN=null;stopV();if(window.charaFight){c.hidden=true;await charaFight();return}AU.nightmare.pause();const k=$('#chk');k.hidden=false;sfx('slash',.8);
 for(let i=0;i<6;i++){k.src=A['slash_'+i];await wait(80)}
 sfx('hit',.9);c.classList.add('flash');await wait(800);c.hidden=true;$('#gdl').hidden=true;await overTail()}
/* ---- Cena do Gaster ---- */
async function gasterScene(){const t=$('#gzt'),s=$('#gzs'),h=$('#gzh'),c=$('#gzc');let out=0,hp=20,iv;
 music(0);$('main').inert=true;gz.hidden=false;VOX='gaster';AU.gaster.loop=true;AU.gaster.currentTime=0;AU.gaster.volume=.4;if(!mute)AU.gaster.play().catch(()=>{});
 $('#gzx').onclick=()=>{out=1;if(t._skip)t._skip();window.GZN&&GZN()};
 const line=x=>out?0:new Promise(r=>typ(t,x,()=>{const bx=$('#gzbx');bx.classList.add('done');const id=setTimeout(nx,Math.max(1800,1400+x.length*55)*(TS==='lento'?1.4:1));function nx(){clearTimeout(id);window.GZN=null;bx.classList.remove('done');r()}window.GZN=nx},75));
 for(const x of ['...','OS HUMANOS... SÃO UM MISTÉRIO.','DE ONDE VEM ESSA CHAMA TEIMOSA CHAMADA DETERMINAÇÃO?','POR QUE ELES ERRAM... E TENTAM DE NOVO? POR QUE RIEM, CHORAM E CRIAM, SEM MOTIVO ALGUM?','HÁ ALGO DENTRO DE VOCÊ. DEIXE-ME VER.'])await line(x);
 if(!out&&window.gasterFight&&!window.GSKIP){gz.hidden=true;const r=await gasterFight();gz.hidden=false;if(r!=='soul')out=1}
 if(!out){h.hidden=false;void h.offsetWidth;h.classList.add('up');s.src=A.gaster_grin;s.classList.add('gr');await wait(1700);
  iv=setInterval(()=>{hp=Math.max(1,hp-1);$('#gzb').style.width=hp*5+'%';$('#gzn').textContent=hp+'/20';sfx('hit',.5);
   h.classList.remove('dm');void h.offsetWidth;h.classList.add('dm');const d=document.createElement('span');d.className='dn';d.textContent='-1';c.append(d);setTimeout(()=>d.remove(),800)},1100);
  for(const x of ['ISSO... É A SUA DETERMINAÇÃO.','VEJA COMO ELA RESISTE, MESMO MACHUCADA.','VOCÊS SÃO FRÁGEIS... E AINDA ASSIM NÃO SE QUEBRAM.','TALVEZ ESSE SEJA O MAIOR MISTÉRIO DE TODOS.'])await line(x);
  clearInterval(iv)}
 clearInterval(iv);stopV();h.hidden=true;s.classList.remove('gr');s.classList.add('vn');sfx('gvoice',.8);await wait(1700);
 gz.hidden=true;s.classList.remove('vn');s.src=A.gaster_0;AU.gaster.pause();$('#gzb').style.width='100%';$('#gzn').textContent='20/20';$('main').inert=false;VOX='sans';music(1)}
/* ---- Terminal do computador ---- */
$('#pc').onclick=e=>{e.stopPropagation();sfx('select');tm.hidden=false;$('#tmsg').textContent='';tc.value='';tc.focus()};
$('#tx').onclick=()=>{tm.hidden=true};
$('#tf').onsubmit=async e=>{e.preventDefault();const v=tc.value.trim(),m=$('#tmsg');
 if(v==='666'||v==='272'){m.textContent='ACESSO CONCEDIDO...';sfx('save');tc.disabled=true;await wait(900);tm.hidden=true;tc.disabled=false;v==='666'?chara():gasterScene()}
 else{m.textContent='CÓDIGO INVÁLIDO.';sfx('hit',.4);tm.classList.add('bad');setTimeout(()=>tm.classList.remove('bad'),400);tc.select()}};
/* ---- Agradecimentos (botão de save no fim de "Sobre mim") ---- */
const MSG='Muito obrigado a todos os meus amigos que confiaram em mim e que me deram forças pra chegar aonde eu estou. Luiz, Caleb, Italo, Samuel, Renan, Cerlan, Pedro Lucas, Nicolas Rebouças, Ryan, Everthon, Helena, Arthur Guilherme, Barreto, Gustavo, João Pedro, Juan, Eleomarcos, Samuel Andrade, Victor Bruno, Kaio, Daniel (privada) e, em especial, Kaio de Moura Japson! De verdade, muito obrigado a todos vocês por estarem comigo todos os dias me suportando! Amo todos vocês!';
$('#sx').onclick=()=>{sfx('save');music(0);ty.hidden=false;$('main').inert=true;VOX='quiet';AU.hopes.loop=true;AU.hopes.currentTime=0;AU.hopes.volume=.5;if(!mute)AU.hopes.play().catch(()=>{});typ(tyt,MSG,null,60);$('#tyx').focus()};
const closeTy=()=>{clearInterval(tyt._t);ty.hidden=true;$('main').inert=false;AU.hopes.pause();VOX='sans';music(1)};
$('#tyx').onclick=closeTy;
addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(!ty.hidden)closeTy();else if(!tm.hidden)tm.hidden=true;else if(!gz.hidden)$('#gzx').click()},true);
