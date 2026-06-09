// 15. Find users whose age is either 20, 25, or 30.


db.users.find({age: {$in: [20,25,30]}});

[
  {
    _id: ObjectId('6a27da60f0dc415ed5748a61'),
    name: 'Amit Verma',
    age: 30,
    city: 'Delhi',
    email: 'amit@gmail.com',
    phone: '9123456780',
    isActive: false
  }
]