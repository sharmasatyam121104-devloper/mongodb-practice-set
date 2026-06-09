// 10. Find users whose phone field does not exist.


db.users.find({phone: {$exists: false}});


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
    _id: ObjectId('6a27da60f0dc415ed5748a66'),
    name: 'Riya Das',
    age: 23,
    city: 'Mumbai',
    email: 'riya@gmail.com',
    isActive: true
  }
]