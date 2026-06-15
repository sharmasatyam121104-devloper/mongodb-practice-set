// 59. Add item to shopping cart.

db.users.updateOne({ name: 'Priya Singh'}, {
    $push: {
        cart: {
            product: 'Phone add',
            quantity: NumberInt('1')
        } 
    }
})

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }