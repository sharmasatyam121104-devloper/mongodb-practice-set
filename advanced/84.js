// 84. Find products where ALL reviews rating >= 4.

db.products.find({
    reviews: {
        $not: {$elemMatch: {
            rating: {
                $lt: 4
            }
        }}
    }
})


// [
//   {
//     _id: ObjectId('6a2fc6092f7e989b35748a62'),
//     name: 'Gaming Laptop',
//     price: 85000,
//     category: 'electronics',
//     stock: 8,
//     discount: 15,
//     tags: [ 'gaming', 'laptop', 'electronics' ],
//     reviews: [
//       { user: 'Rahul', rating: 5 },
//       { user: 'Priya', rating: 5 },
//       { user: 'Priya2', rating: 4 }
//     ]
//   },
//   {
//     _id: ObjectId('6a2fc6092f7e989b35748a63'),
//     name: 'Office Laptop',
//     price: 55000,
//     category: 'electronics',
//     stock: 12,
//     discount: 10,
//     tags: [ 'laptop', 'office', 'electronics' ],
//     reviews: [
//       { user: 'Rahul', rating: 5 },
//       { user: 'Sneha', rating: 4 },
//       { user: 'Priya2', rating: 4 }
//     ]
//   },
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