// 71. Find products having both 'gaming' and 'electronics' tags.


db.products.find({
    tags: {
        $all: ["gaming", "electronics"]
    }
})


[
  {
    _id: ObjectId('6a2fc6092f7e989b35748a62'),
    name: 'Gaming Laptop',
    price: 85000,
    category: 'electronics',
    stock: 8,
    discount: 15,
    tags: [ 'gaming', 'laptop', 'electronics' ],
    reviews: [
      { user: 'Rahul', rating: 5 },
      { user: 'Amit', rating: 4 },
      { user: 'Priya', rating: 5 }
    ]
  }
]