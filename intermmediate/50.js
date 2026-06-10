// 50. Add field featured: true to product.

db.products.updateMany({},[
    {
        $set: {featured: true}
    }
]);