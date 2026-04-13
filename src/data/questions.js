export const questions = [
  {
    id: 'protocol',
    question: {
      en: 'What charging protocol does your car use?',
      ar: 'ما بروتوكول الشحن الذي تستخدمه سيارتك؟',
    },
    options: [
      {
        value: 'gbt',
        label: {
          en: 'Chinese Protocol (e.g., BYD, NIO, Chery – most imported cars)',
          ar: 'البروتوكول الصيني (مثل BYD, NIO, Chery – معظم السيارات المستوردة)',
        },
      },
      {
        value: 'type1',
        label: {
          en: 'Type 1 (American cars like Hummer, Cadillac)',
          ar: 'النوع الأول – Type 1 (السيارات الأمريكية مثل هامر وكاديلاك)',
        },
      },
      {
        value: 'type2',
        label: {
          en: 'Type 2 (European cars)',
          ar: 'النوع الثاني – Type 2 (السيارات الأوروبية)',
        },
      },
    ],
  },
  {
    id: 'product_type',
    question: {
      en: 'What type of product do you need?',
      ar: 'ما نوع المنتج الذي تحتاجه؟',
    },
    options: [
      {
        value: 'wall',
        label: { en: 'Wall-mounted charger', ar: 'شاحن مثبَّت على الجدار' },
      },
      {
        value: 'cable',
        label: { en: 'Charging cable', ar: 'كابل شحن' },
      },
      {
        value: 'portable',
        label: { en: 'Portable charger', ar: 'شاحن محمول' },
      },
    ],
  },
  {
    id: 'phase',
    question: {
      en: 'Do you have a single-phase or three-phase meter?',
      ar: 'هل لديك عداد أحادي أم ثلاثي أوجه؟',
    },
    hasImages: true,
    options: [
      {
        value: 'single',
        label: { en: 'Single-phase meter', ar: 'عداد أحادي' },
        description: {
          en: 'Standard home meter — 2 wires',
          ar: 'العداد المنزلي العادي — سلكان',
        },
      },
      {
        value: 'three',
        label: { en: 'Three-phase meter', ar: 'عداد ثلاثي أوجه' },
        description: {
          en: 'Industrial / large property meter — 4 wires',
          ar: 'عداد صناعي أو منزل كبير — 4 أسلاك',
        },
      },
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
