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
  },
  {
    id: "1039lijhfiufsdf",
    name: "White Air Force 14",
    brand: "Nike",
    priceCents: 550999,
    image: "./images/products/shoes1.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.0,
      counts: 212
    },
    keywords: [
      "shoes",
      "air-force",
      "men",
      "man",
      "white"
    ],
    instock: true
  },
  {
    id: "107979lijhfiufsdf",
    name: "White Air Force 17",
    brand: "Nike",
    priceCents: 650000,
    image: "./images/products/shoes2.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.5,
      counts: 111
    },
    keywords: [
      "shoes",
      "air-force",
      "men",
      "man",
      "white"
    ],
    instock: true
  },
  {
    id: "107979lijhfgghiufsdf",
    name: "Air Max 917",
    brand: "Nike",
    priceCents: 455999,
    image: "./images/products/shoes4.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 2.5,
      counts: 95
    },
    keywords: [
      "shoes",
      "air-max",
      "men",
      "man",
      "orange"
    ],
    instock: true
  },
  {
    id: "107979lijhfggsdfhiufsdf",
    name: "Pink Air Max 45",
    brand: "Nike",
    priceCents: 605000,
    image: "./images/products/shoes5.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 1.5,
      counts: 65
    },
    keywords: [
      "shoes",
      "air-max",
      "women",
      "woma",
      "pink"
    ],
    instock: true
  },
  {
    id: "107979lijhfashfesdf",
    name: "Black Air force 10",
    brand: "Nike",
    priceCents: 505000,
    image: "./images/products/shoes6.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.5,
      counts: 365
    },
    keywords: [
      "shoes",
      "air-force",
      "men",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "10797lkauhvuwfr4687esdf",
    name: "Air Jordan 10",
    brand: "Nike Jordan",
    priceCents: 720999,
    image: "./images/products/shoes7.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 5.0,
      counts: 3665
    },
    keywords: [
      "shoes",
      "jordan",
      "men",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "107695847juhygtfr4687esdf",
    name: "Blue Air Max 10",
    brand: "Nike",
    priceCents: 410000,
    image: "./images/products/shoes8.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.5,
      counts: 521
    },
    keywords: [
      "shoes",
      "Nike",
      "men",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "10769er847juhyg87945641331f",
    name: "Pink Air Max 10",
    brand: "Nike",
    priceCents: 659999,
    image: "./images/products/shoes9.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 2.5,
      counts: 21
    },
    keywords: [
      "shoes",
      "Nike",
      "woman",
      "women",
      "pink"
    ],
    instock: true
  },
  {
    id: "10769esjheirbdsd45641331f",
    name: "Jordan Air Max 46",
    brand: "Nike",
    priceCents: 658999,
    image: "./images/products/shoes11.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.5,
      counts: 321
    },
    keywords: [
      "shoes",
      "Nike",
      "Jordan",
      "man",
      "black"
    ],
    instock: true
  },
  {
    id: "10769esjjkdlfs41331f",
    name: "Pink Air Max 31",
    brand: "Nike",
    priceCents: 700000,
    image: "./images/products/shoes12.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 1.5,
      counts: 19
    },
    keywords: [
      "shoes",
      "Nike",
      "Jordan",
      "women",
      "pink"
    ],
    instock: true
  },
  {
    id: "10769esjjkd7741s9989831f",
    name: "White Floats 11",
    brand: "Mpahla",
    priceCents: 659999,
    image: "./images/products/sneakers.avif",
    category: "Shoes",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.5,
      counts: 19
    },
    keywords: [
      "shoes",
      "Nike",
      "Jordan",
      "women",
      "pink"
    ],
    instock: true
  },
  {
    id: "10769esjj78dlfs9989831f",
    name: "Women shirt",
    brand: "Mpahla",
    priceCents: 399999,
    image: "./images/products/wome2.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.0,
      counts: 129
    },
    keywords: [
      "shirt",
      "Mpahla",
      "Jordan",
      "women"
    ],
    instock: true
  },
  {
    id: "10769esjj78dlffutgy31f",
    name: "Women white pants",
    brand: "Mpahla",
    priceCents: 299999,
    image: "./images/products/women1.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 1.0,
      counts: 22
    },
    keywords: [
      "pants",
      "Mpahla",
      "white",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "1076954okgdlffutgy31f",
    name: "Women Nike black top",
    brand: "Nike",
    priceCents: 599999,
    image: "./images/products/women3.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.0,
      counts: 421
    },
    keywords: [
      "top",
      "Nike",
      "black",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "107695waszxdcfvfgbh41525254gy31f",
    name: "Women Nike black top",
    brand: "Nike",
    priceCents: 399999,
    image: "./images/products/women4.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 2.0,
      counts: 61
    },
    keywords: [
      "top",
      "Nike",
      "black",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "10756565aszxdcfvfgbh41525254gy31f",
    name: "Women Nike darkred top",
    brand: "Nike",
    priceCents: 399999,
    image: "./images/products/women5.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.5,
      counts: 265
    },
    keywords: [
      "top",
      "Nike",
      "darkred",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "10756565aszxdcfv7854212221gy31f",
    name: "Women Nike Jordan T-shirt",
    brand: "Nike",
    priceCents: 799999,
    image: "./images/products/women6.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.5,
      counts: 2865
    },
    keywords: [
      "shirt",
      "Nike",
      "red",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "10756565a525254212221gy31f",
    name: "Women Nike T-shirt",
    brand: "Nike",
    priceCents: 599999,
    image: "./images/products/women7.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 4.5,
      counts: 2865
    },
    keywords: [
      "shirt",
      "Nike",
      "white",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "10756565a5252olkiju1gy31f",
    name: "Women Nike T-shirt",
    brand: "Nike",
    priceCents: 599999,
    image: "./images/products/women8.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 3.5,
      counts: 451
    },
    keywords: [
      "shirt",
      "Nike",
      "white",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "10756565a525566iju1gy31f",
    name: "Women Nike Black pants",
    brand: "Nike",
    priceCents: 659999,
    image: "./images/products/women9.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 1.5,
      counts: 62
    },
    keywords: [
      "pants",
      "Nike",
      "black",
      "women",
      "woman"
    ],
    instock: true
  },
  {
    id: "10756565a52514785236931f",
    name: "Women Nike Brown top",
    brand: "Nike",
    priceCents: 759999,
    image: "./images/products/women10.avif",
    category: "Ladies",
    size: ["S","M","L","XL"],
    ratings: {
      starts: 1.5,
      counts: 62
    },
    keywords: [
      "top",
      "Nike",
      "brown",
      "women",
      "woman"
    ],
    instock: true
  },
].map(productDetail => new Product(productDetail));
