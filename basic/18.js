// 18. Find users whose name is Rahul Sharma and city is Delhi.

db.users.find({name: "Rahul Sharma", city: "Delhi"});


[
  {
    _id: ObjectId('6a27da60f0dc415ed5748a5f'),
    name: 'Rahul Sharma',
    age: 22,
    city: 'Delhi',
    email: 'rahul@gmail.com',
    phone: '9876543210',
    isActive: true
  }
]