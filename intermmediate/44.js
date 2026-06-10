// 44. Find orders with status = delivered.

db.orders.find({status: "delivered"});



[
  {
    _id: ObjectId('6a292968f0dc415ed5748a70'),
    user: 'Rahul Sharma',
    totalAmount: 80000,
    status: 'delivered',
    orderDate: ISODate('2025-02-10T00:00:00.000Z')
  },
  {
    _id: ObjectId('6a292968f0dc415ed5748a73'),
    user: 'Rahul Sharma',
    totalAmount: 4500,
    status: 'delivered',
    orderDate: ISODate('2025-01-20T00:00:00.000Z')
  }
]