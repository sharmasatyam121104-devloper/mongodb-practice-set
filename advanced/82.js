// 82. Find products where ANY review has rating < 3.

db.products.find({
    "reviews.rating": { $lt: 3 }
})


[
  {
    _id: ObjectId('6a2fc6092f7e989b35748a64'),
    name: 'Gaming Mouse',
    price: 1500,
    category: 'accessories',
    stock: 30,
    discount: 8,
    tags: [ 'gaming', 'mouse', 'computer' ],
    reviews: [ { user: 'Rahul', rating: 5 }, { user: 'Priya2', rating: 2 } ]
  }
]