// 27. Find products whose price is between 500 and 2000.


db.products.find({price: {$gt: 500, $lt: 2000}});


[
  {
    _id: ObjectId('6a28177df0dc415ed5748a6b'),
    name: 'Wireless Mouse',
    price: 800,
    category: 'accessories',
    stock: 50,
    discount: 5,
    tags: [ 'mouse', 'computer', 'electronics' ]
  }
]