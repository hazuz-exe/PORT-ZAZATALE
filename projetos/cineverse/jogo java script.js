
const filmes = [
	{
		titulo: "O Rei Leão",
		respostas: ["o rei leao", "rei leao", "rei lion", "the lion king"],
		pistas: [
			"🦁👑 Após seu pai morrer, um jovem leãozinho precisa enfrentar o tio.",
			"A história se passa nas savanas africanas e acompanha um herdeiro que foge de casa.",
			"Timão e Pumba ajudam o protagonista a crescer longe de sua terra.",
			"O tio se chama Scar e toma o lugar do rei.",
			"Hakuna Matata! Simba precisa voltar para assumir seu lugar no ciclo da vida."
		]
	},
	{
		titulo: "Titanic",
		respostas: ["titanic"],
		pistas: [
			"🛳️🧊💘 O navio bate, afunda e dois apaixonados tentam sobreviver. Leonardo DiCaprio está no filme.",
			"Um romance improvável começa durante uma viagem luxuosa pelo oceano.",
			"Jack e Rose vêm de mundos sociais bem diferentes.",
			"A embarcação é considerada impossível de afundar, até encontrar um iceberg.",
			"O filme de James Cameron conta a tragédia do famoso transatlântico RMS Titanic."
		]
	},
	{
		titulo: "Homem-Aranha",
		respostas: ["homem aranha", "spider man", "spiderman"],
		pistas: [
			"🕷️🦸 Uma picada de aranha muda a vida de um jovem que encontra tudo o que procura em seu filme.",
			"O herói tenta equilibrar uma vida comum com grandes responsabilidades.",
			"Ele se balança entre prédios usando teias que dispara pelos pulsos.",
			"Seu sentido-aranha avisa quando há perigo por perto.",
			"Peter Parker é o amigão da vizinhança conhecido como Homem-Aranha."
		]
	},
	{
		titulo: "O Lorax",
		respostas: ["o lorax", "lorax"],
		pistas: [
			"🌳🧡 Um bicho laranja e peludo quer salvar a natureza preciosa do capitalismo.",
			"Uma cidade artificial vive sem árvores de verdade.",
			"Um menino tenta encontrar uma árvore para conquistar alguém especial.",
			"A história é baseada em um livro do Dr. Seuss sobre cuidar do meio ambiente.",
			"O guardião de bigode laranja fala pelas árvores: é o Lorax."
		]
	},
	{
		titulo: "O Poderoso Chefão",
		respostas: ["o poderoso chefao", "poderoso chefao", "the godfather", "godfather"],
		pistas: [
			"💵🎩🔫 Um homem rico é o chefe de uma família da máfia. Só isso... por enquanto.",
			"A trama acompanha uma poderosa família ítalo-americana.",
			"Don Vito tenta manter o controle e proteger seus filhos.",
			"Michael Corleone assume responsabilidades que inicialmente queria evitar.",
			"Uma das frases mais famosas é: “Vou fazer uma oferta que ele não poderá recusar.”"
		]
	},
	{
		titulo: "Brinquedo Assassino",
		respostas: ["brinquedo assassino", "chucky", "childs play", "child's play"],
		pistas: [
			"🧸🔪🩸 Um boneco emcapetado começa a matar as pessoas ao redor.",
			"Uma criança ganha um brinquedo muito procurado, mas algo está errado.",
			"A alma de um criminoso foi parar dentro de um boneco.",
			"O boneco ruivo fala, anda e aterroriza os adultos que tentam detê-lo.",
			"O assassino de macacão é conhecido como Chucky."
		]
	},
	{
		titulo: "Ratatouille",
		respostas: ["ratatouille", "rattouille"],
		pistas: [
			"🐀🧑‍🍳 Um jovem rejeitado pela família encontra um humano que pode controlar e tenta realizar seu sonho de cozinhar.",
			"A história se passa em Paris e acompanha um aspirante a chef nada convencional.",
			"Linguini trabalha em um restaurante, mas não tem talento para cozinhar.",
			"Remy guia os movimentos do humano puxando seus cabelos por baixo do chapéu.",
			"Um ratinho chamado Remy sonha em cozinhar como seu ídolo, Auguste Gusteau."
		]
	},
	{
		titulo: "Batman",
		respostas: ["batman", "o batman", "the batman"],
		pistas: [
			"🦇👨 Um homem se fantasia à noite para bater em bandidos e tem medo de palhaços.",
			"Um vigilante protege uma cidade sombria chamada Gotham.",
			"Durante o dia, ele é um bilionário conhecido como Bruce Wayne.",
			"Seu símbolo é um morcego e seu inimigo mais caótico costuma rir bastante.",
			"Ele não tem superpoderes: usa inteligência, tecnologia e o nome Batman."
		]
	},
	{
		titulo: "Kung Fu Panda",
		respostas: ["kung fu panda"],
		pistas: [
			"🐼🥊🐉 Um panda aprende kung fu e descobre que pode ser o lendário Dragão Guerreiro.",
			"O protagonista trabalha no restaurante de macarrão da família.",
			"Mestre Shifu treina o panda ao lado dos Cinco Furiosos.",
			"Po é escolhido para proteger o Vale da Paz de um poderoso inimigo.",
			"O panda atrapalhado e fã de kung fu se chama Po."
		]
	},
	{
		titulo: "Avatar: A Lenda de Aang",
		respostas: ["avatar a lenda de aang", "avatar the last airbender", "the last airbender", "o ultimo mestre do ar"],
		pistas: [
			"👨‍🦲⬇️🔥 Um carequinha acorda após muitos anos no gelo e descobre que precisa enfrentar uma grande desigualdade entre povos.",
			"O mundo é dividido em nações ligadas a elementos da natureza.",
			"O jovem protagonista viaja com novos amigos e um bisão voador.",
			"Ele é o único capaz de dominar os quatro elementos e restaurar o equilíbrio.",
			"Aang é o Avatar e precisa deter a Nação do Fogo."
		]
	},
	{
		titulo: "Vingadores: Guerra Infinita",
		respostas: ["vingadores guerra infinita", "avengers infinity war", "guerra infinita", "infinity war"],
		pistas: [
			"🟣🧤🌌 Um cara roxo vem do espaço atrás de pedras para colocar em sua luva e eliminar metade da vida.",
			"Heróis de diferentes equipes precisam se unir contra uma ameaça cósmica.",
			"Thanos procura seis objetos poderosos espalhados pelo universo.",
			"A manopla dourada fica cada vez mais forte a cada pedra que recebe.",
			"O vilão roxo completa o estalo neste filme dos Vingadores."
		]
	},
	{
		titulo: "Shrek",
		respostas: ["shrek"],
		pistas: [
			"🧌🫏🐉 Um ogro verde que mora no pântano precisa resgatar uma princesa para recuperar sua paz.",
			"Um burro falante insiste em acompanhar o protagonista.",
			"A princesa Fiona guarda um segredo que aparece ao pôr do sol.",
			"O vilão baixinho se chama Lorde Farquaad.",
			"O ogro verde mais famoso do cinema vive em um pântano e se chama Shrek."
		]
	},
	{
		titulo: "Um Filme Minecraft",
		respostas: ["minecraft", "um filme minecraft", "a minecraft movie", "minecraft movie"],
		pistas: [
			"🟫🟩⛏️ É o filme daquele jogo quadrado famoso.",
			"A aventura acontece num mundo feito de blocos e construções pixeladas.",
			"Os personagens precisam coletar recursos e sobreviver a criaturas perigosas.",
			"Uma mesa de criação e uma picareta são ferramentas importantes nesse universo.",
			"O título leva o nome do jogo de construção com Steve e um mundo de blocos."
		]
	},
	{
		titulo: "Jurassic World",
		respostas: ["jurassic world", "mundo jurassico", "jurassic park", "parque dos dinossauros"],
		pistas: [
			"🦖🦕🧬 Dinossauros voltam à vida e vivem num parque, mas um bichão escapa.",
			"Visitantes chegam a uma ilha para ver criaturas pré-históricas de perto.",
			"A atração principal sai do controle e coloca todos em perigo.",
			"O parque usa engenharia genética para criar dinossauros.",
			"A franquia de dinossauros traz um parque moderno chamado Jurassic World."
		]
	},
	{
		titulo: "Interestelar",
		respostas: ["interestelar", "interstellar"],
		pistas: [
			"🌌🚀☄️ Uma brisa cósmica insana: astronautas, buraco negro, paradoxo e ficção científica.",
			"A Terra enfrenta uma crise que ameaça o futuro da humanidade.",
			"Um piloto parte numa missão espacial enquanto sua filha fica para trás.",
			"A equipe atravessa um buraco de minhoca em busca de um novo lar.",
			"Cooper e Murph protagonizam este épico espacial de Christopher Nolan."
		]
	},
	{
		titulo: "Godzilla x Kong",
		respostas: ["godzilla x kong", "godzilla vs kong", "godzilla kong"],
		pistas: [
			"🦖✖️🦍 Um monstrão que solta raio enfrenta um macacão com um machado.",
			"Dois titãs gigantescos acabam em lados opostos de um confronto épico.",
			"Um deles é um gorila colossal que vive na Terra Oca.",
			"O outro é um lagarto gigante conhecido por seu sopro atômico.",
			"Godzilla e Kong se encontram para enfrentar uma ameaça ainda maior."
		]
	}
];

const pistaNumero = document.querySelector("#clue-number");
const pistaTexto = document.querySelector("#clue-text");
const pontuacaoTexto = document.querySelector("#score");
const campoResposta = document.querySelector("#answer");
const formulario = document.querySelector("#answer-form");
const botaoPista = document.querySelector("#hint-button");
const botaoProximo = document.querySelector("#next-button");
const mensagem = document.querySelector("#feedback");

let filmeAtual;
let indicePista = 0;
let pontos = 0;
let rodadasConcluidas = 0;
let filmesUsados = [];

function normalizar(texto) {
	return texto
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9 ]/g, " ")
		.trim()
		.replace(/\s+/g, " ");
}

function iniciarRodada() {
	const disponiveis = filmes
		.map((filme, indice) => ({ filme, indice }))
		.filter(({ indice }) => !filmesUsados.includes(indice));
	const escolha = disponiveis[Math.floor(Math.random() * disponiveis.length)];

	filmesUsados.push(escolha.indice);
	filmeAtual = escolha.filme;
	indicePista = 0;
	pistaTexto.textContent = filmeAtual.pistas[indicePista];
	pistaNumero.textContent = `1 / ${filmeAtual.pistas.length}`;
	campoResposta.value = "";
	campoResposta.disabled = false;
	formulario.querySelector("button").disabled = false;
	botaoPista.disabled = false;
	botaoPista.hidden = false;
	botaoPista.innerHTML = 'QUERO OUTRA PISTA <span>＋</span>';
	botaoProximo.hidden = true;
	mensagem.className = "feedback";
	mensagem.textContent = "Boa sorte! Cada pista extra diminui os pontos desta rodada.";
	campoResposta.focus();
}

botaoPista.addEventListener("click", () => {
	if (indicePista >= filmeAtual.pistas.length - 1) return;

	indicePista += 1;
	pistaTexto.textContent = filmeAtual.pistas[indicePista];
	pistaNumero.textContent = `${indicePista + 1} / ${filmeAtual.pistas.length}`;
	mensagem.className = "feedback";
	mensagem.textContent = "Pista nova! Quando souber, envie seu palpite.";

	if (indicePista === filmeAtual.pistas.length - 1) {
		botaoPista.disabled = true;
		botaoPista.textContent = "VOCÊ JÁ VIU TODAS AS PISTAS";
	}
});

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const palpite = normalizar(campoResposta.value);
	const acertou = filmeAtual.respostas.some((resposta) => normalizar(resposta) === palpite);

	if (!acertou) {
		mensagem.className = "feedback error";
		mensagem.textContent = "Ainda não! Pense mais um pouco ou peça outra pista.";
		return;
	}

	const pontosRodada = 100 - indicePista * 20;
	pontos += pontosRodada;
	rodadasConcluidas += 1;
	pontuacaoTexto.textContent = pontos;
	campoResposta.disabled = true;
	formulario.querySelector("button").disabled = true;
	botaoPista.hidden = true;
	botaoProximo.hidden = false;
	mensagem.className = "feedback success";
	mensagem.textContent = `Acertou: ${filmeAtual.titulo}! +${pontosRodada} pontos. Você usou ${indicePista + 1} pista(s).`;

	if (rodadasConcluidas === filmes.length) {
		botaoProximo.textContent = "JOGAR DE NOVO ↻";
		mensagem.textContent += ` Fim do desafio! Total: ${pontos} pontos.`;
	}
});

botaoProximo.addEventListener("click", () => {
	if (rodadasConcluidas === filmes.length) {
		pontos = 0;
		rodadasConcluidas = 0;
		filmesUsados = [];
		pontuacaoTexto.textContent = pontos;
		botaoProximo.textContent = "PRÓXIMO FILME →";
	}
	iniciarRodada();
});

iniciarRodada();
