export const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_catalog: 'Products',
    nav_find: 'Help Me Choose',
    nav_knowledge: 'Knowledge Bank',
    nav_expert: 'Talk to Our Expert',
    nav_compare: 'Compare',

    // Hero
    hero_title: 'Power Your Drive,\nCharge with Confidence',
    hero_subtitle:
      'Find the perfect EV charger for your home, business, or fleet — built for reliability and smart charging.',
    hero_choose: 'Help Me Choose',
    hero_knowledge: 'Knowledge Bank',
    hero_browse: 'Browse Products',
    hero_expert: 'Talk to Our Expert',

    // Featured / Best Sellers
    section_featured: 'Best Sellers',
    view_all: 'View All Products',

    // Catalog
    catalog_title: 'Products',
    catalog_search_placeholder: 'Search products...',
    filter_category: 'Category',
    filter_all_categories: 'All categories',
    filter_brand: 'Brand',
    filter_all_brands: 'All brands',
    filter_price: 'Price',
    filter_sort_default: 'Default',
    filter_sort_low_high: 'Price: Low to High',
    filter_sort_high_low: 'Price: High to Low',
    filter_power: 'Power Output',
    filter_connector: 'Connector Type',
    filter_all_connectors: 'All connectors',
    filter_phase: 'Phase',
    filter_all_phases: 'All phases',
    filter_single: 'Single Phase',
    filter_three: 'Three Phase',
    filter_clear: 'Clear filters',
    filter_power_all: 'All',
    filter_power_7: 'Up to 7 kW',
    filter_power_7_22: '7–22 kW',
    filter_power_22: '22+ kW',
    results_count_one: '1 product found',
    results_count: '{n} products found',
    catalog_empty_title: 'No products match your filters.',
    catalog_empty_sub: 'Try adjusting or clearing your filters.',

    // Product card / detail
    product_kw: '{n} kW',
    product_contact: 'Contact for price',
    product_back: '← Back to Products',
    product_not_found: 'Product not found',
    product_features: 'Key Features',
    product_description: 'Product Description',
    product_specs: 'Specifications',
    product_downloads: 'Datasheet',
    product_quote: 'Request a Quote',
    product_compare: 'Compare',
    product_compare_added: 'Added to compare',
    product_compare_remove: 'Remove',
    spec_power: 'Power Output',
    spec_connector: 'Connector Type',
    spec_phase: 'Phase',
    spec_installation: 'Installation Type',
    spec_smart: 'Smart Features',
    spec_category: 'Category',
    spec_brand: 'Brand',
    spec_warranty: 'Warranty',
    spec_yes: 'Yes',
    spec_no: 'No',

    // Expert modal
    expert_title: 'Talk to Our Expert',
    expert_subtitle: "Fill in your details and our team will get back to you shortly.",
    form_name: 'Your Name',
    form_name_placeholder: 'e.g. Ahmed Mohamed',
    form_mobile: 'Mobile Number',
    form_mobile_placeholder: 'e.g. +20 10 1234 5678',
    form_submit: 'Send Request',
    form_submitting: 'Sending...',
    form_success_title: 'Request Sent!',
    form_success_body: 'Your request has been sent to our team. One of our team members will contact you shortly.',
    form_close: 'Close',
    form_required: 'This field is required.',

    // Quote modal
    quote_title: 'Request a Quote',
    quote_subtitle: 'We will prepare a custom quote and contact you shortly.',
    quote_product_label: 'Product',

    // Compare
    compare_title: 'Compare Products',
    compare_bar_label: 'Comparing {n} products',
    compare_btn: 'Compare Now',
    compare_clear: 'Clear all',
    compare_max: 'Max 3 products',
    compare_empty: 'Select 2 or more products to compare.',
    compare_go: 'Go to Compare',

    // Knowledge Bank
    kb_title: 'Knowledge Bank',
    kb_subtitle: 'Everything you need to know about EV chargers',
    kb_faq: [
      {
        q: 'What is an EV charger?',
        a: 'An EV charger (Electric Vehicle Supply Equipment) is a device that supplies electric energy to charge plug-in electric vehicles. Chargers range from simple portable units to high-power commercial fast chargers.',
      },
      {
        q: 'What is the difference between Level 1, Level 2, and DC fast charging?',
        a: "Level 1 uses a standard household socket (~2.4 kW). Level 2 uses a dedicated 240V circuit (3.7–22 kW) and is the most common home/commercial choice. DC fast chargers (50–350 kW) bypass the car's onboard charger and charge the battery directly, making them ideal for public and fleet use.",
      },
      {
        q: 'What is a Type 2 connector?',
        a: 'Type 2 (IEC 62196) is the standard EV connector in the Middle East, Europe, and many other regions. It supports both single-phase and three-phase AC charging and is compatible with virtually all modern EVs.',
      },
      {
        q: 'What is the difference between single-phase and three-phase charging?',
        a: 'Single-phase power (available in most homes) limits AC charging to about 7.4 kW. Three-phase power (common in commercial buildings) enables charging up to 22 kW or more, significantly reducing charge time.',
      },
      {
        q: 'How long does it take to fully charge an EV?',
        a: "It depends on the car's battery size and the charger speed. A 60 kWh battery takes ~8 hours on a 7 kW charger, ~3 hours on a 22 kW charger, and under 1 hour on a 50 kW DC fast charger.",
      },
      {
        q: 'Do I need a smart charger?',
        a: 'Smart chargers allow you to schedule charging during off-peak electricity hours, monitor energy usage, and control the unit remotely via an app. They are especially valuable for home users wanting to save on electricity costs and for businesses managing multiple charge points.',
      },
      {
        q: 'Can I install an EV charger outdoors?',
        a: 'Yes. Chargers rated IP54 or higher are weatherproof and suitable for outdoor installation. Our commercial units are rated IP54 and our wall chargers are rated IP65, suitable for all weather conditions.',
      },
      {
        q: 'What is OCPP?',
        a: 'OCPP (Open Charge Point Protocol) is an open standard that allows EV chargers to communicate with charge point management software. It enables remote monitoring, billing, and fleet management across chargers from different manufacturers.',
      },
      {
        q: 'What is load balancing?',
        a: "Load balancing (or dynamic load management) automatically distributes available power across multiple charge points to prevent overloading a building's electrical supply. This is essential for multi-unit installations in homes, offices, and fleets.",
      },
      {
        q: 'How do I choose the right charger?',
        a: 'Consider: (1) location — home, business, or public; (2) number of vehicles to charge simultaneously; (3) your available power supply — single or three phase; (4) whether you want smart features; (5) your budget. Use our "Help Me Choose" tool for a guided recommendation.',
      },
      {
        q: 'What is a GBT connector?',
        a: 'GBT (GB/T) is the Chinese national standard for EV charging connectors, used in Chinese-made vehicles like BYD, NIO, and Chery. GB/T DC and AC connectors are different from European Type 2 and CCS standards.',
      },
      {
        q: 'Can I use a Type 2 charger with a Chinese car?',
        a: 'No — Chinese imported cars (BYD, NIO, Chery, etc.) use the GBT standard, which requires a GBT-compatible charger or cable. Using the wrong connector type will not work and may damage the charging port.',
      },
      {
        q: 'What warranty do your products carry?',
        a: 'Warranty terms vary by product and brand. Each product page lists the specific warranty period. Generally, our wall-mounted chargers come with a 2-year manufacturer warranty, and portable chargers with a 1-year warranty.',
      },
      {
        q: 'Do I need a licensed electrician to install a wall charger?',
        a: 'Yes. Wall-mounted EV chargers must be installed by a licensed electrician to ensure safety and compliance with local electrical codes. Improper installation may void the warranty and create safety hazards.',
      },
      {
        q: 'What happens if I live in an apartment?',
        a: 'If you live in an apartment, installing a wall charger may require approval from your building management. A portable charger is often the most practical solution. Contact us at <a href="#contact" class="text-brand-sky hover:underline">our contact page</a> for tailored advice.',
      },
    ],

    // Contact section
    contact_title: 'Contact Us',
    contact_subtitle: "Have a question or need a custom solution? We're here to help.",
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_address: 'Address',
    contact_hours: 'Business Hours',
    contact_phone_val: '+20 12 2213 7316',
    contact_email_val: 'info@solargyco.com',
    contact_address_val: '15 El Sayeda Khadiga Street, Nasr City, Cairo, Egypt',
    contact_hours_val: 'Sunday – Thursday, 9:00 AM – 5:00 PM',

    // Questionnaire
    q_step: 'Step {current} of {total}',
    q_back: '← Back',
    q_next: 'Next →',
    q_finish: 'See Recommendations',

    // Results
    results_title: 'Your Recommended Products',
    results_matched: 'Matched for: {tags}.',
    results_based: 'Based on your preferences.',
    results_none_title: 'No exact matches found.',
    results_none_sub: 'Browse our full catalog to find the right product.',
    results_browse: 'Browse All Products',
    results_retake: '← Retake the questionnaire',
    results_browse_all: 'Browse all products instead →',

    // Footer
    footer_tagline: 'Reliable EV charging solutions for home, business, and on the go.',
    footer_links: 'Quick Links',
    footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
  },

  ar: {
    // Nav
    nav_home: 'الرئيسية',
    nav_catalog: 'المنتجات',
    nav_find: 'ساعدني في الاختيار',
    nav_knowledge: 'بنك المعلومات',
    nav_expert: 'تحدث مع خبيرنا',
    nav_compare: 'المقارنة',

    // Hero
    hero_title: 'اشحن سيارتك\nبثقة واحترافية',
    hero_subtitle:
      'اعثر على الشاحن المثالي لسيارتك الكهربائية في المنزل أو العمل أو أسطول المركبات — موثوقية وذكاء في كل شحنة.',
    hero_choose: 'ساعدني في الاختيار',
    hero_knowledge: 'بنك المعلومات',
    hero_browse: 'تصفح المنتجات',
    hero_expert: 'تحدث مع خبيرنا',

    // Featured / Best Sellers
    section_featured: 'الأكثر مبيعاً',
    view_all: 'عرض جميع المنتجات',

    // Catalog
    catalog_title: 'المنتجات',
    catalog_search_placeholder: 'ابحث عن منتج...',
    filter_category: 'الفئة',
    filter_all_categories: 'جميع الفئات',
    filter_brand: 'العلامة التجارية',
    filter_all_brands: 'جميع العلامات',
    filter_price: 'السعر',
    filter_sort_default: 'افتراضي',
    filter_sort_low_high: 'السعر: من الأقل إلى الأعلى',
    filter_sort_high_low: 'السعر: من الأعلى إلى الأقل',
    filter_power: 'قوة الشحن',
    filter_connector: 'نوع الموصل',
    filter_all_connectors: 'جميع الموصلات',
    filter_phase: 'الطور',
    filter_all_phases: 'جميع الأطوار',
    filter_single: 'أحادي الطور',
    filter_three: 'ثلاثي الأطوار',
    filter_clear: 'مسح التصفية',
    filter_power_all: 'الكل',
    filter_power_7: 'حتى 7 كيلوواط',
    filter_power_7_22: '7–22 كيلوواط',
    filter_power_22: 'أكثر من 22 كيلوواط',
    results_count_one: 'منتج واحد',
    results_count: '{n} منتجات',
    catalog_empty_title: 'لا توجد منتجات تطابق التصفية.',
    catalog_empty_sub: 'جرّب تعديل أو مسح خيارات التصفية.',

    // Product card / detail
    product_kw: '{n} كيلوواط',
    product_contact: 'تواصل للسعر',
    product_back: 'العودة إلى المنتجات →',
    product_not_found: 'المنتج غير موجود',
    product_features: 'المزايا الرئيسية',
    product_description: 'وصف المنتج',
    product_specs: 'المواصفات',
    product_downloads: 'الكتالوج',
    product_quote: 'طلب عرض سعر',
    product_compare: 'مقارنة',
    product_compare_added: 'أُضيف للمقارنة',
    product_compare_remove: 'إزالة',
    spec_power: 'قوة الشحن',
    spec_connector: 'نوع الموصل',
    spec_phase: 'الطور',
    spec_installation: 'نوع التركيب',
    spec_smart: 'ميزات ذكية',
    spec_category: 'الفئة',
    spec_brand: 'العلامة التجارية',
    spec_warranty: 'الضمان',
    spec_yes: 'نعم',
    spec_no: 'لا',

    // Expert modal
    expert_title: 'تحدث مع خبيرنا',
    expert_subtitle: 'أدخل بياناتك وسيتواصل معك فريقنا في أقرب وقت.',
    form_name: 'الاسم',
    form_name_placeholder: 'مثال: أحمد محمد',
    form_mobile: 'رقم الجوال',
    form_mobile_placeholder: 'مثال: 01012345678',
    form_submit: 'إرسال الطلب',
    form_submitting: 'جارٍ الإرسال...',
    form_success_title: 'تم الإرسال!',
    form_success_body: 'تم إرسال طلبك إلى فريقنا. سيتواصل معك أحد أعضاء الفريق قريباً.',
    form_close: 'إغلاق',
    form_required: 'هذا الحقل مطلوب.',

    // Quote modal
    quote_title: 'طلب عرض سعر',
    quote_subtitle: 'سنُعدّ لك عرض سعر مخصصاً ونتواصل معك قريباً.',
    quote_product_label: 'المنتج',

    // Compare
    compare_title: 'مقارنة المنتجات',
    compare_bar_label: 'تتم مقارنة {n} منتجات',
    compare_btn: 'قارن الآن',
    compare_clear: 'مسح الكل',
    compare_max: 'الحد الأقصى 3 منتجات',
    compare_empty: 'اختر منتجين أو أكثر للمقارنة.',
    compare_go: 'الذهاب إلى المقارنة',

    // Knowledge Bank
    kb_title: 'بنك المعلومات',
    kb_subtitle: 'كل ما تحتاج معرفته عن شواحن السيارات الكهربائية',
    kb_faq: [
      {
        q: 'ما هو شاحن السيارة الكهربائية؟',
        a: 'شاحن السيارة الكهربائية هو جهاز يوفر الطاقة الكهربائية لشحن السيارات الكهربائية القابلة للتوصيل. تتراوح الشواحن من الوحدات المحمولة البسيطة إلى الشواحن السريعة التجارية عالية القدرة.',
      },
      {
        q: 'ما الفرق بين المستوى 1 والمستوى 2 والشحن السريع DC؟',
        a: 'المستوى 1 يستخدم مقبس منزلي عادي (~2.4 كيلوواط). المستوى 2 يستخدم دائرة 240 فولت مخصصة (3.7–22 كيلوواط) وهو الأكثر شيوعاً للمنازل والمنشآت التجارية. شواحن DC السريعة (50–350 كيلوواط) تشحن البطارية مباشرة.',
      },
      {
        q: 'ما هو موصل Type 2؟',
        a: 'Type 2 (IEC 62196) هو الموصل القياسي للسيارات الكهربائية في منطقة الشرق الأوسط وأوروبا. يدعم الشحن أحادي وثلاثي الطور وهو متوافق مع جميع السيارات الكهربائية الأوروبية الحديثة.',
      },
      {
        q: 'ما الفرق بين الشحن أحادي الطور وثلاثي الطور؟',
        a: 'الطاقة أحادية الطور تُقيّد الشحن بحوالي 7.4 كيلوواط. الطاقة ثلاثية الأطوار تتيح الشحن بقدرة 22 كيلوواط أو أكثر مما يقلل وقت الشحن بشكل كبير.',
      },
      {
        q: 'كم يستغرق شحن السيارة الكهربائية بالكامل؟',
        a: 'يعتمد ذلك على حجم بطارية السيارة وسرعة الشاحن. بطارية 60 كيلوواط/ساعة تحتاج ~8 ساعات مع شاحن 7 كيلوواط، و~3 ساعات مع 22 كيلوواط.',
      },
      {
        q: 'هل أحتاج إلى شاحن ذكي؟',
        a: 'الشواحن الذكية تتيح جدولة الشحن في أوقات انخفاض أسعار الكهرباء، ومراقبة الاستهلاك، والتحكم عن بُعد عبر تطبيق.',
      },
      {
        q: 'هل يمكن تركيب شاحن كهربائي في الخارج؟',
        a: 'نعم. الشواحن المُصنَّفة IP54 أو أعلى مقاومة للعوامل الجوية. وحداتنا التجارية مُصنَّفة IP54 وشواحن الجدار مُصنَّفة IP65.',
      },
      {
        q: 'ما هو بروتوكول OCPP؟',
        a: 'OCPP هو معيار مفتوح يتيح للشواحن التواصل مع برامج إدارة نقاط الشحن، مما يُمكِّن المراقبة عن بُعد والفوترة وإدارة الأسطول.',
      },
      {
        q: 'ما هو موصل GBT؟',
        a: 'GBT (GB/T) هو المعيار الصيني الوطني لموصلات شحن السيارات الكهربائية، ويُستخدم في السيارات الصينية مثل BYD وNIO وChery.',
      },
      {
        q: 'هل يمكنني استخدام شاحن Type 2 مع سيارة صينية؟',
        a: 'لا — السيارات الصينية المستوردة (BYD, NIO, Chery) تستخدم معيار GBT الذي يتطلب شاحناً أو كابلاً متوافقاً مع GBT.',
      },
      {
        q: 'ما هي فترة الضمان للمنتجات؟',
        a: 'تختلف شروط الضمان حسب المنتج والعلامة التجارية. بشكل عام، تأتي شواحن الجدار بضمان سنتين وشواحن المحمول بضمان سنة واحدة.',
      },
      {
        q: 'هل أحتاج إلى كهربائي مرخص لتركيب شاحن الجدار؟',
        a: 'نعم. يجب أن يقوم كهربائي مرخص بتركيب شواحن الجدار لضمان السلامة والامتثال للوائح الكهربائية المحلية.',
      },
      {
        q: 'ماذا يحدث لو كانت سيارتي تستخدم بروتوكولاً مختلفاً عن الشاحن؟',
        a: 'لن تتمكن من الشحن. استخدام موصل غير متوافق لن يعمل وقد يتلف منفذ الشحن. تأكد دائماً من نوع الموصل قبل الشراء.',
      },
      {
        q: 'ما الفرق بين الشاحن المحمول وشاحن الجدار؟',
        a: 'الشاحن المحمول يعمل بمقبس عادي ويمكن حمله في أي مكان، لكنه أبطأ. شاحن الجدار يتطلب تركيباً ثابتاً لكنه أسرع وأكثر ملاءمة للاستخدام اليومي.',
      },
      {
        q: 'ماذا لو كنت أسكن في شقة؟',
        a: 'إذا كنت تسكن في شقة، قد يتطلب تركيب شاحن جدار موافقة إدارة المبنى. الشاحن المحمول هو الحل الأكثر عملية في الغالب. تواصل معنا عبر <a href="#contact" class="text-brand-sky hover:underline">صفحة التواصل</a> للحصول على مشورة مخصصة.',
      },
    ],

    // Contact section
    contact_title: 'تواصل معنا',
    contact_subtitle: 'هل لديك سؤال أو تحتاج حلاً مخصصاً؟ نحن هنا للمساعدة.',
    contact_phone: 'الهاتف',
    contact_email: 'البريد الإلكتروني',
    contact_address: 'العنوان',
    contact_hours: 'ساعات العمل',
    contact_phone_val: '+20 12 2213 7316',
    contact_email_val: 'info@solargyco.com',
    contact_address_val: '15 شارع السيدة خديجة، مدينة نصر، القاهرة، مصر',
    contact_hours_val: 'الأحد – الخميس، 9:00 ص – 5:00 م',

    // Questionnaire
    q_step: 'الخطوة {current} من {total}',
    q_back: 'رجوع →',
    q_next: '← التالي',
    q_finish: 'عرض التوصيات',

    // Results
    results_title: 'المنتجات الموصى بها',
    results_matched: 'مطابق لـ: {tags}.',
    results_based: 'بناءً على تفضيلاتك.',
    results_none_title: 'لا توجد نتائج مطابقة.',
    results_none_sub: 'تصفح كتالوجنا الكامل للعثور على المنتج المناسب.',
    results_browse: 'تصفح جميع المنتجات',
    results_retake: 'إعادة الاستبيان ←',
    results_browse_all: 'تصفح جميع المنتجات →',

    // Footer
    footer_tagline: 'حلول شحن موثوقة للمنازل والمنشآت التجارية وأسطول المركبات.',
    footer_links: 'روابط سريعة',
    footer_contact: 'تواصل معنا',
    footer_rights: 'جميع الحقوق محفوظة.',
  },
}
