// 19. Find users whose city is Delhi OR Mumbai.

db.users.find({city: {$in: ["Delhi", "Mumbai"]}});


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
  }
]