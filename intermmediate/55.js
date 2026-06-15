// 55. Add new comment to blog post.


db.blogs.updateMany({},{
    $push :{
        comments: {
            user: "Satyam",
            text: "Excellent article!"
        }
    }
})


// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0
// }