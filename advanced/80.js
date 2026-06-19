// 80. Remove tag 'gaming' from a product.

db.products.updateMany({},{
    $pull: {
        tags: ["gaming"]
    }
})