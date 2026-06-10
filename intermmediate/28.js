
// 28. Find products that belong to category "electronics".

db.products.find({category: "electronics"});


[
  {
    _id: ObjectId('6a28177df0dc415ed5748a69'),
    name: 'Gaming Laptop',
    price: 75000,
    category: 'electronics',
    stock: 15,
    discount: 10,
    tags: [ 'gaming', 'laptop', 'electronics' ]
  },
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
    _id: ObjectId('6a28177df0dc415ed5748a6f'),
    name: 'Gaming Headset',
    price: 4500,
    category: 'electronics',
    stock: 12,
    discount: 25,
    tags: [ 'gaming', 'audio', 'electronics' ]
  }
]