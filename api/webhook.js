const TOKEN = process.env.WA_ACCESS_TOKEN;
const PHONE_ID = process.env.WA_PHONE_NUMBER_ID;
const VERIFY_TOKEN = process.env.WA_VERIFY_TOKEN || 'provodnik2026';

// ── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ = {
  ru: {
    greeting: `Здравствуйте! Я помощник Елены Гурьяновой — AI Automation Specialist.\n\nВыберите тему:\n\n1️⃣ Услуги и цены\n2️⃣ Как это работает\n3️⃣ Примеры кейсов\n4️⃣ Связаться с Еленой\n5️⃣ О Provodnik`,
    menu: `Выберите тему:\n\n1️⃣ Услуги и цены\n2️⃣ Как это работает\n3️⃣ Примеры кейсов\n4️⃣ Связаться с Еленой\n5️⃣ О Provodnik`,
    '1': `*Услуги:*\n\n• Чат-бот для бизнеса (Telegram / WhatsApp)\n• Голосовой ИИ-агент (Vapi.ai + ElevenLabs)\n• Автоматизация CRM и заявок\n• Квалификация лидов\n\nЦены — от €500. Зависят от сложности.\n\nОбсудить задачу: t.me/HelenGurianova`,
    '2': `*Как это работает:*\n\n1. Встреча — обсуждаем задачу\n2. ТЗ — описываем логику бота\n3. Разработка — 7–14 дней\n4. Тест — проверяем вместе\n5. Запуск + поддержка\n\nЯзыки бота: RU · IT · EN`,
    '3': `*Реальные кейсы:*\n\n🏥 Медицина — голосовой агент 24/7\n🚗 Автосалон — квалификация лидов\n❄️ Кондиционеры — заявки в пик сезона\n🦷 Стоматология — онлайн-запись\n👥 HR-агентство — скрининг кандидатов\n\nПодробнее: provodnik.eu`,
    '4': `*Связаться с Еленой:*\n\nTelegram: t.me/HelenGurianova\nEmail: elenag142@gmail.com\nSite: provodnik.eu\nInstagram: @elena.automator`,
    '5': `*Provodnik — AI Automation*\n\nЕлена Гурьянова · AI Automation & Chatbot Specialist\nИталия (Ломбардия) · 3 языка · 10+ ниш\n\nprovodnik.eu`,
    unknown: `Напишите цифру от 1 до 5:\n\n1️⃣ Услуги и цены\n2️⃣ Как это работает\n3️⃣ Примеры кейсов\n4️⃣ Связаться с Еленой\n5️⃣ О Provodnik`,
  },
  it: {
    greeting: `Ciao! Sono l'assistente di Elena Gurianova — AI Automation Specialist.\n\nScegli un argomento:\n\n1️⃣ Servizi e prezzi\n2️⃣ Come funziona\n3️⃣ Casi reali\n4️⃣ Contatta Elena\n5️⃣ Chi siamo`,
    menu: `Scegli un argomento:\n\n1️⃣ Servizi e prezzi\n2️⃣ Come funziona\n3️⃣ Casi reali\n4️⃣ Contatta Elena\n5️⃣ Chi siamo`,
    '1': `*Servizi:*\n\n• Chatbot (Telegram / WhatsApp)\n• Agente vocale AI\n• Automazione CRM e lead\n• Qualificazione contatti\n\nPrezzi — da €500.\n\nScrivimi: t.me/HelenGurianova`,
    '2': `*Come funziona:*\n\n1. Incontro — discutiamo il caso\n2. Brief — definiamo la logica\n3. Sviluppo — 7–14 giorni\n4. Test insieme\n5. Lancio + supporto\n\nLingue: RU · IT · EN`,
    '3': `*Casi reali:*\n\n🏥 Medicina — agente vocale 24/7\n🚗 Concessionaria — qualifica lead\n❄️ Climatizzatori — picco stagionale\n🦷 Dentistica — prenotazione online\n👥 HR — screening candidati\n\nDettagli: provodnik.eu`,
    '4': `*Contatta Elena:*\n\nTelegram: t.me/HelenGurianova\nEmail: elenag142@gmail.com\nSito: provodnik.eu\nInstagram: @elena.automator`,
    '5': `*Provodnik — AI Automation*\n\nElena Gurianova · AI Automation Specialist\nItalia (Lombardia) · 3 lingue · 10+ nicchie\n\nprovodnik.eu`,
    unknown: `Scrivi un numero da 1 a 5:\n\n1️⃣ Servizi e prezzi\n2️⃣ Come funziona\n3️⃣ Casi reali\n4️⃣ Contatta Elena\n5️⃣ Chi siamo`,
  },
  en: {
    greeting: `Hello! I'm Elena Gurianova's assistant — AI Automation Specialist.\n\nChoose a topic:\n\n1️⃣ Services & pricing\n2️⃣ How it works\n3️⃣ Real cases\n4️⃣ Contact Elena\n5️⃣ About Provodnik`,
    menu: `Choose a topic:\n\n1️⃣ Services & pricing\n2️⃣ How it works\n3️⃣ Real cases\n4️⃣ Contact Elena\n5️⃣ About Provodnik`,
    '1': `*Services:*\n\n• Business chatbot (Telegram / WhatsApp)\n• AI voice agent\n• CRM & lead automation\n• Lead qualification\n\nPricing — from €500.\n\nContact: t.me/HelenGurianova`,
    '2': `*How it works:*\n\n1. Meeting — discuss your case\n2. Brief — define bot logic\n3. Development — 7–14 days\n4. Testing together\n5. Launch + support\n\nLanguages: RU · IT · EN`,
    '3': `*Real cases:*\n\n🏥 Medicine — voice agent 24/7\n🚗 Car dealership — lead qualification\n❄️ Air conditioning — peak season\n🦷 Dentistry — online booking\n👥 HR agency — candidate screening\n\nDetails: provodnik.eu`,
    '4': `*Contact Elena:*\n\nTelegram: t.me/HelenGurianova\nEmail: elenag142@gmail.com\nWebsite: provodnik.eu\nInstagram: @elena.automator`,
    '5': `*Provodnik — AI Automation*\n\nElena Gurianova · AI Automation Specialist\nItaly (Lombardia) · 3 languages · 10+ niches\n\nprovodnik.eu`,
    unknown: `Write a number 1–5:\n\n1️⃣ Services & pricing\n2️⃣ How it works\n3️⃣ Real cases\n4️⃣ Contact Elena\n5️⃣ About Provodnik`,
  },
};

function detectLang(text) {
  if (/[а-яё]/i.test(text)) return 'ru';
  if (/\b(ciao|come|cosa|voglio|grazie|servizi|prezzi)\b/i.test(text)) return 'it';
  return 'en';
}

function getReply(text) {
  const clean = text.trim();
  const lang = detectLang(clean);
  const faq = FAQ[lang];

  if (/^(hi|hello|ciao|привет|start|\/start|begin|inizio)$/i.test(clean)) return faq.greeting;
  if (/^[1-5]$/.test(clean)) return faq[clean];
  if (/^(menu|меню|back|назад)$/i.test(clean)) return faq.menu;

  if (/цен|стоит|prezzo|costo|price|cost/i.test(clean)) return faq['1'];
  if (/как работ|come funziona|how it work/i.test(clean)) return faq['2'];
  if (/кейс|пример|caso|example/i.test(clean)) return faq['3'];
  if (/контакт|contact|telegram|elena/i.test(clean)) return faq['4'];
  if (/provodnik|о вас|chi sei|about/i.test(clean)) return faq['5'];
  if (/услуг|бот|chatbot|автоматиз|servizi|automat/i.test(clean)) return faq['1'];

  return faq.greeting;
}

async function sendMessage(to, text) {
  const res = await fetch(`https://graph.facebook.com/v19.0/${PHONE_ID}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text },
    }),
  });
  return res.json();
}

// ── Vercel handler ───────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.sendStatus(403);
  }

  if (req.method === 'POST') {
    res.sendStatus(200);

    const msg = req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    if (!msg || msg.type !== 'text') return;

    const reply = getReply(msg.text.body);
    await sendMessage(msg.from, reply);
  }
}
