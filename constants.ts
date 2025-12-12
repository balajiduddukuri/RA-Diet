import { WeeklyPlan, LocalizedString, DietType } from './types';

export const UI_TRANSLATIONS: Record<string, LocalizedString> = {
  appTitle: { en: "RA Diet", hi: "आर.ए. डाइट", te: "RA డైట్" },
  demoMode: { en: "Demo Mode — Data not saved", hi: "डेमो मोड — डेटा सहेजा नहीं जाएगा", te: "డెమో మోడ్ — డేటా సేవ్ చేయబడదు" },
  today: { en: "Today's Plan", hi: "आज की योजना", te: "ఈ రోజు ప్లాన్" },
  tomorrowPrep: { en: "Prep for Tomorrow", hi: "कल की तैयारी", te: "రేపటి తయారీ" },
  noPrepNeeded: { en: "No prep needed for tomorrow", hi: "कल के लिए कोई तैयारी की आवश्यकता नहीं है", te: "రేపటి కోసం ఎటువంటి తయారీ అవసరం లేదు" },
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
  navGrocery: { en: "Grocery", hi: "किराना", te: "సరుకులు" },
  navSettings: { en: "Settings", hi: "सेटिंग्स", te: "సెట్టింగులు" },
  navGuide: { en: "Guide", hi: "गाइड", te: "గైడ్" },
  groceryList: { en: "Shopping List", hi: "खरीदारी सूची", te: "షాపింగ్ జాబితా" },
  copy: { en: "Copy", hi: "कॉपी", te: "కాపీ" },
  copied: { en: "Copied!", hi: "कॉपी हो गया!", te: "కాపీ చేయబడింది!" },
  share: { en: "Share", hi: "शेयर", te: "షేర్" },
  guidance: { en: "Why this helps?", hi: "यह कैसे मदद करता है?", te: "ఇది ఎలా సహాయపడుతుంది?" },
  tapToView: { en: "Tap to view full plan", hi: "पूरा प्लान देखने के लिए टैप करें", te: "పూర్తి ప్లాన్ చూడటానికి నొక్కండి" },
  selectDiet: { en: "Select Diet Preference", hi: "आहार प्राथमिकता चुनें", te: "ఆహార ప్రాధాన్యతను ఎంచుకోండి" },
  selectLanguage: { en: "Select Language", hi: "भाषा चुनें", te: "భాషను ఎంచుకోండి" },
  dietNorth: { en: "North Indian", hi: "उत्तर भारतीय", te: "ఉత్తర భారతీయ" },
  dietSouth: { en: "South Indian", hi: "दक्षिण भारतीय", te: "దక్షిణ భారతీయ" },
  dietContinental: { en: "Continental", hi: "कांटिनेंटल", te: "కాంటినెంటల్" },
  author: { en: "Author", hi: "लेखक", te: "రచయిత" },
  location: { en: "Location", hi: "स्थान", te: "స్థానం" },
  dietaryPref: { en: "Dietary Preference", hi: "आहार प्राथमिकता", te: "ఆహార ప్రాధాన్యత" },
  vegOnly: { en: "Vegetarian Only", hi: "केवल शाकाहारी", te: "శాకాహారం మాత్రమే" },
  nonVegIncluded: { en: "Includes Non-Veg", hi: "मांसाहारी शामिल", te: "మాంసాహారం ఉంది" },
  // Guide Section
  guideTitle: { en: "App Guide", hi: "ऐप गाइड", te: "యాప్ గైడ్" },
  guideIntro: { en: "Welcome to RA Diet. Here's how to make the most of your anti-inflammatory meal planner.", hi: "RA डाइट में आपका स्वागत है। यहां बताया गया है कि आप अपने भोजन योजनाकार का सर्वोत्तम उपयोग कैसे कर सकते हैं।", te: "RA డైట్‌కు స్వాగతం. మీ యాంటీ ఇన్ఫ్లమేటరీ మీల్ ప్లానర్‌ను ఎలా ఉపయోగించుకోవాలో ఇక్కడ ఉంది." },
  guideDailyTitle: { en: "Daily Meals", hi: "दैनिक भोजन", te: "రోజువారీ భోజనం" },
  guideDailyDesc: { en: "View breakfast, lunch, snacks, and dinner. The current meal is highlighted. Tap any meal to see recipe details.", hi: "नाश्ता, दोपहर का भोजन, स्नैक्स और रात का खाना देखें। वर्तमान भोजन हाइलाइट किया गया है। विवरण देखने के लिए टैप करें।", te: "అల్పాహారం, మధ్యాహ్న భోజనం, స్నాక్స్ మరియు రాత్రి భోజనం చూడండి. ప్రస్తుత భోజనం హైలైట్ చేయబడింది." },
  guidePrepTitle: { en: "Tomorrow's Prep", hi: "कल की तैयारी", te: "రేపటి తయారీ" },
  guidePrepDesc: { en: "Check the 'Prep for Tomorrow' section at the bottom of the daily view to see what you need to soak or chop tonight.", hi: "आज रात क्या भिगोना या काटना है, यह देखने के लिए 'कल की तैयारी' अनुभाग देखें।", te: "ఈ రాత్రి ఏమి నానబెట్టాలి లేదా తరగాలి అని చూడటానికి 'రేపటి తయారీ' విభాగాన్ని తనిఖీ చేయండి." },
  guideGroceryTitle: { en: "Shopping List", hi: "खरीदारी सूची", te: "షాపింగ్ జాబితా" },
  guideGroceryDesc: { en: "The Grocery tab automatically aggregates all ingredients for the week. You can check off items you already have.", hi: "किराना टैब स्वचालित रूप से सप्ताह के लिए सभी सामग्री एकत्र करता है।", te: "సరుకుల ట్యాబ్ వారం మొత్తానికి కావలసిన అన్ని పదార్థాలను ఆటోమేటిక్‌గా జాబితా చేస్తుంది." },
  guideAiTitle: { en: "Ask AI Expert", hi: "AI विशेषज्ञ से पूछें", te: "AI నిపుణుడిని అడగండి" },
  guideAiDesc: { en: "Use the chat button or voice search to ask nutrition questions like 'Is ginger good for RA?'", hi: "पोषण संबंधी प्रश्न पूछने के लिए चैट बटन या वॉयस सर्च का उपयोग करें।", te: "పోషకాహార ప్రశ్నలు అడగడానికి చాట్ బటన్ లేదా వాయిస్ సెర్చ్ ఉపయోగించండి." },
  // Meal Types
  mealBreakfast: { en: "Breakfast", hi: "नाश्ता", te: "అల్పాహారం" },
  mealLunch: { en: "Lunch", hi: "दोपहर का खाना", te: "మధ్యాహ్న భోజనం" },
  mealSnack: { en: "Snack", hi: "स्नैक", te: "స్నాక్" },
  mealDinner: { en: "Dinner", hi: "रात का खाना", te: "రాత్రి భోజనం" },
  // Chat
  chatTitle: { en: "Diet Assistant", hi: "डाइट असिस्टेंट", te: "డైట్ అసిస్టెంట్" },
  chatPlaceholder: { en: "Ask about food, nutrition...", hi: "भोजन, पोषण के बारे में पूछें...", te: "ఆహారం, పోషకాహారం గురించి అడగండి..." },
  chatThinking: { en: "Thinking...", hi: "सोच रहा हूँ...", te: "ఆలోచిస్తోంది..." },
  chatWelcome: { en: "Hello! I can help you with RA-friendly diet tips and ingredient benefits.", hi: "नमस्ते! मैं आपको आर.ए. के लिए आहार सुझावों में मदद कर सकता हूं।", te: "నమస్తే! నేను మీకు RA-అనుకూల ఆహార చిట్కాలతో సహాయం చేయగలను." },
  askAiBtn: { en: "Ask AI RA Diet Expert", hi: "AI RA डाइट एक्सपर्ट से पूछें", te: "AI RA డైట్ నిపుణుడిని అడగండి" },
  askAiDesc: { en: "Get instant answers about ingredients & nutrition", hi: "सामग्री और पोषण के बारे में तुरंत उत्तर प्राप्त करें", te: "పదార్థాలు & పోషకాహారం గురించి తక్షణ సమాధానాలు పొందండి" }
};

export const MOTIVATIONAL_QUOTES: LocalizedString[] = [
  {
    en: "Your illness does not define you. Your strength and courage do.",
    hi: "आपकी बीमारी आपकी पहचान नहीं है। आपकी ताकत और हिम्मत आपकी पहचान है।",
    te: "మీ అనారోగ్యం మిమ్మల్ని నిర్వచించదు. మీ బలం మరియు ధైర్యం మిమ్మల్ని నిర్వచిస్తాయి."
  },
  {
    en: "Small steps are still progress.",
    hi: "छोटे कदम भी प्रगति हैं।",
    te: "చిన్న అడుగులు కూడా ప్రగతియే."
  },
  {
    en: "Listen to your body, it knows best.",
    hi: "अपने शरीर की सुनें, वह सबसे बेहतर जानता है।",
    te: "మీ శరీరం చెప్పేది వినండి, దానికి అంతా తెలుసు."
  },
  {
    en: "Every healthy meal is a message of love to your body.",
    hi: "हर स्वस्थ भोजन आपके शरीर के लिए प्रेम का संदेश है।",
    te: "ప్రతి ఆరోగ్యకరమైన భోజనం మీ శరీరానికి ప్రేమ సందేశం."
  },
  {
    en: "Rest is not quitting. It’s part of the journey.",
    hi: "आराम करना हार मानना नहीं है। यह यात्रा का हिस्सा है।",
    te: "విశ్రాంతి తీసుకోవడం అంటే మానేయడం కాదు. అది ప్రయాణంలో ఒక భాగం."
  },
  {
    en: "Focus on what you can do, not what you can't.",
    hi: "उस पर ध्यान दें जो आप कर सकते हैं, उस पर नहीं जो आप नहीं कर सकते।",
    te: "మీరు చేయగలిగిన దానిపై దృష్టి పెట్టండి, చేయలేని దానిపై కాదు."
  },
  {
    en: "You are stronger than you think.",
    hi: "आप अपनी सोच से ज्यादा मजबूत हैं।",
    te: "మీరు అనుకున్నదాని కంటే బలంగా ఉన్నారు."
  }
];

const NORTH_INDIAN_PLAN: WeeklyPlan = {
  weekStart: "2024-01-01",
  days: [
    {
      date: "2024-01-01",
      dayName: { en: "Monday", hi: "सोमवार", te: "సోమవారం" },
      meals: [
        {
          id: "m1", type: "breakfast",
          title: { en: "Moong Dal Chilla", hi: "मूंग दाल चिल्ला", te: "పెసరట్టు" },
          calories: 220,
          prepTimeMinutes: 15, cookTimeMinutes: 10, tags: ["Protein", "Ginger"],
          ingredients: [
            { name: { en: "Moong Dal", hi: "मूंग दाल", te: "పెసర పప్పు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Ginger", hi: "अदरक", te: "అల్లం" }, qty: { en: "1 inch", hi: "1 इंच", te: "1 అంగుళం" } }
          ],
          steps: [{ en: "Grind dal, add ginger, cook like pancakes.", hi: "दाल पीसें, अदरक मिलाएं, पैनकेक की तरह पकाएं।", te: "పప్పు రుబ్బి, అల్లం కలిపి అట్టు వేయండి." }]
        },
        {
          id: "m2", type: "lunch",
          title: { en: "Palak Paneer/Tofu", hi: "पालक पनीर/टोफू", te: "పాలక్ పనీర్/టోఫు" },
          calories: 350,
          prepTimeMinutes: 20, cookTimeMinutes: 20, tags: ["Iron", "Calcium"],
          ingredients: [
            { name: { en: "Spinach", hi: "पालक", te: "పాలకూర" }, qty: { en: "250g", hi: "250g", te: "250గ్రా" } },
            { name: { en: "Tofu/Paneer", hi: "टोफू/पनीर", te: "టోఫు/పనీర్" }, qty: { en: "200g", hi: "200g", te: "200గ్రా" } }
          ],
          steps: [{ en: "Cook spinach puree with spices and protein.", hi: "पालक प्यूरी को मसालों और पनीर के साथ पकाएं।", te: "పాలకూర గుజ్జును మసాలాలు మరియు పనీర్‌తో ఉడికించండి." }]
        },
        {
          id: "m1_s", type: "snack",
          title: { en: "Roasted Makhana", hi: "भुने हुए मखाने", te: "వేయించిన పూల్ మఖానా" },
          calories: 120,
          prepTimeMinutes: 2, cookTimeMinutes: 5, tags: ["Anti-inflammatory", "Light"],
          ingredients: [
            { name: { en: "Fox Nuts (Makhana)", hi: "मखाने", te: "పూల్ మఖానా" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Black Pepper", hi: "काली मिर्च", te: "మిరియాలు" }, qty: { en: "Pinch", hi: "चुटकी भर", te: "చిటికెడు" } }
          ],
          steps: [{ en: "Dry roast makhana with a pinch of pepper.", hi: "मखाने को काली मिर्च के साथ सूखा भूनें।", te: "మఖానాను మిరియాల పొడితో వేయించండి." }]
        },
        {
          id: "m3", type: "dinner",
          title: { en: "Veg Khichdi", hi: "वेजी खिचड़ी", te: "వెజ్ కిచిడి" },
          calories: 280,
          prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Light"],
          ingredients: [
            { name: { en: "Rice & Dal Mix", hi: "चावल-दाल मिक्स", te: "బియ్యం-పప్పు మిశ్రమం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Vegetables", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{ en: "Pressure cook all ingredients.", hi: "सभी सामग्री को प्रेशर कुकर में पकाएं।", te: "అన్ని పదార్థాలను ప్రెజర్ కుక్కర్‌లో ఉడికించండి." }]
        }
      ],
      prepTimeline: [{ id: "t1", time: "19:00", task: { en: "Soak walnuts", hi: "अखरोट भिगोएँ", te: "వాల్‌నట్‌లను నానబెట్టండి" } }]
    },
    {
      date: "2024-01-02",
      dayName: { en: "Tuesday", hi: "मंगलवार", te: "మంగళవారం" },
      meals: [
         { id: "m4", type: "breakfast", title: { en: "Oats Upma", hi: "ओट्स उपमा", te: "ఓట్స్ ఉప్మా" }, calories: 250, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Fiber"], 
           ingredients: [
             { name: { en: "Oats", hi: "ओट्स", te: "ఓట్స్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Vegetables", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ], 
           steps: [{en: "Sauté veggies and cook with oats.", hi: "सब्जियां भूनें और ओट्स के साथ पकाएं।", te: "కూరగాయలు వేయించి ఓట్స్‌తో ఉడికించండి."}] 
         },
         { id: "m5", type: "lunch", title: { en: "Lauki Sabzi & Roti", hi: "लौकी सब्जी और रोटी", te: "సొరకాయ కూర & రోటి" }, calories: 320, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Light"], 
           ingredients: [
             { name: { en: "Bottle Gourd", hi: "लौकी", te: "సొరకాయ" }, qty: { en: "500g", hi: "500g", te: "500గ్రా" } },
             { name: { en: "Whole Wheat Flour", hi: "गेहूं का आटा", te: "గోధుమ పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Cook lauki with turmeric. Serve with roti.", hi: "हल्दी के साथ लौकी पकाएं। रोटी के साथ परोसें।", te: "పసుపుతో సొరకాయ ఉడికించి రోటితో వడ్డించండి."}] 
         },
         { id: "m2_s", type: "snack",
           title: { en: "Fruit Chaat", hi: "फ्रूट चाट", te: "ఫ్రూట్ చాట్" },
           calories: 150,
           prepTimeMinutes: 10, cookTimeMinutes: 0, tags: ["Vitamins", "Raw"],
           ingredients: [
             { name: { en: "Papaya/Apple", hi: "पपीता/सेब", te: "బొప్పాయి/ఆపిల్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Chaat Masala", hi: "चाट मसाला", te: "చాట్ మసాలా" }, qty: { en: "Pinch", hi: "चुटकी भर", te: "చిటికెడు" } }
           ],
           steps: [{ en: "Dice fruits and sprinkle masala.", hi: "फलों को काटें और मसाला छिड़कें।", te: "పండ్లను ముక్కలుగా చేసి మసాలా చల్లండి." }]
         },
         { id: "m6", type: "dinner", title: { en: "Pumpkin Soup", hi: "कद्दू का सूप", te: "గుమ్మడికాయ సూప్" }, calories: 180, prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Light"], 
           ingredients: [
             { name: { en: "Pumpkin", hi: "कद्दू", te: "గుమ్మడికాయ" }, qty: { en: "300g", hi: "300g", te: "300గ్రా" } }
           ],
           steps: [{en: "Boil pumpkin, blend, season.", hi: "कद्दू उबालें, पीसें, मसाला डालें।", te: "గుమ్మడికాయ ఉడికించి, బ్లెండ్ చేసి, మసాలా కలపండి."}] 
         }
      ],
      prepTimeline: [{ id: "t2", time: "20:00", task: { en: "Soak Rajma", hi: "राजमा भिगोएँ", te: "రాజ్మా నానబెట్టండి" } }]
    },
    {
      date: "2024-01-03",
      dayName: { en: "Wednesday", hi: "बुधवार", te: "బుధవారం" },
      meals: [
         { id: "m7", type: "breakfast", title: { en: "Besan Chilla", hi: "बेसन का चिल्ला", te: "బేసన్ చిల్లా" }, calories: 230, prepTimeMinutes: 10, cookTimeMinutes: 10, tags: ["Protein"], 
           ingredients: [
             { name: { en: "Gram Flour", hi: "बेसन", te: "శనగపిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Onion", hi: "प्याज", te: "ఉల్లిపాయ" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{en: "Mix flour, water, onion. Cook on pan.", hi: "आटा, पानी, प्याज मिलाएं। तवे पर पकाएं।", te: "పిండి, నీరు, ఉల్లిపాయ కలిపి పెనంపై కాల్చండి."}] 
         },
         { 
           id: "m8", type: "lunch", 
           title: { en: "Chicken Curry & Rice", hi: "चिकन करी और चावल", te: "చికెన్ కర్రీ & రైస్" }, 
           calories: 450,
           prepTimeMinutes: 20, cookTimeMinutes: 30, tags: ["High Protein"], 
           isNonVeg: true,
           vegAlternative: {
             id: "m8_veg", type: "lunch",
             title: { en: "Rajma Masala & Rice", hi: "राजमा चावल", te: "రాజ్మా రైస్" }, 
             calories: 400,
             prepTimeMinutes: 15, cookTimeMinutes: 30, tags: ["Protein"], 
             ingredients: [
               { name: { en: "Kidney Beans", hi: "राजमा", te: "రాజ్మా" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
               { name: { en: "Rice", hi: "चावल", te: "బియ్యం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
             ],
             steps: [{en: "Cook soaked beans with gravy. Serve with rice.", hi: "ग्रेवी के साथ बीन्स पकाएं। चावल के साथ परोसें।", te: "గ్రేవీతో బీన్స్ ఉడికించి అన్నంతో వడ్డించండి."}] 
           },
           ingredients: [
             { name: { en: "Chicken", hi: "चिकन", te: "చికెన్" }, qty: { en: "200g", hi: "200g", te: "200గ్రా" } },
             { name: { en: "Rice", hi: "चावल", te: "బియ్యం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Cook chicken in onion-tomato gravy. Serve with rice.", hi: "चिकन को प्याज-टमाटर की ग्रेवी में पकाएं। चावल के साथ परोसें।", te: "ఉల్లిపాయ-టమోటా గ్రేవీలో చికెన్ వండండి. అన్నంతో వడ్డించండి."}]
         },
         { id: "m3_s", type: "snack",
           title: { en: "Roasted Chana", hi: "भुने चने", te: "వేయించిన శనగలు" },
           calories: 100,
           prepTimeMinutes: 1, cookTimeMinutes: 0, tags: ["Protein", "Easy"],
           ingredients: [
             { name: { en: "Roasted Chana", hi: "भुने चने", te: "పుట్నాల పప్పు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{ en: "Eat as is or mix with onion/tomato.", hi: "ऐसे ही खाएं या प्याज/टमाटर के साथ मिलाएं।", te: "అలాగే తినండి లేదా ఉల్లిపాయ/టమోటాతో కలపండి." }]
         },
         { id: "m9", type: "dinner", title: { en: "Sautéed Broccoli", hi: "ब्रोकली", te: "బ్రోకలీ" }, calories: 150, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Green"], 
           ingredients: [
             { name: { en: "Broccoli", hi: "ब्रोकली", te: "బ్రోకలీ" }, qty: { en: "1 head", hi: "1 फूल", te: "1 పువ్వు" } },
             { name: { en: "Garlic", hi: "लहसुन", te: "వెల్లుల్లి" }, qty: { en: "2 cloves", hi: "2 कलियां", te: "2 రెబ్బలు" } }
           ],
           steps: [{en: "Stir fry broccoli with garlic.", hi: "लहसुन के साथ ब्रोकली भूनें।", te: "వెల్లుల్లితో బ్రోకలీ వేయించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-04",
      dayName: { en: "Thursday", hi: "गुरुवार", te: "గురువారం" },
      meals: [
         { id: "m10", type: "breakfast", title: { en: "Poha", hi: "पोहा", te: "అటుకులు" }, calories: 300, prepTimeMinutes: 10, cookTimeMinutes: 10, tags: ["Iron"], 
           ingredients: [
             { name: { en: "Flattened Rice", hi: "पोहा", te: "అటుకులు" }, qty: { en: "1.5 cups", hi: "1.5 कप", te: "1.5 కప్పులు" } },
             { name: { en: "Peanuts", hi: "मूंगफली", te: "వేరుశెనగలు" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
           ],
           steps: [{en: "Rinse poha. Sauté spices and mix.", hi: "पोहा धोएं। मसाले भूनें और मिलाएं।", te: "అటుకులు కడగండి. మసాలాలు వేయించి కలపండి."}] 
         },
         { id: "m11", type: "lunch", title: { en: "Chana Masala", hi: "चना मसाला", te: "చనా మసాలా" }, calories: 380, prepTimeMinutes: 10, cookTimeMinutes: 25, tags: ["Protein"], 
           ingredients: [
             { name: { en: "Chickpeas", hi: "काबुली चना", te: "కాబూలీ శనగలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Tomato", hi: "टमाटर", te: "టమోటా" }, qty: { en: "2", hi: "2", te: "2" } }
           ],
           steps: [{en: "Cook chickpeas in tomato gravy.", hi: "टमाटर की ग्रेवी में चने पकाएं।", te: "టమోటా గ్రేవీలో శనగలు ఉడికించండి."}] 
         },
         { id: "m4_s", type: "snack",
           title: { en: "Green Tea & Walnuts", hi: "ग्रीन टी और अखरोट", te: "గ్రీన్ టీ & వాల్‌నట్స్" },
           calories: 180,
           prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Omega-3", "Antioxidant"],
           ingredients: [
             { name: { en: "Walnuts", hi: "अखरोट", te: "వాల్‌నట్స్" }, qty: { en: "2 whole", hi: "2", te: "2" } },
             { name: { en: "Green Tea Bag", hi: "ग्रीन टी बैग", te: "గ్రీన్ టీ బ్యాగ్" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{ en: "Brew tea. Enjoy with soaked/raw walnuts.", hi: "चाय बनाएं। अखरोट के साथ लें।", te: "టీ తయారు చేయండి. వాల్‌నట్‌లతో తీసుకోండి." }]
         },
         { id: "m12", type: "dinner", title: { en: "Beetroot Roti", hi: "चुकंदर रोटी", te: "బీట్‌రూట్ రోటి" }, calories: 250, prepTimeMinutes: 15, cookTimeMinutes: 10, tags: ["Healthy"], 
           ingredients: [
             { name: { en: "Beetroot", hi: "चुकंदर", te: "బీట్‌రూట్" }, qty: { en: "1", hi: "1", te: "1" } },
             { name: { en: "Flour", hi: "आटा", te: "పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Mix pureed beetroot in dough. Make roti.", hi: "आटे में चुकंदर प्यूरी मिलाएं। रोटी बनाएं।", te: "పిండిలో బీట్‌రూట్ గుజ్జు కలిపి రోటి చేయండి."}] 
         }
      ],
      prepTimeline: [{ id: "t3", time: "20:00", task: { en: "Soak Moong Dal", hi: "मूंग दाल भिगोएँ", te: "పెసర పప్పు నానబెట్టండి" } }]
    },
    {
      date: "2024-01-05",
      dayName: { en: "Friday", hi: "शुक्रवार", te: "శుక్రవారం" },
      meals: [
         { id: "m13", type: "breakfast", title: { en: "Daliya", hi: "दलिया", te: "దలియా" }, calories: 260, prepTimeMinutes: 5, cookTimeMinutes: 15, tags: ["Fiber"], 
           ingredients: [
             { name: { en: "Broken Wheat", hi: "दलिया", te: "గోధుమ రవ్వ" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Carrot", hi: "गाजर", te: "క్యారెట్" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{en: "Pressure cook daliya with veggies.", hi: "सब्जियों के साथ दलिया पकाएं।", te: "కూరగాయలతో రవ్వను ఉడికించండి."}] 
         },
         { id: "m14", type: "lunch", 
           title: { en: "Egg Bhurji & Roti", hi: "अंडा भुर्जी और रोटी", te: "ఎగ్ బుర్జీ & రోటి" },
           calories: 380,
           prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Protein", "Vitamin D"],
           isNonVeg: true,
           vegAlternative: {
             id: "m14_veg", type: "lunch",
             title: { en: "Bhindi Masala", hi: "भिंडी मसाला", te: "బెండకాయ మసాలా" }, 
             calories: 220,
             prepTimeMinutes: 15, cookTimeMinutes: 15, tags: ["Green"], 
             ingredients: [
               { name: { en: "Okra", hi: "भिंडी", te: "బెండకాయ" }, qty: { en: "250g", hi: "250g", te: "250గ్రా" } }
             ],
             steps: [{en: "Sauté okra with spices.", hi: "मसालों के साथ भिंडी भूनें।", te: "మసాలాలతో బెండకాయ వేయించండి."}] 
           },
           ingredients: [
             { name: { en: "Eggs", hi: "अंडे", te: "గుడ్లు" }, qty: { en: "2", hi: "2", te: "2" } },
             { name: { en: "Onion/Tomato", hi: "प्याज/टमाटर", te: "ఉల్లిపాయ/టమోటా" }, qty: { en: "1 each", hi: "1 प्रत्येक", te: "ఒక్కొక్కటి" } }
           ],
           steps: [{en: "Scramble eggs with spices and veggies.", hi: "मसालों और सब्जियों के साथ अंडे फेंटें।", te: "మసాలాలు, కూరగాయలతో గుడ్లు వేయించండి."}]
         },
         { id: "m5_s", type: "snack",
           title: { en: "Sprout Bhel", hi: "अंकुरित भेल", te: "మొలకల భేల్" },
           calories: 140,
           prepTimeMinutes: 5, cookTimeMinutes: 0, tags: ["Protein", "Zesty"],
           ingredients: [
             { name: { en: "Sprouts", hi: "अंकुरित", te: "మొలకలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Lemon/Onion", hi: "नींबू/प्याज", te: "నిమ్మకాయ/ఉల్లిపాయ" }, qty: { en: "To taste", hi: "स्वादानुसार", te: "రుచికి తగినంత" } }
           ],
           steps: [{ en: "Mix sprouts, onion, tomato, lemon.", hi: "अंकुरित, प्याज, टमाटर, नींबू मिलाएं।", te: "మొలకలు, ఉల్లిపాయ, టమోటా, నిమ్మరసం కలపండి." }]
         },
         { id: "m15", type: "dinner", title: { en: "Moong Dal Khichdi", hi: "मूंग दाल खिचड़ी", te: "పెసర పప్పు కిచిడి" }, calories: 300, prepTimeMinutes: 5, cookTimeMinutes: 20, tags: ["Light"], 
           ingredients: [
             { name: { en: "Moong Dal", hi: "मूंग दाल", te: "పెసర పప్పు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Rice", hi: "चावल", te: "బియ్యం" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Boil rice and dal until soft.", hi: "चावल और दाल को नरम होने तक उबालें।", te: "బియ్యం, పప్పు మెత్తగా ఉడికించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-06",
      dayName: { en: "Saturday", hi: "शनिवार", te: "శనివారం" },
      meals: [
         { id: "m16", type: "breakfast", title: { en: "Ragi Malt", hi: "रागी माल्ट", te: "రాగి జావ" }, calories: 180, prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Calcium"], 
           ingredients: [
             { name: { en: "Ragi Flour", hi: "रागी का आटा", te: "రాగి పిండి" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } },
             { name: { en: "Buttermilk", hi: "छाछ", te: "మజ్జిగ" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Cook flour in water. Cool and add buttermilk.", hi: "आटे को पानी में पकाएं। ठंडा करके छाछ मिलाएं।", te: "నీటిలో పిండి ఉడికించండి. చల్లారాక మజ్జిగ కలపండి."}] 
         },
         { id: "m17", type: "lunch", title: { en: "Soya Curry", hi: "सोया करी", te: "సోయా కూర" }, calories: 280, prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Protein"], 
           ingredients: [
             { name: { en: "Soya Chunks", hi: "सोया चंक्स", te: "సోయా చంక్స్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Potato", hi: "आलू", te: "బంగాళాదుంప" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{en: "Boil chunks. Cook with potato in gravy.", hi: "चंक्स उबालें। ग्रेवी में आलू के साथ पकाएं।", te: "చంక్స్ ఉడికించండి. గ్రేవీలో బంగాళాదుంపతో వండండి."}] 
         },
         { id: "m6_s", type: "snack",
           title: { en: "Cucumber Slices", hi: "खीरे के टुकड़े", te: "కీరదోస ముక్కలు" },
           calories: 40,
           prepTimeMinutes: 5, cookTimeMinutes: 0, tags: ["Hydrating", "Light"],
           ingredients: [
             { name: { en: "Cucumber", hi: "खीरा", te: "కీరదోస" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{ en: "Slice and sprinkle pepper/salt.", hi: "काटें और काली मिर्च/नमक छिड़कें।", te: "ముక్కలు చేసి మిరియాలు/ఉప్పు చల్లండి." }]
         },
         { id: "m18", type: "dinner", title: { en: "Veg Soup", hi: "सब्जी का सूप", te: "వెజిటబుల్ సూప్" }, calories: 120, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Light"], 
           ingredients: [
             { name: { en: "Mixed Veggies", hi: "मिश्रित सब्जियां", te: "మిశ్రమ కూరగాయలు" }, qty: { en: "2 cups", hi: "2 कप", te: "2 కప్పులు" } }
           ],
           steps: [{en: "Boil veggies with ginger and pepper.", hi: "सब्जियों को अदरक और काली मिर्च के साथ उबालें।", te: "అల్లం, మిరియాలతో కూరగాయలు ఉడికించండి."}] 
         }
      ],
      prepTimeline: [{ id: "t4", time: "21:00", task: { en: "Sprout Beans", hi: "बीन्स अंकुरित करें", te: "గింజలు మొలకెత్తించండి" } }]
    },
    {
      date: "2024-01-07",
      dayName: { en: "Sunday", hi: "रविवार", te: "ఆదివారం" },
      meals: [
         { id: "m19", type: "breakfast", title: { en: "Sprouts Salad", hi: "अंकुरित सलाद", te: "మొలకల సలాడ్" }, calories: 150, prepTimeMinutes: 10, cookTimeMinutes: 0, tags: ["Raw"], 
           ingredients: [
             { name: { en: "Mixed Sprouts", hi: "अंकुरित अनाज", te: "మొలకలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Lemon", hi: "नींबू", te: "నిమ్మకాయ" }, qty: { en: "1/2", hi: "1/2", te: "1/2" } }
           ],
           steps: [{en: "Toss sprouts with lemon and salt.", hi: "अंकुरित अनाज में नींबू और नमक मिलाएं।", te: "మొలకల్లో నిమ్మరసం, ఉప్పు కలపండి."}] 
         },
         { 
           id: "m20", type: "lunch", 
           title: { en: "Fish Curry & Rice", hi: "मछली करी और चावल", te: "చేపల కూర & అన్నం" }, 
           calories: 420,
           prepTimeMinutes: 20, cookTimeMinutes: 25, tags: ["Omega 3"], 
           isNonVeg: true,
           vegAlternative: {
             id: "m20_veg", type: "lunch",
             title: { en: "Mushroom Matar", hi: "मशरूम मटर", te: "మష్రూమ్ మటర్" }, 
             calories: 250,
             prepTimeMinutes: 15, cookTimeMinutes: 15, tags: ["Vit D"], 
             ingredients: [
               { name: { en: "Mushrooms", hi: "मशरूम", te: "పుట్టగొడుగులు" }, qty: { en: "200g", hi: "200g", te: "200గ్రా" } },
               { name: { en: "Green Peas", hi: "मटर", te: "బఠానీలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
             ],
             steps: [{en: "Sauté mushrooms and peas in spices.", hi: "मसालों में मशरूम और मटर भूनें।", te: "మసాలాల్లో పుట్టగొడుగులు, బఠానీలు వేయించండి."}] 
           },
           ingredients: [
             { name: { en: "Fish", hi: "मछली", te: "చేప" }, qty: { en: "200g", hi: "200g", te: "200గ్రా" } },
             { name: { en: "Rice", hi: "चावल", te: "బియ్యం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Cook fish in tangy gravy. Serve with rice.", hi: "मछली को ग्रेवी में पकाएं। चावल के साथ परोसें।", te: "గ్రేవీలో చేపను వండండి. అన్నంతో వడ్డించండి."}]
         },
         { id: "m7_s", type: "snack",
           title: { en: "Masala Buttermilk", hi: "मसाला छाछ", te: "మసాలా మజ్జిగ" },
           calories: 60,
           prepTimeMinutes: 2, cookTimeMinutes: 0, tags: ["Probiotic", "Cooling"],
           ingredients: [
             { name: { en: "Curd", hi: "दही", te: "పెరుగు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Jeera Powder", hi: "जीरा पाउडर", te: "జీలకర్ర పొడి" }, qty: { en: "Pinch", hi: "चुटकी भर", te: "చిటికెడు" } }
           ],
           steps: [{ en: "Blend curd, water, spices.", hi: "दही, पानी, मसाले मिलाएं।", te: "పెరుగు, నీరు, మసాలాలు కలపండి." }]
         },
         { id: "m21", type: "dinner", title: { en: "Turmeric Milk", hi: "हल्दी वाला दूध", te: "పసుపు పాలు" }, calories: 150, prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Anti-inflammatory"], 
           ingredients: [
             { name: { en: "Milk", hi: "दूध", te: "పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Turmeric", hi: "हल्दी", te: "పసుపు" }, qty: { en: "1/2 tsp", hi: "1/2 चम्मच", te: "1/2 చెంచా" } }
           ],
           steps: [{en: "Boil milk with turmeric.", hi: "हल्दी के साथ दूध उबालें।", te: "పసుపుతో పాలు మరిగించండి."}] 
         }
      ],
      prepTimeline: []
    }
  ]
};

const SOUTH_INDIAN_PLAN: WeeklyPlan = {
  weekStart: "2024-01-01",
  days: [
    {
      date: "2024-01-01",
      dayName: { en: "Monday", hi: "सोमवार", te: "సోమవారం" },
      meals: [
        {
          id: "sm1", type: "breakfast", title: { en: "Idli & Sambar", hi: "इडली सांभर", te: "ఇడ్లీ సాంబార్" },
          calories: 250,
          prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Steamed", "Probiotic"],
          ingredients: [
            { name: { en: "Idli Batter", hi: "इडली बैटर", te: "ఇడ్లీ పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Toor Dal", hi: "तूर दाल", te: "కంది పప్పు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
          ],
          steps: [{ en: "Steam idlis. Make sambar with dal/veggies.", hi: "इडली भाप लें। दाल/सब्जियों के साथ सांभर बनाएं।", te: "ఇడ్లీలు ఆవిరి పట్టండి. పప్పు/కూరగాయలతో సాంబార్ చేయండి." }]
        },
        {
          id: "sm2", type: "lunch", title: { en: "Curd Rice", hi: "दही चावल", te: "పెరుగన్నం" },
          calories: 320,
          prepTimeMinutes: 5, cookTimeMinutes: 10, tags: ["Cooling"],
          ingredients: [
            { name: { en: "Rice", hi: "चावल", te: "అన్నం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Curd/Yogurt", hi: "दही", te: "పెరుగు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Pomegranate", hi: "अनार", te: "దానిమ్మ" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
          ],
          steps: [{ en: "Mix rice, curd, fruits.", hi: "चावल, दही, फल मिलाएं।", te: "అన్నం, పెరుగు, పండ్లు కలపండి." }]
        },
        {
          id: "sm1_s", type: "snack",
          title: { en: "Sundal (Chickpea)", hi: "सुंडल (चना)", te: "శనగలు (సుండల్)" },
          calories: 140,
          prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Protein", "Fiber"],
          ingredients: [
            { name: { en: "Boiled Chickpeas", hi: "उबले चने", te: "ఉడికించిన శనగలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
            { name: { en: "Mustard Seeds", hi: "राई", te: "ఆవాలు" }, qty: { en: "1/2 tsp", hi: "1/2 चम्मच", te: "1/2 చెంచా" } }
          ],
          steps: [{ en: "Temper boiled chickpeas with mustard/curry leaves.", hi: "उबले चने में राई/कढ़ी पत्ते का तड़का लगाएं।", te: "ఉడికించిన శనగలకు ఆవాలు/కరివేపాకు తాలింపు వేయండి." }]
        },
        {
          id: "sm3", type: "dinner", title: { en: "Veg Stew & Appam", hi: "वेजिटेबल स्टू और अप्पम", te: "వెజిటబుల్ స్టూ & అప్పం" },
          calories: 350,
          prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Coconut Milk"],
          ingredients: [
            { name: { en: "Mixed Veggies", hi: "मिश्रित सब्जियां", te: "మిశ్రమ కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Coconut Milk", hi: "नारियल का दूध", te: "కొబ్బరి పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
            { name: { en: "Appam Batter", hi: "अप्पम बैटर", te: "అప్పం పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
          ],
          steps: [{ en: "Cook veggies in coconut milk. Make appam.", hi: "नारियल के दूध में सब्जियां पकाएं। अप्पम बनाएं।", te: "కొబ్బరి పాలతో కూరగాయలు వండండి. అప్పం వేయండి." }]
        }
      ],
      prepTimeline: [{ id: "st1", time: "19:00", task: { en: "Soak Dal for Adai", hi: "अडाई के लिए दाल भिगोएँ", te: "అడై కోసం పప్పు నానబెట్టండి" } }]
    },
    {
      date: "2024-01-02",
      dayName: { en: "Tuesday", hi: "मंगलवार", te: "మంగళవారం" },
      meals: [
         { id: "sm4", type: "breakfast", title: { en: "Ragi Dosa", hi: "रागी डोसा", te: "రాగి దోసె" }, calories: 220, prepTimeMinutes: 10, cookTimeMinutes: 10, tags: ["Calcium"], 
           ingredients: [
             { name: { en: "Ragi Flour", hi: "रागी का आटा", te: "రాగి పిండి" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Rice Flour", hi: "चावल का आटा", te: "బియ్యం పిండి" }, qty: { en: "1/4 cup", hi: "1/4 कप", te: "1/4 కప్పు" } }
           ],
           steps: [{en: "Mix flours with water. Make dosas.", hi: "आटा पानी के साथ मिलाएं। डोसा बनाएं।", te: "పిండిని నీటితో కలిపి దోసెలు వేయండి."}] 
         },
         { id: "sm5", type: "lunch", title: { en: "Lemon Rice", hi: "लेमन राइस", te: "నిమ్మకాయ పులిహోర" }, calories: 350, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Vitamin C"], 
           ingredients: [
             { name: { en: "Rice", hi: "चावल", te: "అన్నం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Lemon", hi: "नींबू", te: "నిమ్మకాయ" }, qty: { en: "1", hi: "1", te: "1" } },
             { name: { en: "Peanuts", hi: "मूंगफली", te: "వేరుశెనగలు" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
           ],
           steps: [{en: "Temper spices/peanuts, mix with rice/lemon.", hi: "मसाले/मूंगफली भूनें, चावल/नींबू मिलाएं।", te: "తాలింపు వేసి అన్నం/నిమ్మరసం కలపండి."}] 
         },
         { id: "sm2_s", type: "snack",
           title: { en: "Fruit Salad", hi: "फ्रूट सलाद", te: "ఫ్రూట్ సలాడ్" },
           calories: 120,
           prepTimeMinutes: 10, cookTimeMinutes: 0, tags: ["Fresh", "Vitamins"],
           ingredients: [
             { name: { en: "Seasonal Fruits", hi: "मौसमी फल", te: "కాలానుగుణ పండ్లు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{ en: "Chop and mix fresh fruits.", hi: "ताजे फल काटें और मिलाएं।", te: "తాజా పండ్లను కట్ చేసి కలపండి." }]
         },
         { id: "sm6", type: "dinner", title: { en: "Rasam & Rice", hi: "रसम और चावल", te: "రసం & అన్నం" }, calories: 300, prepTimeMinutes: 5, cookTimeMinutes: 15, tags: ["Digestion"], 
           ingredients: [
             { name: { en: "Tomato", hi: "टमाटर", te: "టమోటా" }, qty: { en: "2", hi: "2", te: "2" } },
             { name: { en: "Tamarind", hi: "इमली", te: "చింతపండు" }, qty: { en: "1 lemon size", hi: "1 नींबू के आकार का", te: "1 నిమ్మకాయ సైజు" } }
           ],
           steps: [{en: "Boil tamarind water with spices.", hi: "मसालों के साथ इमली का पानी उबालें।", te: "మసాలాలతో చింతపండు నీటిని మరిగించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-03",
      dayName: { en: "Wednesday", hi: "बुधवार", te: "బుధవారం" },
      meals: [
         { id: "sm7", type: "breakfast", title: { en: "Veggie Upma", hi: "वेजी उपमा", te: "వెజ్జీ ఉప్మా" }, calories: 240, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Fiber"], 
           ingredients: [
             { name: { en: "Semolina (Rava)", hi: "सूजी", te: "రవ్వ" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Carrot/Peas", hi: "गाजर/मटर", te: "క్యారెట్/బఠానీలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Roast rava. Cook with veggies/water.", hi: "सूजी भूनें। सब्जियों/पानी के साथ पकाएं।", te: "రవ్వ వేయించండి. కూరగాయలు/నీటితో ఉడికించండి."}] 
         },
         { 
           id: "sm8", type: "lunch", 
           title: { en: "Fish Fry & Rice", hi: "मछली फ्राई और चावल", te: "చేప వేపుడు & అన్నం" }, 
           calories: 450,
           prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Omega-3"], 
           isNonVeg: true,
           vegAlternative: {
             id: "sm8_veg", type: "lunch",
             title: { en: "Sambar Rice", hi: "सांभर चावल", te: "సాంబార్ అన్నం" }, 
             calories: 380,
             prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Protein"], 
             ingredients: [
               { name: { en: "Toor Dal", hi: "तूर दाल", te: "కంది పప్పు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
               { name: { en: "Mixed Veggies", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
             ],
             steps: [{en: "Cook dal and veggies with sambar powder.", hi: "सांभर पाउडर के साथ दाल और सब्जियां पकाएं।", te: "సాంబార్ పొడితో పప్పు, కూరగాయలు వండండి."}] 
           },
           ingredients: [
             { name: { en: "Fish", hi: "मछली", te: "చేప" }, qty: { en: "2 slices", hi: "2 टुकड़े", te: "2 ముక్కలు" } },
             { name: { en: "Rice", hi: "चावल", te: "అన్నం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Marinate fish and pan fry. Serve with rice.", hi: "मछली को मैरीनेट करें और तलें। चावल के साथ परोसें।", te: "చేపను మసాలా పట్టించి పెనంపై వేయించండి. అన్నంతో వడ్డించండి."}]
         },
         { id: "sm3_s", type: "snack",
           title: { en: "Spiced Buttermilk", hi: "मसाला छाछ", te: "మసాలా మజ్జిగ" },
           calories: 60,
           prepTimeMinutes: 2, cookTimeMinutes: 0, tags: ["Probiotic"],
           ingredients: [
             { name: { en: "Buttermilk", hi: "छाछ", te: "మజ్జిగ" }, qty: { en: "1 glass", hi: "1 गिलास", te: "1 గ్లాసు" } },
             { name: { en: "Ginger/Curry Leaves", hi: "अदरक/कढ़ी पत्ता", te: "అల్లం/కరివేపాకు" }, qty: { en: "Pinch", hi: "चुटकी भर", te: "చిటికెడు" } }
           ],
           steps: [{ en: "Blend buttermilk with ginger and curry leaves.", hi: "छाछ को अदरक और कढ़ी पत्ते के साथ मिलाएं।", te: "మజ్జిగను అల్లం, కరివేపాకుతో కలపండి." }]
         },
         { id: "sm9", type: "dinner", title: { en: "Adai Dosa", hi: "अडाई डोसा", te: "అడై దోసె" }, calories: 280, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["High Protein"], 
           ingredients: [
             { name: { en: "Mixed Lentils", hi: "मिश्रित दालें", te: "మిశ్రమ పప్పులు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Rice", hi: "चावल", te: "బియ్యం" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Grind soaked mix coarsely. Make dosas.", hi: "भीगे हुए मिश्रण को मोटा पीसें। डोसा बनाएं।", te: "నానబెట్టిన మిశ్రమాన్ని బరకగా రుబ్బి దోసెలు వేయండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-04",
      dayName: { en: "Thursday", hi: "गुरुवार", te: "గురువారం" },
      meals: [
         { id: "sm10", type: "breakfast", title: { en: "Pesarattu", hi: "पेसरट्टू", te: "పెసరట్టు" }, calories: 260, prepTimeMinutes: 5, cookTimeMinutes: 10, tags: ["Protein"], 
           ingredients: [
             { name: { en: "Green Gram", hi: "हरी मूंग", te: "పెసలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Ginger", hi: "अदरक", te: "అల్లం" }, qty: { en: "1 inch", hi: "1 इंच", te: "1 అంగుళం" } }
           ],
           steps: [{en: "Grind green gram. Make savory crepes.", hi: "हरी मूंग पीसें। नमकीन क्रेप्स बनाएं।", te: "పెసలు రుబ్బి అట్లు వేయండి."}] 
         },
         { id: "sm11", type: "lunch", title: { en: "Aviyal", hi: "अवियल", te: "అవియల్" }, calories: 300, prepTimeMinutes: 15, cookTimeMinutes: 15, tags: ["Nutrient Dense"], 
           ingredients: [
             { name: { en: "Mixed Veggies", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "2 cups", hi: "2 कप", te: "2 కప్పులు" } },
             { name: { en: "Coconut", hi: "नारियल", te: "కొబ్బరి" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Steam veggies. Add coconut-cumin paste.", hi: "सब्जियां भाप लें। नारियल-जीरा पेस्ट मिलाएं।", te: "కూరగాయలు ఉడికించి కొబ్బరి-జీలకర్ర పేస్ట్ కలపండి."}] 
         },
         { id: "sm4_s", type: "snack",
           title: { en: "Boiled Peanuts", hi: "उबली हुई मूंगफली", te: "ఉడికించిన వేరుశెనగలు" },
           calories: 200,
           prepTimeMinutes: 5, cookTimeMinutes: 15, tags: ["Protein", "Comfort"],
           ingredients: [
             { name: { en: "Peanuts (Shell on)", hi: "मूंगफली", te: "వేరుశెనగలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{ en: "Boil peanuts in salted water until soft.", hi: "नमकीन पानी में मूंगफली को नरम होने तक उबालें।", te: "ఉప్పు నీటిలో వేరుశెనగలను మెత్తగా ఉడికించండి." }]
         },
         { id: "sm12", type: "dinner", title: { en: "Chapati & Kurma", hi: "चपाती और कुरमा", te: "చపాతీ & కుర్మా" }, calories: 350, prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Balanced"], 
           ingredients: [
             { name: { en: "Wheat Flour", hi: "गेहूं का आटा", te: "గోధుమ పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Veggies", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Make rotis. Serve with veg curry.", hi: "रोटी बनाएं। सब्जी करी के साथ परोसें।", te: "చపాతీ చేసి వెజ్ కర్రీతో వడ్డించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-05",
      dayName: { en: "Friday", hi: "शुक्रवार", te: "శుక్రవారం" },
      meals: [
         { id: "sm13", type: "breakfast", title: { en: "Millet Pongal", hi: "मिलेट पोंगल", te: "చిరుధాన్యాల పొంగల్" }, calories: 280, prepTimeMinutes: 5, cookTimeMinutes: 15, tags: ["Whole Grain"], 
           ingredients: [
             { name: { en: "Foxtail Millet", hi: "कंगनी", te: "కొర్రలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Moong Dal", hi: "मूंग दाल", te: "పెసర పప్పు" }, qty: { en: "1/4 cup", hi: "1/4 कप", te: "1/4 కప్పు" } }
           ],
           steps: [{en: "Cook millet/dal soft with pepper/cumin.", hi: "काली मिर्च/जीरा के साथ मिलेट/दाल पकाएं।", te: "మిరియాలు/జీలకర్రతో మిల్లెట్/పప్పు మెత్తగా వండండి."}] 
         },
         { 
           id: "sm14", type: "lunch", 
           title: { en: "Egg Roast & Rice", hi: "अंडा रोस्ट और चावल", te: "ఎగ్ రోస్ట్ & రైస్" }, 
           calories: 400,
           prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Protein"], 
           isNonVeg: true,
           vegAlternative: {
             id: "sm14_veg", type: "lunch",
             title: { en: "Yam Roast & Rice", hi: "रतालू और चावल", te: "కంద గడ్డ వేపుడు & అన్నం" }, 
             calories: 380,
             prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Omega-3"], 
             ingredients: [
               { name: { en: "Elephant Yam", hi: "रतालू", te: "కంద గడ్డ" }, qty: { en: "250g", hi: "250g", te: "250గ్రా" } },
               { name: { en: "Rice", hi: "चावल", te: "అన్నం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
             ],
             steps: [{en: "Marinate yam slices and pan roast.", hi: "रतालू के टुकड़ों को मैरीनेट करें और भूनें।", te: "కంద ముక్కలను మసాలా పట్టించి పెనంపై వేయించండి."}] 
           },
           ingredients: [
             { name: { en: "Eggs", hi: "अंडे", te: "గుడ్లు" }, qty: { en: "2", hi: "2", te: "2" } },
             { name: { en: "Onion/Tomato", hi: "प्याज/टमाटर", te: "ఉల్లిపాయ/టమోటా" }, qty: { en: "1 each", hi: "1 प्रत्येक", te: "ఒక్కొక్కటి" } }
           ],
           steps: [{en: "Roast boiled eggs in onion-tomato masala.", hi: "उबले अंडों को प्याज-टमाटर मसाला में भूनें।", te: "ఉడికించిన గుడ్లను ఉల్లిపాయ-టమోటా మసాలాలో వేయించండి."}]
         },
         { id: "sm5_s", type: "snack",
           title: { en: "Kara Pori", hi: "कारा पोरी", te: "కారా పొరి" },
           calories: 150,
           prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Light", "Snack"],
           ingredients: [
             { name: { en: "Puffed Rice", hi: "मुरमुरे", te: "మర్మరాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Garlic/Peanuts", hi: "लहसुन/मूंगफली", te: "వెల్లుల్లి/వేరుశెనగ" }, qty: { en: "1 tbsp", hi: "1 चम्मच", te: "1 చెంచా" } }
           ],
           steps: [{ en: "Roast puffed rice with spices and peanuts.", hi: "मुरमुरे को मसालों और मूंगफली के साथ भूनें।", te: "మర్మరాలను మసాలాలు, వేరుశెనగలతో వేయించండి." }]
         },
         { id: "sm15", type: "dinner", title: { en: "Idiyappam", hi: "इडियप्पम", te: "ఇడియప్పం" }, calories: 250, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Steam"], 
           ingredients: [
             { name: { en: "Rice Flour", hi: "चावल का आटा", te: "బియ్యం పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Coconut Milk", hi: "नारियल का दूध", te: "కొబ్బరి పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Press dough into noodles, steam.", hi: "आटे को नूडल्स में दबाएं, भाप दें।", te: "పిండిని నూడుల్స్‌లా ఒత్తి, ఆవిరి పట్టండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-06",
      dayName: { en: "Saturday", hi: "शनिवार", te: "శనివారం" },
      meals: [
         { id: "sm16", type: "breakfast", title: { en: "Oats Idli", hi: "ओट्स इडली", te: "ఓట్స్ ఇడ్లీ" }, calories: 220, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Fiber"], 
           ingredients: [
             { name: { en: "Oats", hi: "ओट्स", te: "ఓట్స్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Curd", hi: "दही", te: "పెరుగు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Mix oats, curd, grated carrots. Steam.", hi: "ओट्स, दही, गाजर मिलाएं। भाप दें।", te: "ఓట్స్, పెరుగు, క్యారెట్ తురుము కలిపి ఆవిరి పట్టండి."}] 
         },
         { id: "sm17", type: "lunch", title: { en: "Spinach Kootu", hi: "पालक कूटू", te: "పాలకూర కూటు" }, calories: 280, prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Iron"], 
           ingredients: [
             { name: { en: "Spinach", hi: "पालक", te: "పాలకూర" }, qty: { en: "1 bunch", hi: "1 गुच्छा", te: "1 కట్ట" } },
             { name: { en: "Moong Dal", hi: "मूंग दाल", te: "పెసర పప్పు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Cook spinach/dal with coconut paste.", hi: "नारियल पेस्ट के साथ पालक/दाल पकाएं।", te: "కొబ్బరి పేస్ట్‌తో పాలకూర/పప్పు వండండి."}] 
         },
         { id: "sm6_s", type: "snack",
           title: { en: "Vegetable Soup", hi: "सब्जी का सूप", te: "వెజిటబుల్ సూప్" },
           calories: 80,
           prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Hydrating"],
           ingredients: [
             { name: { en: "Mixed Veggies", hi: "मिश्रित सब्जियां", te: "మిశ్రమ కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{ en: "Boil veggies and blend lightly.", hi: "सब्जियां उबालें और हल्का ब्लेंड करें।", te: "కూరగాయలు ఉడికించి కొద్దిగా బ్లెండ్ చేయండి." }]
         },
         { id: "sm18", type: "dinner", title: { en: "Tomato Rasam", hi: "टमाटर रसम", te: "టమోటా రసం" }, calories: 150, prepTimeMinutes: 5, cookTimeMinutes: 15, tags: ["Digestion"], 
           ingredients: [
             { name: { en: "Tomatoes", hi: "टमाटर", te: "టమోటాలు" }, qty: { en: "3", hi: "3", te: "3" } },
             { name: { en: "Pepper/Cumin", hi: "काली मिर्च/जीरा", te: "మిరియాలు/జీలకర్ర" }, qty: { en: "1 tsp", hi: "1 चम्मच", te: "1 చెంచా" } }
           ],
           steps: [{en: "Boil mashed tomatoes with spices.", hi: "मसालों के साथ मैश किए हुए टमाटर उबालें।", te: "మసాలాలతో టమోటా గుజ్జును మరిగించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-07",
      dayName: { en: "Sunday", hi: "रविवार", te: "ఆదివారం" },
      meals: [
         { id: "sm19", type: "breakfast", title: { en: "Masala Dosa", hi: "मसाला डोसा", te: "మసాలా దోసె" }, calories: 350, prepTimeMinutes: 15, cookTimeMinutes: 15, tags: ["Treat"], 
           ingredients: [
             { name: { en: "Dosa Batter", hi: "डोसा बैटर", te: "దోసె పిండి" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Potatoes", hi: "आलू", te: "బంగాళాదుంపలు" }, qty: { en: "2", hi: "2", te: "2" } }
           ],
           steps: [{en: "Make crispy dosa with potato filling.", hi: "आलू भरने के साथ क्रिस्पी डोसा बनाएं।", te: "బంగాళాదుంప కూరతో కరకరలాడే దోసె వేయండి."}] 
         },
         { 
           id: "sm20", type: "lunch", 
           title: { en: "Chicken Biryani", hi: "चिकन बिरयानी", te: "చికెన్ బిర్యానీ" }, 
           calories: 550,
           prepTimeMinutes: 20, cookTimeMinutes: 40, tags: ["Aromatic"], 
           isNonVeg: true,
           vegAlternative: {
             id: "sm20_veg", type: "lunch",
             title: { en: "Veg Biryani", hi: "वेज बिरयानी", te: "వెజ్ బిర్యానీ" }, 
             calories: 450,
             prepTimeMinutes: 20, cookTimeMinutes: 30, tags: ["Aromatic"], 
             ingredients: [
               { name: { en: "Basmati Rice", hi: "बासमती चावल", te: "బాస్మతి బియ్యం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
               { name: { en: "Mixed Veggies", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "1.5 cups", hi: "1.5 कप", te: "1.5 కప్పులు" } }
             ],
             steps: [{en: "Layer rice and spiced veggies. Steam.", hi: "चावल और मसालेदार सब्जियों की परत लगाएं। भाप दें।", te: "అన్నం, మసాలా కూరగాయలను పొరలుగా వేసి దమ్ చేయండి."}] 
           },
           ingredients: [
             { name: { en: "Basmati Rice", hi: "बासमती चावल", te: "బాస్మతి బియ్యం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Chicken", hi: "चिकन", te: "చికెన్" }, qty: { en: "200g", hi: "200g", te: "200గ్రా" } }
           ],
           steps: [{en: "Cook chicken with spices. Layer with rice. Steam.", hi: "चिकन को मसालों के साथ पकाएं। चावल के साथ परत लगाएं। भाप दें।", te: "మసాలాలతో చికెన్ వండండి. అన్నంతో పొరలుగా వేసి దమ్ చేయండి."}]
         },
         { id: "sm7_s", type: "snack",
           title: { en: "Ragi Malt", hi: "रागी माल्ट", te: "రాగి జావ" },
           calories: 120,
           prepTimeMinutes: 2, cookTimeMinutes: 5, tags: ["Calcium"],
           ingredients: [
             { name: { en: "Ragi Flour", hi: "रागी का आटा", te: "రాగి పిండి" }, qty: { en: "1 tbsp", hi: "1 चम्मच", te: "1 చెంచా" } },
             { name: { en: "Water/Milk", hi: "पानी/दूध", te: "నీరు/పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{ en: "Boil flour in water until thick. Add jaggery/milk.", hi: "गाढ़ा होने तक पानी में आटा उबालें। गुड़/दूध डालें।", te: "చిక్కబడే వరకు నీటిలో పిండిని ఉడికించండి. బెల్లం/పాలు కలపండి." }]
         },
         { id: "sm21", type: "dinner", title: { en: "Curd Rice", hi: "दही चावल", te: "పెరుగన్నం" }, calories: 250, prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Probiotic"], 
           ingredients: [
             { name: { en: "Rice", hi: "चावल", te: "అన్నం" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Curd", hi: "दही", te: "పెరుగు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Mix rice and curd. Add tadka.", hi: "चावल और दही मिलाएं। तड़का लगाएं।", te: "అన్నం, పెరుగు కలిపి తాలింపు వేయండి."}] 
         }
      ],
      prepTimeline: []
    }
  ]
};

const CONTINENTAL_PLAN: WeeklyPlan = {
  weekStart: "2024-01-01",
  days: [
    {
      date: "2024-01-01",
      dayName: { en: "Monday", hi: "सोमवार", te: "సోమవారం" },
      meals: [
        {
          id: "cm1", type: "breakfast", title: { en: "Oatmeal with Berries", hi: "बेरीज के साथ ओट्स", te: "బెర్రీలతో ఓట్స్" },
          calories: 300,
          prepTimeMinutes: 5, cookTimeMinutes: 10, tags: ["Antioxidant", "Fiber"],
          ingredients: [
            { name: { en: "Rolled Oats", hi: "ओट्स", te: "ఓట్స్" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
            { name: { en: "Berries", hi: "बेरीज", te: "బెర్రీలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
          ],
          steps: [{ en: "Cook oats and top with strawberries.", hi: "ओट्स पकाएं और स्ट्रॉबेरी डालें।", te: "ఓట్స్ ఉడికించి స్ట్రాబెర్రీలు వేయండి." }]
        },
        {
          id: "cm2", type: "lunch", title: { en: "Grilled Chicken Salad", hi: "ग्रिल्ड चिकन सलाद", te: "గ్రిల్డ్ చికెన్ సలాడ్" },
          calories: 400,
          prepTimeMinutes: 15, cookTimeMinutes: 10, tags: ["Protein", "Low Carb"],
          isNonVeg: true,
          vegAlternative: {
            id: "cm2_veg", type: "lunch",
            title: { en: "Grilled Tofu Salad", hi: "ग्रिल्ड टोफू सलाद", te: "గ్రిల్డ్ టోఫు సలాడ్" },
            calories: 350,
            prepTimeMinutes: 15, cookTimeMinutes: 10, tags: ["Protein", "Vegan"],
            ingredients: [
              { name: { en: "Tofu", hi: "टोफू", te: "టోఫు" }, qty: { en: "150g", hi: "150g", te: "150g" } },
              { name: { en: "Lettuce", hi: "सलाद पत्ता", te: "లెట్యూస్" }, qty: { en: "2 cups", hi: "2 कप", te: "2 కప్పులు" } }
            ],
            steps: [{ en: "Grill tofu and toss with greens.", hi: "टोफू को ग्रिल करें और साग के साथ मिलाएं।", te: "టోఫును గ్రిల్ చేసి ఆకుకూరలతో కలపండి." }]
          },
          ingredients: [
            { name: { en: "Chicken Breast", hi: "चिकन ब्रेस्ट", te: "చికెన్ బ్రెస్ట్" }, qty: { en: "150g", hi: "150g", te: "150గ్రా" } },
            { name: { en: "Lettuce", hi: "सलाद पत्ता", te: "లెట్యూస్" }, qty: { en: "2 cups", hi: "2 कप", te: "2 కప్పులు" } }
          ],
          steps: [{ en: "Grill protein and toss with greens.", hi: "प्रोटीन को ग्रिल करें और साग के साथ मिलाएं।", te: "ప్రోటీన్‌ను గ్రిల్ చేసి ఆకుకూరలతో కలపండి." }]
        },
        {
          id: "cm1_s", type: "snack",
          title: { en: "Apple & Walnuts", hi: "सेब और अखरोट", te: "ఆపిల్ & వాల్‌నట్స్" },
          calories: 180,
          prepTimeMinutes: 2, cookTimeMinutes: 0, tags: ["Omega-3", "Fiber"],
          ingredients: [
            { name: { en: "Apple", hi: "सेब", te: "ఆపిల్" }, qty: { en: "1", hi: "1", te: "1" } },
            { name: { en: "Walnuts", hi: "अखरोट", te: "వాల్‌నట్స్" }, qty: { en: "Handful", hi: "मुट्ठी भर", te: "గుప్పెడు" } }
           ],
          steps: [{ en: "Slice apple and enjoy with nuts.", hi: "सेब काटें और मेवों के साथ खाएं।", te: "ఆపిల్ ముక్కలు చేసి నట్స్‌తో తినండి." }]
        },
        {
          id: "cm3", type: "dinner", title: { en: "Pumpkin Soup", hi: "कद्दू का सूप", te: "గుమ్మడికాయ సూప్" },
          calories: 180,
          prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Light"],
          ingredients: [
            { name: { en: "Pumpkin", hi: "कद्दू", te: "గుమ్మడికాయ" }, qty: { en: "200g", hi: "200g", te: "200గ్రా" } },
            { name: { en: "Vegetable Broth", hi: "सब्जी शोरबा", te: "వెజిటబుల్ బ్రాత్" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
          steps: [{ en: "Simmer pumpkin and blend.", hi: "कद्दू उबालें और ब्लेंड करें।", te: "గుమ్మడికాయను ఉడికించి బ్లెండ్ చేయండి." }]
        }
      ],
      prepTimeline: [{ id: "ct1", time: "20:00", task: { en: "Prep Chia Pudding", hi: "चिया पुडिंग तैयार करें", te: "చియా పుడ్డింగ్ సిద్ధం చేయండి" } }]
    },
    {
      date: "2024-01-02",
      dayName: { en: "Tuesday", hi: "मंगलवार", te: "మంగళవారం" },
      meals: [
         { id: "cm4", type: "breakfast", title: { en: "Chia Pudding", hi: "चिया पुडिंग", te: "చియా పుడ్డింగ్" }, calories: 250, prepTimeMinutes: 5, cookTimeMinutes: 0, tags: ["Omega-3"], 
           ingredients: [
             { name: { en: "Chia Seeds", hi: "चिया बीज", te: "చియా విత్తనాలు" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } },
             { name: { en: "Almond Milk", hi: "बादाम का दूध", te: "బాదం పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Soak seeds in milk overnight.", hi: "बीज को दूध में रात भर भिगोएँ।", te: "విత్తనాలను రాత్రంతా పాలలో నానబెట్టండి."}] 
         },
         { id: "cm5", type: "lunch", title: { en: "Quinoa Bowl", hi: "क्विनोआ बाउल", te: "క్వినోవా బౌల్" }, calories: 400, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Protein"], 
           ingredients: [
             { name: { en: "Quinoa", hi: "क्विनोआ", te: "క్వినోవా" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Roasted Veggies", hi: "भुनी हुई सब्जियां", te: "వేయించిన కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Mix cooked quinoa with veggies.", hi: "पके हुए क्विनोआ को सब्जियों के साथ मिलाएं।", te: "ఉడికించిన క్వినోవాను కూరగాయలతో కలపండి."}] 
         },
         { id: "cm2_s", type: "snack",
           title: { en: "Hummus & Carrots", hi: "हम्मस और गाजर", te: "హమ్మస్ & క్యారెట్లు" },
           calories: 150,
           prepTimeMinutes: 2, cookTimeMinutes: 0, tags: ["Protein", "Crunchy"],
           ingredients: [
             { name: { en: "Carrot Sticks", hi: "गाजर", te: "క్యారెట్ ముక్కలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Hummus", hi: "हम्मस", te: "హమ్మస్" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
           ],
           steps: [{ en: "Dip veggies in hummus.", hi: "सब्जियों को हम्मस में डुबोएं।", te: "కూరగాయలను హమ్మస్‌లో ముంచి తినండి." }]
         },
         { id: "cm6", type: "dinner", title: { en: "Baked Sweet Potato", hi: "बेक्ड शकरकंद", te: "బేక్డ్ చిలగడదుంప" }, calories: 300, prepTimeMinutes: 5, cookTimeMinutes: 30, tags: ["Fiber"], 
           ingredients: [
             { name: { en: "Sweet Potato", hi: "शकरकंद", te: "చిలగడదుంప" }, qty: { en: "1", hi: "1", te: "1" } },
             { name: { en: "Chickpeas", hi: "छोले", te: "కాబూలీ శనగలు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Bake potato. Stuff with spiced chickpeas.", hi: "आलू बेक करें। मसालेदार छोले भरें।", te: "చిలగడదుంప బేక్ చేసి, మసాలా శనగలు స్టఫ్ చేయండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-03",
      dayName: { en: "Wednesday", hi: "बुधवार", te: "బుధవారం" },
      meals: [
         { id: "cm7", type: "breakfast", title: { en: "Scrambled Eggs", hi: "स्क्रेम्बल अंडे", te: "స్క్రాంబుల్డ్ ఎగ్స్" }, calories: 250, prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Protein"], 
           ingredients: [
             { name: { en: "Eggs/Tofu", hi: "अंडे/टोफू", te: "గుడ్లు/టోఫు" }, qty: { en: "2", hi: "2", te: "2" } },
             { name: { en: "Spinach", hi: "पालक", te: "పాలకూర" }, qty: { en: "1 handful", hi: "1 मुट्ठी", te: "1 గుప్పెడు" } }
           ],
           steps: [{en: "Scramble eggs with spinach.", hi: "पालक के साथ अंडे फेंटें।", te: "పాలకూరతో గుడ్లు కలపండి."}] 
         },
         { id: "cm8", type: "lunch", title: { en: "Lentil Soup", hi: "दाल का सूप", te: "పప్పు సూప్" }, calories: 320, prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Fiber"], 
           ingredients: [
             { name: { en: "Lentils", hi: "दाल", te: "పప్పు" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Whole Wheat Bread", hi: "गेहूं की ब्रेड", te: "హోల్ వీట్ బ్రెడ్" }, qty: { en: "1 slice", hi: "1 टुकड़ा", te: "1 ముక్క" } }
           ],
           steps: [{en: "Simmer lentils with carrots/celery.", hi: "गाजर/अजवाइन के साथ दाल उबालें।", te: "క్యారెట్/సెలెరీతో పప్పు ఉడికించండి."}] 
         },
         { id: "cm3_s", type: "snack",
           title: { en: "Greek Yogurt", hi: "ग्रीक योगर्ट", te: "గ్రీక్ పెరుగు" },
           calories: 120,
           prepTimeMinutes: 1, cookTimeMinutes: 0, tags: ["Probiotic", "Protein"],
           ingredients: [
             { name: { en: "Greek Yogurt", hi: "ग्रीक योगर्ट", te: "గ్రీక్ పెరుగు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Berries", hi: "बेरीज", te: "బెర్రీలు" }, qty: { en: "Handful", hi: "मुट्ठी भर", te: "గుప్పెడు" } }
           ],
           steps: [{ en: "Mix yogurt with berries.", hi: "दही में बेरीज मिलाएं।", te: "పెరుగులో బెర్రీలు కలపండి." }]
         },
         { id: "cm9", type: "dinner", title: { en: "Stir-fried Veggies", hi: "स्टिर-फ्राई सब्जियां", te: "కూరగాయల వేపుడు" }, calories: 200, prepTimeMinutes: 10, cookTimeMinutes: 10, tags: ["Light"], 
           ingredients: [
             { name: { en: "Bell Peppers", hi: "शिमला मिर्च", te: "క్యాప్సికం" }, qty: { en: "1", hi: "1", te: "1" } },
             { name: { en: "Zucchini", hi: "तोरई", te: "జుకినీ" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{en: "Quickly stir fry veggies in olive oil.", hi: "जैतून के तेल में सब्जियां भूनें।", te: "ఆలివ్ నూనెలో కూరగాయలు వేయించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-04",
      dayName: { en: "Thursday", hi: "गुरुवार", te: "గురువారం" },
      meals: [
         { id: "cm10", type: "breakfast", title: { en: "Yogurt Parfait", hi: "दही पैराफेट", te: "పెరుగు పార్ఫేట్" }, calories: 280, prepTimeMinutes: 5, cookTimeMinutes: 0, tags: ["Probiotic"], 
           ingredients: [
             { name: { en: "Greek Yogurt", hi: "ग्रीक योगर्ट", te: "గ్రీక్ పెరుగు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Granola", hi: "ग्रेनोला", te: "గ్రానోలా" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
           ],
           steps: [{en: "Layer yogurt and granola.", hi: "दही और ग्रेनोला की परत लगाएं।", te: "పెరుగు, గ్రానోలా పొరలుగా వేయండి."}] 
         },
         { id: "cm11", type: "lunch", title: { en: "Chickpea Salad", hi: "चना सलाद", te: "శనగల సలాడ్" }, calories: 350, prepTimeMinutes: 10, cookTimeMinutes: 0, tags: ["Raw"], 
           ingredients: [
             { name: { en: "Boiled Chickpeas", hi: "उबले छोले", te: "ఉడికించిన శనగలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Cucumber", hi: "खीरा", te: "కీరదోస" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{en: "Mix chickpeas, cucumber, dressing.", hi: "चना, खीरा, ड्रेसिंग मिलाएं।", te: "శనగలు, కీరదోస, డ్రెస్సింగ్ కలపండి."}] 
         },
         { id: "cm4_s", type: "snack",
           title: { en: "Almonds", hi: "बादाम", te: "బాదం" },
           calories: 160,
           prepTimeMinutes: 1, cookTimeMinutes: 0, tags: ["Healthy Fats"],
           ingredients: [
             { name: { en: "Almonds", hi: "बादाम", te: "బాదం" }, qty: { en: "10-12", hi: "10-12", te: "10-12" } }
           ],
           steps: [{ en: "Eat raw or soaked almonds.", hi: "कच्चे या भीगे हुए बादाम खाएं।", te: "పచ్చి లేదా నానబెట్టిన బాదం తినండి." }]
         },
         { id: "cm12", type: "dinner", title: { en: "Minestrone Soup", hi: "मिनस्ट्रोन सूप", te: "మినెస్ట్రోన్ సూప్" }, calories: 250, prepTimeMinutes: 15, cookTimeMinutes: 20, tags: ["Veggie Packed"], 
           ingredients: [
             { name: { en: "Mixed Beans", hi: "मिश्रित फलियां", te: "మిశ్రమ బీన్స్" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Pasta", hi: "पास्ता", te: "పాస్తా" }, qty: { en: "1/4 cup", hi: "1/4 कप", te: "1/4 కప్పు" } }
           ],
           steps: [{en: "Cook veggies, beans, pasta in broth.", hi: "शोरबा में सब्जियां, फलियां, पास्ता पकाएं।", te: "బ్రాత్‌లో కూరగాయలు, బీన్స్, పాస్తా ఉడికించండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-05",
      dayName: { en: "Friday", hi: "शुक्रवार", te: "శుక్రవారం" },
      meals: [
         { id: "cm13", type: "breakfast", title: { en: "Avocado Toast", hi: "एवोकाडो टोस्ट", te: "అవకాడో టోస్ట్" }, calories: 320, prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Healthy Fats"], 
           ingredients: [
             { name: { en: "Avocado", hi: "एवोकाडो", te: "అవకాడో" }, qty: { en: "1/2", hi: "1/2", te: "1/2" } },
             { name: { en: "Whole Wheat Toast", hi: "टोस्ट", te: "టోస్ట్" }, qty: { en: "1 slice", hi: "1 टुकड़ा", te: "1 ముక్క" } }
           ],
           steps: [{en: "Mash avocado on toast.", hi: "टोस्ट पर एवोकाडो मैश करें।", te: "టోస్ట్‌పై అవకాడో మాష్ చేయండి."}] 
         },
         { id: "cm14", type: "lunch", title: { en: "Grilled Fish", hi: "ग्रिल्ड फिश", te: "గ్రిల్డ్ ఫిష్" }, calories: 380, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Omega-3"],
           isNonVeg: true,
           vegAlternative: {
             id: "cm14_veg", type: "lunch",
             title: { en: "Grilled Paneer Steaks", hi: "ग्रिल्ड पनीर स्टिक्स", te: "గ్రిల్డ్ పనీర్ స్టీక్స్" },
             calories: 400,
             prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Protein", "Vegetarian"],
             ingredients: [
               { name: { en: "Paneer", hi: "पनीर", te: "పనీర్" }, qty: { en: "150g", hi: "150g", te: "150g" } },
               { name: { en: "Asparagus", hi: "शतावरी", te: "ఆస్పరాగస్" }, qty: { en: "5 spears", hi: "5", te: "5" } }
             ],
             steps: [{ en: "Marinate paneer and grill with asparagus.", hi: "पनीर को मैरीनेट करें और शतावरी के साथ ग्रिल करें।", te: "పనీర్‌ను మసాలా పట్టించి ఆస్పరాగస్‌తో గ్రిల్ చేయండి." }]
           },
           ingredients: [
             { name: { en: "Fish Fillet", hi: "मछली", te: "చేప ముక్క" }, qty: { en: "150g", hi: "150g", te: "150గ్రా" } },
             { name: { en: "Asparagus", hi: "शतावरी", te: "ఆస్పరాగస్" }, qty: { en: "5 spears", hi: "5", te: "5" } }
           ],
           steps: [{en: "Grill fish and asparagus.", hi: "मछली और शतावरी ग्रिल करें।", te: "చేప, ఆస్పరాగస్ గ్రిల్ చేయండి."}] 
         },
         { id: "cm5_s", type: "snack",
           title: { en: "Pear Slices", hi: "नाशपाती", te: "పియర్స్ ముక్కలు" },
           calories: 80,
           prepTimeMinutes: 2, cookTimeMinutes: 0, tags: ["Fiber", "Sweet"],
           ingredients: [
             { name: { en: "Pear", hi: "नाशपाती", te: "పియర్స్" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{ en: "Wash, slice and enjoy.", hi: "धोएं, काटें और आनंद लें।", te: "కడిగి, ముక్కలు చేసి తినండి." }]
         },
         { id: "cm15", type: "dinner", title: { en: "Zucchini Noodles", hi: "ज़ुचिनी नूडल्स", te: "జుకినీ నూడుల్స్" }, calories: 200, prepTimeMinutes: 10, cookTimeMinutes: 10, tags: ["Low Carb"], 
           ingredients: [
             { name: { en: "Zucchini", hi: "ज़ुचिनी", te: "జుకినీ" }, qty: { en: "2", hi: "2", te: "2" } },
             { name: { en: "Tomato Sauce", hi: "टमाटर सॉस", te: "టమోటా సాస్" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } }
           ],
           steps: [{en: "Spiralize zucchini. Toss in sauce.", hi: "ज़ुचिनी को नूडल्स बनाएं। सॉस में मिलाएं।", te: "జుకినీని నూడుల్స్‌లా చేసి సాస్‌లో కలపండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-06",
      dayName: { en: "Saturday", hi: "शनिवार", te: "శనివారం" },
      meals: [
         { id: "cm16", type: "breakfast", title: { en: "Oat Pancakes", hi: "ओट्स पैनकेक", te: "ఓట్స్ పాన్‌కేక్స్" }, calories: 300, prepTimeMinutes: 10, cookTimeMinutes: 10, tags: ["Treat"], 
           ingredients: [
             { name: { en: "Oat Flour", hi: "ओट्स का आटा", te: "ఓట్స్ పిండి" }, qty: { en: "1/2 cup", hi: "1/2 कप", te: "1/2 కప్పు" } },
             { name: { en: "Banana", hi: "केला", te: "అరటిపండు" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{en: "Mash banana, mix flour, cook.", hi: "केला मैश करें, आटा मिलाएं, पकाएं।", te: "అరటిపండు మాష్ చేసి, పిండి కలిపి కాల్చండి."}] 
         },
         { id: "cm17", type: "lunch", title: { en: "Veggie Wrap", hi: "वेजी रैप", te: "వెజ్జీ రాప్" }, calories: 350, prepTimeMinutes: 10, cookTimeMinutes: 0, tags: ["Portable"], 
           ingredients: [
             { name: { en: "Tortilla", hi: "टॉर्टिला", te: "టార్టిల్లా" }, qty: { en: "1", hi: "1", te: "1" } },
             { name: { en: "Hummus", hi: "हम्मस", te: "హమ్మస్" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
           ],
           steps: [{en: "Spread hummus and veggies. Roll.", hi: "हम्मस और सब्जियां फैलाएं। रोल करें।", te: "హమ్మస్, కూరగాయలు వేసి రోల్ చేయండి."}] 
         },
         { id: "cm6_s", type: "snack",
           title: { en: "Herbal Tea", hi: "हर्बल चाय", te: "హెర్బల్ టీ" },
           calories: 5,
           prepTimeMinutes: 5, cookTimeMinutes: 5, tags: ["Calming"],
           ingredients: [
             { name: { en: "Herbal Tea Bag", hi: "हर्बल टी बैग", te: "హెర్బల్ టీ బ్యాగ్" }, qty: { en: "1", hi: "1", te: "1" } }
           ],
           steps: [{ en: "Brew tea. Relax.", hi: "चाय बनाएं। आराम करें।", te: "టీ తయారు చేసుకుని తాగండి." }]
         },
         { id: "cm18", type: "dinner", title: { en: "Cauliflower Soup", hi: "गोभी का सूप", te: "కాలీఫ్లవర్ సూప్" }, calories: 180, prepTimeMinutes: 10, cookTimeMinutes: 20, tags: ["Creamy"], 
           ingredients: [
             { name: { en: "Cauliflower", hi: "गोभी", te: "కాలీఫ్లవర్" }, qty: { en: "1/2 head", hi: "1/2 फूल", te: "1/2 పువ్వు" } },
             { name: { en: "Almond Milk", hi: "बादाम का दूध", te: "బాదం పాలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Boil cauliflower, blend with milk.", hi: "गोभी उबालें, दूध के साथ ब्लेंड करें।", te: "కాలీఫ్లవర్ ఉడికించి, పాలతో బ్లెండ్ చేయండి."}] 
         }
      ],
      prepTimeline: []
    },
    {
      date: "2024-01-07",
      dayName: { en: "Sunday", hi: "रविवार", te: "ఆదివారం" },
      meals: [
         { id: "cm19", type: "breakfast", title: { en: "Smoothie Bowl", hi: "स्मूथी बाउल", te: "స్మూతీ బౌల్" }, calories: 250, prepTimeMinutes: 10, cookTimeMinutes: 0, tags: ["Fresh"], 
           ingredients: [
             { name: { en: "Mixed Fruits", hi: "मिश्रित फल", te: "మిశ్రమ పండ్లు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Seeds", hi: "बीज", te: "గింజలు" }, qty: { en: "1 tbsp", hi: "1 चम्मच", te: "1 చెంచా" } }
           ],
           steps: [{en: "Blend frozen fruit. Top with seeds.", hi: "जमे हुए फल ब्लेंड करें। ऊपर बीज डालें।", te: "ఫ్రోజెన్ పండ్లు బ్లెండ్ చేసి గింజలు వేయండి."}] 
         },
         { id: "cm20", type: "lunch", title: { en: "Pasta Primavera", hi: "पास्ता प्रिमावेरा", te: "పాస్తా ప్రిమవేరా" }, calories: 380, prepTimeMinutes: 10, cookTimeMinutes: 15, tags: ["Comfort"], 
           ingredients: [
             { name: { en: "Whole Wheat Pasta", hi: "पास्ता", te: "పాస్తా" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } },
             { name: { en: "Veggies", hi: "सब्जियाँ", te: "కూరగాయలు" }, qty: { en: "1 cup", hi: "1 कप", te: "1 కప్పు" } }
           ],
           steps: [{en: "Toss pasta with sautéed veggies.", hi: "भुनी हुई सब्जियों के साथ पास्ता मिलाएं।", te: "వేయించిన కూరగాయలతో పాస్తా కలపండి."}] 
         },
         { id: "cm7_s", type: "snack",
           title: { en: "Mixed Seeds", hi: "मिश्रित बीज", te: "మిశ్రమ గింజలు" },
           calories: 160,
           prepTimeMinutes: 1, cookTimeMinutes: 0, tags: ["Zinc", "Omega-3"],
           ingredients: [
             { name: { en: "Pumpkin/Sunflower Seeds", hi: "कद्दू/सूरजमुखी के बीज", te: "గుమ్మడి/పొద్దుతిరుగుడు గింజలు" }, qty: { en: "1 tbsp", hi: "1 चम्मच", te: "1 చెంచా" } }
           ],
           steps: [{ en: "Snack on raw seeds.", hi: "कच्चे बीज खाएं।", te: "పచ్చి గింజలు తినండి." }]
         },
         { id: "cm21", type: "dinner", title: { en: "Big Salad", hi: "बड़ा सलाद", te: "పెద్ద సలాడ్" }, calories: 220, prepTimeMinutes: 15, cookTimeMinutes: 0, tags: ["Raw"], 
           ingredients: [
             { name: { en: "Greens", hi: "साग", te: "ఆకుకూరలు" }, qty: { en: "3 cups", hi: "3 कप", te: "3 కప్పులు" } },
             { name: { en: "Nuts", hi: "मेवे", te: "నట్స్" }, qty: { en: "2 tbsp", hi: "2 चम्मच", te: "2 చెంచాలు" } }
           ],
           steps: [{en: "Mix greens, veggies, nuts, dressing.", hi: "साग, सब्जियां, मेवे, ड्रेसिंग मिलाएं।", te: "ఆకుకూరలు, కూరగాయలు, నట్స్, డ్రెస్సింగ్ కలపండి."}] 
         }
      ],
      prepTimeline: []
    }
  ]
};

export const PLANS: Record<DietType, WeeklyPlan> = {
  north_indian: NORTH_INDIAN_PLAN,
  south_indian: SOUTH_INDIAN_PLAN,
  continental: CONTINENTAL_PLAN,
};