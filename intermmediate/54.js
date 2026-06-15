// 54. Increase view count of a blog post by 1.

// db.blogs.insertMany([
//     {
//         title: "MongoDB Basics",
//         views: 120,
//         comments: [
//             { user: "Rahul", text: "Great tutorial" },
//             { user: "Amit", text: "Very helpful" }
//         ]
//     },
//     {
//         title: "JavaScript Async Guide",
//         views: 300,
//         comments: [
//             { user: "Priya", text: "Awesome explanation" }
//         ]
//     },
//     {
//         title: "Node.js Performance Tips",
//         views: 80,
//         comments: []
//     }
// ])

db.blogs.updateMany({},{
    $inc: {
        views: 1
    }
})

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0
// }