// 79. Add multiple tags to a product.

db.products.updateMany({}, {
  $push: {
    tags: ["newTag1", "newTag2"]
  }  
})


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }