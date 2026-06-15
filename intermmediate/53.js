// 53. Delete orders older than 5 years.

let fiveYearsAgo = new Date()
fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

db.orders.deleteMany({
  orderDate: {
    $lt: fiveYearsAgo
  }
});

// { acknowledged: true, deletedCount: 1 }