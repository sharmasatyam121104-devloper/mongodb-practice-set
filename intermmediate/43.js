// 43. Find orders placed after 1 Jan 2025.


db.orders.find({orderDate: {$gt: new Date("2025-01-01")}});


[
  {
    _id: ObjectId('6a292968f0dc415ed5748a70'),
    user: 'Rahul Sharma',
    totalAmount: 80000,
    status: 'delivered',
    orderDate: ISODate('2025-02-10T00:00:00.000Z')
  },
  {
    _id: ObjectId('6a292968f0dc415ed5748a71'),
    user: 'Priya Singh',
    totalAmount: 3000,
    status: 'pending',
    orderDate: ISODate('2025-03-01T00:00:00.000Z')
  },
  {
    _id: ObjectId('6a292968f0dc415ed5748a73'),
    user: 'Rahul Sharma',
    totalAmount: 4500,
    status: 'delivered',
    orderDate: ISODate('2025-01-20T00:00:00.000Z')
  },
  {
    _id: ObjectId('6a292968f0dc415ed5748a74'),
    user: 'Sneha Gupta',
    totalAmount: 1200,
    status: 'pending',
    orderDate: ISODate('2025-03-05T00:00:00.000Z')
  }
]