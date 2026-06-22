// 89. Add review only if product has less than 5 reviews.

db.products.updateMany({
    $expr: {
        $lt: [
            { $size: "$reviews" },
            5
        ]
    }
},
{
    $push: {
        reviews:{
            user: "new user", rating: 4
        } 
    }
})



// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }