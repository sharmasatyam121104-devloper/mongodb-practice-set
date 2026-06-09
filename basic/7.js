// 7. Find users whose name starts with "R".

db.users.find({name: /R/});


[
  {
    _id: ObjectId('6a27da60f0dc415ed5748a5f'),
    name: 'Rahul Sharma',
    age: 22,
    city: 'Delhi',
    email: 'rahul@gmail.com',
    phone: '9876543210',
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
    _id: ObjectId('6a27da60f0dc415ed5748a64'),
    name: 'Ankit Raj',
    age: 21,
    city: 'Patna',
    email: 'ankit@gmail.com',
    phone: '8899776655',
    isActive: false
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