const ARTICLES = [
  {
    id: 1,
    category: "fitness",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    date: { uk: "5 травня 2026", cs: "5. května 2026", ru: "5 мая 2026", en: "May 5, 2026" },
    title: {
      uk: "Як правильно розпочати тренування з нуля",
      cs: "Jak správně začít cvičit od nuly",
      ru: "Как правильно начать тренировки с нуля",
      en: "How to Start Working Out from Scratch"
    },
    excerpt: {
      uk: "Повний посібник для початківців: від вибору програми до перших результатів за 30 днів.",
      cs: "Kompletní průvodce pro začátečníky: od výběru programu k prvním výsledkům za 30 dní.",
      ru: "Полный гид для новичков: от выбора программы до первых результатов за 30 дней.",
      en: "Complete guide for beginners: from choosing a program to first results in 30 days."
    },
    content: {
      uk: `
        <p>Розпочати тренуватися — один із найкращих кроків, які ви можете зробити для свого здоров'я. Але з чого почати, якщо ви ніколи не займалися спортом або давно покинули?</p>
        <h2>Крок 1. Визначте свою мету</h2>
        <p>Перш ніж іти до залу, дайте відповідь собі на запитання: навіщо вам це? Схуднути? Набрати м'язову масу? Покращити витривалість? Від мети залежить усе — програма, харчування, режим.</p>
        <h2>Крок 2. Починайте з малого</h2>
        <p>Найпоширеніша помилка початківців — перевантажити себе з першого дня. Починайте з 3 тренувань на тиждень по 40–50 хвилин. Дайте тілу звикнути до навантаження.</p>
        <h2>Крок 3. Базові вправи</h2>
        <p>Присідання, віджимання, тяга — це фундамент. Вони задіюють великі м'язові групи і дають максимальний результат. Не женіться за складними тренажерами на початку.</p>
        <h2>Крок 4. Харчування</h2>
        <p>Тренування — це 30% результату. Решта 70% — харчування та відновлення. Збільшіть споживання білка (куряче філе, яйця, сир), пийте достатньо води та висипайтеся.</p>
        <h2>Крок 5. Відстежуйте прогрес</h2>
        <p>Робіть фото кожні 2 тижні. Записуйте ваги та повторення. Прогрес мотивує краще за будь-які слова.</p>
        <p>Пам'ятайте: стабільність важливіша за інтенсивність. Одне тренування на тиждень протягом року краще, ніж місяць щоденних занять із наступним вигоранням.</p>
      `,
      cs: `
        <p>Začít cvičit je jeden z nejlepších kroků, které můžete udělat pro své zdraví. Ale kde začít, pokud jste nikdy nesportovali nebo jste s tím dávno skončili?</p>
        <h2>Krok 1. Stanovte si cíl</h2>
        <p>Než vyrazíte do posilovny, odpovězte si na otázku: proč to chcete? Zhubnout? Nabrat svalovou hmotu? Zlepšit výdrž? Na cíli závisí vše — program, strava, režim.</p>
        <h2>Krok 2. Začněte pomalu</h2>
        <p>Nejčastější chybou začátečníků je přetížit se hned první den. Začněte se 3 tréninky týdně po 40–50 minutách. Dejte tělu čas zvyknout si na zátěž.</p>
        <h2>Krok 3. Základní cviky</h2>
        <p>Dřepy, kliky, mrtvý tah — to je základ. Zapojují velké svalové skupiny a přinášejí maximální výsledky. Na začátku se nežeňte za složitými stroji.</p>
        <h2>Krok 4. Výživa</h2>
        <p>Trénink tvoří 30 % výsledku. Zbývajících 70 % je výživa a regenerace. Zvyšte příjem bílkovin (kuřecí prsa, vejce, tvaroh), pijte dostatek vody a dobře spěte.</p>
        <h2>Krok 5. Sledujte pokrok</h2>
        <p>Foťte se každé 2 týdny. Zapisujte váhy a opakování. Pokrok motivuje lépe než jakákoli slova.</p>
        <p>Pamatujte: pravidelnost je důležitější než intenzita. Jeden trénink týdně po celý rok je lepší než měsíc každodenního cvičení a následné vyhoření.</p>
      `
    }
  },
  {
    id: 2,
    category: "fitness",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    date: { uk: "28 квітня 2026", cs: "28. dubna 2026", ru: "28 апреля 2026", en: "April 28, 2026" },
    title: {
      uk: "5 найкращих вправ для преса вдома",
      cs: "5 nejlepších cviků na břicho doma",
      ru: "5 лучших упражнений для пресса дома",
      en: "5 Best Abs Exercises at Home"
    },
    excerpt: {
      uk: "Ефективні вправи без обладнання, які допоможуть накачати прес швидко та безпечно.",
      cs: "Efektivní cviky bez vybavení, které vám pomohou rychle a bezpečně zpevnit břicho.",
      ru: "Эффективные упражнения без оборудования, которые помогут накачать пресс быстро и безопасно.",
      en: "Effective no-equipment exercises to build your abs quickly and safely."
    },
    content: {
      uk: `
        <p>Красивий прес — мрія багатьох. Але для цього не потрібен зал чи дороге обладнання. Ось 5 вправ, які працюють.</p>
        <h2>1. Планка</h2>
        <p>Класична вправа для кора. Тримайте тіло прямим від голови до п'ят. Починайте з 30 секунд, поступово збільшуючи до 2 хвилин.</p>
        <h2>2. Скручування</h2>
        <p>Лежачи на спині, піднімайте плечі, не відриваючи поперек від підлоги. 3 підходи по 20 повторень.</p>
        <h2>3. Підйом ніг</h2>
        <p>Лежачи на спині, піднімайте прямі ноги до 90 градусів. Відмінно прокачує нижню частину преса.</p>
        <h2>4. Велосипед</h2>
        <p>Руки за головою, почергово тягніть лікоть до протилежного коліна. Задіює косі м'язи живота.</p>
        <h2>5. Альпініст</h2>
        <p>У позиції планки почергово підтягуйте коліна до грудей у швидкому темпі. Спалює жир і тренує кор одночасно.</p>
        <p>Виконуйте цей комплекс 4 рази на тиждень, і через місяць ви помітите перші результати.</p>
      `,
      cs: `
        <p>Krásné břicho je snem mnoha. Ale nepotřebujete k tomu posilovnu ani drahé vybavení. Zde je 5 cviků, které skutečně fungují.</p>
        <h2>1. Plank</h2>
        <p>Klasický cvik pro střed těla. Držte tělo rovně od hlavy k patám. Začněte s 30 sekundami a postupně prodlužujte na 2 minuty.</p>
        <h2>2. Crunch</h2>
        <p>Lehněte si na záda, zvedejte ramena bez odlepení beder od podlahy. 3 série po 20 opakováních.</p>
        <h2>3. Zdvih nohou</h2>
        <p>Lehněte si na záda, zvedejte rovné nohy do úhlu 90 stupňů. Skvěle posiluje spodní část břicha.</p>
        <h2>4. Bicycle crunch</h2>
        <p>Ruce za hlavou, střídavě přibližujte loket k protilehlému kolenu. Zapojuje šikmé břišní svaly.</p>
        <h2>5. Mountain climber</h2>
        <p>V pozici planku střídavě přitahujte kolena k hrudníku rychlým tempem. Spaluje tuk a trénuje střed těla zároveň.</p>
        <p>Provádějte tento komplex 4× týdně a za měsíc uvidíte první výsledky.</p>
      `
    }
  },
  {
    id: 3,
    category: "football",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    date: { uk: "20 квітня 2026", cs: "20. dubna 2026", ru: "20 апреля 2026", en: "April 20, 2026" },
    title: {
      uk: "Найкращі фільми про футбол: топ-10 для справжніх фанатів",
      cs: "Nejlepší filmy o fotbalu: top 10 pro pravé fanoušky",
      ru: "Лучшие фильмы о футболе: топ-10 для настоящих фанатов",
      en: "Best Football Movies: Top 10 for True Fans"
    },
    excerpt: {
      uk: "Добірка захопливих фільмів та документалок, які ви зобов'язані переглянути якщо любите футбол.",
      cs: "Výběr strhujících filmů a dokumentů, které musíte vidět, pokud milujete fotbal.",
      ru: "Подборка захватывающих фильмов и документалок, которые вы обязаны посмотреть, если любите футбол.",
      en: "A selection of gripping films and documentaries you must watch if you love football."
    },
    content: {
      uk: `
        <p>Футбол — це не лише матчі. Це історії, драми та перемоги. Ось 10 фільмів, які передають дух гри.</p>
        <h2>1. «Гол!» (2005)</h2>
        <p>Реальний топ відкриває «Гол!» — історія мексиканського хлопця, який пробивається до англійської Прем'єр-ліги. Дві частини обов'язкові до перегляду.</p>
        <h2>2. «Тренер Картер»</h2>
        <p>Формально баскетбольний, але принципи ті ж. Про дисципліну, команду та характер.</p>
        <h2>3. «Іке: Нігерійський чемпіон»</h2>
        <p>Документалка про те, як футбол змінює життя в Нігерії. Дуже сильно.</p>
        <h2>4. «Манчестер по-італійськи»</h2>
        <p>Комедійна історія італійського тренера в англійському клубі. Легка та дуже смішна.</p>
        <h2>5. «Зідан: портрет XXI століття»</h2>
        <p>90 хвилин зйомки одного матчу з однією камерою, спрямованою виключно на Зідана. Гіпнотично.</p>
        <p>Решту 5 фільмів розберемо в наступній статті — список занадто хороший, щоб вмістити його в один пост.</p>
      `,
      cs: `
        <p>Fotbal není jen zápasy. Jsou to příběhy, dramata a vítězství. Zde je 10 filmů, které zachycují ducha hry.</p>
        <h2>1. „Gól!" (2005)</h2>
        <p>Příběh mexického chlapce, který se prodírá do anglické Premier League. Obě části jsou povinné sledování.</p>
        <h2>2. „Trenér Carter"</h2>
        <p>Formálně basketbalový film, ale principy jsou stejné. O disciplíně, týmu a charakteru.</p>
        <h2>3. „Ike: Nigerijský šampion"</h2>
        <p>Dokument o tom, jak fotbal mění životy v Nigérii. Velmi silný.</p>
        <h2>4. „Manchester po italsku"</h2>
        <p>Komediální příběh italského trenéra v anglickém klubu. Lehký a velmi vtipný.</p>
        <h2>5. „Zidane: Portrét 21. století"</h2>
        <p>90 minut záznamu jednoho zápasu s jednou kamerou zaměřenou výhradně na Zidana. Hypnotické.</p>
        <p>Zbývajících 5 filmů probereme v příštím článku — seznam je příliš dobrý, aby se vešel do jednoho příspěvku.</p>
      `
    }
  },
  {
    id: 4,
    category: "nutrition",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    date: { uk: "15 квітня 2026", cs: "15. dubna 2026", ru: "15 апреля 2026", en: "April 15, 2026" },
    title: {
      uk: "Білок у харчуванні спортсмена: скільки і звідки",
      cs: "Bílkoviny ve stravě sportovce: kolik a odkud",
      ru: "Белок в питании спортсмена: сколько и откуда",
      en: "Protein in an Athlete's Diet: How Much and Where From"
    },
    excerpt: {
      uk: "Розбираємо головний макронутрієнт для росту м'язів: норми, джерела, міфи та найкращий час прийому.",
      cs: "Rozebíráme hlavní makronutrient pro růst svalů: normy, zdroje, mýty a nejlepší čas příjmu.",
      ru: "Разбираем главный макронутриент для роста мышц: нормы, источники, мифы и лучшее время приёма.",
      en: "Breaking down the main macronutrient for muscle growth: norms, sources, myths and best timing."
    },
    content: {
      uk: `
        <p>Білок — будівельний матеріал м'язів. Але скільки його потрібно і звідки брати? Розбираємося без міфів.</p>
        <h2>Скільки білка потрібно?</h2>
        <p>Наукові дані говорять: 1.6–2.2 грама білка на кілограм ваги тіла на день. При вазі 80 кг — це 128–176 г білка щодня.</p>
        <h2>Найкращі джерела білка</h2>
        <ul>
          <li>Куряче філе — 31 г білка на 100 г</li>
          <li>Яйця — 13 г білка на 100 г</li>
          <li>Сир 0% — 18 г білка на 100 г</li>
          <li>Тунець — 26 г білка на 100 г</li>
          <li>Яловичина — 26 г білка на 100 г</li>
        </ul>
        <h2>А що з протеїном?</h2>
        <p>Протеїнові коктейлі — це просто зручний спосіб добрати білок. Вони не магічні. Якщо ви їсте достатньо м'яса та сиру — протеїн не потрібен.</p>
        <h2>Міфи</h2>
        <p>«Багато білка шкодить нирками» — міф для здорових людей. Дослідження не підтверджують це при помірному споживанні води.</p>
        <p>Головне: стабільність. Краще їсти 150 г білка щодня, ніж 300 г раз на тиждень.</p>
      `,
      cs: `
        <p>Bílkoviny jsou stavebním materiálem svalů. Ale kolik jich potřebujete a odkud je brát? Rozebíráme to bez mýtů.</p>
        <h2>Kolik bílkovin potřebujete?</h2>
        <p>Vědecká data říkají: 1,6–2,2 gramu bílkovin na kilogram tělesné hmotnosti denně. Při váze 80 kg je to 128–176 g bílkovin každý den.</p>
        <h2>Nejlepší zdroje bílkovin</h2>
        <ul>
          <li>Kuřecí prsa — 31 g bílkovin na 100 g</li>
          <li>Vejce — 13 g bílkovin na 100 g</li>
          <li>Tvaroh 0 % — 18 g bílkovin na 100 g</li>
          <li>Tuňák — 26 g bílkovin na 100 g</li>
          <li>Hovězí maso — 26 g bílkovin na 100 g</li>
        </ul>
        <h2>A co protein?</h2>
        <p>Proteinové koktejly jsou jen pohodlný způsob, jak doplnit bílkoviny. Nejsou magické. Pokud jíte dostatek masa a tvarohu — protein nepotřebujete.</p>
        <h2>Mýty</h2>
        <p>„Mnoho bílkovin škodí ledvinám" — mýtus pro zdravé lidi. Studie to u lidí s přiměřeným příjmem vody nepotvrzují.</p>
        <p>Hlavní věc: pravidelnost. Lepší je jíst 150 g bílkovin každý den než 300 g jednou týdně.</p>
      `
    }
  },
  {
    id: 5,
    category: "mma",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    date: { uk: "10 квітня 2026", cs: "10. dubna 2026", ru: "10 апреля 2026", en: "April 10, 2026" },
    title: {
      uk: "UFC 2026: головні бої року та їх аналіз",
      cs: "UFC 2026: hlavní zápasy roku a jejich analýza",
      ru: "UFC 2026: главные бои года и их анализ",
      en: "UFC 2026: Main Fights of the Year and Their Analysis"
    },
    excerpt: {
      uk: "Розбираємо найочікуваніші поєдинки UFC цього року: стилі, шанси та наші прогнози.",
      cs: "Rozebíráme nejočekávanější zápasy UFC tohoto roku: styly, šance a naše prognózy.",
      ru: "Разбираем самые ожидаемые поединки UFC этого года: стили, шансы и наши прогнозы.",
      en: "Breaking down the most anticipated UFC fights of this year: styles, odds and our predictions."
    },
    content: {
      uk: `
        <p>2026 рік обіцяє стати одним із найнасиченіших в історії UFC. Розбираємо головні карди та даємо прогнози.</p>
        <h2>Чому MMA росте?</h2>
        <p>Змішані єдиноборства стали одним із найпопулярніших видів спорту у світі. У 2025 році UFC побив рекорд за виручкою — $2.4 млрд.</p>
        <h2>Що дивитися у 2026-му?</h2>
        <p>Ключові категорії зараз — напівважка вага та легка вага. Там іде справжня війна за пояси. Кілька чемпіонів готові до суперматчів.</p>
        <h2>Стилі та стратегії</h2>
        <p>Сучасний боєць UFC має однаково добре почуватися в стійці та в партері. Епоха «одновимірних» бійців пройшла.</p>
        <h2>За ким стежити з нових</h2>
        <p>Стежте за молодими бійцями з Центральної Азії — останніми роками цей регіон виробляє неймовірних атлетів.</p>
        <p>Детальний розбір конкретних матчів — у наступному матеріалі. Там буде детальна тактика та відеорозбір.</p>
      `,
      cs: `
        <p>Rok 2026 slibuje být jedním z nejbohatších v historii UFC. Rozebíráme hlavní karty a dáváme prognózy.</p>
        <h2>Proč MMA roste?</h2>
        <p>Smíšená bojová umění se stala jedním z nejpopulárnějších sportů na světě. V roce 2025 UFC překonalo rekord v příjmech — 2,4 miliardy dolarů.</p>
        <h2>Co sledovat v roce 2026?</h2>
        <p>Klíčové kategorie jsou nyní polotěžká váha a lehká váha. Tam probíhá skutečný boj o pásy. Několik šampionů je připraveno na supermatche.</p>
        <h2>Styly a strategie</h2>
        <p>Moderní bojovník UFC musí být stejně dobrý v postoji i na zemi. Éra „jednorozměrných" bojovníků skončila.</p>
        <h2>Koho sledovat z nových</h2>
        <p>Sledujte mladé bojovníky ze Střední Asie — v posledních letech tento region produkuje neuvěřitelné atlety.</p>
        <p>Podrobná analýza konkrétních zápasů — v příštím článku. Tam bude detailní taktika a rozbor videa.</p>
      `
    }
  },
  {
    id: 6,
    category: "running",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    date: { uk: "3 квітня 2026", cs: "3. dubna 2026", ru: "3 апреля 2026", en: "April 3, 2026" },
    title: {
      uk: "Як пробігти перші 5 км: план на 8 тижнів",
      cs: "Jak zaběhnout prvních 5 km: plán na 8 týdnů",
      ru: "Как пробежать первые 5 км: план на 8 недель",
      en: "How to Run Your First 5K: 8-Week Plan"
    },
    excerpt: {
      uk: "Покрокова програма для тих, хто хоче почати бігати, але не знає з чого почати.",
      cs: "Krokový program pro ty, kdo chtějí začít běhat, ale nevědí, kde začít.",
      ru: "Пошаговая программа для тех, кто хочет начать бегать, но не знает с чего начать.",
      en: "A step-by-step program for those who want to start running but don't know where to begin."
    },
    content: {
      uk: `
        <p>Біг — один із найдоступніших видів спорту. Потрібні лише кросівки та бажання. Але без плану початківці часто кидають через тиждень.</p>
        <h2>Програма «Диван до 5 км»</h2>
        <p>Класична програма Couch to 5K (C25K) розрахована на 8 тижнів. Ось адаптована версія:</p>
        <h2>Тижні 1–2</h2>
        <p>Чергуйте 1 хвилину бігу та 2 хвилини ходьби. Всього 20 хвилин. 3 рази на тиждень. Темп — комфортний.</p>
        <h2>Тижні 3–4</h2>
        <p>2 хвилини бігу / 1 хвилина ходьби. 25 хвилин. Збільшуємо частку бігу.</p>
        <h2>Тижні 5–6</h2>
        <p>5 хвилин бігу / 1 хвилина ходьби. Вже відчуваєте прогрес? Це не випадково.</p>
        <h2>Тижні 7–8</h2>
        <p>Безперервний біг 20–30 хвилин. На цей момент 5 км вже у вашій кишені.</p>
        <h2>Важливі поради</h2>
        <p>Купіть нормальні бігові кросівки — це інвестиція в здоров'я суглобів. Бігайте повільно. «Розмовний темп» — якщо можете говорити, темп правильний.</p>
      `,
      cs: `
        <p>Běh je jeden z nejdostupnějších sportů. Potřebujete jen boty a chuť. Ale bez plánu začátečníci často vzdají po týdnu.</p>
        <h2>Program „Z pohovky na 5 km"</h2>
        <p>Klasický program Couch to 5K (C25K) je rozložen na 8 týdnů. Zde je přizpůsobená verze:</p>
        <h2>Týdny 1–2</h2>
        <p>Střídejte 1 minutu běhu a 2 minuty chůze. Celkem 20 minut. 3× týdně. Tempo — pohodlné.</p>
        <h2>Týdny 3–4</h2>
        <p>2 minuty běhu / 1 minuta chůze. 25 minut. Zvyšujeme podíl běhu.</p>
        <h2>Týdny 5–6</h2>
        <p>5 minut běhu / 1 minuta chůze. Už cítíte pokrok? To není náhoda.</p>
        <h2>Týdny 7–8</h2>
        <p>Nepřetržitý běh 20–30 minut. V tento moment máte 5 km v kapse.</p>
        <h2>Důležité rady</h2>
        <p>Kupte si kvalitní běžecké boty — je to investice do zdraví kloubů. Běhejte pomalu. „Konverzační tempo" — pokud můžete mluvit, tempo je správné.</p>
      `
    }
  },
  {
    id: 7,
    category: "basketball",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    date: { uk: "28 березня 2026", cs: "28. března 2026", ru: "28 марта 2026", en: "March 28, 2026" },
    title: {
      uk: "Баскетбол для любителів: як покращити кидок",
      cs: "Basketbal pro amatéry: jak zlepšit hod",
      ru: "Баскетбол для любителей: как улучшить бросок",
      en: "Basketball for Amateurs: How to Improve Your Shot"
    },
    excerpt: {
      uk: "Техніка, яку використовують профі, адаптована для любительського рівня. Працює для всіх.",
      cs: "Technika, kterou používají profesionálové, přizpůsobená pro amatérskou úroveň. Funguje pro všechny.",
      ru: "Техника, которую используют профи, адаптированная для любительского уровня. Работает для всех.",
      en: "The technique used by professionals, adapted for the amateur level. Works for everyone."
    },
    content: {
      uk: `
        <p>Хороший кидок — це техніка, а не талант. Більшість любителів роблять одні й ті ж помилки. Виправимо їх.</p>
        <h2>Позиція ніг</h2>
        <p>Ноги на ширині плечей, трохи зігнуті. Ведуча нога трохи попереду. Це база — без неї кидок нестабільний.</p>
        <h2>Хват м'яча</h2>
        <p>М'яч лежить на подушечках пальців, не на долоні. Між долонею та м'ячем має бути просвіт. Багато хто забуває про це.</p>
        <h2>Лінія кидка</h2>
        <p>Лікоть під м'ячем, не в сторону. Рука рухається вертикально вгору, ніби тягнетеся до кільця.</p>
        <h2>Скид зап'ястя</h2>
        <p>В кінці кидка зап'ястя «ламається» вперед — так з'являється зворотне обертання м'яча. Це називається backspin, він допомагає м'ячу м'якше заходити в кільце.</p>
        <h2>Практика</h2>
        <p>100 кидків на день зі штрафної лінії — через місяць ви не впізнаєте свій кидок. Без повторень техніка не закріплюється.</p>
      `,
      cs: `
        <p>Dobrý hod je technika, ne talent. Většina amatérů dělá stále stejné chyby. Pojďme je napravit.</p>
        <h2>Pozice nohou</h2>
        <p>Nohy na šířku ramen, mírně pokrčené. Dominantní noha mírně vpředu. To je základ — bez něj je hod nestabilní.</p>
        <h2>Úchop míče</h2>
        <p>Míč leží na bříšcích prstů, ne na dlani. Mezi dlaní a míčem musí být mezera. Mnoho lidí na to zapomíná.</p>
        <h2>Linie hodu</h2>
        <p>Loket pod míčem, ne do strany. Ruka se pohybuje svisle nahoru, jako byste sahali po koši.</p>
        <h2>Přemet zápěstí</h2>
        <p>Na konci hodu se zápěstí „zlomí" dopředu — tak vzniká zpětná rotace míče. Říká se tomu backspin, pomáhá míči měkčeji vstoupit do koše.</p>
        <h2>Praxe</h2>
        <p>100 hodů denně z trestné čáry — za měsíc svůj hod nepoznáte. Bez opakování se technika neupevní.</p>
      `
    }
  },
  {
    id: 8,
    category: "fitness",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    date: { uk: "20 березня 2026", cs: "20. března 2026", ru: "20 марта 2026", en: "March 20, 2026" },
    title: {
      uk: "Відновлення після тренувань: що працює, а що ні",
      cs: "Regenerace po tréninku: co funguje a co ne",
      ru: "Восстановление после тренировок: что работает, а что нет",
      en: "Recovery After Workouts: What Works and What Doesn't"
    },
    excerpt: {
      uk: "Сон, розтяжка, холодний душ, масаж — розбираємо що з цього реально допомагає за наукою.",
      cs: "Spánek, strečink, studená sprcha, masáž — rozebíráme, co z toho skutečně pomáhá podle vědy.",
      ru: "Сон, растяжка, холодный душ, массаж — разбираем, что из этого реально помогает по науке.",
      en: "Sleep, stretching, cold shower, massage — breaking down what actually helps according to science."
    },
    content: {
      uk: `
        <p>Відновлення — це така ж частина тренінгу, як і саме тренування. Без нього прогрес сповільнюється, а ризик травм зростає.</p>
        <h2>Що працює точно</h2>
        <p><strong>Сон.</strong> 7–9 годин. У цей час виділяється гормон росту, відновлюються м'язові волокна. Без сну жодні добавки не допоможуть.</p>
        <p><strong>Харчування.</strong> Білок протягом 2 годин після тренування. Вуглеводи для поповнення глікогену.</p>
        <p><strong>Активне відновлення.</strong> Легка прогулянка або плавання у день відпочинку покращують кровообіг і прискорюють загоєння.</p>
        <h2>Працює частково</h2>
        <p><strong>Холодна ванна.</strong> Знижує запалення, але може сповільнювати гіпертрофію. Добре для спортсменів на змаганнях, не для набору маси.</p>
        <p><strong>Розтяжка.</strong> Покращує рухливість, але мало впливає на швидкість відновлення м'язів.</p>
        <h2>Що не працює</h2>
        <p>Більшість добавок для відновлення — маркетинг. BCAA при достатньому споживанні білка марні. Пийте воду, їжте нормально, спіть.</p>
      `,
      cs: `
        <p>Regenerace je stejně důležitou součástí tréninku jako samotný trénink. Bez ní se pokrok zpomaluje a riziko zranění roste.</p>
        <h2>Co určitě funguje</h2>
        <p><strong>Spánek.</strong> 7–9 hodin. V té době se vylučuje růstový hormon a obnovují se svalová vlákna. Bez spánku žádné doplňky nepomohou.</p>
        <p><strong>Výživa.</strong> Bílkoviny do 2 hodin po tréninku. Sacharidy pro doplnění glykogenu.</p>
        <p><strong>Aktivní regenerace.</strong> Lehká procházka nebo plavání v den odpočinku zlepšuje krevní oběh a urychluje hojení.</p>
        <h2>Funguje částečně</h2>
        <p><strong>Ledová lázeň.</strong> Snižuje zánět, ale může zpomalovat hypertrofii. Vhodné pro sportovce na soutěžích, ne pro nabírání svalové hmoty.</p>
        <p><strong>Strečink.</strong> Zlepšuje pohyblivost, ale málo ovlivňuje rychlost regenerace svalů.</p>
        <h2>Co nefunguje</h2>
        <p>Většina doplňků na regeneraci je marketing. BCAA při dostatečném příjmu bílkovin jsou zbytečné. Pijte vodu, jezte normálně, spěte.</p>
      `
    }
  },
  {
    id: 9,
    category: "football",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
    date: { uk: "12 березня 2026", cs: "12. března 2026", ru: "12 марта 2026", en: "March 12, 2026" },
    title: {
      uk: "Тактика тотального пресингу: як Клопп змінив футбол",
      cs: "Taktika totálního presingu: jak Klopp změnil fotbal",
      ru: "Тактика тотального прессинга: как Клопп изменил футбол",
      en: "Total Press Tactics: How Klopp Changed Football"
    },
    excerpt: {
      uk: "Розбираємо філософію Юргена Клоппа та те, як його «Гегенпресинг» перевернув сучасний футбол.",
      cs: "Rozebíráme filozofii Jürgena Kloppa a to, jak jeho „Gegenpressing" převrátil moderní fotbal.",
      ru: "Разбираем философию Юргена Клоппа и то, как его «Gegenpressing» перевернул современный футбол.",
      en: "Breaking down Jürgen Klopp's philosophy and how his Gegenpressing revolutionised modern football."
    },
    content: {
      uk: `
        <p>Юрген Клопп — один із найвпливовіших тренерів свого покоління. Його «Гегенпресинг» став революцією в тактиці.</p>
        <h2>Що таке Гегенпресинг?</h2>
        <p>Це німецьке слово означає «контрпресинг». Одразу після втрати м'яча вся команда агресивно тисне на суперника в зоні втрати — у перші 5–6 секунд.</p>
        <h2>Чому це працює?</h2>
        <p>Після втрати м'яча суперник не готовий до атаки. Його гравці згруповані, немає позиційної структури. Це ідеальний момент для відбору.</p>
        <h2>Фізичні вимоги</h2>
        <p>Гегенпресинг вимагає атлетів найвищого рівня. Бундесліга та АПЛ за Клоппом фіксували рекордні показники інтенсивності у його командах.</p>
        <h2>Спадщина</h2>
        <p>Після успіхів «Боруссії» та «Ліверпуля» пресинг став стандартом у топ-футболі. Навіть традиційно позиційні команди були змушені адаптуватися.</p>
      `,
      cs: `
        <p>Jürgen Klopp je jedním z nejvlivnějších trenérů své generace. Jeho „Gegenpressing" se stal revolucí v taktice.</p>
        <h2>Co je Gegenpressing?</h2>
        <p>Toto německé slovo znamená „kontra-pressing". Ihned po ztrátě míče celý tým agresivně napadá soupeře v zóně ztráty — během prvních 5–6 sekund.</p>
        <h2>Proč to funguje?</h2>
        <p>Po ztrátě míče soupeř není připraven na útok. Jeho hráči jsou seskupeni, není poziční struktura. To je ideální moment pro získání míče zpět.</p>
        <h2>Fyzické požadavky</h2>
        <p>Gegenpressing vyžaduje atlety nejvyšší úrovně. Bundesliga a Premier League pod Kloppem zaznamenávaly rekordní ukazatele intenzity v jeho týmech.</p>
        <h2>Odkaz</h2>
        <p>Po úspěších Borussie a Liverpoolu se pressing stal standardem v top fotbalu. I tradičně poziční týmy byly nuceny se přizpůsobit.</p>
      `
    }
  }
];
