const recipes = [
  // ===== INDIAN RECIPES (1-8) =====
  {
    id: 1,
    title: "Paneer Tikka Masala",
    category: "indian",
    origin: "🇮🇳 India - Punjab",
    time: "45 min",
    difficulty: 2,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    description: "Marinated paneer cubes grilled and simmered in a rich, creamy tomato-based curry. A Punjabi classic that's loved worldwide!",
    ingredients: ["250g paneer, cubed", "1 cup yogurt", "2 tbsp ginger-garlic paste", "2 tsp tikka masala", "1 tsp red chili powder", "1/2 tsp turmeric", "1 cup tomato puree", "1/2 cup cream", "2 tbsp butter", "1 tsp garam masala", "Fresh cilantro", "Salt to taste", "Lemon juice", "Oil for grilling"],
    steps: ["Marinate paneer cubes in yogurt, ginger-garlic paste, tikka masala, chili powder, turmeric, and salt for 30 minutes.", "Thread paneer onto skewers and grill on a hot pan with oil until charred on all sides. Set aside.", "In the same pan, add butter and sauté tomato puree until oil separates.", "Add cream, garam masala, and remaining marinade. Simmer for 10 minutes.", "Add grilled paneer to the curry and simmer for 5 more minutes.", "Garnish with fresh cilantro and a drizzle of cream. Serve hot with naan or rice."]
  },
  {
    id: 2,
    title: "Chole Bhature",
    category: "indian",
    origin: "🇮🇳 India - Delhi/Punjab",
    time: "60 min",
    difficulty: 3,
    calories: "450 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Spicy chickpea curry served with deep-fried fluffy bread. The ultimate North Indian comfort food combo!",
    ingredients: ["2 cups chickpeas (soaked overnight)", "2 onions, finely chopped", "3 tomatoes, pureed", "2 tbsp ginger-garlic paste", "2 green chilies, slit", "2 tsp chole masala", "1 tsp cumin seeds", "1 tsp turmeric", "1 tsp red chili powder", "1/2 tsp garam masala", "2 tbsp oil", "Salt to taste", "Fresh cilantro", "2 cups flour (for bhature)", "1/2 cup semolina", "1/2 cup yogurt", "Oil for deep frying"],
    steps: ["Pressure cook soaked chickpeas with salt until soft (about 15-20 minutes).", "Heat oil in a pan, add cumin seeds and let them splutter.", "Add onions and sauté until golden brown. Add ginger-garlic paste and green chilies.", "Add tomato puree and cook until oil separates. Add all spices except garam masala.", "Add cooked chickpeas with some cooking water. Simmer for 15 minutes.", "Mash some chickpeas to thicken the gravy. Add garam masala and cilantro.", "For bhature: Mix flour, semolina, yogurt, and water to make a soft dough. Rest for 2 hours.", "Roll out portions and deep fry in hot oil until puffed and golden.", "Serve hot chole with bhature, onions, and pickle."]
  },
  {
    id: 3,
    title: "Masala Dosa",
    category: "indian",
    origin: "🇮🇳 India - South India",
    time: "40 min",
    difficulty: 2,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Crispy rice crepe filled with spiced potato filling. South India's most famous breakfast export!",
    ingredients: ["2 cups dosa batter (fermented rice and lentil batter)", "3 potatoes, boiled and mashed", "1 onion, sliced", "2 green chilies, chopped", "1 tsp mustard seeds", "1 tsp turmeric", "1/2 tsp cumin seeds", "Few curry leaves", "2 tbsp oil", "Salt to taste", "Coconut chutney", "Sambar for serving"],
    steps: ["Heat oil in a pan, add mustard seeds and cumin seeds. Let them splutter.", "Add onions, green chilies, and curry leaves. Sauté until onions are soft.", "Add turmeric and mashed potatoes. Mix well and cook for 5 minutes. Add salt.", "The potato filling (masala) is ready. Set aside.", "Heat a non-stick tawa or griddle. Pour a ladle of dosa batter and spread in circular motion to make a thin crepe.", "Drizzle oil around the edges. Cook until crispy and golden.", "Place potato filling in the center and fold the dosa.", "Serve hot with coconut chutney and sambar."]
  },
  {
    id: 4,
    title: "Palak Paneer",
    category: "indian",
    origin: "🇮🇳 India - North India",
    time: "35 min",
    difficulty: 2,
    calories: "290 kcal",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    description: "Creamy spinach curry with soft paneer cubes. A nutritious and delicious North Indian favorite!",
    ingredients: ["250g paneer, cubed", "4 cups fresh spinach, blanched and pureed", "1 onion, chopped", "2 tomatoes, chopped", "1 tbsp ginger-garlic paste", "1 tsp cumin seeds", "1/2 tsp turmeric", "1/2 tsp red chili powder", "1/2 tsp garam masala", "2 tbsp cream", "2 tbsp oil", "Salt to taste"],
    steps: ["Blanch spinach in boiling water for 2 minutes. Transfer to ice water, then blend to a smooth puree.", "Heat oil, add cumin seeds. Add onions and sauté until golden.", "Add ginger-garlic paste and tomatoes. Cook until mushy.", "Add turmeric, chili powder, and salt. Cook for 2 minutes.", "Add spinach puree and simmer for 5 minutes.", "Add paneer cubes and cream. Simmer for 5 more minutes.", "Add garam masala. Serve hot with roti or rice."]
  },
  {
    id: 5,
    title: "Vegetable Biryani",
    category: "indian",
    origin: "🇮🇳 India - Hyderabad",
    time: "60 min",
    difficulty: 3,
    calories: "380 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Fragrant basmati rice layered with spiced vegetables and saffron. A royal feast from Hyderabad!",
    ingredients: ["2 cups basmati rice", "2 cups mixed vegetables (carrots, beans, peas, cauliflower)", "2 onions, sliced", "2 tomatoes, chopped", "2 tbsp ginger-garlic paste", "2 green chilies", "1/2 cup yogurt", "2 tbsp biryani masala", "1 tsp turmeric", "1 tsp red chili powder", "Saffron strands soaked in milk", "2 tbsp ghee", "Fresh mint and cilantro", "Salt to taste", "Fried onions for garnish"],
    steps: ["Soak rice for 30 minutes. Cook until 70% done. Drain and set aside.", "Heat ghee, fry onions until crispy and golden. Remove half for garnish.", "Add ginger-garlic paste, tomatoes, green chilies, and vegetables. Sauté.", "Add yogurt, biryani masala, turmeric, chili powder, and salt. Cook until vegetables are half done.", "Layer: Rice → vegetable gravy → rice → saffron milk → mint, cilantro, fried onions.", "Cover and cook on low heat (dum) for 20-25 minutes.", "Fluff gently and serve hot with raita."]
  },
  {
    id: 6,
    title: "Samosa",
    category: "indian",
    origin: "🇮🇳 India - North India",
    time: "50 min",
    difficulty: 3,
    calories: "250 kcal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    description: "Crispy fried pastry filled with spiced potatoes and peas. India's most beloved snack!",
    ingredients: ["2 cups all-purpose flour", "4 tbsp oil", "1/2 tsp carom seeds (ajwain)", "Salt to taste", "Water for dough", "3 potatoes, boiled and mashed", "1/2 cup peas", "1 onion, chopped", "2 green chilies, chopped", "1 tsp ginger, grated", "1 tsp cumin seeds", "1 tsp coriander powder", "1/2 tsp garam masala", "1/2 tsp amchur (dry mango powder)", "2 tbsp oil for filling", "Oil for deep frying"],
    steps: ["Make dough: Mix flour, oil, carom seeds, salt, and water to make a firm dough. Rest for 30 minutes.", "For filling: Heat oil, add cumin seeds. Add onions, ginger, green chilies. Sauté.", "Add peas, mashed potatoes, coriander powder, garam masala, amchur, and salt. Mix well. Cool.", "Divide dough into balls. Roll into oval, cut in half.", "Make cone from each half, fill with potato mixture, seal edges with water.", "Deep fry in hot oil until golden and crispy.", "Serve hot with tamarind chutney or mint chutney."]
  },
  {
    id: 7,
    title: "Dal Makhani",
    category: "indian",
    origin: "🇮🇳 India - Punjab",
    time: "45 min",
    difficulty: 2,
    calories: "310 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Creamy black lentils slow-cooked with butter and cream. Punjab's richest and most indulgent dal!",
    ingredients: ["1 cup black lentils (urad dal)", "1/4 cup kidney beans (rajma)", "1 onion, finely chopped", "2 tomatoes, pureed", "1 tbsp ginger-garlic paste", "1 tsp cumin seeds", "1/2 tsp turmeric", "1 tsp red chili powder", "1/2 tsp garam masala", "3 tbsp butter", "2 tbsp cream", "1 tsp kasuri methi (dried fenugreek leaves)", "Salt to taste"],
    steps: ["Soak lentils and kidney beans overnight. Pressure cook with salt until completely soft and mashable.", "Heat butter in a pan, add cumin seeds. Add onions and sauté until golden brown.", "Add ginger-garlic paste and tomato puree. Cook until oil separates.", "Add turmeric, chili powder, and salt. Cook for 2 minutes.", "Add cooked lentils and kidney beans with cooking water. Simmer for 20 minutes on low heat.", "Mash some lentils against the pan to thicken the dal.", "Add cream, garam masala, and kasuri methi. Simmer for 5 more minutes.", "Serve hot with naan, roti, or rice."]
  },
  {
    id: 8,
    title: "Aloo Gobi",
    category: "indian",
    origin: "🇮🇳 India - North India",
    time: "30 min",
    difficulty: 1,
    calories: "220 kcal",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    description: "Simple yet flavorful dry curry of potatoes and cauliflower. A humble everyday North Indian dish!",
    ingredients: ["2 potatoes, cubed", "1 small cauliflower, cut into florets", "1 onion, chopped", "2 tomatoes, chopped", "1 tsp ginger, grated", "1 tsp cumin seeds", "1/2 tsp turmeric", "1 tsp coriander powder", "1/2 tsp red chili powder", "1/2 tsp garam masala", "2 tbsp oil", "Fresh cilantro", "Salt to taste"],
    steps: ["Heat oil, add cumin seeds. Add onions and sauté until golden.", "Add ginger, tomatoes, and all spices except garam masala. Cook until tomatoes are soft.", "Add potatoes and cauliflower. Mix well to coat with spices.", "Cover and cook on low heat for 15-20 minutes, stirring occasionally, until vegetables are tender.", "Add garam masala and cilantro. Mix well.", "Serve hot with roti or paratha."]
  },

  // ===== ITALIAN RECIPES (9-13) =====
  {
    id: 9,
    title: "Margherita Pizza",
    category: "italian",
    origin: "🇮🇹 Italy - Naples",
    time: "45 min",
    difficulty: 2,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
    description: "Classic Neapolitan pizza with tomato sauce, fresh mozzarella, and basil. Simplicity at its finest!",
    ingredients: ["2 cups pizza dough", "1 cup tomato sauce", "200g fresh mozzarella, sliced", "Fresh basil leaves", "2 tbsp olive oil", "1 tsp dried oregano", "Salt to taste", "Semolina flour for dusting"],
    steps: ["Preheat oven to its highest setting (250°C/480°F) with a pizza stone or baking tray inside.", "Roll out pizza dough on a semolina-dusted surface to a thin round.", "Spread tomato sauce evenly, leaving a small border for the crust.", "Arrange mozzarella slices on top. Sprinkle with oregano and salt.", "Drizzle with olive oil.", "Bake for 10-12 minutes until crust is crispy and cheese is bubbly and slightly browned.", "Remove from oven, immediately top with fresh basil leaves.", "Slice and serve hot!"]
  },
  {
    id: 10,
    title: "Pasta Carbonara",
    category: "italian",
    origin: "🇮🇹 Italy - Rome",
    time: "25 min",
    difficulty: 2,
    calories: "420 kcal",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600",
    description: "Creamy pasta with eggs, cheese, and black pepper. A Roman classic - no cream needed!",
    ingredients: ["400g spaghetti", "150g pecorino romano cheese, grated", "100g parmesan cheese, grated", "4 large eggs", "200g guanciale or pancetta (vegetarian: use smoked tofu or mushrooms)", "2 tsp freshly ground black pepper", "Salt for pasta water", "Olive oil"],
    steps: ["Bring a large pot of salted water to boil. Cook spaghetti until al dente.", "While pasta cooks, cut guanciale (or vegetarian substitute) into small strips. Sauté in a pan until crispy. Set aside.", "In a bowl, whisk eggs with grated pecorino and parmesan. Add plenty of black pepper.", "Reserve 1 cup of pasta cooking water before draining.", "Drain pasta and immediately add to the pan with guanciale (off heat).", "Pour egg and cheese mixture over hot pasta, tossing vigorously. The residual heat will cook the eggs into a creamy sauce.", "Add splashes of pasta water if needed to reach desired consistency.", "Serve immediately with extra cheese and black pepper on top."]
  },
  {
    id: 11,
    title: "Risotto alla Milanese",
    category: "italian",
    origin: "🇮🇹 Italy - Milan",
    time: "35 min",
    difficulty: 3,
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    description: "Luxurious saffron-infused risotto with a golden hue. Milan's most elegant rice dish!",
    ingredients: ["2 cups Arborio rice", "1 liter vegetable broth, warm", "1/2 cup dry white wine", "1 onion, finely chopped", "1/2 tsp saffron threads", "4 tbsp butter", "1/2 cup parmesan cheese, grated", "2 tbsp olive oil", "Salt to taste"],
    steps: ["Dissolve saffron in a little warm broth. Set aside.", "Heat olive oil and 2 tbsp butter in a wide pan. Add onions and sauté until translucent.", "Add Arborio rice and toast for 2 minutes until edges are translucent.", "Pour in white wine and stir until fully absorbed.", "Add warm broth one ladle at a time, stirring constantly. Wait until each ladle is absorbed before adding the next.", "After about 15 minutes, add saffron-infused broth. Continue stirring and adding broth.", "When rice is creamy and al dente (about 20-25 minutes total), remove from heat.", "Stir in remaining butter and parmesan. Cover and let rest for 2 minutes.", "Serve immediately - risotto waits for no one!"]
  },
  {
    id: 12,
    title: "Caprese Salad",
    category: "italian",
    origin: "🇮🇹 Italy - Capri",
    time: "10 min",
    difficulty: 1,
    calories: "180 kcal",
    image: "https://images.unsplash.com/photo-1529312266912-b33cf6227e24?w=600",
    description: "Fresh mozzarella, tomatoes, and basil drizzled with olive oil. The colors of the Italian flag on a plate!",
    ingredients: ["3 large ripe tomatoes, sliced", "200g fresh mozzarella, sliced", "Fresh basil leaves", "3 tbsp extra virgin olive oil", "1 tbsp balsamic glaze", "Salt to taste", "Freshly ground black pepper"],
    steps: ["Arrange tomato and mozzarella slices alternately on a plate, slightly overlapping.", "Tuck fresh basil leaves between the slices.", "Drizzle generously with extra virgin olive oil.", "Drizzle with balsamic glaze in a zigzag pattern.", "Sprinkle with salt and freshly ground black pepper.", "Serve immediately at room temperature for best flavor."]
  },
  {
    id: 13,
    title: "Tiramisu",
    category: "desserts",
    origin: "🇮🇹 Italy - Veneto",
    time: "30 min",
    difficulty: 2,
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
    description: "Layers of coffee-soaked ladyfingers and mascarpone cream dusted with cocoa. Italy's most famous dessert!",
    ingredients: ["500g mascarpone cheese", "4 large eggs, separated", "1/2 cup sugar", "1 cup strong espresso, cooled", "2 tbsp coffee liqueur (optional)", "200g ladyfinger biscuits (savoiardi)", "Unsweetened cocoa powder for dusting", "Dark chocolate shavings (optional)"],
    steps: ["In a bowl, beat egg yolks with sugar until pale and creamy.", "Add mascarpone cheese and mix until smooth and well combined.", "In a separate clean bowl, whip egg whites until stiff peaks form.", "Gently fold the whipped egg whites into the mascarpone mixture.", "Mix cooled espresso with coffee liqueur in a shallow dish.", "Briefly dip each ladyfinger into the coffee mixture (don't soak too long).", "Arrange a layer of dipped ladyfingers in the bottom of a serving dish.", "Spread half the mascarpone mixture over the ladyfingers.", "Repeat with another layer of ladyfingers and remaining mascarpone mixture.", "Refrigerate for at least 4 hours or overnight. Dust with cocoa powder before serving."]
  },

  // ===== ASIAN RECIPES (14-23) =====
  {
    id: 14,
    title: "Vegetable Sushi",
    category: "asian",
    origin: "🇯🇵 Japan",
    time: "40 min",
    difficulty: 2,
    calories: "220 kcal",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    description: "Fresh vegetables and seasoned rice rolled in nori seaweed. A Japanese art form that's as delicious as it is beautiful!",
    ingredients: ["2 cups sushi rice", "2.5 cups water", "3 tbsp rice vinegar", "2 tbsp sugar", "1 tsp salt", "5 sheets nori (seaweed)", "1 cucumber, julienned", "1 avocado, sliced", "1 carrot, julienned", "Pickled daikon (takuan)", "Soy sauce for serving", "Wasabi", "Pickled ginger (gari)"],
    steps: ["Rinse sushi rice until water runs clear. Cook with water in a rice cooker or pot.", "Mix rice vinegar, sugar, and salt. Heat slightly until dissolved. Fold into warm rice. Let cool.", "Place a bamboo mat on a clean surface. Lay a sheet of nori, shiny side down.", "Wet hands and spread a thin layer of rice over nori, leaving 1 inch at the top.", "Arrange cucumber, avocado, carrot, and pickled daikon in a line across the center.", "Roll tightly using the bamboo mat, applying gentle pressure.", "Wet the top edge of nori to seal the roll.", "Slice into 6-8 pieces with a sharp, wet knife.", "Serve with soy sauce, wasabi, and pickled ginger."]
  },
  {
    id: 15,
    title: "Pad Thai",
    category: "asian",
    origin: "🇹🇭 Thailand",
    time: "30 min",
    difficulty: 2,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600",
    description: "Stir-fried rice noodles with tamarind sauce, tofu, and peanuts. Thailand's most famous street food!",
    ingredients: ["200g rice noodles", "200g firm tofu, cubed", "2 eggs (optional, or use extra tofu)", "3 tbsp tamarind paste", "3 tbsp fish sauce (or soy sauce for vegetarian)", "2 tbsp palm sugar", "1 tsp chili powder", "3 tbsp oil", "3 cloves garlic, minced", "1 cup bean sprouts", "1/2 cup roasted peanuts, crushed", "2 green onions, sliced", "Lime wedges", "Fresh cilantro"],
    steps: ["Soak rice noodles in warm water for 30 minutes until flexible. Drain.", "Mix tamarind paste, fish sauce (or soy sauce), palm sugar, and chili powder to make the sauce.", "Heat oil in a wok on high heat. Add garlic and tofu. Stir-fry until golden.", "Push tofu to the side. Add eggs (if using) and scramble quickly.", "Add drained noodles and sauce. Toss vigorously for 2-3 minutes.", "Add bean sprouts and green onions. Toss for 1 more minute.", "Remove from heat. Top with crushed peanuts and cilantro.", "Serve immediately with lime wedges."]
  },
  {
    id: 16,
    title: "Vegetable Dumplings (Momos)",
    category: "asian",
    origin: "🇳🇵 Nepal / 🇹🇲 Tibet",
    time: "50 min",
    difficulty: 3,
    calories: "240 kcal",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=600",
    description: "Steamed dumplings filled with spiced vegetables. A Himalayan favorite that's comfort food at its best!",
    ingredients: ["2 cups all-purpose flour", "Water for dough", "Salt to taste", "2 cups cabbage, finely chopped", "1 cup carrots, grated", "1/2 cup onions, finely chopped", "2 tbsp ginger, minced", "2 cloves garlic, minced", "1 tbsp soy sauce", "1 tsp sesame oil", "1/2 tsp black pepper", "2 tbsp oil for filling", "Tomato chutney for serving"],
    steps: ["Make dough: Mix flour, salt, and water to make a firm dough. Rest for 30 minutes.", "For filling: Heat oil, add ginger and garlic. Add onions and sauté until soft.", "Add cabbage and carrots. Stir-fry for 5 minutes. Add soy sauce, sesame oil, and pepper. Cool.", "Roll dough into thin circles. Place 1 tbsp filling in the center.", "Fold and pleat edges to seal. Repeat with all dough.", "Steam in a steamer for 15-20 minutes until translucent.", "Serve hot with tomato chutney or spicy dipping sauce."]
  },
  {
    id: 17,
    title: "Kimchi Fried Rice",
    category: "asian",
    origin: "🇰🇷 South Korea",
    time: "20 min",
    difficulty: 1,
    calories: "310 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Fried rice with tangy kimchi, gochujang, and a fried egg on top. A Korean comfort food classic!",
    ingredients: ["3 cups cooked rice (preferably day-old)", "1 cup kimchi, chopped with juice", "2 tbsp gochujang (Korean chili paste)", "1 tbsp soy sauce", "1 tsp sesame oil", "2 tbsp oil", "1 onion, diced", "2 cloves garlic, minced", "2 green onions, sliced", "1 tbsp sesame seeds", "2 eggs (optional)", "Nori strips for garnish"],
    steps: ["Heat oil in a pan or wok. Add onions and garlic. Sauté until fragrant.", "Add kimchi and stir-fry for 2 minutes.", "Add gochujang and soy sauce. Mix well.", "Add rice and break up any clumps. Stir-fry on high heat for 3-4 minutes.", "Drizzle with sesame oil. Add green onions and sesame seeds. Toss well.", "In a separate pan, fry eggs sunny-side up (optional).", "Serve rice topped with fried egg and nori strips."]
  },
  {
    id: 18,
    title: "Miso Soup",
    category: "asian",
    origin: "🇯🇵 Japan",
    time: "15 min",
    difficulty: 1,
    calories: "80 kcal",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    description: "Warm, savory soup with miso paste, tofu, and seaweed. A Japanese staple that soothes the soul!",
    ingredients: ["4 cups dashi stock (or vegetable broth)", "3 tbsp miso paste (white or red)", "1/2 block silken tofu, cubed", "2 tbsp wakame seaweed (dried)", "1 green onion, sliced", "Optional: mushrooms, daikon"],
    steps: ["Heat dashi stock in a pot until just simmering. Do not boil.", "Soak wakame in warm water for 5 minutes. Drain and add to the pot.", "Add tofu cubes gently.", "Ladle some warm broth into a bowl. Dissolve miso paste in it.", "Turn off heat. Stir dissolved miso back into the pot. Never boil miso - it kills the probiotics.", "Garnish with green onions. Serve immediately."]
  },
  {
    id: 19,
    title: "Thai Green Curry",
    category: "asian",
    origin: "🇹🇭 Thailand",
    time: "35 min",
    difficulty: 2,
    calories: "290 kcal",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600",
    description: "Aromatic coconut curry with Thai basil and vegetables. A fragrant explosion of Thai flavors!",
    ingredients: ["2 tbsp green curry paste", "1 can (400ml) coconut milk", "1 cup mixed vegetables (eggplant, bamboo shoots, bell peppers)", "1/2 cup Thai basil leaves", "1 tbsp fish sauce (or soy sauce)", "1 tsp sugar", "1 tbsp oil", "1 cup vegetable broth", "Lime leaves (optional)", "Red chili for garnish", "Jasmine rice for serving"],
    steps: ["Heat oil in a pan. Add green curry paste and fry for 1 minute until fragrant.", "Add coconut milk and broth. Stir until paste is dissolved.", "Add vegetables. Simmer for 15 minutes until tender.", "Add fish sauce (or soy sauce) and sugar. Adjust to taste.", "Tear Thai basil leaves and stir in. Simmer for 2 more minutes.", "Serve hot over jasmine rice, garnished with red chili."]
  },
  {
    id: 20,
    title: "Ramen",
    category: "asian",
    origin: "🇯🇵 Japan",
    time: "45 min",
    difficulty: 2,
    calories: "340 kcal",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    description: "Rich noodle soup with savory broth, soft-boiled egg, and fresh toppings. Japan's ultimate comfort bowl!",
    ingredients: ["2 packs fresh ramen noodles", "6 cups vegetable broth", "2 tbsp soy sauce", "1 tbsp miso paste", "1 tbsp sesame oil", "2 cloves garlic, minced", "1 inch ginger, sliced", "2 soft-boiled eggs", "1 cup spinach", "1/2 cup corn kernels", "2 green onions, sliced", "Nori sheets", "Chili oil (optional)"],
    steps: ["Heat sesame oil in a pot. Add garlic and ginger. Sauté until fragrant.", "Add vegetable broth, soy sauce, and miso paste. Bring to a simmer.", "Cook for 15 minutes to develop flavor. Strain if desired.", "Cook ramen noodles separately according to package instructions. Drain.", "Blanch spinach in the broth for 1 minute.", "Divide noodles into bowls. Pour hot broth over.", "Halve soft-boiled eggs and place on top. Add spinach, corn, green onions, and nori.", "Drizzle with chili oil if desired. Serve immediately."]
  },
  {
    id: 21,
    title: "Bibimbap",
    category: "asian",
    origin: "🇰🇷 South Korea",
    time: "40 min",
    difficulty: 2,
    calories: "360 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Colorful rice bowl with assorted vegetables, gochujang, and a fried egg. A Korean mixed rice masterpiece!",
    ingredients: ["2 cups cooked rice", "1 cup spinach, blanched", "1 cup bean sprouts, blanched", "1 carrot, julienned", "1 zucchini, julienned", "1/2 cup mushrooms, sliced", "2 tbsp gochujang", "1 tbsp sesame oil", "1 tbsp soy sauce", "1 tsp sugar", "2 eggs", "2 tbsp oil", "1 tbsp sesame seeds", "Nori strips"],
    steps: ["Cook and season each vegetable separately with a little oil, soy sauce, and sesame seeds. Set aside.", "Make gochujang sauce: Mix gochujang with sesame oil, sugar, and a little water.", "Fry eggs sunny-side up in a pan.", "Place hot rice in a bowl. Arrange vegetables in sections on top.", "Place fried egg in the center.", "Serve with gochujang sauce on the side. Mix everything together before eating!"]
  },
  {
    id: 22,
    title: "Spring Rolls",
    category: "asian",
    origin: "🇨🇳 China / 🇻🇳 Vietnam",
    time: "35 min",
    difficulty: 2,
    calories: "200 kcal",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600",
    description: "Crispy rolls filled with vegetables and glass noodles. A popular appetizer across East and Southeast Asia!",
    ingredients: ["10 spring roll wrappers", "1 cup glass noodles, soaked and cut", "1 cup cabbage, shredded", "1/2 cup carrots, julienned", "1/2 cup mushrooms, sliced", "2 tbsp soy sauce", "1 tsp sesame oil", "2 cloves garlic, minced", "1 tbsp cornstarch mixed with water (sealing paste)", "Oil for deep frying", "Sweet chili sauce for dipping"],
    steps: ["Heat a little oil, add garlic. Add cabbage, carrots, and mushrooms. Stir-fry for 3 minutes.", "Add glass noodles, soy sauce, and sesame oil. Toss and cool completely.", "Place a spring roll wrapper diagonally. Add 2-3 tbsp filling near the bottom corner.", "Fold bottom over filling, then fold in sides. Roll tightly.", "Seal edge with cornstarch paste.", "Deep fry in hot oil until golden and crispy (about 3-4 minutes).", "Drain on paper towels. Serve hot with sweet chili sauce."]
  },
  {
    id: 23,
    title: "Congee",
    category: "asian",
    origin: "🇨🇳 China",
    time: "60 min",
    difficulty: 1,
    calories: "180 kcal",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    description: "Slow-cooked rice porridge with ginger and scallions. A healing, comforting Chinese breakfast staple!",
    ingredients: ["1 cup jasmine rice", "8 cups water or vegetable broth", "1 inch ginger, sliced", "2 green onions, sliced", "1 tbsp soy sauce", "1 tsp sesame oil", "Salt to taste", "Optional toppings: fried dough, pickled vegetables, peanuts, cilantro"],
    steps: ["Rinse rice until water runs clear.", "In a large pot, bring rice and water/broth to a boil.", "Add ginger. Reduce heat to low and simmer uncovered, stirring occasionally.", "Cook for 45-60 minutes until rice breaks down and porridge is creamy.", "Stir in soy sauce, sesame oil, and salt.", "Serve hot in bowls. Top with green onions and desired toppings.", "Congee is best enjoyed with various toppings on the side!"]
  },

  // ===== MEXICAN RECIPES (24-28) =====
  {
    id: 24,
    title: "Vegetable Tacos",
    category: "mexican",
    origin: "🇲🇽 Mexico",
    time: "25 min",
    difficulty: 1,
    calories: "240 kcal",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600",
    description: "Soft tortillas filled with spiced vegetables, salsa, and guacamole. A Mexican fiesta in every bite!",
    ingredients: ["8 small corn tortillas", "2 bell peppers, sliced", "1 zucchini, sliced", "1 onion, sliced", "1 cup corn kernels", "1 can black beans, drained", "2 tsp cumin", "1 tsp chili powder", "1/2 tsp smoked paprika", "Salt to taste", "2 tbsp oil", "1 cup salsa", "1 avocado, mashed with lime", "Fresh cilantro", "Lime wedges", "Hot sauce"],
    steps: ["Heat oil in a pan. Add onions and sauté until soft.", "Add bell peppers, zucchini, and corn. Stir-fry for 5 minutes.", "Add black beans, cumin, chili powder, smoked paprika, and salt. Cook for 5 more minutes.", "Warm tortillas on a dry pan or directly over flame for 10 seconds each side.", "Assemble tacos: tortilla → vegetable mixture → salsa → guacamole → cilantro.", "Squeeze lime juice over the top. Add hot sauce if desired.", "Serve immediately while warm."]
  },
  {
    id: 25,
    title: "Guacamole",
    category: "mexican",
    origin: "🇲🇽 Mexico",
    time: "10 min",
    difficulty: 1,
    calories: "150 kcal",
    image: "https://images.unsplash.com/photo-1524593166156-311f36d0639c?w=600",
    description: "Creamy avocado dip with lime, cilantro, and jalapeño. Mexico's most beloved contribution to the world!",
    ingredients: ["3 ripe avocados", "1 lime, juiced", "1/2 onion, finely diced", "2 tomatoes, diced", "1 jalapeño, minced (optional)", "1/4 cup fresh cilantro, chopped", "2 cloves garlic, minced", "Salt to taste", "Tortilla chips for serving"],
    steps: ["Cut avocados in half, remove pit, and scoop flesh into a bowl.", "Mash with a fork to desired consistency (some like it chunky, some smooth).", "Immediately add lime juice to prevent browning.", "Add onion, tomatoes, jalapeño, cilantro, and garlic. Mix well.", "Add salt to taste. Adjust lime if needed.", "Serve immediately with tortilla chips or as a topping for tacos."]
  },
  {
    id: 26,
    title: "Enchiladas",
    category: "mexican",
    origin: "🇲🇽 Mexico",
    time: "45 min",
    difficulty: 2,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd115?w=600",
    description: "Corn tortillas rolled around a vegetable filling, covered in chili sauce and cheese. Baked to perfection!",
    ingredients: ["8 corn tortillas", "2 cups mixed vegetables (zucchini, bell peppers, corn, beans)", "1 onion, diced", "2 cups enchilada sauce (red or green)", "1.5 cups shredded cheese (cheddar or Mexican blend)", "1 tsp cumin", "1/2 tsp oregano", "2 tbsp oil", "Fresh cilantro", "Sour cream for serving"],
    steps: ["Heat oil, add onions and vegetables. Sauté with cumin and oregano until tender. Set aside.", "Preheat oven to 180°C (350°F).", "Warm tortillas briefly to make them pliable.", "Dip each tortilla in enchilada sauce, fill with vegetable mixture, and roll up.", "Place seam-side down in a greased baking dish.", "Pour remaining sauce over enchiladas. Top with cheese.", "Bake for 20-25 minutes until cheese is melted and bubbly.", "Garnish with cilantro and serve with sour cream."]
  },
  {
    id: 27,
    title: "Mexican Rice",
    category: "mexican",
    origin: "🇲🇽 Mexico",
    time: "30 min",
    difficulty: 1,
    calories: "220 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Fluffy rice cooked with tomatoes, garlic, and Mexican spices. The perfect side for any Mexican meal!",
    ingredients: ["2 cups long-grain rice", "1 can (400g) diced tomatoes", "1 onion, diced", "3 cloves garlic, minced", "2 cups vegetable broth", "1 tsp cumin", "1/2 tsp chili powder", "1/4 tsp turmeric (for color)", "2 tbsp oil", "Salt to taste", "Fresh cilantro", "Lime juice"],
    steps: ["Rinse rice until water runs clear. Let drain.", "Blend diced tomatoes with garlic until smooth.", "Heat oil in a pot. Add rice and toast for 3-4 minutes until lightly golden.", "Add onion and cook for 2 minutes.", "Add tomato puree, broth, cumin, chili powder, turmeric, and salt. Stir.", "Bring to a boil, then reduce to low heat. Cover and cook for 18-20 minutes.", "Do not lift lid during cooking. After 20 minutes, fluff with a fork.", "Stir in cilantro and lime juice. Serve hot."]
  },
  {
    id: 28,
    title: "Churros with Chocolate",
    category: "desserts",
    origin: "🇲🇽 Mexico / Spain",
    time: "30 min",
    difficulty: 2,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1628326037352-7a7c409e75b7?w=600",
    description: "Crispy fried dough sticks coated in cinnamon sugar, served with thick hot chocolate. A sweet fiesta!",
    ingredients: ["1 cup water", "1/2 cup butter", "1/4 tsp salt", "1 cup all-purpose flour", "3 eggs", "1 tsp vanilla extract", "1/2 cup sugar", "1 tbsp cinnamon", "Oil for frying", "200g dark chocolate, chopped", "1 cup heavy cream", "1 tbsp butter"],
    steps: ["In a saucepan, bring water, butter, and salt to a boil.", "Remove from heat and add flour all at once. Stir vigorously until a smooth dough forms.", "Let the dough cool for 5 minutes. Add eggs one at a time, mixing well after each addition.", "Add vanilla extract and mix until smooth.", "Heat oil to 180°C (350°F). Transfer dough to a piping bag with a star tip.", "Pipe 4-5 inch strips directly into the hot oil. Fry until golden brown, about 2-3 minutes per side.", "Mix sugar and cinnamon in a shallow dish. Roll hot churros in the mixture.", "For chocolate sauce: heat cream until simmering. Pour over chopped chocolate. Let sit for 2 minutes, then stir until smooth. Add butter.", "Serve churros warm with chocolate dipping sauce."]
  },

  // ===== MEDITERRANEAN RECIPES (29-34) =====
  {
    id: 29,
    title: "Greek Moussaka",
    category: "mediterranean",
    origin: "🇬🇷 Greece",
    time: "90 min",
    difficulty: 3,
    calories: "340 kcal",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
    description: "Layers of eggplant, potato, and lentil-tomato sauce topped with creamy béchamel. A Greek masterpiece!",
    ingredients: ["2 large eggplants, sliced", "2 potatoes, sliced", "1 cup cooked lentils", "1 onion, chopped", "2 tomatoes, pureed", "2 cloves garlic, minced", "1 tsp cinnamon", "1/2 tsp allspice", "3 tbsp flour", "2 cups milk", "2 eggs", "1/2 cup parmesan cheese", "1/2 cup breadcrumbs", "Olive oil for frying", "Salt and pepper", "Fresh parsley"],
    steps: ["Salt eggplant slices and let sit for 30 minutes. Rinse and pat dry.", "Fry eggplant and potato slices in olive oil until golden. Set aside.", "Make lentil sauce: Sauté onions and garlic. Add lentils, tomato puree, cinnamon, allspice, salt, and pepper. Simmer for 15 minutes.", "Make béchamel: Heat milk. In a separate pan, make roux with flour and butter. Gradually add milk, stirring until thickened. Cool slightly, then whisk in eggs and parmesan.", "Layer in a baking dish: potatoes → eggplant → lentil sauce → repeat → top with béchamel.", "Sprinkle breadcrumbs on top.", "Bake at 180°C (350°F) for 45 minutes until golden and bubbling.", "Let rest for 15 minutes before slicing. Garnish with parsley."]
  },
  {
    id: 30,
    title: "Hummus",
    category: "mediterranean",
    origin: "🇱🇧 Lebanon / Middle East",
    time: "15 min",
    difficulty: 1,
    calories: "180 kcal",
    image: "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?w=600",
    description: "Creamy chickpea dip with tahini, lemon, and garlic. The crown jewel of Middle Eastern cuisine!",
    ingredients: ["2 cans (800g) chickpeas, drained and rinsed", "1/3 cup tahini", "3 tbsp lemon juice", "2 cloves garlic", "1/2 tsp cumin", "3-4 tbsp ice water", "Salt to taste", "Olive oil for drizzling", "Paprika for garnish", "Fresh parsley", "Pita bread for serving"],
    steps: ["Blend chickpeas, tahini, lemon juice, garlic, cumin, and salt in a food processor until smooth.", "Add ice water one tablespoon at a time until hummus is light and creamy.", "Taste and adjust lemon, salt, or garlic as needed.", "Transfer to a shallow bowl. Create a well in the center with the back of a spoon.", "Drizzle generously with olive oil. Sprinkle with paprika and parsley.", "Serve with warm pita bread or vegetables."]
  },
  {
    id: 31,
    title: "Falafel Wrap",
    category: "middle-eastern",
    origin: "🇪🇬 Egypt / Middle East",
    time: "30 min",
    difficulty: 2,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600",
    description: "Crispy falafel wrapped in warm pita with tahini, salad, and pickles. A handheld Middle Eastern delight!",
    ingredients: ["4 pita breads, warmed", "8 falafel balls (homemade or store-bought)", "1/2 cup hummus", "1/4 cup tahini sauce", "1 tomato, diced", "1 cucumber, diced", "1/4 cup pickled turnips", "1/4 cup pickled cucumbers", "Fresh lettuce, shredded", "Fresh parsley, chopped", "Hot sauce (optional)"],
    steps: ["Warm pita breads in a dry pan or oven for 1-2 minutes.", "Spread hummus generously on one side of each pita.", "Place 2 falafel balls in the center of each pita. Gently flatten them.", "Top with diced tomatoes, cucumbers, pickled vegetables, and lettuce.", "Drizzle with tahini sauce and hot sauce if desired.", "Sprinkle with fresh parsley.", "Fold the bottom of the pita up, then roll tightly from one side.", "Wrap in foil or parchment paper for easy eating. Serve immediately."]
  },
  {
    id: 32,
    title: "Greek Salad",
    category: "mediterranean",
    origin: "🇬🇷 Greece",
    time: "10 min",
    difficulty: 1,
    calories: "200 kcal",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    description: "Crisp cucumbers, tomatoes, olives, and feta with olive oil and oregano. Fresh, simple, and iconic!",
    ingredients: ["2 cucumbers, diced", "4 tomatoes, diced", "1 red onion, sliced", "1/2 cup Kalamata olives", "200g feta cheese, cubed", "3 tbsp extra virgin olive oil", "1 tbsp red wine vinegar", "1 tsp dried oregano", "Salt and pepper", "Fresh parsley"],
    steps: ["Combine cucumbers, tomatoes, red onion, and olives in a large bowl.", "Add feta cheese on top.", "Drizzle with olive oil and red wine vinegar.", "Sprinkle generously with oregano, salt, and pepper.", "Toss gently just before serving. Do not overdress - the vegetables should shine!", "Garnish with fresh parsley."]
  },
  {
    id: 33,
    title: "Ratatouille",
    category: "mediterranean",
    origin: "🇫🇷 France - Provence",
    time: "45 min",
    difficulty: 2,
    calories: "180 kcal",
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600",
    description: "Layered summer vegetables baked in tomato-herb sauce. A colorful Provençal classic!",
    ingredients: ["1 eggplant, sliced", "2 zucchini, sliced", "2 tomatoes, sliced", "1 yellow squash, sliced", "1 red bell pepper, sliced", "1 onion, sliced", "2 cloves garlic, minced", "1 can (400g) crushed tomatoes", "2 tbsp olive oil", "1 tsp thyme", "1 tsp rosemary", "1 bay leaf", "Salt and pepper", "Fresh basil"],
    steps: ["Make sauce: Sauté onions and garlic in olive oil. Add crushed tomatoes, thyme, rosemary, bay leaf, salt, and pepper. Simmer for 15 minutes.", "Spread sauce in the bottom of a baking dish.", "Arrange vegetable slices in alternating patterns (eggplant, zucchini, tomato, squash, pepper) standing upright in the dish.", "Drizzle with olive oil. Season with salt and pepper.", "Cover with parchment paper and bake at 180°C (350°F) for 45 minutes.", "Remove cover and bake for 15 more minutes until vegetables are tender and slightly caramelized.", "Garnish with fresh basil. Serve hot or at room temperature."]
  },
  {
    id: 34,
    title: "Shakshuka",
    category: "mediterranean",
    origin: "🇮🇱 Israel / North Africa",
    time: "30 min",
    difficulty: 1,
    calories: "240 kcal",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=600",
    description: "Eggs poached in a simmering tomato-pepper sauce with spices. A breakfast that feels like a warm hug!",
    ingredients: ["2 tbsp olive oil", "1 onion, diced", "1 red bell pepper, diced", "3 cloves garlic, minced", "1 can (400g) diced tomatoes", "1 tsp cumin", "1 tsp paprika", "1/2 tsp chili powder", "Salt and pepper", "4-6 eggs", "Fresh cilantro or parsley", "Crusty bread for serving"],
    steps: ["Heat olive oil in a skillet. Add onions and bell peppers. Sauté until soft (5 minutes).", "Add garlic, cumin, paprika, and chili powder. Cook for 1 minute.", "Add diced tomatoes with their juice. Simmer for 10 minutes until sauce thickens slightly.", "Season with salt and pepper.", "Make wells in the sauce with a spoon. Crack eggs into each well.", "Cover and cook for 5-8 minutes until egg whites are set but yolks are still runny.", "Garnish with fresh herbs. Serve directly from the pan with crusty bread."]
  },

  // ===== AMERICAN RECIPES (35-39) =====
  {
    id: 35,
    title: "Vegetable Burger",
    category: "american",
    origin: "🇺🇸 USA",
    time: "30 min",
    difficulty: 2,
    calories: "310 kcal",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    description: "Hearty veggie patty with all the fixings. America's favorite sandwich, made meatless!",
    ingredients: ["2 black bean patties (or veggie patties)", "2 burger buns", "Lettuce, tomato, onion slices", "Pickles", "Cheese slice (optional)", "2 tbsp ketchup", "1 tbsp mustard", "1 tbsp mayo", "1 tsp oil", "Salt and pepper"],
    steps: ["Heat oil in a pan. Cook veggie patties according to package instructions or until crispy on both sides.", "If using cheese, place on patty in the last minute to melt.", "Toast burger buns lightly.", "Assemble: Bottom bun → ketchup, mustard, mayo → lettuce → patty with cheese → tomato → onion → pickles → top bun.", "Serve immediately with fries or a side salad."]
  },
  {
    id: 36,
    title: "Mac and Cheese",
    category: "american",
    origin: "🇺🇸 USA",
    time: "35 min",
    difficulty: 1,
    calories: "450 kcal",
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600",
    description: "Creamy, cheesy pasta baked to golden perfection. The ultimate American comfort food!",
    ingredients: ["400g elbow macaroni", "3 tbsp butter", "3 tbsp flour", "2 cups milk", "2 cups cheddar cheese, shredded", "1/2 cup mozzarella, shredded", "1/2 tsp mustard powder", "1/2 tsp paprika", "Salt and pepper", "1/2 cup breadcrumbs", "2 tbsp butter (for topping)"],
    steps: ["Cook macaroni until al dente. Drain and set aside.", "Make cheese sauce: Melt butter, add flour. Cook for 1 minute (roux).", "Gradually whisk in milk until smooth and thickened.", "Add cheddar, mozzarella, mustard powder, paprika, salt, and pepper. Stir until cheese melts.", "Add cooked macaroni to the cheese sauce. Mix well.", "Transfer to a baking dish. Top with breadcrumbs and dot with butter.", "Bake at 180°C (350°F) for 20-25 minutes until golden and bubbly.", "Let cool for 5 minutes before serving."]
  },
  {
    id: 37,
    title: "Caesar Salad",
    category: "american",
    origin: "🇺🇸 USA (Italian-inspired)",
    time: "15 min",
    difficulty: 1,
    calories: "220 kcal",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600",
    description: "Crisp romaine with creamy Caesar dressing, croutons, and parmesan. A salad that needs no introduction!",
    ingredients: ["2 heads romaine lettuce, chopped", "1 cup croutons", "1/2 cup parmesan cheese, shaved", "1/2 cup Caesar dressing", "2 tbsp lemon juice", "Freshly ground black pepper", "Optional: grilled vegetables or tofu"],
    steps: ["Wash and dry romaine lettuce thoroughly. Tear or chop into bite-sized pieces.", "In a large bowl, add lettuce, croutons, and parmesan.", "Drizzle with Caesar dressing and lemon juice.", "Toss until everything is evenly coated.", "Add freshly ground black pepper to taste.", "Serve immediately. Add grilled vegetables or tofu for a heartier meal."]
  },
  {
    id: 38,
    title: "Vegetable Chili",
    category: "american",
    origin: "🇺🇸 USA - Texas",
    time: "45 min",
    difficulty: 1,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Hearty bean and vegetable stew with chili spices. A warming bowl of Texan comfort!",
    ingredients: ["2 cans kidney beans, drained", "1 can black beans, drained", "1 can diced tomatoes", "1 onion, diced", "2 bell peppers, diced", "3 cloves garlic, minced", "2 tbsp chili powder", "1 tsp cumin", "1 tsp smoked paprika", "1/2 tsp oregano", "2 cups vegetable broth", "2 tbsp oil", "Salt and pepper", "Toppings: cheese, sour cream, green onions, cornbread"],
    steps: ["Heat oil in a large pot. Add onions, bell peppers, and garlic. Sauté until soft.", "Add chili powder, cumin, smoked paprika, and oregano. Cook for 1 minute.", "Add beans, diced tomatoes, and vegetable broth. Stir well.", "Bring to a boil, then reduce heat and simmer for 30 minutes.", "Season with salt and pepper. Adjust spices to taste.", "Serve hot with desired toppings and cornbread on the side."]
  },
  {
    id: 39,
    title: "Apple Pie",
    category: "desserts",
    origin: "🇺🇸 United States",
    time: "90 min",
    difficulty: 2,
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600",
    description: "Buttery flaky crust filled with cinnamon-spiced apples. As American as it gets!",
    ingredients: ["2.5 cups all-purpose flour", "1 cup cold butter, cubed", "1 tsp salt", "6-8 tbsp ice water", "6 Granny Smith apples, peeled and sliced", "3/4 cup sugar", "2 tbsp all-purpose flour", "1 tsp cinnamon", "1/4 tsp nutmeg", "1 tbsp lemon juice", "1 egg (for egg wash)", "1 tbsp butter, cubed"],
    steps: ["Mix flour and salt. Cut in cold butter until mixture resembles coarse crumbs.", "Add ice water one tablespoon at a time until dough comes together. Divide in half, wrap, and chill for 1 hour.", "Toss sliced apples with sugar, flour, cinnamon, nutmeg, and lemon juice.", "Roll out one portion of dough and line a 9-inch pie dish.", "Fill with apple mixture. Dot with cubed butter.", "Roll out second portion of dough and place over the filling. Crimp edges and cut vents.", "Brush top with egg wash.", "Bake at 200°C (400°F) for 20 minutes, then reduce to 180°C (350°F) and bake for 35-40 minutes more until golden and bubbling.", "Let cool for at least 2 hours before slicing. Serve with vanilla ice cream."]
  },

  // ===== AFRICAN RECIPES (40-42) =====
  {
    id: 40,
    title: "Jollof Rice",
    category: "african",
    origin: "🇳🇬 Nigeria / West Africa",
    time: "60 min",
    difficulty: 2,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "One-pot rice dish cooked in a rich tomato-based stew. West Africa's most celebrated dish!",
    ingredients: ["2 cups long-grain rice", "1 can (400g) chopped tomatoes", "2 red bell peppers, blended", "1 onion, blended", "3 cloves garlic", "1 inch ginger", "2 tbsp tomato paste", "2 cups vegetable broth", "1 tsp thyme", "1 bay leaf", "1 tsp curry powder", "1/2 tsp chili powder", "2 tbsp oil", "Salt to taste", "Fried plantains for serving"],
    steps: ["Blend tomatoes, bell peppers, onion, garlic, and ginger into a smooth puree.", "Heat oil in a large pot. Add tomato paste and fry for 2 minutes.", "Add the blended puree. Cook for 10 minutes until reduced and oil rises to the top.", "Add broth, thyme, bay leaf, curry powder, chili powder, and salt.", "Bring to a boil. Add rice and stir.", "Reduce heat to low. Cover tightly and cook for 25-30 minutes until rice is tender and liquid is absorbed.", "Do not stir during cooking. Let rest for 5 minutes, then fluff with a fork.", "Remove bay leaf. Serve with fried plantains."]
  },
  {
    id: 41,
    title: "Injera with Wat",
    category: "african",
    origin: "🇪🇹 Ethiopia",
    time: "50 min",
    difficulty: 3,
    calories: "260 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    description: "Spongy sourdough flatbread served with rich vegetable stew. Ethiopia's iconic eating experience!",
    ingredients: ["2 cups teff flour (or whole wheat flour)", "1.5 cups water", "1/2 tsp active dry yeast", "Pinch of salt", "2 cups red lentils", "2 onions, chopped", "3 tomatoes, chopped", "3 cloves garlic", "1 inch ginger", "2 tbsp berbere spice (or 1 tbsp paprika + 1 tsp chili)", "2 tbsp oil", "Salt to taste"],
    steps: ["For injera: Mix teff flour, water, yeast, and salt. Let ferment for 24 hours (or overnight minimum).", "Heat a non-stick pan. Pour batter thinly and cook covered for 2-3 minutes until bubbles form and edges lift. Do not flip.", "For wat (stew): Cook red lentils in water until soft (about 20 minutes).", "In another pan, sauté onions until deeply caramelized (about 10 minutes).", "Add garlic, ginger, tomatoes, and berbere spice. Cook for 5 minutes.", "Add cooked lentils with some cooking water. Simmer for 10 minutes until thick.", "Serve wat on top of injera. Eat with hands by tearing pieces of injera to scoop up the stew."]
  },
  {
    id: 42,
    title: "Moroccan Tagine",
    category: "african",
    origin: "🇲🇦 Morocco",
    time: "60 min",
    difficulty: 2,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600",
    description: "Slow-cooked vegetables with dried fruits and warm spices. A fragrant journey to Morocco!",
    ingredients: ["2 potatoes, cubed", "2 carrots, sliced", "1 zucchini, sliced", "1 eggplant, cubed", "1 onion, sliced", "3 cloves garlic", "1 can (400g) chickpeas", "1/2 cup dried apricots", "1/2 cup raisins", "2 tbsp olive oil", "1 tsp cumin", "1 tsp cinnamon", "1/2 tsp turmeric", "1/2 tsp ginger powder", "1/2 tsp paprika", "Pinch of saffron", "2 cups vegetable broth", "Fresh cilantro", "Salt to taste", "Couscous for serving"],
    steps: ["Heat olive oil in a heavy pot or tagine. Add onions and garlic. Sauté until soft.", "Add all spices (cumin, cinnamon, turmeric, ginger, paprika, saffron). Cook for 1 minute.", "Add potatoes, carrots, and broth. Bring to a boil, then reduce heat and simmer for 15 minutes.", "Add zucchini, eggplant, chickpeas, apricots, and raisins. Simmer for 20 more minutes until vegetables are tender.", "Season with salt. Garnish with fresh cilantro.", "Serve hot over fluffy couscous."]
  },

  // ===== MIDDLE EASTERN RECIPES (43-45) =====
  {
    id: 43,
    title: "Falafel",
    category: "middle-eastern",
    origin: "🇪🇬 Egypt / Middle East",
    time: "30 min",
    difficulty: 2,
    calories: "290 kcal",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600",
    description: "Crispy deep-fried chickpea patties with herbs and spices. The Middle East's favorite street food!",
    ingredients: ["2 cups dried chickpeas, soaked overnight", "1 onion, chopped", "4 cloves garlic", "1 cup fresh parsley", "1 cup fresh cilantro", "1 tsp cumin", "1 tsp coriander powder", "1/2 tsp cayenne", "1/2 tsp baking soda", "Salt and pepper", "Oil for deep frying", "Tahini sauce for serving", "Pita bread"],
    steps: ["Drain soaked chickpeas. Do not cook them - they should be raw.", "Add chickpeas, onion, garlic, parsley, cilantro, and all spices to a food processor.", "Pulse until mixture is finely ground but not paste-like. It should hold together when squeezed.", "Add baking soda and mix well. Let rest for 30 minutes.", "Heat oil to 180°C (350°F).", "Form mixture into small balls or patties using wet hands.", "Deep fry in batches until deep golden and crispy (about 3-4 minutes).", "Drain on paper towels. Serve hot in pita with tahini sauce, salad, and pickles."]
  },
  {
    id: 44,
    title: "Vegetable Shawarma",
    category: "middle-eastern",
    origin: "🇹🇷 Turkey / Middle East",
    time: "35 min",
    difficulty: 2,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1561651823-34a0658ebc9d?w=600",
    description: "Spiced, roasted vegetables served in pita with tahini and fresh salad. A Middle Eastern street food classic made vegetarian!",
    ingredients: ["2 bell peppers, sliced", "2 zucchini, sliced", "1 eggplant, sliced", "1 red onion, sliced", "3 tbsp yogurt", "2 tbsp lemon juice", "3 cloves garlic, minced", "1 tsp cumin", "1 tsp paprika", "1/2 tsp turmeric", "1/2 tsp cinnamon", "1/4 tsp cayenne", "Salt and pepper", "Pita bread", "Tahini sauce", "Tomatoes, cucumbers, onions (sliced)", "Pickled turnips", "Fresh parsley"],
    steps: ["Mix yogurt, lemon juice, garlic, cumin, paprika, turmeric, cinnamon, cayenne, salt, and pepper.", "Marinate sliced vegetables in the mixture for at least 30 minutes.", "Preheat oven to 200°C (400°F). Spread vegetables on a baking sheet.", "Roast for 25-30 minutes until charred and tender, stirring halfway.", "Warm pita bread on the grill or in a dry pan.", "Assemble shawarma: spread tahini on pita, add roasted vegetables, fresh salad, and pickled turnips.", "Roll up the pita and wrap in foil for easy eating.", "Serve with extra tahini sauce and fresh parsley."]
  },
  {
    id: 45,
    title: "Tabbouleh",
    category: "middle-eastern",
    origin: "🇱🇧 Lebanon",
    time: "20 min",
    difficulty: 1,
    calories: "180 kcal",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600",
    description: "Fresh parsley salad with bulgur wheat, tomatoes, and lemon. A refreshing and healthy Middle Eastern staple!",
    ingredients: ["1 cup bulgur wheat, fine grade", "1.5 cups fresh parsley, finely chopped", "1/2 cup fresh mint, finely chopped", "2 tomatoes, finely diced", "1/2 cucumber, finely diced", "1/4 cup green onions, finely sliced", "1/4 cup extra virgin olive oil", "Juice of 2 lemons", "1 tsp salt", "1/2 tsp black pepper", "Lettuce leaves for serving"],
    steps: ["Soak bulgur wheat in hot water for 15 minutes until tender. Drain and squeeze out excess water.", "In a large bowl, combine chopped parsley, mint, tomatoes, cucumber, and green onions.", "Add the drained bulgur wheat to the bowl.", "Pour olive oil and lemon juice over the mixture.", "Season with salt and pepper.", "Toss everything together thoroughly. Let sit for 15 minutes to allow flavors to meld.", "Serve chilled or at room temperature on lettuce leaves."]
  },

  // ===== DESSERTS (10 recipes) =====
  {
    id: 46,
    title: "Tiramisu",
    category: "desserts",
    origin: "🇮🇹 Italy - Veneto",
    time: "30 min",
    difficulty: 2,
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
    description: "Layers of coffee-soaked ladyfingers and mascarpone cream dusted with cocoa. Italy's most famous dessert!",
    ingredients: ["500g mascarpone cheese", "4 large eggs, separated", "1/2 cup sugar", "1 cup strong espresso, cooled", "2 tbsp coffee liqueur (optional)", "200g ladyfinger biscuits (savoiardi)", "Unsweetened cocoa powder for dusting", "Dark chocolate shavings (optional)"],
    steps: ["In a bowl, beat egg yolks with sugar until pale and creamy.", "Add mascarpone cheese and mix until smooth and well combined.", "In a separate clean bowl, whip egg whites until stiff peaks form.", "Gently fold the whipped egg whites into the mascarpone mixture.", "Mix cooled espresso with coffee liqueur in a shallow dish.", "Briefly dip each ladyfinger into the coffee mixture (don't soak too long).", "Arrange a layer of dipped ladyfingers in the bottom of a serving dish.", "Spread half the mascarpone mixture over the ladyfingers.", "Repeat with another layer of ladyfingers and remaining mascarpone mixture.", "Refrigerate for at least 4 hours or overnight. Dust with cocoa powder before serving."]
  },
  {
    id: 47,
    title: "Gulab Jamun",
    category: "desserts",
    origin: "🇮🇳 India",
    time: "45 min",
    difficulty: 2,
    calories: "220 kcal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    description: "Soft, golden-brown milk solids dumplings soaked in fragrant sugar syrup. India's most beloved sweet!",
    ingredients: ["1 cup milk powder", "1/4 cup all-purpose flour", "1/4 tsp baking soda", "2 tbsp ghee", "3-4 tbsp milk (for kneading)", "2 cups sugar", "2 cups water", "4-5 cardamom pods", "1 tsp rose water", "Oil or ghee for deep frying", "Few saffron strands"],
    steps: ["In a bowl, mix milk powder, flour, and baking soda.", "Add ghee and mix well. Gradually add milk to form a soft dough. Do not over-knead.", "Cover and let the dough rest for 15 minutes.", "Meanwhile, prepare the sugar syrup by boiling sugar, water, and cardamom until it reaches a sticky consistency.", "Add rose water and saffron to the syrup. Keep it warm.", "Divide the dough into small portions and roll into smooth balls without cracks.", "Heat oil on low-medium heat and fry the balls until golden brown, stirring constantly for even cooking.", "Drop the hot gulab jamuns into the warm sugar syrup. Let them soak for at least 2 hours before serving."]
  },
  {
    id: 48,
    title: "Chocolate Lava Cake",
    category: "desserts",
    origin: "🇫🇷 France",
    time: "25 min",
    difficulty: 2,
    calories: "380 kcal",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600",
    description: "Warm chocolate cake with a molten center that flows like lava. A French dessert masterpiece!",
    ingredients: ["100g dark chocolate (70% cocoa)", "100g butter", "2 eggs", "2 egg yolks", "1/2 cup sugar", "2 tbsp all-purpose flour", "Pinch of salt", "Cocoa powder for dusting", "Vanilla ice cream for serving"],
    steps: ["Preheat oven to 200°C (400°F). Grease 4 ramekins with butter and dust with cocoa powder.", "Melt chocolate and butter together in a double boiler or microwave. Stir until smooth.", "In a bowl, whisk eggs, egg yolks, and sugar until pale and fluffy.", "Fold the melted chocolate into the egg mixture.", "Gently fold in flour and salt until just combined.", "Divide batter among prepared ramekins.", "Bake for 12-14 minutes. The edges should be firm but the center still soft.", "Let cool for 1 minute. Run a knife around the edges and invert onto plates.", "Dust with cocoa powder and serve immediately with vanilla ice cream."]
  },
  {
    id: 49,
    title: "Crème Brûlée",
    category: "desserts",
    origin: "🇫🇷 France",
    time: "45 min",
    difficulty: 2,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600",
    description: "Rich vanilla custard with a caramelized sugar crust. The satisfying crack of the top makes it irresistible!",
    ingredients: ["2 cups heavy cream", "1 vanilla bean (or 1 tsp vanilla extract)", "5 egg yolks", "1/2 cup sugar, plus extra for topping", "Pinch of salt", "Hot water for bain-marie"],
    steps: ["Preheat oven to 150°C (300°F).", "Heat cream with vanilla bean (split and scraped) in a saucepan until just simmering. Remove from heat and let infuse for 15 minutes.", "In a bowl, whisk egg yolks with sugar and salt until pale.", "Slowly pour the warm cream into the egg mixture, whisking constantly.", "Strain the mixture through a fine sieve.", "Divide among 4 ramekins. Place ramekins in a baking dish.", "Pour hot water into the baking dish until it reaches halfway up the ramekins.", "Bake for 30-35 minutes until set but still slightly jiggly in the center.", "Remove from water bath and refrigerate for at least 3 hours.", "Before serving, sprinkle a thin layer of sugar on top. Caramelize with a kitchen torch or under the broiler until golden and crisp."]
  },
  {
    id: 50,
    title: "Apple Pie",
    category: "desserts",
    origin: "🇺🇸 United States",
    time: "90 min",
    difficulty: 2,
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600",
    description: "Buttery flaky crust filled with cinnamon-spiced apples. As American as it gets!",
    ingredients: ["2.5 cups all-purpose flour", "1 cup cold butter, cubed", "1 tsp salt", "6-8 tbsp ice water", "6 Granny Smith apples, peeled and sliced", "3/4 cup sugar", "2 tbsp all-purpose flour", "1 tsp cinnamon", "1/4 tsp nutmeg", "1 tbsp lemon juice", "1 egg (for egg wash)", "1 tbsp butter, cubed"],
    steps: ["Mix flour and salt. Cut in cold butter until mixture resembles coarse crumbs.", "Add ice water one tablespoon at a time until dough comes together. Divide in half, wrap, and chill for 1 hour.", "Toss sliced apples with sugar, flour, cinnamon, nutmeg, and lemon juice.", "Roll out one portion of dough and line a 9-inch pie dish.", "Fill with apple mixture. Dot with cubed butter.", "Roll out second portion of dough and place over the filling. Crimp edges and cut vents.", "Brush top with egg wash.", "Bake at 200°C (400°F) for 20 minutes, then reduce to 180°C (350°F) and bake for 35-40 minutes more until golden and bubbling.", "Let cool for at least 2 hours before slicing. Serve with vanilla ice cream."]
  },
  {
    id: 51,
    title: "New York Cheesecake",
    category: "desserts",
    origin: "🇺🇸 United States - New York",
    time: "90 min",
    difficulty: 3,
    calories: "420 kcal",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600",
    description: "Rich, dense, and creamy cheesecake with a graham cracker crust. The Big Apple's sweetest contribution!",
    ingredients: ["250g graham crackers, crushed", "100g butter, melted", "900g cream cheese, softened", "1.5 cups sugar", "4 large eggs", "2/3 cup sour cream", "2/3 cup heavy cream", "2 tsp vanilla extract", "1 tbsp lemon juice", "2 tbsp all-purpose flour", "Fresh berries for topping"],
    steps: ["Preheat oven to 170°C (325°F). Wrap the outside of a 9-inch springform pan with foil.", "Mix graham cracker crumbs with melted butter. Press firmly into the bottom of the pan.", "Bake crust for 10 minutes. Let cool.", "Beat cream cheese until smooth and creamy. Add sugar and beat until combined.", "Add eggs one at a time, beating after each addition. Do not overmix.", "Add sour cream, heavy cream, vanilla, lemon juice, and flour. Mix until just combined.", "Pour filling over the cooled crust.", "Place the springform pan in a larger pan. Fill the larger pan with hot water halfway up the sides.", "Bake for 60-70 minutes until edges are set but center still jiggles slightly.", "Turn off oven, crack the door, and let cheesecake cool in the oven for 1 hour.", "Refrigerate for at least 4 hours or overnight. Top with fresh berries before serving."]
  },
  {
    id: 52,
    title: "Rasgulla",
    category: "desserts",
    origin: "🇮🇳 India - West Bengal",
    time: "50 min",
    difficulty: 3,
    calories: "120 kcal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    description: "Soft, spongy cheese balls soaked in light sugar syrup. A delicate Bengali sweet that's pure bliss!",
    ingredients: ["1 liter full-fat milk", "2 tbsp lemon juice (or vinegar)", "3 cups sugar", "6 cups water", "1/2 tsp cardamom powder", "1 tsp rose water", "Ice cubes"],
    steps: ["Bring milk to a boil. Add lemon juice and stir until milk curdles completely.", "Strain through a muslin cloth. Rinse the chenna (curdled milk) under cold water to remove lemon flavor.", "Hang the cloth for 30 minutes to drain excess water.", "Knead the chenna with your palm for 8-10 minutes until smooth and soft.", "Divide into small portions and roll into smooth balls without cracks.", "In a wide pot, boil sugar and water together. Add cardamom powder.", "Gently drop the chenna balls into the boiling syrup.", "Cover and cook on medium-high heat for 15-20 minutes. The balls will double in size.", "Add rose water. Let cool completely. Refrigerate for 2 hours before serving."]
  },
  {
    id: 53,
    title: "Baklava",
    category: "desserts",
    origin: "🇹🇷 Turkey / Middle East",
    time: "90 min",
    difficulty: 3,
    calories: "380 kcal",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600",
    description: "Layers of flaky phyllo pastry filled with chopped nuts and sweetened with honey syrup. A Middle Eastern treasure!",
    ingredients: ["1 package phyllo dough (about 40 sheets)", "2 cups mixed nuts (walnuts, pistachios, almonds), finely chopped", "1 cup melted butter", "1 tsp ground cinnamon", "1/4 tsp ground cloves", "2 cups sugar", "1 cup water", "1/2 cup honey", "1 tsp vanilla extract", "1 lemon juice"],
    steps: ["Preheat oven to 180°C (350°F). Grease a 9x13 inch baking dish.", "Mix chopped nuts with cinnamon and cloves in a bowl.", "Brush the bottom of the dish with melted butter. Place 8 sheets of phyllo, brushing each with butter.", "Sprinkle a thin layer of nut mixture over the phyllo.", "Place 4 more buttered phyllo sheets, then another layer of nuts. Repeat until all nuts are used.", "Top with 8 more buttered phyllo sheets. Brush the top generously with butter.", "Cut into diamond shapes using a sharp knife before baking.", "Bake for 50-60 minutes until golden brown and crispy.", "While baking, make syrup: boil sugar, water, honey, vanilla, and lemon juice for 10 minutes. Let cool slightly.", "Pour the warm syrup over the hot baklava immediately after removing from oven. Let soak for at least 4 hours before serving."]
  },
  {
    id: 54,
    title: "Churros with Chocolate",
    category: "desserts",
    origin: "🇲🇽 Mexico / Spain",
    time: "30 min",
    difficulty: 2,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1628326037352-7a7c409e75b7?w=600",
    description: "Crispy fried dough sticks coated in cinnamon sugar, served with thick hot chocolate. A sweet fiesta!",
    ingredients: ["1 cup water", "1/2 cup butter", "1/4 tsp salt", "1 cup all-purpose flour", "3 eggs", "1 tsp vanilla extract", "1/2 cup sugar", "1 tbsp cinnamon", "Oil for frying", "200g dark chocolate, chopped", "1 cup heavy cream", "1 tbsp butter"],
    steps: ["In a saucepan, bring water, butter, and salt to a boil.", "Remove from heat and add flour all at once. Stir vigorously until a smooth dough forms.", "Let the dough cool for 5 minutes. Add eggs one at a time, mixing well after each addition.", "Add vanilla extract and mix until smooth.", "Heat oil to 180°C (350°F). Transfer dough to a piping bag with a star tip.", "Pipe 4-5 inch strips directly into the hot oil. Fry until golden brown, about 2-3 minutes per side.", "Mix sugar and cinnamon in a shallow dish. Roll hot churros in the mixture.", "For chocolate sauce: heat cream until simmering. Pour over chopped chocolate. Let sit for 2 minutes, then stir until smooth. Add butter.", "Serve churros warm with chocolate dipping sauce."]
  },
  {
    id: 55,
    title: "Kheer (Rice Pudding)",
    category: "desserts",
    origin: "🇮🇳 India",
    time: "45 min",
    difficulty: 1,
    calories: "280 kcal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    description: "Creamy rice pudding cooked with milk, cardamom, and nuts. A comforting Indian dessert for every occasion!",
    ingredients: ["1/2 cup basmati rice, rinsed", "4 cups full-fat milk", "1/2 cup sugar", "1/4 cup condensed milk (optional)", "1/2 tsp cardamom powder", "2 tbsp ghee", "10-12 almonds, sliced", "10-12 pistachios, sliced", "10-12 cashews, broken", "Few saffron strands", "1 tbsp rose water (optional)"],
    steps: ["Soak rice in water for 30 minutes. Drain.", "In a heavy-bottomed pot, heat ghee. Add drained rice and sauté for 2 minutes.", "Add milk and bring to a boil. Reduce heat to low and simmer, stirring occasionally.", "Cook for 30-35 minutes until rice is fully cooked and milk has thickened.", "Add sugar and condensed milk (if using). Stir well.", "Add cardamom powder, saffron, and half the nuts. Mix well.", "Cook for 5 more minutes until kheer reaches desired consistency.", "Remove from heat. Add rose water if desired.", "Garnish with remaining nuts. Serve warm or chilled."]
  }
];

// ===== DOM ELEMENTS =====
const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('searchInput');
const filterTags = document.querySelectorAll('.filter-tag');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const navbar = document.querySelector('.navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const pageLoader = document.getElementById('pageLoader');

// ===== PANTRY FILTER DATA =====
const pantryItems = [
  "Paneer", "Tofu", "Chickpeas", "Lentils", "Rice", "Pasta", "Noodles",
  "Potatoes", "Tomatoes", "Onions", "Garlic", "Ginger", "Spinach", "Cabbage",
  "Carrots", "Bell Peppers", "Mushrooms", "Eggplant", "Zucchini", "Cauliflower",
  "Broccoli", "Corn", "Peas", "Beans", "Avocado", "Cucumber", "Lemon",
  "Coconut Milk", "Yogurt", "Cream", "Cheese", "Eggs", "Butter", "Oil",
  "Flour", "Sugar", "Honey", "Chocolate", "Nuts", "Sesame Seeds",
  "Soy Sauce", "Tahini", "Miso", "Kimchi", "Tamarind", "Curry Powder",
  "Cumin", "Coriander", "Turmeric", "Paprika", "Cinnamon", "Cardamom",
  "Basil", "Cilantro", "Mint", "Parsley", "Nori", "Phyllo Dough"
];

let selectedPantryItems = [];

// ===== RENDER PANTRY ITEMS =====
function renderPantryItems() {
  const pantryContainer = document.getElementById('pantryItems');
  if (!pantryContainer) return;

  pantryContainer.innerHTML = pantryItems.map(item => `
    <span class="pantry-item ${selectedPantryItems.includes(item) ? 'selected' : ''}" 
          onclick="togglePantryItem('${item}')">${item}</span>
  `).join('');
}

function togglePantryItem(item) {
  if (selectedPantryItems.includes(item)) {
    selectedPantryItems = selectedPantryItems.filter(i => i !== item);
  } else {
    selectedPantryItems.push(item);
  }
  renderPantryItems();
  showToast(`${item} ${selectedPantryItems.includes(item) ? 'added' : 'removed'} from pantry`);
}

function findRecipesByPantry() {
  if (selectedPantryItems.length === 0) {
    showToast('Please select at least one ingredient!');
    return;
  }

  const matchingRecipes = recipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients.join(' ').toLowerCase();
    return selectedPantryItems.some(item => 
      recipeIngredients.includes(item.toLowerCase())
    );
  });

  currentCategory = 'all';
  currentSearch = '';
  searchInput.value = '';
  filterTags.forEach(t => t.classList.remove('active'));
  document.querySelector('.filter-tag[data-category="all"]').classList.add('active');

  renderRecipes(matchingRecipes);

  if (matchingRecipes.length === 0) {
    showToast('No recipes found with selected ingredients. Try adding more items!');
  } else {
    showToast(`Found ${matchingRecipes.length} recipes you can make!`);
  }

  document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
}

function clearPantry() {
  selectedPantryItems = [];
  renderPantryItems();
  renderRecipes(recipes);
  showToast('Pantry cleared!');
}

// ===== RENDER RECIPES =====
function renderRecipes(recipesToRender) {
  recipesGrid.innerHTML = '';

  if (recipesToRender.length === 0) {
    recipesGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🍽️</div>
        <h3>No recipes found!</h3>
        <p>Try a different search term, category, or add more pantry items.</p>
      </div>
    `;
    return;
  }

  recipesToRender.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-card fade-in';
    card.style.animationDelay = `${index * 0.05}s`;

    const difficultyDots = Array(3).fill(0).map((_, i) => 
      `<span class="difficulty-dot ${i < recipe.difficulty ? 'filled' : ''}"></span>`
    ).join('');

    card.innerHTML = `
      <div class="recipe-image-container">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600'">
        <span class="recipe-category-badge badge-${recipe.category}">${recipe.category}</span>
        <span class="recipe-time-badge">⏱️ ${recipe.time}</span>
      </div>
      <div class="recipe-content">
        <div class="recipe-origin">${recipe.origin}</div>
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-meta">
          <div class="recipe-difficulty" title="Difficulty: ${recipe.difficulty}/3">
            ${difficultyDots}
          </div>
          <span class="recipe-calories">🔥 ${recipe.calories}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(recipe));
    recipesGrid.appendChild(card);
  });

  // Trigger fade-in animation
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 100);
}

// ===== OPEN MODAL =====
function openModal(recipe) {
  const difficultyDots = Array(3).fill(0).map((_, i) => 
    `<span class="difficulty-dot ${i < recipe.difficulty ? 'filled' : ''}"></span>`
  ).join('');

  const ingredientsList = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
  const stepsList = recipe.steps.map(step => `<li>${step}</li>`).join('');

  modalContent.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" class="modal-image" onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600'">
    <div class="modal-body">
      <div class="modal-header">
        <span class="recipe-category-badge badge-${recipe.category}">${recipe.category}</span>
        <h2 class="modal-title">${recipe.title}</h2>
        <div class="modal-meta">
          <span class="modal-meta-item">${recipe.origin}</span>
          <span class="modal-meta-item">⏱️ ${recipe.time}</span>
          <span class="modal-meta-item">🔥 ${recipe.calories}</span>
          <span class="modal-meta-item">Difficulty: ${difficultyDots}</span>
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">📝 Description</h3>
        <p>${recipe.description}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">🥘 Ingredients</h3>
        <ul class="ingredients-list">
          ${ingredientsList}
        </ul>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">👨‍🍳 Instructions</h3>
        <ol class="steps-list">
          ${stepsList}
        </ol>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== SEARCH & FILTER =====
let currentCategory = 'all';
let currentSearch = '';

function filterRecipes() {
  let filtered = recipes;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(r => r.category === currentCategory);
  }

  if (currentSearch) {
    const searchLower = currentSearch.toLowerCase();
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(searchLower) ||
      r.description.toLowerCase().includes(searchLower) ||
      r.origin.toLowerCase().includes(searchLower) ||
      r.ingredients.some(ing => ing.toLowerCase().includes(searchLower))
    );
  }

  renderRecipes(filtered);
}

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  filterRecipes();
});

filterTags.forEach(tag => {
  tag.addEventListener('click', () => {
    filterTags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    currentCategory = tag.dataset.category;
    filterRecipes();
  });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Scroll to top button
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== MOBILE MENU =====
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => observer.observe(el));

// ===== CATEGORY CARD CLICK =====
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    filterTags.forEach(t => t.classList.remove('active'));
    document.querySelector(`.filter-tag[data-category="${category}"]`).classList.add('active');
    currentCategory = category;
    filterRecipes();
    document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== FEEDBACK FORM =====
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('feedbackName').value;
    const email = document.getElementById('feedbackEmail').value;
    const rating = document.getElementById('feedbackRating').value;
    const message = document.getElementById('feedbackMessage').value;

    if (name && email && message) {
      showToast(`Thank you ${name}! Your feedback has been received. ⭐ Rating: ${rating}/5`);
      feedbackForm.reset();
      document.querySelectorAll('.rating-stars span').forEach(s => s.classList.remove('active'));
    } else {
      showToast('Please fill in all required fields!');
    }
  });
}

// ===== RATING STARS =====
document.querySelectorAll('.rating-stars span').forEach((star, index) => {
  star.addEventListener('click', () => {
    document.querySelectorAll('.rating-stars span').forEach((s, i) => {
      if (i <= index) {
        s.classList.add('active');
        s.textContent = '⭐';
      } else {
        s.classList.remove('active');
        s.textContent = '☆';
      }
    });
    document.getElementById('feedbackRating').value = index + 1;
  });
});

// ===== TOAST NOTIFICATION =====
function showToast(message) {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ===== MARQUEE CLONE FOR INFINITE SCROLL =====
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.innerHTML += marqueeTrack.innerHTML;
}

// ===== PAGE LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    if (pageLoader) {
      pageLoader.classList.add('hidden');
    }
  }, 1500);
});

// ===== INITIAL RENDER =====
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes(recipes);
  renderPantryItems();
});

// ===== GLOBAL FUNCTIONS =====
window.filterByCategory = function(category) {
  filterTags.forEach(t => t.classList.remove('active'));
  document.querySelector(`.filter-tag[data-category="${category}"]`).classList.add('active');
  currentCategory = category;
  filterRecipes();
  document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
  return false;
};

window.togglePantryItem = togglePantryItem;
window.findRecipesByPantry = findRecipesByPantry;
window.clearPantry = clearPantry;
