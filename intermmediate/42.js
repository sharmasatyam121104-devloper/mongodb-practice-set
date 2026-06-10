// 42. Find orders whose total amount > 5000.

db.orders.find({totalAmount: {$gt: 5000}});


[
  {
    _id: ObjectId('6a292968f0dc415ed5748a70'),
    user: 'Rahul Sharma',
    totalAmount: 80000,
    status: 'delivered',
    orderDate: ISODate('2025-02-10T00:00:00.000Z')
  },
  {
    _id: ObjectId('6a292968f0dc415ed5748a72'),
    user: 'Amit Verma',
    totalAmount: 15000,
    status: 'cancelled',
    orderDate: ISODate('2024-12-15T00:00:00.000Z')
  }
]