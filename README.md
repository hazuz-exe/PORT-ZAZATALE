# Portfólio Undertale

Abra a pasta no VS Code e rode `index.html` com a extensão **Live Server** (ou dê dois cliques no arquivo).

```
portfolio-undertale/
├── index.html          estrutura das páginas
├── css/style.css       todo o visual
├── js/
│   ├── dados.js        EDITE AQUI: nome, links, projetos, almas e habilidades
│   ├── assets.js       mapa dos sprites (nome -> arquivo PNG)
│   ├── main.js         navegação, diálogos, Frisk, batalhas
│   ├── extras.js       V2: sons, cena do Flowey, almas, monstros e segredos
│   ├── v3.js           V3: computador secreto, Chara, Gaster e agradecimentos
│   ├── v4.js           V4: poeira, ponto de save e sala do Sans (batalha)
│   ├── v5.js           V5: velocidade do texto e visualizador de projetos
│   ├── v6.js           V6: aviso quando o navegador bloqueia o áudio
│   └── v7.js           V7: arena (almas vermelha/azul/amarela), lutas da Chara e do Gaster, Sans reforçado
└── assets/
    ├── img/            sprites em PNG com fundo transparente
    ├── audio/          sons e músicas (mp3)
    └── fonts/          Determination Mono e Hachicro (+ licenças)
```

Ordem dos scripts: `assets.js`, `dados.js`, `main.js`, `extras.js`, `v3.js`, `v4.js`, `v5.js`, `v6.js`, `v7.js`.

## Segredos (V3)
- Computador na tela inicial: código `666` leva à Chara, código `272` leva ao Gaster
- Flowey, no fim da conversa: opção ATACAR leva à Chara
- Estrela de save no fim de "Sobre mim": mensagem de agradecimento
- Para trocar qual mp3 é a risada ou a voz do Gaster, edite `SFX` em `js/assets.js` (chaves `laugh` e `gvoice`)

## Onde trocar o quê
- Nome, e-mail, links, projetos, almas e habilidades: `js/dados.js`
- Falas do Flowey: lista `FL` no começo da seção "Entrada" de `js/extras.js`
- Sons: troque os arquivos em `assets/audio/` mantendo os nomes

Projeto de fã sem fins comerciais. UNDERTALE e seus sprites pertencem a Toby Fox.

## V4
- Ponto de save no canto do cenário inicial: aparece quando o Sans termina de falar e leva à sala do Sans (música "It's Raining Somewhere Else")
- Sala do Sans: ATACAR (ele desvia; 3 ataques seguidos liberam os ataques dele), AGIR, ITEM e PIEDADE (4 piedades seguidas levam ao final pacifista). Sobreviver aos ataques permite acertar o Sans (final sombrio)
- Vozes: Sans (`sans`), Flowey (`flowey`) e Gaster (`vgaster`). Toriel e Chara usam bip sintético até você adicionar as chaves `vtoriel` e `vchara` em `js/assets.js`
- Som de poeira (`dust`): Flowey atacado e Sans derrotado

## V6
- Projetos reais em `projetos/`: `tristeza/` (site em 6 páginas) e `cineverse/` (site + jogo de filmes). Nessas pastas ficam os arquivos originais; os links quebrados do `music.html` foram corrigidos.
- Para adicionar um projeto: crie o objeto em `J` (`js/dados.js`) e, se tiver galeria ou site, registre as páginas em `VWD` (`js/v5.js`) e a pasta em `VBASE`. Use `view:nome` em `code` e `demo`.
- Áudio: música ambiente mais alta (abaixa sozinha enquanto alguém fala), efeitos com nova tentativa se falharem e aviso "SEM SOM? CLIQUE AQUI" se o navegador bloquear. O botão SOM liga/desliga tudo.
- Vozes: `sans`, `flowey` e `vgaster` já têm arquivo. Para Toriel e Chara, adicione `vtoriel` e `vchara` em `SFX` (`js/assets.js`).
- Velocidade do texto: botão TEXTO no topo (normal, lento, instantâneo). Funciona mesmo com "reduzir movimento" ligado no sistema.

## V7 (lutas)
- **Sans** (ponto de save no início): 4 fases de ataque com sprites novos: ossos, alma azul (gravidade, pule com ↑/Z), blasters e ossos laranja/ciano (laranja: continue se mexendo; ciano: fique parado).
- **Chara** (código `666` ou ATACAR no Flowey): monólogo, depois luta com cortes de faca, chuva de facas e linhas de corte. ATACAR a derrota (final sombrio); AGIR 3 vezes e PIEDADE a perdoa (final do perdão); PIEDADE cedo termina no Game Over.
- **Gaster** (código `272`): monólogo, depois 4 turnos (alma vermelha, azul, amarela e mista) com blasters e mãos. Depois: AGIR leva à cena da alma, PIEDADE o faz sumir.
- Alma amarela: segure Z, Espaço ou toque para atirar nos blocos.
- Os padrões de ataque ficam em `PATS` (`js/v7.js`) e os diálogos nos arrays `CT`, `CHA`, `GT` etc.
- Para testar sem morrer, abra o console do navegador e digite `GOD=1`.
- Sons novos em `assets/audio` (bone, slam, blade, shatter...) e mapeados em `js/assets.js`.
