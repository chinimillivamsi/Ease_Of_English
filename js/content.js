// Daily content database — 10 topics rotate by day of year
const CONTENT_DATA = {
  topics: [
    {
      id: 0,
      title: "Artificial Intelligence",
      icon: "🤖",
      category: "Technology",
      passages: {
        beginner: "Artificial Intelligence, or AI, is a type of computer technology. AI helps computers learn and make decisions like humans. We use AI every day. Our phones use AI to recognize our faces. Voice assistants like Siri and Alexa use AI to answer our questions. AI also helps doctors find diseases early. AI is changing our world in many exciting ways.",
        intermediate: "Artificial Intelligence has become an important part of our daily lives. AI is a technology that allows computers to think and learn from experience. It can analyze large amounts of data quickly and make accurate predictions. Today, AI is used in many fields. In medicine, AI helps doctors diagnose diseases more accurately. In education, AI creates personalized learning experiences for students. In business, AI helps companies understand their customers better. Self-driving cars use AI to navigate roads safely. However, AI also raises important questions. Some people worry that AI might replace human jobs. Others are concerned about privacy and data security. Despite these challenges, AI continues to grow rapidly. Experts believe that AI will create new types of jobs in the future. Learning about AI is important for everyone in today's digital world.",
        advanced: "The rapid advancement of artificial intelligence is reshaping industries, economies, and the very fabric of human society. Unlike traditional software that follows explicit instructions, modern AI systems learn from vast datasets, identify complex patterns, and make increasingly sophisticated decisions with minimal human intervention. This capability, known as machine learning, has produced remarkable breakthroughs in fields ranging from genomics to climate modeling. In healthcare, AI algorithms can now detect cancers in medical images with accuracy that rivals experienced radiologists. In finance, AI-powered systems execute millions of trades per second, analyzing market conditions in real-time. However, this technological revolution is not without profound challenges. The concentration of AI capabilities in the hands of a few powerful corporations raises concerns about economic inequality. Algorithmic bias, where AI systems perpetuate existing social prejudices, poses serious threats to fairness and justice. The potential displacement of workers across multiple sectors demands urgent attention to retraining and social safety nets. As AI continues to evolve toward more general intelligence, philosophers, ethicists, and policymakers must grapple with fundamental questions about consciousness, autonomy, and what it means to be human in an age of intelligent machines."
      },
      vocabulary: [
        { word: "Innovate", pronunciation: "in-oh-VAYT", partOfSpeech: "verb", meaning: "To create new and better ideas, methods, or products.", example: "Engineers constantly innovate to make smartphones faster and smarter.", tip: "Think: 'nova' means new in Latin — to innovate is to make something new." },
        { word: "Algorithm", pronunciation: "AL-go-ri-thum", partOfSpeech: "noun", meaning: "A set of step-by-step instructions a computer follows to solve a problem or complete a task.", example: "The search engine uses an algorithm to find the most relevant websites for you.", tip: "Like a recipe — it tells the computer exactly what steps to follow." }
      ],
      writing: {
        beginner: "Write 3 sentences about how you use technology every day. Start with: 'I use technology when...'",
        intermediate: "Write a short paragraph (5–7 sentences) about one way AI has changed our daily lives. Give a real-life example you have seen or experienced.",
        advanced: "Write a 2–3 paragraph essay discussing both the benefits and the ethical challenges of artificial intelligence in modern society. Use specific examples."
      },
      speaking: {
        beginner: "Say 3 things that AI or computers can do. Use simple sentences like: 'AI can...'",
        intermediate: "Talk for 1 minute about how technology has changed education or healthcare. Give at least 2 examples.",
        advanced: "Give a 2-minute speech on whether artificial intelligence will create more jobs or destroy jobs in the future. Support your position with reasons."
      },
      quiz: [
        { question: "What does 'AI' stand for?", options: ["Automated Information", "Artificial Intelligence", "Advanced Internet", "Automatic Integration"], answer: 1, explanation: "AI stands for Artificial Intelligence — technology that allows computers to think and learn like humans." },
        { question: "Which device commonly uses AI to answer questions by voice?", options: ["A television", "A radio", "A voice assistant like Alexa", "A calculator"], answer: 2, explanation: "Voice assistants like Alexa and Siri use AI to understand speech and answer questions." },
        { question: "What is an 'algorithm'?", options: ["A type of robot", "A computer programming language", "A step-by-step set of instructions for solving a problem", "A social media platform"], answer: 2, explanation: "An algorithm is a precise set of steps a computer follows to solve a problem — like a recipe for the computer." },
        { question: "How does AI help in medicine?", options: ["It replaces all doctors", "It helps diagnose diseases more accurately", "It only writes prescriptions", "It performs surgeries completely alone"], answer: 1, explanation: "AI helps doctors by analyzing medical images and data to diagnose diseases more accurately and at earlier stages." },
        { question: "What is 'machine learning'?", options: ["Teaching machines to walk", "When humans learn from computers", "When computers learn patterns from large amounts of data", "Building new machines from scratch"], answer: 2, explanation: "Machine learning is a type of AI where computers learn to make predictions by finding patterns in large datasets." }
      ]
    },
    {
      id: 1,
      title: "Cricket & Sports",
      icon: "🏏",
      category: "Sports",
      passages: {
        beginner: "Cricket is a very popular sport in India. Two teams play against each other. Each team has eleven players. One team bats and tries to score runs. The other team bowls and tries to get the batsmen out. The team with the most runs wins the match. Cricket matches can last one day or several days. The Indian cricket team is world-famous. Millions of people watch cricket every year.",
        intermediate: "Cricket is more than just a sport in India — it is a passion that unites millions of people across the country. The Indian Premier League, or IPL, is one of the most exciting cricket tournaments in the world. Teams from different cities compete for the championship title over several weeks. The IPL features some of the best players from India and around the world. Cricket requires skill, strategy, and physical fitness. Batsmen need quick reflexes and good timing to score runs. Bowlers must have strength, accuracy, and clever tactics to dismiss batsmen. Fielders must be agile and alert to catch the ball or stop boundaries. Beyond physical ability, cricket teaches teamwork, discipline, and the importance of never giving up, even when your team is in a difficult position. These life lessons make cricket much more than just a game.",
        advanced: "Cricket occupies a unique position in Indian culture, transcending the boundaries of sport to become a shared national identity that crosses linguistic, regional, and socioeconomic divides. The sport's history in India stretches back to the colonial era, but it was through legendary figures like Sunil Gavaskar, Kapil Dev, and Sachin Tendulkar that cricket achieved its quasi-religious status in the national consciousness. The modern era of cricket has been transformed by the Twenty20 format and the Indian Premier League. The IPL, launched in 2008, revolutionized cricket globally by combining sport with entertainment, creating a franchise model that generates billions in revenue and provides global exposure to domestic talent. However, this commercialization also raises important questions. Critics argue that the relentless schedule of Twenty20 cricket devalues Test cricket, the traditional five-day format considered by purists to be the ultimate test of a player's character and skill. The financial disparities between IPL-contracted and non-contracted players have created new inequalities within the sport. At its best, cricket embodies values that transcend competition: grace under pressure, respect for opponents, and the understanding that how one plays the game matters as much as the final score."
      },
      vocabulary: [
        { word: "Tournament", pronunciation: "TUR-nuh-ment", partOfSpeech: "noun", meaning: "A competition where many teams or players play against each other to find the best one.", example: "The school organized a cricket tournament, and our team reached the final.", tip: "Remember: a tournament has many matches before one champion is decided." },
        { word: "Perseverance", pronunciation: "pur-suh-VEER-unss", partOfSpeech: "noun", meaning: "Continuing to try hard and not giving up, even when things are difficult.", example: "Despite losing the first two matches, the team showed great perseverance and won the final.", tip: "Per + severe + ance — 'persevere' means to keep going through difficulties." }
      ],
      writing: {
        beginner: "Write 3 sentences about your favorite sport or game. Say what it is, how it is played, and why you like it.",
        intermediate: "Write a paragraph about why sports are important for children's physical and mental development. Give at least 2 reasons.",
        advanced: "Write an essay discussing whether professional athletes are paid too much compared to essential workers like teachers and doctors. Argue for or against."
      },
      speaking: {
        beginner: "Name your favorite sport and tell us 2 things about how it is played.",
        intermediate: "Talk for 1 minute about a famous sports player you admire. Describe what they achieved and why they inspire you.",
        advanced: "Discuss for 2 minutes whether sports teach important life lessons and values. Give specific examples from cricket or other sports."
      },
      quiz: [
        { question: "How many players are there in one cricket team?", options: ["9", "10", "11", "12"], answer: 2, explanation: "A cricket team has exactly 11 players — 11 bat and 11 field at different times during the match." },
        { question: "What does 'IPL' stand for?", options: ["Indian Premier League", "International Playing League", "Indian Professional League", "International Premier League"], answer: 0, explanation: "IPL stands for Indian Premier League — the hugely popular Twenty20 cricket league started in 2008." },
        { question: "Which role does NOT exist in cricket?", options: ["Batsman", "Bowler", "Goalkeeper", "Fielder"], answer: 2, explanation: "Goalkeeper is a football (soccer) position. In cricket, the relevant fielding roles include wicketkeeper, slip fielder, and others." },
        { question: "What does 'perseverance' mean?", options: ["Scoring quickly", "Playing very aggressively", "Continuing to try despite difficulties", "Winning every match"], answer: 2, explanation: "Perseverance means continuing to work hard and not giving up even when facing obstacles or challenges." },
        { question: "What is Test cricket?", options: ["A practice match", "A 20-over format game", "The traditional five-day format of cricket", "A junior cricket competition"], answer: 2, explanation: "Test cricket is the oldest and traditional form of cricket, played over up to five days, considered the ultimate test of a player's ability." }
      ]
    },
    {
      id: 2,
      title: "Climate Change",
      icon: "🌍",
      category: "Environment",
      passages: {
        beginner: "Our planet Earth is getting warmer. This is called climate change. It happens because of pollution and cutting too many trees. When we burn petrol and gas, harmful gases go into the air. These gases trap the sun's heat on Earth. This makes temperatures rise. Climate change causes problems like floods, droughts, and stronger storms. We can help by planting trees, using less electricity, and recycling. Every small action helps protect our Earth.",
        intermediate: "Climate change is one of the most serious challenges facing humanity today. It refers to long-term shifts in global temperatures and weather patterns, primarily caused by human activities. Since the Industrial Revolution, the burning of fossil fuels like coal, oil, and natural gas has released enormous amounts of carbon dioxide into the atmosphere. These gases trap heat from the sun, causing Earth's temperature to rise — a phenomenon known as the greenhouse effect. The consequences are already visible worldwide. Glaciers are melting, sea levels are rising, and extreme weather events like hurricanes, droughts, and wildfires are becoming more frequent and intense. However, there is still hope. Renewable energy sources like solar and wind power are becoming cheaper and more widespread. Many countries are committing to reducing their carbon emissions and transitioning to cleaner energy. Individual actions also matter: using public transport, reducing meat consumption, and planting trees all make a difference.",
        advanced: "The science of climate change presents an irrefutable consensus among the global scientific community: anthropogenic greenhouse gas emissions are fundamentally altering Earth's climate system with consequences that will persist for millennia. The Intergovernmental Panel on Climate Change has documented an accelerating trajectory of warming, with the past decade recording the highest global average temperatures since measurement began. The impacts extend far beyond temperature increases. Ocean acidification, resulting from increased CO₂ absorption, threatens the marine food chains upon which billions of people depend for nutrition and livelihoods. The accelerating loss of Arctic sea ice disrupts weather patterns across the Northern Hemisphere, contributing to erratic extreme weather events in regions once considered climatically stable. Meanwhile, the displacement of populations due to sea-level rise, agricultural failures, and resource conflicts is projected to generate unprecedented waves of climate refugees. The political economy of climate action reveals the fundamental tension between short-term economic interests and long-term civilizational survival. Fossil fuel industries, backed by powerful lobbying networks, have systematically undermined climate policy for decades. Yet the economics of renewable energy have undergone a dramatic transformation, with solar and wind power now cheaper than new coal in most markets. The challenge is no longer primarily technological but political: mustering the collective will to transition away from entrenched fossil fuel systems at the speed necessary to avoid catastrophic tipping points."
      },
      vocabulary: [
        { word: "Sustainable", pronunciation: "suh-STAYN-uh-bul", partOfSpeech: "adjective", meaning: "Done in a way that can continue without harming the environment or using up natural resources.", example: "The city installed sustainable energy solutions like solar panels on every government building.", tip: "If something is sustainable, it can be 'sustained' — kept going — without causing long-term damage." },
        { word: "Ecosystem", pronunciation: "EE-koh-sis-tum", partOfSpeech: "noun", meaning: "A community of living things — plants, animals, and microorganisms — that interact with each other and their environment.", example: "Deforestation destroys the forest ecosystem, affecting thousands of species that depend on it.", tip: "Eco = environment; system = a connected network. An ecosystem is nature's interconnected network." }
      ],
      writing: {
        beginner: "Write 3 things that you or your family can do to help protect the environment. Start each sentence with 'We can...'",
        intermediate: "Write a paragraph about the effects of climate change on your local community or region. What changes have you noticed?",
        advanced: "Write a 2–3 paragraph essay arguing for or against a carbon tax as a government solution to climate change. Provide evidence for your position."
      },
      speaking: {
        beginner: "Name two ways you can help the environment at home. Explain each one in a simple sentence.",
        intermediate: "Talk for 1 minute about what your city, state, or country is doing to address climate change.",
        advanced: "Present a 2-minute argument: do individuals or governments bear more responsibility for fighting climate change? Defend your view."
      },
      quiz: [
        { question: "What is the main human cause of climate change?", options: ["Natural temperature cycles", "Burning of fossil fuels like coal and oil", "Volcanic eruptions", "Ocean currents shifting"], answer: 1, explanation: "The burning of fossil fuels (coal, oil, natural gas) releases CO₂ and other greenhouse gases, which is the primary driver of human-caused climate change." },
        { question: "What does 'sustainable' mean?", options: ["Very expensive or luxurious", "Done very quickly for results", "Not harmful to the environment long-term", "Natural and completely organic"], answer: 2, explanation: "Sustainable means doing things in a way that can continue without damaging natural resources or the environment for future generations." },
        { question: "What is the 'greenhouse effect'?", options: ["Growing plants in glass houses", "When atmospheric gases trap heat and warm the Earth", "A type of organic farming technique", "Cooling of the Earth's poles"], answer: 1, explanation: "The greenhouse effect occurs when gases like CO₂ in the atmosphere trap the sun's heat, similar to how a greenhouse keeps plants warm." },
        { question: "Which energy source is considered renewable and clean?", options: ["Coal", "Natural gas", "Nuclear power", "Solar power"], answer: 3, explanation: "Solar power harnesses energy from sunlight, a renewable resource, and produces no greenhouse gas emissions during operation." },
        { question: "What happens to glaciers due to rising global temperatures?", options: ["They grow bigger", "They stay the same size", "They melt and shrink", "They move to warmer regions"], answer: 2, explanation: "Rising temperatures cause glaciers to melt, contributing to sea-level rise and threatening freshwater supplies for millions of people." }
      ]
    },
    {
      id: 3,
      title: "Health & Wellness",
      icon: "💪",
      category: "Health",
      passages: {
        beginner: "Being healthy is very important. We need to eat good food and drink lots of water. Fruits and vegetables keep our body strong. Exercise helps our muscles and heart stay healthy. We should sleep for at least 8 hours every night. Washing our hands often helps prevent sickness. Staying healthy helps us feel happy and do well in school and work. Small healthy habits every day make a very big difference in our lives.",
        intermediate: "Good health is our most valuable asset, yet many people only appreciate it when they lose it. Maintaining good health requires attention to four key areas: diet, exercise, sleep, and mental wellbeing. A balanced diet should include plenty of fruits, vegetables, whole grains, and lean proteins, while limiting processed foods, added sugar, and unhealthy fats. Regular physical activity — even just 30 minutes of walking per day — significantly reduces the risk of heart disease, diabetes, and obesity. Sleep is often underestimated as a health factor. Adults need 7–9 hours of quality sleep each night for the body to repair itself and the brain to consolidate memories. Mental health is equally important. Stress, anxiety, and depression affect millions of people worldwide and can manifest as physical symptoms like headaches and fatigue. Simple practices like mindfulness meditation, spending time in nature, and maintaining social connections can significantly improve mental wellbeing. Remember: prevention is always better than cure.",
        advanced: "The modern understanding of health has evolved far beyond the mere absence of disease to encompass a holistic integration of physical, mental, social, and environmental dimensions of wellbeing. This expanded conception, formally articulated in the World Health Organization's foundational constitution, recognizes that human flourishing requires optimal functioning across all these interconnected domains. Contemporary research in lifestyle medicine has produced compelling evidence for the profound impact of behavioral choices on health outcomes. The chronic disease epidemic afflicting modern societies — cardiovascular disease, type 2 diabetes, metabolic syndrome, and certain cancers — is largely attributable to modifiable risk factors including diet quality, physical inactivity, tobacco use, and excessive alcohol consumption. The gut-brain axis represents one of the most fascinating frontiers in health science. Research increasingly demonstrates that the trillions of microorganisms comprising the gut microbiome profoundly influence not only digestive health but also immune function, mood regulation, and cognitive performance. Perhaps most importantly, health disparities reveal that individual lifestyle choices occur within structural contexts of socioeconomic inequality that profoundly shape access to nutritious food, safe environments for physical activity, healthcare access, and stress levels. Achieving population health thus requires not only individual behavior change but systemic interventions addressing the social determinants of health."
      },
      vocabulary: [
        { word: "Nutritious", pronunciation: "nyoo-TRISH-us", partOfSpeech: "adjective", meaning: "Describing food that is healthy and provides your body with the vitamins, minerals, and energy it needs.", example: "Doctors recommend eating nutritious meals with plenty of vegetables, fruits, and whole grains.", tip: "Nutritious comes from 'nutrition' — if it provides good nutrition, it's nutritious." },
        { word: "Immune", pronunciation: "ih-MYOON", partOfSpeech: "adjective", meaning: "Protected against a disease or infection, either naturally or through vaccination.", example: "After recovering from chickenpox as a child, she became immune to the virus.", tip: "Your immune system is your body's defense army against germs and diseases." }
      ],
      writing: {
        beginner: "Write 3 healthy habits that you practice every day. Explain why each one is good for you.",
        intermediate: "Write a paragraph about what you believe is the most important aspect of staying healthy — physical fitness, diet, sleep, or mental health. Explain your choice.",
        advanced: "Write an essay on how modern lifestyle habits (screen time, fast food, sedentary work) affect our health, and what changes individuals and governments should make."
      },
      speaking: {
        beginner: "Name two healthy foods and explain in simple words why each one is good for our body.",
        intermediate: "Talk for 1 minute about how you personally keep yourself physically and mentally healthy.",
        advanced: "Give a 2-minute speech on whether governments should implement policies to promote public health, such as taxing junk food or mandating physical education."
      },
      quiz: [
        { question: "How many hours of sleep do most adults need each night?", options: ["4–5 hours", "5–6 hours", "7–9 hours", "10–12 hours"], answer: 2, explanation: "Most adults need 7–9 hours of sleep per night. Quality sleep allows the body to repair itself and the brain to consolidate memories." },
        { question: "What does 'nutritious' describe?", options: ["Food that is very expensive", "Food that tastes delicious", "Food that provides health benefits and essential nutrients", "Food that is very easy to cook"], answer: 2, explanation: "Nutritious describes food that is healthy and rich in nutrients like vitamins, minerals, fiber, and protein that the body needs." },
        { question: "Which habit most helps maintain good physical health?", options: ["Watching TV for relaxation", "Eating only fast food occasionally", "Getting 30 minutes of exercise daily", "Sleeping as much as possible"], answer: 2, explanation: "Regular physical activity — even moderate exercise like walking for 30 minutes daily — significantly improves cardiovascular health and reduces disease risk." },
        { question: "What is mental health?", options: ["Having an excellent memory", "Our emotional, psychological, and social wellbeing", "Only the absence of mental illness", "Being highly intelligent"], answer: 1, explanation: "Mental health encompasses our emotional, psychological, and social wellbeing — it affects how we think, feel, and interact with others." },
        { question: "What does 'prevention is better than cure' mean?", options: ["Medical treatment is more effective than prevention", "Medicines are too expensive", "It is easier and better to prevent illness than to treat it later", "Doctors prefer preventive medicine"], answer: 2, explanation: "This famous saying means that taking steps to prevent disease — through diet, exercise, and regular check-ups — is more effective and less costly than treating illness." }
      ]
    },
    {
      id: 4,
      title: "Food & Cooking",
      icon: "🍳",
      category: "Culture",
      passages: {
        beginner: "Food is something we all need to live. Different countries have different foods. Indian food has many spices and delicious flavors. Rice, dal, and vegetables are common foods in India. Cooking food at home is healthy and fun. Fruits and vegetables give us energy and vitamins. Eating together with family makes meals very special. Learning to cook simple dishes is a very useful skill for everyone, young and old.",
        intermediate: "Food is much more than nutrition — it is a window into culture, history, and human creativity. Every region of the world has developed its own unique cuisine, shaped by local ingredients, climate, trade routes, and cultural traditions. Indian cuisine is remarkable for its extraordinary diversity: the spicy curries of the south, the rich gravies of the north, the fresh seafood dishes of coastal regions, and the hearty bread-based meals of the northwest all represent distinct culinary traditions within a single country. Cooking techniques matter as much as ingredients. Slow cooking allows flavors to develop and meld together, while stir-frying preserves the crunch and color of vegetables. Fermentation, one of humanity's oldest food preservation methods, creates probiotics that benefit digestive health while adding complex flavors. The global food industry faces serious challenges today, including food waste — roughly one-third of all food produced worldwide is discarded before being eaten. Choosing local, seasonal produce and minimizing food waste are steps everyone can take to make their diet more sustainable.",
        advanced: "Food occupies a position of profound symbolic and cultural significance in human civilization, functioning simultaneously as sustenance, art form, social ritual, and identity marker. The culinary traditions of any society encode within them centuries of accumulated knowledge about local ecosystems, agricultural practices, preservation techniques, and the social relationships through which food is produced, distributed, and consumed. The globalization of food systems has generated a paradox of unprecedented variety and homogeneity. Consumers in urban centers worldwide can access cuisines from every corner of the globe, yet the industrial food system that makes this possible has displaced countless indigenous food traditions, created massive environmental externalities, and concentrated economic power in the hands of a small number of multinational corporations. The standardization of agricultural varieties in pursuit of yield and shelf-life has dramatically reduced global crop biodiversity, leaving food systems increasingly vulnerable to pathogens and climate disruptions. The emerging field of food science continues to transform our understanding of nutrition. Research into the gut microbiome has revealed that the diversity of plant-based foods in one's diet is a crucial determinant of health outcomes, challenging previous frameworks focused on isolated macronutrients. Meanwhile, cellular agriculture — the production of meat from cultivated cells rather than whole animals — represents a potential paradigm shift with enormous implications for land use, animal welfare, and greenhouse gas emissions."
      },
      vocabulary: [
        { word: "Cuisine", pronunciation: "kwi-ZEEN", partOfSpeech: "noun", meaning: "The style of cooking and typical foods of a particular country, region, or type of restaurant.", example: "She enrolled in a cooking class specializing in South Indian cuisine to learn traditional recipes.", tip: "Cuisine comes from the French word for 'kitchen.' Every region has its own kitchen traditions." },
        { word: "Savory", pronunciation: "SAY-vuh-ree", partOfSpeech: "adjective", meaning: "Having a strong, pleasant taste that is salty or spicy rather than sweet.", example: "He preferred savory snacks like samosas and namkeen over sweets.", tip: "If it's not sweet, it's probably savory. Think of all the salty, spicy, and umami flavors." }
      ],
      writing: {
        beginner: "Write 3 sentences about your favorite food. What is it called? What does it taste like? When do you eat it?",
        intermediate: "Write a paragraph describing how your favorite dish or meal is prepared. Include the ingredients and the steps of cooking.",
        advanced: "Write an essay on how food traditions and cuisines are changing in the modern world due to globalization and technology. What might be lost and what might be gained?"
      },
      speaking: {
        beginner: "Name your favorite dish. Describe how it looks, smells, and tastes using at least 3 describing words.",
        intermediate: "Talk for 1 minute about the food culture in your family or region. What dishes are special to you and why?",
        advanced: "Discuss the impact of fast food culture on traditional diets and public health. Is it possible to balance convenience with healthy eating?"
      },
      quiz: [
        { question: "What is 'cuisine'?", options: ["A type of kitchen appliance", "The style of cooking typical of a region or culture", "A cooking competition show", "A traditional Indian spice"], answer: 1, explanation: "Cuisine refers to the characteristic style of cooking and the typical foods associated with a particular country, region, or type of restaurant." },
        { question: "Which of the following is a key benefit of eating fruits and vegetables?", options: ["They are always sweet", "They are quick to prepare", "They provide vitamins, minerals, and fiber", "They replace the need for water"], answer: 2, explanation: "Fruits and vegetables are rich in vitamins, minerals, antioxidants, and dietary fiber — all essential for maintaining good health." },
        { question: "What is fermentation used for in food?", options: ["Making food sweeter", "Cooking food faster with heat", "Preserving food and creating beneficial probiotics", "Adding spicy flavor to food"], answer: 2, explanation: "Fermentation is one of humanity's oldest techniques. It preserves food, extends shelf life, and creates probiotics that benefit gut health. Examples: curd, idli, dosa batter." },
        { question: "What does 'savory' describe?", options: ["Something that tastes very sweet", "A dish with strong, salty or spicy flavor", "Food that is nutritious and healthy", "A type of dessert"], answer: 1, explanation: "Savory describes a flavor that is pleasant, strong, and salty or spicy — the opposite of sweet. Samosas, biryani, and chaat are savory dishes." },
        { question: "What is a major challenge facing the global food industry today?", options: ["Too many different cuisines to choose from", "Food waste — one-third of food is discarded globally", "Lack of spices for cooking", "Too many people becoming vegetarian"], answer: 1, explanation: "Approximately one-third of all food produced globally is wasted — either discarded before sale or thrown away by consumers. This represents enormous economic and environmental waste." }
      ]
    },
    {
      id: 5,
      title: "Movies & Entertainment",
      icon: "🎬",
      category: "Arts",
      passages: {
        beginner: "Movies are a very popular form of entertainment. We can watch movies at home or in a cinema hall. Movies tell stories with pictures and sound. Some movies make us laugh and some make us feel sad. Indian cinema, called Bollywood, is very famous all over the world. Movies teach us about different places, people, and cultures. Many people enjoy watching movies with their friends and family. Movies are a wonderful way to relax and have fun.",
        intermediate: "Indian cinema is a vast and vibrant industry that goes far beyond Bollywood. While Mumbai's Hindi film industry attracts global attention, regional film industries in Tamil, Telugu, Malayalam, Kannada, Bengali, and other languages produce thousands of films annually, many of which tell deeply compelling stories rooted in local cultures and traditions. In recent years, films like Baahubali, RRR, and Kantara have demonstrated that regional Indian cinema can achieve both massive commercial success and international acclaim. Streaming platforms like Netflix, Amazon Prime, and Disney+ Hotstar have transformed how audiences consume entertainment, making it possible to watch content from any country on demand. This has created exciting opportunities for Indian filmmakers to reach global audiences while also exposing Indian viewers to international stories and perspectives. Great films do more than entertain — they challenge our assumptions, expand our empathy, and start important conversations about society and justice.",
        advanced: "Cinema occupies a distinctive position among art forms as the medium that most completely synthesizes and amplifies the full range of human creative expression: literature, music, visual art, performance, and cutting-edge technology. This synthetic quality has made film the defining narrative medium of the twentieth and early twenty-first centuries, shaping collective consciousness, political discourse, and cultural identity across the globe. Indian cinema's relationship with national identity is particularly complex and illuminating. From the nationalist allegories of early Indian talkies to the social realism of parallel cinema in the 1970s, to the global spectacle of contemporary blockbusters, Indian films have both reflected and shaped the nation's self-understanding at each historical moment. The streaming revolution has disrupted the traditional studio system's gatekeeping function, enabling previously marginalized voices — regional, lower-budget, experimental — to reach audiences without the imprimatur of major distributors. Yet this democratization coexists with the unprecedented concentration of viewing data in the hands of a handful of platform corporations, which use sophisticated algorithms to shape content production in ways that prioritize engagement metrics over artistic ambition or social value. Developing film literacy — understanding formal elements like cinematography, editing, and sound design — transforms film from mere entertainment into a medium for profound understanding of human experience."
      },
      vocabulary: [
        { word: "Blockbuster", pronunciation: "BLOK-bus-ter", partOfSpeech: "noun", meaning: "A movie, book, or show that is extremely popular and commercially very successful.", example: "The superhero film was a blockbuster, earning over one billion dollars in its opening weekend.", tip: "Originally 'block buster' referred to a huge bomb in WWII. Now it means something with a huge, explosive impact on audiences." },
        { word: "Narrative", pronunciation: "NAIR-uh-tiv", partOfSpeech: "noun", meaning: "A spoken or written account of connected events; the story told in a film, book, or performance.", example: "The film's powerful narrative about family values resonated with audiences across the world.", tip: "The narrator tells the narrative. The narrative is simply: the story." }
      ],
      writing: {
        beginner: "Write 3 sentences about your favorite movie. What is it about? Who is in it? Why do you like it?",
        intermediate: "Write a paragraph about a movie or show that taught you something important. What was the lesson and how did it affect you?",
        advanced: "Write an essay analyzing how movies and television shows reflect and shape society's values. Use 2–3 specific examples from Indian or international cinema."
      },
      speaking: {
        beginner: "Describe one scene from your favorite movie. What happened? How did it make you feel?",
        intermediate: "Talk for 1 minute about whether violent or adult content in movies should be restricted. Give reasons for your view.",
        advanced: "Discuss whether streaming platforms like Netflix have improved or harmed the overall quality and diversity of entertainment. Argue your position."
      },
      quiz: [
        { question: "What is 'Bollywood'?", options: ["A film festival in New Delhi", "India's Hindi-language film industry based in Mumbai", "A type of traditional Indian dance", "An international streaming platform"], answer: 1, explanation: "Bollywood refers to India's Hindi-language film industry, centered in Mumbai (formerly Bombay). It is one of the world's largest film producers." },
        { question: "What does 'blockbuster' mean in the context of films?", options: ["A film that failed commercially", "A very popular and commercially successful film", "A documentary about city life", "An old classic film from the 1950s"], answer: 1, explanation: "A blockbuster is a hugely popular and commercially successful film, often with high budgets, big stars, and massive audiences." },
        { question: "Which of the following is a streaming platform for movies and shows?", options: ["Instagram", "Netflix", "Twitter", "Wikipedia"], answer: 1, explanation: "Netflix is a subscription-based streaming platform offering movies, TV shows, and original content. Others include Amazon Prime, Disney+ Hotstar, and ZEE5." },
        { question: "What is a 'narrative' in a film?", options: ["The camera techniques used", "The musical score of the film", "The story or account of events in the film", "The special visual effects"], answer: 2, explanation: "A narrative is the story — the sequence of connected events that the film tells. Every film has a narrative, whether simple or complex." },
        { question: "What significant change have streaming platforms brought to film viewing?", options: ["Made cinema halls bigger and better", "Allowed viewers to watch content from any country on demand", "Reduced the cost of making films", "Improved sound and picture quality in theatres"], answer: 1, explanation: "Streaming platforms have transformed entertainment by allowing viewers to watch films and shows from any country, at any time, on demand." }
      ]
    },
    {
      id: 6,
      title: "Space & Science",
      icon: "🚀",
      category: "Science",
      passages: {
        beginner: "Space is everything beyond our Earth. Our planet Earth moves around the Sun. The Moon moves around the Earth. There are eight planets in our solar system. Stars look small because they are very far away from us. Scientists use big telescopes to study space. Space missions have sent rockets and astronauts into space. India's space agency, ISRO, has sent rockets to the Moon and to Mars. Space is full of exciting mysteries waiting to be discovered.",
        intermediate: "Space exploration has been one of humanity's greatest achievements. Since the first satellite, Sputnik, was launched in 1957, humans have sent spacecraft to every planet in our solar system and established a permanent presence in space through the International Space Station. India's space program, led by the Indian Space Research Organisation (ISRO), has achieved remarkable milestones on a fraction of other agencies' budgets. The Mangalyaan mission successfully reached Mars in 2014 on its very first attempt, making India only the fourth country to achieve this feat. In 2023, the Chandrayaan-3 mission made India the first country to land near the lunar south pole, a region believed to contain water ice that could support future human missions. Space exploration is not just about national pride — it drives technological innovation that benefits everyday life. GPS navigation, weather forecasting, satellite communications, and medical imaging technologies all have their roots in space research.",
        advanced: "The contemporary era of space exploration represents a fundamental departure from the Cold War paradigm that drove the original space race. Where the Apollo program was primarily a geopolitical exercise in superpower rivalry, today's space activities are shaped by a complex interplay of national strategic interests, commercial ambitions, scientific discovery, and emergent considerations of resource extraction and long-term civilizational survival. ISRO's achievements are particularly instructive for understanding how institutional culture and engineering philosophy affect outcomes. The organization's legendary cost-efficiency — the Mangalyaan mission's price tag was famously lower than that of the Hollywood film Gravity — stems from a culture of frugality, indigenous development of critical technologies, and a willingness to accept calculated risks. This approach has made India a sought-after partner for satellite launches and established ISRO as proof that high-quality space science is achievable without unlimited budgets. The scientific discoveries enabled by space exploration have repeatedly revolutionized our understanding of the cosmos. The detection of exoplanets — planets orbiting stars other than our Sun — has progressed to a confirmed catalog of thousands of worlds, including candidates within habitable zones. The imaging of a black hole's event horizon and the detection of gravitational waves from merging neutron stars represent breakthroughs that were unimaginable a generation ago. The looming question of humanity's long-term future in space raises profound questions spanning engineering, ethics, politics, and philosophy."
      },
      vocabulary: [
        { word: "Orbit", pronunciation: "OR-bit", partOfSpeech: "noun / verb", meaning: "The curved path that a planet, moon, or spacecraft follows as it moves around a star, planet, or other body in space.", example: "The International Space Station completes one orbit around Earth approximately every 90 minutes.", tip: "Orbit can be both a noun (the path) and a verb (to travel in that path). The Earth orbits the Sun in one year." },
        { word: "Galaxy", pronunciation: "GAL-uk-see", partOfSpeech: "noun", meaning: "A huge system of billions of stars, gas, and dust held together by gravity. Our solar system is part of the Milky Way galaxy.", example: "Using the James Webb Space Telescope, scientists can observe galaxies that formed billions of years ago.", tip: "The word comes from Greek 'galaxias' meaning 'milky' — think of the Milky Way as our home galaxy." }
      ],
      writing: {
        beginner: "Write 3 sentences about what you find most exciting or interesting about space. What would you like to explore?",
        intermediate: "Write a paragraph about why space exploration is important for humanity. Give at least 2 specific benefits.",
        advanced: "Write an essay on the ethical and practical challenges of sending humans to Mars. Is it worth the cost and risk?"
      },
      speaking: {
        beginner: "Name two interesting facts you know about our solar system. Use complete sentences.",
        intermediate: "Talk for 1 minute about India's achievements in space exploration. Why are you proud or interested?",
        advanced: "Discuss for 2 minutes: Is it justified to spend billions of rupees on space exploration when there are so many problems on Earth like poverty and healthcare?"
      },
      quiz: [
        { question: "What is ISRO?", options: ["An international TV news channel", "India's space research and exploration organization", "A type of telescope used in India", "A planet in our solar system"], answer: 1, explanation: "ISRO stands for Indian Space Research Organisation — India's national space agency responsible for the Mangalyaan and Chandrayaan missions." },
        { question: "What is an 'orbit'?", options: ["A type of space station", "The curved path a planet follows around a star or planet", "A specialized rocket fuel", "The center of a galaxy"], answer: 1, explanation: "An orbit is the curved path that a planet, moon, or spacecraft follows as it travels around a larger celestial body due to gravity." },
        { question: "What historic achievement did Chandrayaan-3 accomplish in 2023?", options: ["It successfully orbited Mars", "It reached the surface of the Sun", "India became the first country to land near the lunar south pole", "It discovered a new planet in our solar system"], answer: 2, explanation: "Chandrayaan-3 made India the first country to successfully land a spacecraft near the Moon's south pole in August 2023 — a historic achievement for ISRO." },
        { question: "How many planets are in our solar system?", options: ["7", "9", "8", "10"], answer: 2, explanation: "Our solar system has 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a 'dwarf planet' in 2006." },
        { question: "What is a 'galaxy'?", options: ["A type of spacecraft", "A huge system of billions of stars held together by gravity", "A planet's ring system", "A type of meteor shower"], answer: 1, explanation: "A galaxy is a massive system containing billions of stars, along with gas, dust, and dark matter, all held together by gravity. Our home galaxy is the Milky Way." }
      ]
    },
    {
      id: 7,
      title: "Travel & Tourism",
      icon: "✈️",
      category: "Culture",
      passages: {
        beginner: "Travel means going to new places. People travel for holidays, work, and to learn new things. India has many beautiful places to visit. The Taj Mahal in Agra is very famous all over the world. Kerala has lovely backwaters and beautiful beaches. Rajasthan has magnificent old palaces and ancient forts. Mountains like the Himalayas are great for exciting adventures. When we travel, we meet new people and try delicious new foods. Travel teaches us about the wonderful world we live in.",
        intermediate: "Travel has the extraordinary power to transform our understanding of the world and ourselves. When we step outside our familiar surroundings and encounter different cultures, cuisines, languages, and ways of life, our perspectives broaden in ways that no book or classroom can fully replicate. India itself is a treasure trove for travelers. From the ancient temples of Tamil Nadu and the backwaters of Kerala to the mountain kingdoms of Ladakh and the colonial architecture of Kolkata, the country offers an astonishing diversity of experiences. Cultural tourism — visiting historical sites, attending traditional festivals, experiencing local arts and crafts — is increasingly recognized as an important way to preserve cultural heritage while supporting local economies. However, tourism also has a shadow side. Overtourism, where popular destinations become overwhelmed with visitors, can damage natural environments, price out local residents, and destroy the very character that makes a place special. Responsible travel means being mindful of our environmental impact and supporting local businesses.",
        advanced: "Tourism has emerged as one of the world's largest industries, representing approximately 10% of global GDP and directly employing over 300 million people. Yet beyond its economic dimensions, travel embodies some of humanity's deepest impulses: the desire for discovery, the search for the sublime, the impulse to encounter the genuinely unfamiliar, and the unconscious quest to understand one's own culture through the lens of others. The phenomenology of travel has been profoundly altered by digital technology. Navigation apps have eliminated the productive disorientation that historically forced travelers into authentic contact with local inhabitants. Review platforms have created a self-reinforcing system in which destinations are evaluated according to the expectations established by previous travelers' representations, progressively narrowing diversity toward a global standard of tourist-grade experience. Social media has transformed travel into performance, with itineraries organized around photogenic moments rather than genuine exploration. The growing field of heritage tourism raises complex questions about authenticity, commodification, and cultural ownership. When a UNESCO World Heritage Site becomes primarily a backdrop for international tourism rather than a living site of cultural practice, when indigenous ceremonies are staged for visitor consumption — these phenomena reveal contradictions inherent in attempting to commodify culture while preserving its authenticity. Sustainable tourism offers a framework for reconciling the genuine human value of travel with its environmental and social costs."
      },
      vocabulary: [
        { word: "Itinerary", pronunciation: "eye-TIN-er-air-ee", partOfSpeech: "noun", meaning: "A detailed plan or schedule for a journey, listing the places to visit, travel routes, and timing.", example: "Our travel agent prepared a comprehensive itinerary for our two-week tour of Rajasthan.", tip: "An itinerary is your travel plan written down — where you go, when, and how. Think of it as a journey's schedule." },
        { word: "Heritage", pronunciation: "HAIR-it-ij", partOfSpeech: "noun", meaning: "Things that are passed down from previous generations — buildings, traditions, art, and cultural practices that have historical importance.", example: "The Ajanta Caves are a UNESCO World Heritage Site, representing India's rich artistic and Buddhist heritage.", tip: "Heritage = what we 'inherit' from the past. It is what previous generations have left behind for us to preserve." }
      ],
      writing: {
        beginner: "Write 3 sentences about a place in India that you would like to visit. Where is it? What can you see or do there?",
        intermediate: "Write a paragraph about a memorable journey or travel experience you have had. What did you see, experience, and learn?",
        advanced: "Write an essay discussing the positive and negative impacts of tourism on local communities and natural environments. What makes tourism sustainable?"
      },
      speaking: {
        beginner: "Describe your favorite place you have visited or would love to visit. Use at least 3 descriptive words.",
        intermediate: "Talk for 1 minute about why you think travel is important for personal growth and understanding the world.",
        advanced: "Discuss the ethical responsibilities of tourists when visiting developing countries or ecologically fragile environments. What should responsible travelers do?"
      },
      quiz: [
        { question: "Where is the Taj Mahal located?", options: ["Jaipur, Rajasthan", "Mumbai, Maharashtra", "Agra, Uttar Pradesh", "New Delhi"], answer: 2, explanation: "The Taj Mahal is located in Agra, Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal." },
        { question: "What is an 'itinerary'?", options: ["A type of travel insurance", "A detailed plan listing places and timings for a journey", "A passport document required for travel", "A guidebook for tourists"], answer: 1, explanation: "An itinerary is a planned schedule for a trip — it includes destinations, travel routes, accommodation, and the timing of activities." },
        { question: "What is 'overtourism'?", options: ["Traveling to too many countries", "When a destination becomes overwhelmed by too many visitors", "A type of adventure tourism", "International group travel packages"], answer: 1, explanation: "Overtourism occurs when an excessive number of tourists visit a destination, damaging its environment, overwhelming infrastructure, and diminishing quality of life for residents." },
        { question: "What does 'heritage' refer to in the context of tourism?", options: ["Modern architectural buildings", "Recently created cultural traditions", "Historical buildings, art, and cultural practices passed down from the past", "Popular adventure tourism activities"], answer: 2, explanation: "Heritage refers to the things we inherit from past generations — historical monuments, traditional practices, art forms, and cultural customs that are important to preserve." },
        { question: "What does 'responsible travel' involve?", options: ["Visiting as many countries as possible", "Staying only in luxury 5-star hotels", "Respecting local customs and supporting local businesses", "Taking the cheapest travel options available"], answer: 2, explanation: "Responsible travel means minimizing environmental impact, respecting local cultures and communities, supporting local economies, and being a thoughtful and considerate visitor." }
      ]
    },
    {
      id: 8,
      title: "Education & Learning",
      icon: "📚",
      category: "Education",
      passages: {
        beginner: "Education helps us learn new things every day. We go to school to learn reading, writing, and mathematics. Good teachers help us understand difficult topics. Education helps us get good jobs in the future. We can also learn from books, videos, and the internet. Learning English helps us talk to people from many different countries. Education is important for everyone — boys and girls, rich and poor. Learning never stops — we can keep learning throughout our whole life.",
        intermediate: "Education is widely recognized as the most powerful tool for individual and social transformation. Access to quality education determines not only economic outcomes but also health, civic participation, and the capacity to live a fulfilling life. In India, the Right to Education Act of 2009 made free and compulsory education a fundamental right for children between 6 and 14 years of age — a landmark achievement. Technology is reshaping education in profound ways. During the COVID-19 pandemic, schools worldwide rapidly transitioned to online learning, revealing both the possibilities and the deep inequalities in digital access. E-learning platforms, YouTube tutorials, and apps like Khan Academy have democratized access to high-quality educational content. The National Education Policy of 2020 represents India's most ambitious educational reform in decades, emphasizing critical thinking over rote memorization, mother tongue instruction in early years, and integration of vocational skills with academic education. Genuine education should not merely transmit information but cultivate curious, creative, and analytical minds.",
        advanced: "Education constitutes both the mechanism through which societies reproduce themselves across generations and the primary lever for social transformation and the expansion of human capability. This dual function — simultaneously conservative and progressive — creates inherent tensions in educational philosophy and policy that have been debated by thinkers from Plato to Dewey to Freire. Contemporary education systems face a fundamental mismatch between their institutional design — largely inherited from nineteenth-century industrial models that prioritized standardization, compliance, and measurable output — and the competencies required for meaningful participation in knowledge economies characterized by complexity, rapid change, and the automation of routine cognitive tasks. The skills that machines cannot easily replicate — creative synthesis, ethical reasoning, collaborative problem-solving, emotional intelligence, cross-cultural communication — are precisely those that standardized testing and traditional curricula least effectively develop. India's educational landscape illustrates these tensions at scale. The private tutoring industry, driven by high-stakes examinations, absorbs enormous resources while potentially reinforcing the rote learning patterns that formal education reform attempts to displace. Elite engineering and management institutions coexist with massively under-resourced village schools. The aspiration gap between credentials families invest in obtaining and the employment opportunities the economy actually creates generates a crisis of educated unemployment with profound social and political implications. Critical pedagogy demands that educational reform address not only curriculum content and pedagogical method but the fundamental questions of whose knowledge counts and whose flourishing the education system ultimately serves."
      },
      vocabulary: [
        { word: "Curriculum", pronunciation: "kuh-RIK-yoo-lum", partOfSpeech: "noun", meaning: "The complete set of subjects, topics, and activities that are studied in a school or educational program.", example: "India's National Education Policy 2020 calls for a complete revision of the school curriculum to focus on critical thinking.", tip: "Curriculum comes from Latin meaning 'course' or 'running track.' It's the track students run through from start to graduation." },
        { word: "Scholarship", pronunciation: "SKOL-ur-ship", partOfSpeech: "noun", meaning: "Money awarded to a student to pay for their education, usually based on academic merit, talent, or financial need.", example: "She received a government scholarship to study engineering at a top university without paying fees.", tip: "A scholarship is a financial gift for education. Unlike a loan, you do not have to pay it back." }
      ],
      writing: {
        beginner: "Write 3 sentences about why education is important to you personally. What do you hope to learn?",
        intermediate: "Write a paragraph about how technology has changed the way we learn. What are the advantages and disadvantages?",
        advanced: "Write an essay analyzing whether the current education system adequately prepares students for the modern world. What reforms are needed?"
      },
      speaking: {
        beginner: "Name your favorite subject in school or a topic you love learning about. Explain why you enjoy it.",
        intermediate: "Talk for 1 minute about the best teacher you have ever had. What made them special? How did they change you?",
        advanced: "Discuss for 2 minutes: Will traditional classroom education be replaced by online learning in the future? What will education look like in 20 years?"
      },
      quiz: [
        { question: "What does 'curriculum' mean?", options: ["A school building or campus", "The complete set of subjects studied in a school or program", "A type of examination", "A teacher's qualification certificate"], answer: 1, explanation: "Curriculum refers to the organized set of subjects, courses, and learning activities that students follow throughout their education." },
        { question: "In what year was the Right to Education Act passed in India?", options: ["1950", "1990", "2009", "2020"], answer: 2, explanation: "India's Right to Education Act was passed in 2009, making free and compulsory education a fundamental right for children aged 6 to 14 years." },
        { question: "What is a 'scholarship'?", options: ["A very difficult examination", "A type of school or educational institution", "Money given to help pay for a student's education", "A government school program"], answer: 2, explanation: "A scholarship is financial aid awarded to students based on academic merit, talent, or financial need, to help them afford education without repaying the money." },
        { question: "What did India's National Education Policy 2020 emphasize?", options: ["More rote memorization and drilling", "Critical thinking, mother-tongue instruction, and vocational skills", "Reducing the number of school years", "Removing technology from classrooms"], answer: 1, explanation: "India's NEP 2020 is a major reform emphasizing critical thinking over rote learning, early instruction in mother tongue, flexible study streams, and vocational education integration." },
        { question: "What platform is known for providing free, high-quality educational videos?", options: ["Twitter/X", "Khan Academy and YouTube", "Netflix", "Instagram"], answer: 1, explanation: "Khan Academy offers free, world-class educational content in math, science, and more. YouTube also hosts countless free educational channels and tutorials." }
      ]
    },
    {
      id: 9,
      title: "Social Media & Internet",
      icon: "📱",
      category: "Technology",
      passages: {
        beginner: "Social media is how people share information on the internet. Popular social media apps include Instagram, YouTube, and WhatsApp. People use social media to talk to friends and family far away. We can share photos, videos, and messages easily. Social media also helps us learn new things and follow the news. But we should be careful online. We should not share our personal details with strangers. Too much screen time is not good for our health. Using social media wisely and safely is very important.",
        intermediate: "Social media has fundamentally transformed how humans communicate, consume information, and form communities. Platforms like Instagram, YouTube, Twitter/X, and LinkedIn connect billions of people globally, enabling instant sharing of information, ideas, and cultural content across geographic and linguistic boundaries. For individuals, social media offers unprecedented opportunities: to build professional networks, to discover communities of shared interest, to participate in public conversations, and to build creative careers as content creators or influencers. India is one of the world's largest markets for social media, with hundreds of millions of active users on YouTube, WhatsApp, and Instagram. However, social media also presents serious challenges. The spread of misinformation and fake news at viral speed has affected democratic processes and public health responses worldwide. Algorithms designed to maximize engagement tend to create 'filter bubbles' that show users content confirming their existing beliefs. Cyberbullying affects millions of young people, and research links heavy social media use with increased rates of anxiety and depression, particularly among teenagers. Developing strong digital literacy skills has become an essential life skill.",
        advanced: "The social media ecosystem represents a novel form of mass communication infrastructure whose governance, economic models, and social consequences remain deeply contested and only partially understood. Unlike previous communications media, social platforms function simultaneously as publishers, broadcasters, private spaces for interpersonal communication, commercial marketplaces, and public squares — a convergence of functions that defies the regulatory frameworks developed for any individual prior medium. The attention economy that undergirds social media's business model creates structural incentives for design choices that prioritize emotional arousal, outrage, and addictive engagement patterns over user wellbeing or informational quality. Documents leaked from major platforms have confirmed what independent researchers had long suspected: that these companies' own internal research acknowledged connections between their products and mental health harms, particularly among adolescent girls, while publicly disputing or minimizing these findings. The political economy of information on social media involves several compounding dynamics. Algorithmic amplification of emotionally resonant content — particularly content evoking fear, anger, and disgust — systematically advantages polarizing narratives over nuanced or complicating information. This structural bias interacts with coordinated inauthentic behavior — state and non-state actors using networks of fake accounts and bots to amplify particular narratives — to create information environments hostile to democratic deliberation. Yet social media has also enabled genuinely transformative possibilities: marginalized communities have used platforms to claim visibility that legacy media systematically denied them; movements like #MeToo have been enabled by networked communication's ability to overcome traditional barriers to collective action."
      },
      vocabulary: [
        { word: "Viral", pronunciation: "VY-rul", partOfSpeech: "adjective", meaning: "Spreading rapidly and widely across the internet, social media, or the public — often used to describe popular content.", example: "The video of a puppy learning to climb stairs went viral, getting 50 million views in just two days.", tip: "Like a real virus spreading from person to person, viral content spreads from user to user across the internet very rapidly." },
        { word: "Digital Literacy", pronunciation: "DIJ-it-ul LIT-er-uh-see", partOfSpeech: "noun phrase", meaning: "The ability to use technology and the internet safely, effectively, and responsibly — including skills to evaluate online information critically.", example: "Schools are now teaching digital literacy so students can identify fake news and protect their privacy online.", tip: "Just as reading literacy means understanding written text, digital literacy means understanding and navigating the digital world safely." }
      ],
      writing: {
        beginner: "Write 3 important safety rules for using social media or the internet. Start each rule with 'Always...' or 'Never...'",
        intermediate: "Write a paragraph about how social media has changed the way people communicate with each other. Has it improved communication or made it worse?",
        advanced: "Write an essay arguing whether social media companies should be legally held responsible for harmful or false content posted on their platforms. Use evidence to support your view."
      },
      speaking: {
        beginner: "Name two good things and two harmful things about using social media. Use complete sentences.",
        intermediate: "Talk for 1 minute about how you personally use social media in your daily life. How does it affect you?",
        advanced: "Discuss for 2 minutes: What is the appropriate minimum age for children to use social media platforms? Should governments set legal limits?"
      },
      quiz: [
        { question: "What does 'viral' mean in the context of internet content?", options: ["Content containing a computer virus", "Content that spreads rapidly and widely online", "A new type of social media platform", "A harmful or dangerous website"], answer: 1, explanation: "Viral content is content — a video, post, or image — that spreads rapidly across the internet through sharing, often reaching millions of people very quickly." },
        { question: "Which of the following is NOT a social media or messaging platform?", options: ["Instagram", "YouTube", "WhatsApp", "Gmail"], answer: 3, explanation: "Gmail is an email service from Google. While email is digital communication, it is not a social media platform. Instagram, YouTube, and WhatsApp are all social platforms." },
        { question: "What is 'digital literacy'?", options: ["Reading about the history of computers", "The ability to use technology and the internet safely and critically", "Owning the latest smartphone or laptop", "Knowing how to write computer code"], answer: 1, explanation: "Digital literacy is the ability to use digital tools effectively, evaluate online information critically, protect your privacy, and navigate the internet responsibly and safely." },
        { question: "What is a 'filter bubble' on social media?", options: ["A privacy setting that blocks strangers", "When algorithms only show you content that confirms your existing views", "A tool for reporting fake news", "A parental control feature for children"], answer: 1, explanation: "A filter bubble occurs when social media algorithms show you only content that matches your past behavior and preferences, potentially limiting your exposure to different viewpoints." },
        { question: "What is a major risk of sharing too much personal information online?", options: ["Getting too many followers and messages", "Privacy and security risks from data theft or fraud", "Slow internet connection speed", "Seeing too many unwanted advertisements"], answer: 1, explanation: "Sharing personal information (address, phone number, financial details) online creates serious risks including identity theft, fraud, stalking, and unauthorized access to your accounts." }
      ]
    }
  ]
};

// Utility: get today's topic based on day of year
function getTodaysTopic() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return CONTENT_DATA.topics[dayOfYear % CONTENT_DATA.topics.length];
}

// Utility: get topic by index
function getTopicByIndex(idx) {
  return CONTENT_DATA.topics[idx % CONTENT_DATA.topics.length];
}

// All 8 badge definitions
const BADGES = [
  { id: 'first_lesson',    icon: '🌟', name: 'First Steps',        desc: 'Completed your very first lesson',       threshold: 1,  type: 'lessons' },
  { id: 'reading_5',       icon: '📖', name: 'Bookworm',           desc: 'Read 5 daily passages',                  threshold: 5,  type: 'readings' },
  { id: 'vocab_10',        icon: '📝', name: 'Word Wizard',        desc: 'Learned 10 vocabulary words',            threshold: 10, type: 'words' },
  { id: 'quiz_5',          icon: '🧠', name: 'Quiz Master',        desc: 'Completed 5 quizzes',                    threshold: 5,  type: 'quizzes' },
  { id: 'writing_5',       icon: '✍️',  name: 'Writing Hero',       desc: 'Completed 5 writing tasks',              threshold: 5,  type: 'writings' },
  { id: 'speaking_3',      icon: '🎤', name: 'Speaking Star',      desc: 'Recorded 3 speaking practices',          threshold: 3,  type: 'speakings' },
  { id: 'streak_7',        icon: '🔥', name: '7-Day Streak',       desc: 'Learned 7 days in a row',                threshold: 7,  type: 'streak' },
  { id: 'streak_30',       icon: '🏆', name: 'Month Champion',     desc: 'Amazing 30-day learning streak!',        threshold: 30, type: 'streak' },
  { id: 'perfect_quiz',    icon: '💯', name: 'Perfect Score',      desc: 'Got 5/5 on a quiz',                      threshold: 1,  type: 'perfectQuizzes' },
  { id: 'xp_500',          icon: '⚡', name: 'Energy Master',      desc: 'Earned 500 XP points',                   threshold: 500, type: 'xp' }
];

// XP levels
const XP_LEVELS = [
  { min: 0,    max: 99,   name: 'Seedling',  icon: '🌱' },
  { min: 100,  max: 299,  name: 'Sprout',    icon: '🌿' },
  { min: 300,  max: 599,  name: 'Sapling',   icon: '🌲' },
  { min: 600,  max: 999,  name: 'Tree',      icon: '🌳' },
  { min: 1000, max: 9999, name: 'Forest',    icon: '🏕️' }
];

function getXPLevel(xp) {
  return XP_LEVELS.find(l => xp >= l.min && xp <= l.max) || XP_LEVELS[XP_LEVELS.length - 1];
}

// ---- 366 Daily Topic Seeds ----
// Format per entry: [title, icon, category, wikiSlug]
// One topic per day of year. dayOfYear (1-366) maps to index (0-365).
const DAILY_TOPIC_SEEDS = [
  // JAN 1-31: Indian icons, leaders & heroes
  ['Mahatma Gandhi','🕊️','History','Mahatma_Gandhi'],
  ['Rabindranath Tagore','✍️','Literature','Rabindranath_Tagore'],
  ['APJ Abdul Kalam','🚀','Science','A._P._J._Abdul_Kalam'],
  ['BR Ambedkar','⚖️','Society','B._R._Ambedkar'],
  ['Jawaharlal Nehru','🌹','History','Jawaharlal_Nehru'],
  ['Subhas Chandra Bose','🦁','History','Subhas_Chandra_Bose'],
  ['Sardar Vallabhbhai Patel','🏛️','History','Vallabhbhai_Patel'],
  ['Swami Vivekananda','🧘','Philosophy','Swami_Vivekananda'],
  ['Savitribai Phule','📚','Society','Savitribai_Phule'],
  ['Indira Gandhi','🏛️','History','Indira_Gandhi'],
  ['Mother Teresa','❤️','Society','Mother_Teresa'],
  ['Rani Lakshmibai','⚔️','History','Rani_of_Jhansi'],
  ['Srinivasa Ramanujan','🔢','Science','Srinivasa_Ramanujan'],
  ['Homi J. Bhabha','⚛️','Science','Homi_J._Bhabha'],
  ['CV Raman','🌈','Science','C._V._Raman'],
  ['Vikram Sarabhai','🛸','Science','Vikram_Sarabhai'],
  ['Ratan Tata','💼','Business','Ratan_Tata'],
  ['Sundar Pichai','💻','Technology','Sundar_Pichai'],
  ['Sachin Tendulkar','🏏','Sports','Sachin_Tendulkar'],
  ['PV Sindhu','🏸','Sports','P._V._Sindhu'],
  ['Mary Kom','🥊','Sports','Mary_Kom'],
  ['Milkha Singh','🏃','Sports','Milkha_Singh'],
  ['Sania Mirza','🎾','Sports','Sania_Mirza'],
  ['MS Dhoni','🏏','Sports','MS_Dhoni'],
  ['Virat Kohli','🏏','Sports','Virat_Kohli'],
  ['Lata Mangeshkar','🎵','Culture','Lata_Mangeshkar'],
  ['AR Rahman','🎶','Culture','A._R._Rahman'],
  ['Amitabh Bachchan','🎬','Culture','Amitabh_Bachchan'],
  ['Kalpana Chawla','🚀','Science','Kalpana_Chawla'],
  ['Priyanka Chopra','🌟','Culture','Priyanka_Chopra_Jonas'],
  ['Flag of India','🇮🇳','History','Flag_of_India'],
  // FEB 1-28: Science & discovery
  ['The Solar System','🪐','Science','Solar_System'],
  ['Black Holes','🌑','Science','Black_hole'],
  ['DNA and Genetics','🧬','Science','DNA'],
  ['The Human Brain','🧠','Science','Human_brain'],
  ['Photosynthesis','🌿','Science','Photosynthesis'],
  ['The Periodic Table','⚗️','Science','Periodic_table'],
  ['Albert Einstein','🧪','Science','Albert_Einstein'],
  ['Isaac Newton','🍎','Science','Isaac_Newton'],
  ['Marie Curie','☢️','Science','Marie_Curie'],
  ['Charles Darwin','🦋','Science','Charles_Darwin'],
  ['Stephen Hawking','♾️','Science','Stephen_Hawking'],
  ['The Moon','🌙','Science','Moon'],
  ['Mars Exploration','🔴','Science','Mars'],
  ['Earthquakes','🌍','Science','Earthquake'],
  ['Volcanoes','🌋','Science','Volcano'],
  ['The Ocean','🌊','Science','Ocean'],
  ['Rainforests','🌳','Science','Rainforest'],
  ['Animal Migration','🦅','Science','Animal_migration'],
  ['The Immune System','🛡️','Health','Immune_system'],
  ['Quantum Physics','⚛️','Science','Quantum_mechanics'],
  ['Electricity','⚡','Science','Electricity'],
  ['Gravity','🌐','Science','Gravity'],
  ['The Speed of Light','💫','Science','Speed_of_light'],
  ['Evolution','🦎','Science','Evolution'],
  ['The Big Bang','💥','Science','Big_Bang'],
  ['Artificial Intelligence','🤖','Technology','Artificial_intelligence'],
  ['The Milky Way Galaxy','🌌','Science','Milky_Way'],
  ['Leap Year','📅','Science','Leap_year'],
  // MAR 1-31: Technology & innovation
  ['The Internet','🌐','Technology','Internet'],
  ['Smartphones','📱','Technology','Smartphone'],
  ['Social Media','📲','Technology','Social_media'],
  ['Cloud Computing','☁️','Technology','Cloud_computing'],
  ['Cybersecurity','🔒','Technology','Computer_security'],
  ['Electric Vehicles','🚗','Technology','Electric_vehicle'],
  ['Renewable Energy','♻️','Technology','Renewable_energy'],
  ['3D Printing','🖨️','Technology','3D_printing'],
  ['Virtual Reality','🥽','Technology','Virtual_reality'],
  ['Robotics','🤖','Technology','Robotics'],
  ['Blockchain','⛓️','Technology','Blockchain'],
  ['Space Tourism','🚀','Technology','Space_tourism'],
  ['ISRO','🛸','Technology','Indian_Space_Research_Organisation'],
  ['Chandrayaan Mission','🌙','Technology','Chandrayaan_programme'],
  ['5G Technology','📡','Technology','5G'],
  ['Machine Learning','🧠','Technology','Machine_learning'],
  ['The World Wide Web','🌐','Technology','World_Wide_Web'],
  ['Satellite Technology','🛰️','Technology','Satellite'],
  ['Nuclear Energy','⚛️','Technology','Nuclear_power'],
  ['Nanotechnology','🔬','Technology','Nanotechnology'],
  ['Biotechnology','🧪','Technology','Biotechnology'],
  ['Self-Driving Cars','🚙','Technology','Self-driving_car'],
  ['Augmented Reality','📲','Technology','Augmented_reality'],
  ['Big Data','📊','Technology','Big_data'],
  ['Internet of Things','🏠','Technology','Internet_of_things'],
  ['Drone Technology','🚁','Technology','Unmanned_aerial_vehicle'],
  ['Solar Energy','☀️','Technology','Solar_energy'],
  ['Wind Energy','💨','Technology','Wind_power'],
  ['Digital India','💻','Technology','Digital_India'],
  ['UPI Payments','💰','Technology','Unified_Payments_Interface'],
  ['Startup India','🚀','Business','Startup_India'],
  // APR 1-30: Environment & nature
  ['Climate Change','🌡️','Environment','Climate_change'],
  ['Deforestation','🌲','Environment','Deforestation'],
  ['Plastic Pollution','🗑️','Environment','Plastic_pollution'],
  ['The Amazon Rainforest','🌿','Environment','Amazon_rainforest'],
  ['Coral Reefs','🐠','Environment','Coral_reef'],
  ['Endangered Species','🐘','Environment','Endangered_species'],
  ['Water Conservation','💧','Environment','Water_conservation'],
  ['Air Pollution','😷','Environment','Air_pollution'],
  ['Biodiversity','🦁','Environment','Biodiversity'],
  ['Wetlands','🐸','Environment','Wetland'],
  ['The Himalayas','🏔️','Environment','Himalayas'],
  ['Tigers and Conservation','🐯','Environment','Tiger'],
  ['Ganges River','🏞️','Environment','Ganges'],
  ['Mangrove Forests','🌴','Environment','Mangrove'],
  ['Urban Heat Islands','🌆','Environment','Urban_heat_island'],
  ['Carbon Footprint','🌍','Environment','Carbon_footprint'],
  ['Green Architecture','🏢','Environment','Green_building'],
  ['Wildlife Sanctuaries','🌿','Environment','Wildlife_sanctuary'],
  ['The Ozone Layer','🌌','Environment','Ozone_layer'],
  ['Global Warming','🔥','Environment','Global_warming'],
  ['Ocean Pollution','🌊','Environment','Marine_pollution'],
  ['Sustainable Agriculture','🌾','Environment','Sustainable_agriculture'],
  ['Rainwater Harvesting','🌧️','Environment','Rainwater_harvesting'],
  ['Electronic Waste','💻','Environment','Electronic_waste'],
  ['Organic Farming','🥕','Environment','Organic_farming'],
  ['The Arctic Ice Caps','🧊','Environment','Arctic_sea_ice'],
  ['Soil Erosion','🌾','Environment','Soil_erosion'],
  ['Environmental Law','⚖️','Environment','Environmental_law'],
  ['Zero Waste Living','♻️','Environment','Zero_waste'],
  ['Sundarbans','🐯','Environment','Sundarbans'],
  // MAY 1-31: Health & wellness
  ['The Human Heart','❤️','Health','Heart'],
  ['Diabetes','🩺','Health','Diabetes'],
  ['Cancer Awareness','🎗️','Health','Cancer'],
  ['Mental Health','🧠','Health','Mental_health'],
  ['Yoga','🧘','Health','Yoga'],
  ['Meditation','🕯️','Health','Meditation'],
  ['Nutrition Science','🥗','Health','Nutrition'],
  ['Exercise and Fitness','💪','Health','Physical_fitness'],
  ['Sleep Science','😴','Health','Sleep'],
  ['Stress Management','🌿','Health','Stress_(biology)'],
  ['Vaccination','💉','Health','Vaccine'],
  ['COVID-19 Pandemic','😷','Health','COVID-19_pandemic'],
  ['Ayurveda','🌿','Health','Ayurveda'],
  ['The Human Skeleton','🦴','Health','Human_skeleton'],
  ['Human Eyes and Vision','👁️','Health','Human_eye'],
  ['Dental Health','😁','Health','Dental_health'],
  ['Blood Pressure','💓','Health','Blood_pressure'],
  ['Cholesterol','🩺','Health','Cholesterol'],
  ['The Digestive System','🍎','Health','Digestive_system'],
  ['Skin Care and Health','🧴','Health','Skin'],
  ['Depression','💙','Health','Depression_(mood)'],
  ['Anxiety Disorders','🌀','Health','Anxiety_disorder'],
  ['First Aid','🩹','Health','First_aid'],
  ['Antibiotics','💊','Health','Antibiotic'],
  ['Organ Donation','🫀','Health','Organ_donation'],
  ['Malaria','🦟','Health','Malaria'],
  ['Clean Water Access','💧','Health','Drinking_water'],
  ['Women\'s Health','🌸','Health','Women%27s_health'],
  ['Children\'s Nutrition','🥛','Health','Child_nutrition'],
  ['Ageing and Longevity','👴','Health','Ageing'],
  ['Obesity and BMI','⚖️','Health','Obesity'],
  // JUN 1-30: Sports & games
  ['Cricket','🏏','Sports','Cricket'],
  ['FIFA World Cup','⚽','Sports','FIFA_World_Cup'],
  ['The Olympic Games','🏅','Sports','Olympic_Games'],
  ['Badminton','🏸','Sports','Badminton'],
  ['Tennis','🎾','Sports','Tennis'],
  ['Chess','♟️','Sports','Chess'],
  ['Kabaddi','🤸','Sports','Kabaddi'],
  ['Field Hockey','🏑','Sports','Field_hockey'],
  ['Marathon Running','🏃','Sports','Marathon'],
  ['Swimming','🏊','Sports','Swimming_(sport)'],
  ['Weightlifting','🏋️','Sports','Weightlifting_(sport)'],
  ['Table Tennis','🏓','Sports','Table_tennis'],
  ['Cycling','🚴','Sports','Cycling'],
  ['Archery','🏹','Sports','Archery'],
  ['Wrestling','🤼','Sports','Wrestling'],
  ['Boxing','🥊','Sports','Boxing'],
  ['IPL Cricket','🏏','Sports','Indian_Premier_League'],
  ['The Commonwealth Games','🌍','Sports','Commonwealth_Games'],
  ['Sports Psychology','🧠','Sports','Sports_psychology'],
  ['Volleyball','🏐','Sports','Volleyball'],
  ['Golf','⛳','Sports','Golf'],
  ['Basketball','🏀','Sports','Basketball'],
  ['Esports','🎮','Technology','Esports'],
  ['Indian Super League','⚽','Sports','Indian_Super_League'],
  ['Paralympic Games','♿','Sports','Paralympic_Games'],
  ['Sports Nutrition','🥗','Health','Sports_nutrition'],
  ['Kho-Kho','🤾','Sports','Kho_kho'],
  ['Polo','🐎','Sports','Polo_(sport)'],
  ['Squash','🎾','Sports','Squash_(sport)'],
  ['Athletics','🏃','Sports','Athletics_(sport)'],
  // JUL 1-31: India\'s monuments, history & travel
  ['Taj Mahal','🕌','History','Taj_Mahal'],
  ['Red Fort','🏰','History','Red_Fort'],
  ['Qutub Minar','🗼','History','Qutub_Minar'],
  ['Ajanta Caves','🎨','History','Ajanta_Caves'],
  ['Ellora Caves','⛩️','History','Ellora_Caves'],
  ['Konark Sun Temple','☀️','History','Konark_Sun_Temple'],
  ['Hampi','🏛️','History','Hampi'],
  ['Mysore Palace','👑','History','Mysore_Palace'],
  ['Sanchi Stupa','☸️','History','Sanchi'],
  ['Indus Valley Civilisation','🏺','History','Indus_Valley_Civilisation'],
  ['The Mughal Empire','👑','History','Mughal_Empire'],
  ['The Maurya Empire','🦁','History','Maurya_Empire'],
  ['The Gupta Empire','📜','History','Gupta_Empire'],
  ['British Rule in India','🇬🇧','History','British_Raj'],
  ['India\'s Independence','🇮🇳','History','Indian_independence_movement'],
  ['The Partition of India','💔','History','Partition_of_India'],
  ['The Indian Constitution','⚖️','History','Constitution_of_India'],
  ['Indian Railways','🚂','History','Indian_Railways'],
  ['The Silk Road','🗺️','History','Silk_Road'],
  ['Varanasi','🪔','Travel','Varanasi'],
  ['Jaipur – Pink City','🏯','Travel','Jaipur'],
  ['Kerala Backwaters','🛶','Travel','Kerala_backwaters'],
  ['Darjeeling','🍵','Travel','Darjeeling'],
  ['Leh Ladakh','🏔️','Travel','Leh'],
  ['Andaman and Nicobar Islands','🌴','Travel','Andaman_and_Nicobar_Islands'],
  ['Goa','🏖️','Travel','Goa'],
  ['Valley of Flowers','🌸','Environment','Valley_of_Flowers_National_Park'],
  ['Venice','🚣','Travel','Venice'],
  ['The Great Wall of China','🧱','History','Great_Wall_of_China'],
  ['Machu Picchu','🏔️','Travel','Machu_Picchu'],
  ['The Eiffel Tower','🗼','Travel','Eiffel_Tower'],
  // AUG 1-31: Society & social issues
  ['Women\'s Empowerment','👩','Society','Women%27s_empowerment'],
  ['Child Labour','👶','Society','Child_labour'],
  ['Education in India','📚','Society','Education_in_India'],
  ['Poverty Alleviation','🏠','Society','Poverty'],
  ['Right to Education','📖','Society','Right_to_education'],
  ['Digital Literacy','💻','Society','Digital_literacy'],
  ['Caste System in India','⚖️','Society','Caste_system_in_India'],
  ['Girl Child Education','📝','Society','Girl%27s_education'],
  ['Rural Development','🌾','Society','Rural_development'],
  ['Urbanisation','🌆','Society','Urbanization'],
  ['Road Safety','🚦','Society','Road_traffic_safety'],
  ['Elder Care','👴','Society','Old_age'],
  ['Drug Abuse','🚫','Society','Drug_abuse'],
  ['Freedom of the Press','📰','Society','Freedom_of_the_press'],
  ['Voter Rights','🗳️','Society','Voting_rights'],
  ['Aadhaar','🪪','Technology','Aadhaar'],
  ['Swachh Bharat Mission','🧹','Society','Swachh_Bharat_Abhiyan'],
  ['Make in India','🏭','Business','Make_in_India'],
  ['Smart Cities','🏙️','Technology','Smart_city'],
  ['Disability Rights','♿','Society','Disability_rights_movement'],
  ['Women in Science','🔬','Society','Women_in_science'],
  ['AI Ethics','🤖','Technology','Ethics_of_artificial_intelligence'],
  ['Social Media and Mental Health','📱','Health','Social_media_and_mental_health'],
  ['Fake News','📰','Society','Fake_news'],
  ['Data Privacy','🔒','Technology','Information_privacy'],
  ['Cryptocurrency','💰','Technology','Cryptocurrency'],
  ['The United Nations','🌍','Society','United_Nations'],
  ['Human Trafficking','⚠️','Society','Human_trafficking'],
  ['Child Rights','🧒','Society','Children%27s_rights'],
  ['Income Inequality','⚖️','Society','Economic_inequality'],
  ['Microfinance','💵','Business','Microfinance'],
  // SEP 1-30: Food & cuisine
  ['Indian Street Food','🍜','Food','Indian_street_food'],
  ['Biryani','🍚','Food','Biryani'],
  ['Idli and Dosa','🥞','Food','Idli'],
  ['Dal and Lentils','🫘','Food','Dal'],
  ['Indian Sweets','🍬','Food','Indian_sweets'],
  ['Spices of India','🌶️','Food','Indian_spices'],
  ['Chocolate','🍫','Food','Chocolate'],
  ['Coffee','☕','Food','Coffee'],
  ['Tea and Chai','🍵','Food','Tea'],
  ['Sushi','🍣','Food','Sushi'],
  ['Pizza','🍕','Food','Pizza'],
  ['Mediterranean Diet','🫒','Health','Mediterranean_diet'],
  ['Veganism','🥦','Health','Veganism'],
  ['Fermented Foods','🥒','Health','Fermentation_in_food_processing'],
  ['Street Food Around the World','🌮','Food','Street_food'],
  ['The Art of Baking','🍞','Food','Baking'],
  ['Superfoods','🥑','Health','Superfood'],
  ['Food Wastage','🗑️','Society','Food_waste'],
  ['Farm to Table','🌾','Food','Farm-to-table'],
  ['Intermittent Fasting','🕯️','Health','Intermittent_fasting'],
  ['Food Allergies','⚠️','Health','Food_allergy'],
  ['Butter Chicken','🍗','Food','Butter_chicken'],
  ['Mango','🥭','Food','Mango'],
  ['Coconut','🥥','Food','Coconut'],
  ['Jackfruit','🫒','Food','Jackfruit'],
  ['Turmeric','🟡','Health','Turmeric'],
  ['Ginger and Its Benefits','🧄','Health','Ginger'],
  ['Honey','🍯','Food','Honey'],
  ['Street Food Safety','🍽️','Health','Food_safety'],
  ['World Cuisines','🌍','Food','Cuisine'],
  // OCT 1-31: Business & economy
  ['Entrepreneurship','💡','Business','Entrepreneurship'],
  ['Stock Market','📈','Business','Stock_market'],
  ['Reserve Bank of India','🏦','Business','Reserve_Bank_of_India'],
  ['Inflation','💰','Business','Inflation'],
  ['Globalisation','🌍','Business','Globalization'],
  ['Foreign Direct Investment','📊','Business','Foreign_direct_investment'],
  ['Banking System','🏦','Business','Bank'],
  ['E-Commerce','🛒','Business','E-commerce'],
  ['Advertising','📢','Business','Advertising'],
  ['Marketing Strategies','📣','Business','Marketing'],
  ['Supply Chain Management','🚚','Business','Supply_chain'],
  ['International Trade','🚢','Business','International_trade'],
  ['The World Bank','🌍','Business','World_Bank'],
  ['India\'s GDP','📊','Business','Gross_domestic_product'],
  ['Taxation','🧾','Business','Taxation'],
  ['Green Economy','🌱','Environment','Green_economy'],
  ['Tourism Economy','✈️','Travel','Tourism'],
  ['Freelancing','💻','Business','Freelancer'],
  ['Remote Work','🏠','Business','Telecommuting'],
  ['Time Management','⏰','Society','Time_management'],
  ['Leadership','👑','Business','Leadership'],
  ['Negotiation Skills','🤝','Business','Negotiation'],
  ['Financial Literacy','📚','Business','Financial_literacy'],
  ['Saving and Investment','💳','Business','Saving'],
  ['Mutual Funds','📊','Business','Mutual_fund'],
  ['Insurance','🛡️','Business','Insurance'],
  ['Credit Score','📊','Business','Credit_score'],
  ['Corporate Social Responsibility','🌍','Business','Corporate_social_responsibility'],
  ['Small Business','🏪','Business','Small_business'],
  ['Gig Economy','🚗','Business','Gig_economy'],
  ['E-Waste Recycling','♻️','Environment','Electronic_waste'],
  // NOV 1-30: Literature & arts
  ['William Shakespeare','📜','Literature','William_Shakespeare'],
  ['Gitanjali by Tagore','🌹','Literature','Gitanjali'],
  ['Harry Potter Series','🧙','Literature','Harry_Potter'],
  ['The Alchemist','📖','Literature','The_Alchemist_(novel)'],
  ['To Kill a Mockingbird','📚','Literature','To_Kill_a_Mockingbird'],
  ['1984 by George Orwell','📖','Literature','Nineteen_Eighty-Four'],
  ['The Mahabharata','📜','Literature','Mahabharata'],
  ['The Ramayana','🏹','Literature','Ramayana'],
  ['Hindustani Classical Music','🎵','Culture','Hindustani_classical_music'],
  ['Bharatanatyam','💃','Culture','Bharatanatyam'],
  ['Kathak Dance','💃','Culture','Kathak'],
  ['Indian Painting','🎨','Culture','Indian_painting'],
  ['Bollywood Films','🎬','Culture','Bollywood'],
  ['Hollywood Cinema','🎥','Culture','Cinema_of_the_United_States'],
  ['The Nobel Prize','🏅','History','Nobel_Prize'],
  ['World Poetry','📝','Literature','Poetry'],
  ['Mythology and Folklore','🐉','Culture','Mythology'],
  ['Libraries and Books','📚','Culture','Library'],
  ['Comic Books and Graphic Novels','🦸','Culture','Graphic_novel'],
  ['Photography','📷','Culture','Photography'],
  ['Street Art','🎨','Culture','Street_art'],
  ['Classical Music','🎻','Culture','Classical_music'],
  ['The Renaissance','🎨','History','Renaissance'],
  ['Ancient Greek Mythology','🏛️','History','Greek_mythology'],
  ['Storytelling','📖','Culture','Storytelling'],
  ['Journalism','📰','Society','Journalism'],
  ['Podcasting','🎙️','Technology','Podcast'],
  ['Creative Writing','✍️','Culture','Creative_writing'],
  ['Theatre and Drama','🎭','Culture','Theatre'],
  ['Calligraphy','✍️','Culture','Calligraphy'],
  // DEC 1-31 + leap: Festivals, values & future
  ['Diwali','🪔','Culture','Diwali'],
  ['Eid Mubarak','🌙','Culture','Eid_al-Fitr'],
  ['Christmas','🎄','Culture','Christmas'],
  ['Holi Festival','🌈','Culture','Holi'],
  ['Navratri','💃','Culture','Navratri'],
  ['Ganesh Chaturthi','🐘','Culture','Ganesh_Chaturthi'],
  ['Baisakhi','🌾','Culture','Baisakhi'],
  ['Onam','🌺','Culture','Onam'],
  ['Pongal','🌾','Culture','Pongal_(festival)'],
  ['Durga Puja','🙏','Culture','Durga_Puja'],
  ['New Year Celebrations','🎆','Culture','New_Year'],
  ['Indian Weddings','👰','Culture','Indian_wedding'],
  ['Friendship and Relationships','🤝','Society','Friendship'],
  ['Family Values','👨‍👩‍👧','Society','Family'],
  ['Kindness and Empathy','❤️','Society','Empathy'],
  ['Gratitude','🙏','Society','Gratitude'],
  ['Goal Setting','🎯','Society','Goal_setting'],
  ['Public Speaking','🎤','Society','Public_speaking'],
  ['World Peace','☮️','Society','World_peace'],
  ['Human Rights','⚖️','Society','Human_rights'],
  ['Sustainable Development Goals','🌱','Society','Sustainable_Development_Goals'],
  ['Social Entrepreneurship','💡','Business','Social_entrepreneurship'],
  ['Volunteering','🤝','Society','Volunteering'],
  ['Intercultural Communication','🌍','Society','Intercultural_communication'],
  ['English as a Global Language','🌐','Language','English_language'],
  ['Language Acquisition','📚','Language','Language_acquisition'],
  ['Communication Skills','🗣️','Language','Communication'],
  ['Self-Confidence','💪','Society','Self-confidence'],
  ['Mindfulness','🧘','Health','Mindfulness'],
  ['Climate Action','🌍','Environment','Climate_action'],
  ['India in the Future','🚀','Society','India'],
  ['Leap Year Day','📅','Science','Leap_year']
];

// ---- Category Vocabulary Fallback ----
// Used when Dictionary API fails to return definitions
const CATEGORY_VOCAB_FALLBACK = {
  History:     [{word:'Legacy',pronunciation:'LEG-uh-see',partOfSpeech:'noun',meaning:'Something important passed down from the past',example:'Gandhi\'s legacy continues to inspire people across the world.',tip:'Think "leave" — a legacy is what someone leaves behind for future generations.'},
                {word:'Heritage',pronunciation:'HER-i-tij',partOfSpeech:'noun',meaning:'Traditions and history inherited from past generations',example:'India\'s cultural heritage includes diverse languages, art forms and traditions.',tip:'Heri = heir. Heritage is what you inherit from those who came before you.'}],
  Science:     [{word:'Phenomenon',pronunciation:'fuh-NOM-ih-non',partOfSpeech:'noun',meaning:'A remarkable or observable fact or event in the natural world',example:'Rainbows are a natural phenomenon caused by the refraction of light.',tip:'Phenomenal comes from this word — something so impressive it is worth noticing.'},
                {word:'Theory',pronunciation:'THEE-uh-ree',partOfSpeech:'noun',meaning:'A well-tested explanation for how something works, supported by evidence',example:'Einstein\'s Theory of Relativity changed how we understand space and time.',tip:'A scientific theory is not a guess — it is backed by strong evidence and testing.'}],
  Technology:  [{word:'Innovation',pronunciation:'in-oh-VAY-shun',partOfSpeech:'noun',meaning:'A new idea, method, or device that improves something',example:'The smartphone was one of the greatest innovations of the 21st century.',tip:'Innov = new (Latin). An innovation creates something new or dramatically better.'},
                {word:'Algorithm',pronunciation:'AL-guh-rith-um',partOfSpeech:'noun',meaning:'A set of step-by-step instructions that a computer follows to solve a problem',example:'Search engines use complex algorithms to show you the most relevant results.',tip:'Think of a recipe — an algorithm is a precise recipe that a computer follows.'}],
  Environment: [{word:'Sustainable',pronunciation:'suh-STAY-nuh-bul',partOfSpeech:'adjective',meaning:'Done in a way that can continue long-term without damaging the environment',example:'Solar energy is a sustainable alternative to fossil fuels.',tip:'Sustain = keep going. Sustainable things can be maintained without harming nature.'},
                {word:'Ecosystem',pronunciation:'EE-koh-sis-tum',partOfSpeech:'noun',meaning:'A community of living things interacting with each other and their environment',example:'Deforestation destroys the forest ecosystem and threatens thousands of species.',tip:'Eco = environment, system = connected network. An ecosystem is nature\'s own network.'}],
  Health:      [{word:'Immunity',pronunciation:'ih-MYOO-nih-tee',partOfSpeech:'noun',meaning:'The body\'s ability to resist and fight against diseases',example:'Regular exercise and a healthy diet help strengthen your immunity.',tip:'Immune = protected. Your immunity is your body\'s natural protection system.'},
                {word:'Nutrition',pronunciation:'noo-TRISH-un',partOfSpeech:'noun',meaning:'The process of getting the food needed for health and growth',example:'Good nutrition is essential for children\'s physical and mental development.',tip:'Nutri = nourish (Latin). Nutrition is about giving your body what it needs to thrive.'}],
  Sports:      [{word:'Perseverance',pronunciation:'pur-suh-VEER-unss',partOfSpeech:'noun',meaning:'Continuing to try despite difficulties and not giving up',example:'The athlete showed great perseverance by training through injury to win gold.',tip:'Per + severe + ance = keep going through harsh conditions — the champion\'s quality.'},
                {word:'Discipline',pronunciation:'DIS-ih-plin',partOfSpeech:'noun',meaning:'Training that develops self-control, orderly conduct and a habit of following rules',example:'Champion athletes credit discipline and daily practice for their success.',tip:'Disciplina (Latin) = teaching. Discipline is the daily teaching you give yourself.'}],
  Travel:      [{word:'Destination',pronunciation:'des-tih-NAY-shun',partOfSpeech:'noun',meaning:'The place someone is travelling to',example:'The Taj Mahal is one of the most popular tourist destinations in the world.',tip:'Destine = to direct to. Your destination is where you are "destined" to arrive.'},
                {word:'Heritage',pronunciation:'HER-i-tij',partOfSpeech:'noun',meaning:'Sites of historical importance preserved for future generations',example:'Angkor Wat is a UNESCO World Heritage Site in Cambodia.',tip:'Heritage sites are places so important they are protected for all of humanity.'}],
  Society:     [{word:'Equality',pronunciation:'ih-KWOL-ih-tee',partOfSpeech:'noun',meaning:'The state of being equal in rights, status, or opportunities',example:'The constitution guarantees equality for all citizens regardless of caste or religion.',tip:'Equal = same. Equality means everyone gets the same rights and opportunities.'},
                {word:'Empowerment',pronunciation:'em-POW-ur-ment',partOfSpeech:'noun',meaning:'The process of giving someone power, authority, or confidence to act',example:'Education is the most powerful tool for women\'s empowerment.',tip:'Empower = give power. Empowerment helps people take control of their own lives.'}],
  Food:        [{word:'Cuisine',pronunciation:'kwi-ZEEN',partOfSpeech:'noun',meaning:'A style of cooking associated with a particular country or culture',example:'Indian cuisine is known for its rich use of spices and diverse flavours.',tip:'From French for kitchen. Cuisine is the art and style of cooking of a culture.'},
                {word:'Ingredient',pronunciation:'in-GREE-dee-unt',partOfSpeech:'noun',meaning:'A component or substance used in cooking or making a product',example:'Turmeric is the key ingredient that gives biryani its golden colour.',tip:'In + gredi = go into (Latin). An ingredient is something that "goes into" a recipe.'}],
  Business:    [{word:'Entrepreneur',pronunciation:'on-truh-pruh-NOOR',partOfSpeech:'noun',meaning:'A person who sets up and runs a business, taking financial risks to make profit',example:'Ratan Tata was a visionary entrepreneur who transformed Indian industry.',tip:'Entre = between (French). Entrepreneurs bridge gaps — they see a need and fill it.'},
                {word:'Investment',pronunciation:'in-VEST-ment',partOfSpeech:'noun',meaning:'The action of putting money into a project expecting future profit or benefit',example:'Good investment in education creates long-term benefits for the economy.',tip:'Invest = put in. An investment is resources you put in now, expecting returns later.'}],
  Literature:  [{word:'Eloquence',pronunciation:'EL-oh-kwence',partOfSpeech:'noun',meaning:'Fluent, expressive, and persuasive speaking or writing',example:'The speaker\'s eloquence moved the entire audience to tears.',tip:'Eloq = speak out (Latin). Eloquence is the power to speak beautifully and powerfully.'},
                {word:'Narrative',pronunciation:'NAR-uh-tiv',partOfSpeech:'noun',meaning:'A spoken or written account of events; a story',example:'The novel\'s narrative kept readers completely engaged from first page to last.',tip:'Narr = tell (Latin). A narrative is the art of telling a story.'}],
  Culture:     [{word:'Tradition',pronunciation:'truh-DISH-un',partOfSpeech:'noun',meaning:'A custom or belief passed down from generation to generation',example:'Lighting diyas during Diwali is a cherished tradition in Indian families.',tip:'Tradition = "handing over" in Latin. Traditions are handed down through generations.'},
                {word:'Celebration',pronunciation:'sel-uh-BRAY-shun',partOfSpeech:'noun',meaning:'The action of marking a special occasion with joyful activities',example:'The entire country joined in the celebration of Independence Day.',tip:'Celebrate = honour publicly. A celebration is how we share happiness with others.'}],
  Philosophy:  [{word:'Wisdom',pronunciation:'WIZ-dum',partOfSpeech:'noun',meaning:'The quality of having experience, knowledge, and good judgement',example:'Swami Vivekananda\'s wisdom continues to guide millions of young people.',tip:'Wise + dom (state of). Wisdom is not just knowledge — it is knowing how to use it.'},
                {word:'Principle',pronunciation:'PRIN-suh-pul',partOfSpeech:'noun',meaning:'A fundamental truth or rule that guides behaviour or thought',example:'Non-violence was Gandhi\'s core principle in the freedom struggle.',tip:'Princip = first (Latin). A principle is a first rule you never compromise on.'}],
  Language:    [{word:'Fluency',pronunciation:'FLOO-un-see',partOfSpeech:'noun',meaning:'The ability to speak or write a language easily, smoothly and with accuracy',example:'Daily practice is the fastest way to develop fluency in spoken English.',tip:'Flu = flow (Latin). Fluency is when words flow naturally without stopping or struggling.'},
                {word:'Vocabulary',pronunciation:'voh-KAB-yuh-lair-ee',partOfSpeech:'noun',meaning:'The body of words known and used by a person in a language',example:'Reading books every day is the best way to expand your English vocabulary.',tip:'Voc = voice (Latin). Your vocabulary is the collection of words you can give voice to.'}]
};

// ---- Quiz Distractor Pool ----
// Plausible-sounding wrong definitions for auto-generated quiz options
const QUIZ_WRONG_DEFS = [
  'A type of musical instrument from ancient civilisations',
  'A process of manufacturing metals at high temperatures',
  'A government regulation about international shipping',
  'A traditional ceremony practised during harvest season',
  'A method of measuring atmospheric pressure',
  'A building material used in ancient architecture',
  'A species of migratory bird found in arctic regions',
  'A mathematical formula for calculating surface area',
  'A chemical reaction occurring at low temperatures',
  'A form of communication used in maritime trade',
  'A type of fabric woven from natural plant fibres',
  'A historical agreement between colonial powers',
  'A style of dance originating from Mediterranean cultures',
  'A scientific instrument used for measuring earthquakes',
  'A natural mineral compound found in mountain rocks',
  'A training technique used by competitive athletes',
  'A legal term relating to property ownership disputes',
  'A cooking technique used in Central Asian cuisines',
  'A form of religious observance in ancient societies',
  'An engineering term describing load-bearing structures'
];

// ---- Grammar Content Database ----
const GRAMMAR_DATA = {
  categories: [
    {
      id: 'verbs', title: 'Verbs', icon: '⚡', desc: 'Words that express actions, events, or states of being', color: '#6366f1',
      sections: [
        {
          id: 'v1', title: 'Types of Verbs', type: 'type-cards',
          items: [
            { icon: '🏃', name: 'Action Verbs', desc: 'Describe a physical or mental action.', tags: ['run', 'eat', 'write', 'think', 'play', 'buy', 'speak', 'jump'] },
            { icon: '🔗', name: 'Linking Verbs', desc: 'Connect the subject to a description. They do not show action.', tags: ['am / is / are', 'was / were', 'seem', 'appear', 'become', 'feel', 'look', 'smell'] },
            { icon: '🤝', name: 'Helping (Auxiliary) Verbs', desc: 'Used with a main verb to form tenses or express meaning.', tags: ['have', 'has', 'had', 'do', 'does', 'did', 'will', 'shall', 'would', 'be'] },
            { icon: '💬', name: 'Modal Verbs', desc: 'Express possibility, ability, permission, or obligation. Never change form.', tags: ['can', 'could', 'may', 'might', 'must', 'should', 'ought to', 'would'] }
          ]
        },
        {
          id: 'v2', title: 'Irregular Verb Forms (V1 / V2 / V3)', type: 'table',
          note: 'Irregular verbs do not follow a pattern — they must be memorised.',
          headers: ['Base Form (V1)', 'Past Simple (V2)', 'Past Participle (V3)'],
          rows: [
            ['eat', 'ate', 'eaten'], ['go', 'went', 'gone'], ['write', 'wrote', 'written'],
            ['speak', 'spoke', 'spoken'], ['take', 'took', 'taken'], ['give', 'gave', 'given'],
            ['come', 'came', 'come'], ['see', 'saw', 'seen'], ['run', 'ran', 'run'],
            ['know', 'knew', 'known'], ['make', 'made', 'made'], ['think', 'thought', 'thought'],
            ['begin', 'began', 'begun'], ['break', 'broke', 'broken'], ['choose', 'chose', 'chosen'],
            ['drink', 'drank', 'drunk'], ['find', 'found', 'found'], ['get', 'got', 'got/gotten'],
            ['leave', 'left', 'left'], ['put', 'put', 'put']
          ]
        },
        {
          id: 'v3', title: 'Modal Verbs — Meaning & Use', type: 'kv-table',
          headers: ['Modal', 'Meaning / Use', 'Example Sentence'],
          rows: [
            { k: 'can', v: 'Present ability', ex: 'She can speak three languages.' },
            { k: 'could', v: 'Past ability / polite request', ex: 'Could you please help me?' },
            { k: 'may', v: 'Formal permission / possibility', ex: 'May I come in?' },
            { k: 'might', v: 'Less certain possibility', ex: 'It might rain tomorrow.' },
            { k: 'must', v: 'Strong obligation / necessity', ex: 'You must wear a seatbelt.' },
            { k: 'should', v: 'Advice / recommendation', ex: 'You should drink more water.' },
            { k: 'will', v: 'Future intention / promise', ex: 'I will call you tonight.' },
            { k: 'would', v: 'Polite request / conditional', ex: 'Would you like some tea?' },
            { k: 'ought to', v: 'Moral obligation (like "should")', ex: 'You ought to respect your elders.' }
          ]
        }
      ]
    },
    {
      id: 'tenses', title: 'Tenses', icon: '⏰', desc: 'Express when an action happens — past, present, or future', color: '#8b5cf6',
      sections: [
        {
          id: 't1', title: 'Present Tenses', type: 'tenses',
          items: [
            { name: 'Simple Present', structure: 'Subject + V1 &nbsp;(add <em>s/es</em> for he, she, it)', use: 'Habits, facts, routines, general truths', examples: ['She <strong>eats</strong> rice every day.', 'The sun <strong>rises</strong> in the east.', 'He <strong>works</strong> at a bank.'] },
            { name: 'Present Continuous', structure: 'Subject + am / is / are + V-ing', use: 'Action happening right now; temporary actions', examples: ['She <strong>is eating</strong> right now.', 'They <strong>are playing</strong> cricket.', 'I <strong>am studying</strong> for my exam.'] },
            { name: 'Present Perfect', structure: 'Subject + have / has + V3', use: 'Past action with present result; life experience', examples: ['She <strong>has eaten</strong> already.', 'I <strong>have visited</strong> Delhi.', 'He <strong>has finished</strong> his homework.'] },
            { name: 'Present Perfect Continuous', structure: 'Subject + have / has been + V-ing', use: 'Action started in past, still continuing now', examples: ['She <strong>has been studying</strong> since morning.', 'It <strong>has been raining</strong> for two hours.'] }
          ]
        },
        {
          id: 't2', title: 'Past Tenses', type: 'tenses',
          items: [
            { name: 'Simple Past', structure: 'Subject + V2', use: 'Completed action at a specific past time', examples: ['She <strong>ate</strong> rice yesterday.', 'He <strong>went</strong> to school.', 'They <strong>won</strong> the match.'] },
            { name: 'Past Continuous', structure: 'Subject + was / were + V-ing', use: 'Action in progress at a specific past time', examples: ['She <strong>was sleeping</strong> when I called.', 'They <strong>were playing</strong> at 5 PM.'] },
            { name: 'Past Perfect', structure: 'Subject + had + V3', use: 'Action completed before another past action', examples: ['She <strong>had eaten</strong> before I arrived.', 'He <strong>had left</strong> by the time we came.'] },
            { name: 'Past Perfect Continuous', structure: 'Subject + had been + V-ing', use: 'Ongoing action before a specific past moment', examples: ['She <strong>had been working</strong> for five hours.', 'He <strong>had been waiting</strong> since noon.'] }
          ]
        },
        {
          id: 't3', title: 'Future Tenses', type: 'tenses',
          items: [
            { name: 'Simple Future', structure: 'Subject + will + V1', use: 'Future decisions, promises, predictions', examples: ['She <strong>will eat</strong> rice tomorrow.', 'I <strong>will call</strong> you tonight.', 'It <strong>will rain</strong> soon.'] },
            { name: 'Future Continuous', structure: 'Subject + will be + V-ing', use: 'Action in progress at a specific future time', examples: ['She <strong>will be eating</strong> at noon.', 'I <strong>will be travelling</strong> next week.'] },
            { name: 'Future Perfect', structure: 'Subject + will have + V3', use: 'Action completed before a specific future time', examples: ['She <strong>will have eaten</strong> by 2 PM.', 'They <strong>will have finished</strong> before we arrive.'] },
            { name: 'Future Perfect Continuous', structure: 'Subject + will have been + V-ing', use: 'Duration of action up to a future point', examples: ['She <strong>will have been studying</strong> for 3 hours by then.'] }
          ]
        }
      ]
    },
    {
      id: 'articles', title: 'Articles', icon: '📌', desc: 'A, An, The — small but powerful words that change meaning', color: '#06b6d4',
      sections: [
        {
          id: 'ar1', title: 'The Four Article Types', type: 'article-list',
          items: [
            { name: 'A', color: '#6366f1', rule: 'Before words starting with a <strong>consonant sound</strong>', examples: ['a dog', 'a book', 'a car', 'a university (starts with "yu" sound)', 'a one-way street'], note: '"A" means one of many. It comes from the Old English word for "one".' },
            { name: 'AN', color: '#8b5cf6', rule: 'Before words starting with a <strong>vowel sound</strong> (a, e, i, o, u)', examples: ['an apple', 'an egg', 'an idea', 'an hour (the H is silent)', 'an umbrella', 'an honest man'], note: 'The SOUND matters, not the spelling. "An hour" because it sounds like "an our".' },
            { name: 'THE', color: '#06b6d4', rule: 'For <strong>specific or unique</strong> nouns both speaker and listener know about', examples: ['the sun', 'the moon', 'the Taj Mahal', 'Please close the door.', 'the best student in class', 'the Prime Minister'], note: 'Use THE for the second mention, superlatives, unique things, and specific things.' },
            { name: 'ZERO (no article)', color: '#10b981', rule: 'For <strong>plural general nouns</strong>, uncountable nouns, proper nouns, most places', examples: ['Dogs are loyal. (general category)', 'She drinks water.', 'India is beautiful.', 'He goes to school.', 'Life is beautiful.'], note: 'No article when speaking about a general group or concept.' }
          ]
        },
        {
          id: 'ar2', title: 'Common Article Mistakes', type: 'mistakes',
          items: [
            { wrong: '❌ She is doctor.', right: '✅ She is a doctor.', tip: 'Always use "a/an" with professions when talking about someone\'s job.' },
            { wrong: '❌ He is best player in team.', right: '✅ He is the best player in the team.', tip: 'Use "the" with superlatives (best, worst, tallest, most beautiful).' },
            { wrong: '❌ I saw a movie. A movie was very good.', right: '✅ I saw a movie. The movie was very good.', tip: 'First mention → use "a". Second mention (now specific) → use "the".' },
            { wrong: '❌ Please give me an water.', right: '✅ Please give me some water.', tip: 'Water is uncountable — it cannot use a/an. Use "some" or no article.' },
            { wrong: '❌ The honesty is best policy.', right: '✅ Honesty is the best policy.', tip: 'Abstract nouns in general → no article. But "the best" has "the" because of the superlative.' }
          ]
        }
      ]
    },
    {
      id: 'prepositions', title: 'Prepositions', icon: '🔗', desc: 'Words that show relationships of place, time, and direction', color: '#10b981',
      sections: [
        {
          id: 'p1', title: 'Prepositions of Place', type: 'prep-table',
          rows: [
            { word: 'in', rule: 'Inside an enclosed space', example: 'The milk is in the fridge.' },
            { word: 'on', rule: 'Touching a surface', example: 'The book is on the table.' },
            { word: 'at', rule: 'At a specific point or location', example: 'She is at the bus stop.' },
            { word: 'above', rule: 'Higher than, not touching', example: 'The fan is above the bed.' },
            { word: 'below', rule: 'Lower than something', example: 'Fish swim below the surface.' },
            { word: 'behind', rule: 'At the back of', example: 'The keys are behind the door.' },
            { word: 'between', rule: 'In the middle of two items', example: 'She sat between her parents.' },
            { word: 'near / next to', rule: 'Close to', example: 'The school is near the park.' },
            { word: 'under / beneath', rule: 'Directly below and covered by', example: 'The cat is under the table.' },
            { word: 'opposite', rule: 'Facing, on the other side', example: 'The hospital is opposite the market.' }
          ]
        },
        {
          id: 'p2', title: 'Prepositions of Time', type: 'prep-table',
          rows: [
            { word: 'at', rule: 'Specific time / festivals', example: 'School starts at 8 AM. We celebrate at Diwali.' },
            { word: 'on', rule: 'Days and specific dates', example: 'We play on Sundays. / on 15th August' },
            { word: 'in', rule: 'Months, years, seasons, centuries', example: 'In July. / In 2023. / In winter. / In the 21st century.' },
            { word: 'since', rule: 'From a past point until now', example: 'I have lived here since 2010.' },
            { word: 'for', rule: 'Duration of time', example: 'She studied for three hours.' },
            { word: 'by', rule: 'Deadline — not later than', example: 'Submit the report by Friday.' },
            { word: 'until / till', rule: 'Up to a certain time', example: 'Wait until 5 PM.' },
            { word: 'during', rule: 'Throughout a period', example: 'It rained during the match.' },
            { word: 'before / after', rule: 'Earlier than / later than', example: 'Eat before the meeting. / Call me after 6.' }
          ]
        },
        {
          id: 'p3', title: 'Common Preposition Mistakes', type: 'mistakes',
          items: [
            { wrong: '❌ She is married with him.', right: '✅ She is married to him.', tip: '"Married to" is the correct phrase. "With" implies something else.' },
            { wrong: '❌ He is good in English.', right: '✅ He is good at English.', tip: 'Use "good at" for skills and subjects.' },
            { wrong: '❌ She arrived to the airport.', right: '✅ She arrived at the airport.', tip: 'Use "arrive at" for specific places (buildings, stations). "Arrive in" for cities/countries.' },
            { wrong: '❌ I am angry on you.', right: '✅ I am angry with you.', tip: 'Use "angry with" a person. "Angry about" a situation.' },
            { wrong: '❌ He is interested in doing business.', right: '✅ He is interested in doing business. ✓', tip: 'This is correct! "Interested in" is the right collocation.' }
          ]
        }
      ]
    },
    {
      id: 'sentences', title: 'Sentences', icon: '🏗️', desc: 'How to build correct, natural English sentences', color: '#f59e0b',
      sections: [
        {
          id: 'sf1', title: 'Basic Sentence Structure (SVO)', type: 'breakdown',
          intro: 'Most English sentences follow <strong>Subject → Verb → Object</strong> order. This is the foundation of English grammar.',
          items: [
            { label: 'Simple SVO', sentence: 'Ravi eats mangoes.', parts: ['Ravi = Subject (who?)', 'eats = Verb (what action?)', 'mangoes = Object (what?)'] },
            { label: 'With Adverb', sentence: 'She runs quickly every morning.', parts: ['She = Subject', 'runs = Verb', 'quickly = Adverb (how?)', 'every morning = Time phrase'] },
            { label: 'With Future', sentence: 'He will call me tomorrow.', parts: ['He = Subject', 'will call = Verb phrase', 'me = Object', 'tomorrow = Time'] }
          ]
        },
        {
          id: 'sf2', title: 'Four Types of Sentences', type: 'sent-types',
          items: [
            { name: 'Declarative', icon: '📢', desc: 'States a fact or opinion. Ends with a full stop.', pattern: 'Subject + Verb + ...', example: 'She is an excellent teacher.' },
            { name: 'Interrogative', icon: '❓', desc: 'Asks a question. Ends with a question mark.', pattern: 'Auxiliary + Subject + Verb + ?', example: 'Is she an excellent teacher?' },
            { name: 'Imperative', icon: '👆', desc: 'Gives a command, request, or instruction. Subject "you" is implied.', pattern: 'Verb + Object / Complement', example: 'Please open the window.' },
            { name: 'Exclamatory', icon: '❗', desc: 'Expresses strong emotion or surprise. Ends with !', pattern: 'What a/an + Adj + Noun! or How + Adj!', example: 'What a brilliant idea! / How fast she runs!' }
          ]
        },
        {
          id: 'sf3', title: 'Question Formation', type: 'q-types',
          items: [
            { name: 'Yes / No Questions', rule: 'Auxiliary Verb + Subject + Main Verb?', examples: ['Is she happy?', 'Do you eat rice?', 'Can he swim?', 'Have they left already?', 'Will you come tomorrow?'] },
            { name: 'Wh- Questions (What, Where, When, Who, Why, How)', rule: 'Wh-word + Auxiliary + Subject + Verb?', examples: ['Where do you live?', 'What is she eating?', 'Why did he go there?', 'How does this machine work?', 'When will you come?'] },
            { name: 'Tag Questions', rule: 'Positive statement → negative tag | Negative statement → positive tag', examples: ["You like cricket, don't you?", "She isn't here, is she?", "He passed the exam, didn't he?", "They won't come, will they?"] }
          ]
        },
        {
          id: 'sf4', title: 'Negative Sentences', type: 'neg-table',
          intro: 'Place <strong>"not"</strong> after the auxiliary verb. If there is no auxiliary, add <em>do/does/did</em>.',
          rows: [
            { positive: 'She eats rice.', negative: 'She does <strong>not</strong> eat rice.' },
            { positive: 'He is running.', negative: 'He is <strong>not</strong> running.' },
            { positive: 'They have finished.', negative: 'They have <strong>not</strong> finished.' },
            { positive: 'I will come.', negative: 'I will <strong>not</strong> come.' },
            { positive: 'She went to school.', negative: 'She did <strong>not</strong> go to school.' }
          ]
        },
        {
          id: 'sf5', title: 'Simple, Compound & Complex Sentences', type: 'compound-list',
          items: [
            { type: 'Simple', icon: '1️⃣', desc: 'One independent clause (one subject + one predicate)', example: 'She sings.' },
            { type: 'Compound', icon: '2️⃣', desc: 'Two independent clauses joined by: <em>and, but, or, so, yet, for</em>', example: 'She sings, and he plays guitar.' },
            { type: 'Complex', icon: '🌀', desc: 'Main clause + dependent clause using: <em>because, when, if, although, since, unless</em>', example: 'She sings because she loves music.' },
            { type: 'Compound-Complex', icon: '🔀', desc: 'Two main clauses + one dependent clause', example: 'She sings and he dances because they both love music.' }
          ]
        }
      ]
    },
    {
      id: 'pos', title: 'Parts of Speech', icon: '🧩', desc: 'The 8 building blocks of every English sentence', color: '#ef4444',
      sections: [
        {
          id: 'pos1', title: 'The 8 Parts of Speech', type: 'pos-grid',
          parts: [
            { name: 'Noun', icon: '👤', color: '#6366f1', desc: 'Names a person, place, thing, or idea.', examples: ['teacher', 'Mumbai', 'happiness', 'cricket'], sentence: 'The <strong>teacher</strong> played <strong>cricket</strong> in <strong>Mumbai</strong>.' },
            { name: 'Pronoun', icon: '🔄', color: '#8b5cf6', desc: 'Replaces a noun to avoid repetition.', examples: ['I, you, he, she', 'we, they, it', 'him, her, them'], sentence: '<strong>She</strong> told <strong>him</strong> that <strong>they</strong> were ready.' },
            { name: 'Verb', icon: '⚡', color: '#06b6d4', desc: 'Shows action, occurrence, or state of being.', examples: ['run, eat, write', 'is, am, are', 'become, seem'], sentence: 'She <strong>runs</strong> and <strong>is</strong> very fast.' },
            { name: 'Adjective', icon: '🎨', color: '#f59e0b', desc: 'Describes or modifies a noun or pronoun.', examples: ['tall, beautiful', 'three, first', 'red, happy, brave'], sentence: 'The <strong>tall</strong>, <strong>brave</strong> soldier won.' },
            { name: 'Adverb', icon: '📐', color: '#10b981', desc: 'Modifies a verb, adjective, or another adverb. Often ends in -ly.', examples: ['quickly, happily', 'very, quite, too', 'never, here, soon'], sentence: 'She ran <strong>very</strong> <strong>quickly</strong>.' },
            { name: 'Preposition', icon: '🔗', color: '#3b82f6', desc: 'Shows the relationship between nouns and the rest of the sentence.', examples: ['in, on, at, from', 'with, for, by, about', 'above, below, near'], sentence: 'The book is <strong>on</strong> the table <strong>near</strong> the window.' },
            { name: 'Conjunction', icon: '🤝', color: '#ec4899', desc: 'Joins words, phrases, or clauses.', examples: ['and, but, or, so', 'because, when, if', 'although, since, until'], sentence: 'She studied hard <strong>but</strong> failed <strong>because</strong> she was nervous.' },
            { name: 'Interjection', icon: '❗', color: '#ef4444', desc: 'Expresses sudden emotion. Usually followed by ! or ,', examples: ['Oh!, Wow!, Ouch!', 'Hey!, Hurray!', 'Alas!, Well...'], sentence: '<strong>Wow!</strong> That was a brilliant answer.' }
          ]
        },
        {
          id: 'pos2', title: 'Quick Identification Guide', type: 'ident-table',
          rows: [
            { pos: 'Noun', question: 'Who or What?', clue: 'Can add "the" before it', example: 'the teacher, the idea' },
            { pos: 'Verb', question: 'What action or state?', clue: 'Changes with tense (eat → ate → eaten)', example: 'runs, ran, will run' },
            { pos: 'Adjective', question: 'What kind? How many?', clue: 'Comes before a noun or after a linking verb', example: 'a tall man; she is tall' },
            { pos: 'Adverb', question: 'How? When? Where?', clue: 'Often ends in -ly; can move in sentence', example: 'runs quickly; very tall' },
            { pos: 'Pronoun', question: 'Replaces which noun?', clue: 'I, you, he, she, it, we, they', example: 'She (= the teacher) spoke.' },
            { pos: 'Preposition', question: 'What relationship?', clue: 'Always followed by a noun/pronoun phrase', example: 'in the room, at 8 PM' },
            { pos: 'Conjunction', question: 'What does it join?', clue: 'Connects words, phrases, or clauses', example: 'She sings and he dances.' },
            { pos: 'Interjection', question: 'What emotion?', clue: 'Stands alone, followed by ! or ,', example: 'Wow! Oh, that\'s nice.' }
          ]
        }
      ]
    },

    // ---- Common Errors ----
    {
      id: 'errors', title: 'Common Errors', icon: '❌', desc: 'The most common spoken English mistakes — and exactly how to fix them', color: '#ef4444',
      sections: [
        {
          id: 'err1', title: 'Stative Verbs — Never Use With -ing',
          type: 'mistakes',
          note: 'Stative verbs describe states, not actions. They are NEVER used with -ing (present continuous).',
          intro: 'Verbs like know, have, want, like, love, hate, see, hear, seem, understand, believe, remember — these describe states that simply exist. Do not add -ing to them.',
          items: [
            { wrong: 'I am knowing the answer.', right: 'I know the answer.', why: '"Know" is a stative verb — it describes a mental state, not an ongoing action.' },
            { wrong: 'She is having a car.', right: 'She has a car.', why: '"Have" (possession) is stative. Use simple present, not continuous.' },
            { wrong: 'He is seeming tired today.', right: 'He seems tired today.', why: '"Seem" describes an appearance or state — never use it with -ing.' },
            { wrong: 'I am liking this movie.', right: 'I like this movie.', why: '"Like" and "love" are stative — they never take the -ing form in standard English.' },
            { wrong: 'They are wanting to leave.', right: 'They want to leave.', why: '"Want" expresses a desire (a state), not an action in progress.' },
            { wrong: 'Are you understanding me?', right: 'Do you understand me?', why: '"Understand" is a mental state verb. Use simple present, not continuous.' },
            { wrong: 'I am believing you.', right: 'I believe you.', why: '"Believe" expresses a mental state — always use simple present.' },
            { wrong: 'She is remembering his name.', right: 'She remembers his name.', why: '"Remember" is stative — it describes a mental state, not an ongoing action.' }
          ]
        },
        {
          id: 'err2', title: 'Subject-Verb Agreement',
          type: 'mistakes',
          note: 'The verb must always agree with the subject. "Everyone", "each", and "neither" are always singular — a common trap.',
          intro: 'When the subject is singular, use a singular verb. Watch out for tricky subjects like "everyone", "each", "neither", and collective nouns like "team" and "family".',
          items: [
            { wrong: 'Everyone have finished the test.', right: 'Everyone has finished the test.', why: '"Everyone", "someone", "anyone", "no one" are always singular — use "has", not "have".' },
            { wrong: 'The team are playing well.', right: 'The team is playing well.', why: 'Collective nouns (team, group, family, class) take a singular verb in Indian/formal English.' },
            { wrong: 'Neither of the answers are correct.', right: 'Neither of the answers is correct.', why: '"Neither" is singular. Use a singular verb even when followed by "of + plural noun".' },
            { wrong: 'Each of the students have a book.', right: 'Each of the students has a book.', why: '"Each" is always singular — it refers to every individual one separately.' },
            { wrong: 'The news are shocking.', right: 'The news is shocking.', why: '"News" looks plural but is an uncountable noun — always use it with a singular verb.' },
            { wrong: 'My family are coming tomorrow.', right: 'My family is coming tomorrow.', why: 'Treat family, class, and committee as singular in formal and Indian English.' }
          ]
        },
        {
          id: 'err3', title: 'Wrong Tense Usage',
          type: 'mistakes',
          note: 'Present Perfect vs Simple Past is the most common tense mistake. Use Present Perfect for actions connected to now. Use Simple Past for completed actions at a specific past time.',
          intro: '"Since" always needs Present Perfect. "Yesterday", "last week", "in 2020" always need Simple Past. Getting this right instantly improves your English.',
          items: [
            { wrong: 'I am here since morning.', right: 'I have been here since morning.', why: '"Since" requires Present Perfect — not Present Continuous.' },
            { wrong: 'She is gone to the market.', right: 'She has gone to the market.', why: 'Use "has/have gone" (Present Perfect) — "is gone" is not standard English.' },
            { wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.', why: '"Yesterday" is a specific past time → use Simple Past, not Present Perfect.' },
            { wrong: 'I am working here for 5 years.', right: 'I have been working here for 5 years.', why: '"For 5 years" with an ongoing action requires Present Perfect Continuous.' },
            { wrong: 'Did you ate already?', right: 'Have you eaten already? / Did you eat already?', why: 'Never combine "did" with a past tense verb. Use "did + base form" or "have + past participle".' },
            { wrong: 'I will call you after I will reach.', right: 'I will call you after I reach.', why: 'In time clauses (after, when, before, once), use Simple Present — not Future tense.' },
            { wrong: 'He is coming just now.', right: 'He just came. / He has just come.', why: '"Just now" in Indian English means a moment ago — use Simple Past or Present Perfect.' },
            { wrong: 'We are discussing this since an hour.', right: 'We have been discussing this for an hour.', why: 'Use "for" with duration and "since" with a point in time. Use Present Perfect Continuous here.' }
          ]
        },
        {
          id: 'err4', title: 'Redundant & Incorrect Phrases',
          type: 'mistakes',
          note: 'These phrases are either grammatically wrong or unnecessarily repetitive. They are extremely common in Indian spoken English.',
          intro: 'A redundant phrase says the same thing twice. Learn these six — avoiding them will immediately make your English sound more professional.',
          items: [
            { wrong: 'Please revert back to me.', right: 'Please revert to me. / Please reply to me.', why: '"Revert" already means "go back" — adding "back" is redundant.' },
            { wrong: 'Return back home.', right: 'Return home. / Go back home.', why: '"Return" already means coming back — "back" is redundant.' },
            { wrong: 'He is more superior to others.', right: 'He is superior to others.', why: '"Superior" is already comparative — never say "more superior".' },
            { wrong: 'The reason is because…', right: 'The reason is that… / It is because…', why: '"The reason is that" OR "because" — using both together is redundant.' },
            { wrong: 'I will do the needful.', right: 'I will take care of it. / I will do what is needed.', why: '"Do the needful" is an outdated Indian English expression — avoid it in modern professional contexts.' },
            { wrong: 'Please prepone the meeting.', right: 'Please move the meeting earlier. / Please bring it forward.', why: '"Prepone" is not a word in standard English. Use "move it earlier" or "bring it forward".' }
          ]
        },
        {
          id: 'err5', title: 'Formal vs Informal Register',
          type: 'mistakes',
          note: 'Using casual language in formal situations is one of the most damaging English errors in professional settings.',
          intro: 'Register is the level of formality in your speech. In job interviews, emails to managers, or presentations — always use formal English.',
          items: [
            { wrong: 'I wanna discuss this. (in a job interview)', right: 'I would like to discuss this with you.', why: '"Wanna" (want to) is informal. Avoid contractions and slang in professional settings.' },
            { wrong: 'Yeah, no problem. (to your manager)', right: 'Yes, of course. / Certainly, I will handle that.', why: '"Yeah" is casual. In professional settings, say "Yes" and use complete, polite sentences.' },
            { wrong: 'ASAP send me the report. (to a client)', right: 'Could you please send me the report at your earliest convenience?', why: 'Direct commands sound rude to clients. Use polite, indirect requests.' },
            { wrong: 'Anyways, moving on… (in a formal presentation)', right: 'Moving on… / Let us now turn to…', why: '"Anyways" is informal and grammatically incorrect. Use "anyway" or "moving on" instead.' }
          ]
        }
      ]
    },

    // ---- Idioms & Phrasal Verbs ----
    {
      id: 'idioms', title: 'Idioms & Phrases', icon: '💬', desc: 'Master high-frequency idioms and phrasal verbs for natural, confident English', color: '#f59e0b',
      sections: [
        {
          id: 'id1', title: 'Essential English Idioms',
          type: 'type-cards',
          note: 'An idiom is a phrase whose meaning cannot be guessed from the individual words. These 20 appear constantly in everyday English conversations.',
          items: [
            { icon: '🧊', name: 'Break the ice', desc: 'Start a conversation or ease tension in a social situation.', tags: ['She told a joke to break the ice at the meeting.', 'He broke the ice by asking about her hometown.'] },
            { icon: '🌧️', name: 'Under the weather', desc: 'Feeling slightly ill or unwell.', tags: ['I\'m feeling under the weather today — I may skip the gym.', 'She looked under the weather, so we sent her home early.'] },
            { icon: '🌙', name: 'Once in a blue moon', desc: 'Very rarely; almost never happens.', tags: ['She visits us once in a blue moon.', 'He only cooks once in a blue moon.'] },
            { icon: '💡', name: 'Hit the nail on the head', desc: 'Say or identify exactly the right thing.', tags: ['You hit the nail on the head — that is exactly the problem.', 'Her analysis really hit the nail on the head.'] },
            { icon: '🦷', name: 'Bite the bullet', desc: 'Endure a painful or difficult situation with courage.', tags: ['Just bite the bullet and finish the assignment.', 'He bit the bullet and went to the dentist.'] },
            { icon: '🛋️', name: 'Sit on the fence', desc: 'Avoid taking sides or making a decision; stay neutral.', tags: ['Stop sitting on the fence — tell us what you think!', 'Politicians often sit on the fence on controversial issues.'] },
            { icon: '🎯', name: 'Miss the point', desc: 'Fail to understand the most important part of something.', tags: ['I think you\'re missing the point — it\'s not about money.', 'He completely missed the point of the lesson.'] },
            { icon: '🌊', name: 'Get out of hand', desc: 'Become impossible to control; go beyond acceptable limits.', tags: ['The argument got out of hand quickly.', 'The crowd got out of hand when the match was delayed.'] },
            { icon: '🔥', name: 'Burn bridges', desc: 'Permanently damage a relationship or close off an opportunity.', tags: ['Don\'t burn bridges with your previous employer.', 'She burned bridges by leaving without giving notice.'] },
            { icon: '💎', name: 'Cost an arm and a leg', desc: 'Be extremely expensive.', tags: ['That new phone costs an arm and a leg.', 'Studying abroad can cost an arm and a leg.'] },
            { icon: '🔨', name: 'Hit the books', desc: 'Study hard; begin studying seriously.', tags: ['The exam is tomorrow — I need to hit the books.', 'She hit the books all weekend before the interview.'] },
            { icon: '🚂', name: 'Get the ball rolling', desc: 'Start a process or activity; initiate something.', tags: ['Let\'s get the ball rolling on the new project.', 'She got the ball rolling by sending the first email.'] },
            { icon: '🌅', name: 'See eye to eye', desc: 'Agree with someone; share the same view.', tags: ['We don\'t always see eye to eye, but we respect each other.', 'The two managers finally saw eye to eye on the budget.'] },
            { icon: '⏰', name: 'Beat around the bush', desc: 'Avoid the main topic without addressing it directly.', tags: ['Stop beating around the bush — just tell me the truth.', 'He kept beating around the bush instead of giving a clear answer.'] },
            { icon: '🎭', name: 'The ball is in your court', desc: 'It is now your responsibility to take action.', tags: ['I\'ve made my offer — the ball is now in your court.', 'We submitted the proposal; the ball is in their court.'] },
            { icon: '🔍', name: 'Read between the lines', desc: 'Understand the hidden or implied meaning in what is said.', tags: ['Read between the lines — she is clearly upset about it.', 'You need to read between the lines to understand his real intention.'] },
            { icon: '🤝', name: 'Bury the hatchet', desc: 'End a conflict and make peace with someone.', tags: ['After years of fighting, the brothers finally buried the hatchet.', 'It\'s time to bury the hatchet and move forward.'] },
            { icon: '🏃', name: 'Jump to conclusions', desc: 'Make a judgement too quickly without enough evidence.', tags: ['Don\'t jump to conclusions before hearing his side of the story.', 'She jumped to conclusions and accused the wrong person.'] },
            { icon: '🌟', name: 'Go the extra mile', desc: 'Make more effort than expected; do more than required.', tags: ['She always goes the extra mile for her students.', 'If you go the extra mile, your boss will notice.'] },
            { icon: '🌱', name: 'Bite off more than you can chew', desc: 'Take on more responsibility than you can handle.', tags: ['He bit off more than he could chew by taking three projects at once.', 'Don\'t bite off more than you can chew this semester.'] }
          ]
        },
        {
          id: 'id2', title: 'Essential Phrasal Verbs',
          type: 'kv-table',
          note: 'Phrasal verbs combine a verb + preposition/adverb to create a completely new meaning. They are extremely common in spoken English.',
          headers: ['Phrasal Verb', 'Meaning', 'Example Sentence'],
          rows: [
            ['give up', 'Stop trying; abandon a goal', '"Don\'t give up — you are almost there!"'],
            ['look up', 'Search for information', '"Look up the word in the dictionary."'],
            ['run out of', 'Have no more of something left', '"We ran out of milk — can you buy some?"'],
            ['put off', 'Delay or postpone', '"Don\'t put off the work you can do today."'],
            ['bring up', 'Mention a topic; raise a child', '"She brought up an important point in the meeting."'],
            ['turn down', 'Reject or refuse', '"He turned down the job offer."'],
            ['call off', 'Cancel something planned', '"They called off the match due to rain."'],
            ['figure out', 'Find a solution; understand after thinking', '"Can you figure out what went wrong?"'],
            ['get along with', 'Have a good relationship with someone', '"She gets along well with her colleagues."'],
            ['come across', 'Find or meet unexpectedly', '"I came across an old photo while cleaning."'],
            ['carry on', 'Continue doing something', '"Carry on with your work — I\'ll be back soon."'],
            ['point out', 'Draw attention to something', '"She pointed out the mistake in my report."'],
            ['go through', 'Experience something difficult; examine carefully', '"He went through a tough time last year."'],
            ['take over', 'Assume control or responsibility', '"She will take over the project next month."'],
            ['set up', 'Establish; arrange; prepare', '"They set up a new company last year."'],
            ['break down', 'Stop working; become very upset', '"The car broke down on the highway."'],
            ['catch up', 'Reach the same level; update someone on news', '"I need to catch up on my reading."'],
            ['stand out', 'Be noticeably better or different', '"Her confidence made her stand out in the interview."'],
            ['work out', 'Exercise; find a solution; result successfully', '"Things will work out fine — don\'t worry."'],
            ['hold on', 'Wait; keep a grip on something', '"Hold on — I\'ll get your file right away."']
          ]
        }
      ]
    },

    // ---- Pronunciation Guide ----
    {
      id: 'pronunciation', title: 'Pronunciation', icon: '🗣️', desc: 'Master English vowel sounds, word stress rules, and fix common mispronunciations', color: '#10b981',
      sections: [
        {
          id: 'pr1', title: 'English Vowel Sounds',
          type: 'kv-table',
          note: 'English has 12 pure vowel sounds. Many Indian-language speakers confuse short and long vowels — this is the single biggest cause of pronunciation errors.',
          headers: ['Sound & Symbol', 'Key Words', 'Practise These'],
          rows: [
            ['/iː/ — Long EE', '"see", "tea", "meet"', 'feet, keep, people, field, machine'],
            ['/ɪ/ — Short I', '"sit", "bit", "him"', 'big, hit, listen, build, busy'],
            ['/e/ — Short E', '"bed", "red", "said"', 'head, friend, many, health, any'],
            ['/æ/ — Flat A', '"cat", "man", "bad"', 'hat, happy, have, black, hand'],
            ['/ɑː/ — Long AH', '"car", "far", "heart"', 'father, palm, laugh, bath, dance'],
            ['/ɒ/ — Short O', '"hot", "top", "what"', 'stop, lot, clock, office, problem'],
            ['/ɔː/ — Long AW', '"all", "saw", "more"', 'ball, walk, thought, water, floor'],
            ['/ʊ/ — Short OO', '"book", "good", "put"', 'look, push, would, full, woman'],
            ['/uː/ — Long OO', '"food", "moon", "blue"', 'school, move, fruit, through, shoe'],
            ['/ʌ/ — Short U', '"but", "cup", "love"', 'fun, month, blood, tough, country'],
            ['/ɜː/ — ER sound', '"bird", "her", "word"', 'turn, learn, first, world, earth'],
            ['/ə/ — Schwa (most common!)', '"about", "the", "ago"', 'again, problem, lesson, family, sofa']
          ]
        },
        {
          id: 'pr2', title: 'Word Stress Rules',
          type: 'type-cards',
          note: 'English is a stress-timed language. The stressed syllable is said LOUDER, LONGER, and at a HIGHER pitch. Wrong stress makes words unrecognisable even when spelled correctly.',
          items: [
            { icon: '🏷️', name: 'Two-syllable Nouns → Stress First', desc: 'For most two-syllable nouns, stress the FIRST syllable.', tags: ['PRE-sent (a gift)', 'RE-cord (a vinyl/data record)', 'OB-ject (a thing)', 'PER-mit (a licence)', 'IN-crease (a rise)'] },
            { icon: '⚡', name: 'Two-syllable Verbs → Stress Second', desc: 'The same word used as a verb stresses the SECOND syllable.', tags: ['pre-SENT (to give/show)', 're-CORD (to capture sound)', 'ob-JECT (to disagree)', 'per-MIT (to allow)', 'in-CREASE (to make bigger)'] },
            { icon: '🔤', name: '-tion / -sion → Stress the Syllable Before', desc: 'For words ending in -tion or -sion, stress the syllable immediately before the suffix.', tags: ['pro-NUN-ci-A-tion', 'ed-u-CA-tion', 'in-for-MA-tion', 'com-mu-ni-CA-tion', 'con-cen-TRA-tion'] },
            { icon: '📏', name: 'Three-syllable Words → Often Stress Middle', desc: 'Many three-syllable words stress the second (middle) syllable.', tags: ['to-MO-rrow', 'im-POR-tant', 'ex-AM-ple', 're-MEM-ber', 'be-HAVE-iour'] },
            { icon: '🔗', name: 'Compound Nouns → Stress the First Word', desc: 'When two nouns are joined, stress the FIRST part.', tags: ['TOOTH-brush', 'BLACK-board', 'HAND-bag', 'SUN-flower', 'BIRTH-day'] }
          ]
        },
        {
          id: 'pr3', title: 'Commonly Mispronounced Words',
          type: 'mistakes',
          note: 'These 15 words are regularly mispronounced by Indian English speakers. Learning the correct form will immediately make your speech clearer.',
          intro: 'The "wrong" column shows how these are often said. The "right" column shows the natural English pronunciation. Practise using the TTS button on any lesson page.',
          items: [
            { wrong: 'VEJ-i-ta-bul (5 syllables)', right: 'VEJ-tuh-bul (3 syllables)', why: 'Vegetable has only 3 syllables in natural speech — the middle syllables are reduced.' },
            { wrong: 'COM-for-ta-bul (4 syllables)', right: 'CUMF-ter-bul (3 syllables)', why: 'The "or" sound disappears in natural speech — "COMFterbul".' },
            { wrong: 'WED-nes-day (pronouncing the D)', right: 'WENZ-day (2 syllables, D is silent)', why: 'The "d" in Wednesday is completely silent — say "WENZ-day".' },
            { wrong: 'pro-NOUN-see-AY-shun', right: 'pro-NUN-see-AY-shun', why: 'It\'s "NUN" not "NOUN" — proNUNciation, not proNOUNciation.' },
            { wrong: 'LI-bree (2 syllables)', right: 'LI-brair-ee (3 syllables)', why: 'Library has 3 syllables — both R sounds matter: LI-brair-ee.' },
            { wrong: 'EYE-lund (sounding the S)', right: 'EYE-lund (S is silent)', why: 'The "s" in island is completely silent — "EYE-lund".' },
            { wrong: 'ask-ED (sounding the D as a separate syllable)', right: 'ASKT (one syllable)', why: 'In natural speech "asked" sounds like "ASKT" — the -ed reduces to a T sound.' },
            { wrong: 'hi-POTH-e-SIS (wrong stress)', right: 'hy-POTH-e-sis (stress on 2nd syllable)', why: 'Hypothesis: hy-POTH-esis — the stress falls firmly on POTH.' },
            { wrong: 'PREJ-oo-dis', right: 'PREJ-uh-dis', why: 'The middle vowel is a schwa: PREJ-uh-dis. Not "oo" — "uh".' },
            { wrong: 'REL-e-vant (4 syllables)', right: 'REL-uh-vunt (3 syllables)', why: 'The middle "e" reduces to a schwa — REL-uh-vunt.' },
            { wrong: 'spec-IF-ic (stress on first)', right: 'spuh-SIF-ik (stress on second)', why: 'The stress is on the SECOND syllable: spe-CIF-ic.' },
            { wrong: 'FEB-roo-air-ee', right: 'FEB-yoo-air-ee (British) / FEB-roo-air-ee (American)', why: 'In British English the first R is often not pronounced — FEB-yoo-air-ee.' },
            { wrong: 'de-BIT (like debit card)', right: 'DEB-it (stress on first)', why: 'Debit stresses the FIRST syllable: DEB-it, not de-BIT.' },
            { wrong: 'IN-trest-ing (3 syllables)', right: 'IN-ter-est-ing (4 syllables)', why: 'Interesting has 4 syllables — IN-ter-est-ing. Don\'t drop the middle syllable.' },
            { wrong: 'CON-text (equal stress on both syllables)', right: 'CON-tekst (stress firmly on first)', why: 'The second syllable is very short: CON-tekst. The T blends in.' }
          ]
        }
      ]
    }
  ]
};

// ---- 2.1 Conversation Scenarios ----
const CONVERSATION_SCENARIOS = [
  {
    title: "At a Doctor's Clinic",
    icon: "🏥",
    difficulty: "Beginner",
    tag: "Health",
    dialogue: [
      { speaker: "Patient", line: "Good morning, Doctor. I have had a fever and sore throat since yesterday." },
      { speaker: "Doctor", line: "I see. Let me check your temperature first. Open your mouth, please." },
      { speaker: "Patient", line: "Is it serious, Doctor?" },
      { speaker: "Doctor", line: "Nothing to worry about. You have a mild throat infection. I will prescribe some antibiotics." },
      { speaker: "Patient", line: "Should I take rest, Doctor?" },
      { speaker: "Doctor", line: "Yes, please rest for two days, drink plenty of water, and avoid cold food." },
      { speaker: "Patient", line: "Thank you, Doctor. When should I come back?" },
      { speaker: "Doctor", line: "Come back after three days if you do not feel better." }
    ]
  },
  {
    title: "Job Interview",
    icon: "💼",
    difficulty: "Intermediate",
    tag: "Professional",
    dialogue: [
      { speaker: "Interviewer", line: "Good morning! Please have a seat. Could you introduce yourself briefly?" },
      { speaker: "Candidate", line: "Good morning! I am Priya. I have three years of experience in software development and I am passionate about building user-friendly applications." },
      { speaker: "Interviewer", line: "What would you say is your greatest strength?" },
      { speaker: "Candidate", line: "I believe my greatest strength is problem-solving. I enjoy breaking down complex issues into simple steps." },
      { speaker: "Interviewer", line: "Can you describe a challenge you faced at work and how you handled it?" },
      { speaker: "Candidate", line: "Certainly. Once our team had a tight deadline. I reorganised our tasks, held daily check-ins, and we delivered the project on time." },
      { speaker: "Interviewer", line: "Why do you want to join our company?" },
      { speaker: "Candidate", line: "Your company is known for innovation and employee growth. I would love to contribute and grow with your team." }
    ]
  },
  {
    title: "Asking for Directions",
    icon: "🗺️",
    difficulty: "Beginner",
    tag: "Daily Life",
    dialogue: [
      { speaker: "Tourist", line: "Excuse me, could you help me? I am looking for the city library." },
      { speaker: "Local", line: "Of course! Go straight down this road for about 200 metres." },
      { speaker: "Tourist", line: "Then what do I do?" },
      { speaker: "Local", line: "Turn left at the traffic light. You will see a big green building on your right." },
      { speaker: "Tourist", line: "Is it far from here?" },
      { speaker: "Local", line: "Not at all — about a five-minute walk." },
      { speaker: "Tourist", line: "Thank you so much! You have been very helpful." },
      { speaker: "Local", line: "Happy to help. Have a nice day!" }
    ]
  },
  {
    title: "Making a Phone Call",
    icon: "📱",
    difficulty: "Beginner",
    tag: "Daily Life",
    dialogue: [
      { speaker: "Caller", line: "Good afternoon. May I speak to Mr Sharma, please?" },
      { speaker: "Receptionist", line: "Good afternoon. Who is calling, please?" },
      { speaker: "Caller", line: "This is Anita Singh from ABC Solutions." },
      { speaker: "Receptionist", line: "One moment, please. I will transfer your call." },
      { speaker: "Mr Sharma", line: "Hello, Anita. How can I help you?" },
      { speaker: "Caller", line: "Hello, Mr Sharma. I am calling about the meeting scheduled for Thursday. Can we move it to Friday?" },
      { speaker: "Mr Sharma", line: "Friday works for me. Shall we say two o'clock?" },
      { speaker: "Caller", line: "Perfect. Thank you, Mr Sharma. I will send a calendar invite." }
    ]
  },
  {
    title: "Shopping & Bargaining",
    icon: "🛍️",
    difficulty: "Beginner",
    tag: "Daily Life",
    dialogue: [
      { speaker: "Customer", line: "How much is this kurta?" },
      { speaker: "Shopkeeper", line: "It is eight hundred rupees, sir." },
      { speaker: "Customer", line: "That is a bit expensive. Can you reduce the price a little?" },
      { speaker: "Shopkeeper", line: "I can give it to you for seven hundred and fifty. This is the best quality cotton." },
      { speaker: "Customer", line: "What if I take two? Will you give a better deal?" },
      { speaker: "Shopkeeper", line: "For two, I will make it thirteen hundred rupees — that saves you two hundred." },
      { speaker: "Customer", line: "Alright, that sounds fair. I will take two. Do you accept cards?" },
      { speaker: "Shopkeeper", line: "Yes, we accept all cards. Thank you for shopping with us!" }
    ]
  },
  {
    title: "Discussing a Problem at Work",
    icon: "🤝",
    difficulty: "Intermediate",
    tag: "Professional",
    dialogue: [
      { speaker: "Employee", line: "Do you have a few minutes? I wanted to discuss something about the project." },
      { speaker: "Manager", line: "Sure, have a seat. What is on your mind?" },
      { speaker: "Employee", line: "I am a bit concerned about the timeline. The requirements keep changing, which is affecting our progress." },
      { speaker: "Manager", line: "That is a valid concern. Can you give me a specific example?" },
      { speaker: "Employee", line: "Last week, the client requested two new features after we had already started coding." },
      { speaker: "Manager", line: "I understand. Let us set up a requirements-freeze deadline going forward." },
      { speaker: "Employee", line: "That would help a lot. Could we also have a weekly check-in with the client?" },
      { speaker: "Manager", line: "Excellent idea. I will organise that from next week. Thank you for raising this." }
    ]
  },
  {
    title: "At a Bank",
    icon: "🏦",
    difficulty: "Intermediate",
    tag: "Daily Life",
    dialogue: [
      { speaker: "Customer", line: "Good morning. I would like to open a savings account." },
      { speaker: "Banker", line: "Good morning! Certainly. May I have your identity proof and address proof, please?" },
      { speaker: "Customer", line: "I have my Aadhaar card and a recent electricity bill." },
      { speaker: "Banker", line: "That is fine. Please fill in this form with your personal details." },
      { speaker: "Customer", line: "What is the minimum balance requirement?" },
      { speaker: "Banker", line: "For a regular savings account, the minimum balance is one thousand rupees." },
      { speaker: "Customer", line: "Do I get an ATM card with this account?" },
      { speaker: "Banker", line: "Yes, your debit card will be delivered to your address within seven working days." }
    ]
  },
  {
    title: "Giving Feedback Politely",
    icon: "💬",
    difficulty: "Advanced",
    tag: "Professional",
    dialogue: [
      { speaker: "Manager", line: "I wanted to share some feedback on your presentation yesterday." },
      { speaker: "Employee", line: "Of course. I value your feedback." },
      { speaker: "Manager", line: "Your content was well-researched and the data was compelling. Well done on that." },
      { speaker: "Employee", line: "Thank you. I spent a lot of time on the research." },
      { speaker: "Manager", line: "One area to work on is the pace. You spoke quite fast and the audience had difficulty following some slides." },
      { speaker: "Employee", line: "I appreciate you pointing that out. I was nervous and rushed through some sections." },
      { speaker: "Manager", line: "Totally understandable. Try pausing after each key point — it gives the audience time to absorb the information." },
      { speaker: "Employee", line: "That is great advice. I will practise that for the next presentation. Thank you." }
    ]
  }
];

// ---- 2.2 English Registers ----
const REGISTER_DATA = [
  {
    situation: "Agreeing",
    icon: "👍",
    formal: "I concur with your assessment entirely.",
    conversational: "I completely agree with you.",
    casual: "Yeah, totally! You're so right."
  },
  {
    situation: "Declining",
    icon: "🙅",
    formal: "I regret that I am unable to attend.",
    conversational: "Sorry, I can't make it.",
    casual: "Nope, I'm out. Can't come."
  },
  {
    situation: "Requesting",
    icon: "🙏",
    formal: "I would be grateful if you could assist me with this matter.",
    conversational: "Could you please help me with this?",
    casual: "Hey, can you help me out?"
  },
  {
    situation: "Apologising",
    icon: "😔",
    formal: "I sincerely apologise for any inconvenience caused.",
    conversational: "I'm really sorry about that.",
    casual: "My bad! So sorry!"
  },
  {
    situation: "Complaining",
    icon: "😤",
    formal: "I wish to bring to your attention an issue regarding the service provided.",
    conversational: "I'm not happy with the service I received.",
    casual: "This is terrible! I'm so annoyed."
  },
  {
    situation: "Greeting",
    icon: "👋",
    formal: "Good morning. It is a pleasure to meet you.",
    conversational: "Hi! Nice to meet you.",
    casual: "Hey! What's up?"
  },
  {
    situation: "Giving Opinion",
    icon: "💡",
    formal: "In my considered opinion, this approach warrants further evaluation.",
    conversational: "I think we should look at this more carefully.",
    casual: "Honestly, I'm not sure about this one."
  },
  {
    situation: "Saying Goodbye",
    icon: "🚪",
    formal: "It was a pleasure speaking with you. I look forward to our next meeting.",
    conversational: "Great talking to you. See you next time!",
    casual: "Catch you later! Bye!"
  }
];

// ---- 2.3 Tongue Twisters ----
const TONGUE_TWISTERS = [
  { text: "She sells seashells by the seashore.", difficulty: "Easy" },
  { text: "Red lorry, yellow lorry.", difficulty: "Easy" },
  { text: "Peter Piper picked a peck of pickled peppers.", difficulty: "Easy" },
  { text: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?", difficulty: "Easy" },
  { text: "I saw Susie sitting in a shoeshine shop.", difficulty: "Easy" },
  { text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't fuzzy, was he?", difficulty: "Medium" },
  { text: "Betty Botter bought some butter, but she said the butter's bitter.", difficulty: "Medium" },
  { text: "How can a clam cram in a clean cream can?", difficulty: "Medium" },
  { text: "Six sick hicks nick six slick bricks with picks and sticks.", difficulty: "Medium" },
  { text: "A skunk sat on a stump. The stump thunk the skunk stunk. The skunk thunk the stump stunk.", difficulty: "Medium" },
  { text: "The sixth sick sheikh's sixth sheep's sick.", difficulty: "Hard" },
  { text: "Pad kid poured curd pulled cod. Pad kid poured curd pulled cod. Pad kid poured curd pulled cod.", difficulty: "Hard" },
  { text: "Which witch switched the Swiss wristwatches?", difficulty: "Hard" },
  { text: "Fred fed Ted bread, and Ted fed Fred bread.", difficulty: "Hard" },
  { text: "I wish to wish the wish you wish to wish, but if you wish the wish the witch wishes, I won't wish the wish you wish to wish.", difficulty: "Hard" }
];

// ---- 3.3 Daily Sentence Challenges ----
const SENTENCE_CHALLENGES = [
  { sentence: "She _____ to school every day.", blank: "goes", options: ["go", "goes", "gone"], hint: "Third-person singular present tense" },
  { sentence: "I have been waiting _____ two hours.", blank: "for", options: ["since", "for", "from"], hint: "Use 'for' with a duration of time" },
  { sentence: "Neither the students nor the teacher _____ present.", blank: "was", options: ["were", "was", "are"], hint: "With 'neither...nor', the verb agrees with the nearest subject" },
  { sentence: "Please _____ me know if you need help.", blank: "let", options: ["leave", "let", "make"], hint: "'Let me know' is the correct phrase" },
  { sentence: "The news _____ shocking.", blank: "was", options: ["were", "was", "are"], hint: "'News' is an uncountable noun — always singular" },
  { sentence: "He _____ his homework before dinner.", blank: "had finished", options: ["finished", "had finished", "has finished"], hint: "Past perfect shows an action completed before another past event" },
  { sentence: "I am looking forward _____ meeting you.", blank: "to", options: ["for", "to", "at"], hint: "'Look forward to' is the fixed phrase — 'to' is a preposition here" },
  { sentence: "_____ of the two options is acceptable.", blank: "Either", options: ["Any", "Either", "Both"], hint: "'Either' is used when referring to exactly two choices" },
  { sentence: "The book was _____ interesting that I finished it in one day.", blank: "so", options: ["such", "so", "too"], hint: "'So + adjective' expresses degree" },
  { sentence: "She is good _____ playing the piano.", blank: "at", options: ["in", "at", "on"], hint: "'Good at' is the correct preposition pairing" },
  { sentence: "They have lived here _____ 2010.", blank: "since", options: ["for", "since", "from"], hint: "Use 'since' with a specific point in time" },
  { sentence: "I _____ rather stay home than go out tonight.", blank: "would", options: ["will", "would", "should"], hint: "'Would rather' expresses preference" },
  { sentence: "The committee _____ reached a decision.", blank: "has", options: ["have", "has", "had"], hint: "In Indian/British English, collective nouns can take singular verbs" },
  { sentence: "He apologised _____ being late.", blank: "for", options: ["about", "for", "of"], hint: "'Apologise for' is the correct preposition pairing" },
  { sentence: "I wish I _____ taller.", blank: "were", options: ["was", "were", "am"], hint: "In wish clauses, use 'were' for all persons (subjunctive mood)" },
  { sentence: "Can you _____ the difference between these two sounds?", blank: "hear", options: ["listen", "hear", "feel"], hint: "'Hear' is passive perception; 'listen' is active and intentional" },
  { sentence: "She has been working here _____ five years.", blank: "for", options: ["since", "for", "during"], hint: "'For' is used with a period of time" },
  { sentence: "It is no use _____ over spilt milk.", blank: "crying", options: ["to cry", "crying", "cry"], hint: "After 'no use', use the -ing form (gerund)" },
  { sentence: "The harder you work, _____ you will succeed.", blank: "the more likely", options: ["more likely", "the more likely", "most likely"], hint: "The comparative 'the...the' structure requires 'the' before both parts" },
  { sentence: "I am used to _____ up early.", blank: "waking", options: ["wake", "waking", "woke"], hint: "'Used to + verb-ing' means it is a habit; 'used to + base verb' means a past habit" },
  { sentence: "She looked _____ to see who was calling.", blank: "around", options: ["around", "about", "round"], hint: "'Look around' means to look in different directions" },
  { sentence: "The train arrives _____ platform three.", blank: "at", options: ["on", "at", "in"], hint: "Use 'at' for specific points like platforms and stops" },
  { sentence: "He is _____ honest man.", blank: "an", options: ["a", "an", "the"], hint: "'Honest' starts with a vowel sound (/ɒnɪst/) so use 'an'" },
  { sentence: "By the time she arrived, the film _____.", blank: "had already started", options: ["already started", "had already started", "has already started"], hint: "Past perfect is used for the action that happened first" },
  { sentence: "I suggested _____ the meeting by an hour.", blank: "postponing", options: ["to postpone", "postponing", "postpone"], hint: "'Suggest' is followed by the gerund (-ing form)" },
  { sentence: "Could you speak _____? I cannot hear you clearly.", blank: "louder", options: ["loud", "louder", "loudly"], hint: "With verbs of sense and being, adjectives can modify the verb" },
  { sentence: "He has a lot of work _____ today.", blank: "to do", options: ["doing", "to do", "do"], hint: "Infinitive (to + verb) is used after 'work' to express purpose" },
  { sentence: "Neither of the answers _____ correct.", blank: "is", options: ["are", "is", "were"], hint: "'Neither of' takes a singular verb" },
  { sentence: "The police _____ investigating the case.", blank: "are", options: ["is", "are", "was"], hint: "'Police' is always plural in standard English" },
  { sentence: "I am familiar _____ this type of problem.", blank: "with", options: ["to", "with", "of"], hint: "'Familiar with' is the correct preposition pairing" }
];

// ---- 3.4 Word of the Day Seeds (offline fallback pool) ----
const WORD_OF_DAY_SEEDS = [
  { word: "Eloquent", pronunciation: "EL-oh-kwent", partOfSpeech: "adjective", meaning: "Fluent and persuasive in speaking or writing.", example: "Her eloquent speech moved the entire audience to tears." },
  { word: "Resilient", pronunciation: "ri-ZIL-ee-ent", partOfSpeech: "adjective", meaning: "Able to recover quickly from difficulties.", example: "He remained resilient despite facing many setbacks in life." },
  { word: "Ambiguous", pronunciation: "am-BIG-yoo-us", partOfSpeech: "adjective", meaning: "Open to more than one interpretation; not clear.", example: "The instructions were ambiguous, so we were confused about what to do." },
  { word: "Persevere", pronunciation: "per-suh-VEER", partOfSpeech: "verb", meaning: "To continue in a course of action despite difficulty.", example: "She persevered through years of hard work to become a doctor." },
  { word: "Concise", pronunciation: "kon-SISE", partOfSpeech: "adjective", meaning: "Giving a lot of information clearly and in a few words.", example: "Please write a concise summary of the report in three sentences." },
  { word: "Diligent", pronunciation: "DIL-ih-jent", partOfSpeech: "adjective", meaning: "Having or showing care and effort in work.", example: "A diligent student always reviews notes after every class." },
  { word: "Empathy", pronunciation: "EM-puh-thee", partOfSpeech: "noun", meaning: "The ability to understand and share the feelings of another person.", example: "Good leaders show empathy and listen to their team's concerns." },
  { word: "Candid", pronunciation: "KAN-did", partOfSpeech: "adjective", meaning: "Truthful and straightforward; frank.", example: "I appreciate your candid feedback — it helps me improve." },
  { word: "Negotiate", pronunciation: "ni-GOH-shee-ate", partOfSpeech: "verb", meaning: "To try to reach an agreement through discussion.", example: "They negotiated a better salary before accepting the job offer." },
  { word: "Meticulous", pronunciation: "meh-TIK-yoo-lus", partOfSpeech: "adjective", meaning: "Showing great attention to detail and care.", example: "The meticulous editor checked every sentence twice before publishing." },
  { word: "Articulate", pronunciation: "ar-TIK-yoo-lit", partOfSpeech: "adjective", meaning: "Able to express thoughts and feelings clearly.", example: "An articulate speaker can explain complex ideas in simple words." },
  { word: "Collaborate", pronunciation: "kuh-LAB-uh-rate", partOfSpeech: "verb", meaning: "To work jointly with others on a task.", example: "The two departments collaborated to launch the new product successfully." },
  { word: "Scrutinise", pronunciation: "SKROO-tuh-nize", partOfSpeech: "verb", meaning: "To examine or inspect closely and thoroughly.", example: "The inspector scrutinised every document before giving approval." },
  { word: "Pragmatic", pronunciation: "prag-MAT-ik", partOfSpeech: "adjective", meaning: "Dealing with things sensibly and realistically.", example: "A pragmatic manager focuses on what is achievable, not just ideal." },
  { word: "Persistent", pronunciation: "per-SIS-tent", partOfSpeech: "adjective", meaning: "Continuing firmly despite obstacles.", example: "Her persistent efforts finally led to a breakthrough in research." },
  { word: "Verbose", pronunciation: "ver-BOHS", partOfSpeech: "adjective", meaning: "Using more words than needed; long-winded.", example: "Try not to be verbose in emails — keep them short and to the point." },
  { word: "Fathom", pronunciation: "FATH-um", partOfSpeech: "verb", meaning: "To understand (something) after much thought.", example: "I cannot fathom why he made such a strange decision." },
  { word: "Tenacious", pronunciation: "tuh-NAY-shus", partOfSpeech: "adjective", meaning: "Holding firmly to something; not giving up easily.", example: "A tenacious athlete trains every day, no matter the weather." },
  { word: "Lucid", pronunciation: "LOO-sid", partOfSpeech: "adjective", meaning: "Clearly expressed and easy to understand.", example: "Her lucid explanation made the difficult topic much easier to grasp." },
  { word: "Inquisitive", pronunciation: "in-KWIZ-ih-tiv", partOfSpeech: "adjective", meaning: "Curious; eager to know or learn things.", example: "An inquisitive mind asks questions and seeks answers constantly." },
  { word: "Tactful", pronunciation: "TAKT-ful", partOfSpeech: "adjective", meaning: "Having sensitivity in dealing with difficult people or situations.", example: "She was tactful when delivering the disappointing news to the team." },
  { word: "Earnest", pronunciation: "UR-nist", partOfSpeech: "adjective", meaning: "Sincere and serious in intention.", example: "He made an earnest promise to improve his performance." },
  { word: "Prolific", pronunciation: "proh-LIF-ik", partOfSpeech: "adjective", meaning: "Producing a large amount of something.", example: "The prolific author published three novels in a single year." },
  { word: "Acknowledge", pronunciation: "ak-NOL-ij", partOfSpeech: "verb", meaning: "To recognise or admit the existence or truth of something.", example: "It is important to acknowledge your mistakes and learn from them." },
  { word: "Versatile", pronunciation: "VUR-suh-til", partOfSpeech: "adjective", meaning: "Able to adapt to many different functions or activities.", example: "A versatile employee can handle many different tasks efficiently." },
  { word: "Compassion", pronunciation: "kum-PASH-un", partOfSpeech: "noun", meaning: "Sympathetic concern for the suffering of others.", example: "The nurse showed great compassion to her patients every day." },
  { word: "Initiative", pronunciation: "ih-NISH-ee-uh-tiv", partOfSpeech: "noun", meaning: "The ability to take action independently without being told.", example: "She took the initiative to organise the team meeting herself." },
  { word: "Exemplary", pronunciation: "ig-ZEM-pluh-ree", partOfSpeech: "adjective", meaning: "Serving as a desirable model; excellent.", example: "His exemplary conduct earned him the employee of the year award." },
  { word: "Daunting", pronunciation: "DAWN-ting", partOfSpeech: "adjective", meaning: "Seeming difficult to deal with in prospect; intimidating.", example: "Learning a new language can seem daunting at first, but practice helps." },
  { word: "Brevity", pronunciation: "BREV-ih-tee", partOfSpeech: "noun", meaning: "Concise and exact use of words in writing or speech.", example: "Brevity is the soul of wit — say more with fewer words." },
  { word: "Coherent", pronunciation: "koh-HEER-ent", partOfSpeech: "adjective", meaning: "Logical and consistent; easy to understand.", example: "A coherent argument is well-organised and easy to follow." },
  { word: "Candour", pronunciation: "KAN-der", partOfSpeech: "noun", meaning: "The quality of being open and honest in expression.", example: "I admire her candour — she always says exactly what she thinks." },
  { word: "Eloquence", pronunciation: "EL-oh-kwens", partOfSpeech: "noun", meaning: "Fluent and persuasive expression in speaking or writing.", example: "His eloquence in the debate convinced many undecided voters." },
  { word: "Succinct", pronunciation: "suk-SINKT", partOfSpeech: "adjective", meaning: "Briefly and clearly expressed.", example: "A succinct answer is more impressive than a long, rambling one." },
  { word: "Integrity", pronunciation: "in-TEG-ruh-tee", partOfSpeech: "noun", meaning: "The quality of being honest and having strong moral principles.", example: "Leaders with integrity earn the trust and respect of their teams." },
  { word: "Nuance", pronunciation: "NYOO-ahns", partOfSpeech: "noun", meaning: "A subtle difference in meaning or expression.", example: "Understanding the nuances of English takes time and careful reading." },
  { word: "Assertive", pronunciation: "uh-SUR-tiv", partOfSpeech: "adjective", meaning: "Confident and direct in behaviour; self-assured.", example: "Being assertive means stating your opinion clearly and respectfully." },
  { word: "Acquiesce", pronunciation: "ak-wee-ES", partOfSpeech: "verb", meaning: "To accept something reluctantly but without protest.", example: "She acquiesced to the new schedule even though it was inconvenient." },
  { word: "Steadfast", pronunciation: "STED-fast", partOfSpeech: "adjective", meaning: "Resolutely firm and unwavering.", example: "He remained steadfast in his commitment to finish the project." },
  { word: "Accentuate", pronunciation: "ak-SEN-choo-ate", partOfSpeech: "verb", meaning: "To make something more noticeable or prominent.", example: "Smiling accentuates the warmth in your voice when speaking." },
  { word: "Galvanise", pronunciation: "GAL-vuh-nize", partOfSpeech: "verb", meaning: "To shock or excite someone into taking action.", example: "The coach's speech galvanised the team before the final match." },
  { word: "Innate", pronunciation: "ih-NAYT", partOfSpeech: "adjective", meaning: "Inborn; existing from birth.", example: "Children have an innate curiosity that drives them to explore everything." },
  { word: "Profound", pronunciation: "pruh-FOUND", partOfSpeech: "adjective", meaning: "Very deep or intense; having great meaning.", example: "Reading great literature can have a profound effect on your thinking." },
  { word: "Substantiate", pronunciation: "sub-STAN-shee-ate", partOfSpeech: "verb", meaning: "To provide evidence to support or prove something.", example: "Always substantiate your claims with facts and data." },
  { word: "Impartial", pronunciation: "im-PAR-shul", partOfSpeech: "adjective", meaning: "Treating all rivals or disputants equally; fair.", example: "A good judge must be impartial and listen to all sides." },
  { word: "Jeopardise", pronunciation: "JEP-er-dize", partOfSpeech: "verb", meaning: "To put something at risk of being harmed or lost.", example: "Arriving late can jeopardise your chances of getting the job." },
  { word: "Rectify", pronunciation: "REK-tih-fie", partOfSpeech: "verb", meaning: "To put something right; to correct.", example: "We need to rectify this error before sending the report." },
  { word: "Paramount", pronunciation: "PAR-uh-mount", partOfSpeech: "adjective", meaning: "More important than anything else; supreme.", example: "The safety of passengers is of paramount importance on this flight." },
  { word: "Heed", pronunciation: "HEED", partOfSpeech: "verb", meaning: "To pay careful attention to advice or a warning.", example: "Please heed the doctor's advice and take your medication on time." },
  { word: "Candid", pronunciation: "KAN-did", partOfSpeech: "adjective", meaning: "Truthful and straightforward; frank.", example: "She gave a candid assessment of the project's weaknesses." }
];

// ---- 3.1 Error Correction Game ----
const ERROR_GAME_DATA = [
  { sentence: ["I", "am", "knowing", "the", "answer."], errorIdx: 2, correct: "know", why: "'Know' is a stative verb — it describes a state, not an action. Never use it in the -ing (continuous) form." },
  { sentence: ["She", "don't", "likes", "coffee."], errorIdx: 1, correct: "doesn't", why: "With third-person singular (she/he/it), use 'doesn't', not 'don't'." },
  { sentence: ["I", "am", "here", "since", "morning."], errorIdx: 3, correct: "have been here", why: "For an action that started in the past and continues now, use the present perfect continuous: 'I have been here since morning.'" },
  { sentence: ["He", "is", "more", "superior", "to", "me."], errorIdx: 3, correct: "superior", why: "'Superior' already means 'higher than'. Adding 'more' is redundant — say 'superior to me'." },
  { sentence: ["Everyone", "have", "their", "own", "opinion."], errorIdx: 1, correct: "has", why: "'Everyone' is singular and takes a singular verb: 'Everyone has their own opinion.'" },
  { sentence: ["She", "suggested", "to", "take", "a", "break."], errorIdx: 2, correct: "taking", why: "'Suggest' is followed by a gerund (-ing form): 'She suggested taking a break.'" },
  { sentence: ["The", "news", "are", "shocking."], errorIdx: 2, correct: "is", why: "'News' is an uncountable noun and always takes a singular verb: 'The news is shocking.'" },
  { sentence: ["I", "look", "forward", "to", "meet", "you."], errorIdx: 4, correct: "meeting", why: "After 'look forward to', the verb must be in the -ing form: 'look forward to meeting you'." },
  { sentence: ["He", "returned", "back", "home", "late."], errorIdx: 2, correct: "home", why: "'Return' already means to go back. 'Return back' is redundant — just say 'returned home'." },
  { sentence: ["She", "is", "good", "in", "mathematics."], errorIdx: 3, correct: "at", why: "The correct preposition is 'good at', not 'good in': 'She is good at mathematics.'" },
  { sentence: ["I", "have", "been", "waiting", "since", "two", "hours."], errorIdx: 4, correct: "for", why: "Use 'for' with a period of time: 'waiting for two hours'. Use 'since' with a point in time." },
  { sentence: ["We", "discussed", "about", "the", "problem."], errorIdx: 2, correct: "discussed", why: "'Discuss' is a transitive verb that does not need 'about': 'We discussed the problem.'" },
  { sentence: ["He", "is", "too", "much", "intelligent."], errorIdx: 2, correct: "very", why: "'Too much' is used with nouns. With adjectives, use 'very': 'He is very intelligent.'" },
  { sentence: ["I", "am", "having", "a", "headache."], errorIdx: 2, correct: "have", why: "'Have' is a stative verb when describing possession or conditions. Say 'I have a headache', not 'I am having'." },
  { sentence: ["They", "reached", "to", "the", "station", "on", "time."], errorIdx: 2, correct: "reached", why: "'Reach' is a transitive verb that doesn't need 'to': 'They reached the station on time.'" },
  { sentence: ["She", "asked", "me", "that", "where", "I", "lived."], errorIdx: 3, correct: "where", why: "In indirect speech, do not use 'that' with question words. Say 'She asked me where I lived.'" },
  { sentence: ["I", "will", "come", "tomorrow", "if", "it", "won't", "rain."], errorIdx: 6, correct: "doesn't", why: "In conditional sentences with 'if', use present tense: 'if it doesn't rain', not 'won't rain'." },
  { sentence: ["He", "gave", "me", "many", "informations."], errorIdx: 4, correct: "information", why: "'Information' is an uncountable noun — it has no plural. Say 'a lot of information' or just 'information'." },
  { sentence: ["Please", "explain", "me", "this", "problem."], errorIdx: 2, correct: "explain to me", why: "'Explain' requires 'to' before the indirect object: 'Please explain to me this problem' or 'explain this problem to me'." },
  { sentence: ["The", "both", "brothers", "are", "doctors."], errorIdx: 1, correct: "Both", why: "Do not use 'the' before 'both'. Say 'Both brothers are doctors.'" },
  { sentence: ["I", "prefer", "tea", "than", "coffee."], errorIdx: 3, correct: "to", why: "The correct preposition after 'prefer' is 'to': 'I prefer tea to coffee.'" },
  { sentence: ["She", "is", "one", "of", "the", "best", "student."], errorIdx: 6, correct: "students", why: "After 'one of the', always use a plural noun: 'one of the best students'." },
  { sentence: ["He", "made", "me", "to", "laugh."], errorIdx: 3, correct: "laugh", why: "After 'make', use the bare infinitive (without 'to'): 'He made me laugh.'" },
  { sentence: ["I", "was", "born", "in", "1990", "year."], errorIdx: 5, correct: "in 1990", why: "Do not add 'year' after the birth year. Say 'I was born in 1990.'" },
  { sentence: ["She", "doesn't", "know", "to", "swim."], errorIdx: 3, correct: "how to", why: "Say 'She doesn't know how to swim.' The word 'how' is required before 'to' in this pattern." }
];
