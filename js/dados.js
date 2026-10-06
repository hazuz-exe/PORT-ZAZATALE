// Edite aqui seus dados: nome, links, projetos e habilidades
const P={nome:'Jonathan Moura',cargo:'Codinome ZAZA · Dev front-end, criador de jogos e roteirista em formação',email:'comercialzaza33@gmail.com',git:'https://github.com/hazuz-exe'};
// Projetos (cada um vira um "inimigo"). m = monstro das Ruínas que aparece na batalha
const J=[
 {n:'Froggit',img:'proj_naner',m:'mon_froggit',t:'Thumbnails · 3 artes para vídeos',d:'Três thumbnails que criei: "Tinky Winky", em clima de terror VHS, "Naner #1", numa colagem cartoon retrô, e "100 Dias Ayaritia", de Minecraft.',s:['Thumbnail','Design gráfico'],code:'view:thumbs',demo:'view:thumbs',l1:'VER ARTES',l2:'DETALHES'},
 {n:'Whimsun',img:'proj_tristeza',m:'mon_whimsun',t:'Tristeza · site em 6 páginas',d:'Site sobre o sentimento da tristeza, com início, sobre o sentimento, login, teste de sentimentos, galeria de imagens e página de música. Tem textos que flutuam e surgem aos poucos, layout responsivo e as fontes Rubik Iso e Special Elite.',s:['HTML','CSS','Design'],code:'view:tristeza',demo:'view:tristeza',l1:'ABRIR SITE',l2:'PÁGINAS'},
 {n:'Loox',img:'proj_cineverse',m:'mon_loox',t:'CINE VERSE · site + jogo de adivinhar filmes',d:'Site com visual de cinema sinistro e um jogo em JavaScript: a cada rodada aparece uma pista, você chuta o filme ou pede mais pistas, e quanto menos pistas usar, mais pontos ganha. São 16 filmes com 5 pistas cada.',s:['HTML','CSS','JavaScript','Game design'],code:'view:cine',demo:'view:cine',l1:'JOGAR',l2:'PÁGINAS'},
 {n:'Dummy',img:'bg_caverna',m:'mon_dummy',t:'Em breve · novos projetos',d:'O Dummy está treinando... mas mais projetos estão a caminho!',s:['Em breve'],code:'#',demo:'#',msg:'* O Dummy não reage... mas novos projetos estão a caminho!',l1:'ATACAR',l2:'CONVERSAR'}];
// As sete almas humanas (valor em %)
const AL=[
 ['red','#f00','DETERMINAÇÃO',100,'Não larga um projeto até ver ele funcionando.'],
 ['yellow','#ff0','JUSTIÇA',80,'Gosta de jogo limpo, crédito para quem merece e decisões justas em equipe.'],
 ['blue','#4a78ff','INTEGRIDADE',85,'Faz o que promete e assume quando erra.'],
 ['purple','#e04be6','PERSEVERANÇA',90,'Se o caminho óbvio não funciona, procura outro.'],
 ['green','#2fd62f','BONDADE',88,'Adora trabalhar em equipe e conversar com as pessoas.'],
 ['orange','#ffa22a','BRAVURA',75,'Topa testar ideias novas e aprender na prática.'],
 ['aqua','#4ff','PACIÊNCIA',45,'Ainda em treino! Prefere ver o resultado logo.']];
// Habilidades reais
const S=[
 ['red','#f00','DETERMINAÇÃO','Front-end',[['HTML avançado',90,'O ponto forte: estrutura semântica e organizada.'],['CSS médio',60,'Layouts, animações e estilo em evolução.'],['JavaScript médio/baixo',40,'Aprendendo a dar vida às páginas.']]],
 ['purple','#e04be6','PERSEVERANÇA','Arte e design',[['Thumbnails (iniciante)',30,'Primeiros passos criando capas chamativas.'],['Desenho digital (iniciante)',30,'Treinando traço e cor todos os dias.'],['Design gráfico (iniciante)',30,'Aprendendo composição, cor e tipografia.']]],
 ['orange','#ffa22a','BRAVURA','Criação',[['Criador de jogos (iniciante)',30,'Transformando ideias em mecânicas jogáveis.'],['Roteirista (iniciante)',30,'Construindo histórias, personagens e finais.'],['Criatividade',85,'Ideias de sobra, nas horas certas.']]],
 ['blue','#4a78ff','INTEGRIDADE','Estratégia',[['Soluções inusitadas',85,'Resolve problemas por caminhos nada óbvios.'],['Visão estratégica',80,'Pensa nos passos antes de agir.']]],
 ['green','#2fd62f','BONDADE','Pessoas',[['Comunicação (médio/bom)',70,'Explica ideias e ouve com atenção.'],['Trabalho em equipe',85,'Gosta de somar com o time.'],['Cultura geek',90,'Games, animes, HQs e tudo que for nerd.']]]];
