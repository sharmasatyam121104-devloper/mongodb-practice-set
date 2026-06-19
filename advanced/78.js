// 78. Remove review written by Amit.

db.products.updateMany(
    {},
    {
        $pull: {
            reviews: {
                user: "Amit"
            }
        }
    }
)


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 2,
//   upsertedCount: 0
// }