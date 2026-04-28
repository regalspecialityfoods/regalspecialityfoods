const productCategories = [
  {
    name: "For Men",
    id: "Men",
    products: [
      {
        id: "Chocolate-Vitality-Blend",
        sku: "RSF-MEN-VIT-01",
        name: "Chocolate Vitality Blend",
        category: "Men",
        rating: 4.5,
        image: "/images/products/men/prod1.png",
        tags: ["Bestseller", "Clean Label"],

        images: [
          "/images/products/men/chocolate-vitality-blend/men_chocolate_2.png",
          "/images/products/men/chocolate-vitality-blend/men_chocolate_3.png",
          "/images/products/men/chocolate-vitality-blend/men_chocolate_4.png",
          "/images/products/men/chocolate-vitality-blend/men_chocolate_1.png",
        ],

        overview:
          "A revitalising millet-based beverage blend crafted to support daily energy, stamina, and consistent performance for modern lifestyles.",

        shortDescription:
          "Balanced millet-based nourishment crafted to support daily energy and active routines.",

        sizes: [
          {
            label: "200 g",
            originalPrice: 699,
            currentPrice: 549,
            maxPerOrder: 5,
          },
          {
            label: "454 g",
            originalPrice: 1299,
            currentPrice: 1099,
            maxPerOrder: 5,
          },
          {
            label: "908 g",
            originalPrice: 2299,
            currentPrice: 1999,
            maxPerOrder: 5,
          },
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
        id: "kesar-badam-endurance-blend",
        sku: "RSF-MEN-PERF-02",
        name: "Kesar Badam Endurance Blend",
        category: "Men",
        rating: 4.3,
        image: "/images/products/men/prod2.png",

        images: [
          "/images/products/men/kesar-badam-endurance-blend/Men_Kesar_2.png",
          "/images/products/men/kesar-badam-endurance-blend/Men_Kesar_3.png",
          "/images/products/men/kesar-badam-endurance-blend/Men_Kesar_4.png",
          "/images/products/men/kesar-badam-endurance-blend/Men_Kesar_1.png",
        ],

        tags: ["New"],

        overview:
          "Formulated to complement endurance and focus, combining traditional grains with functional botanicals.",

        shortDescription:
          "Functional herb and cereal blend formulated to support stamina and focus.",

        sizes: [
          {
            label: "200 g",
            originalPrice: 749,
            currentPrice: 599,
            maxPerOrder: 5,
          },
          {
            label: "454 g",
            originalPrice: 1399,
            currentPrice: 1199,
            maxPerOrder: 5,
          },
          {
            label: "908 g",
            originalPrice: 2399,
            currentPrice: 2099,
            maxPerOrder: 5,
          },
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
    ],
  },

  {
    name: "For Women",
    id: "Women",

    products: [
      {
        id: "banana-wellness-blend",
        sku: "RSF-WOM-BAL-01",
        name: "Banana Wellness Blend",
        category: "Women",
        rating: 4.7,
        image: "/images/products/womens/prod1.png",

        images: [
          "/images/products/womens/banana-wellness-blend/women_banana_2.png",
          "/images/products/womens/banana-wellness-blend/women_banana_3.png",
          "/images/products/womens/banana-wellness-blend/women_banana_4.png",
          "/images/products/womens/banana-wellness-blend/women_banana_1.png",
        ],

        tags: ["Bestseller"],

        overview:
          "A holistic blend supporting everyday nourishment with carefully selected grains and herbs.",

        shortDescription:
          "Gentle, holistic nourishment designed to support everyday wellness and vitality.",

        sizes: [
          {
            label: "200 g",
            originalPrice: 699,
            currentPrice: 559,
            maxPerOrder: 5,
          },
          {
            label: "454 g",
            originalPrice: 1299,
            currentPrice: 1099,
            maxPerOrder: 5,
          },
          {
            label: "908 g",
            originalPrice: 2299,
            currentPrice: 1999,
            maxPerOrder: 5,
          },
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
        id: "vanilla-radiance-blend",
        sku: "RSF-WOM-GLO-02",
        name: "Vanilla Radiance Blend",
        category: "Women",
        rating: 4.4,
        image: "/images/products/womens/prod2.png",

        images: [
          "/images/products/womens/vanilla-radiance-blend/women_vanilla_2.png",
          "/images/products/womens/vanilla-radiance-blend/women_vanilla_3.png",
          "/images/products/womens/vanilla-radiance-blend/women_vanilla_4.png",
          "/images/products/womens/vanilla-radiance-blend/women_vanilla_1.png",
        ],

        tags: ["New"],

        overview:
          "Designed to complement everyday nourishment and vitality through balanced ingredients.",

        shortDescription:
          "A thoughtfully crafted blend supporting daily radiance and nourishment.",

        sizes: [
          {
            label: "200 g",
            originalPrice: 749,
            currentPrice: 599,
            maxPerOrder: 5,
          },
          {
            label: "454 g",
            originalPrice: 1399,
            currentPrice: 1199,
            maxPerOrder: 5,
          },
          {
            label: "908 g",
            originalPrice: 2399,
            currentPrice: 2099,
            maxPerOrder: 5,
          },
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
    ],
  },

  {
    name: "For Children",
    id: "Children",
    products: [
      {
        id: "butterscotch-focus-blend",
        sku: "RSF-KID-GRO-01",
        name: "Butterscotch Focus Blend",
        category: "Children",
        rating: 4.8,
        image: "/images/products/juniors/prod1.png",

        images: [
          "/images/products/juniors/butterscotch-focus-blend/Junior_Butter_2.png",
          "/images/products/juniors/butterscotch-focus-blend/Junior_Butter_3.png",
          "/images/products/juniors/butterscotch-focus-blend/Junior_Butter_4.png",
          "/images/products/juniors/butterscotch-focus-blend/Junior_Butter_1.png",
        ],

        tags: ["Bestseller"],

        overview:
          "A gentle, nutrient-rich beverage blend designed to support healthy growth and development.",

        shortDescription:
          "Gentle, nutrient-rich blend designed to support healthy growth.",

        sizes: [
          {
            label: "200 g",
            originalPrice: 649,
            currentPrice: 499,
            maxPerOrder: 5,
          },
          {
            label: "454 g",
            originalPrice: 1199,
            currentPrice: 999,
            maxPerOrder: 5,
          },
          {
            label: "908 g",
            originalPrice: 2199,
            currentPrice: 1899,
            maxPerOrder: 5,
          },
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
        id: "strawberry-memory-blend",
        sku: "RSF-KID-GRO-02",
        name: "Strawberry Memory Blend",
        category: "Children",
        rating: 4.8,
        image: "/images/products/juniors/prod2.png",

        images: [
          "/images/products/juniors/strawberry-memory-blend/Junior_strawberry_2.png",
          "/images/products/juniors/strawberry-memory-blend/Junior_strawberry_3.png",
          "/images/products/juniors/strawberry-memory-blend/Junior_strawberry_4.png",
          "/images/products/juniors/strawberry-memory-blend/Junior_strawberry_1.png",
        ],

        tags: ["Bestseller"],

        overview:
          "A gentle, nutrient-rich beverage blend designed to support healthy growth and development.",

        shortDescription:
          "Gentle, nutrient-rich blend designed to support healthy growth.",

        sizes: [
          {
            label: "200 g",
            originalPrice: 649,
            currentPrice: 499,
            maxPerOrder: 5,
          },
          {
            label: "454 g",
            originalPrice: 1199,
            currentPrice: 999,
            maxPerOrder: 5,
          },
          {
            label: "908 g",
            originalPrice: 2199,
            currentPrice: 1899,
            maxPerOrder: 5,
          },
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
