// 56. Remove a specific comment.

db.blogs.updateOne(
{
    title: "MongoDB Basics"
},
{
    $pull : {
        comments: { 
            user: "Rahul", text: "Great tutorial" 
        }
    }
}
)



// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }