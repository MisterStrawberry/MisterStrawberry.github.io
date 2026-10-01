import { useState, useMemo, useEffect } from 'react'
import type { FC, MouseEvent as ReactMouseEvent } from 'react'

type Language = 'RU' | 'KZ' | 'EN'

// --- Интерактивные ссылки для стека технологий ---
const TECH_LINKS: Record<string, string> = {
  'React.js': 'https://react.dev/',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'Material UI': 'https://mui.com/',
  'Python': 'https://www.python.org/',
  'FastAPI': 'https://fastapi.tiangolo.com/',
  'Node.js': 'https://nodejs.org/',
  'OpenAI API': 'https://platform.openai.com/',
  'Git / GitHub': 'https://github.com/',
  'GitHub Pages': 'https://pages.github.com/',
  'Vite': 'https://vitejs.dev/',
}

// --- Компонент DomeGallery с информацией о ВКТУ ---
interface DomeGalleryProps {
  label?: string
  aboutUniversityTitle?: string
  aboutUniversityDesc?: string
}

const DomeGallery: FC<DomeGalleryProps> = ({
  label = 'Образование & Академический статус',
  aboutUniversityTitle = 'Студент и разработчик ВКТУ им. Д. Серикбаева',
  aboutUniversityDesc = 'Обучаюсь в Восточно-Казахстанском техническом университете им. Д. Серикбаева. Сочетаю сильную академическую базу в сфере программной инженерии с практическим созданием веб-приложений, проектированием UI/UX и внедрением AI-технологий.',
}) => {
  const [imgError, setImgError] = useState(true)

  return (
    <section className="relative w-full py-12 my-12 border-y border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block mb-6 bg-black/80 border border-rose-500/30 px-4 py-2 rounded-xl text-xs font-mono text-rose-300 shadow-xl">
          {label}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Левая интерактивная карточка ВКТУ */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-rose-900/20 via-indigo-900/20 to-black p-2 transition-all duration-500 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/20">
            <div className="overflow-hidden rounded-xl h-80 flex items-center justify-center relative bg-[#131622] p-6">
              {!imgError ? (
                <img
                  src="/vktu_photo.jpg"
                  alt="ВКТУ им. Д. Серикбаева"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <span className="text-white font-bold text-xl tracking-wide">
                    Студент ВКТУ им. Д. Серикбаева
                  </span>
                  <p className="text-xs text-rose-300 font-mono">
                    Факультет инженерии / Разработка ПО
                  </p>
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed pt-2 border-t border-white/10">
                    Активист-разработчик, совмещающий академическую базу с практическим созданием веб-интерфейсов и AI-сервисов.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Правая текстовая часть */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{aboutUniversityTitle}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {aboutUniversityDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-rose-300">
                #ВКТУ
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-indigo-300">
                #SoftwareEngineering
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-emerald-300">
                #FrontendDev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Переводы ---
const translations = {
  RU: {
    aboutNav: 'О себе',
    tech: 'Технологии',
    projects: 'Проекты',
    timeline: 'Опыт & Учёба',
    contact: 'Контакты',
    roleTag: 'Frontend & AI Application Developer',
    heroTitlePrefix: 'Привет, я ',
    heroTitleSuffix: 'Создаю веб-интерфейсы и AI-сервисы.',
    heroDesc: 'Разработчик под ником MisterStrawberry. Специализируюсь на создании современных интерактивных веб-приложений на ReactJS, интеграции нейросетевых API и веб-анимации.',
    myProjectsBtn: 'Мои проекты',
    githubBtn: 'GitHub Профиль',
    eduStatTitle: 'ВКТУ им. Серикбаева',
    eduStatSub: 'Студент-инженер',
    aiStatTitle: 'AI / LLM',
    aiStatSub: 'Интеграция моделей',
    galleryLabel: 'Образование & Академический статус',
    aboutUniversityTitle: 'Студент и разработчик ВКТУ им. Д. Серикбаева',
    aboutUniversityDesc: 'Обучаюсь в Восточно-Казахстанском техническом университете им. Д. Серикбаева. Сочетаю сильную академическую базу в сфере программной инженерии с практическим созданием веб-приложений, проектированием UI/UX и внедрением AI-технологий.',
    aboutTitle: 'О себе',
    aboutSubtitle: 'Инженерия интерфейсов и интеграция искусственного интеллекта',
    aboutP1: 'Меня зовут Аскар. Я занимаюсь веб-разработкой с фокусом на интерактивный Frontend и современные AI-решения. Моя цель — создавать быстрые, удобные и визуально западающие в память веб-приложения.',
    aboutP2: 'Изучаю программную инженерию в ВКТУ и активно применяю современные технологии: от глубокой настройки React, Tailwind CSS и анимаций до интеграции Large Language Models (LLM) и генеративных API.',
    aboutCard1Title: 'Frontend & UX',
    aboutCard1Desc: 'Создание адаптивных, стильных и быстрых интерфейсов с акцентом на удобство пользователя и плавные анимации.',
    aboutCard2Title: 'AI & Интеграции',
    aboutCard2Desc: 'Внедрение нейросетевых API, работа с LLM, обработка данных и голосовой синтез (TTS) в реальных продуктах.',
    aboutCard3Title: 'Clean Code & Архитектура',
    aboutCard3Desc: 'Чистый, поддерживаемый код, современные инструменты сборки и продуманная структура веб-приложений.',
    techTitle: 'Технологический стек',
    techSubtitle: 'Нажмите на технологию, чтобы перейти на её официальный сайт',
    featuredTag: 'Флагманский AI Проект',
    neuroDesc: 'Интерактивная платформа для генерации сказок и историй с помощью ИИ. Создает уникальные приключения по пользовательским запросам с голосовой TTS-озвучкой.',
    neuroF1: 'Сказки на любые темы: AI создаёт уникальные истории под ваши запросы.',
    neuroF2: 'Голосовая озвучка: Озвучка на русском языке с помощью TTS-системы.',
    neuroF3: 'Персонализация: Гибкие настройки тем и формата сказок.',
    eduTitle: 'Образование',
    eduDegree: 'ВКТУ им. Д. Серикбаева',
    eduYears: '2023 — Настоящее время',
    eduSpec: 'Специальность: Разработка ПО / Программная инженерия',
    contactTitle: 'Связаться со мной',
    contactSub: 'Открыт к предложениям и новым проектам.',
    telegramBtn: 'Написать в Telegram (@askar_baidildin)',
  },
  KZ: {
    aboutNav: 'Мен туралы',
    tech: 'Технологиялар',
    projects: 'Жобалар',
    timeline: 'Тәжірибе & Бiлiм',
    contact: 'Байланыс',
    roleTag: 'Frontend & AI Application Developer',
    heroTitlePrefix: 'Сәлем, мен ',
    heroTitleSuffix: 'Веб-интерфейстер мен AI-сервистерді жасаймын.',
    heroDesc: 'MisterStrawberry бүркеншік аты бар әзірлеуші. ReactJS, AI/LLM API интеграциясы және заманауи интерактивті веб-қосымшаларды әзірлеуге маманданғанмын.',
    myProjectsBtn: 'Менің жобаларым',
    githubBtn: 'GitHub Профилі',
    eduStatTitle: 'Д. Серікбаев ШҚТУ',
    eduStatSub: 'Студент-инженер',
    aiStatTitle: 'AI / LLM',
    aiStatSub: 'Модельдер интеграциясы',
    galleryLabel: 'Білім & Академиялық мәртебе',
    aboutUniversityTitle: 'Д. Серікбаев атындағы ШҚТУ студенті мен әзірлеушісі',
    aboutUniversityDesc: 'Д. Серікбаев атындағы Шығыс Қазақстан техникалық университетінде білім алудамын. Бағдарламалық инженерия саласындағы академиялық білімді веб-қосымшаларды әзірлеу, UI/UX жобалау және AI технологияларын енгізу бойынша практикалық тәжірибемен ұштастырамын.',
    aboutTitle: 'Мен туралы',
    aboutSubtitle: 'Интерфейстік инженерия және жасанды интеллект интеграциясы',
    aboutP1: 'Менің атым Аскар. Мен интерактивті Frontend және заманауи AI-шешімдерге назар аудара отырып, веб-әзірлеумен айналысамын.',
    aboutP2: 'ШҚТУ-да бағдарламалық инженерияны оқып, заманауи технологияларды белсенді қолданамын: React, Tailwind CSS пен анимациялардан бастап, үлкен тілдік модельдерді (LLM) интеграциялауға дейін.',
    aboutCard1Title: 'Frontend & UX',
    aboutCard1Desc: 'Адаптивті, стильді және жылдам интерфейстерді қолданушыға ыңғайлы етіп жасау.',
    aboutCard2Title: 'AI & Интеграция',
    aboutCard2Desc: 'Нейрожелілік API енгізу, LLM-мен жұмыс, деректерді өңдеу және дыбыстық синтез (TTS).',
    aboutCard3Title: 'Clean Code & Архитектура',
    aboutCard3Desc: 'Таза, қолдауға оңай код, заманауи құрастыру құралдары және веб-қосымшалардың ойластырылған құрылымы.',
    techTitle: 'Технологиялық стек',
    techSubtitle: 'Ресми веб-сайтқа өту үшін технологияны басыңыз',
    featuredTag: 'Флагмандық AI Жоба',
    neuroDesc: 'Жасанды интеллект арқылы ертегілер мен оқиғаларды генерациялайтын интерактивті платформа.',
    neuroF1: 'Кез келген тақырыптағы ертегілер: AI сұраныс бойынша бірегей оқиғалар жасайды.',
    neuroF2: 'Дауыстық дыбыстау: TTS жүйесі арқылы сапалы дауыстық дыбыстау.',
    neuroF3: 'Дербестеу: Тақырыптар мен ертегі форматының икемді параметрлері.',
    eduTitle: 'Білім',
    eduDegree: 'Д. Серікбаев атындағы ШҚТУ',
    eduYears: '2023 — Қазіргі уақыт',
    eduSpec: 'Мамандығы: БА Әзірлеу / Бағдарламалық инженерия',
    contactTitle: 'Байланысу',
    contactSub: 'Жаңа ұсыныстар мен жобаларға ашықпын.',
    telegramBtn: 'Telegram-ға жазу (@askar_baidildin)',
  },
  EN: {
    aboutNav: 'About',
    tech: 'Tech Stack',
    projects: 'Projects',
    timeline: 'Experience & Edu',
    contact: 'Contact',
    roleTag: 'Frontend & AI Application Developer',
    heroTitlePrefix: "Hi, I'm ",
    heroTitleSuffix: 'Building web interfaces & AI services.',
    heroDesc: 'Developer known as MisterStrawberry. Specialized in building modern interactive web applications with ReactJS, AI/LLM integrations, and smooth web animations.',
    myProjectsBtn: 'My Projects',
    githubBtn: 'GitHub Profile',
    eduStatTitle: 'EKTU Serikbayev',
    eduStatSub: 'Student Engineer',
    aiStatTitle: 'AI / LLM',
    aiStatSub: 'Model Integration',
    galleryLabel: 'Education & Academic Status',
    aboutUniversityTitle: 'Student & Developer at EKTU named after D. Serikbayev',
    aboutUniversityDesc: 'Studying at East Kazakhstan Technical University named after D. Serikbayev. Combining a solid academic foundation in software engineering with hands-on web application development, UI/UX design, and AI technology integration.',
    aboutTitle: 'About Me',
    aboutSubtitle: 'Interface engineering and Artificial Intelligence integration',
    aboutP1: 'My name is Askar. I am a web developer focusing on interactive Frontend and modern AI solutions.',
    aboutP2: 'Studying software engineering at EKTU, I actively apply current technologies: from deep React and Tailwind CSS tuning to integrating Large Language Models (LLMs) and generative APIs.',
    aboutCard1Title: 'Frontend & UX',
    aboutCard1Desc: 'Crafting responsive, stylish, and fast user interfaces with a focus on usability and smooth animations.',
    aboutCard2Title: 'AI & Integrations',
    aboutCard2Desc: 'Integrating neural network APIs, working with LLMs, data processing, and text-to-speech (TTS) systems.',
    aboutCard3Title: 'Clean Code & Architecture',
    aboutCard3Desc: 'Clean, maintainable code, modern build tools, and well-thought-out web application architecture.',
    techTitle: 'Tech Stack',
    techSubtitle: 'Click on a technology to visit its official website',
    featuredTag: 'Featured AI Project',
    neuroDesc: 'Interactive AI-powered fairytale generation platform. Generates custom adventures based on user prompts with TTS voice integration.',
    neuroF1: 'Stories on any topic: AI generates unique tales tailored to your requests.',
    neuroF2: 'Voice Acting: Voice synthesis powered by TTS engines.',
    neuroF3: 'Personalization: Custom parameters for topics, length and tone.',
    eduTitle: 'Education',
    eduDegree: 'EKTU named after D. Serikbayev',
    eduYears: '2023 — Present',
    eduSpec: 'Major: Software Engineering / Computer Science',
    contactTitle: 'Get in Touch',
    contactSub: 'Open for career opportunities and innovative projects.',
    telegramBtn: 'Contact via Telegram (@askar_baidildin)',
  },
}

// --- Интерактивный компонент 3D-карточки ---
interface InteractiveCardProps {
  icon: string
  title: string
  desc: string
  accentColor: string
}

const InteractiveCard: FC<InteractiveCardProps> = ({ icon, title, desc, accentColor }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - card.left - card.width / 2
    const y = e.clientY - card.top - card.height / 2
    setRotate({ x: -y / 12, y: x / 12 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`bg-[#121522] border border-white/15 rounded-2xl p-6 shadow-xl cursor-pointer relative overflow-hidden group hover:${accentColor}`}
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-rose-500/20 transition-all duration-500" />
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-rose-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed relative z-10">{desc}</p>
    </div>
  )
}

// --- Главный компонент Landing ---
const Landing = () => {
  const [lang, setLang] = useState<Language>('RU')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const t = useMemo(() => translations[lang] || translations.RU, [lang])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#090b10] text-gray-100 font-sans overflow-x-hidden selection:bg-rose-500/30 selection:text-rose-200">
      
      {/* 🌟 ФОНОВЫЙ ИНТЕРАКТИВНЫЙ СВЕТ */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          }}
        />
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Навигационная панель */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#090b10]/85 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-rose-500/30 group-hover:rotate-12 transition-transform">
              🍓
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight block text-white">Аскар</span>
              <span className="text-xs text-rose-400 font-mono">@MisterStrawberry</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-rose-400 transition-colors">{t.aboutNav}</a>
            <a href="#tech" className="hover:text-rose-400 transition-colors">{t.tech}</a>
            <a href="#projects" className="hover:text-rose-400 transition-colors">{t.projects}</a>
            <a href="#timeline" className="hover:text-rose-400 transition-colors">{t.timeline}</a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">{t.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 font-mono text-xs backdrop-blur-md">
              {(['RU', 'KZ', 'EN'] as Language[]).map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                    lang === item
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40 scale-105'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <a 
              href="https://t.me/askar_baidildin" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition-all text-sm font-semibold shadow-lg shadow-rose-500/25 active:scale-95"
            >
              Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Основной контейнер */}
      <main className="relative z-10 pt-32">
        
        {/* HERO БЛОК */}
        <section id="hero" className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                {t.roleTag}
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {t.heroTitlePrefix}
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Аскар
                </span> 👋<br />
                {t.heroTitleSuffix}
              </h1>

              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#projects" 
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-semibold shadow-xl shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  {t.myProjectsBtn}
                </a>
                <a 
                  href="https://github.com/MisterStrawberry" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all"
                >
                  {t.githubBtn}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xl font-bold text-white">{t.eduStatTitle}</div>
                  <div className="text-xs text-gray-400 font-mono">{t.eduStatSub}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xl font-bold text-rose-400">{t.aiStatTitle}</div>
                  <div className="text-xs text-gray-400 font-mono">{t.aiStatSub}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xl font-bold text-indigo-400">ReactJS</div>
                  <div className="text-xs text-gray-400 font-mono">Frontend Stack</div>
                </div>
              </div>
            </div>

            {/* ИНТЕРАКТИВНАЯ JSON-КОНСОЛЬ */}
            <div className="lg:col-span-5">
              <div className="bg-[#121522] border border-white/20 rounded-3xl p-6 shadow-2xl relative group hover:border-rose-500/40 transition-all">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">developer_profile.json</span>
                </div>

                <pre className="text-xs text-rose-300 font-mono leading-relaxed overflow-x-auto">
<code>{`{
  "developer": "Askar",
  "university": "D. Serikbayev EKTU",
  "handle": "MisterStrawberry",
  "role": "Software Engineer",
  "education": "2023 - Present",
  "featuredProject": "NeuroTales",
  "skills": ["React", "JavaScript", "Tailwind", "FastAPI", "TTS Systems"]
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* --- БЛОК О СЕБЕ --- */}
        <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t.aboutTitle}</h2>
            <p className="text-gray-400 text-base md:text-lg">{t.aboutSubtitle}</p>
          </div>

          <div className="bg-[#121522] border border-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl mb-10 text-gray-200 leading-relaxed text-base md:text-lg space-y-4">
            <p className="border-l-4 border-rose-500 pl-4">{t.aboutP1}</p>
            <p className="border-l-4 border-indigo-500 pl-4">{t.aboutP2}</p>
          </div>

          {/* Интерактивные 3D карточки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InteractiveCard
              icon="🎨"
              title={t.aboutCard1Title}
              desc={t.aboutCard1Desc}
              accentColor="border-rose-500/50"
            />
            <InteractiveCard
              icon="🤖"
              title={t.aboutCard2Title}
              desc={t.aboutCard2Desc}
              accentColor="border-indigo-500/50"
            />
            <InteractiveCard
              icon="⚡"
              title={t.aboutCard3Title}
              desc={t.aboutCard3Desc}
              accentColor="border-emerald-500/50"
            />
          </div>
        </section>

        {/* ИНФОРМАЦИЯ О ВКТУ В ГАЛЕРЕЕ */}
        <DomeGallery 
          label={t.galleryLabel} 
          aboutUniversityTitle={t.aboutUniversityTitle}
          aboutUniversityDesc={t.aboutUniversityDesc}
        />

        {/* ТЕХНОЛОГИЧЕСКИЙ СТЕК С КЛИКАБЕЛЬНЫМИ ССЫЛКАМИ */}
        <section id="tech" className="py-20 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.techTitle}</h2>
            <p className="text-gray-400">{t.techSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-[#121522] border border-white/15 rounded-2xl p-6 hover:border-rose-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-rose-400">Frontend</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {['React.js', 'JavaScript', 'Tailwind CSS', 'Material UI'].map((item) => (
                  <a
                    key={item}
                    href={TECH_LINKS[item]}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-200 hover:border-rose-400 hover:bg-rose-500/20 hover:text-white transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Backend & AI */}
            <div className="bg-[#121522] border border-white/15 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Backend & AI</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {['Python', 'FastAPI', 'Node.js', 'OpenAI API'].map((item) => (
                  <a
                    key={item}
                    href={TECH_LINKS[item]}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-200 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#121522] border border-white/15 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Tools</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {['Git / GitHub', 'GitHub Pages', 'Vite'].map((item) => (
                  <a
                    key={item}
                    href={TECH_LINKS[item]}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-200 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ПРОЕКТЫ */}
        <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="bg-[#121522] border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-rose-500/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold">
                  {t.featuredTag}
                </span>

                <h3 className="text-3xl font-extrabold text-white">NeuroTales</h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {t.neuroDesc}
                </p>

                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✨ <strong>Опции:</strong> {t.neuroF1}</li>
                  <li>🎙️ <strong>Озвучка:</strong> {t.neuroF2}</li>
                  <li>⚙ <strong>Настройки:</strong> {t.neuroF3}</li>
                </ul>
              </div>

              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-[#131622] p-2">
                <div className="w-full h-72 rounded-xl flex items-center justify-center bg-gradient-to-tr from-rose-900/30 to-indigo-900/30 border border-white/5 text-center p-6">
                  <div>
                    <div className="text-4xl mb-3">📖✨</div>
                    <div className="text-white font-bold text-lg">NeuroTales Interactive UI</div>
                    <div className="text-xs text-gray-400 mt-1">AI Interactive Storyteller Engine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ОБРАЗОВАНИЕ */}
        <section id="timeline" className="py-20 px-6 md:px-12 max-w-4xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.eduTitle}</h2>
          </div>

          <div className="bg-[#121522] border border-white/15 rounded-2xl p-8 relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{t.eduDegree}</h3>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full">
                {t.eduYears}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{t.eduSpec}</p>
          </div>
        </section>

        {/* КОНТАКТЫ */}
        <section id="contact" className="py-20 px-6 md:px-12 max-w-3xl mx-auto text-center scroll-mt-20">
          <div className="bg-[#121522] border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">{t.contactTitle}</h2>
            <p className="text-gray-400 mb-8">{t.contactSub}</p>
            
            <a 
              href="https://t.me/askar_baidildin" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-semibold shadow-xl shadow-rose-500/30 hover:scale-105 transition-all"
            >
              {t.telegramBtn}
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/10 text-center text-xs text-gray-500 font-mono">
        © 2026 MisterStrawberry (Аскар). GitHub Pages Portfolio.
      </footer>
    </div>
  )
}

export default Landing