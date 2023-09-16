const products = [
    { id: "1", name: "Air Jordan 1 Zoom Air CMFT 2", price: 800, category: "Sneakers", images: "/img/1.webp", description:"Zapatillas Jordan Unisex" },
    { id: "2", name: "Tatum 1 Pink Lemonade", price: 600, category: "Sneackers",images:"/img/2.webp"},
    { id: "3", name: "Jordan Why Not .6", price: 700, category: "OtherSneakers",images:"/img/3.webp" },
    { id: "4", name: "Air Jordan 2 Retro", price: 900, category: "Sneakers",images:"/img/4.webp" },
    { id: "5", name: "Air Jordan 1 Low SE", price: 600, category: "Sneakers",images:"/img/5.webp" },
    { id: "6", name: "Air Jordan 1 Low OG", price: 400, category: "OtherSneakers",images:"/img/6.webp" },
    //Other Products
    { id: "7", name: "Paris Saint-Germain", price: 100, category: "Pantalones",images:"/img/7.webp" },
    { id: "8", name: "Jordan Her itage", price: 200, category: "Pantalones",images:"/img//8.webp" },
    { id: "9", name: "Jordan Flight Chicago", price: 150, category: "Pantalones",images:"/img/9.webp" },
];

// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // buscamos el producto por id
            const product = products.find((p) => p.id === id);

            // si existe el producto
            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto");
            }
        }, 1000);
    });
};

//getProducts () -> va a devolver todos los productos
//getProducts("Sneakers") -> va a devolver todos los productos de categoria sneakers
//getProducts("Pantalones") -> devuelve todos los productos con la categoria pantalones

export const getProducts = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {

            const productsFiltered = category
                ? products.filter((product) => product.category === category)
                : products;

            resolve(productsFiltered);
        }, 1000);
    });
};

