// 30. Find products whose that are out of stock.


db.products.find({stock: {$eq: 0}});


[
  {
    _id: ObjectId('6a28177df0dc415ed5748a6e'),
    name: 'Office Chair',
    price: 6000,
    category: 'furniture',
    stock: 0,
    discount: 20,
    tags: [ 'chair', 'office', 'furniture' ]
  }
]