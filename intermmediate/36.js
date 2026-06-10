// 36. Find products having tag "gaming".



db.products.find({tags: {$in: ["gaming"]}});

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
    _id: ObjectId('6a28177df0dc415ed5748a6c'),
    name: 'Mechanical Keyboard',
    price: 3500,
    category: 'accessories',
    stock: 20,
    discount: 12,
    tags: [ 'keyboard', 'gaming', 'computer' ]
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