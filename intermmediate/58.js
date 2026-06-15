// 58. Remove product from wishlist.

db.users.updateOne({name: 'Priya Singh'},{
    $pull: {
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