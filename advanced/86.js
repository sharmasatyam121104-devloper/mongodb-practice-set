// 86. Find products where Rahul reviewed AND rating < 3 (same review).

db.products.find({
    reviews: {
        $elemMatch: {
            user: /Rahul/,
            rating: { $lt: 3 }
        }
    }
})