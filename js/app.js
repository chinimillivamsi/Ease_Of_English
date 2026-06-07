/* ============================================
   EASE OF ENGLISH — App Controller
   ============================================ */

'use strict';

// ---- State Management ----
const State = {
  KEY: 'eoe_state',

  defaults() {
    return {
      profile: {
        name: '',
        ageGroup: 'adult',
        level: 'beginner',
        theme: 'light',
        fontSize: 'normal',
        topicOverride: null
      },
      progress: {
        xp: 0,
        streak: 0,
        lastActiveDate: '',
        badges: [],
        totalReadings: 0,
        totalWritings: 0,
        totalSpeakings: 0,
        totalQuizzes: 0,
        totalWords: 0,
        perfectQuizzes: 0,
        completedDays: [],
        dailyTasks: {},
        vocabSRS: {}
      }
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      const d = this.defaults();
      const result = Object.assign(d, saved);
      result.progress = Object.assign(d.progress, saved.progress || {});
      return result;
    } catch (e) { return null; }
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch(e) {}
  },

  getWriting(key) {
    try { return localStorage.getItem('eoe_w_' + key) || ''; } catch(e) { return ''; }
  },

  saveWriting(key, text) {
    try { localStorage.setItem('eoe_w_' + key, text); } catch(e) {}
  }
};

// ---- App Global State ----
let appState = null;
let currentView = 'dashboard';
let todayStr = '';
let todayTopic = null;

// ---- Quiz Ephemeral State ----
let quizState = { q: 0, score: 0, answered: [], done: false };

// ---- Grammar Ephemeral State ----
let grammarCatId = 'verbs';

// ---- Daily Task Pool (8 tasks, 5 selected per day) ----
const TASK_POOL = [
  { key: 'reading',    icon: '📖', name: 'Reading',        xp: '+10 XP', xpAmt: 10, view: 'lesson' },
  { key: 'vocabulary', icon: '📝', name: 'Vocabulary',     xp: '+10 XP', xpAmt: 10, view: 'vocabulary' },
  { key: 'writing',    icon: '✍️',  name: 'Writing',       xp: '+15 XP', xpAmt: 15, view: 'writing' },
  { key: 'speaking',   icon: '🎤', name: 'Speaking',       xp: '+15 XP', xpAmt: 15, view: 'speaking' },
  { key: 'quiz',       icon: '🧩', name: 'Quiz',           xp: '+20 XP', xpAmt: 20, view: 'quiz' },
  { key: 'grammar',    icon: '📚', name: 'Grammar Review', xp: '+10 XP', xpAmt: 10, view: 'grammar', gramCat: 'verbs' },
  { key: 'errors',     icon: '❌', name: 'Error Hunt',     xp: '+10 XP', xpAmt: 10, view: 'grammar', gramCat: 'errors' },
  { key: 'idioms',     icon: '💬', name: 'Idiom Practice', xp: '+10 XP', xpAmt: 10, view: 'grammar', gramCat: 'idioms' }
];

function getDailyTaskSet(dateStr) {
  const n = dateStr.replace(/-/g, '').split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];
  let seed = Math.abs(n);
  for (let i = 7; i > 0; i--) {
    const j = seed % (i + 1);
    seed = Math.floor(seed / (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 5).map(i => TASK_POOL[i]);
}

function navigateGrammarTask(catId) {
  grammarCatId = catId;
  navigate('grammar');
}

// ---- Daily News State ----
let dailyNews = null; // { posts, suggestedTopicIdx, ok, source }

const NEWS_TOPIC_KEYWORDS = {
  1: ['cricket', 'ipl', 'bcci', 'test match', 'virat', 'rohit', 'dhoni', 'wicket', 'odi', 't20', 'world cup', 'sport'],
  0: ['ai', 'artificial intelligence', 'tech', 'startup', 'google', 'microsoft', 'chatgpt', 'software', 'app', 'data'],
  2: ['climate', 'pollution', 'flood', 'cyclone', 'drought', 'weather', 'environment', 'carbon', 'heatwave'],
  3: ['health', 'hospital', 'vaccine', 'covid', 'disease', 'fitness', 'medical', 'doctor', 'medicine', 'cancer'],
  4: ['food', 'recipe', 'restaurant', 'cuisine', 'zomato', 'swiggy', 'chef', 'cooking', 'diet'],
  5: ['movie', 'film', 'bollywood', 'actor', 'actress', 'cinema', 'netflix', 'ott', 'box office', 'web series'],
  6: ['space', 'isro', 'rocket', 'satellite', 'chandrayaan', 'nasa', 'astronaut', 'moon', 'planet'],
  7: ['travel', 'tourism', 'flight', 'hotel', 'visa', 'trip', 'destination', 'airport', 'train'],
  8: ['education', 'school', 'college', 'exam', 'neet', 'jee', 'university', 'student', 'scholarship'],
  9: ['social media', 'instagram', 'twitter', 'viral', 'youtube', 'facebook', 'tiktok', 'influencer', 'meme']
};

// ---- Dynamic Topic State ----
let dynamicTopicLoading = false; // true while API calls are in flight

// ---- Dynamic Topic: Day-of-Year Seed Resolution ----
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.ceil((now - start) / 86400000); // 1-366
}

function getDailySeedIdx() {
  const day = getDayOfYear(); // 1-366
  return (day - 1) % DAILY_TOPIC_SEEDS.length; // 0-365
}

function buildSeedTopic(seedIdx) {
  const s = DAILY_TOPIC_SEEDS[seedIdx];
  if (!s) return getTodaysTopic(); // safety fallback
  return {
    id: 1000 + seedIdx,
    title: s[0],
    icon: s[1],
    category: s[2],
    wikiSlug: s[3],
    dynamic: true,
    loading: true,
    passages: {
      beginner: '',
      intermediate: '',
      advanced: ''
    },
    vocabulary: [],
    writing: {
      beginner: autoWritingPrompt(s[0], s[2], 'beginner'),
      intermediate: autoWritingPrompt(s[0], s[2], 'intermediate'),
      advanced: autoWritingPrompt(s[0], s[2], 'advanced')
    },
    speaking: {
      beginner: autoSpeakingPrompt(s[0], s[2], 'beginner'),
      intermediate: autoSpeakingPrompt(s[0], s[2], 'intermediate'),
      advanced: autoSpeakingPrompt(s[0], s[2], 'advanced')
    },
    quiz: []
  };
}

function autoWritingPrompt(title, category, level) {
  const prompts = {
    beginner: [
      `Write 5 sentences about ${title}. What do you know about it? Use simple words.`,
      `What is ${title}? Write a short paragraph in your own words.`,
      `Write about why ${title} is important in daily life. Use at least 50 words.`
    ],
    intermediate: [
      `Describe the importance of ${title} in today's world. Write 1-2 paragraphs with examples from real life.`,
      `How has ${title} affected people in India? Write about its benefits and challenges in 100-150 words.`,
      `Compare the situation of ${title} before and after modern times. Write a structured paragraph.`
    ],
    advanced: [
      `Critically analyse the role of ${title} in shaping society. Discuss both advantages and disadvantages. Write 200-250 words with a clear introduction, body, and conclusion.`,
      `"${title} is one of the most significant topics of the 21st century." Do you agree? Write a well-structured essay with arguments and evidence.`,
      `Discuss how ${title} influences the field of ${category}. Use specific examples, data or case studies in 200+ words.`
    ]
  };
  const arr = prompts[level] || prompts.beginner;
  return arr[Math.floor(Math.random() * arr.length)];
}

function autoSpeakingPrompt(title, category, level) {
  const prompts = {
    beginner: [
      `Talk about ${title} for 1 minute. What is it? Why is it important?`,
      `Tell a friend what you learned about ${title} today. Use simple English.`,
      `Say 3 things you know about ${title}. Speak clearly and slowly.`
    ],
    intermediate: [
      `Speak for 2 minutes about ${title}. Include what it is, why it matters, and one example.`,
      `Discuss how ${title} has changed in recent years. Give your opinion at the end.`,
      `Explain ${title} to someone who knows nothing about it. Use examples and simple comparisons.`
    ],
    advanced: [
      `Deliver a 3-minute speech on "${title}: Past, Present and Future." Include facts, opinion, and a call to action.`,
      `Debate topic: "${title} is more important than ever in the modern world." Argue either for or against this statement.`,
      `Present a 2-3 minute analysis of ${title} covering its origins, current impact, and future prospects.`
    ]
  };
  const arr = prompts[level] || prompts.beginner;
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---- Dynamic Topic: API Fetching ----
async function fetchWikiSummary(slug) {
  try {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(slug);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return (data && data.extract) ? data.extract : null;
  } catch (e) { return null; }
}

async function fetchWordDef(word) {
  try {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word.toLowerCase());
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data[0] || !data[0].meanings || !data[0].meanings[0]) return null;
    const entry = data[0];
    const meaning = entry.meanings[0];
    const defn = meaning.definitions[0];
    if (!defn || !defn.definition) return null;
    const phonetic = (entry.phonetics || []).find(p => p.text);
    return {
      word: word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      pronunciation: phonetic ? phonetic.text.replace(/[\/]/g, '') : word.toUpperCase(),
      partOfSpeech: meaning.partOfSpeech || 'noun',
      meaning: defn.definition,
      example: defn.example || (word + ' is an important concept in English vocabulary.'),
      tip: 'Learn to use "' + word + '" in context — practice it in a sentence today!'
    };
  } catch (e) { return null; }
}

const VOCAB_STOPWORDS = new Set(['about','after','against','along','among','around','because','before','being','between','children','could','during','every','first','following','found','given','having','here','include','into','known','large','later','like','local','made','make','many','more','most','move','much','national','near','number','often','only','other','over','people','place','point','political','right','same','seem','several','should','show','since','small','some','state','still','such','take','than','that','their','them','then','there','these','they','this','through','time','under','until','used','various','very','want','well','were','when','where','which','while','with','within','without','would','year','years','also','been','from','have','just','most','will','your','each','from','they','been','have','said','into','than','them','were','also','area','came','does','else','even','form','gave','goes','gets','give','high','hold','home','kind','last','life','line','list','look','long','made','mean','much','need','next','nice','open','part','past','play','real','rest','role','room','seem','show','side','sort','such','tell','term','than','them','thus','told','took','used','verb','very','ways','well','what','when','with','word','work','able','away','back','been','both','call','came','come','days','down','each','else','even','ever','face','fact','from','full','good','hand','head','held','help','here','high','hold','home','hope','idea','keep','kind','knew','know','land','last','lead','left','less','life','line','live','long','look','made','main','make','many','mean','meet','mind','more','most','move','much','must','name','need','next','note','once','open','over','page','part','past','play','put','real','rest','role','room','said','same','seem','show','side','sort','such','tell','term','that','then','they','this','thus','time','told','took','true','turn','type','upon','used','view','ways','week','well','went','what','when','whom','with','word','work','year']);

function extractVocabCandidates(extract, title) {
  if (!extract) return [];
  const titleWords = new Set(title.toLowerCase().split(/\s+/));
  const seen = new Set();
  const candidates = [];
  const wordMatches = extract.match(/\b[A-Za-z]{7,15}\b/g) || [];
  for (const w of wordMatches) {
    const wl = w.toLowerCase();
    if (!VOCAB_STOPWORDS.has(wl) && !titleWords.has(wl) && !seen.has(wl) && /^[a-zA-Z]+$/.test(w)) {
      seen.add(wl);
      candidates.push(wl);
      if (candidates.length >= 8) break;
    }
  }
  return candidates;
}

function buildPassages(extract) {
  if (!extract || extract.length < 30) return null;
  const sentences = extract.match(/[^.!?]+[.!?]+\s*/g) || [extract];
  const beginner = sentences.slice(0, Math.min(3, sentences.length)).join('').trim();
  const intermediate = extract.substring(0, Math.min(500, extract.length)).trim();
  const advanced = extract.trim();
  return { beginner, intermediate, advanced };
}

function autoGenQuiz(title, v1, v2, extract) {
  const usedIdx = new Set();
  function pickWrong(count) {
    const out = [];
    while (out.length < count) {
      const ri = Math.floor(Math.random() * QUIZ_WRONG_DEFS.length);
      if (!usedIdx.has(ri)) { usedIdx.add(ri); out.push(QUIZ_WRONG_DEFS[ri]); }
      if (usedIdx.size >= QUIZ_WRONG_DEFS.length) break;
    }
    return out;
  }
  function makeOptions(correct) {
    const wrong = pickWrong(3);
    const opts = [correct, ...wrong];
    const shuffled = opts.sort(() => Math.random() - 0.5);
    return { options: shuffled, answer: shuffled.indexOf(correct) };
  }

  const q1 = makeOptions(v1.meaning);
  const q2 = makeOptions(v2.meaning);
  const q3 = makeOptions(v1.partOfSpeech || 'noun');
  const q4opts = [v1.example,
    'She went to the market to buy ' + v1.word.toLowerCase() + ' for the festival.',
    'The teacher placed a ' + v1.word.toLowerCase() + ' on top of the old building.',
    'He found a small ' + v1.word.toLowerCase() + ' buried near the river.'];
  const q4shuffled = q4opts.sort(() => Math.random() - 0.5);
  const firstSentence = extract ? (extract.split(/[.!?]/)[0] || '').trim() : '';

  return [
    { question: 'What is the meaning of "' + v1.word + '"?', options: q1.options, answer: q1.answer,
      explanation: '"' + v1.word + '" means: ' + v1.meaning + '. Example: ' + v1.example },
    { question: 'What is the meaning of "' + v2.word + '"?', options: q2.options, answer: q2.answer,
      explanation: '"' + v2.word + '" means: ' + v2.meaning + '. Example: ' + v2.example },
    { question: 'The word "' + v1.word + '" is a _____.', options: q3.options, answer: q3.answer,
      explanation: '"' + v1.word + '" is a ' + (v1.partOfSpeech || 'noun') + ' — ' + v1.meaning },
    { question: 'Which sentence uses "' + v1.word + '" correctly?', options: q4shuffled, answer: q4shuffled.indexOf(v1.example),
      explanation: 'Correct usage: ' + v1.example },
    (() => {
      const q5opts = [v2.example,
        v2.word.charAt(0).toUpperCase() + v2.word.slice(1).toLowerCase() + ' is a kind of ancient tool used in construction.',
        'The government banned all forms of ' + v2.word.toLowerCase() + ' last year.',
        'Scientists found ' + v2.word.toLowerCase() + ' deep beneath the ocean floor.'];
      const q5shuffled = q5opts.sort(() => Math.random() - 0.5);
      return { question: 'Which sentence uses "' + v2.word + '" correctly?', options: q5shuffled, answer: q5shuffled.indexOf(v2.example),
        explanation: 'Correct usage of "' + v2.word + '": ' + v2.example + (firstSentence ? '' : '') };
    })()
  ];
}

async function loadDynamicTopicContent() {
  if (!todayTopic || !todayTopic.dynamic) return;
  if (dynamicTopicLoading) return;
  dynamicTopicLoading = true;

  const topic = todayTopic;
  const cat = topic.category;

  // Step 1: fetch Wikipedia summary
  const extract = await fetchWikiSummary(topic.wikiSlug);

  // Step 2: build passages
  const passages = extract ? buildPassages(extract) : null;
  if (passages) {
    topic.passages = passages;
  } else {
    const fallback = (CATEGORY_VOCAB_FALLBACK[cat] || CATEGORY_VOCAB_FALLBACK['Society']);
    topic.passages = {
      beginner: topic.title + ' is an important topic related to ' + cat + '. Learning about it will help you understand the world around you. Read, explore, and discuss this topic to improve your English skills.',
      intermediate: topic.title + ' is a significant subject in the field of ' + cat + '. It affects people in many ways and has a long history. Understanding ' + topic.title + ' gives you valuable knowledge that can be used in everyday conversations and professional settings.',
      advanced: topic.title + ' represents a fascinating area of study within ' + cat + '. It has shaped societies, influenced policies, and continues to evolve in the modern world. A deep understanding of ' + topic.title + ' requires examining its historical origins, present-day relevance, and future implications for society at large.'
    };
    topic.vocabulary = fallback.slice(0, 2);
    topic.quiz = autoGenQuiz(topic.title, fallback[0], fallback[1], '');
    topic.loading = false;
    dynamicTopicLoading = false;
    refreshContentViews();
    return;
  }

  // Step 3: extract vocab candidates from passage
  const candidates = extractVocabCandidates(extract, topic.title);

  // Step 4: try to fetch definitions (try up to 5 candidates)
  const vocab = [];
  for (let i = 0; i < Math.min(candidates.length, 5) && vocab.length < 2; i++) {
    const def = await fetchWordDef(candidates[i]);
    if (def) vocab.push(def);
  }

  // Fill with category fallback if we got fewer than 2
  const fallback = CATEGORY_VOCAB_FALLBACK[cat] || CATEGORY_VOCAB_FALLBACK['Society'];
  while (vocab.length < 2) vocab.push(fallback[vocab.length] || fallback[0]);

  topic.vocabulary = vocab.slice(0, 2);
  topic.quiz = autoGenQuiz(topic.title, vocab[0], vocab[1], extract || '');
  topic.loading = false;
  dynamicTopicLoading = false;

  refreshContentViews();
}

function refreshContentViews() {
  const contentViews = ['lesson', 'vocabulary', 'quiz'];
  if (contentViews.includes(currentView)) {
    navigate(currentView);
  } else if (currentView === 'dashboard') {
    // update topic card title
    const todayCard = document.querySelector('.today-card h3');
    if (todayCard) todayCard.textContent = todayTopic.icon + ' ' + todayTopic.title;
  }
}

// ---- Voice Recorder ----
const Recorder = {
  mediaRecorder: null,
  chunks: [],
  timer: null,
  elapsed: 0,
  audioURL: null,

  async start(onStop) {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        Toast.show('Microphone unavailable', 'Voice recording requires HTTPS. Try deploying to Netlify or open via a local server.', 'info', 6000);
        return false;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = [];
      this.elapsed = 0;
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = e => { if (e.data.size > 0) this.chunks.push(e.data); };
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'audio/webm' });
        this.audioURL = URL.createObjectURL(blob);
        stream.getTracks().forEach(t => t.stop());
        if (onStop) onStop(this.audioURL);
      };
      this.mediaRecorder.start(200);
      this.timer = setInterval(() => {
        this.elapsed++;
        const el = document.getElementById('rec-timer');
        if (el) el.textContent = this.formatTime(this.elapsed);
      }, 1000);
      return true;
    } catch (err) {
      Toast.show('Microphone access denied', 'Please allow microphone access in browser settings.', 'error');
      return false;
    }
  },

  stop() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  },

  formatTime(s) { return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
};

// ---- Text-to-Speech ----
const TTS = {
  speaking: false,

  speak(text, onEnd) {
    if (!window.speechSynthesis) { Toast.show('Not supported', 'Your browser does not support text-to-speech.', 'error'); return; }
    this.stop();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.88;
    utt.pitch = 1;
    utt.lang = 'en-IN';
    utt.onend = () => { this.speaking = false; if (onEnd) onEnd(); };
    utt.onerror = () => { this.speaking = false; };
    this.speaking = true;
    speechSynthesis.speak(utt);
  },

  stop() {
    if (window.speechSynthesis) {
      speechSynthesis.cancel();
      this.speaking = false;
    }
  }
};

// ---- Toast Notifications ----
const Toast = {
  show(title, msg, type = 'success', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const icons = { success: '✅', error: '❌', info: 'ℹ️', xp: '⚡', badge: '🏅' };
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span class="toast-icon">${icons[type] || '✨'}</span>
      <div class="toast-body"><div class="toast-title">${title}</div>${msg ? `<div class="toast-msg">${msg}</div>` : ''}</div>`;
    container.appendChild(el);
    setTimeout(() => { el.classList.add('fadeout'); setTimeout(() => el.remove(), 400); }, duration);
  }
};

// ---- XP & Badge Logic ----
function awardXP(amount, label) {
  appState.progress.xp += amount;
  State.save(appState);
  updateTopBar();
  Toast.show(`+${amount} XP`, label, 'xp', 2500);
}

function checkBadges() {
  const p = appState.progress;
  const earned = p.badges;
  const checks = {
    lessons:       (p.totalReadings + p.totalWritings),
    readings:      p.totalReadings,
    words:         p.totalWords,
    quizzes:       p.totalQuizzes,
    writings:      p.totalWritings,
    speakings:     p.totalSpeakings,
    streak:        p.streak,
    perfectQuizzes:p.perfectQuizzes,
    xp:            p.xp
  };

  BADGES.forEach(badge => {
    if (!earned.includes(badge.id)) {
      const val = checks[badge.type] || 0;
      if (val >= badge.threshold) {
        earned.push(badge.id);
        State.save(appState);
        setTimeout(() => Toast.show(`Badge Unlocked: ${badge.name}`, badge.desc, 'badge', 5000), 500);
      }
    }
  });
}

function updateStreak() {
  const today = todayStr;
  const last = appState.progress.lastActiveDate;
  if (last === today) return;

  const yesterday = getDateStr(-1);
  if (last === yesterday) {
    appState.progress.streak++;
  } else if (last !== today) {
    appState.progress.streak = 1;
  }
  appState.progress.lastActiveDate = today;
  State.save(appState);
}

function getDateStr(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

function todayTasksKey() { return todayStr; }

function getTasksDone() {
  const t = appState.progress.dailyTasks[todayTasksKey()];
  return t || {};
}

function markTaskDone(taskName, xpAmount, xpLabel) {
  if (!appState.progress.dailyTasks[todayTasksKey()]) {
    appState.progress.dailyTasks[todayTasksKey()] = {};
  }
  if (appState.progress.dailyTasks[todayTasksKey()][taskName]) return false;
  appState.progress.dailyTasks[todayTasksKey()][taskName] = true;
  State.save(appState);
  awardXP(xpAmount, xpLabel);
  checkBadges();
  return true;
}

// ---- Helpers ----
function el(id) { return document.getElementById(id); }
function html(id, content) { const e = el(id); if (e) e.innerHTML = content; }
function setText(id, text) { const e = el(id); if (e) e.textContent = text; }
function show(id) { const e = el(id); if (e) e.classList.remove('hidden'); }
function hide(id) { const e = el(id); if (e) e.classList.add('hidden'); }

function getLevelPassage() {
  const lvl = appState.profile.level;
  return todayTopic.passages[lvl] || todayTopic.passages.beginner;
}

// ---- Top Bar / Sidebar update ----
function updateTopBar() {
  const xpLevel = getXPLevel(appState.progress.xp);
  setText('top-xp', `${xpLevel.icon} ${appState.progress.xp} XP`);
  setText('top-streak', `🔥 ${appState.progress.streak}`);
  setText('sidebar-user-name', appState.profile.name || 'Learner');
  setText('sidebar-user-level', `${xpLevel.name} · Level ${appState.profile.level}`);
  setText('sidebar-streak', `🔥 ${appState.progress.streak} day streak`);
  const avatar = el('sidebar-avatar');
  if (avatar) avatar.textContent = (appState.profile.name || 'L')[0].toUpperCase();
}

function setActiveNav(view) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.bottom-nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.querySelector(`[data-view="${view}"]`);
  if (navEl) navEl.classList.add('active');
}

function setTopBarTitle(title) {
  setText('top-bar-title', title);
}

// ---- Navigation ----
function navigate(view) {
  TTS.stop();
  ttsActive = false;
  if (isRecording) { Recorder.stop(); isRecording = false; }
  currentView = view;
  setActiveNav(view);

  const titles = {
    dashboard: '🏠 Dashboard',
    lesson: '📖 Today\'s Lesson',
    writing: '✍️ Writing Practice',
    speaking: '🎤 Speaking Practice',
    quiz: '🧩 Daily Quiz',
    vocabulary: '📚 Vocabulary',
    grammar: '📝 Grammar Guide',
    progress: '📊 My Progress'
  };
  setTopBarTitle(titles[view] || '');

  const container = el('view-container');
  if (!container) return;
  container.innerHTML = '';
  container.style.animation = 'none';
  container.offsetHeight; // reflow
  container.style.animation = '';

  switch(view) {
    case 'dashboard':  renderDashboard(container); break;
    case 'lesson':     renderLesson(container); break;
    case 'writing':    renderWriting(container); break;
    case 'speaking':   renderSpeaking(container); break;
    case 'quiz':       renderQuiz(container); break;
    case 'vocabulary': renderVocabulary(container); break;
    case 'grammar':    renderGrammar(container); break;
    case 'progress':   renderProgress(container); break;
  }

  // Close mobile sidebar if open
  const sidebar = el('sidebar');
  if (sidebar) sidebar.classList.remove('open');
  // Scroll to top
  const main = el('main-content');
  if (main) main.scrollTop = 0;
}

// ---- Daily News Fetch ----
async function loadDailyNews() {
  const REDDIT_URL = 'https://www.reddit.com/r/india/hot.json?limit=12&raw_json=1';
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(REDDIT_URL, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error('HTTP ' + res.status);

    const data = await res.json();
    const posts = data.data.children
      .filter(p => !p.data.stickied && p.data.title.length > 20)
      .slice(0, 6)
      .map(p => ({
        title: p.data.title,
        score: p.data.score,
        comments: p.data.num_comments,
        url: 'https://www.reddit.com' + p.data.permalink,
        flair: p.data.link_flair_text || ''
      }));

    const counts = {};
    posts.forEach(post => {
      const t = post.title.toLowerCase();
      Object.entries(NEWS_TOPIC_KEYWORDS).forEach(([id, kws]) => {
        if (kws.some(kw => t.includes(kw))) counts[id] = (counts[id] || 0) + 1;
      });
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const suggestedTopicIdx = sorted.length ? parseInt(sorted[0][0]) : null;

    dailyNews = { posts, suggestedTopicIdx, ok: true, source: 'Reddit r/india', fetchedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) };
  } catch (e) {
    dailyNews = { posts: [], suggestedTopicIdx: null, ok: false };
  }
  updateNewsInDOM();
}

function updateNewsInDOM() {
  const headlinesEl = el('news-headlines');
  const suggestEl = el('news-topic-suggest');
  if (headlinesEl) headlinesEl.innerHTML = buildNewsHeadlinesHTML();
  if (suggestEl) suggestEl.innerHTML = buildNewsSuggestHTML();
}

function buildNewsHeadlinesHTML() {
  if (!dailyNews) return `<div class="news-loading"><span class="news-spinner"></span> Fetching today's news…</div>`;
  if (!dailyNews.ok || !dailyNews.posts.length) {
    return `<div class="news-offline">📡 News requires an internet connection. <a href="https://www.reddit.com/r/india/hot/" target="_blank" rel="noopener">Open Reddit</a> to browse manually.</div>`;
  }
  return dailyNews.posts.map(p => `
    <a class="news-item" href="${p.url}" target="_blank" rel="noopener noreferrer">
      ${p.flair ? `<span class="news-flair">${p.flair}</span>` : ''}
      <div class="news-title">${p.title}</div>
      <div class="news-meta">⬆ ${p.score >= 1000 ? (p.score/1000).toFixed(1)+'k' : p.score} &nbsp;·&nbsp; 💬 ${p.comments}</div>
    </a>`).join('');
}

function buildNewsSuggestHTML() {
  if (!dailyNews || !dailyNews.ok || dailyNews.suggestedTopicIdx === null) return '';
  // Map the original 10-topic index to closest seed topic by keyword
  const keywordMap = {
    1: 'Cricket', 0: 'Artificial Intelligence', 2: 'Climate Change',
    3: 'Mental Health', 4: 'Biryani', 5: 'Bollywood Films',
    6: 'ISRO', 7: 'Goa', 8: 'Education in India', 9: 'Social Media'
  };
  const targetTitle = keywordMap[dailyNews.suggestedTopicIdx];
  if (!targetTitle) return '';
  const seedIdx = DAILY_TOPIC_SEEDS.findIndex(s => s[0] === targetTitle);
  if (seedIdx === -1 || seedIdx === (todayTopic.id - 1000)) return '';
  const s = DAILY_TOPIC_SEEDS[seedIdx];
  return `<div class="news-suggest-bar">
    🔥 Trending in India: <strong>${s[1]} ${s[0]}</strong>
    <button onclick="changeTopic(${seedIdx})">Switch to this →</button>
  </div>`;
}

// ---- View: Dashboard ----
function renderDashboard(container) {
  const p = appState.progress;
  const tasks = getTasksDone();
  const topic = todayTopic;
  const taskNames = getDailyTaskSet(todayStr);
  const totalTasks = taskNames.length;
  const completedCount = taskNames.filter(t => tasks[t.key]).length;

  const statsHTML = `
    <div class="dashboard-grid">
      <div class="stat-card streak">
        <span class="stat-icon">🔥</span>
        <div class="stat-value">${p.streak}</div>
        <div class="stat-label">Day Streak</div>
      </div>
      <div class="stat-card xp">
        <span class="stat-icon">⚡</span>
        <div class="stat-value">${p.xp}</div>
        <div class="stat-label">Total XP</div>
      </div>
      <div class="stat-card tasks">
        <span class="stat-icon">✅</span>
        <div class="stat-value">${completedCount}/${totalTasks}</div>
        <div class="stat-label">Today Done</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon">🏅</span>
        <div class="stat-value">${p.badges.length}</div>
        <div class="stat-label">Badges</div>
      </div>
    </div>`;

  const xpLevel = getXPLevel(p.xp);
  const nextLevel = XP_LEVELS.find(l => l.min > p.xp) || XP_LEVELS[XP_LEVELS.length - 1];
  const progressPct = nextLevel.min > p.xp
    ? Math.round(((p.xp - xpLevel.min) / (nextLevel.min - xpLevel.min)) * 100)
    : 100;

  const xpBarHTML = `
    <div class="card" style="margin-bottom:28px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:28px">${xpLevel.icon}</span>
          <div><div class="font-bold" style="font-size:var(--font-size-lg)">${xpLevel.name}</div>
          <div class="text-sm" style="color:var(--text-2)">${p.xp} XP total</div></div>
        </div>
        <span class="tag tag-primary">${nextLevel.min > p.xp ? `Next: ${nextLevel.name}` : '🏆 Max Level'}</span>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${progressPct}%"></div></div>
      <div class="progress-label"><span>${p.xp} XP</span><span>${nextLevel.min > p.xp ? nextLevel.min + ' XP' : 'Max!'}</span></div>
    </div>`;

  const isOverride = appState.profile.topicOverride && appState.profile.topicOverride.date === todayStr;
  const autoSeedIdx = getDailySeedIdx();
  const autoSeed = DAILY_TOPIC_SEEDS[autoSeedIdx];
  const autoTopicTitle = autoSeed ? (autoSeed[1] + ' ' + autoSeed[0]) : '';

  const todayCardHTML = `
    <div class="card today-card" style="margin-bottom:16px">
      <span class="topic-badge">${topic.category} · ${new Date().toLocaleDateString('en-IN', {weekday:'long', day:'numeric', month:'long'})}</span>
      <h3 id="today-topic-title">${topic.icon} ${topic.title}</h3>
      <p style="margin-bottom:8px">${topic.loading ? 'Loading today\'s content from Wikipedia… ⏳' : 'Today\'s lesson focuses on ' + topic.title + '. Complete all ' + totalTasks + ' tasks to earn XP!'}</p>
      ${isOverride ? `<div style="font-size:var(--font-size-xs);opacity:0.7;margin-bottom:14px">📌 Custom topic · Auto topic: ${autoTopicTitle}</div>` : ''}
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn-white" onclick="navigate('lesson')">Start Lesson →</button>
        <button class="btn-white-outline" id="tp-toggle-btn" onclick="toggleTopicPicker()">🔄 Change Topic</button>
      </div>
    </div>
    <div id="topic-picker-wrap" style="display:none;margin-bottom:28px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="font-size:var(--font-size-sm);font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:0.05em">366 Topics — Pick Any</div>
        <span style="font-size:var(--font-size-xs);color:var(--text-3)">One unique topic per day of year</span>
      </div>
      <input type="text" id="topic-search" placeholder="🔍 Search topics…" oninput="filterTopics()"
        style="width:100%;padding:10px 14px;border:2px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);color:var(--text-1);font-size:var(--font-size-sm);font-family:var(--font);margin-bottom:12px;box-sizing:border-box;outline:none">
      <div class="topic-picker-grid" id="topic-picker-grid" style="max-height:340px;overflow-y:auto">
        ${DAILY_TOPIC_SEEDS.map((s, i) => `
          <div class="topic-picker-card ${i === (topic.id - 1000) ? 'active' : ''}" data-title="${s[0].toLowerCase()}" onclick="changeTopic(${i})">
            <span class="tp-icon">${s[1]}</span>
            <div class="tp-title">${s[0]}</div>
            <div class="tp-cat">${s[2]}</div>
            ${i === (topic.id - 1000) ? '<div class="tp-check">✓</div>' : ''}
          </div>`).join('')}
      </div>
      ${isOverride ? `<button style="margin-top:12px;padding:8px 18px;border:2px solid var(--border);border-radius:var(--radius-full);background:transparent;color:var(--text-2);font-size:var(--font-size-sm);font-weight:700;cursor:pointer;font-family:var(--font)" onclick="resetToAutoTopic()">↩ Reset to today's auto topic (${autoTopicTitle})</button>` : ''}
    </div>`;

  const tasksHTML = `
    <div class="section-header"><h2>Today's Tasks</h2><p>Complete all ${totalTasks} tasks to earn maximum XP!</p></div>
    <div class="tasks-grid">
      ${taskNames.map(t => `
        <div class="task-tile ${tasks[t.key] ? 'done' : ''}" onclick="${t.gramCat ? `navigateGrammarTask('${t.gramCat}')` : `navigate('${t.view}')`}">
          ${tasks[t.key] ? '<div class="done-check">✓</div>' : ''}
          <span class="task-icon">${t.icon}</span>
          <span class="task-name">${t.name}</span>
          <span class="task-xp">${t.xp}</span>
        </div>`).join('')}
    </div>`;

  const progressHTML = `
    <div class="card" style="margin-bottom:28px">
      <div class="card-header"><span class="card-icon">📊</span>
        <div><div class="card-title">Daily Progress</div><div class="card-subtitle">${completedCount} of ${totalTasks} tasks completed</div></div>
      </div>
      <div class="progress-bar-wrap" style="height:12px">
        <div class="progress-bar-fill success" style="width:${Math.round(completedCount/totalTasks*100)}%"></div>
      </div>
      <div class="progress-label"><span>${completedCount} done</span><span>${totalTasks - completedCount} remaining</span></div>
    </div>`;

  // Recent badges
  const recentBadges = BADGES.filter(b => p.badges.includes(b.id)).slice(-4);
  const badgesHTML = recentBadges.length ? `
    <div class="section-header" style="margin-top:4px"><h2>Recent Badges</h2></div>
    <div class="badges-grid">
      ${recentBadges.map(b => `
        <div class="badge-tile earned" title="${b.desc}">
          <span class="badge-icon">${b.icon}</span>
          <div class="badge-name">${b.name}</div>
          <div class="badge-desc">${b.desc}</div>
        </div>`).join('')}
    </div>` : '';

  const newsCardHTML = `
    <div class="card news-card" style="margin-bottom:28px">
      <div class="card-header" style="margin-bottom:12px">
        <span class="card-icon">📰</span>
        <div>
          <div class="card-title">Today's News in India</div>
          <div class="card-subtitle">${dailyNews && dailyNews.ok ? `${dailyNews.source} · ${dailyNews.fetchedAt}` : 'Live from Reddit r/india'}</div>
        </div>
        <span class="news-live-dot" title="Live">LIVE</span>
      </div>
      <div id="news-topic-suggest">${buildNewsSuggestHTML()}</div>
      <div id="news-headlines">${buildNewsHeadlinesHTML()}</div>
      <div class="news-footer">Practice English by reading and discussing these headlines · <a href="https://www.reddit.com/r/india/hot/" target="_blank" rel="noopener">See all on Reddit ↗</a></div>
    </div>`;

  // Word of the Day (seed-based, no API needed)
  const wodIdx = (getDayOfYear() - 1) % WORD_OF_DAY_SEEDS.length;
  const wod = WORD_OF_DAY_SEEDS[wodIdx];
  const wodHTML = `
    <div class="wod-banner">
      <span class="wod-icon">💎</span>
      <div style="flex:1;min-width:0">
        <div class="wod-meta">Word of the Day · ${new Date().toLocaleDateString('en-IN', {day:'numeric',month:'short'})}</div>
        <div class="wod-word">${wod.word} <span style="font-size:var(--font-size-sm);font-weight:400;opacity:0.8">${wod.partOfSpeech}</span></div>
        <div class="wod-meta" style="margin-top:2px">${wod.pronunciation}</div>
        <div class="wod-meaning">${wod.meaning}</div>
      </div>
      <button class="wod-tts" onclick="TTS.speak('${wod.word.replace(/'/g,"\\'")}. ${wod.meaning.replace(/'/g,"\\'")}. Example: ${wod.example.replace(/'/g,"\\'")}', ()=>{})">🔊</button>
    </div>`;

  // Daily Sentence Challenge
  const scIdx = (getDayOfYear() - 1) % SENTENCE_CHALLENGES.length;
  const sc = SENTENCE_CHALLENGES[scIdx];
  const scAnsweredKey = 'eoe_sc_' + todayStr;
  const scAnswered = (() => { try { return JSON.parse(localStorage.getItem(scAnsweredKey)); } catch(e) { return null; } })();
  const scHTML = `
    <div class="sentence-challenge-card">
      <div style="font-size:var(--font-size-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-2);margin-bottom:8px">✏️ Daily Sentence Challenge · +5 XP</div>
      <div class="sc-sentence">Complete the sentence: <span class="sc-blank">${scAnswered ? sc.blank : '_____'}</span></div>
      <div style="font-size:var(--font-size-sm);color:var(--text-1);margin-bottom:12px">"${sc.sentence.replace('_____', scAnswered ? `<strong style="color:var(--success)">${sc.blank}</strong>` : '<span class="sc-blank">_____</span>')}"</div>
      ${scAnswered
        ? `<div class="tag tag-success" style="padding:8px 16px">✓ Answered today — ${scAnswered.correct ? 'Correct! 🎉' : 'Better luck tomorrow!'}</div>
           <div class="sc-hint" style="margin-top:8px">💡 ${sc.hint}</div>`
        : `<div class="sc-options">
             ${sc.options.map(opt => `<button class="sc-option" onclick="answerSentenceChallenge('${opt.replace(/'/g,"\\'")}','${sc.blank.replace(/'/g,"\\'")}','${scAnsweredKey}')">${opt}</button>`).join('')}
           </div>
           <div class="sc-hint">💡 Hint: ${sc.hint}</div>`}
    </div>`;

  container.innerHTML = `
    <div class="section-header">
      <h2>Good ${getGreeting()}, ${appState.profile.name || 'Learner'}! 👋</h2>
      <p>${getDailyMotivation()}</p>
    </div>
    ${statsHTML}${xpBarHTML}${wodHTML}${todayCardHTML}${scHTML}${tasksHTML}${newsCardHTML}${progressHTML}${badgesHTML}`;

  // Kick off fetch if we haven't loaded news yet (or it's from a different session)
  if (!dailyNews) loadDailyNews();
}

function answerSentenceChallenge(chosen, correct, storageKey) {
  const isCorrect = chosen === correct;
  try { localStorage.setItem(storageKey, JSON.stringify({ chosen, correct: isCorrect })); } catch(e) {}
  document.querySelectorAll('.sc-option').forEach(btn => {
    if (btn.textContent === chosen) btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && btn.textContent === correct) btn.classList.add('correct');
    btn.disabled = true;
  });
  if (isCorrect) {
    markTaskDone('sc_challenge', 5, 'Sentence Challenge correct! +5 XP');
    State.save(appState);
    Toast.show('Correct! 🎉', '+5 XP earned!', 'success');
  } else {
    Toast.show('Not quite!', `The correct answer is "${correct}".`, 'error');
  }
  updateTopBar();
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Morning';
  if (h < 17) return 'Afternoon';
  return 'Evening';
}

function getDailyMotivation() {
  const quotes = [
    "Every word you learn brings you closer to your goals. Keep going!",
    "Consistency beats intensity. One lesson a day changes everything.",
    "Your English journey is unique. Celebrate every small victory!",
    "The best time to learn was yesterday. The second best time is now.",
    "Fluency is built one sentence at a time. You're doing great!",
    "Today's lesson is tomorrow's confidence. Let's learn!"
  ];
  return quotes[new Date().getDay() % quotes.length];
}

// ---- View: Lesson ----
function renderLesson(container) {
  const topic = todayTopic;
  const tasks = getTasksDone();
  const level = appState.profile.level;

  if (topic.dynamic && topic.loading) {
    container.innerHTML = `
      <div class="topic-header">
        <span class="topic-icon">${topic.icon}</span>
        <div><h2>${topic.title}</h2>
          <div class="topic-meta">
            <span class="tag" style="background:rgba(255,255,255,0.15);color:#fff">${topic.category}</span>
          </div>
        </div>
      </div>
      <div class="card" style="margin-bottom:20px;text-align:center;padding:48px 24px">
        <div style="font-size:40px;margin-bottom:16px">⏳</div>
        <div style="font-size:var(--font-size-lg);font-weight:700;margin-bottom:8px">Loading today's content…</div>
        <div style="color:var(--text-2);font-size:var(--font-size-sm)">Fetching reading passage from Wikipedia and vocabulary definitions. This takes a few seconds.</div>
        <div class="dyn-loading-bar" style="margin-top:20px"></div>
      </div>
      <div class="card" style="opacity:0.4;margin-bottom:20px">
        <div class="skel-line skel-line-80"></div>
        <div class="skel-line skel-line-100" style="margin-top:10px"></div>
        <div class="skel-line skel-line-60" style="margin-top:10px"></div>
      </div>`;
    return;
  }

  const passage = topic.passages[level] || topic.passages.beginner;

  container.innerHTML = `
    <div class="topic-header">
      <span class="topic-icon">${topic.icon}</span>
      <div>
        <h2>${topic.title}</h2>
        <div class="topic-meta">
          <span class="tag" style="background:rgba(255,255,255,0.15);color:#fff">${topic.category}</span>
          <span class="tag" style="background:rgba(255,255,255,0.15);color:#fff;text-transform:capitalize">${level} Level</span>
        </div>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <div class="level-selector">
        <button class="level-btn ${level==='beginner'?'active':''}" onclick="changeLevel('beginner')">🌱 Beginner</button>
        <button class="level-btn ${level==='intermediate'?'active':''}" onclick="changeLevel('intermediate')">🌿 Intermediate</button>
        <button class="level-btn ${level==='advanced'?'active':''}" onclick="changeLevel('advanced')">🌲 Advanced</button>
      </div>
    </div>

    <div class="passage-card">
      <div class="passage-toolbar">
        <h3>📖 Reading Passage</h3>
        <button class="tts-btn" id="tts-btn" onclick="toggleTTS()">🔊 Listen</button>
      </div>
      <div class="passage-body" id="passage-text">${passage}</div>
      <div class="passage-footer">
        ${tasks.reading
          ? '<span class="tag tag-success">✓ Reading Completed</span>'
          : `<button class="btn btn-success" onclick="completeReading()">✓ Mark as Read (+10 XP)</button>`}
      </div>
    </div>

    <div class="section-header" style="margin-top:8px"><h2>📝 Today's Vocabulary</h2><p>Tap a card to flip and learn the full definition.</p></div>
    <div class="vocab-grid">
      ${topic.vocabulary.map((v, i) => `
        <div class="vocab-card" id="vcard-${i}" onclick="flipVocabCard(${i})">
          <div class="vocab-card-inner">
            <div class="vocab-front">
              <button class="word-tts-btn" onclick="event.stopPropagation();TTS.speak('${v.word.replace(/'/g,"\\'")}. ${(v.example||'').replace(/'/g,"\\'")}', ()=>{})">🔊</button>
              <div class="vocab-word">${v.word}</div>
              <div class="vocab-pron">${v.pronunciation}</div>
              <div class="vocab-pos">${v.partOfSpeech}</div>
              <div style="margin-top:16px;color:var(--text-2);font-size:var(--font-size-sm)">Tap to learn definition →</div>
            </div>
            <div class="vocab-back">
              <div class="vocab-word" style="font-size:1.1em">${v.word}</div>
              <div class="vocab-meaning">${v.meaning}</div>
              <div class="vocab-example">"${v.example}"</div>
              <div class="vocab-tip"><strong>💡 Tip:</strong> ${v.tip}</div>
            </div>
          </div>
        </div>`).join('')}
    </div>

    <details class="accordion-card" style="margin-top:28px">
      <summary class="accordion-summary">👂 Active Listening Tips</summary>
      <div class="speaking-tips" style="padding-top:16px">
        ${[
          ['🔑','Listen for Cue Words','Words like "firstly", "however", and "finally" signal structure. They help you follow the speaker\'s logic.'],
          ['📝','Note Key Points','Write down main ideas, not every word. Focus on facts, names, and numbers.'],
          ['❓','Ask Clarifying Questions','If unsure, ask: "Could you explain that again?" or "What do you mean by…?"'],
          ['⏸️','Suspend Judgement','Wait until the speaker finishes before forming an opinion. Don\'t interrupt.'],
          ['🔄','Paraphrase Back','Say back what you heard: "So what you\'re saying is…" This confirms understanding.'],
          ['📵','Reduce Distractions','Put your phone down and face the speaker. Eye contact shows you are listening.']
        ].map(([icon, title, text]) => `
          <div class="tip-card">
            <div class="tip-icon">${icon}</div>
            <strong>${title}</strong>
            <p>${text}</p>
          </div>`).join('')}
      </div>
    </details>

    <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="navigate('writing')">✍️ Writing Practice →</button>
      <button class="btn btn-secondary" onclick="navigate('quiz')">🧩 Take Quiz →</button>
    </div>`;
}

function changeLevel(newLevel) {
  appState.profile.level = newLevel;
  State.save(appState);
  navigate('lesson');
}

function flipVocabCard(i) {
  const card = document.getElementById('vcard-' + i);
  if (card) card.classList.toggle('flipped');
}

let ttsActive = false;
function toggleTTS() {
  const btn = el('tts-btn');
  const text = el('passage-text');
  if (!text) return;
  if (ttsActive) {
    TTS.stop();
    ttsActive = false;
    if (btn) { btn.textContent = '🔊 Listen'; btn.classList.remove('speaking'); }
    return;
  }
  ttsActive = true;
  if (btn) { btn.textContent = '⏹ Stop'; btn.classList.add('speaking'); }
  TTS.speak(text.textContent || text.innerText, () => {
    ttsActive = false;
    if (btn) { btn.textContent = '🔊 Listen'; btn.classList.remove('speaking'); }
  });
}

function completeReading() {
  if (markTaskDone('reading', 10, 'Reading completed!')) {
    appState.progress.totalReadings++;
    State.save(appState);
    checkBadges();
    navigate('lesson');
  }
}

// ---- View: Writing ----
function renderWriting(container) {
  const topic = todayTopic;
  const level = appState.profile.level;
  const prompt = topic.writing[level] || topic.writing.beginner;
  const tasks = getTasksDone();
  const writeKey = `${topic.id}_${todayStr}`;
  const savedText = State.getWriting(writeKey);

  container.innerHTML = `
    <div class="section-header">
      <h2>✍️ Writing Practice</h2>
      <p>Topic: <strong>${topic.icon} ${topic.title}</strong> · Level: <span style="text-transform:capitalize">${level}</span></p>
    </div>

    <div class="writing-prompt-card">
      <div class="prompt-label">📋 Your Writing Prompt</div>
      <p>${prompt}</p>
    </div>

    <textarea class="writing-area" id="writing-area" placeholder="Start writing here... Express yourself freely!">${savedText}</textarea>
    <div class="writing-footer">
      <span class="word-count" id="word-count">${countWords(savedText)} words</span>
      <div style="display:flex;gap:10px">
        <button class="btn btn-secondary" onclick="saveWriting(false)">💾 Save Draft</button>
        <button class="btn btn-primary" onclick="saveWriting(true)" ${tasks.writing ? 'disabled' : ''}>
          ${tasks.writing ? '✓ Submitted' : '✅ Submit (+15 XP)'}
        </button>
      </div>
    </div>
    <div id="writing-feedback" class="writing-feedback">
      <strong style="color:var(--success)">✨ Excellent work!</strong>
      <p style="margin-top:6px;font-size:var(--font-size-sm);color:var(--text-2)">You've completed today's writing task. Keep practising — consistent writing is the fastest way to improve your English!</p>
    </div>

    <div class="card" style="margin-top:24px">
      <div class="card-header"><span class="card-icon">💡</span><div class="card-title">Writing Tips</div></div>
      <ul style="display:grid;gap:8px">
        ${['Use a capital letter to begin each sentence and a full stop to end it.',
           'Read your sentences aloud after writing — does it sound natural?',
           'Try to use today\'s vocabulary words in your writing!',
           'Check your spelling: read each word carefully after writing.',
           'Don\'t worry about being perfect — clarity is more important.'].map(t =>
          `<li style="font-size:var(--font-size-sm);color:var(--text-2);padding:4px 0;border-bottom:1px solid var(--border-light)">✓ ${t}</li>`).join('')}
      </ul>
    </div>`;

  const area = el('writing-area');
  if (area) {
    area.addEventListener('input', () => {
      const wc = el('word-count');
      if (wc) wc.textContent = countWords(area.value) + ' words';
      State.saveWriting(writeKey, area.value);
    });
  }

  if (tasks.writing) {
    const fb = el('writing-feedback');
    if (fb) fb.classList.add('show');
  }
}

function countWords(text) {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

function saveWriting(submit) {
  const area = el('writing-area');
  if (!area) return;
  const text = area.value.trim();
  const writeKey = `${todayTopic.id}_${todayStr}`;
  State.saveWriting(writeKey, text);

  if (submit) {
    if (text.length < 10) {
      Toast.show('Too short!', 'Please write at least a few sentences before submitting.', 'error');
      return;
    }
    if (markTaskDone('writing', 15, 'Writing task submitted!')) {
      appState.progress.totalWritings++;
      State.save(appState);
      checkBadges();
      const fb = el('writing-feedback');
      if (fb) fb.classList.add('show');
      const submitBtn = document.querySelector('#view-container button.btn-primary');
      if (submitBtn) { submitBtn.textContent = '✓ Submitted'; submitBtn.disabled = true; }
    }
  } else {
    Toast.show('Draft saved!', 'Your writing has been saved.', 'success', 2000);
  }
}

// ---- View: Speaking ----
let isRecording = false;

function renderSpeaking(container) {
  const topic = todayTopic;
  const level = appState.profile.level;
  const prompt = topic.speaking[level] || topic.speaking.beginner;
  const tasks = getTasksDone();

  container.innerHTML = `
    <div class="section-header">
      <h2>🎤 Speaking Practice</h2>
      <p>Topic: <strong>${topic.icon} ${topic.title}</strong> · Level: <span style="text-transform:capitalize">${level}</span></p>
    </div>

    <div class="writing-prompt-card">
      <div class="prompt-label">🗣️ Your Speaking Prompt</div>
      <p id="speaking-prompt-text">${prompt}</p>
      <button class="tts-btn" id="prompt-tts" style="margin-top:12px" onclick="listenPrompt()">🔊 Hear the prompt read aloud</button>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span class="card-icon">📋</span><div class="card-title">Instructions</div></div>
      <ul class="speaking-instructions">
        <li>Read the prompt above carefully and think for 30 seconds.</li>
        <li>Click the microphone button below to start recording.</li>
        <li>Speak clearly and at a comfortable pace.</li>
        <li>Click again to stop and listen to your recording.</li>
        <li>Try to speak in complete sentences.</li>
      </ul>
    </div>

    <div class="card">
      <div class="recorder-area">
        <button class="record-btn" id="record-btn" onclick="toggleRecording()">🎤</button>
        <div class="record-status" id="rec-status">${tasks.speaking ? 'Practised Today ✓' : 'Ready to Record'}</div>
        <div class="record-timer" id="rec-timer">00:00</div>
        <div id="audio-output"></div>
        ${tasks.speaking ? '' : '<p style="color:var(--text-3);font-size:var(--font-size-sm)">Your recording stays on your device only.</p>'}
      </div>
    </div>

    <div class="section-header" style="margin-top:28px"><h2>💡 Speaking Tips</h2></div>
    <div class="speaking-tips">
      ${[
        ['🗣️','Speak Clearly','Slow down slightly. Clarity matters more than speed.'],
        ['😤','Breathe','Take a breath before speaking. It helps with fluency.'],
        ['🎯','Stay on Topic','Try to answer the prompt directly with examples.'],
        ['🔁','Listen Back','Replay your recording and note where to improve.'],
        ['💪','Be Confident','Mistakes are how we learn. Speak with confidence!'],
        ['📖','Use New Words','Try using today\'s vocabulary in your speech.']
      ].map(([icon, title, text]) => `
        <div class="tip-card">
          <div class="tip-icon">${icon}</div>
          <strong>${title}</strong>
          <p>${text}</p>
        </div>`).join('')}
    </div>

    <div class="section-header" style="margin-top:32px"><h2>🎭 Conversation Scenarios</h2><p>Study real dialogues — tap any card to see the full conversation.</p></div>
    <div class="scenario-grid">
      ${CONVERSATION_SCENARIOS.map((s, i) => `
        <div class="scenario-card" onclick="flipScenario(${i})" id="sc-${i}">
          <div class="scenario-inner">
            <div class="scenario-front">
              <span style="font-size:2rem">${s.icon}</span>
              <strong>${s.title}</strong>
              <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;justify-content:center">
                <span class="tag tag-primary">${s.difficulty}</span>
                <span class="tag">${s.tag}</span>
              </div>
              <p style="font-size:var(--font-size-xs);color:var(--text-3);margin-top:8px">Tap to see dialogue ↗</p>
            </div>
            <div class="scenario-back">
              <div class="scenario-dialogue">
                ${s.dialogue.map(d => `<div class="dialogue-line"><span class="dialogue-speaker">${d.speaker}:</span> <span>${d.line}</span></div>`).join('')}
              </div>
              <button class="tts-btn" style="margin-top:10px" onclick="event.stopPropagation();speakScenario(${i})">🔊 Listen to dialogue</button>
            </div>
          </div>
        </div>`).join('')}
    </div>

    <div class="section-header" style="margin-top:32px"><h2>🎚️ English Registers</h2><p>The same idea said three ways — formal, conversational, and casual.</p></div>
    <div class="level-selector" id="reg-selector">
      <button class="level-btn active" id="reg-formal" onclick="switchRegister('formal')">Formal</button>
      <button class="level-btn" id="reg-conv" onclick="switchRegister('conversational')">Conversational</button>
      <button class="level-btn" id="reg-casual" onclick="switchRegister('casual')">Casual</button>
    </div>
    <div class="card" id="reg-content">${buildRegisterHTML('formal')}</div>

    <details class="accordion-card" style="margin-top:32px">
      <summary class="accordion-summary">👅 Tongue Twisters <span style="font-size:var(--font-size-xs);color:var(--text-3);font-weight:400">— Train your mouth muscles</span></summary>
      <div style="padding:16px 0 4px">
        ${['Easy','Medium','Hard'].map(diff => `
          <div style="margin-bottom:20px">
            <div style="font-weight:700;color:var(--text-2);text-transform:uppercase;font-size:var(--font-size-xs);letter-spacing:0.06em;margin-bottom:10px">${diff}</div>
            ${TONGUE_TWISTERS.filter(t => t.difficulty === diff).map((t, ti) => `
              <div class="twister-row">
                <span class="twister-text">"${t.text}"</span>
                <button class="tts-btn" onclick="TTS.speak('${t.text.replace(/'/g,"\\'")}', ()=>{})">🔊</button>
              </div>`).join('')}
          </div>`).join('')}
      </div>
    </details>`;
}

function listenPrompt() {
  const promptEl = el('speaking-prompt-text');
  if (!promptEl) return;
  const btn = el('prompt-tts');
  TTS.speak(promptEl.textContent, () => { if (btn) btn.textContent = '🔊 Hear the prompt read aloud'; });
  if (btn) btn.textContent = '⏹ Stop listening';
}

async function toggleRecording() {
  const btn = el('record-btn');
  const status = el('rec-status');

  if (!isRecording) {
    const ok = await Recorder.start((audioURL) => {
      isRecording = false;
      if (btn) { btn.textContent = '🎤'; btn.classList.remove('recording'); }
      if (status) status.textContent = 'Recording complete! ✓';
      const output = el('audio-output');
      if (output) {
        output.innerHTML = `
          <div style="margin-top:16px">
            <audio class="audio-player" controls src="${audioURL}"></audio>
            <button class="btn btn-success" style="margin-top:12px" onclick="completeSpeaking()">
              ✅ Submit Recording (+15 XP)
            </button>
          </div>`;
      }
    });
    if (ok) {
      isRecording = true;
      if (btn) { btn.textContent = '⏹'; btn.classList.add('recording'); }
      if (status) status.textContent = 'Recording... Click to Stop';
    }
  } else {
    Recorder.stop();
    isRecording = false;
    if (btn) { btn.textContent = '🎤'; btn.classList.remove('recording'); }
  }
}

function completeSpeaking() {
  if (markTaskDone('speaking', 15, 'Speaking practice recorded!')) {
    appState.progress.totalSpeakings++;
    State.save(appState);
    checkBadges();
    Toast.show('Great speaking!', 'Your practice has been counted. Keep it up!', 'success');
    const status = el('rec-status');
    if (status) status.textContent = 'Practised Today ✓';
    const submitBtn = document.querySelector('#audio-output .btn-success');
    if (submitBtn) { submitBtn.textContent = '✓ Submitted'; submitBtn.disabled = true; }
  }
}

function flipScenario(idx) {
  const card = el('sc-' + idx);
  if (card) card.classList.toggle('flipped');
}

function speakScenario(idx) {
  const s = CONVERSATION_SCENARIOS[idx];
  const text = s.dialogue.map(d => d.speaker + '. ' + d.line).join('  ');
  TTS.speak(text, () => {});
}

let activeRegister = 'formal';
function switchRegister(reg) {
  activeRegister = reg;
  ['formal','conv','casual'].forEach(r => {
    const btn = el('reg-' + r);
    if (btn) btn.classList.remove('active');
  });
  const activeId = reg === 'formal' ? 'reg-formal' : reg === 'conversational' ? 'reg-conv' : 'reg-casual';
  const activeBtn = el(activeId);
  if (activeBtn) activeBtn.classList.add('active');
  const content = el('reg-content');
  if (content) content.innerHTML = buildRegisterHTML(reg);
}

function buildRegisterHTML(reg) {
  return REGISTER_DATA.map(r => `
    <div class="register-row">
      <span class="register-icon">${r.icon}</span>
      <div>
        <div class="register-situation">${r.situation}</div>
        <div class="register-phrase">"${r[reg]}"</div>
      </div>
      <button class="tts-btn" style="flex-shrink:0" onclick="TTS.speak('${r[reg].replace(/'/g,"\\'")}', ()=>{})">🔊</button>
    </div>`).join('');
}

// ---- View: Quiz ----
let quizTab = 'daily'; // 'daily' | 'errors'

function renderQuiz(container) {
  const topic = todayTopic;
  const tasks = getTasksDone();

  container.innerHTML = `
    <div class="section-header">
      <h2>🧩 Quiz</h2>
      <p>Topic: <strong>${topic.icon} ${topic.title}</strong></p>
    </div>
    <div class="level-selector" style="margin-bottom:20px">
      <button class="level-btn ${quizTab === 'daily' ? 'active' : ''}" onclick="switchQuizTab('daily')">🧩 Daily Quiz</button>
      <button class="level-btn ${quizTab === 'errors' ? 'active' : ''}" onclick="switchQuizTab('errors')">🔍 Error Hunt</button>
    </div>
    <div id="quiz-body"></div>`;

  renderQuizTabContent();
}

function switchQuizTab(tab) {
  quizTab = tab;
  document.querySelectorAll('.level-selector .level-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && tab === 'daily') || (i === 1 && tab === 'errors'));
  });
  renderQuizTabContent();
}

function renderQuizTabContent() {
  const body = el('quiz-body');
  if (!body) return;
  if (quizTab === 'errors') { renderErrorHunt(body); return; }

  const topic = todayTopic;
  const tasks = getTasksDone();

  if (topic.dynamic && (topic.loading || topic.quiz.length === 0)) {
    body.innerHTML = `
      <div class="card" style="text-align:center;padding:48px 24px">
        <div style="font-size:40px;margin-bottom:16px">${topic.loading ? '⏳' : '⚠️'}</div>
        <div style="font-size:var(--font-size-lg);font-weight:700;margin-bottom:8px">${topic.loading ? 'Preparing quiz questions…' : 'Quiz unavailable offline'}</div>
        <div style="color:var(--text-2);font-size:var(--font-size-sm)">${topic.loading ? 'Questions are being generated from today\'s vocabulary. Please wait a moment then try again.' : 'An internet connection is needed to generate quiz questions for this topic. Please check your connection and reload.'}</div>
        ${topic.loading ? '<div class="dyn-loading-bar" style="margin-top:20px"></div>' : '<button class="btn btn-primary" style="margin-top:20px" onclick="reloadDynamicTopic()">🔄 Try Again</button>'}
      </div>`;
    return;
  }

  quizState = { q: 0, score: 0, answered: new Array(topic.quiz.length).fill(null), done: false };

  if (tasks.quiz) {
    body.innerHTML = `
      <div class="card text-center" style="padding:40px">
        <div style="font-size:48px;margin-bottom:12px">✅</div>
        <h3 style="font-size:var(--font-size-xl);font-weight:800">Quiz Already Done Today!</h3>
        <p style="color:var(--text-2);margin-top:8px;margin-bottom:20px">You completed today's quiz. Come back tomorrow for a new one!</p>
        <button class="btn btn-primary" onclick="navigate('progress')">View My Progress →</button>
      </div>`;
    return;
  }

  renderQuestion();
}

function renderQuestion() {
  const body = el('quiz-body');
  if (!body || quizState.done) return;

  const topic = todayTopic;
  const q = topic.quiz[quizState.q];
  const total = topic.quiz.length;
  const answered = quizState.answered[quizState.q];
  const letters = ['A', 'B', 'C', 'D'];

  body.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-question-num">Question ${quizState.q + 1} of ${total}</span>
      <span class="quiz-score-pill">Score: ${quizState.score}/${quizState.q}${quizState.q > 0 ? '' : ''}</span>
    </div>
    <div class="progress-bar-wrap" style="margin-bottom:20px">
      <div class="progress-bar-fill" style="width:${(quizState.q/total)*100}%"></div>
    </div>
    <div class="question-card">
      <div class="question-text">${q.question}</div>
      <div class="options-grid">
        ${q.options.map((opt, i) => {
          let cls = '';
          if (answered !== null) {
            if (i === q.answer) cls = 'correct';
            else if (i === answered && answered !== q.answer) cls = 'wrong';
          }
          return `<button class="option-btn ${cls}" ${answered !== null ? 'disabled' : ''} onclick="answerQuestion(${i})">
            <span class="option-letter">${letters[i]}</span>${opt}
          </button>`;
        }).join('')}
      </div>
      <div class="explanation-box ${answered !== null ? 'show' : ''}" id="explanation">
        💡 <strong>Explanation:</strong> ${q.explanation}
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:16px">
      ${answered !== null && quizState.q < total - 1
        ? `<button class="btn btn-primary" onclick="nextQuestion()">Next Question →</button>`
        : answered !== null
          ? `<button class="btn btn-primary" onclick="finishQuiz()">See Results 🏆</button>`
          : ''}
    </div>`;
}

function answerQuestion(optionIdx) {
  if (quizState.answered[quizState.q] !== null) return;
  const topic = todayTopic;
  const q = topic.quiz[quizState.q];
  quizState.answered[quizState.q] = optionIdx;
  if (optionIdx === q.answer) quizState.score++;
  renderQuestion();
}

function nextQuestion() {
  quizState.q++;
  renderQuestion();
}

function finishQuiz() {
  const body = el('quiz-body');
  if (!body) return;
  quizState.done = true;

  const score = quizState.score;
  const total = todayTopic.quiz.length;
  const pct = Math.round(score / total * 100);
  const isPerfect = score === total;

  let grade, msg, emoji;
  if (pct === 100) { grade = 'perfect'; msg = 'Perfect Score! Outstanding! 🌟'; emoji = '🏆'; }
  else if (pct >= 80) { grade = 'good'; msg = 'Excellent Work! Keep it up!'; emoji = '🎉'; }
  else if (pct >= 60) { grade = 'ok'; msg = 'Good effort! Review the explanations and try again tomorrow.'; emoji = '👍'; }
  else { grade = 'poor'; msg = 'Keep practising! Every attempt makes you stronger.'; emoji = '💪'; }

  const xpEarned = 10 + (score * 2);

  body.innerHTML = `
    <div class="quiz-result show">
      <div style="font-size:64px;margin-bottom:12px">${emoji}</div>
      <div class="result-score ${grade}">${score}/${total}</div>
      <div class="result-msg">${msg}</div>
      <div class="result-sub">${pct}% correct · Earned ${xpEarned} XP</div>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="navigate('dashboard')">🏠 Go to Dashboard</button>
        <button class="btn btn-secondary" onclick="navigate('progress')">📊 View Progress</button>
      </div>
    </div>`;

  if (markTaskDone('quiz', xpEarned, 'Quiz completed!')) {
    appState.progress.totalQuizzes++;
    if (isPerfect) appState.progress.perfectQuizzes++;
    State.save(appState);
    checkBadges();
  }
}

// ---- Error Hunt Game ----
let errorHuntState = null; // { questions, idx, score, selected }

function renderErrorHunt(body) {
  if (!errorHuntState) {
    const shuffled = ERROR_GAME_DATA.slice().sort(() => Math.random() - 0.5).slice(0, 8);
    errorHuntState = { questions: shuffled, idx: 0, score: 0, selected: null };
  }
  const { questions, idx, score, selected } = errorHuntState;

  if (idx >= questions.length) {
    const pct = Math.round(score / questions.length * 100);
    body.innerHTML = `
      <div class="quiz-result show">
        <div style="font-size:64px;margin-bottom:12px">${pct === 100 ? '🏆' : pct >= 70 ? '🎉' : '💪'}</div>
        <div class="result-score ${pct === 100 ? 'perfect' : pct >= 70 ? 'good' : 'ok'}">${score}/${questions.length}</div>
        <div class="result-msg">${pct === 100 ? 'Perfect! You spotted every error!' : pct >= 70 ? 'Great error-hunting skills!' : 'Keep practising — errors get easier to spot!'}</div>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:24px;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="errorHuntState=null;renderErrorHunt(el('quiz-body'))">🔁 Play Again</button>
          <button class="btn btn-secondary" onclick="navigate('grammar')">📝 Study Common Errors</button>
        </div>
      </div>`;
    if (markTaskDone('error_hunt', 10, 'Error Hunt completed!')) { State.save(appState); checkBadges(); }
    return;
  }

  const item = questions[idx];
  body.innerHTML = `
    <div class="card" style="margin-bottom:20px">
      <div style="font-size:var(--font-size-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-2);margin-bottom:12px">🔍 Question ${idx + 1} of ${questions.length} · Score: ${score}</div>
      <p style="margin-bottom:16px;font-weight:600">Tap the <strong style="color:var(--danger)">incorrect word</strong> in this sentence:</p>
      <div class="error-sentence" id="eh-sentence">
        ${item.sentence.map((word, wi) => {
          let cls = 'word-token';
          if (selected !== null) {
            if (wi === item.errorIdx) cls += ' correct-target';
            else if (wi === selected && selected !== item.errorIdx) cls += ' selected';
          }
          return `<span class="${cls}" ${selected === null ? `onclick="selectErrorWord(${wi})"` : ''}>${word}</span>`;
        }).join(' ')}
      </div>
      ${selected !== null ? `
        <div id="eh-feedback" style="margin-top:16px;padding:14px 16px;background:var(--surface-2);border-radius:var(--radius);border:1px solid var(--border)">
          ${selected === item.errorIdx
            ? `<div style="color:var(--success);font-weight:700;margin-bottom:6px">✓ Correct! That's the error.</div>`
            : `<div style="color:var(--danger);font-weight:700;margin-bottom:6px">✗ Not quite. The error is "${item.sentence[item.errorIdx]}".</div>`}
          <p style="font-size:var(--font-size-sm);margin:0"><strong>Correction:</strong> Replace <em>${item.sentence[item.errorIdx]}</em> with <strong style="color:var(--success)">${item.correct}</strong></p>
          <p style="font-size:var(--font-size-sm);color:var(--text-2);margin-top:6px">💡 ${item.why}</p>
          <button class="btn btn-primary" style="margin-top:14px" onclick="errorHuntNext()">Next →</button>
        </div>` : ''}
    </div>`;
}

function selectErrorWord(wordIdx) {
  if (!errorHuntState || errorHuntState.selected !== null) return;
  errorHuntState.selected = wordIdx;
  if (wordIdx === errorHuntState.questions[errorHuntState.idx].errorIdx) {
    errorHuntState.score++;
  }
  renderErrorHunt(el('quiz-body'));
}

function errorHuntNext() {
  if (!errorHuntState) return;
  errorHuntState.idx++;
  errorHuntState.selected = null;
  renderErrorHunt(el('quiz-body'));
}

// ---- View: Vocabulary ----
function renderVocabulary(container) {
  const topic = todayTopic;
  const tasks = getTasksDone();

  // All words: content_data (static) + today's dynamic words (if loaded)
  const allWords = CONTENT_DATA.topics.flatMap(t =>
    t.vocabulary.map(v => ({ ...v, topicTitle: t.title, topicIcon: t.icon }))
  );
  if (topic.dynamic && !topic.loading && topic.vocabulary.length > 0) {
    const dynWords = topic.vocabulary.map(v => ({ ...v, topicTitle: topic.title, topicIcon: topic.icon }));
    allWords.unshift(...dynWords);
  }

  const todayVocab = topic.loading
    ? `<div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px">
        <div style="font-size:32px;margin-bottom:10px">⏳</div>
        <div style="font-weight:700;margin-bottom:6px">Loading today's vocabulary…</div>
        <div style="color:var(--text-2);font-size:var(--font-size-sm)">Fetching word definitions from the dictionary API.</div>
        <div class="dyn-loading-bar" style="margin-top:16px"></div>
       </div>`
    : `<div class="vocab-grid" style="margin-bottom:32px">
        ${topic.vocabulary.map((v, i) => `
          <div class="vocab-card" id="vcpage-${i}" onclick="this.classList.toggle('flipped')">
            <div class="vocab-card-inner">
              <div class="vocab-front">
                <button class="word-tts-btn" onclick="event.stopPropagation();TTS.speak('${v.word.replace(/'/g,"\\'")}. ${(v.example||'').replace(/'/g,"\\'")}', ()=>{})">🔊</button>
                <div class="vocab-word">${v.word}</div>
                <div class="vocab-pron">${v.pronunciation}</div>
                <div class="vocab-pos">${v.partOfSpeech}</div>
                <div style="margin-top:16px;color:var(--text-2);font-size:var(--font-size-sm)">Tap to reveal definition</div>
              </div>
              <div class="vocab-back">
                <div class="vocab-word" style="font-size:1em">${v.word}</div>
                <div class="vocab-meaning">${v.meaning}</div>
                <div class="vocab-example">"${v.example}"</div>
                <div class="vocab-tip"><strong>💡 Tip:</strong> ${v.tip}</div>
              </div>
            </div>
          </div>`).join('')}
       </div>`;

  const dueCount = getSRSDueWords().length;

  container.innerHTML = `
    <div class="section-header" style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
      <div>
        <h2>📚 Vocabulary Builder</h2>
        <p>Today's words from <strong>${topic.icon} ${topic.title}</strong></p>
      </div>
      <button class="btn btn-secondary" style="flex-shrink:0" onclick="startVocabReview()">
        🔁 Review Words${dueCount > 0 ? ` <span style="background:var(--danger);color:#fff;border-radius:var(--radius-full);padding:1px 8px;font-size:var(--font-size-xs)">${dueCount}</span>` : ''}
      </button>
    </div>

    <div class="section-header"><h2 style="font-size:1.2em">Today's 2 Words</h2></div>
    ${todayVocab}

    ${topic.loading ? '' : (!tasks.vocabulary ? `
      <div style="text-align:center;margin-bottom:32px">
        <button class="btn btn-primary btn-lg" onclick="completeVocabulary()">
          ✅ I've Learned These Words (+10 XP)
        </button>
      </div>` : `
      <div style="text-align:center;margin-bottom:32px">
        <span class="tag tag-success" style="padding:10px 20px;font-size:var(--font-size-sm)">✓ Vocabulary Done Today!</span>
      </div>`)}

    <div class="section-header"><h2 style="font-size:1.2em">All Vocabulary Words</h2><p>Browse all ${allWords.length} words across all topics</p></div>
    <div class="word-list">
      ${allWords.map((v, i) => `
        <div class="word-list-item" onclick="toggleWordDetail(${i})">
          <div class="word-num">${i + 1}</div>
          <div class="word-info">
            <div class="w-word">${v.word} <span style="font-size:var(--font-size-xs);color:var(--text-3);font-style:italic">${v.pronunciation}</span></div>
            <div class="w-pron">${v.topicIcon} ${v.topicTitle} · ${v.partOfSpeech}</div>
            <div class="w-meaning" id="wdetail-${i}" style="display:none;margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">
              <strong>Meaning:</strong> ${v.meaning}<br>
              <em style="color:var(--text-2);margin-top:4px;display:block">"${v.example}"</em>
              <div class="vocab-tip" style="margin-top:8px"><strong>💡</strong> ${v.tip}</div>
            </div>
          </div>
          <span style="color:var(--text-3);font-size:1.2em;margin-left:auto" id="wchev-${i}">›</span>
        </div>`).join('')}
    </div>`;
}

function toggleWordDetail(i) {
  const d = document.getElementById('wdetail-' + i);
  const c = document.getElementById('wchev-' + i);
  if (d) { const show = d.style.display === 'none'; d.style.display = show ? 'block' : 'none'; }
  if (c) c.textContent = c.textContent === '›' ? '⌄' : '›';
}

// ---- 2.4 Spaced Repetition ----
let srsSession = null; // { words, idx, showMeaning }

function getSRSDueWords() {
  const srs = appState.progress.vocabSRS || {};
  const allWords = CONTENT_DATA.topics.flatMap(t =>
    t.vocabulary.map(v => ({ ...v, topicTitle: t.title }))
  );
  const topic = todayTopic;
  if (topic.dynamic && !topic.loading && topic.vocabulary.length > 0) {
    topic.vocabulary.forEach(v => allWords.unshift({ ...v, topicTitle: topic.title }));
  }
  return allWords.filter(v => {
    const entry = srs[v.word];
    if (!entry) return true; // New word — always due
    if (entry.stage === 'mastered') return false;
    return entry.nextReview <= todayStr;
  });
}

function startVocabReview() {
  const due = getSRSDueWords();
  if (due.length === 0) {
    Toast.show('All caught up!', 'No words due for review today. Come back tomorrow!', 'success');
    return;
  }
  srsSession = { words: due.slice(0, 10), idx: 0, showMeaning: false };
  renderSRSCard();
}

function renderSRSCard() {
  const container = el('view-container');
  if (!container || !srsSession) return;
  const { words, idx } = srsSession;
  if (idx >= words.length) { srsSession = null; navigate('vocabulary'); Toast.show('Review done!', 'Great work reviewing your vocabulary! +5 XP', 'success'); markTaskDone('srs_review', 5, 'Vocab review done!'); State.save(appState); return; }
  const v = words[idx];
  const srs = appState.progress.vocabSRS[v.word];
  const stage = srs ? srs.stage : 'new';
  container.innerHTML = `
    <div class="section-header">
      <h2>🔁 Vocabulary Review</h2>
      <p>Word ${idx + 1} of ${words.length} · <span style="color:var(--primary);font-weight:700">${stage === 'new' ? 'New' : stage === 'learning' ? 'Learning' : 'Review'}</span></p>
    </div>
    <div class="srs-session-card" id="srs-card">
      <div class="srs-word">${v.word}</div>
      <div class="srs-pron">${v.pronunciation} · ${v.partOfSpeech}</div>
      <button class="tts-btn" style="margin-bottom:16px" onclick="TTS.speak('${v.word.replace(/'/g,"\\'")}', ()=>{})">🔊 Hear it</button>
      <div id="srs-meaning-area">
        <button class="btn btn-secondary" onclick="showSRSMeaning()">👁 Show Meaning</button>
      </div>
    </div>
    <button class="btn btn-secondary" onclick="srsSession=null;navigate('vocabulary')">← Back to Vocabulary</button>`;
}

function showSRSMeaning() {
  if (!srsSession) return;
  const v = srsSession.words[srsSession.idx];
  const area = el('srs-meaning-area');
  if (!area) return;
  area.innerHTML = `
    <div class="srs-meaning-reveal">
      <strong>Meaning:</strong> ${v.meaning}<br>
      <em style="margin-top:6px;display:block">"${v.example}"</em>
      <div class="vocab-tip" style="margin-top:8px"><strong>💡</strong> ${v.tip}</div>
    </div>
    <div class="srs-btn-row" style="margin-top:20px">
      <button class="srs-again-btn" onclick="srsAgain()">✗ Still Learning</button>
      <button class="srs-knew-btn" onclick="srsKnew()">✓ Got It!</button>
    </div>`;
}

function srsKnew() {
  if (!srsSession) return;
  const v = srsSession.words[srsSession.idx];
  if (!appState.progress.vocabSRS) appState.progress.vocabSRS = {};
  const cur = appState.progress.vocabSRS[v.word] || { stage: 'new' };
  const next = cur.stage === 'new' ? 'learning' : cur.stage === 'learning' ? 'mastered' : 'mastered';
  const days = next === 'learning' ? 3 : 7;
  const d = new Date(); d.setDate(d.getDate() + days);
  appState.progress.vocabSRS[v.word] = { stage: next, nextReview: d.toISOString().split('T')[0] };
  State.save(appState);
  srsSession.idx++;
  renderSRSCard();
}

function srsAgain() {
  if (!srsSession) return;
  const v = srsSession.words[srsSession.idx];
  if (!appState.progress.vocabSRS) appState.progress.vocabSRS = {};
  appState.progress.vocabSRS[v.word] = { stage: 'new', nextReview: todayStr };
  State.save(appState);
  srsSession.idx++;
  renderSRSCard();
}

function reloadDynamicTopic() {
  dynamicTopicLoading = false;
  loadDynamicTopicContent();
  navigate(currentView);
}

function completeVocabulary() {
  if (markTaskDone('vocabulary', 10, 'Vocabulary learned!')) {
    appState.progress.totalWords += 2;
    State.save(appState);
    checkBadges();
    navigate('vocabulary');
  }
}

// ---- View: Grammar ----
function renderGrammar(container) {
  const cats = GRAMMAR_DATA.categories;
  const cat = cats.find(c => c.id === grammarCatId) || cats[0];

  const catsHTML = cats.map(c => `
    <button class="gram-cat-btn ${c.id === cat.id ? 'active' : ''}" onclick="selectGrammarCat('${c.id}')"
      style="${c.id === cat.id ? `border-color:${c.color};background:${c.color}18;color:${c.color}` : ''}">
      ${c.icon} ${c.title}
    </button>`).join('');

  const todayGramTask = getDailyTaskSet(todayStr).find(t => t.view === 'grammar' && t.gramCat === grammarCatId);
  const tasksDone = getTasksDone();
  const gramTaskBtnHTML = todayGramTask && !tasksDone[todayGramTask.key]
    ? `<button class="btn btn-primary" style="margin-top:20px" onclick="completeGrammarTask('${todayGramTask.key}','${todayGramTask.name}')">✓ Mark "${todayGramTask.name}" Complete · ${todayGramTask.xp}</button>`
    : (todayGramTask && tasksDone[todayGramTask.key] ? `<div style="margin-top:20px;color:var(--success);font-weight:700">✓ ${todayGramTask.name} completed today!</div>` : '');

  container.innerHTML = `
    <div class="section-header">
      <h2>📝 Grammar Guide</h2>
      <p>Master English grammar — verbs, tenses, sentence structure, articles, and more.</p>
    </div>
    <div class="gram-cats-wrap">${catsHTML}</div>
    <div id="gram-content">${buildGrammarCatHTML(cat)}</div>
    ${gramTaskBtnHTML}`;
}

function completeGrammarTask(key, name) {
  if (markTaskDone(key, 10, name + ' completed!')) {
    State.save(appState);
    checkBadges();
    Toast.show('Great work!', name + ' marked complete. +10 XP!', 'success');
    navigate('grammar');
  }
}

function selectGrammarCat(id) {
  grammarCatId = id;
  const cats = GRAMMAR_DATA.categories;
  const cat = cats.find(c => c.id === id) || cats[0];

  document.querySelectorAll('.gram-cat-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.style.borderColor = '';
    btn.style.background = '';
    btn.style.color = '';
  });
  const activeBtn = document.querySelector(`.gram-cat-btn[onclick="selectGrammarCat('${id}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.style.borderColor = cat.color;
    activeBtn.style.background = cat.color + '18';
    activeBtn.style.color = cat.color;
  }
  const content = document.getElementById('gram-content');
  if (content) { content.style.animation = 'none'; content.offsetHeight; content.style.animation = ''; content.innerHTML = buildGrammarCatHTML(cat); }

  const todayGramTask = getDailyTaskSet(todayStr).find(t => t.view === 'grammar' && t.gramCat === id);
  const tasksDone = getTasksDone();
  let taskBtn = document.getElementById('gram-task-btn');
  if (!taskBtn) {
    taskBtn = document.createElement('div');
    taskBtn.id = 'gram-task-btn';
    const vc = document.getElementById('view-container');
    if (vc) vc.appendChild(taskBtn);
  }
  if (todayGramTask && !tasksDone[todayGramTask.key]) {
    taskBtn.innerHTML = `<button class="btn btn-primary" style="margin-top:20px" onclick="completeGrammarTask('${todayGramTask.key}','${todayGramTask.name}')">✓ Mark "${todayGramTask.name}" Complete · ${todayGramTask.xp}</button>`;
  } else if (todayGramTask && tasksDone[todayGramTask.key]) {
    taskBtn.innerHTML = `<div style="margin-top:20px;color:var(--success);font-weight:700">✓ ${todayGramTask.name} completed today!</div>`;
  } else {
    taskBtn.innerHTML = '';
  }
}

function buildGrammarCatHTML(cat) {
  return `
    <div class="gram-cat-header">
      <span style="font-size:36px">${cat.icon}</span>
      <div>
        <h3 style="color:${cat.color}">${cat.title}</h3>
        <p>${cat.desc}</p>
      </div>
    </div>
    ${cat.sections.map(sec => buildGrammarSectionHTML(sec, cat.color)).join('')}`;
}

function buildGrammarSectionHTML(sec, color) {
  let body = '';

  if (sec.note) body += `<div class="gram-note">💡 ${sec.note}</div>`;
  if (sec.intro) body += `<p class="gram-intro">${sec.intro}</p>`;

  switch (sec.type) {
    case 'type-cards':
      body += `<div class="gram-type-cards">${sec.items.map(item => `
        <div class="gram-type-card">
          <div class="gram-type-icon">${item.icon}</div>
          <div class="gram-type-name">${item.name}</div>
          <div class="gram-type-desc">${item.desc}</div>
          <div class="gram-tags">${item.tags.map(t => `<span class="gram-tag">${t}</span>`).join('')}</div>
        </div>`).join('')}</div>`;
      break;

    case 'table':
      body += `<div style="overflow-x:auto"><table class="gram-table">
        <thead><tr>${sec.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${sec.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;
      break;

    case 'kv-table':
      body += `<div style="overflow-x:auto"><table class="gram-table">
        <thead><tr>${sec.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${sec.rows.map(r => `<tr><td><strong>${r.k}</strong></td><td>${r.v}</td><td style="font-style:italic">${r.ex}</td></tr>`).join('')}</tbody>
      </table></div>`;
      break;

    case 'tenses':
      body += sec.items.map(t => `
        <div class="gram-tense-card" style="border-left-color:${color}">
          <div class="gram-tense-name" style="color:${color}">${t.name}</div>
          <div class="gram-tense-struct"><span class="gram-label">Structure: </span><code>${t.structure}</code></div>
          <div class="gram-tense-use"><span class="gram-label">Use: </span>${t.use}</div>
          <div style="margin-top:8px">${t.examples.map(e => `<div class="gram-example-item">→ ${e}</div>`).join('')}</div>
        </div>`).join('');
      break;

    case 'article-list':
      body += sec.items.map(item => `
        <div class="gram-article-card" style="border-left-color:${item.color}">
          <div class="gram-article-name" style="color:${item.color}">${item.name}</div>
          <div class="gram-rule">${item.rule}</div>
          <div class="gram-ex-list">${item.examples.map(e => `<span class="gram-ex-pill">${e}</span>`).join('')}</div>
          <div class="gram-note" style="margin-top:8px;margin-bottom:0">💡 ${item.note}</div>
        </div>`).join('');
      break;

    case 'mistakes':
      body += sec.items.map(m => `
        <div class="gram-mistake-card">
          <div class="gram-wrong">${m.wrong}</div>
          <div class="gram-right">${m.right}</div>
          ${m.tip ? `<div class="gram-note" style="margin-bottom:0">💡 ${m.tip}</div>` : ''}
        </div>`).join('');
      break;

    case 'prep-table':
      body += `<div style="overflow-x:auto"><table class="gram-table">
        <thead><tr><th>Preposition</th><th>Rule / Use</th><th>Example</th></tr></thead>
        <tbody>${sec.rows.map(r => `<tr><td><strong>${r.word}</strong></td><td>${r.rule}</td><td style="font-style:italic">${r.example}</td></tr>`).join('')}</tbody>
      </table></div>`;
      break;

    case 'breakdown':
      body += sec.items.map(b => `
        <div class="gram-breakdown-card">
          <div class="gram-bd-label">${b.label}</div>
          <div class="gram-bd-sentence">"${b.sentence}"</div>
          <div class="gram-bd-parts">${b.parts.map(p => `<span class="gram-part-tag">${p}</span>`).join('')}</div>
        </div>`).join('');
      break;

    case 'sent-types':
      body += sec.items.map(t => `
        <div class="gram-sent-type-card">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="font-size:20px">${t.icon}</span>
            <div class="gram-st-name">${t.name}</div>
          </div>
          <div class="gram-st-desc">${t.desc}</div>
          <div class="gram-tense-struct"><span class="gram-label">Pattern: </span><code>${t.pattern}</code></div>
          <div class="gram-st-sentence">→ "${t.example}"</div>
        </div>`).join('');
      break;

    case 'q-types':
      body += sec.items.map(q => `
        <div class="gram-tense-card" style="border-left-color:${color}">
          <div class="gram-tense-name" style="color:${color}">${q.name}</div>
          <div class="gram-tense-struct"><span class="gram-label">Pattern: </span><code>${q.rule}</code></div>
          <div style="margin-top:8px">${q.examples.map(e => `<div class="gram-example-item">→ ${e}</div>`).join('')}</div>
        </div>`).join('');
      break;

    case 'neg-table':
      body += `<div style="overflow-x:auto"><table class="gram-table">
        <thead><tr><th>Positive</th><th>Negative (with "not")</th></tr></thead>
        <tbody>${sec.rows.map(r => `<tr><td>${r.positive}</td><td>${r.negative}</td></tr>`).join('')}</tbody>
      </table></div>`;
      break;

    case 'compound-list':
      body += sec.items.map(i => `
        <div class="gram-comp-card">
          <div class="gram-comp-icon">${i.icon}</div>
          <div>
            <div class="gram-comp-type">${i.type} Sentence</div>
            <div class="gram-comp-desc">${i.desc}</div>
            <div class="gram-comp-example">"${i.example}"</div>
          </div>
        </div>`).join('');
      break;

    case 'pos-grid':
      body += `<div class="gram-pos-grid">${sec.parts.map(p => `
        <div class="gram-pos-card" style="border-top-color:${p.color}">
          <div class="gram-pos-icon">${p.icon}</div>
          <div class="gram-pos-name" style="color:${p.color}">${p.name}</div>
          <div class="gram-pos-desc">${p.desc}</div>
          <div class="gram-tags">${p.examples.map(e => `<span class="gram-tag" style="background:${p.color}18;color:${p.color}">${e}</span>`).join('')}</div>
          <div class="gram-pos-sentence">${p.sentence}</div>
        </div>`).join('')}</div>`;
      break;

    case 'ident-table':
      body += `<div style="overflow-x:auto"><table class="gram-table">
        <thead><tr><th>Part of Speech</th><th>Ask this question</th><th>Quick Clue</th><th>Example</th></tr></thead>
        <tbody>${sec.rows.map(r => `<tr><td><strong>${r.pos}</strong></td><td>${r.question}</td><td>${r.clue}</td><td style="font-style:italic">${r.example}</td></tr>`).join('')}</tbody>
      </table></div>`;
      break;
  }

  return `
    <div class="gram-section">
      <div class="gram-section-header" onclick="toggleGramSec('${sec.id}')">
        <h4>${sec.title}</h4>
        <span class="gram-chevron" id="gchev-${sec.id}">▾</span>
      </div>
      <div class="gram-section-body" id="gsec-${sec.id}">${body}</div>
    </div>`;
}

function toggleGramSec(id) {
  const body = document.getElementById('gsec-' + id);
  const chev = document.getElementById('gchev-' + id);
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (chev) chev.textContent = isOpen ? '▸' : '▾';
}

// ---- View: Progress ----
function renderProgress(container) {
  const p = appState.progress;
  const xpLevel = getXPLevel(p.xp);
  const nextLevel = XP_LEVELS.find(l => l.min > p.xp) || XP_LEVELS[XP_LEVELS.length - 1];
  const xpPct = nextLevel.min > p.xp
    ? Math.round(((p.xp - xpLevel.min) / (nextLevel.min - xpLevel.min)) * 100)
    : 100;

  const totalDays = Object.keys(p.dailyTasks).length;

  container.innerHTML = `
    <div class="section-header"><h2>📊 My Progress</h2><p>Track your learning journey and achievements.</p></div>

    <div class="progress-hero">
      <span class="level-icon">${xpLevel.icon}</span>
      <div class="level-name">${xpLevel.name}</div>
      <div class="xp-display">${p.xp} XP · ${nextLevel.min > p.xp ? `${nextLevel.min - p.xp} XP to ${nextLevel.name}` : 'Maximum level reached!'}</div>
      <div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${xpPct}%"></div></div>
    </div>

    <div class="stats-grid" style="margin-bottom:28px">
      ${[
        ['🔥', p.streak, 'Day Streak'],
        ['📖', p.totalReadings, 'Passages Read'],
        ['✍️', p.totalWritings, 'Writings Done'],
        ['🎤', p.totalSpeakings, 'Recordings'],
        ['🧩', p.totalQuizzes, 'Quizzes Done'],
        ['📝', p.totalWords, 'Words Learned'],
        ['💯', p.perfectQuizzes, 'Perfect Quizzes'],
        ['📅', totalDays, 'Days Practiced'],
      ].map(([icon, val, lbl]) => `
        <div class="stats-tile">
          <div style="font-size:24px;margin-bottom:4px">${icon}</div>
          <div class="st-val">${val}</div>
          <div class="st-lbl">${lbl}</div>
        </div>`).join('')}
    </div>

    <div class="section-header"><h2 style="font-size:1.2em">🏅 Badges & Achievements</h2><p>${p.badges.length} of ${BADGES.length} unlocked</p></div>
    <div class="badges-grid">
      ${BADGES.map(b => {
        const earned = p.badges.includes(b.id);
        return `
          <div class="badge-tile ${earned ? 'earned' : 'locked'}" title="${b.desc}">
            <span class="badge-icon">${b.icon}</span>
            <div class="badge-name">${b.name}</div>
            <div class="badge-desc">${b.desc}</div>
            ${earned ? '<div style="color:var(--warning);font-size:var(--font-size-xs);margin-top:4px;font-weight:700">UNLOCKED ✓</div>' : '<div style="color:var(--text-3);font-size:var(--font-size-xs);margin-top:4px">Locked</div>'}
          </div>`;
      }).join('')}
    </div>

    <div class="section-header" style="margin-top:28px"><h2 style="font-size:1.2em">⚙️ Profile Settings</h2></div>
    <div class="card">
      <div style="display:grid;gap:16px">
        <div>
          <label style="font-weight:700;font-size:var(--font-size-sm);display:block;margin-bottom:8px;color:var(--text-2)">DISPLAY NAME</label>
          <input type="text" id="edit-name" value="${appState.profile.name}" style="padding:10px 14px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:var(--font-size);width:100%;max-width:300px;color:var(--text);background:var(--surface-2);font-family:var(--font)">
        </div>
        <div>
          <label style="font-weight:700;font-size:var(--font-size-sm);display:block;margin-bottom:8px;color:var(--text-2)">FONT SIZE</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${['normal','large','xlarge'].map(fs => `
              <button onclick="updateProfile('fontSize','${fs}')" style="padding:8px 16px;border:2px solid ${appState.profile.fontSize===fs?'var(--primary)':'var(--border)'};border-radius:var(--radius-full);background:${appState.profile.fontSize===fs?'var(--primary-light)':'var(--surface-2)'};color:${appState.profile.fontSize===fs?'var(--primary-dark)':'var(--text-2)'};font-weight:700;font-size:var(--font-size-sm);cursor:pointer">
                ${{normal:'Aa Normal',large:'Aa Large',xlarge:'Aa Extra Large'}[fs]}
              </button>`).join('')}
          </div>
        </div>
        <div>
          <button class="btn btn-primary" onclick="saveProfileSettings()">Save Settings</button>
          <button class="btn btn-secondary" style="margin-left:8px;color:var(--danger);border-color:var(--danger)" onclick="resetApp()">Reset Progress</button>
        </div>
      </div>
    </div>`;
}

function updateProfile(key, value) {
  appState.profile[key] = value;
  applyProfileSettings();
  navigate('progress');
}

function saveProfileSettings() {
  const nameInput = el('edit-name');
  if (nameInput) appState.profile.name = nameInput.value.trim() || 'Learner';
  State.save(appState);
  applyProfileSettings();
  updateTopBar();
  Toast.show('Settings saved!', 'Your profile has been updated.', 'success');
  navigate('progress');
}

function applyProfileSettings() {
  const { theme, fontSize } = appState.profile;
  document.documentElement.setAttribute('data-theme', theme);
  document.body.className = '';
  if (fontSize === 'large') document.body.classList.add('font-large');
  if (fontSize === 'xlarge') document.body.classList.add('font-xlarge');
  State.save(appState);
}

function resetApp() {
  if (!confirm('Are you sure you want to reset all progress? This cannot be undone.')) return;
  localStorage.removeItem(State.KEY);
  location.reload();
}

// ---- Theme Toggle ----
function toggleTheme() {
  appState.profile.theme = appState.profile.theme === 'light' ? 'dark' : 'light';
  applyProfileSettings();
  const btn = el('theme-toggle');
  if (btn) btn.textContent = appState.profile.theme === 'dark' ? '☀️' : '🌙';
}

// ---- Setup Wizard ----
let setupData = { name: '', level: 'beginner', theme: 'light', fontSize: 'normal' };

function initSetup() {
  showSetupStep(1);

  // Option card clicks
  document.querySelectorAll('#setup-level .option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#setup-level .option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      setupData.level = card.dataset.value;
    });
  });

  document.querySelectorAll('#setup-theme .option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('#setup-theme .option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      setupData.theme = card.dataset.value;
      document.documentElement.setAttribute('data-theme', setupData.theme);
    });
  });
}

function showSetupStep(n) {
  document.querySelectorAll('.setup-step').forEach(s => s.classList.remove('active'));
  const step = document.getElementById('step-' + n);
  if (step) step.classList.add('active');
  document.querySelectorAll('.step-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i < n);
  });
}

function setupNext(n) {
  if (n === 1) {
    const nameInput = el('setup-name');
    const name = nameInput ? nameInput.value.trim() : '';
    if (!name) { Toast.show('Name required', 'Please enter your name to continue.', 'error'); return; }
    setupData.name = name;
  }
  showSetupStep(n + 1);
}

function setupBack(n) { showSetupStep(n - 1); }

function setupFinish() {
  const fontSizeEl = document.querySelector('#setup-font input:checked');
  if (fontSizeEl) setupData.fontSize = fontSizeEl.value;

  appState = State.defaults();
  appState.profile = { ...appState.profile, ...setupData };
  appState.progress.lastActiveDate = todayStr;
  appState.progress.streak = 1;
  State.save(appState);

  todayTopic = buildSeedTopic(getDailySeedIdx());

  hide('setup-overlay');
  show('app');
  applyProfileSettings();
  updateTopBar();
  navigate('dashboard');
  loadDynamicTopicContent();

  setTimeout(() => {
    Toast.show(`Welcome, ${appState.profile.name}! 🎉`, 'Your English journey begins today! Complete all 5 daily tasks to earn XP.', 'success', 5000);
  }, 500);
}

// ---- Topic Override ----
function resolveTopicForToday() {
  const override = appState && appState.profile.topicOverride;
  if (override && override.date === todayStr) {
    if (override.seedIdx !== undefined) {
      return buildSeedTopic(override.seedIdx);
    }
    if (override.idx !== undefined) {
      return buildSeedTopic(override.idx % DAILY_TOPIC_SEEDS.length);
    }
  }
  return buildSeedTopic(getDailySeedIdx());
}

function changeTopic(seedIdx) {
  dynamicTopicLoading = false;
  appState.profile.topicOverride = { seedIdx: seedIdx, date: todayStr };
  State.save(appState);
  todayTopic = buildSeedTopic(seedIdx);
  loadDynamicTopicContent();
  const wrap = el('topic-picker-wrap');
  if (wrap) wrap.style.display = 'none';
  navigate('dashboard');
  Toast.show(todayTopic.icon + ' ' + todayTopic.title, 'Loading fresh content for this topic…', 'info', 3000);
}

function resetToAutoTopic() {
  dynamicTopicLoading = false;
  appState.profile.topicOverride = null;
  State.save(appState);
  todayTopic = buildSeedTopic(getDailySeedIdx());
  loadDynamicTopicContent();
  navigate('dashboard');
  Toast.show('Auto topic restored!', todayTopic.icon + ' ' + todayTopic.title, 'success', 3000);
}

function toggleTopicPicker() {
  const wrap = el('topic-picker-wrap');
  if (!wrap) return;
  const open = wrap.style.display !== 'none';
  wrap.style.display = open ? 'none' : 'block';
  const btn = el('tp-toggle-btn');
  if (btn) btn.textContent = open ? '🔄 Change Topic' : '✕ Close Picker';
}

function filterTopics() {
  const search = (el('topic-search') ? el('topic-search').value : '').toLowerCase();
  document.querySelectorAll('#topic-picker-grid .topic-picker-card').forEach(card => {
    const text = (card.dataset.title || '').toLowerCase();
    card.style.display = (!search || text.includes(search)) ? '' : 'none';
  });
}

// ---- Main Init ----
function init() {
  todayStr = getDateStr();
  todayTopic = buildSeedTopic(getDailySeedIdx()); // placeholder until appState loads

  appState = State.load();

  if (!appState || !appState.profile.name) {
    show('setup-overlay');
    hide('app');
    initSetup();
    return;
  }

  todayTopic = resolveTopicForToday();

  hide('setup-overlay');
  show('app');
  updateStreak();
  applyProfileSettings();
  updateTopBar();

  const themeBtn = el('theme-toggle');
  if (themeBtn) themeBtn.textContent = appState.profile.theme === 'dark' ? '☀️' : '🌙';

  navigate('dashboard');

  // Kick off Wikipedia + Dictionary fetch in background
  loadDynamicTopicContent();
}

// ---- Mobile Menu ----
function toggleSidebar() {
  const sidebar = el('sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', init);
