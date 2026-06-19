// 76. Add a new review to a product.

db.products.updateMany({},{
    $push: {reviews:  { user: 'Priya2', rating: 4 }}
})


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }