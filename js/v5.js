/* ===== V5: ritmo de texto, voz e visualizador de projetos ===== */
const TSL={normal:'TEXTO: NORMAL',lento:'TEXTO: LENTO',inst:'TEXTO: INSTANTÂNEO'},txs=$('#txs');
txs.textContent=TSL[TS]||TSL.normal;
txs.onclick=()=>{TS=TS==='normal'?'lento':TS==='lento'?'inst':'normal';txs.textContent=TSL[TS];try{localStorage.setItem('ts',TS)}catch(e){}sfx('select',.4)};
$('#sst').onclick=()=>{sbt._skip?sbt._skip():SR.next&&SR.next()};
$('#gzbx').onclick=()=>{const g=$('#gzt');g._skip?g._skip():window.GZN&&GZN()};
$('.tyb').onclick=()=>tyt._skip&&tyt._skip();
/* ---- Visualizador de projetos ---- */
const VBASE={tristeza:'projetos/tristeza/',cine:'projetos/cineverse/'},vw=$('#vw'),vwc=$('#vwc'),vtabs=$('#vwtabs');let vKind,vIdx=0;
/* thumbs: [rótulo, imagem, legenda] · sites: [rótulo, chave, arquivo, legenda] */
const VWD={thumbs:[['TINKY WINKY','proj_tinky','Thumbnail em clima de terror VHS: efeito de gravação com glitch, data e hora, e texto neon rosa.'],
  ['NANER #1','proj_naner','Thumbnail em colagem cartoon retrô: fundo de raios vermelhos, moedas, bandeira e o rosto do Naner no corpo do personagem.'],
  ['AYARITIA','proj_ayaritia','Thumbnail de Minecraft em tela dividida: de um lado o jogador na floresta, do outro uma figura de armadura escura com olhos verdes brilhantes, e o título "100 DIAS AYARITIA" em letras de arco-íris.']],
 tristeza:[['INÍCIO','inicio','pagina inicial sad.html','Página inicial: frase de abertura, texto central e mensagens que flutuam e somem aos poucos.'],
  ['SOBRE','sobre','sobre o sentimento.html','Sobre o sentimento: textos que surgem em sequência (fade-in) para uma leitura calma.'],
  ['LOGIN','login','login.html','Login: formulário com painel lateral e imagem de fundo em pixel art.'],
  ['TESTE','teste','teste.html','Teste: cartões com ícones para marcar como você está se sentindo hoje.'],
  ['IMAGENS','imagens','imagens.html','Imagens: galeria de imagens tristes.'],
  ['MÚSICA','music','music.html','Música: capa, texto e botão para ouvir Ludovico Einaudi.']],
 cine:[['INÍCIO','cv_inicio','pagina inicial.html','Página inicial: visual de cinema sinistro com claquete, cartaz inclinado, chamas animadas e botões que levam ao jogo.'],
  ['JOGO','cv_jogo','jogo.html','Jogo: leia a pista, chute o filme ou peça outra pista. Quanto menos pistas usar, mais pontos ganha! Dá para jogar aqui mesmo.']]};
function fitV(){const w=Math.min(1100,innerWidth*.96,innerHeight*.6*1.6);vwc.style.width=w+'px';vwc.style.height=w*.625+'px';const f=$('#vwf');if(f)f.style.transform=`scale(${w/1280})`}
function showV(i){vIdx=i;const x=VWD[vKind][i];$$('button',vtabs).forEach((b,j)=>b.classList.toggle('on',j===i));
 if(vKind==='thumbs'){$('#vwi2').src=A[x[1]];$('#vwd').textContent='* '+x[2]}
 else{const f=$('#vwf');if(window.SITE_DOCS)f.srcdoc=SITE_DOCS[x[1]].replace('<!--SHARED-->',SITE_SHARED[vKind]);else f.src=encodeURI(VBASE[vKind]+x[2]);
  $('#vwd').textContent='* '+x[3]+(window.SITE_DOCS&&x[1]==='imagens'?' (Na prévia online as fotos externas não carregam; no site original elas aparecem.)':'')}}
function viewer(u,p){vKind=u.slice(5);const nome=p.t.split('·')[0].trim();vtabs.innerHTML=VWD[vKind].map((x,i)=>`<button data-i="${i}">${x[0]}</button>`).join('');$('#vwt').textContent=nome;
 $('#vwo').hidden=!(vKind!=='thumbs'&&!window.SITE_DOCS);
 if(vKind==='thumbs')vwc.innerHTML='<img id="vwi2" alt="">';
 else{vwc.innerHTML=`<iframe id="vwf" title="${nome}"></iframe>`;if(window.SITE_DOCS)$('#vwf').sandbox='allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox'}
 vw.hidden=false;sfx('select');fitV();showV(0)}
const closeV=()=>{vw.hidden=true;vwc.innerHTML='';const b=$('#bmn button');b&&b.focus()};
vtabs.onclick=e=>{const b=e.target.closest('button');if(b){sfx('select',.4);showV(+b.dataset.i)}};
$('#vwx').onclick=closeV;$('#vwo').onclick=()=>open(encodeURI(VBASE[vKind]+VWD[vKind][vIdx][2]),'_blank','noopener');
addEventListener('resize',()=>!vw.hidden&&fitV());
addEventListener('message',e=>{if(e.data&&e.data.go&&vKind!=='thumbs'&&!vw.hidden){const i=VWD[vKind].findIndex(x=>x[1]===e.data.go);if(i>=0)showV(i)}});
addEventListener('keydown',e=>{if(vw.hidden)return;if(e.key==='Escape')closeV();else if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const n=VWD[vKind].length;showV((vIdx+(e.key==='ArrowRight'?1:-1)+n)%n)}},true);
