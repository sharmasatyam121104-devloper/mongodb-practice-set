// 51. Delete products whose stock is 0.

db.products.deleteMany({stock: {$eq: 0}});


// { acknowledged: true, deletedCount: 1 }