// 48. Rename field price → productPrice.

db.products.updateMany({},{
    $rename: {
        price: "productPrice"
    }
});