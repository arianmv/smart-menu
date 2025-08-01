// --- DATA ---
const appData = {
  text: {
    en: {
      headerSubtitle: "Digital Menu",
      allCategories: "All",
      ingredients: "Ingredients",
      badges: {
        chef: "Chef's Suggestion",
        new: "New!",
        spicy: "Spicy",
        popular: "Popular",
      },
    },
    pt: {
      headerSubtitle: "Menu Digital",
      allCategories: "Todos",
      ingredients: "Ingredientes",
      badges: {
        chef: "Sugestão do Chef",
        new: "Novo!",
        spicy: "Picante",
        popular: "Popular",
      },
    },
  },
  menu: {
    categories: {
      en: ["Starters", "Pizza", "Sandwiches", "Desserts", "Drinks"],
      pt: ["Entradas", "Pizza", "Sanduíches", "Sobremesas", "Bebidas"],
    },
    items: [
      {
        id: 7,
        name: { en: "Bruschetta", pt: "Bruschetta" },
        category: { en: "Starters", pt: "Entradas" },
        price: "8.50",
        description: {
          en: "Toasted bread with fresh tomatoes, garlic, basil, and a drizzle of balsamic glaze.",
          pt: "Pão torrado com tomates frescos, alho, manjericão e um fio de creme balsâmico.",
        },
        image:
          "https://images.unsplash.com/photo-1505253716362-afb542cabc80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        badges: ["popular"],
        ingredients: [
          { name: { en: "Tomato", pt: "Tomate" }, icon: "🍅" },
          { name: { en: "Garlic", pt: "Alho" }, icon: "🧄" },
          { name: { en: "Basil", pt: "Manjericão" }, icon: "🌿" },
        ],
      },
      {
        id: 8,
        name: { en: "Caprese Salad", pt: "Salada Caprese" },
        category: { en: "Starters", pt: "Entradas" },
        price: "9.00",
        description: {
          en: "Simple and delicious salad with fresh mozzarella, tomatoes, basil, and olive oil.",
          pt: "Salada simples e deliciosa com mozzarella fresca, tomate, manjericão e azeite.",
        },
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6b5f46b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        badges: [],
        ingredients: [
          { name: { en: "Mozzarella", pt: "Mozzarella" }, icon: "🧀" },
          { name: { en: "Tomato", pt: "Tomate" }, icon: "🍅" },
          { name: { en: "Basil", pt: "Manjericão" }, icon: "🌿" },
        ],
      },
      {
        id: 1,
        name: { en: "Margherita Pizza", pt: "Pizza Margherita" },
        category: { en: "Pizza", pt: "Pizza" },
        price: "12.50",
        description: {
          en: "A timeless classic with fresh tomatoes, mozzarella cheese, and aromatic basil.",
          pt: "Um clássico intemporal com tomates frescos, queijo mozzarella e manjericão aromático.",
        },
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        badges: ["chef"],
        ingredients: [
          { name: { en: "Tomato", pt: "Tomate" }, icon: "🍅" },
          { name: { en: "Mozzarella", pt: "Mozzarella" }, icon: "🧀" },
          { name: { en: "Basil", pt: "Manjericão" }, icon: "🌿" },
        ],
      },
      {
        id: 2,
        name: { en: "Spicy Pepperoni", pt: "Pepperoni Picante" },
        category: { en: "Pizza", pt: "Pizza" },
        price: "14.00",
        description: {
          en: "For those who like it hot. Loaded with spicy pepperoni and chili flakes.",
          pt: "Para quem gosta de picante. Carregada com pepperoni picante e flocos de pimenta.",
        },
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        badges: ["spicy"],
        ingredients: [
          { name: { en: "Pepperoni", pt: "Pepperoni" }, icon: "🍕" },
          { name: { en: "Chili Flakes", pt: "Pimenta" }, icon: "🌶️" },
          { name: { en: "Mozzarella", pt: "Mozzarella" }, icon: "🧀" },
        ],
      },
      {
        id: 3,
        name: { en: "Club Sandwich", pt: "Sanduíche Club" },
        category: { en: "Sandwiches", pt: "Sanduíches" },
        price: "10.50",
        description: {
          en: "A triple-decker sandwich with grilled chicken, bacon, lettuce, tomato, and mayo.",
          pt: "Uma sanduíche de três andares com frango grelhado, bacon, alface, tomate e maionese.",
        },
        image:
          "https://images.unsplash.com/photo-1619894992620-f52a73945a27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        badges: [],
        ingredients: [
          { name: { en: "Chicken", pt: "Frango" }, icon: "🍗" },
          { name: { en: "Bacon", pt: "Bacon" }, icon: "🥓" },
          { name: { en: "Lettuce", pt: "Alface" }, icon: "🥬" },
          { name: { en: "Tomato", pt: "Tomate" }, icon: "🍅" },
        ],
      },
      {
        id: 4,
        name: { en: "Tiramisu", pt: "Tiramisu" },
        category: { en: "Desserts", pt: "Sobremesas" },
        price: "7.00",
        description: {
          en: "A creamy dessert of espresso-soaked ladyfingers surrounded by lightly sweetened whipped cream and a rich mascarpone.",
          pt: "Uma sobremesa cremosa de palitos de la reine embebidos em café, rodeados por natas batidas e um rico mascarpone.",
        },
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        badges: ["chef"],
        ingredients: [
          { name: { en: "Espresso", pt: "Café Expresso" }, icon: "☕" },
          { name: { en: "Mascarpone", pt: "Mascarpone" }, icon: "🧀" },
          { name: { en: "Cocoa", pt: "Cacau" }, icon: "🍫" },
        ],
      },
      {
        id: 5,
        name: { en: "Chocolate Lava Cake", pt: "Bolo de Chocolate Vulcão" },
        category: { en: "Desserts", pt: "Sobremesas" },
        price: "8.00",
        description: {
          en: "A decadent chocolate cake with a warm, liquid chocolate center. Served with a scoop of vanilla ice cream.",
          pt: "Um bolo de chocolate decadente com um centro de chocolate líquido e quente. Servido com uma bola de gelado de baunilha.",
        },
        image:
          "https://images.unsplash.com/photo-1542826438-c32144d5d2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        badges: ["new"],
        ingredients: [
          { name: { en: "Dark Chocolate", pt: "Chocolate Negro" }, icon: "🍫" },
          { name: { en: "Butter", pt: "Manteiga" }, icon: "🧈" },
          {
            name: { en: "Vanilla Ice Cream", pt: "Gelado de Baunilha" },
            icon: "🍨",
          },
        ],
      },
      {
        id: 6,
        name: { en: "Fresh Orange Juice", pt: "Sumo de Laranja Natural" },
        category: { en: "Drinks", pt: "Bebidas" },
        price: "4.00",
        description: {
          en: "100% freshly squeezed orange juice. A perfect, healthy refreshment.",
          pt: "Sumo de laranja 100% espremido na hora. Um refresco perfeito e saudável.",
        },
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        badges: [],
        ingredients: [{ name: { en: "Oranges", pt: "Laranjas" }, icon: "🍊" }],
      },
    ],
  },
};

// --- STATE ---
let currentState = {
  language: "en",
  theme: "dark",
  activeCategory: "All",
};

// --- DOM ELEMENTS ---
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const languageToggle = document.getElementById("language-toggle");
const categoryFiltersContainer = document.getElementById("category-filters");
const menuGrid = document.getElementById("menu-grid");
const detailView = document.getElementById("detail-view");

// --- RENDER FUNCTIONS ---
function renderCategories() {
  const lang = currentState.language;
  const categories = [
    appData.text[lang].allCategories,
    ...appData.menu.categories[lang],
  ];
  categoryFiltersContainer.innerHTML = categories
    .map((category) => {
      const isActive = category === currentState.activeCategory;
      return `
                    <button 
                        class="category-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 
                        ${
                          isActive
                            ? "bg-primary-light dark:bg-primary-dark text-white"
                            : "bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700"
                        }"
                        data-category="${category}">
                        ${category}
                    </button>
                `;
    })
    .join("");
}

function renderMenuItems() {
  const lang = currentState.language;
  const activeCat = currentState.activeCategory;
  const textData = appData.text[lang];

  const filteredItems =
    activeCat === textData.allCategories
      ? appData.menu.items
      : appData.menu.items.filter((item) => item.category[lang] === activeCat);

  menuGrid.innerHTML = filteredItems
    .map((item) => {
      const badgeHTML = item.badges
        .map((badgeKey) => {
          const badgeColors = {
            chef: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
            spicy: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
            popular:
              "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
          };
          return `<span class="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${badgeColors[badgeKey]}">${textData.badges[badgeKey]}</span>`;
        })
        .join("");

      return `
                    <div class="menu-item-card bg-surface-light dark:bg-surface-dark rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200 flex flex-col transition-shadow hover:shadow-xl" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name[lang]}" class="w-full h-32 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/ffffff?text=Image+Not+Found';">
                        <div class="p-4 flex flex-col flex-grow">
                            <h3 class="font-bold text-md truncate">${item.name[lang]}</h3>
                            <div class="mt-2 flex flex-wrap gap-y-1">${badgeHTML}</div>
                            <p class="text-primary-light dark:text-primary-dark font-semibold mt-auto pt-2">€${item.price}</p>
                        </div>
                    </div>
                `;
    })
    .join("");
}

function renderDetailView(itemId) {
  const lang = currentState.language;
  const textData = appData.text[lang];
  const item = appData.menu.items.find((i) => i.id === itemId);

  if (!item) return;

  const ingredientsHTML = item.ingredients
    .map(
      (ing) => `
                <div class="flex items-center space-x-3 bg-background-light dark:bg-background-dark p-3 rounded-lg ring-1 ring-gray-200 dark:ring-gray-700">
                    <span class="text-2xl">${ing.icon}</span>
                    <span class="text-text-secondary-light dark:text-text-secondary-dark">${ing.name[lang]}</span>
                </div>
            `
    )
    .join("");

  detailView.innerHTML = `
                <header class="p-4 flex-shrink-0 absolute top-0 left-0 z-10">
                    <button id="close-detail-view" class="bg-black bg-opacity-40 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </header>

                <div class="flex-grow overflow-y-auto no-scrollbar">
                    <img src="${item.image}" alt="${item.name[lang]}" class="w-full h-64 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/ffffff?text=Image+Not+Found';">
                    <div class="p-6">
                        <h2 class="text-3xl font-bold">${item.name[lang]}</h2>
                        <p class="text-2xl font-semibold text-primary-light dark:text-primary-dark my-2">€${item.price}</p>
                        <p class="text-text-secondary-light dark:text-text-secondary-dark mt-4 mb-6">${item.description[lang]}</p>
                        
                        <h3 class="text-xl font-bold mb-4">${textData.ingredients}</h3>
                        <div class="grid grid-cols-2 gap-3">
                            ${ingredientsHTML}
                        </div>
                    </div>
                </div>
            `;

  detailView.classList.remove("translate-y-full", "opacity-0");
  document.body.style.overflow = "hidden";
}

// --- EVENT HANDLERS ---
function handleThemeToggle() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    currentState.theme = "dark";
    // In dark mode, show sun icon to switch to light
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    currentState.theme = "light";
    // In light mode, show moon icon to switch to dark
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}

function handleLanguageToggle() {
  currentState.language = currentState.language === "en" ? "pt" : "en";
  // Update button to show current language
  languageToggle.textContent = currentState.language.toUpperCase();
  currentState.activeCategory =
    appData.text[currentState.language].allCategories;
  updateAllText();
}

function updateAllText() {
  const lang = currentState.language;
  document.getElementById("header-subtitle").textContent =
    appData.text[lang].headerSubtitle;
  renderCategories();
  renderMenuItems();
}

function handleCategoryClick(e) {
  if (e.target.classList.contains("category-btn")) {
    currentState.activeCategory = e.target.dataset.category;
    renderCategories();
    renderMenuItems();
  }
}

function handleMenuItemClick(e) {
  const card = e.target.closest(".menu-item-card");
  if (card) {
    const itemId = parseInt(card.dataset.id, 10);
    renderDetailView(itemId);
  }
}

function handleCloseDetailView() {
  detailView.classList.add("translate-y-full", "opacity-0");
  document.body.style.overflow = "auto";
}

// --- INITIALIZATION ---
function init() {
  // Set initial theme based on state
  if (currentState.theme === "dark") {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }

  // Set initial language text
  languageToggle.textContent = currentState.language.toUpperCase();
  currentState.activeCategory =
    appData.text[currentState.language].allCategories;

  // Initial render
  updateAllText();

  // Attach event listeners
  themeToggle.addEventListener("click", handleThemeToggle);
  languageToggle.addEventListener("click", handleLanguageToggle);
  categoryFiltersContainer.addEventListener("click", handleCategoryClick);
  menuGrid.addEventListener("click", handleMenuItemClick);
  detailView.addEventListener("click", (e) => {
    if (e.target.closest("#close-detail-view")) {
      handleCloseDetailView();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
