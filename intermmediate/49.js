// 49. Remove discount field from product.
db.products.updateMany({},{
    $unset: {
        discount: ""
    }
});