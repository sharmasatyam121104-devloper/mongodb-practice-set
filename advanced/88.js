// 88. Add tag 'sale' where discount > 15.

db.products.updateMany({discount: {$gt: 15}},{
    $push: {
        tags: ["sale"]
    }
})


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }