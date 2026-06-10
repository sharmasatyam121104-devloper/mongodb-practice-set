// 37. Find products that have both "gaming" and "laptop" tags.


db.products.find({tags: {$all: ["gaming", "laptop"]}});


[
  {
    _id: ObjectId('6a28177df0dc415ed5748a69'),
    name: 'Gaming Laptop',
    price: 75000,
    category: 'electronics',
    stock: 15,
    discount: 10,
    tags: [ 'gaming', 'laptop', 'electronics' ]
  }
]