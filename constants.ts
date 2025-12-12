import { WeeklyPlan, LocalizedString } from './types';

export const UI_TRANSLATIONS: Record<string, LocalizedString> = {
  appTitle: { en: "Anytime RA Diet", hi: "एनीटाइम आर.ए. डाइट", te: "ఎనీటైమ్ RA డైట్" },
  demoMode: { en: "Demo Mode — Data not saved", hi: "डेमो मोड — डेटा सहेजा नहीं जाएगा", te: "డెమో మోడ్ — డేటా సేవ్ చేయబడదు" },
  today: { en: "Today's Plan", hi: "आज की योजना", te: "ఈ రోజు ప్లాన్" },
  tomorrowPrep: { en: "Prep for Tomorrow", hi: "कल की तैयारी", te: "రేపటి తయారీ" },
  weeklyOverview: { en: "Weekly Overview", hi: "साप्ताहिक अवलोकन", te: "వారపు అవలోకనం" },
  ingredients: { en: "Ingredients", hi: "सामग्री", te: "కావలసిన పదార్థాలు" },
  instructions: { en: "Instructions", hi: "विधि", te: "తయారీ విధానం" },
  prepTime: { en: "Prep", hi: "तैयारी", te: "తయారీ" },
  cookTime: { en: "Cook", hi: "पकाने का समय", te: "వండే సమయం" },
  mins: { en: "mins", hi: "मिनट", te: "నిమి" },
  antiInflammatory: { en: "Anti-Inflammatory", hi: "सूजन-रोधी", te: "యాంటీ ఇన్ఫ్లమేటరీ" },
  nutritionTip: { en: "Nutritionist Note", hi: "पोषण विशेषज्ञ की टिप्पणी", te: "పోషకాహార నిపుణుల సూచన" },
  markDone: { en: "Mark as done", hi: "पूर्ण चिह्नित करें", te: "పూర్తయినట్లు గుర్తించండి" },
  navDaily: { en: "Today", hi: "आज", te: "ఈ రోజు" },
  navWeekly: { en: "Week", hi: "सप्ताह", te: "వారం" },
  guidance: { en: "Why this helps?", hi: "यह कैसे मदद करता है?", te: "ఇది ఎలా సహాయపడుతుంది?" },
  tapToView: { en: "Tap to view full plan", hi: "पूरा प्लान देखने के लिए टैप करें", te: "పూర్తి ప్లాన్ చూడటానికి నొక్కండి" },
};

export const MOCK_WEEKLY_PLAN: WeeklyPlan = {
  weekStart: "2024-01-01",
  days: [
    {
      date: "2024-01-01",
      dayName: { en: "Monday", hi: "सोमवार", te: "సోమవారం" },
      meals: [
        {
          id: "m1",
          type: "breakfast",
          title: { en: "Moong Dal Chilla with Ginger", hi: "अदरक वाला मूंग दाल चिल्ला", te: "అల్లం పెసరట్టు" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          tags: ["Protein", "Turmeric", "Ginger"],
          nutritionNote: {
            en: "Ginger contains gingerols which naturally reduce inflammation and joint pain.",
            hi: "अदरक में जिंजरोल होता है जो प्राकृतिक रूप से सूजन और जोड़ों के दर्द को कम करता है।",
            te: "అల్లంలో జింజరోల్స్ ఉంటాయి, ఇవి సహజంగా మంటను మరియు కీళ్ల నొప్పులను తగ్గిస్తాయి."
          },
          ingredients: [
            { name: { en: "Yellow Moong Dal (soaked)", hi: "पीली मूंग दाल (भीगी हुई)", te: "పెసర పప్పు (నానబెట్టినది)" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Fresh Ginger (grated)", hi: "ताजा अदरक (कद्दूकस किया हुआ)", te: "తాజా అల్లం (తురిమినది)" }, qty: { en: "1 tsp", hi: "1 चम्मच", te: "1 చెంచా" } },
            { name: { en: "Turmeric Powder", hi: "हल्दी पाउडर", te: "పసుపు" }, qty: { en: "1/4 tsp", hi: "1/4 चम्मच", te: "1/4 చెంచా" } }
          ],
          steps: [
            { en: "Grind soaked dal into a smooth batter.", hi: "भीगी हुई दाल को पीसकर चिकना बैटर बना लें।", te: "నానబెట్టిన పప్పును మెత్తని పిండిలా రుబ్బుకోవాలి." },
            { en: "Mix in ginger, turmeric, and pinch of salt.", hi: "इसमें अदरक, हल्दी और चुटकी भर नमक मिलाएं।", te: "అందులో అల్లం, పసుపు మరియు చిటికెడు ఉప్పు కలపాలి." },
            { en: "Cook on a non-stick pan with minimal olive oil.", hi: "नॉन-स्टिक तवे पर कम से कम जैतून के तेल के साथ पकाएं।", te: "నాన్-స్టిక్ పాన్‌పై తక్కువ ఆలివ్ నూనెతో కాల్చుకోవాలి." }
          ]
        },
        {
          id: "m2",
          type: "lunch",
          title: { en: "Palak (Spinach) & Tofu Curry", hi: "पालक और टोफू करी", te: "పాలకూర మరియు టోఫు కూర" },
          prepTimeMinutes: 20,
          cookTimeMinutes: 20,
          tags: ["Iron", "Calcium", "Vegan"],
          ingredients: [
            { name: { en: "Spinach Puree", hi: "पालक प्यूरी", te: "పాలకూర గుజ్జు" }, qty: { en: "2 cups", hi: "2 कप", te: "2 కప్పులు" } },
            { name: { en: "Tofu cubes", hi: "टोफू के टुकड़े", te: "టోఫు ముక్కలు" }, qty: { en: "200g", hi: "200 ग्राम", te: "200 గ్రా" } }
          ],
          steps: [
            { en: "Sauté cumin seeds and chopped garlic.", hi: "जीरा और कटा हुआ लहसुन भूनें।", te: "జీలకర్ర మరియు తరిగిన వెల్లుల్లిని వేయించాలి." },
            { en: "Add spinach puree and simmer for 5 mins.", hi: "पालक की प्यूरी डालें और 5 मिनट तक उबालें।", te: "పాలకూర గుజ్జు వేసి 5 నిమిషాలు ఉడికించాలి." },
            { en: "Add tofu cubes gently and cook for 2 mins.", hi: "टोफू के टुकड़े सावधानी से डालें और 2 मिनट पकाएं।", te: "టోఫు ముక్కలను మెల్లగా వేసి 2 నిమిషాలు ఉడికించాలి." }
          ]
        },
        {
          id: "m3",
          type: "dinner",
          title: { en: "Khichdi with Vegetables", hi: "सब्जियों वाली खिचड़ी", te: "కూరగాయల కిచిడి" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 20,
          tags: ["Easy Digest", "Fiber"],
          ingredients: [
            { name: { en: "Rice & Lentil Mix", hi: "चावल और दाल का मिश्रण", te: "బియ్యం మరియు పప్పు మిశ్రమం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Mixed Vegetables", hi: "मिश्रित सब्जियाँ", te: "మిశ్రమ కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
          ],
          steps: [
             { en: "Wash rice and lentils.", hi: "चावल और दाल धो लें।", te: "బియ్యం మరియు పప్పును కడగాలి." },
             { en: "Pressure cook with vegetables and turmeric.", hi: "सब्जियों और हल्दी के साथ प्रेशर कुकर में पकाएं।", te: "కూరగాయలు మరియు పసుపుతో కలిపి ప్రెజర్ కుక్కర్‌లో ఉడికించాలి." }
          ]
        }
      ],
      prepTimeline: [
        {
          id: "t1",
          time: "19:00",
          task: { en: "Soak walnuts for tomorrow breakfast", hi: "कल के नाश्ते के लिए अखरोट भिगोएँ", te: "రేపటి అల్పాహారం కోసం వాల్‌నట్‌లను నానబెట్టండి" }
        },
        {
          id: "t2",
          time: "20:00",
          task: { en: "Chop bottle gourd (lauki) for lunch", hi: "दोपहर के भोजन के लिए लौकी काटें", te: "మధ్యాహ్న భోజనం కోసం సొరకాయను తరగండి" }
        }
      ]
    },
    {
      date: "2024-01-02",
      dayName: { en: "Tuesday", hi: "मंगलवार", te: "మంగళవారం" },
      meals: [
        {
          id: "m4",
          type: "breakfast",
          title: { en: "Oats Upma with Walnuts", hi: "अखरोट के साथ ओट्स उपमा", te: "వాల్‌నట్‌లతో ఓట్స్ ఉప్మా" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          tags: ["Omega-3", "Fiber"],
          ingredients: [
            { name: { en: "Rolled Oats", hi: "ओट्स", te: "ఓట్స్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Walnuts (Soaked)", hi: "अखरोट (भीगे हुए)", te: "వాల్‌నట్‌లు (నానబెట్టినవి)" }, qty: { en: "4-5", hi: "4-5", te: "4-5" } }
          ],
          steps: [
            { en: "Roast oats lightly.", hi: "ओट्स को हल्का भून लें।", te: "ఓట్స్‌ను దోరగా వేయించుకోవాలి." },
            { en: "Sauté mustard seeds, curry leaves, and veggies.", hi: "राई, करी पत्ता और सब्जियां भूनें।", te: "ఆవాలు, కరివేపాకు మరియు కూరగాయలను వేయించాలి." },
            { en: "Add water and cook oats. Top with walnuts.", hi: "पानी डालें और ओट्स पकाएं। ऊपर से अखरोट डालें।", te: "నీరు పోసి ఓట్స్ ఉడికించాలి. పైన వాల్‌నట్‌లు వేయాలి." }
          ]
        },
        {
          id: "m5",
          type: "lunch",
          title: { en: "Bottle Gourd (Lauki) Sabzi", hi: "लौकी की सब्जी", te: "సొరకాయ కూర" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          tags: ["Hydrating", "Low Calorie"],
          ingredients: [
            { name: { en: "Bottle Gourd", hi: "लौकी", te: "సొరకాయ" }, qty: { en: "1 med", hi: "1 मध्यम", te: "1 మధ్యస్థ" } },
            { name: { en: "Cumin", hi: "जीरा", te: "జీలకర్ర" }, qty: { en: "1 tsp", hi: "1 चम्मच", te: "1 చెంచా" } }
          ],
          steps: [
            { en: "Heat oil, add cumin.", hi: "तेल गरम करें, जीरा डालें।", te: "నూనె వేడి చేసి, జీలకర్ర వేయాలి." },
            { en: "Add chopped lauki and turmeric. Cover and cook.", hi: "कटी हुई लौकी और हल्दी डालें। ढक कर पकाएं।", te: "తరిగిన సొరకాయ మరియు పసుపు వేయాలి. మూత పెట్టి ఉడికించాలి." }
          ]
        },
        {
          id: "m6",
          type: "dinner",
          title: { en: "Pumpkin Soup & Toast", hi: "कद्दू का सूप और टोस्ट", te: "గుమ్మడికాయ సూప్ & టోస్ట్" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 20,
          tags: ["Antioxidant", "Light"],
          ingredients: [
            { name: { en: "Red Pumpkin", hi: "लाल कद्दू", te: "ఎరుపు గుమ్మడికాయ" }, qty: { en: "250g", hi: "250 ग्राम", te: "250 గ్రా" } },
            { name: { en: "Black Pepper", hi: "काली मिर्च", te: "మిరియాలు" }, qty: { en: "pinch", hi: "चुटकी भर", te: "చిటికెడు" } }
          ],
          steps: [
            { en: "Boil pumpkin with water.", hi: "कद्दू को पानी के साथ उबालें।", te: "గుమ్మడికాయను నీటితో ఉడికించాలి." },
            { en: "Blend into soup and season.", hi: "पीसकर सूप बनाएं और मसाला डालें।", te: "మిక్సీలో వేసి సూప్‌లా చేసి తగినంత మసాలా వేయాలి." }
          ]
        }
      ],
      prepTimeline: [
        {
          id: "t3",
          time: "21:00",
          task: { en: "Soak Rajma (Kidney Beans)", hi: "राजमा भिगोएँ", te: "రాజ్మా నానబెట్టండి" }
        }
      ]
    },
    {
      date: "2024-01-03",
      dayName: { en: "Wednesday", hi: "बुधवार", te: "బుధవారం" },
      meals: [
        {
          id: "m7",
          type: "breakfast",
          title: { en: "Besan Chilla (Gram Flour Pancake)", hi: "बेसन का चिल्ला", te: "శనగపిండి అట్టు (బేసన్ చిల్లా)" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 10,
          tags: ["Protein", "Gluten Free"],
          ingredients: [
            { name: { en: "Besan", hi: "बेसन", te: "శనగపిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Ajwain (Carom seeds)", hi: "अजवाइन", te: "వాము" }, qty: { en: "1/2 tsp", hi: "1/2 चम्मच", te: "1/2 చెంచా" } }
          ],
          steps: [
            { en: "Mix besan, water, spices.", hi: "बेसन, पानी और मसाले मिलाएं।", te: "శనగపిండి, నీరు మరియు మసాలాలు కలపాలి." },
            { en: "Pour on pan and cook both sides.", hi: "तवे पर डालें और दोनों तरफ से पकाएं।", te: "పెనంపై పోసి రెండు వైపులా కాల్చుకోవాలి." }
          ]
        },
        {
          id: "m8",
          type: "lunch",
          title: { en: "Rajma Masala with Brown Rice", hi: "राजमा मसाला और ब्राउन राइस", te: "రాజ్మా మసాలా మరియు బ్రౌన్ రైస్" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 30,
          tags: ["High Fiber", "Protein"],
          nutritionNote: {
            en: "Legumes like Rajma are great, but soaking them reduces anti-nutrients.",
            hi: "राजमा जैसी फलियां बहुत अच्छी होती हैं, लेकिन इन्हें भिगोने से एंटी-न्यूट्रिएंट्स कम हो जाते हैं।",
            te: "రాజ్మా వంటి పప్పుధాన్యాలు మంచివి, కానీ వాటిని నానబెట్టడం వల్ల యాంటీ-న్యూట్రియెంట్స్ తగ్గుతాయి."
          },
          ingredients: [
            { name: { en: "Soaked Rajma", hi: "भीगा हुआ राजमा", te: "నానబెట్టిన రాజ్మా" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Tomato Onion Paste", hi: "टमाटर प्याज का पेस्ट", te: "టమోటా ఉల్లిపాయ పేస్ట్" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
          ],
          steps: [
            { en: "Pressure cook rajma till soft.", hi: "राजमा को नरम होने तक प्रेशर कुकर में पकाएं।", te: "రాజ్మా మెత్తగా అయ్యే వరకు ప్రెజర్ కుక్కర్‌లో ఉడికించాలి." },
            { en: "Cook masala paste, add rajma and simmer.", hi: "मसाला पेस्ट पकाएं, राजमा डालें और उबालें।", te: "మసాలా పేస్ట్ ఉడికించి, రాజ్మా వేసి మరిగించాలి." }
          ]
        },
        {
          id: "m9",
          type: "dinner",
          title: { en: "Sautéed Broccoli & Sweet Potato", hi: "ब्रोकली और शकरकंद", te: "వేపుడు బ్రోకలీ & చిలగడదుంప" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          tags: ["Vitamin C", "Anti-inflammatory"],
          ingredients: [
            { name: { en: "Broccoli Florets", hi: "ब्रोकली", te: "బ్రోకలీ ముక్కలు" }, qty: { en: "1 bowl", hi: "1 कटोरी", te: "1 గిన్నె" } },
            { name: { en: "Sweet Potato", hi: "शकरकंद", te: "చిలగడదుంప" }, qty: { en: "1 small", hi: "1 छोटा", te: "1 చిన్నది" } }
          ],
          steps: [
            { en: "Parboil veggies slightly.", hi: "सब्जियों को हल्का उबाल लें।", te: "కూరగాయలను కొద్దిగా ఉడికించాలి." },
            { en: "Toss in pan with garlic and olive oil.", hi: "पैन में लहसुन और जैतून के तेल के साथ टॉस करें।", te: "పాన్‌లో వెల్లుల్లి మరియు ఆలివ్ నూనెతో వేయించాలి." }
          ]
        }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-04",
      dayName: { en: "Thursday", hi: "गुरुवार", te: "గురువారం" },
      meals: [
        {
          id: "m10",
          type: "breakfast",
          title: { en: "Vegetable Poha", hi: "वेजिटेबल पोहा", te: "వెజిటబుల్ పోహా (అటుకులు)" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          tags: ["Light", "Iron"],
          ingredients: [
            { name: { en: "Flattened Rice", hi: "पोहा", te: "అటుకులు" }, qty: { en: "1.5 cup", hi: "1.5 कप", te: "1.5 కప్పు" } },
            { name: { en: "Peanuts", hi: "मूंगफली", te: "వేరుశెనగలు" }, qty: { en: "2 tbsp", hi: "2 बड़े चम्मच", te: "2 టేబుల్ స్పూన్లు" } }
          ],
          steps: [
            { en: "Rinse poha and drain.", hi: "पोहा धोकर निथार लें।", te: "అటుకులు కడిగి నీరు వంపేయాలి." },
            { en: "Sauté mustard seeds, peanuts, veggies and mix poha.", hi: "राई, मूंगफली, सब्जियां भूनें और पोहा मिलाएं।", te: "ఆవాలు, వేరుశెనగలు, కూరగాయలు వేయించి అటుకులు కలపాలి." }
          ]
        },
        {
          id: "m11",
          type: "lunch",
          title: { en: "Chickpea (Chana) Curry", hi: "चना मसाला", te: "శనగల కూర (చనా మసాలా)" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 25,
          tags: ["Protein", "Fiber"],
          ingredients: [
            { name: { en: "Black Chickpeas", hi: "काले चने", te: "నల్ల శనగలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Ginger Garlic Paste", hi: "अदरक लहसुन का पेस्ट", te: "అల్లం వెల్లుల్లి పేస్ట్" }, qty: { en: "1 tbsp", hi: "1 बड़ा चम्मच", te: "1 టేబుల్ స్పూన్" } }
          ],
          steps: [
            { en: "Boil chickpeas.", hi: "चने उबाल लें।", te: "శనగలను ఉడికించాలి." },
            { en: "Prepare onion-tomato gravy and mix.", hi: "प्याज-टमाटर की ग्रेवी तैयार करें और मिलाएं।", te: "ఉల్లిపాయ-టమోటా గ్రేవీని తయారు చేసి కలపాలి." }
          ]
        },
        {
          id: "m12",
          type: "dinner",
          title: { en: "Beetroot Roti & Curd", hi: "चुकंदर की रोटी और दही", te: "బీట్‌రూట్ రోటి & పెరుగు" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          tags: ["Antioxidant", "Probiotic"],
          ingredients: [
            { name: { en: "Wheat Flour", hi: "गेहूं का आटा", te: "గోధుమ పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Beetroot Puree", hi: "चुकंदर प्यूरी", te: "బీట్‌రూట్ గుజ్జు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
          ],
          steps: [
            { en: "Knead dough with beetroot puree.", hi: "चुकंदर की प्यूरी के साथ आटा गूंथ लें।", te: "బీట్‌రూట్ గుజ్జుతో పిండి కలపాలి." },
            { en: "Roll into rotis and cook.", hi: "रोटी बेलकर पकाएं।", te: "రోటీలుగా చేసి కాల్చుకోవాలి." }
          ]
        }
      ],
      prepTimeline: [
        {
          id: "t4",
          time: "20:00",
          task: { en: "Soak Moong Dal for Khichdi", hi: "खिचड़ी के लिए मूंग दाल भिगोएँ", te: "కిచిడి కోసం పెసర పప్పు నానబెట్టండి" }
        }
      ]
    },
    {
      date: "2024-01-05",
      dayName: { en: "Friday", hi: "शुक्रवार", te: "శుక్రవారం" },
      meals: [
        {
          id: "m13",
          type: "breakfast",
          title: { en: "Broken Wheat (Daliya) Porridge", hi: "दलिया", te: "గోధుమ రవ్వ ఉప్మా (దలియా)" },
          prepTimeMinutes: 5,
          cookTimeMinutes: 15,
          tags: ["Fiber", "Whole Grain"],
          ingredients: [
            { name: { en: "Daliya", hi: "दलिया", te: "గోధుమ రవ్వ" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
            { name: { en: "Vegetables", hi: "सब्जियां", te: "కూరగాయలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
          ],
          steps: [
            { en: "Roast daliya in little ghee.", hi: "दलिया को थोड़े से घी में भूनें।", te: "కొద్దిగా నెయ్యిలో రవ్వను వేయించాలి." },
            { en: "Add water and veggies, pressure cook.", hi: "पानी और सब्जियां डालें, प्रेशर कुकर में पकाएं।", te: "నీరు మరియు కూరగాయలు వేసి ప్రెజర్ కుక్కర్‌లో ఉడికించాలి." }
          ]
        },
        {
          id: "m14",
          type: "lunch",
          title: { en: "Bhindi (Okra) Masala", hi: "भिंडी मसाला", te: "బెండకాయ మసాలా" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 15,
          tags: ["Joint Health", "Low Carb"],
          ingredients: [
            { name: { en: "Okra", hi: "भिंडी", te: "బెండకాయలు" }, qty: { en: "250g", hi: "250 ग्राम", te: "250 గ్రా" } },
            { name: { en: "Coriander Powder", hi: "धनिया पाउडर", te: "ధనియాల పొడి" }, qty: { en: "1 tsp", hi: "1 चम्मच", te: "1 చెంచా" } }
          ],
          steps: [
            { en: "Wash and dry okra completely.", hi: "भिंडी को धोकर पूरी तरह सुखा लें।", te: "బెండకాయలను కడిగి పూర్తిగా ఆరబెట్టాలి." },
            { en: "Sauté with spices on low flame.", hi: "धीमी आंच पर मसालों के साथ भूनें।", te: "చిన్న మంటపై మసాలాలతో వేయించాలి." }
          ]
        },
        {
          id: "m15",
          type: "dinner",
          title: { en: "Moong Dal Khichdi", hi: "मूंग दाल खिचड़ी", te: "పెసర పప్పు కిచిడి" },
          prepTimeMinutes: 5,
          cookTimeMinutes: 20,
          tags: ["Light Dinner", "Comfort"],
          ingredients: [
            { name: { en: "Moong Dal & Rice", hi: "मूंग दाल और चावल", te: "పెసర పప్పు & బియ్యం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Turmeric", hi: "हल्दी", te: "పసుపు" }, qty: { en: "1/2 tsp", hi: "1/2 चम्मच", te: "1/2 చెంచా" } }
          ],
          steps: [
            { en: "Cook dal and rice together till mushy.", hi: "दाल और चावल को गलने तक पकाएं।", te: "పప్పు మరియు బియ్యం మెత్తగా అయ్యే వరకు ఉడికించాలి." },
            { en: "Temper with cumin and ghee.", hi: "जीरा और घी का तड़का लगाएं।", te: "జీలకర్ర మరియు నెయ్యితో తాలింపు వేయాలి." }
          ]
        }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-06",
      dayName: { en: "Saturday", hi: "शनिवार", te: "శనివారం" },
      meals: [
        {
          id: "m16",
          type: "breakfast",
          title: { en: "Ragi (Finger Millet) Malt", hi: "रागी माल्ट (दलिया)", te: "రాగి జావ (మాల్ట్)" },
          prepTimeMinutes: 5,
          cookTimeMinutes: 5,
          tags: ["Calcium", "Bone Health"],
          ingredients: [
            { name: { en: "Ragi Flour", hi: "रागी का आटा", te: "రాగి పిండి" }, qty: { en: "2 tbsp", hi: "2 बड़े चम्मच", te: "2 టేబుల్ స్పూన్లు" } },
            { name: { en: "Buttermilk", hi: "छाछ", te: "మజ్జిగ" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
          ],
          steps: [
            { en: "Cook ragi flour in water.", hi: "रागी के आटे को पानी में पकाएं।", te: "రాగి పిండిని నీటిలో ఉడికించాలి." },
            { en: "Cool and mix with buttermilk.", hi: "ठंडा करें और छाछ के साथ मिलाएं।", te: "చల్లారిన తర్వాత మజ్జిగతో కలపాలి." }
          ]
        },
        {
          id: "m17",
          type: "lunch",
          title: { en: "Soya Chunks Curry", hi: "सोया चंक्स करी", te: "సోయా చంక్స్ కూర" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          tags: ["High Protein", "Plant Based"],
          ingredients: [
            { name: { en: "Soya Chunks", hi: "सोया चंक्स", te: "సోయా చంక్స్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Potatoes", hi: "आलू", te: "బంగాళాదుంప" }, qty: { en: "1 med", hi: "1 मध्यम", te: "1 మధ్యస్థ" } }
          ],
          steps: [
            { en: "Boil soya chunks and squeeze water.", hi: "सोया चंक्स को उबालें और पानी निचोड़ लें।", te: "సోయా చంక్స్‌ను ఉడికించి నీటిని పిండాలి." },
            { en: "Cook in onion-tomato gravy.", hi: "प्याज-टमाटर की ग्रेवी में पकाएं।", te: "ఉల్లిపాయ-టమోటా గ్రేవీలో వండాలి." }
          ]
        },
        {
          id: "m18",
          type: "dinner",
          title: { en: "Vegetable Clear Soup", hi: "सब्जियों का सूप", te: "వెజిటబుల్ క్లియర్ సూప్" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          tags: ["Hydrating", "Light"],
          ingredients: [
            { name: { en: "Carrots & Beans", hi: "गाजर और बीन्स", te: "క్యారెట్ & బీన్స్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Ginger", hi: "अदरक", te: "అల్లం" }, qty: { en: "1 inch", hi: "1 इंच", te: "1 అంగుళం" } }
          ],
          steps: [
            { en: "Boil chopped veggies with ginger.", hi: "कटी हुई सब्जियों को अदरक के साथ उबालें।", te: "తరిగిన కూరగాయలను అల్లంతో ఉడికించాలి." },
            { en: "Add pepper and serve hot.", hi: "काली मिर्च डालें और गरमा गरम परोसें।", te: "మిరియాల పొడి వేసి వేడిగా వడ్డించాలి." }
          ]
        }
      ],
      prepTimeline: [
        {
          id: "t5",
          time: "21:00",
          task: { en: "Sprout Moth Beans/Moong", hi: "मोठ या मूंग को अंकुरित करें", te: "మొలకల కోసం పెసలు/బొబ్బర్లు నానబెట్టండి" }
        }
      ]
    },
    {
      date: "2024-01-07",
      dayName: { en: "Sunday", hi: "रविवार", te: "ఆదివారం" },
      meals: [
        {
          id: "m19",
          type: "breakfast",
          title: { en: "Sprouted Salad", hi: "अंकुरित सलाद", te: "మొలకల సలాడ్" },
          prepTimeMinutes: 10,
          cookTimeMinutes: 0,
          tags: ["Raw", "Enzymes"],
          ingredients: [
            { name: { en: "Sprouts", hi: "अंकुरित अनाज", te: "మొలకలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Lemon Juice", hi: "नींबू का रस", te: "నిమ్మరసం" }, qty: { en: "1 tsp", hi: "1 चम्मच", te: "1 చెంచా" } }
          ],
          steps: [
            { en: "Steam sprouts lightly if sensitive.", hi: "संवेदनशील हों तो अंकुरित अनाज को हल्का भाप लें।", te: "సెన్సిటివ్ అయితే మొలకలను కొద్దిగా ఆవిరి మీద ఉడికించాలి." },
            { en: "Mix with cucumber, tomato and lemon.", hi: "खीरा, टमाटर और नींबू के साथ मिलाएं।", te: "కీరదోస, టమోటా మరియు నిమ్మరసంతో కలపాలి." }
          ]
        },
        {
          id: "m20",
          type: "lunch",
          title: { en: "Mushroom Matar (Peas)", hi: "मशरूम मटर", te: "మష్రూమ్ మటర్" },
          prepTimeMinutes: 15,
          cookTimeMinutes: 15,
          tags: ["Vitamin D", "Vegetarian"],
          ingredients: [
            { name: { en: "Mushrooms", hi: "मशरूम", te: "పుట్టగొడుగులు" }, qty: { en: "200g", hi: "200 ग्राम", te: "200 గ్రా" } },
            { name: { en: "Green Peas", hi: "हरी मटर", te: "పచ్చి బఠానీలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
          ],
          steps: [
            { en: "Sauté mushrooms till water evaporates.", hi: "मशरूम को पानी सूखने तक भूनें।", te: "నీరు ఆవిరైపోయే వరకు పుట్టగొడుగులను వేయించాలి." },
            { en: "Add peas and spices, cook covered.", hi: "मटर और मसाले डालें, ढक कर पकाएं।", te: "బఠానీలు మరియు మసాలాలు వేసి, మూత పెట్టి ఉడికించాలి." }
          ]
        },
        {
          id: "m21",
          type: "dinner",
          title: { en: "Turmeric Milk & Nuts", hi: "हल्दी वाला दूध और मेवे", te: "పసుపు పాలు & నట్స్" },
          prepTimeMinutes: 5,
          cookTimeMinutes: 5,
          tags: ["Anti-inflammatory", "Sleep Aid"],
          ingredients: [
            { name: { en: "Milk/Almond Milk", hi: "दूध/बादाम का दूध", te: "పాలు/బాదం పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Turmeric", hi: "हल्दी", te: "పసుపు" }, qty: { en: "1/2 tsp", hi: "1/2 चम्मच", te: "1/2 చెంచా" } }
          ],
          steps: [
            { en: "Warm the milk.", hi: "दूध गरम करें।", te: "పాలను వేడి చేయాలి." },
            { en: "Whisk in turmeric and pinch of pepper.", hi: "हल्दी और चुटकी भर काली मिर्च मिलाएं।", te: "పసుపు మరియు చిటికెడు మిరియాల పొడి కలపాలి." }
          ]
        }
      ],
      prepTimeline: [
        {
          id: "t6",
          time: "19:00",
          task: { en: "Plan next week's grocery", hi: "अगले सप्ताह की किराने की योजना बनाएं", te: "వచ్చే వారం సరుకుల ప్లాన్ చేసుకోండి" }
        }
      ]
    }
  ]
};
