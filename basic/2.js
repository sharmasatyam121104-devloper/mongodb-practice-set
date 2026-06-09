//2. Find users whose age is greater than 25

db.users.find({age: {$gt: 25}})


[
  {
    _id: ObjectId('6a27da60f0dc415ed5748a60'),
    name: 'Priya Singh',
    age: 27,
    city: 'Mumbai',
    email: 'priya@yahoo.com',
    isActive: true
  },
  {
    _id: ObjectId('6a27da60f0dc415ed5748a61'),
    name: 'Amit Verma',
    age: 30,
    city: 'Delhi',
    email: 'amit@gmail.com',
    phone: '9123456780',
    isActive: false
  },
  {
    _id: ObjectId('6a27da60f0dc415ed5748a63'),
    name: 'Rohit Kumar',
    age: 29,
    city: 'Patna',
    email: 'rohit@yahoo.com',
    isActive: true
  },
  {
    _id: ObjectId('6a27da60f0dc415ed5748a65'),
    name: 'Neha Agarwal',
    age: 26,
    city: 'Delhi',
    email: 'neha@gmail.com',
    phone: '8877665544',
    isActive: true
  },
  {
    _id: ObjectId('6a27da60f0dc415ed5748a67'),
    name: 'Karan Malhotra',
    age: 31,
    city: 'Bangalore',
    email: 'karan@yahoo.com',
    phone: '9988112233',
    isActive: false
  },
  {
    _id: ObjectId('6a27da60f0dc415ed5748a68'),
    name: 'Pooja Mishra',
    age: 28,
    city: 'Lucknow',
    email: 'pooja@gmail.com',
    phone: '7766554433',
    isActive: true
  }
]