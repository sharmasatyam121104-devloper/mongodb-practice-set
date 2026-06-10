// 35. Find products that do not belong to electronics category.


db.products.find({category: {$ne: "electronics"}});


[
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
    _id: ObjectId('6a28177df0dc415ed5748a6e'),
    name: 'Office Chair',
    price: 6000,
    category: 'furniture',
    stock: 0,
    discount: 20,
    tags: [ 'chair', 'office', 'furniture' ]
  }
]