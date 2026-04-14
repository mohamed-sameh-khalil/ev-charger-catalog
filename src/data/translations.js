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
        a: `<p>An EV charger is a device that supplies electrical power to charge your electric car's battery. Think of it like a fuel pump — but instead of petrol, it delivers electricity.</p>
<p>Chargers come in different power levels: slow home chargers, medium home or workplace chargers, and fast public chargers. The higher the power (measured in kilowatts, kW), the faster your car charges.</p>`,
      },
      {
        q: 'What is the difference between AC charging and DC charging?',
        a: `<p><strong>AC charging (Alternating Current)</strong> is the most common type. The electricity from the wall is AC, and your car has a built-in converter (called an on-board charger) that turns it into DC to store in the battery. AC chargers are typically used at home or workplaces. They are slower but affordable and easy to install.</p>
<p><strong>DC charging (Direct Current)</strong> skips the car's on-board converter and sends power directly to the battery. This is why DC chargers are much faster — you can add a lot of range in just 20–30 minutes. DC chargers are usually found at public fast-charging stations.</p>`,
      },
      {
        q: 'Is DC fast charging harmful to the EV battery?',
        a: `<p>This is a very common concern. The short answer: occasional DC fast charging is perfectly fine. Modern EVs are designed to handle it.</p>
<p>However, if you use DC fast charging as your only charging method every single day over many years, it can very slightly reduce battery capacity over time. The best habit is to use AC charging at home most of the time, and use DC fast charging when you need to top up quickly on the road.</p>
<div class="kb-tip">Most EV manufacturers recommend keeping your battery between 20% and 80% for daily use to extend its long-term life.</div>`,
      },
      {
        q: 'What is the difference between single-phase and three-phase charging?',
        a: `<p><strong>Single-phase</strong> is the standard electricity supply in most homes. It can deliver up to about 7.4 kW for EV charging.</p>
<p><strong>Three-phase</strong> is a stronger power supply used in commercial buildings and some modern homes. It can deliver up to 22 kW for AC charging, meaning your car charges roughly 3 times faster — if your car supports it.</p>
<p>If your home only has single-phase power, a 22 kW charger will simply charge at 7.4 kW — it won't overload anything, it just uses what's available.</p>`,
      },
      {
        q: 'How long does it take to fully charge an EV?',
        a: `<p>It depends on two things: the charger's power and your car's battery size. As a rough guide:</p>
<p>• A slow 3.7 kW home charger: 10–20 hours for a full charge<br>• A 7.4 kW home charger: 6–10 hours<br>• A 22 kW AC charger (if your car supports it): 2–5 hours<br>• A 50–150 kW DC fast charger: 30–60 minutes for 80%<br>• A 150–350 kW DC ultra-fast charger: 15–30 minutes for 80%</p>
<p>Most people charge overnight at home and wake up with a full battery — just like charging a phone.</p>`,
      },
      {
        q: 'What is load balancing and why does it matter?',
        a: `<p>Load balancing is a feature that makes your EV charger work intelligently alongside the rest of your home or building's electricity.</p>
<p>Here is the problem it solves: every home or building has a maximum amount of electricity it can use at one time. If your EV charger, air conditioner, washing machine, and other appliances all run at full power at the same time, you can exceed this limit and trip the circuit breaker.</p>
<p><strong>How load balancing helps:</strong> A smart charger with load balancing monitors how much electricity the rest of your home is using in real time. If your total usage is getting close to the limit, the charger automatically reduces its charging power. When the other appliances switch off, the charger speeds back up.</p>
<p>The result: your car always charges as fast as possible without ever overloading your electrical system — and without you needing to do anything.</p>
<div class="kb-tip">Load balancing is especially useful in apartments and buildings where the shared electrical capacity is limited.</div>`,
      },
      {
        q: 'My car has a 7.4 kW on-board charger. Is buying a 22 kW charger a waste?',
        a: `<p>Not at all — it is actually a smart and future-proof choice.</p>
<p>Today, your car will charge at its maximum of 7.4 kW regardless of whether you install a 7.4 kW or 22 kW charger. The car controls the charging speed, not just the charger.</p>
<div class="kb-tip">If you buy a new EV in the future with a 22 kW on-board charger, your home charger is already ready. You won't need to replace it — saving you time and money.</div>`,
      },
      {
        q: 'What are the different types of charging connectors?',
        a: `<p>Different regions and car brands use different connectors. Here is a full overview:</p>
<table class="kb-table">
  <tr><th>Connector</th><th>Type</th><th>Used by / where</th></tr>
  <tr><td><strong>Type 2 (Mennekes)</strong></td><td>AC</td><td>Standard in Europe and the Middle East. Used by most modern EVs. Supports up to 22 kW.</td></tr>
  <tr><td><strong>Type 1 (SAE J1772)</strong></td><td>AC</td><td>Standard in the USA, Canada, and Japan. Found on American and Japanese EVs. Supports up to 7.4 kW.</td></tr>
  <tr><td><strong>GB/T (AC)</strong></td><td>AC</td><td>Chinese national standard. Used on Chinese EVs like BYD, SAIC, and Chery. Growing in Egypt and the Middle East.</td></tr>
  <tr><td><strong>CCS2</strong></td><td>DC fast</td><td>Standard DC fast charging in Europe and the Middle East. Combines Type 2 AC + DC pins in one plug.</td></tr>
  <tr><td><strong>GB/T (DC)</strong></td><td>DC fast</td><td>Chinese standard for DC fast charging. Used on Chinese EVs alongside the AC GB/T port.</td></tr>
  <tr><td><strong>CHAdeMO</strong></td><td>DC fast</td><td>Older DC standard, mainly used by Nissan and some Japanese brands. Becoming less common.</td></tr>
</table>
<div class="kb-tip">Always check your car's charging port type before buying a charger or cable. If you own a Chinese EV, make sure the charger supports GB/T.</div>`,
      },
      {
        q: 'What are the different types of charging cables (Type 1, Type 2, GB/T)?',
        a: `<p>A charging cable connects your car to the charger. The cable type must match both your car's inlet port and the charger's outlet.</p>
<table class="kb-table">
  <tr><th>Cable type</th><th>Fits these cars</th><th>Max speed</th></tr>
  <tr><td><strong>Type 2 to Type 2</strong></td><td>European and most modern EVs sold in the Middle East</td><td>Up to 22 kW (three-phase)</td></tr>
  <tr><td><strong>Type 1 to Type 2</strong></td><td>American and older Japanese EVs — connects them to European / Middle East chargers</td><td>Up to 7.4 kW (single-phase)</td></tr>
  <tr><td><strong>GB/T to GB/T</strong></td><td>Chinese EVs (BYD, SAIC, Chery, GAC, etc.)</td><td>Up to 7.4 kW or higher depending on car</td></tr>
  <tr><td><strong>GB/T to Type 2</strong></td><td>Chinese EVs connecting to a Type 2 charger</td><td>Depends on car's on-board charger</td></tr>
</table>
<p>For AC public charging, the cable is usually not attached to the charger — you bring your own. For DC fast charging, the cable is always fixed to the charger itself.</p>
<div class="kb-tip">When buying a cable, always check both ends: one end must fit your car, the other must fit the charger you plan to use.</div>`,
      },
      {
        q: 'I have an American car (like a Hummer EV). Why do I need a special charger?',
        a: `<p>The answer comes down to how electricity works differently in the USA versus Egypt.</p>
<p><strong>The electricity is different:</strong> In Egypt (and Europe), the electricity grid runs at 230V single-phase or 400V three-phase. American EVs like the Hummer EV use a Type 1 connector (SAE J1772) for AC charging, which is a single-phase connection only.</p>
<p><strong>Why a standard European wall box does not give you the full speed:</strong> A standard 7.4 kW wall box will charge your American EV — but only through a Type 1 to Type 2 cable, and the speed will be limited compared to what the car is actually capable of.</p>
<p><strong>Why a charger like Besen at 11.5 kW / 48 A works better:</strong> Some American EVs have a large on-board charger designed to accept high-current single-phase power — up to 48 A, which at 240V gives around 11.5 kW. A charger like Besen delivers exactly this, meaning your car charges significantly faster.</p>
<div class="kb-tip">If you own an American EV in Egypt, ask us about the right charger for your specific model. Not every standard wall box will give you the best charging speed your car is capable of.</div>`,
      },
      {
        q: 'What is a portable charger and when do I use it?',
        a: `<p>A portable charger (also called a granny charger or travel charger) is a compact charging cable you can carry in your car. It lets you charge from different types of power outlets without needing a fixed wall charger installed.</p>
<table class="kb-table">
  <tr><th>Power source</th><th>Current</th><th>Charging speed</th></tr>
  <tr><td>Regular wall socket</td><td>8–10 A max</td><td>~1.8–2.3 kW</td></tr>
  <tr><td>Dedicated power outlet (16 A)</td><td>16 A</td><td>~3.7 kW</td></tr>
  <tr><td>Dedicated power outlet (32 A)</td><td>32 A</td><td>~7.4 kW</td></tr>
</table>
<div class="kb-tip">If you have a 32 A dedicated outlet available, a good portable charger can give you the same speed as a fixed 7.4 kW wall charger — with the flexibility to take it anywhere.</div>
<div class="kb-warn">Never use a regular extension lead or multi-plug adapter for EV charging. Always plug directly into a properly rated socket.</div>`,
      },
      {
        q: 'Do I need a smart charger or is a basic charger enough?',
        a: `<p>A basic charger will charge your car perfectly well. But a smart charger gives you extra features that many EV owners find very useful over time.</p>
<ul class="kb-list">
  <li><strong>Scheduled charging</strong> — Set your car to charge at night when electricity is cheaper, and stop before you wake up.</li>
  <li><strong>Remote control</strong> — Start, stop, or monitor charging from your phone, even when you are not home.</li>
  <li><strong>Charging history and energy reports</strong> — See how much electricity you have used and track your charging costs over time.</li>
</ul>
<div class="kb-tip">If you charge at home regularly, a smart charger pays for itself quickly — especially if you use scheduled charging to take advantage of lower electricity rates at off-peak hours.</div>`,
      },
      {
        q: 'I live in an apartment. Can I still have an EV charger at home?',
        a: `<p>Yes — in many cases you can. But it depends on several factors specific to your building and parking situation:</p>
<ul class="kb-list">
  <li><strong>Do you have a dedicated parking spot?</strong> If you have your own assigned parking space, installation is much more straightforward.</li>
  <li><strong>Is your parking spot close to an electricity source?</strong> The charger needs a power supply run to it. The distance and route to your electrical panel affects the cost and complexity.</li>
  <li><strong>Does your building management allow it?</strong> In some buildings, written approval is required before any electrical work can be done.</li>
  <li><strong>Portable or wall-mounted?</strong> If a fixed wall charger is not permitted, a portable charger plugged into a dedicated socket near your parking spot may be a practical alternative.</li>
  <li><strong>Shared charging for the whole building</strong> — In some cases it makes more sense to install a shared charger for multiple residents, with smart billing per user.</li>
</ul>
<div class="kb-success">Every apartment situation is different. The good news is there is almost always a solution — it just needs the right assessment.</div>
<div class="kb-contact">
  <div><p><strong>Not sure what works for your building?</strong></p><p>Contact our experts and one of our team will get back to you shortly.</p></div>
  <a href="/#contact">Contact an expert ↗</a>
</div>`,
      },
      {
        q: 'What do I need to charge at a public charging station?',
        a: `<p>Here is what you need to charge at a public station:</p>
<p><strong>1. The charging network's mobile app</strong> — Download the app of the charging company and create an account. You will use it to start and stop charging and to pay.</p>
<p><strong>2. Your charging cable (for AC charging)</strong> — AC public chargers are usually untethered, meaning they do not have a cable attached. You need to bring your own cable.</p>
<p><strong>3. For DC fast charging</strong> — DC chargers always have a fixed cable attached, so you do not need to bring one. However, make sure the connector matches your car's charging port. If not, you may need an adapter.</p>
<div class="kb-tip">Before your first trip, check whether the public chargers in your area are compatible with your car's charging protocol (CCS2, CHAdeMO, GB/T, etc.).</div>`,
      },
      {
        q: 'Can I charge any EV at any public charger?',
        a: `<p>Not always — compatibility depends on two things: the connector type and the charging protocol.</p>
<p>Most modern EVs in Europe and the Middle East use Type 2 for AC and CCS2 for DC, which are widely supported. Chinese EVs use GB/T connectors, and American EVs use Type 1. Some public chargers may not have the right connector for your car.</p>
<p>If your car's connector does not match the charger, you may be able to use an adapter. Always check before you travel to an unfamiliar station.</p>`,
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
        a: `<p>شاحن السيارة الكهربائية هو جهاز يوفر الطاقة الكهربائية لشحن بطارية سيارتك. فكّر فيه كمضخة وقود — لكن بدلاً من البنزين، يوصّل الكهرباء.</p>
<p>تأتي الشواحن بمستويات طاقة مختلفة: شواحن منزلية بطيئة، وشواحن متوسطة للمنازل وأماكن العمل، وشواحن عامة سريعة. كلما زادت الطاقة (بالكيلوواط)، كان الشحن أسرع.</p>`,
      },
      {
        q: 'ما الفرق بين الشحن بالتيار المتردد AC والتيار المستمر DC؟',
        a: `<p><strong>الشحن بالتيار المتردد (AC)</strong> هو النوع الأكثر شيوعاً. الكهرباء القادمة من الحائط تيار متردد، وتحتوي سيارتك على محوّل داخلي يحوّلها إلى تيار مستمر لتخزينها في البطارية. تُستخدم شواحن AC في المنازل وأماكن العمل وهي أبطأ لكن أرخص وأسهل تركيباً.</p>
<p><strong>الشحن بالتيار المستمر (DC)</strong> يتجاوز المحوّل الداخلي للسيارة ويرسل الطاقة مباشرةً إلى البطارية. لهذا تكون شواحن DC أسرع بكثير — يمكنك إضافة مسافة كبيرة خلال 20–30 دقيقة فقط. توجد شواحن DC عادةً في محطات الشحن السريع العامة.</p>`,
      },
      {
        q: 'هل يضر الشحن السريع DC ببطارية السيارة؟',
        a: `<p>هذا قلق شائع جداً. الإجابة المختصرة: الشحن السريع DC بصفة متقطعة آمن تماماً. صُمّمت السيارات الكهربائية الحديثة لتحمّله.</p>
<p>لكن إن استخدمت الشحن السريع DC كطريقتك الوحيدة للشحن كل يوم على مدى سنوات طويلة، قد يقلل ذلك قليلاً من سعة البطارية مع مرور الوقت. أفضل عادة هي الشحن المنزلي AC معظم الوقت، واستخدام DC عند الحاجة إلى شحن سريع في الطريق.</p>
<div class="kb-tip">تنصح معظم شركات صنع السيارات بالحفاظ على شحن البطارية بين 20% و80% في الاستخدام اليومي لإطالة عمرها.</div>`,
      },
      {
        q: 'ما الفرق بين الشحن أحادي الطور وثلاثي الطور؟',
        a: `<p><strong>أحادي الطور</strong> هو إمداد الكهرباء القياسي في معظم المنازل. يمكنه توصيل ما يصل إلى 7.4 كيلوواط لشحن السيارات.</p>
<p><strong>ثلاثي الأطوار</strong> طاقة أقوى تُستخدم في المباني التجارية وبعض المنازل الحديثة. يمكنه توصيل ما يصل إلى 22 كيلوواط، مما يعني أن سيارتك تشحن بسرعة تصل إلى 3 أضعاف — إن كانت سيارتك تدعم ذلك.</p>
<p>إن كان منزلك يعمل بطاقة أحادية الطور فقط، سيشحن الشاحن 22 كيلوواط بسرعة 7.4 كيلوواط — لن يحدث أي عطل، بل يستخدم ما هو متاح فقط.</p>`,
      },
      {
        q: 'كم يستغرق الشحن الكامل لسيارة كهربائية؟',
        a: `<p>يعتمد ذلك على شيئين: طاقة الشاحن وحجم بطارية سيارتك. كدليل تقريبي:</p>
<p>• شاحن منزلي بطيء 3.7 كيلوواط: 10–20 ساعة للشحن الكامل<br>• شاحن 7.4 كيلوواط: 6–10 ساعات<br>• شاحن AC بـ 22 كيلوواط (إن دعمته سيارتك): 2–5 ساعات<br>• شاحن DC سريع 50–150 كيلوواط: 30–60 دقيقة للوصول إلى 80%<br>• شاحن DC فائق السرعة 150–350 كيلوواط: 15–30 دقيقة للوصول إلى 80%</p>
<p>يشحن معظم الناس سياراتهم ليلاً ويستيقظون على بطارية ممتلئة — تماماً كشحن الهاتف.</p>`,
      },
      {
        q: 'ما هي موازنة الأحمال ولماذا تهمني؟',
        a: `<p>موازنة الأحمال هي ميزة تجعل شاحن سيارتك يعمل بذكاء مع باقي كهرباء منزلك أو مبناك.</p>
<p>إليك المشكلة التي تحلّها: لكل منزل أو مبنى حدٌّ أقصى لاستهلاك الكهرباء في وقت واحد. إن عملت جميع الأجهزة في وقت واحد قد تتجاوز هذا الحد وتعطّل قاطع الدائرة.</p>
<p><strong>كيف تساعد موازنة الأحمال:</strong> يراقب الشاحن الذكي استهلاك الكهرباء في منزلك لحظةً بلحظة. عند الاقتراب من الحد الأقصى، يقلل الشاحن تلقائياً من طاقة الشحن. وعند إيقاف الأجهزة الأخرى يعود إلى السرعة الكاملة.</p>
<p>النتيجة: تشحن سيارتك دائماً بأقصى سرعة ممكنة دون إرهاق الشبكة الكهربائية — وبدون أي تدخل منك.</p>
<div class="kb-tip">موازنة الأحمال مفيدة بشكل خاص في الشقق والمباني ذات الطاقة الكهربائية المشتركة المحدودة.</div>`,
      },
      {
        q: 'سيارتي تحتوي على شاحن داخلي بقدرة 7.4 كيلوواط — هل شراء شاحن 22 كيلوواط إهدار للمال؟',
        a: `<p>بالعكس تماماً — هو اختيار ذكي ومستقبلي.</p>
<p>اليوم، ستشحن سيارتك بحدها الأقصى وهو 7.4 كيلوواط سواء ركّبت شاحن 7.4 أو 22 كيلوواط. السيارة هي من يتحكم في سرعة الشحن، وليس الشاحن وحده.</p>
<div class="kb-tip">إن اشتريت مستقبلاً سيارة كهربائية جديدة بشاحن داخلي بقدرة 22 كيلوواط، فشاحن منزلك جاهز بالفعل. لن تحتاج إلى استبداله — مما يوفر عليك الوقت والمال.</div>`,
      },
      {
        q: 'ما أنواع موصلات الشحن المختلفة؟',
        a: `<p>تستخدم مناطق وماركات مختلفة موصلات مختلفة. إليك نظرة عامة شاملة:</p>
<table class="kb-table">
  <tr><th>الموصل</th><th>النوع</th><th>يُستخدم في</th></tr>
  <tr><td><strong>Type 2 (Mennekes)</strong></td><td>AC</td><td>المعيار في أوروبا والشرق الأوسط. يستخدمه معظم السيارات الكهربائية الحديثة. يدعم حتى 22 كيلوواط.</td></tr>
  <tr><td><strong>Type 1 (SAE J1772)</strong></td><td>AC</td><td>المعيار في الولايات المتحدة وكندا واليابان. للسيارات الأمريكية واليابانية. يدعم حتى 7.4 كيلوواط.</td></tr>
  <tr><td><strong>GB/T (AC)</strong></td><td>AC</td><td>المعيار الصيني الوطني. يُستخدم في BYD وSAIC وChery. ينتشر في مصر والشرق الأوسط.</td></tr>
  <tr><td><strong>CCS2</strong></td><td>DC سريع</td><td>معيار الشحن السريع DC في أوروبا والشرق الأوسط. يجمع موصل Type 2 مع دبابيس DC في قابس واحد.</td></tr>
  <tr><td><strong>GB/T (DC)</strong></td><td>DC سريع</td><td>المعيار الصيني للشحن السريع DC. يُستخدم في السيارات الصينية.</td></tr>
  <tr><td><strong>CHAdeMO</strong></td><td>DC سريع</td><td>معيار قديم، يُستخدم أساساً في Nissan وبعض الماركات اليابانية.</td></tr>
</table>
<div class="kb-tip">تحقق دائماً من نوع منفذ الشحن في سيارتك قبل شراء شاحن أو كابل. إن كنت تمتلك سيارة صينية، تأكد من أن الشاحن يدعم GB/T.</div>`,
      },
      {
        q: 'ما أنواع كابلات الشحن المختلفة (Type 1، Type 2، GB/T)؟',
        a: `<p>كابل الشحن يربط سيارتك بالشاحن. يجب أن يتطابق نوع الكابل مع منفذ سيارتك ومخرج الشاحن.</p>
<table class="kb-table">
  <tr><th>نوع الكابل</th><th>يناسب هذه السيارات</th><th>أقصى سرعة</th></tr>
  <tr><td><strong>Type 2 إلى Type 2</strong></td><td>السيارات الأوروبية ومعظم السيارات الحديثة في الشرق الأوسط</td><td>حتى 22 كيلوواط (ثلاثي الأطوار)</td></tr>
  <tr><td><strong>Type 1 إلى Type 2</strong></td><td>السيارات الأمريكية واليابانية القديمة — يوصّلها بشواحن أوروبية</td><td>حتى 7.4 كيلوواط (أحادي الطور)</td></tr>
  <tr><td><strong>GB/T إلى GB/T</strong></td><td>السيارات الصينية (BYD, SAIC, Chery, GAC، إلخ)</td><td>حتى 7.4 كيلوواط أو أكثر حسب السيارة</td></tr>
  <tr><td><strong>GB/T إلى Type 2</strong></td><td>السيارات الصينية للتوصيل بشاحن Type 2</td><td>يعتمد على الشاحن الداخلي للسيارة</td></tr>
</table>
<p>في محطات الشحن العامة AC، عادةً لا يكون الكابل مثبتاً في الشاحن — تحضره أنت. أما في الشحن السريع DC، يكون الكابل دائماً مثبتاً في الشاحن.</p>
<div class="kb-tip">عند شراء كابل، تحقق من الطرفين: أحدهما يجب أن يناسب سيارتك، والآخر يجب أن يناسب الشاحن الذي تنوي استخدامه.</div>`,
      },
      {
        q: 'أمتلك سيارة أمريكية (مثل Hummer EV). لماذا أحتاج شاحناً خاصاً؟',
        a: `<p>الإجابة تكمن في اختلاف الكهرباء بين الولايات المتحدة ومصر.</p>
<p><strong>الكهرباء مختلفة:</strong> في مصر (وأوروبا)، تعمل الشبكة بـ 230 فولت أحادي أو 400 فولت ثلاثي. السيارات الأمريكية مثل Hummer EV تستخدم موصل Type 1 للشحن AC، وهو اتصال أحادي الطور فقط.</p>
<p><strong>لماذا لا يعطيك شاحن الجدار الأوروبي القياسي السرعة الكاملة:</strong> سيشحن شاحن 7.4 كيلوواط سيارتك الأمريكية، لكن عبر كابل Type 1 إلى Type 2، وستكون السرعة محدودة مقارنة بما تقدر عليه السيارة فعلاً.</p>
<p><strong>لماذا يعمل شاحن مثل Besen بقدرة 11.5 كيلوواط / 48 أمبير بشكل أفضل:</strong> بعض السيارات الأمريكية لديها شاحن داخلي كبير يقبل تياراً عالياً أحادي الطور حتى 48 أمبير، مما يعطي حوالي 11.5 كيلوواط. شاحن Besen يوصّل هذا بالضبط مما يجعل سيارتك تشحن بشكل أسرع بكثير.</p>
<div class="kb-tip">إن كنت تمتلك سيارة أمريكية في مصر، اسألنا عن الشاحن المناسب لموديلك تحديداً. ليس كل شاحن جداري قياسي سيعطيك أفضل سرعة ممكنة.</div>`,
      },
      {
        q: 'ما هو الشاحن المحمول ومتى أستخدمه؟',
        a: `<p>الشاحن المحمول (يُسمى أيضاً شاحن السفر) هو كابل شحن مدمج يمكنك حمله في سيارتك. يتيح لك الشحن من مآخذ كهرباء مختلفة دون الحاجة إلى تركيب شاحن ثابت.</p>
<table class="kb-table">
  <tr><th>مصدر الكهرباء</th><th>التيار</th><th>سرعة الشحن</th></tr>
  <tr><td>مقبس جداري عادي</td><td>8–10 أمبير كحد أقصى</td><td>~1.8–2.3 كيلوواط</td></tr>
  <tr><td>مقبس مخصص (16 أمبير)</td><td>16 أمبير</td><td>~3.7 كيلوواط</td></tr>
  <tr><td>مقبس مخصص (32 أمبير)</td><td>32 أمبير</td><td>~7.4 كيلوواط</td></tr>
</table>
<div class="kb-tip">إن كان لديك مقبس مخصص 32 أمبير، يمكن لشاحن محمول جيد أن يعطيك نفس سرعة شاحن الجدار الثابت 7.4 كيلوواط — مع مرونة أخذه في أي مكان.</div>
<div class="kb-warn">لا تستخدم كابل تمديد عادي أو موزّع متعدد لشحن السيارة. وصّل دائماً مباشرةً بمقبس مُصنَّف للتيار المطلوب.</div>`,
      },
      {
        q: 'هل أحتاج إلى شاحن ذكي أم يكفي الشاحن الأساسي؟',
        a: `<p>الشاحن الأساسي سيشحن سيارتك بشكل مثالي. لكن الشاحن الذكي يمنحك ميزات إضافية يجدها كثير من أصحاب السيارات الكهربائية مفيدة جداً مع مرور الوقت.</p>
<ul class="kb-list">
  <li><strong>الشحن المجدوَل</strong> — اضبط سيارتك لتشحن ليلاً عندما تكون الكهرباء أرخص، وتتوقف قبل استيقاظك.</li>
  <li><strong>التحكم عن بُعد</strong> — ابدأ أو أوقف أو راقب الشحن من هاتفك حتى وأنت خارج المنزل.</li>
  <li><strong>سجل الشحن وتقارير الطاقة</strong> — شاهد كمية الكهرباء التي استهلكتها وتتبع تكاليف شحنك عبر الوقت.</li>
</ul>
<div class="kb-tip">إن كنت تشحن في المنزل بانتظام، يؤدي الشاحن الذكي مهمته بسرعة — خاصةً إن استخدمت الشحن المجدوَل للاستفادة من أسعار الكهرباء المنخفضة خارج أوقات الذروة.</div>`,
      },
      {
        q: 'أسكن في شقة — هل يمكنني تركيب شاحن كهربائي في المنزل؟',
        a: `<p>نعم — في كثير من الحالات يمكنك ذلك. لكنه يعتمد على عدة عوامل خاصة بمبناك وموقف سيارتك:</p>
<ul class="kb-list">
  <li><strong>هل لديك مكان ركن مخصص؟</strong> إن كان لديك موقف خاص بك، يكون التركيب أبسط بكثير.</li>
  <li><strong>هل موقف سيارتك قريب من مصدر كهرباء؟</strong> يحتاج الشاحن إلى تمديد كهربائي. المسافة والمسار إلى لوحة الكهرباء يؤثران في التكلفة والتعقيد.</li>
  <li><strong>هل تسمح إدارة المبنى بذلك؟</strong> في بعض المباني تُشترط موافقة خطية قبل أي عمل كهربائي.</li>
  <li><strong>محمول أم مثبَّت على الجدار؟</strong> إن لم يُسمح بشاحن الجدار الثابت، قد يكون الشاحن المحمول الموصَّل بمقبس مخصص بديلاً عملياً.</li>
  <li><strong>شحن مشترك للمبنى بأكمله</strong> — في بعض الحالات يكون تركيب شاحن مشترك للمقيمين مع فوترة ذكية لكل مستخدم هو الأنسب.</li>
</ul>
<div class="kb-success">كل شقة حالة مختلفة. الخبر السار أنه يكاد يكون هناك دائماً حل — يحتاج فقط إلى التقييم الصحيح.</div>
<div class="kb-contact">
  <div><p><strong>غير متأكد مما يناسب مبناك؟</strong></p><p>تواصل مع خبرائنا وسيرد عليك أحد أعضاء الفريق قريباً.</p></div>
  <a href="/#contact">تواصل مع خبير ↗</a>
</div>`,
      },
      {
        q: 'ماذا أحتاج للشحن في محطة شحن عامة؟',
        a: `<p>إليك ما تحتاجه للشحن في محطة عامة:</p>
<p><strong>1. تطبيق شبكة الشحن</strong> — حمّل تطبيق شركة الشحن وأنشئ حساباً. ستستخدمه لبدء الشحن وإيقافه والدفع.</p>
<p><strong>2. كابل الشحن (للشحن AC)</strong> — شواحن AC العامة عادةً لا تحتوي على كابل مرفق — عليك إحضار كابلك الخاص.</p>
<p><strong>3. للشحن السريع DC</strong> — شواحن DC دائماً تحتوي على كابل مثبَّت، لذا لا تحتاج إلى إحضار كابل. لكن تأكد من أن الموصل يناسب منفذ سيارتك وإلا قد تحتاج إلى محوّل.</p>
<div class="kb-tip">قبل أول رحلة، تحقق مما إذا كانت شواحن المنطقة التي ستزورها متوافقة مع بروتوكول شحن سيارتك (CCS2، CHAdeMO، GB/T، إلخ).</div>`,
      },
      {
        q: 'هل يمكنني شحن أي سيارة كهربائية في أي محطة شحن عامة؟',
        a: `<p>ليس دائماً — تعتمد التوافقية على شيئين: نوع الموصل وبروتوكول الشحن.</p>
<p>معظم السيارات الكهربائية الحديثة في أوروبا والشرق الأوسط تستخدم Type 2 للشحن AC وCCS2 للشحن DC، وهما مدعومان على نطاق واسع. السيارات الصينية تستخدم موصلات GB/T، والسيارات الأمريكية تستخدم Type 1. قد لا تحتوي بعض المحطات العامة على الموصل المناسب لسيارتك.</p>
<p>إن لم يتطابق موصل سيارتك مع الشاحن، قد تتمكن من استخدام محوّل. تحقق دائماً قبل السفر إلى محطة غير مألوفة.</p>`,
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
