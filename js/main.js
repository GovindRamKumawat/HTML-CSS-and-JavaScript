const recipes = [
  {
    id: 43,
    title: "Falafel Wrap",
    category: "middle-eastern",
    origin: "🇱🇧 Lebanon",
    time: "25 min",
    difficulty: 1,
    calories: "320 kcal",
    image: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=600",
    description: "Crispy falafel wrapped in warm pita with tahini, salad, and pickles. A handheld Middle Eastern delight!",
    ingredients: ["4 pita breads, warmed", "8 falafel balls (homemade or store-bought)", "1/2 cup hummus", "1/4 cup tahini sauce", "1 tomato, diced", "1 cucumber, diced", "1/4 cup pickled turnips", "1/4 cup pickled cucumbers", "Fresh lettuce, shredded", "Fresh parsley, chopped", "Hot sauce (optional)"],
    steps: ["Warm pita breads in a dry pan or oven for 1-2 minutes.", "Spread hummus generously on one side of each pita.", "Place 2 falafel balls in the center of each pita. Gently flatten them.", "Top with diced tomatoes, cucumbers, pickled vegetables, and lettuce.", "Drizzle with tahini sauce and hot sauce if desired.", "Sprinkle with fresh parsley.", "Fold the bottom of the pita up, then roll tightly from one side.", "Wrap in foil or parchment paper for easy eating. Serve immediately."]
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
