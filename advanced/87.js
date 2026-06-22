// 87. Find products with highest stock.


db.products.find().sort({stock: 1}).limit(1)


// [
//   {
//     _id: ObjectId('6a2fc6092f7e989b35748a66'),
//     name: 'LED Monitor',
//     price: 12000,
//     category: 'electronics',
//     stock: 0,
//     discount: 20,
//     tags: [ 'monitor', 'display', 'electronics' ],
//     reviews: [ { user: 'Priya2', rating: 4 } ]
//   }
// ]