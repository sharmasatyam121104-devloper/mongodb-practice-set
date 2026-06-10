// 38. Find products having exactly 3 tags.



db.products.find({tags: {$size: 3}});

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
    _id: ObjectId('6a28177df0dc415ed5748a6b'),
    name: 'Wireless Mouse',
    price: 800,
    category: 'accessories',
    stock: 50,
    discount: 5,
    tags: [ 'mouse', 'computer', 'electronics' ]
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