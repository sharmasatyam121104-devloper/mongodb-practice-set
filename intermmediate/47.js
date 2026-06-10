// 47. Increase product stock by 50.

db.orders.updateMany({},[{
    $set: {
        stock: {$add: ["$stock", 50]}
    }
}])

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }