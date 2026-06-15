// 57. Add product to user wishlist.

db.users.updateOne({name: "Priya Singh"}, {
    $push: {
        wishlist: "new game"
    }
})


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }