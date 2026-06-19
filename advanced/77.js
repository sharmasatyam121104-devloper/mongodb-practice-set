// 77. Update the rating of Rahul's review.

db.products.updateMany(
    {
        "reviews.user": "Rahul"
    },
    {
        $set: {
            "reviews.$.rating": 5
        }
    }
)


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 4,
//   modifiedCount: 3,
//   upsertedCount: 0
// }