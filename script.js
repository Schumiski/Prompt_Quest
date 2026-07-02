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
      'Uma espécie de promoção relâmpago do mercado',
      'A instrução, pergunta ou descrição que você escreve para a IA responder',
      'Um tipo de vírus de computador',
      'Um aplicativo de edição de fotos',
    ],
    correct: 1,
    explain: 'Prompt é simplesmente o texto que você digita para se comunicar com a IA. Quanto melhor o prompt, melhor a resposta.',
  },
  {
    q: 'Qual a melhor maneira de pedir algo para uma IA?',
    opts: [
      'Ser bem específico e explicar exatamente o que você quer',
      'Digitar palavras soltas e desconectadas',
      'Falar em outro idioma',
      'Escrever tudo em letras maiúsculas',
    ],
    correct: 0,
    explain: 'Quanto mais claro e detalhado você for, melhor a IA entende. Pense nela como um assistente que precisa de instruções precisas.',
  },
  {
    q: 'Se você quer que a IA escreva um texto para suas redes sociais, o que deve incluir no prompt?',
    opts: [
      'Apenas "escreva algo legal" e pronto',
      'O tema, o tom (divertido, formal, inspirador) e para quem é o texto',
      'O endereço da sua casa',
      'Uma foto aleatória de um gato',
    ],
    correct: 1,
    explain: 'Dizer o tema, o estilo e o público-alvo ajuda a IA a criar um texto muito mais adequado para você.',
  },
  {
    q: 'Por que é útil dar um exemplo para a IA no seu pedido?',
    opts: [
      'Porque a IA se inspira no exemplo e entende melhor o formato que você quer',
      'Não serve para nada, é perda de tempo',
      'Porque a IA simplesmente copia o exemplo sem criar nada novo',
      'Só funciona em inglês',
    ],
    correct: 0,
    explain: 'Mostrar um exemplo é como dar uma amostra do que você espera. A IA entende o padrão e segue a mesma linha.',
  },
  {
    q: 'O que fazer se a resposta da IA não ficou do jeito que você esperava?',
    opts: [
      'Desligar o computador e desistir',
      'Explicar educadamente o que ajustar, sendo específico sobre o que mudar',
      'Repetir a mesma pergunta 10 vezes seguidas',
      'Ignorar e começar uma conversa nova do zero',
    ],
    correct: 1,
    explain: 'Você pode conversar com a IA! Diga "ficou bom, mas pode deixar mais curto" ou "mude o tom para algo mais divertido". Ela aprende com o feedback.',
  },
  {
    q: 'Como pedir para a IA explicar algo complicado de um jeito simples?',
    opts: [
      'Digitar apenas "me explica isso"',
      '"Explique [assunto] como se eu tivesse 10 anos, com exemplos do dia a dia"',
      'Falar "simplifica aí" e torcer para dar certo',
      'Pedir a resposta em outra língua',
    ],
    correct: 1,
    explain: 'Pedir para a IA usar linguagem simples e exemplos práticos é a melhor forma de entender assuntos difíceis sem complicação.',
  },
  {
    q: 'O que significa dar "contexto" para a IA no seu prompt?',
    opts: [
      'É contar informações de fundo para a IA entender melhor a sua situação',
      'É usar palavras difíceis para impressionar',
      'É enviar áudios ao invés de texto',
      'É escrever o prompt à mão e digitalizar',
    ],
    correct: 0,
    explain: 'Contexto é contar para a IA qual é o cenário, para quem é, qual o objetivo. Sem contexto, a IA responde "no escuro".',
  },
  {
    q: 'Qual dessas dicas ajuda a IA a ser mais criativa nas respostas?',
    opts: [
      'Usar a mesma palavra repetidas vezes sem parar',
      'Pedir várias opções diferentes ("me sugira 3 ideias criativas")',
      'Pedir a mesma resposta duas vezes seguidas',
      'Não escrever nada além de uma única palavra',
    ],
    correct: 1,
    explain: 'Pedir múltiplas opções estimula a IA a explorar possibilidades diferentes. Quanto mais variedade você pede, mais criativa ela fica.',
  },
  {
    q: 'Se você NÃO quer que a IA use palavras complicadas na resposta, o que fazer?',
    opts: [
      'Esperar que ela adivinhe que você quer algo simples',
      'Dizer claramente: "explique sem usar termos técnicos, em linguagem simples"',
      'Usar palavras complicadas você mesmo na pergunta',
      'Escrever tudo em letras minúsculas',
    ],
    correct: 1,
    explain: 'Você pode dizer o que a IA deve EVITAR. Se não quer jargão técnico, é só avisar. A IA segue suas instruções à risca.',
  },
  {
    q: 'Por que vale a pena aprender a fazer bons prompts?',
    opts: [
      'Porque a IA pode ajudar no trabalho, nos estudos e no dia a dia — e um bom prompt faz toda a diferença no resultado',
      'Não precisa, a IA já entende tudo sozinha',
      'Só programadores e técnicos precisam saber disso',
      'Porque é uma matéria obrigatória da escola',
    ],
    correct: 0,
    explain: 'Saber se comunicar com IA é uma habilidade valiosa hoje em dia. Com um bom prompt, você economiza tempo, cria conteúdos incríveis e resolve problemas mais rápido.',
  },
  {
    q: 'Como a IA pode ajudar no seu dia a dia?',
    opts: [
      'Criar receitas, planejar viagens, resumir textos e gerar ideias criativas',
      'Só serve para programadores',
      'Ela apenas responde perguntas de escola',
      'Não tem utilidade prática',
    ],
    correct: 0,
    explain: 'A IA é versátil: ajuda desde receitas e roteiros de viagem até resumos de textos e brainstorming de ideias. É uma assistente para várias áreas da vida.',
  },
  {
    q: 'O que acontece se você der instruções confusas ou contraditórias para a IA?',
    opts: [
      'A IA sempre entende perfeitamente, não importa o que você diga',
      'Ela pode se confundir e entregar um resultado estranho ou misturado',
      'O computador pode travar ou desligar',
      'A IA simplesmente ignora e faz o que quer',
    ],
    correct: 1,
    explain: 'Instruções confusas geram respostas confusas. Por isso é importante organizar bem o pensamento antes de escrever o prompt.',
  },
  {
    q: 'Dá para pedir para a IA "atuar como" se fosse outra pessoa ou profissional?',
    opts: [
      'Sim! Você pode definir um papel: "aja como um chef de cozinha" ou "fale como um amigo"',
      'Não, a IA só responde de um jeito padrão e não muda',
      'Só funciona se o prompt for em inglês',
      'Isso causa erro no sistema',
    ],
    correct: 0,
    explain: 'Definir um papel ("role-playing") direciona completamente o estilo da resposta. É muito útil para obter respostas de diferentes perspectivas.',
  },
  {
    q: 'Como pedir para a IA resumir um texto grande?',
    opts: [
      'Copiar o texto e pedir: "resuma em 3 parágrafos destacando os pontos principais"',
      'Só funciona se o texto estiver em formato PDF',
      'A IA não consegue resumir textos com mais de uma página',
      'Basta escrever "diminui isso" sem mais instruções',
    ],
    correct: 0,
    explain: 'A IA é excelente para resumir! Basta colar o texto e especificar o tamanho e o foco do resumo que você deseja.',
  },
  {
    q: 'A IA consegue criar imagens a partir de uma descrição?',
    opts: [
      'Sim! Você descreve a cena em detalhes e ela gera uma imagem baseada no seu prompt',
      'Não, ela trabalha apenas com textos',
      'Só se for um desenho técnico ou gráfico',
      'Sim, mas só entende descrições em inglês',
    ],
    correct: 0,
    explain: 'IAs como DALL-E, Midjourney e outras geram imagens realistas a partir de descrições em texto. O segredo é descrever bem a cena, o estilo e os detalhes.',
  },
  {
    q: 'Como pedir para a IA organizar informações em formato de tabela?',
    opts: [
      'Pedir: "crie uma tabela com 3 colunas: produto, preço e avaliação"',
      'Isso não é possível, IA não cria tabelas',
      'Só funciona se você usar o Excel junto',
      'Basta escrever "faz uma tabela aí" sem dar detalhes',
    ],
    correct: 0,
    explain: 'A IA cria tabelas perfeitamente. Basta especificar as colunas e o conteúdo. Você pode copiar a tabela para o Word, Excel ou Google Docs depois.',
  },
  {
    q: 'Qual desses usos a IA NÃO consegue fazer?',
    opts: [
      'Ter opiniões próprias, sentir emoções ou ter vontade própria',
      'Criar um roteiro personalizado de viagem',
      'Sugerir nomes criativos para um novo negócio',
      'Explicar um conceito difícil de matemática de forma simples',
    ],
    correct: 0,
    explain: 'A IA não sente emoções nem tem opiniões. Ela apenas processa informações e padrões. Saber disso ajuda a usar a ferramenta da forma correta.',
  },
  {
    q: 'Qual a melhor forma de pedir ajuda para a IA planejar algo (rotina, estudos, viagem)?',
    opts: [
      'Dar detalhes: "crie uma rotina de estudos de 2h por dia, segunda a sexta, focando em matemática"',
      'Escrever apenas "monte uma rotina"',
      'Isso é complexo demais para uma IA resolver',
      'Pedir em outro idioma para ficar mais fácil',
    ],
    correct: 0,
    explain: 'Quanto mais informação você der sobre sua rotina, objetivos e restrições, mais personalizado e útil será o plano que a IA vai criar.',
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
