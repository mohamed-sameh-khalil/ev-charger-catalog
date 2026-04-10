export const questions = [
  {
    id: 'location',
    question: { en: 'Where will you primarily charge?', ar: 'أين ستشحن سيارتك بشكل رئيسي؟' },
    options: [
      { value: 'home', label: { en: 'At home', ar: 'في المنزل' } },
      { value: 'business', label: { en: 'At my business', ar: 'في مقر عملي' } },
      { value: 'public', label: { en: 'In public / shared spaces', ar: 'في الأماكن العامة / المشتركة' } },
    ],
  },
  {
    id: 'vehicles',
    question: { en: 'How many vehicles do you need to charge?', ar: 'كم عدد السيارات التي تريد شحنها؟' },
    options: [
      { value: '1', label: { en: 'Just one vehicle', ar: 'سيارة واحدة فقط' } },
      { value: '2-5', label: { en: '2–5 vehicles', ar: '2–5 سيارات' } },
      { value: '6+', label: { en: '6 or more vehicles', ar: '6 سيارات أو أكثر' } },
    ],
  },
  {
    id: 'speed',
    question: { en: 'How fast do you need to charge?', ar: 'ما سرعة الشحن التي تحتاجها؟' },
    options: [
      { value: 'standard', label: { en: 'Standard (up to 7 kW) — overnight is fine', ar: 'عادي (حتى 7 كيلوواط) — يكفي الشحن الليلي' } },
      { value: 'fast', label: { en: 'Fast (7–22 kW) — a few hours', ar: 'سريع (7–22 كيلوواط) — بضع ساعات' } },
      { value: 'ultra', label: { en: 'Ultra-fast (22+ kW) — as quick as possible', ar: 'فائق السرعة (22+ كيلوواط) — أسرع ما يمكن' } },
    ],
  },
  {
    id: 'installation',
    question: { en: 'What type of installation do you need?', ar: 'ما نوع التركيب الذي تحتاجه؟' },
    options: [
      { value: 'wall', label: { en: 'Wall-mounted (fixed location)', ar: 'مثبَّت على الجدار (موقع ثابت)' } },
      { value: 'pedestal', label: { en: 'Pedestal / standalone unit', ar: 'وحدة مستقلة على قاعدة' } },
      { value: 'portable', label: { en: 'Portable (take it anywhere)', ar: 'محمول (يمكن أخذه في أي مكان)' } },
    ],
  },
  {
    id: 'smart',
    question: {
      en: 'Do you want smart features (app control, scheduling, energy monitoring)?',
      ar: 'هل تريد ميزات ذكية (تحكم عبر التطبيق، جدولة الشحن، مراقبة الطاقة)؟',
    },
    options: [
      { value: 'yes', label: { en: 'Yes, smart features are important', ar: 'نعم، الميزات الذكية مهمة لي' } },
      { value: 'no', label: { en: 'No, basic charging is fine', ar: 'لا، الشحن الأساسي يكفيني' } },
    ],
  },
]
