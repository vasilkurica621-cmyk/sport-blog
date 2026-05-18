// =============================================
//  SportZone — i18n (uk / ru / en / cs)
// =============================================
const LANG_DICT = {
  // --- Navigation ---
  nav_home:       { uk:'Головна',   ru:'Главная',   en:'Home',        cs:'Domů'       },
  nav_categories: { uk:'Категорії', ru:'Категории', en:'Categories',  cs:'Kategorie'  },
  nav_articles:   { uk:'Статті',    ru:'Статьи',    en:'Articles',    cs:'Články'      },
  nav_about:      { uk:'Про блог',  ru:'О блоге',   en:'About',       cs:'O blogu'    },

  // --- Hero ---
  hero_tag:  { uk:'Топ стаття тижня', ru:'Топ статья недели', en:'Top article of the week', cs:'Nejlepší článek týdne' },
  hero_desc: {
    uk:'Повний посібник для початківців: від вибору програми до перших результатів за 30 днів.',
    ru:'Полный гид для новичков: от выбора программы до первых результатов за 30 дней.',
    en:'Complete guide for beginners: from choosing a program to first results in 30 days.',
    cs:'Kompletní průvodce pro začátečníky: od výběru programu k prvním výsledkům za 30 dní.'
  },
  hero_btn: { uk:'Читати статтю', ru:'Читать статью', en:'Read article', cs:'Číst článek' },

  // --- Stats ---
  stat_articles:   { uk:'Статей',    ru:'Статей',     en:'Articles',   cs:'Článků'    },
  stat_categories: { uk:'Категорій', ru:'Категорий',  en:'Categories', cs:'Kategorií' },
  stat_readers:    { uk:'Читачів',   ru:'Читателей',  en:'Readers',    cs:'Čtenářů'   },
  stat_years:      { uk:'3 роки',    ru:'3 года',     en:'3 years',    cs:'3 roky'    },
  stat_experience: { uk:'Досвіду',   ru:'Опыта',      en:'Experience', cs:'Zkušeností'},

  // --- Section titles ---
  section_categories: { uk:'Категорії',      ru:'Категории',        en:'Categories',      cs:'Kategorie'        },
  section_latest:     { uk:'Останні статті', ru:'Последние статьи', en:'Latest Articles', cs:'Nejnovější články' },
  btn_all_articles:   { uk:'Усі статті',     ru:'Все статьи',       en:'All articles',    cs:'Všechny články'   },

  // --- Category names ---
  cat_all:        { uk:'Всі',        ru:'Все',        en:'All',       cs:'Vše'        },
  cat_fitness:    { uk:'Фітнес',     ru:'Фитнес',     en:'Fitness',   cs:'Fitness'    },
  cat_football:   { uk:'Футбол',     ru:'Футбол',     en:'Football',  cs:'Fotbal'     },
  cat_nutrition:  { uk:'Харчування', ru:'Питание',    en:'Nutrition', cs:'Výživa'     },
  cat_mma:        { uk:'MMA / Бокс', ru:'MMA / Бокс', en:'MMA / Box', cs:'MMA / Box'  },
  cat_running:    { uk:'Біг',        ru:'Бег',        en:'Running',   cs:'Běh'        },
  cat_basketball: { uk:'Баскетбол',  ru:'Баскетбол',  en:'Basketball',cs:'Basketbal'  },

  // --- Category counts ---
  cat_count_football:   { uk:'24 статті',  ru:'24 статьи',  en:'24 articles', cs:'24 článků' },
  cat_count_fitness:    { uk:'31 стаття',  ru:'31 статья',  en:'31 articles', cs:'31 článků' },
  cat_count_nutrition:  { uk:'19 статей',  ru:'19 статей',  en:'19 articles', cs:'19 článků' },
  cat_count_mma:        { uk:'17 статей',  ru:'17 статей',  en:'17 articles', cs:'17 článků' },
  cat_count_running:    { uk:'22 статті',  ru:'22 статьи',  en:'22 articles', cs:'22 článků' },
  cat_count_basketball: { uk:'15 статей',  ru:'15 статей',  en:'15 articles', cs:'15 článků' },

  // --- Quote ---
  quote_text: {
    uk:'"Біль, який ти відчуваєш сьогодні, стане силою, яку ти відчуєш завтра."',
    ru:'"Боль, которую ты чувствуешь сегодня, станет силой, которую ты почувствуешь завтра."',
    en:'"The pain you feel today will be the strength you feel tomorrow."',
    cs:'"Bolest, kterou dnes cítíš, se stane silou, kterou zítra pocítíš."'
  },

  // --- About ---
  about_title: { uk:'Про блог', ru:'О блоге', en:'About', cs:'O blogu' },
  about_p1: {
    uk:'SportZone — це місце, де спорт стає способом життя. Ми пишемо про тренування, харчування, мотивацію та відновлення. Наша мета — допомогти кожному стати кращою версією себе.',
    ru:'SportZone — это место, где спорт становится образом жизни. Мы пишем о тренировках, питании, мотивации и восстановлении. Наша цель — помочь каждому стать лучшей версией себя.',
    en:'SportZone is a place where sport becomes a way of life. We write about workouts, nutrition, motivation and recovery. Our goal is to help everyone become the best version of themselves.',
    cs:'SportZone je místo, kde se sport stává způsobem života. Píšeme o trénincích, výživě, motivaci a regeneraci. Naším cílem je pomoci každému stát se lepší verzí sebe sama.'
  },
  about_p2: {
    uk:'Тут ви знайдете чесні огляди, науково обґрунтовані поради та надихаючі історії людей, які обрали спорт.',
    ru:'Здесь вы найдёте честные обзоры, научно обоснованные советы и вдохновляющие истории людей, выбравших спорт.',
    en:'Here you will find honest reviews, science-based advice and inspiring stories of people who chose sport.',
    cs:'Zde najdete poctivé recenze, vědecky podložené rady a inspirativní příběhy lidí, kteří si vybrali sport.'
  },
  about_btn: { uk:'Почати читати', ru:'Начать читать', en:'Start reading', cs:'Začít číst' },

  // --- Newsletter ---
  newsletter_title: {
    uk:'Отримуй кращі статті на пошту', ru:'Получай лучшие статьи на почту',
    en:'Get the best articles by email', cs:'Dostávej nejlepší články na mail'
  },
  newsletter_desc: {
    uk:'Жодного спаму — лише корисний контент раз на тиждень.',
    ru:'Никакого спама — только полезный контент раз в неделю.',
    en:'No spam — only useful content once a week.',
    cs:'Žádný spam — jen užitečný obsah jednou týdně.'
  },
  newsletter_ph:    { uk:'Твій email',   ru:'Твой email',   en:'Your email',  cs:'Tvůj email'   },
  newsletter_btn:   { uk:'Підписатися',  ru:'Подписаться',  en:'Subscribe',   cs:'Odebírat'     },
  newsletter_thanks:{ uk:'Дякуємо! Ти в списку.', ru:'Спасибо! Ты в списке.', en:"Thank you! You're in.", cs:'Děkujeme! Jsi na seznamu.' },

  // --- Footer ---
  footer_copy: { uk:'Усі права захищені.', ru:'Все права защищены.', en:'All rights reserved.', cs:'Všechna práva vyhrazena.' },

  // --- Articles page ---
  articles_title: { uk:'Усі статті',  ru:'Все статьи',  en:'All Articles', cs:'Všechny články' },
  articles_sub:   {
    uk:'Знайди те, що надихне тебе на рух',
    ru:'Найди то, что вдохновит тебя на движение',
    en:'Find what will inspire you to move',
    cs:'Najdi, co tě inspiruje k pohybu'
  },
  search_ph: { uk:'Пошук статей...', ru:'Поиск статей...', en:'Search articles...', cs:'Hledat články...' },
  no_results: {
    uk:'Нічого не знайдено. Спробуй інший запит.',
    ru:'Ничего не найдено. Попробуй другой запрос.',
    en:'Nothing found. Try another query.',
    cs:'Nic nenalezeno. Zkus jiný dotaz.'
  },

  // --- Article page ---
  read_more:    { uk:'Читати далі →',           ru:'Читать далее →',      en:'Read more →',       cs:'Číst dál →'              },
  read_time:    { uk:'хв читання',              ru:'мин чтения',           en:'min read',          cs:'min čtení'               },
  share_label:  { uk:'Поділитися:',             ru:'Поделиться:',          en:'Share:',            cs:'Sdílet:'                 },
  share_btn:    { uk:'Скопіювати посилання',    ru:'Скопировать ссылку',   en:'Copy link',         cs:'Kopírovat odkaz'         },
  share_copied: { uk:'Посилання скопійовано!',  ru:'Ссылка скопирована!',  en:'Link copied!',      cs:'Odkaz zkopírován!'       },
  back_articles:{ uk:'← Всі статті',            ru:'← Все статьи',         en:'← All articles',    cs:'← Všechny články'        },
  related_title:{ uk:'Схожі статті',            ru:'Похожие статьи',       en:'Related articles',  cs:'Související články'       },
};

// Map category slug → i18n key
const CAT_KEY = {
  fitness:'cat_fitness', football:'cat_football', nutrition:'cat_nutrition',
  mma:'cat_mma', running:'cat_running', basketball:'cat_basketball',
};

function getLang() {
  return localStorage.getItem('sz_lang') || 'uk';
}

function t(key) {
  const lang = getLang();
  return (LANG_DICT[key] || {})[lang] || (LANG_DICT[key] || {}).uk || key;
}

function catName(slug) {
  return t(CAT_KEY[slug] || slug);
}

function articleField(article, field) {
  const val = article[field];
  if (val && typeof val === 'object') {
    const lang = getLang();
    return val[lang] || val.uk || '';
  }
  return val || '';
}

function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function changeLang(lang) {
  localStorage.setItem('sz_lang', lang);
  applyTranslations();
  document.dispatchEvent(new Event('langchange'));
}
