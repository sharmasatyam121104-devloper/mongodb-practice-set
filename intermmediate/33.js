// 33. Find products whose name contains "phone".



db.products.find({name: /phone/});

[
  {
    _id: ObjectId('6a28177df0dc415ed5748a6a'),
    name: 'Smartphone',
    price: 25000,
    category: 'electronics',
    stock: 8,
    discount: 15,
    tags: [ 'phone', 'android', 'electronics' ]
  }
]