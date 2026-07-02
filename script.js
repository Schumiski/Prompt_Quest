// ============================================================
// PROMPT QUEST — Full Game Engine
// ============================================================

// ============================================================
// QUESTION POOL (18 questions — 10 are randomly selected each game)
// ============================================================
const QUESTION_POOL = [
  {
    q: 'O que é um "prompt" quando falamos de Inteligência Artificial?',
    opts: [
      'Um protocolo de segurança que protege os dados do usuário durante a interação com a IA',
      'O conjunto de parâmetros técnicos internos que definem o comportamento do modelo de linguagem',
      'A instrução em linguagem natural que você fornece para guiar a resposta da IA',
      'O processo de treinar a IA com novos dados para que ela aprenda algo específico',
    ],
    correct: 2,
    explain: 'Prompt é simplesmente o texto que você digita para se comunicar com a IA. Não é treinamento, nem protocolo — é a conversa em si. Quanto melhor o prompt, melhor a resposta.',
  },
  {
    q: 'Qual a melhor estratégia para obter respostas de alta qualidade de uma IA?',
    opts: [
      'Fornecer detalhes sobre o contexto, o objetivo desejado e o formato da resposta esperada',
      'Usar vocabulário técnico avançado para que o sistema reconheça que você domina o assunto',
      'Escrever textos o mais longos possível, pois quanto mais palavras, melhor a interpretação',
      'Repetir a mesma pergunta de formas diferentes até obter a resposta que você quer',
    ],
    correct: 0,
    explain: 'Clareza e contexto superam complexidade. A IA não "reconhece" palavras-chave como mecanismo — ela entende a intenção por trás do que você escreve. Detalhes sobre o que você espera são mais valiosos do que jargão.',
  },
  {
    q: 'Ao pedir à IA para escrever um post para redes sociais, que elementos são mais decisivos para um bom resultado?',
    opts: [
      'A plataforma específica (Instagram, LinkedIn) e os horários de maior engajamento naquele dia',
      'O tema central, o tom emocional desejado, o público-alvo e o comprimento pretendido do texto',
      'Exemplos copiados de posts virais para a IA replicar exatamente aquele estilo',
      'Os hashtags que pretende usar e as contas influenciadores que pretende marcar',
    ],
    correct: 1,
    explain: 'O essencial é definir o quê, para quem, como e quanto. A IA não tem acesso ao seu histórico nem ao algoritmo de plataformas — precisa de instruções claras sobre o conteúdo que você deseja.',
  },
  {
    q: 'Quando inclui um exemplo junto com o seu pedido à IA, que efeito isso provoca?',
    opts: [
      'Limita a criatividade da IA, pois ela fica presa ao que você mostrou e não inova',
      'Ativa um modo de treinamento em tempo real que personaliza o modelo para o seu gosto',
      'Comunica de forma mais precisa o padrão, formato ou estilo que pretende obter na resposta',
      'Garante que a IA vai copiar palavra por palavra o exemplo que você forneceu',
    ],
    correct: 2,
    explain: 'Exemplos funcionam como uma referência visual do seu objetivo. A IA não treina com o seu exemplo nem copia cegamente — usa-o como guia para entender a estrutura, o tom ou o formato que você deseja.',
  },
  {
    q: 'A resposta da IA ficou aquém do que você esperava. Qual é a abordagem mais eficaz?',
    opts: [
      'Aguardar alguns dias para o sistema ser atualizado e depois refazer a mesma pergunta',
      'Repetir a pergunta idêntica várias vezes, pois a IA "esquenta" e melhora com a repetição',
      'Indicar especificamente o que ajustar, descrevendo o que ficou bom e o que precisa mudar',
      'Apagar toda a conversa e recomeçar do zero com uma nova sessão limpa',
    ],
    correct: 2,
    explain: 'A IA mantém o contexto da conversa. Pode dizer "ficou bom, mas pode deixar mais curto" ou "mude o tom para algo mais divertido". O feedback específico é o caminho mais direto para a resposta ideal.',
  },
  {
    q: 'Para simplificar um assunto complexo com ajuda da IA, que instrução produz os melhores resultados?',
    opts: [
      'Utilizar a técnica "explique como se eu tivesse 10 anos", combinada com exemplos do cotidiano',
      'Pedir para a IA traduzir o conteúdo para outro idioma e depois traduzir de volta',
      'Solicitar que a IA remova os parágrafos mais longos até o texto ficar curto',
      'Incluir na pergunta palavras técnicas avançadas, pois isso obriga a IA a usar linguagem acessível',
    ],
    correct: 0,
    explain: 'Pedir para a IA usar linguagem simples com analogias do dia a dia é a técnica mais eficaz para descomplicar tópicos difíceis. É como pedir a um professor que explique para uma criança.',
  },
  {
    q: 'Na prática, o que significa "dar contexto" num prompt dirigido a uma IA?',
    opts: [
      'Inserir múltiplos links de referência para a IA consultar fontes externas antes de responder',
      'Fornecer informações sobre a situação, o propósito e as restrições que rodeiam o seu pedido',
      'Utilizar o vocabulário mais elaborado possível para demonstrar profundidade no assunto',
      'Enviar várias mensagens seguidas sem esperar resposta, acumulando instruções',
    ],
    correct: 1,
    explain: 'Contexto é o cenário por trás do pedido: para quem é, qual o objetivo, quais as limitações. Sem isso, a IA responde às cegas — como quem pergunta "onde estou?" sem sair de casa.',
  },
  {
    q: 'Qual destas abordagens estimula de forma mais eficaz a criatividade da IA nas respostas?',
    opts: [
      'Repetir a mesma pergunta duas vezes para que a IA "refine" a ideia anterior',
      'Ecrever a pergunta com o maior número de palavras possível, incluindo todos os detalhes',
      'Solicitar explicitamente múltiplas alternativas, como "apresente 3 abordagens diferentes"',
      'Reutilizar sempre as mesmas expressões-chave para manter a IA "focada" no tema',
    ],
    correct: 2,
    explain: 'Pedir varias opções obriga a IA a explorar caminhos diferentes. É como pedir a um artista que faça varios rascunhos — quanto mais alternativas, maior a probabilidade de encontrar uma ideia brilhante.',
  },
  {
    q: 'Se pretende que a IA responda sem usar jargão técnico, que estratégia adotar?',
    opts: [
      'Aguardar que a IA adivinhe, pela complexidade da sua pergunta, que você quer algo simplificado',
      'Escrever toda a pergunta em minúsculas, sinalizando informalidade ao sistema',
      'Instruir explicitamente: "explique sem termos técnicos, usando linguagem acessível"',
      'Pedir a resposta em formato de tópicos,pois listas forçam automaticamente a simplificação',
    ],
    correct: 2,
    explain: 'A IA segue instruções explícitas. Se não quer jargão, diga-o diretamente. Não há um "modo automático de simplicidade" — é preciso comunicar a preferência de forma clara.',
  },
  {
    q: 'Investir tempo em aperfeiçoar prompts traz que tipo de vantagem?',
    opts: [
      'É obrigatório para qualquer pessoa que utilize software de computador no dia a dia',
      'Permite obter resultados mais precisos, economizando tempo e elevando a qualidade do trabalho',
      'Sem prompts elaborados, a IA entra em modo de segurança e responde apenas respostas genéricas',
      'É uma competência exclusiva de programadores para desenvolver novos algoritmos',
    ],
    correct: 1,
    explain: 'Não é obrigatório, mas faz enorme diferença. Um prompt bem construído produz respostas mais relevantes, reduz retrabalho e abre portas para usos criativos e produtivos da IA.',
  },
  {
    q: 'De que forma a IA pode ser mais útil no quotidiano de uma pessoa comum?',
    opts: [
      'Criar receitas personalizadas, planejar viagens, resumir documentos e gerar ideias inovadoras',
      'Funciona exclusivamente para programadores criarem código e desenvolverem aplicativos',
      'Limita-se a responder dúvidas escolares e a fazer a lição de casa dos estudantes',
      'Serve apenas como entretenimento para conversas aleatórias sem nenhum propósito prático',
    ],
    correct: 0,
    explain: 'A IA é uma assistente versátil: desde cozinha e viagens até produtividade profissional e criatividade. A diferença está em como você pergunta — quanto mais específico, mais útil.',
  },
  {
    q: 'Se você der instruções contraditórias à IA, o que acontece provavelmente?',
    opts: [
      'A IA detecta automaticamente as contradições e escolhe a instrução que considera mais relevante',
      'Pode produzir uma resposta incoerente, misturando elementos de ambas as instruções conflitantes',
      'O sistema trava imediatamente e obriga o utilizador a reiniciar a sessão',
      'A IA responde com uma mensagem de erro formal e bloqueia futuras interações na conversa',
    ],
    correct: 1,
    explain: 'Contradições confundem o modelo, que pode misturar instruções opostas numa mesma resposta. Organizar o pensamento antes de escrever é tão importante quanto a própria pergunta.',
  },
  {
    q: 'É possível indicar à IA para adotar a personalidade de um profissional específico?',
    opts: [
      'Não, a IA tem apenas um modo de resposta padrão e não admite variações de personalidade',
      'Sim, ao definir um papel como "aja como um médico" ou "responda como um professor", o estilo da resposta muda drasticamente',
      'Funciona apenas se o utilizador possuir uma assinatura premium paga na plataforma',
      'Esse tipo de instrução causa conflitos internos no sistema e compromete a precisão da resposta',
    ],
    correct: 1,
    explain: 'Definir um papel (role-playing) molda completamente o tom, o vocabulário e a profundidade da resposta. É uma das técnicas mais poderosas para obter respostas sob medida.',
  },
  {
    q: 'Ao solicitar à IA que resuma um texto extenso, que pedido produz o resultado mais eficaz?',
    opts: [
      'Cole o texto completo e solicite: "resuma em 3 parágrafos, destacando as ideias centrais"',
      'Peca para a IA remover os trechos que julgar menos importantes, sem especificar critérios',
      'A IA não é capaz de processar textos com mais de uma página — divida antes manualmente',
      'Basta escrever "encurte isto" sem qualquer indicação adicional sobre o foco do resumo',
    ],
    correct: 0,
    explain: 'A IA resume com excelência quando recebe instruções precisas: tamanho desejado, que aspectos destacar e que tipo de informação pode ser descartada.',
  },
  {
    q: 'Que tipo de conteúdo a IA generativa atual NÃO é capaz de criar de forma autónoma?',
    opts: [
      'Um roteiro de viagem personalizado com base nos seus interesses e orçamento',
      'Sugestões de nomes criativos para uma marca ou negócio inovador',
      'Opiniões genuínas, emoções ou decisões baseadas em valores pessoais',
      'Explicações acessíveis de conceitos científicos complexos para o público geral',
    ],
    correct: 2,
    explain: 'A IA simula padrões de linguagem, mas não sente, não opina e não tem motivações próprias. Entender essa fronteira é essencial para usar a ferramenta com discernimento.',
  },
  {
    q: 'Para planejar uma rotina de estudos ou viagem com a IA, que abordagem maximiza a utilidade da resposta?',
    opts: [
      'Escrever apenas "monte um plano" — a IA deduzir os detalhes a partir do contexto mínimo',
      'Detalhar objetivos, restrições de tempo, preferências pessoais e critérios de sucesso',
      'Esse tipo de planejamento é demasiado complexo para uma IA — vale mais fazer manualmente',
      'Formular o pedido noutro idioma, pois isso faz a IA pensar de forma mais analítica',
    ],
    correct: 1,
    explain: 'Quanto mais dados você fornecer — horários, prioridades, limitações — mais personalizado e aplicável será o plano. É como descrever o sonho de uma viagem a um agente de viagens experiente.',
  },
  {
    q: 'Quando a IA responde algo incorreto ou inventado, isso significa que:',
    opts: [
      'A IA está a ser propositadamente desonesta para testar a capacidade crítica do utilizador',
      'Ocorre porque a IA gera texto com base em padrões estatísticos, podendo produzir informações plausíveis porém inexatas — por isso é fundamental validar os dados',
      'O sistema foi hackeado por terceiros que alteraram temporariamente as respostas',
      'A IA apenas erra quando o utilizador escreve com erros ortográficos na pergunta',
    ],
    correct: 1,
    explain: 'IAs podem produzir "alucinações" — respostas que soam convincentes mas são incorretas. Elas não consultam uma base de dados em tempo real; geram texto com base em padrões aprendidos. Por isso, sempre verifique informações importantes.',
  },
];

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// ============================================================
// GAME STATE
// ============================================================
let gameQuestions = [];
let state = {};

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// AUDIO — Sound Effects
// ============================================================
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playBeep(freq, duration, type) {
  if (!soundEnabled) return;
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'square';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch(e) {}
}

function playCorrect() {
  playBeep(784, 0.12, 'square');
  setTimeout(() => playBeep(988, 0.12, 'square'), 100);
  setTimeout(() => playBeep(1175, 0.2, 'square'), 200);
}

function playWrong() {
  playBeep(200, 0.15, 'sawtooth');
  setTimeout(() => playBeep(160, 0.25, 'sawtooth'), 120);
}

function playClick() {
  playBeep(600, 0.06, 'square');
}

function playStart() {
  const notes = [262, 330, 392, 523];
  notes.forEach((n, i) => {
    setTimeout(() => playBeep(n, 0.15, 'square'), i * 120);
  });
}

function playFinish() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((n, i) => {
    setTimeout(() => playBeep(n, 0.2, 'square'), i * 150);
  });
}

// ============================================================
// AUDIO — 8-Bit Funk BGM
// ============================================================
let bgmTimer = null;
let bgmPlaying = false;

function playBgmNote(freq, time, dur, type, vol) {
  if (!soundEnabled) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'square';
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(vol || 0.04, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + dur);
  } catch(e) {}
}

function playBgmKick(time) {
  if (!soundEnabled) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, time);
    osc.frequency.exponentialRampToValueAtTime(35, time + 0.12);
    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + 0.12);
  } catch(e) {}
}

function playBgmSnare(time) {
  if (!soundEnabled) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, time);
    osc.frequency.exponentialRampToValueAtTime(60, time + 0.1);
    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  } catch(e) {}
}

function playBgmHat(time) {
  if (!soundEnabled) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.value = 5000;
    gain.gain.setValueAtTime(0.025, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + 0.04);
  } catch(e) {}
}

function startBGM() {
  if (bgmPlaying) return;
  bgmPlaying = true;
  initAudio();

  const bpm = 118;
  const beat = 60 / bpm;

  const bass = [
    [0, 130.81, 0.75],
    [1, 82.41, 0.25],
    [1.25, 98.00, 0.5],
    [2, 110.00, 0.75],
    [2.75, 82.41, 0.25],
    [3, 98.00, 0.5],
    [3.5, 130.81, 0.5],
  ];

  const chords = [
    [0.25, [261.63, 329.63, 392.00], 0.2],
    [1.25, [261.63, 329.63, 392.00], 0.2],
    [2.25, [293.66, 369.99, 440.00], 0.2],
    [3.25, [261.63, 329.63, 392.00], 0.2],
  ];

  const drums = [
    [0, 'kick'], [0.25, 'hat'], [0.5, 'snare'], [0.75, 'hat'],
    [1, 'kick'], [1.25, 'hat'], [1.5, 'snare'], [1.75, 'hat'],
    [2, 'kick'], [2.25, 'hat'], [2.5, 'snare'], [2.75, 'hat'],
    [3, 'kick'], [3.25, 'hat'], [3.5, 'snare'], [3.75, 'hat'],
  ];

  const lead = [
    [0.5, 392.00, 0.2],
    [1, 349.23, 0.2],
    [1.5, 392.00, 0.2],
    [2, 440.00, 0.4],
    [2.5, 392.00, 0.2],
    [3, 349.23, 0.2],
    [3.5, 329.63, 0.4],
  ];

  function scheduleLoop() {
    if (!bgmPlaying) return;
    const now = audioCtx.currentTime;
    const t0 = now + 0.05;

    bass.forEach(([off, f, dur]) => {
      playBgmNote(f, t0 + off * beat, dur * beat, 'square', 0.045);
    });
    chords.forEach(([off, freqs, dur]) => {
      freqs.forEach(f => playBgmNote(f, t0 + off * beat, dur * beat, 'square', 0.02));
    });
    lead.forEach(([off, f, dur]) => {
      playBgmNote(f, t0 + off * beat, dur * beat, 'square', 0.025);
    });
    drums.forEach(([off, type]) => {
      const t = t0 + off * beat;
      if (type === 'kick') playBgmKick(t);
      else if (type === 'snare') playBgmSnare(t);
      else if (type === 'hat') playBgmHat(t);
    });

    bgmTimer = setTimeout(scheduleLoop, 4 * beat * 1000 - 40);
  }

  scheduleLoop();
}

function stopBGM() {
  bgmPlaying = false;
  if (bgmTimer) {
    clearTimeout(bgmTimer);
    bgmTimer = null;
  }
}

// ============================================================
// GAME LOGIC
// ============================================================
function startGame() {
  stopBGM();
  const shuffled = shuffleArray(QUESTION_POOL);
  gameQuestions = shuffled.slice(0, 10);

  state = {
    current: 0,
    score: 0,
    answered: false,
    correctAnswer: null,
    selectedOption: null,
  };

  showScreen('screen-game');
  initAudio();
  startBGM();
  renderQuestion();
}

function renderQuestion() {
  const q = gameQuestions[state.current];
  const total = gameQuestions.length;
  const pct = (state.current / total) * 100;
  const labels = ['A', 'B', 'C', 'D'];

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${state.current + 1}/${total}`;
  document.getElementById('score-display').textContent = state.score;
  document.getElementById('question-number').textContent = `PERGUNTA #${state.current + 1}`;
  document.getElementById('question-text').textContent = q.q;

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = q.opts.map((opt, i) => `
    <div class="option${state.answered ? ' disabled' : ''}" data-idx="${i}">
      <span class="marker">${labels[i]}</span>
      <span>${opt}</span>
    </div>
  `).join('');

  const feedbackEl = document.getElementById('feedback');
  const nextWrap = document.getElementById('next-btn-wrap');

  if (state.answered) {
    const isCorrect = state.correctAnswer === true;
    const cls = isCorrect ? 'correct' : 'wrong';
    const label = isCorrect ? '✓ CORRETO' : '✗ INCORRETO';
    feedbackEl.innerHTML = `
      <div class="fb-label">${label}</div>
      ${q.explain}
    `;
    feedbackEl.className = `feedback ${cls}`;
    nextWrap.innerHTML = `
      <button class="next-btn" id="next-btn-action">
        [ ${state.current < total - 1 ? 'PRÓXIMA' : 'VER RESULTADO'} ]
      </button>
    `;

    const optEls = optionsEl.querySelectorAll('.option');
    optEls.forEach((el, i) => {
      if (i === q.correct) el.classList.add('correct');
      if (!isCorrect && state.selectedOption === i && i !== q.correct) {
        el.classList.add('wrong');
      }
    });

    document.getElementById('next-btn-action').addEventListener('click', () => {
      playClick();
      nextQuestion();
    });
  } else {
    feedbackEl.innerHTML = '';
    feedbackEl.className = 'feedback';
    nextWrap.innerHTML = '';

    optionsEl.querySelectorAll('.option').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx);
        handleAnswer(idx);
      });
    });
  }
}

function handleAnswer(idx) {
  if (state.answered) return;
  state.answered = true;
  state.selectedOption = idx;

  const q = gameQuestions[state.current];
  const isCorrect = idx === q.correct;
  state.correctAnswer = isCorrect;

  if (isCorrect) {
    state.score++;
    playCorrect();
  } else {
    playWrong();
  }

  renderQuestion();
}

function nextQuestion() {
  state.current++;
  state.answered = false;
  state.correctAnswer = null;
  state.selectedOption = null;

  if (state.current >= gameQuestions.length) {
    stopBGM();
    renderResult();
  } else {
    renderQuestion();
  }
}

// ============================================================
// RESULT SCREEN
// ============================================================
function renderResult() {
  const total = gameQuestions.length;
  const wrong = total - state.score;
  const pct = Math.round((state.score / total) * 100);

  let gradeClass = 'grade-0';
  let titleText = 'PRECISA MELHORAR';
  let msg = 'Você pode ir além! Não desista — a IA pode ser uma grande aliada no seu dia a dia. Continue praticando e explore o universo da IA!';

  if (state.score >= 3 && state.score <= 5) {
    gradeClass = 'grade-1';
    titleText = 'MUITO BOM!';
    msg = 'Você já tem uma boa base! A IA está aí para ajudar: use-a no trabalho, nos estudos e na criatividade. Quanto mais você praticar, melhores serão os resultados!';
  } else if (state.score >= 6 && state.score <= 8) {
    gradeClass = 'grade-2';
    titleText = 'EXCELENTE!';
    msg = 'Você sabe se comunicar com IA! Continue explorando esse universo — a IA pode potencializar sua produtividade e criatividade de formas incríveis!';
  } else if (state.score >= 9) {
    gradeClass = 'grade-3';
    titleText = 'PERFEITO, PARABÉNS!';
    msg = 'Você domina a arte de perguntar! Espalhe esse conhecimento e incentive mais pessoas a usarem IA. O futuro é colaborativo entre humanos e inteligência artificial!';
  }

  document.getElementById('result-title').textContent = titleText;
  document.getElementById('result-title').className = `result-title ${gradeClass}`;
  document.getElementById('result-score').textContent = `${state.score}/${total}`;
  document.getElementById('result-msg').textContent = msg;
  document.getElementById('stat-correct').textContent = state.score;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-pct').textContent = `${pct}%`;

  showScreen('screen-result');

  if (state.score >= 6) {
    playFinish();
  } else {
    setTimeout(() => playWrong(), 200);
  }
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.getElementById('btn-start').addEventListener('click', () => {
  initAudio();
  playStart();
  startGame();
});

document.getElementById('btn-restart').addEventListener('click', () => {
  playClick();
  startGame();
});

document.getElementById('btn-back').addEventListener('click', () => {
  playClick();
  stopBGM();
  showScreen('screen-landing');
});

document.getElementById('sound-btn').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('sound-btn');
  btn.textContent = soundEnabled ? '🔊 SOM' : '🔇 MUDO';
  if (soundEnabled) {
    playClick();
    if (document.getElementById('screen-game').classList.contains('active')) {
      startBGM();
    }
  } else {
    stopBGM();
  }
});
