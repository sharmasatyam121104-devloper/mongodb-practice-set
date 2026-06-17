// 62. Find products where Rahul gave rating 5.

db.products.find({
    reviews: {
        $elemMatch: {
            user: "Rahul",
            rating: 5
        }
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
//       { user: 'Amit', rating: 4 },
//       { user: 'Priya', rating: 5 }
//     ]
//   }
// ]