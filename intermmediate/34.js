// 34. Find products whose discount is greater than 20%.


db.products.find({discount: {$gt: 20}});


[
  {
    _id: ObjectId('6a28177df0dc415ed5748a6f'),
    name: 'Gaming Headset',
    price: 4500,
    category: 'electronics',
    stock: 12,
    discount: 25,
    tags: [ 'gaming', 'audio', 'electronics' ]
  }
]