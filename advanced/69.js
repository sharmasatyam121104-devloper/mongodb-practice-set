// 69. Find products whose name ends with 'Laptop'.

db.products.find({name: /Laptop$/});



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
    _id: ObjectId('6a2fc6092f7e989b35748a63'),
    name: 'Office Laptop',
    price: 55000,
    category: 'electronics',
    stock: 12,
    discount: 10,
    tags: [ 'laptop', 'office', 'electronics' ],
    reviews: [ { user: 'Rahul', rating: 3 }, { user: 'Sneha', rating: 4 } ]
  }
]