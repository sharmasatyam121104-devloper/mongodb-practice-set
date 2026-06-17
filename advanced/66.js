// 66. Find products whose price is greater than 5000 and stock less than 10.


db.products.find({
    price: {
        $gt: 5000
    },
    stock: {
        $lt: 10
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