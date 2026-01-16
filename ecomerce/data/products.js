import { formatCurrency } from "../scripts/utils/money.js";

export function getDeliveryDay(cartItem) {
  let deliveryDay;

  deliveryOptions.forEach((deliveryOption) => {
    if (deliveryOption.deliveryId === cartItem.deliveryId) {
      deliveryDay = deliveryOption.deliveryDay;
    }
  })

  return deliveryDay;
}

export function getDeliveryPriceCents(cartItem) {
  let deliveryPrice;

  deliveryOptions.forEach((deliveryOption) => {
    if (deliveryOption.deliveryId === cartItem.deliveryId) {
      deliveryPrice = deliveryOption.deliveryPriceCents;
    }
  })

  return deliveryPrice;
}

export function getMatchingItem(cartItem) {
  let matchingItem;

    products.forEach(product => {
      if (product.id === cartItem.productId) {
        matchingItem = product;
      }
    });

  return matchingItem;
}

export const deliveryOptions = [
  {
    deliveryId: 'id1',
    deliveryDay: 7,
    deliveryPriceCents: 0
  },
  {
    deliveryId: 'id2',
    deliveryDay: 3,
    deliveryPriceCents: 499
  },
  {
    deliveryId: 'id3',
    deliveryDay: 1,
    deliveryPriceCents: 999
  },
];

export const productsCatagories = [
  {
    id: 'id1',
    category: 'Men'
  },
  {
    id: 'id2',
    category: 'Ladies'
  },
  {
    id: 'id3',
    category: 'Baby'
  },
  {
    id: 'id4',
    category: 'Kids'
  },
  {
    id: 'id5',
    category: 'Shoes'
  },
  {
    id: 'id6',
    category: 'Accessories'
  },
  {
    id: 'id7',
    category: 'Pre Kids'
  },
  {
    id: 'id8',
    category: 'Sustainability'
  }
]

class Product {
  id;
  name;
  brand;
  priceCents;
  image;
  category;
  size;
  ratings;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.name = productDetails.name;
    this.brand = productDetails.brand;
    this.priceCents = productDetails.priceCents;
    this.image = productDetails.image;
    this.category = productDetails.category;
    this.size = productDetails.size;
    this.ratings = productDetails.ratings;
  };

  getPrice() {
    formatCurrency(this.priceCents)
  }
}

export const products = [
  {
    id: "1001sd",
    name: "Black Nike Bag",
    brand: "Nike",
    priceCents: 60000,
    image: "./images/products/bag.avif",
    category: "Accessories",
    size: ["M", "L"],
    ratings: {
      starts: 4.5,
      counts: 154
    },
    keywords: [
      "bag",
      "shoulder bag",
      "backpack"
    ],
    instock: true
  },
  {
    id: "1002sdff",
    name: "Black Nike Bag",
    brand: "Nike",
    priceCents: 79999,
    image: "./images/products/bag1.avif",
    category: "Accessories",
    size: ["M", "L"],
    ratings: {
      starts: 4.0,
      counts: 254
    },
    keywords: [
      "bag",
      "shoulder bag",
      "backpack"
    ],
    instock: true
  },
  {
    id: "1003shwsdff",
    name: "Blue Nike Bag",
    brand: "Nike",
    priceCents: 79999,
    image: "./images/products/bag2.avif",
    category: "Accessories",
    size: ["M", "L"],
    ratings: {
      starts: 4.0,
      counts: 254
    },
    keywords: [
      "bag",
      "shoulder bag",
      "backpack"
    ],
    instock: true
  },
  {
    id: "1004sdfdsfgf",
    name: "Small Black Nike Bag",
    brand: "Nike",
    priceCents: 44999,
    image: "./images/products/bag4.avif",
    category: "Accessories",
    size: ["XS", "S"],
    ratings: {
      starts: 3.0,
      counts: 34
    },
    keywords: [
      "bag",
      "shoulder bag",
      "backpack",
      "kids"
    ],
    instock: true
  },
  {
    id: "1005omsdfdsfgf",
    name: "Blue Nike Bag",
    brand: "Nike",
    priceCents: 64999,
    image: "./images/products/bag6.avif",
    category: "Accessories",
    size: ["M", "S"],
    ratings: {
      starts: 3.5,
      counts: 121
    },
    keywords: [
      "bag",
      "shoulder bag",
      "backpack",
      "boys"
    ],
    instock: true
  },
  {
    id: "1006hkomsdfdsfgf",
    name: "Gray Nike Hand-Bag",
    brand: "Nike",
    priceCents: 69999,
    image: "./images/products/bagg5.avif",
    category: "Accessories",
    size: ["S", "M"],
    ratings: {
      starts: 2.5,
      counts: 61
    },
    keywords: [
      "bag",
      "shoulder bag",
      "handbag",
      "women"
    ],
    instock: true
  },
  {
    id: "1007hdjdufdsfgf",
    name: "Graphic Black T-shirt",
    brand: "Soho",
    priceCents: 29999,
    image: "./images/products/gragphic-shirt.avif",
    category: "Men",
    size: ["S", "M", "L", "XL"],
    ratings: {
      starts: 2.0,
      counts: 34
    },
    keywords: [
      "t-shirt",
      "black",
      "Men",
      "casual"
    ],
    instock: true
  },
  {
    id: "1008hkduhndsfgf",
    name: "Black Hat",
    brand: "Nike",
    priceCents: 39999,
    image: "./images/products/hat.avif",
    category: "Accessories",
    size: ["S", "M"],
    ratings: {
      starts: 4.0,
      counts: 214
    },
    keywords: [
      "hat",
      "black",
      "Men"
    ],
    instock: true
  },
  {
    id: "1009hkkdf5fgf",
    name: "Red jacket",
    brand: "Nike",
    priceCents: 70000,
    image: "./images/products/kids.avif",
    category: "Kids",
    size: ["S", "XS", "M"],
    ratings: {
      starts: 2.0,
      counts: 52
    },
    keywords: [
      "jacket",
      "red",
      "kids"
    ],
    instock: true
  },
  {
    id: "1010hkkdfmlmkfgf",
    name: "Red Hat",
    brand: "Nike",
    priceCents: 20000,
    image: "./images/products/kids1.avif",
    category: "Accessories",
    size: ["S", "XS"],
    ratings: {
      starts: 2.5,
      counts: 85
    },
    keywords: [
      "hat",
      "red",
      "kids"
    ],
    instock: true
  },
  {
    id: "1011ldldfmlmkfgf",
    name: "Kids Yellow T-shirt",
    brand: "Nike",
    priceCents: 40000,
    image: "./images/products/kids2.avif",
    category: "Kids",
    size: ["S", "XS"],
    ratings: {
      starts: 4.5,
      counts: 285
    },
    keywords: [
      "t-shirt",
      "yellow",
      "kids",
      "basketball"
    ],
    instock: true
  },
  {
    id: "1012lhdyhlmkfgf",
    name: "Sports shorts",
    brand: "Nike",
    priceCents: 54000,
    image: "./images/products/kids3.avif",
    category: "Kids",
    size: ["S", "XS"],
    ratings: {
      starts: 4.5,
      counts: 285
    },
    keywords: [
      "shorts",
      "red",
      "kids",
      "basketball",
      "sports"
    ],
    instock: true
  },
  {
    id: "1013lhdyhlmkfgf",
    name: "White t-shirt",
    brand: "Nike",
    priceCents: 64000,
    image: "./images/products/kids4.avif",
    category: "Kids",
    size: ["S", "XS"],
    ratings: {
      starts: 1.5,
      counts: 21
    },
    keywords: [
      "shorts",
      "white",
      "kids",
      "casual"
    ],
    instock: true
  },
  {
    id: "1014lhsglmkfgf",
    name: "Tracksuits",
    brand: "Nike",
    priceCents: 124000,
    image: "./images/products/kids5.avif",
    category: "kids",
    size: ["S", "XS"],
    ratings: {
      starts: 4.5,
      counts: 432
    },
    keywords: [
      "trackpant",
      "tracksuit",
      "black",
      "kids"
    ],
    instock: true
  },
  {
    id: "1015lhsglokfgf",
    name: "Black $ White Sneakers",
    brand: "Batu",
    priceCents: 32000,
    image: "./images/products/mean-sneakers2.avif",
    category: "Men",
    size: ["6","7", "8", "9"],
    ratings: {
      starts: 1.0,
      counts: 11
    },
    keywords: [
      "shoes",
      "men",
      "sneakers"
    ],
    instock: true
  },
  {
    id: "1016lhs525kfgf",
    name: "Black $ White Sneakers",
    brand: "Batu",
    priceCents: 32000,
    image: "./images/products/mean-sneakes3.avif",
    category: "Men",
    size: ["5","7", "8", "9"],
    ratings: {
      starts: 0.0,
      counts: 1
    },
    keywords: [
      "shoes",
      "men",
      "sneakers"
    ],
    instock: true
  },
  {
    id: "1016lhs525kfgf",
    name: "Mean Sport",
    brand: "Manato",
    priceCents: 38000,
    image: "./images/products/mean-sports-shirt1.avif",
    category: "Men",
    size: ["M","L", "XL", "XXL"],
    ratings: {
      starts: 3.0,
      counts: 412
    },
    keywords: [
      "t-shirt",
      "men",
      "green",
      "sport"
    ],
    instock: true
  },
  {
    id: "1017ljh85kfgf",
    name: "Black Inferno shirt",
    brand: "Inferno",
    priceCents: 128000,
    image: "./images/products/mean-sptorts-shirt.avif",
    category: "Men",
    size: ["M","L", "XL", "XXL"],
    ratings: {
      starts: 3.5,
      counts: 521
    },
    keywords: [
      "t-shirt",
      "men",
      "black"
    ],
    instock: true
  },
  {
    id: "1018lmdkdkfgf",
    name: "Black Pants",
    brand: "Inferno",
    priceCents: 328000,
    image: "./images/products/mem8.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 4.5,
      counts: 1221
    },
    keywords: [
      "pants",
      "men",
      "black"
    ],
    instock: true
  },
  {
    id: "1019lmdsfsdf",
    name: "Men Cargo pants",
    brand: "Inferno",
    priceCents: 228000,
    image: "./images/products/men -cargo-pants2.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 4.5,
      counts: 1221
    },
    keywords: [
      "pants",
      "men",
      "gray"
    ],
    instock: true
  },
  {
    id: "1020ldfesfsdf",
    name: "Men Cargo shorts",
    brand: "Inferno",
    priceCents: 69999,
    image: "./images/products/men-cargo-shorts.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 2.5,
      counts: 854
    },
    keywords: [
      "pants",
      "men",
      "shorts"
    ],
    instock: true
  },
  {
    id: "1021ldfesfsdf",
    name: "Men Cargo shorts",
    brand: "Inferno",
    priceCents: 79999,
    image: "./images/products/men-cargo-shorts1.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 2.5,
      counts: 714
    },
    keywords: [
      "pants",
      "men",
      "shorts"
    ],
    instock: true
  },
  {
    id: "1022ldfesfsdf",
    name: "Men Check shirt",
    brand: "Inferno",
    priceCents: 89999,
    image: "./images/products/men-check-shirt.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 3.5,
      counts: 938
    },
    keywords: [
      "shirts",
      "men"
    ],
    instock: true
  },
  {
    id: "1023lsdfesfsdf",
    name: "Men Stament t-shirt",
    brand: "LA studio",
    priceCents: 69999,
    image: "./images/products/Men-statement-t-shirt.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 3.5,
      counts: 938
    },
    keywords: [
      "t-shirt",
      "men",
      "blue"
    ],
    instock: true
  },
  {
    id: "1024ldkgesfsdf",
    name: "Men Nike jacket",
    brand: "Nike",
    priceCents: 350000,
    image: "./images/products/men.avif",
    category: "Men",
    size: ["M","L", "XL"],
    ratings: {
      starts: 5.0,
      counts: 2111
    },
    keywords: [
      "t-shirt",
      "men",
      "tracksuit"
    ],
    instock: true
  },
  {
    id: "1025ldkgesfsdf",
    name: "Men long sleev shirt",
    brand: "Nike",
    priceCents: 250000,
    image: "./images/products/men2.avif",
    category: "Men",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.0,
      counts: 1101
    },
    keywords: [
      "t-shirt",
      "men",
      "white",
      "long sleeve"
    ],
    instock: true
  },
  {
    id: "1026ldhmkgesfsdf",
    name: "Baby shirt",
    brand: "Folo",
    priceCents: 250000,
    image: "./images/products/2025wk36-mrp-homepage-baby.avif",
    category: "Baby",
    size: ["XS","S"],
    ratings: {
      starts: 4.0,
      counts: 1101
    },
    keywords: [
      "t-shirt",
      "baby",
    ],
    instock: true
  },
  {
    id: "1027ldmdkhesfsdf",
    name: "Big Kids clothes",
    brand: "Folo",
    priceCents: 250000,
    image: "./images/products/2025wk36-mrp-homepage-big-kids.avif",
    category: "Big Kids",
    size: ["XS","S"],
    ratings: {
      starts: 4.0,
      counts: 111
    },
    keywords: [
      "t-shirt",
      "kids",
      "pants"
    ],
    instock: true
  },
  {
    id: "1028ldhng4sfsdf",
    name: "ladies clothes",
    brand: "Folo",
    priceCents: 250000,
    image: "./images/products/2025wk36-mrp-homepage-ladies.avif",
    category: "Ladies",
    size: ["S","M","L"],
    ratings: {
      starts: 4.0,
      counts: 111
    },
    keywords: [
      "t-shirt",
      "ladies",
      "woman",
      "women",
      "skis"
    ],
    instock: true
  },
  {
    id: "1029ldddg4sfsdf",
    name: "ladies clothes",
    brand: "Folo",
    priceCents: 250000,
    image: "./images/products/2025wk36-mrp-homepage-pre-kids.avif",
    category: "Pre Kids",
    size: ["S","M","L"],
    ratings: {
      starts: 4.0,
      counts: 111
    },
    keywords: [
      "t-shirt",
      "ladies",
      "woman",
      "women",
      "skis"
    ],
    instock: true
  },
  {
    id: "1030lherhsfsdf",
    name: "ladies clothes",
    brand: "Folo",
    priceCents: 250000,
    image: "./images/products/2025wk36-mrp-homepage-shoes.avif",
    category: "Shoes",
    size: ["S","M","L"],
    ratings: {
      starts: 4.0,
      counts: 111
    },
    keywords: [
      "t-shirt",
      "ladies",
      "woman",
      "women",
      "skis"
    ],
    instock: true
  },
  {
    id: "1031lherhsfsdf",
    name: "ladies clothes",
    brand: "Folo",
    priceCents: 250000,
    image: "./images/products/2025wk36-mrp-homepage-sustainability.avif",
    category: "Sustainability",
    size: ["S","M","L"],
    ratings: {
      starts: 4.0,
      counts: 111
    },
    keywords: [
      "t-shirt",
      "ladies",
      "woman",
      "women",
      "skis"
    ],
    instock: true
  },
  {
    id: "1032lkferhsfsdf",
    name: "Men red Jacket",
    brand: "Nike",
    priceCents: 250000,
    image: "./images/products/men3.avif",
    category: "Men",
    size: ["S","M","L"],
    ratings: {
      starts: 4.0,
      counts: 685
    },
    keywords: [
      "jacket",
      "men",
      "man",
      "red"
    ],
    instock: true
  },
  {
    id: "1033lkfsjehtsdf",
    name: "Men Graphic t-shirt",
    brand: "Nike",
    priceCents: 45000,
    image: "./images/products/men4.avif",
    category: "Sustainability",
    size: ["S","M","L", "XL"],
    ratings: {
      starts: 3.0,
      counts: 95
    },
    keywords: [
      "t-shirt",
      "men",
      "man",
      "white"
    ],
    instock: true
  },
  {
    id: "1034lkfsjsdsdf",
    name: "Men Black Jacket",
    brand: "Nike",
    priceCents: 200000,
    image: "./images/products/men5.avif",
    category: "Men",
    size: ["S","M","L", "XL"],
    ratings: {
      starts: 2.0,
      counts: 23
    },
    keywords: [
      "jacket",
      "men",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "1035ljdsdsdf",
    name: "Men Black Jacket",
    brand: "Nike Jordan",
    priceCents: 250000,
    image: "./images/products/men6.avif",
    category: "Men",
    size: ["S","M"],
    ratings: {
      starts: 2.5,
      counts: 29
    },
    keywords: [
      "jacket",
      "men",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "1036luuuddsdf",
    name: "Men Black track pants",
    brand: "Nike Jordan",
    priceCents: 195000,
    image: "./images/products/men7.avif",
    category: "Men",
    size: ["S","M","L"],
    ratings: {
      starts: 3.5,
      counts: 58
    },
    keywords: [
      "pants",
      "track-suit",
      "men",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "1037leujrdsdf",
    name: "Men track suit hoodie",
    brand: "Nike Jordan",
    priceCents: 115000,
    image: "./images/products/men9.avif",
    category: "Men",
    size: ["S","M","L"],
    ratings: {
      starts: 3.5,
      counts: 58
    },
    keywords: [
      "hoodie",
      "track-suit",
      "men",
      "man",
      "orange"
    ],
    instock: true
  },
  {
    id: "1038ldijedsdf",
    name: "White 58 Air jordans",
    brand: "Nike Jordan",
    priceCents: 115000,
    image: "./images/products/shies11.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.5,
      counts: 142
    },
    keywords: [
      "shoes",
      "air-jordan",
      "men",
      "man",
      "white"
    ],
    instock: true
  },
  {
    id: "1039lijhsdf",
    name: "Air max 374",
    brand: "Nike",
    priceCents: 450000,
    image: "./images/products/shoes 10.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.0,
      counts: 132
    },
    keywords: [
      "shoes",
      "air-max",
      "men",
      "man",
      "orange"
    ],
    instock: true
  }
].map(productDetail => new Product(productDetail));
