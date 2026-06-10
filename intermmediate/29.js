// 29. Find products whose stock is less than 10.

db.products.find({stock: {$lt: 10}});


[
  {
    _id: ObjectId('6a28177df0dc415ed5748a6a'),
    name: 'Smartphone',
    price: 25000,
    category: 'electronics',
    stock: 8,
    discount: 15,
    tags: [ 'phone', 'android', 'electronics' ]
  },
  {
    _id: ObjectId('6a28177df0dc415ed5748a6d'),
    name: 'LED Monitor',
    price: 12000,
    category: 'electronics',
    stock: 5,
    discount: 18,
    tags: [ 'monitor', 'display', 'electronics' ]
  },
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