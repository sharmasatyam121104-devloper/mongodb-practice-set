// 68. Find products whose name starts with 'G'.

db.products.find({name: /^G/});


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
  },
  {
    _id: ObjectId('6a2fc6092f7e989b35748a64'),
    name: 'Gaming Mouse',
    price: 1500,
    category: 'accessories',
    stock: 30,
    discount: 8,
    tags: [ 'gaming', 'mouse', 'computer' ],
    reviews: [ { user: 'Amit', rating: 5 }, { user: 'Rahul', rating: 4 } ]
  }
]