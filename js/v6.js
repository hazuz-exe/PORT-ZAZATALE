/* ===== V6: aviso e nova tentativa quando o navegador bloqueia o áudio ===== */
const abn=$('#abn');
abn.onclick=()=>{AB=0;abn.hidden=true;music(1);sfx('select',.5)};
addEventListener('pointerdown',()=>{if(AB&&started&&!mute){const r=AU.fall.play();r&&r.then(()=>{AB=0;abn.hidden=true},()=>{})}},true);
