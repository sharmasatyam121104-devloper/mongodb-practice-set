// 22. Find users whose email domain is yahoo.com.

db.users.find({email: /yahoo\.com/});


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
    _id: ObjectId('6a27da60f0dc415ed5748a63'),
    name: 'Rohit Kumar',
    age: 29,
    city: 'Patna',
    email: 'rohit@yahoo.com',
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
  }
]