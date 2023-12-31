import { reactive } from "vue";

export const store = reactive({
    products: [
        {
            "name": "Product 1",
            "price": 75,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_1.webp",
            "rank": 1,
            "brand": "Nike",
            "isAvailable": true
        },
        {
            "name": "Product 2",
            "price": 50,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_2.webp",
            "rank": 5,
            "brand": "Adidas",
            "isAvailable": true
        },
        {
            "name": "Product 3",
            "price": 150,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_3.webp",
            "rank": 2,
            "brand": "Nike",
            "isAvailable": false
        },
        {
            "name": "Product 4",
            "price": 75,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_4.webp",
            "rank": 13,
            "brand": "Adidas",
            "isAvailable": true
        },
        {
            "name": "Product 5",
            "price": 200,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_5.webp",
            "rank": 10,
            "brand": "Nike",
            "isAvailable": false
        },
        {
            "name": "Product 6",
            "price": 10,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_6.webp",
            "rank": 13,
            "brand": "Adidas",
            "isAvailable": true
        },
        {
            "name": "Product 7",
            "price": 10,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_7.webp",
            "rank": 14,
            "brand": "New Balance",
            "isAvailable": true
        },
        {
            "name": "Product 8",
            "price": 100,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_8.webp",
            "rank": null,
            "brand": "Adidas",
            "isAvailable": true
        },
        {
            "name": "Product 9",
            "price": 150,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_9.webp",
            "rank": 20,
            "brand": "Adidas",
            "isAvailable": false
        },
        {
            "name": "Product 10",
            "price": 20,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_10.webp",
            "rank": 25,
            "brand": "Nike",
            "isAvailable": true
        },
        {
            "name": "Product 11",
            "price": 120,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_11.webp",
            "rank": 300,
            "brand": "Converse",
            "isAvailable": false
        },
        {
            "name": "Product 12",
            "price": 500,
            "image": "https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_12.webp",
            "rank": 1000,
            "brand": "Crocs",
            "isAvailable": true
        }
    ],

    filteredBy: false,

    checkedBrands: [],

    sortedBy: "",

    numOfProducts: 0

})