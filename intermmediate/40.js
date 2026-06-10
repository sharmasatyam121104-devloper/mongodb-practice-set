// 40. Remove tag "old" from a product.

db.products.updateMany({},{$pull: {tags: "new-tag"}});

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 7,
//   modifiedCount: 7,
//   upsertedCount: 0
// }