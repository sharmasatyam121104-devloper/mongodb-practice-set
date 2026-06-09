// 14. Skip first 5 users and show next 5 users.

db.users.find().skip(5).limit(5);


[
  {
    _id: ObjectId('6a27da60f0dc415ed5748a64'),
    name: 'Ankit Raj',
    age: 21,
    city: 'Patna',
    email: 'ankit@gmail.com',
    phone: '8899776655',
    isActive: false
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
    _id: ObjectId('6a27da60f0dc415ed5748a66'),
    name: 'Riya Das',
    age: 23,
    city: 'Mumbai',
    email: 'riya@gmail.com',
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