// 67. Find products whose discount is between 10 and 30.


db.products.find({
    discount: {
        $gte: 10, $lte: 30
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
  },
  {
    _id: ObjectId('6a2fc6092f7e989b35748a65'),
    name: 'Mechanical Keyboard',
    price: 4000,
    category: 'accessories',
    stock: 20,
    discount: 12,
    tags: [ 'keyboard', 'gaming', 'computer' ],
    reviews: [ { user: 'Priya', rating: 5 }, { user: 'Rahul', rating: 4 } ]
  },
  {
    _id: ObjectId('6a2fc6092f7e989b35748a66'),
    name: 'LED Monitor',
    price: 12000,
    category: 'electronics',
    stock: 0,
    discount: 20,
    tags: [ 'monitor', 'display', 'electronics' ],
    reviews: []
  }
]