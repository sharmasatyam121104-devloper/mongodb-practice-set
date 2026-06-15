// 52. Delete users who never placed any order.

db.users.deleteMany({
  orders: { $size: 0 }
});

// { acknowledged: true, deletedCount: 4 }

