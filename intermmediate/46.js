// 46. Increase product price by 10%.


db.orders.updateMany({},[
    {
        $set: {
            totalAmount: {$multiply: ["$totalAmount", 1.10]}
        }
    }
])

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }