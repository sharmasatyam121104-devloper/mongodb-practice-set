// 81. Remove multiple tags from a product.

db.products.updateMany(
    {},
    {
        $pull: {
            tags: {
                $in: ["newTag1", "newTag2"]
            }
        }
    }
)


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }