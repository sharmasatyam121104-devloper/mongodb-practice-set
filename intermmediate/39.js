// 39. Add a new tag "new" to a product.


db.products.updateMany({},{$push: {tags: "new-tag"}});

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 7,
//   modifiedCount: 7,
//   upsertedCount: 0