const productCategories = [
  {
    name: "For Men",
    products: [
      {
        id: "men-vitality-01",
        sku: "RSF-MEN-VIT-01",
        name: "Vitality Blend",
        category: "Men",
        rating: 4.5,
        image: "/images/products/men/prod1.png",
        tags: ["Bestseller", "Clean Label"],

        overview:
          "A revitalising millet-based beverage blend crafted to support daily energy, stamina, and consistent performance for modern lifestyles.",

        shortDescription:
          "Balanced millet-based nourishment crafted to support daily energy and active routines.",

        sizes: [
          { label: "200 g", originalPrice: 699, currentPrice: 549, maxPerOrder: 5 },
          { label: "454 g", originalPrice: 1299, currentPrice: 1099, maxPerOrder: 5 },
          { label: "908 g", originalPrice: 2299, currentPrice: 1999, maxPerOrder: 5 },
        ],

        keyBenefits: [
          "Supports sustained daily energy",
          "Millet & cereal-based formulation",
          "Designed for regular consumption",
          "No artificial additives",
        ],

        ingredients:
          "Foxtail millet, ragi, whole grains, natural plant extracts, functional herbs.",

        nutritionalHighlights: [
          "Rich in plant protein",
          "High dietary fiber",
          "Iron & essential micronutrients",
          "No added preservatives",
        ],

        preparation: {
          hot: "Add 2 tablespoons to 200 ml warm milk or water. Stir well and serve.",
          cold: "Blend with chilled milk, shake well, and enjoy as a refreshing beverage.",
        },

        availability: "In Stock",
      },

      {
        id: "men-performance-02",
        sku: "RSF-MEN-PERF-02",
        name: "Performance Blend",
        category: "Men",
        rating: 4.3,
        image: "/images/products/men/prod2.png",

        tags: ["New"],

        overview:
          "Formulated to complement endurance and focus, combining traditional grains with functional botanicals.",

        shortDescription:
          "Functional herb and cereal blend formulated to support stamina and focus.",

        sizes: [
          { label: "200 g", originalPrice: 749, currentPrice: 599, maxPerOrder: 5 },
          { label: "454 g", originalPrice: 1399, currentPrice: 1199, maxPerOrder: 5 },
          { label: "908 g", originalPrice: 2399, currentPrice: 2099, maxPerOrder: 5 },
        ],

        keyBenefits: [
          "Supports active routines",
          "Balanced cereal blend",
          "Gentle on digestion",
        ],

        ingredients:
          "Whole wheat extract, ragi, millets, natural herbs, plant nutrients.",

        nutritionalHighlights: [
          "Source of complex carbohydrates",
          "High fiber",
          "Plant-based protein",
        ],

        preparation: {
          hot: "Mix with warm milk and stir continuously for smooth texture.",
          cold: "Shake with chilled milk and serve immediately.",
        },

        availability: "Out of Stock",
      },

      // {
      //   id: "men-endurance-03",
      //   sku: "RSF-MEN-END-03",
      //   name: "Endurance Blend",
      //   category: "Men",
      //   rating: 4.6,
      //   image: "/images/prod3/prod.png",
      //   tags: ["Premium"],

      //   overview:
      //     "A nutrient-dense blend crafted to support long-lasting energy and daily vitality.",

      //   shortDescription:
      //     "A revitalising beverage designed to complement consistent daily performance.",

      //   sizes: [
      //     { label: "200 g", originalPrice: 799, currentPrice: 629, maxPerOrder: 5 },
      //     { label: "454 g", originalPrice: 1499, currentPrice: 1249, maxPerOrder: 5 },
      //     { label: "908 g", originalPrice: 2599, currentPrice: 2199, maxPerOrder: 5 },
      //   ],

      //   keyBenefits: [
      //     "Supports stamina",
      //     "Rich whole-grain base",
      //     "Suitable for daily wellness routines",
      //   ],

      //   ingredients:
      //     "Millets, barley, natural extracts, plant-based micronutrients.",

      //   nutritionalHighlights: [
      //     "High fiber content",
      //     "Balanced energy release",
      //     "Naturally derived nutrients",
      //   ],

      //   preparation: {
      //     hot: "Stir into warm water or milk until smooth.",
      //     cold: "Shake well with chilled milk and serve.",
      //   },

      //   availability: "Limited Stock",
      // },
    ],
  },

  {
    name: "For Women",
    products: [
      {
        id: "women-balance-01",
        sku: "RSF-WOM-BAL-01",
        name: "Balance Blend",
        category: "Women",
        rating: 4.7,
        image: "/images/products/womens/prod1.png",
        tags: ["Bestseller"],

        overview:
          "A holistic blend supporting everyday nourishment with carefully selected grains and herbs.",

        shortDescription:
          "Gentle, holistic nourishment designed to support everyday wellness and vitality.",

        sizes: [
          { label: "200 g", originalPrice: 699, currentPrice: 559, maxPerOrder: 5 },
          { label: "454 g", originalPrice: 1299, currentPrice: 1099, maxPerOrder: 5 },
          { label: "908 g", originalPrice: 2299, currentPrice: 1999, maxPerOrder: 5 },
        ],

        keyBenefits: [
          "Supports balanced daily nutrition",
          "Millet-based formula",
          "Light and easy to prepare",
        ],

        ingredients: "Ragi, foxtail millet, plant extracts, whole grains.",

        nutritionalHighlights: [
          "Iron-rich",
          "Source of plant protein",
          "No artificial colors",
        ],

        preparation: {
          hot: "Add to warm milk and stir until smooth.",
          cold: "Blend with chilled milk and shake well.",
        },

        availability: "In Stock",
      },

      {
        id: "women-glow-02",
        sku: "RSF-WOM-GLO-02",
        name: "Glow Blend",
        category: "Women",
        rating: 4.4,
        image: "/images/products/womens/prod2.png",
        tags: ["New"],

        overview:
          "Designed to complement everyday nourishment and vitality through balanced ingredients.",

        shortDescription:
          "A thoughtfully crafted blend supporting daily radiance and nourishment.",

        sizes: [
          { label: "200 g", originalPrice: 749, currentPrice: 599, maxPerOrder: 5 },
          { label: "454 g", originalPrice: 1399, currentPrice: 1199, maxPerOrder: 5 },
          { label: "908 g", originalPrice: 2399, currentPrice: 2099, maxPerOrder: 5 },
        ],

        keyBenefits: [
          "Supports daily wellness",
          "Balanced cereal blend",
          "No added preservatives",
        ],

        ingredients:
          "Whole grains, millets, plant extracts, natural botanicals.",

        nutritionalHighlights: [
          "High dietary fiber",
          "Plant-based micronutrients",
        ],

        preparation: {
          hot: "Mix with warm milk and stir thoroughly.",
          cold: "Shake with chilled milk until blended.",
        },

        availability: "In Stock",
      },

      // {
      //   id: "women-harmony-03",
      //   sku: "RSF-WOM-HAR-03",
      //   name: "Harmony Blend",
      //   category: "Women",
      //   rating: 4.6,
      //   image: "/images/prod3/prod.png",
      //   tags: ["Premium"],

      //   overview:
      //     "A daily nourishment blend created for balance and sustained vitality.",

      //   shortDescription:
      //     "Millet and herb-based beverage supporting balance and sustained energy.",

      //   sizes: [
      //     { label: "200 g", originalPrice: 799, currentPrice: 649, maxPerOrder: 5 },
      //     { label: "454 g", originalPrice: 1499, currentPrice: 1249, maxPerOrder: 5 },
      //     { label: "908 g", originalPrice: 2599, currentPrice: 2199, maxPerOrder: 5 },
      //   ],

      //   keyBenefits: [
      //     "Supports sustained energy",
      //     "Traditional ingredients",
      //     "Clean-label formulation",
      //   ],

      //   ingredients: "Millets, barley, plant extracts, whole grains.",

      //   nutritionalHighlights: [
      //     "High fiber",
      //     "Source of iron",
      //     "Balanced nutrients",
      //   ],

      //   preparation: {
      //     hot: "Add to warm milk, stir well.",
      //     cold: "Shake with chilled milk.",
      //   },

      //   availability: "In Stock",
      // },
    ],
  },

  {
    name: "For Children",
    products: [
      {
        id: "kids-growth-01",
        sku: "RSF-KID-GRO-01",
        name: "Growth Blend",
        category: "Children",
        rating: 4.8,
        image: "/images/products/juniors/prod1.png",
        tags: ["Bestseller"],

        overview:
          "A gentle, nutrient-rich beverage blend designed to support healthy growth and development.",

        shortDescription:
          "Gentle, nutrient-rich blend designed to support healthy growth.",

        sizes: [
          { label: "200 g", originalPrice: 649, currentPrice: 499, maxPerOrder: 5 },
          { label: "454 g", originalPrice: 1199, currentPrice: 999, maxPerOrder: 5 },
          { label: "908 g", originalPrice: 2199, currentPrice: 1899, maxPerOrder: 5 },
        ],

        keyBenefits: ["Supports growth", "Mild taste", "Easy digestion"],

        ingredients: "Millets, whole grains, natural nutrients.",

        nutritionalHighlights: [
          "High calcium content",
          "Rich in iron",
          "No artificial additives",
        ],

        preparation: {
          hot: "Mix with warm milk and stir well.",
          cold: "Shake with chilled milk.",
        },

        availability: "In Stock",
      },
      {
        id: "kids-growth-02",
        sku: "RSF-KID-GRO-02",
        name: "Growth Blend 2",
        category: "Children",
        rating: 4.8,
        image: "/images/products/juniors/prod2.png",
        tags: ["Bestseller"],

        overview:
          "A gentle, nutrient-rich beverage blend designed to support healthy growth and development.",

        shortDescription:
          "Gentle, nutrient-rich blend designed to support healthy growth.",

        sizes: [
          { label: "200 g", originalPrice: 649, currentPrice: 499, maxPerOrder: 5 },
          { label: "454 g", originalPrice: 1199, currentPrice: 999, maxPerOrder: 5 },
          { label: "908 g", originalPrice: 2199, currentPrice: 1899, maxPerOrder: 5 },
        ],

        keyBenefits: ["Supports growth", "Mild taste", "Easy digestion"],

        ingredients: "Millets, whole grains, natural nutrients.",

        nutritionalHighlights: [
          "High calcium content",
          "Rich in iron",
          "No artificial additives",
        ],

        preparation: {
          hot: "Mix with warm milk and stir well.",
          cold: "Shake with chilled milk.",
        },

        availability: "In Stock",
      },
    ],
  },
];

const allProducts = productCategories.flatMap((cat) => cat.products);

const getproductDetail = (id) => {
  return allProducts.find((p) => p.id === id);
};

export { productCategories, allProducts, getproductDetail };
