// 21. Find users whose name ends with "a".

db.users.find({name: /a$/});


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
    _id: ObjectId('6a27da60f0dc415ed5748a61'),
    name: 'Amit Verma',
    age: 30,
    city: 'Delhi',
    email: 'amit@gmail.com',
    phone: '9123456780',
    isActive: false
  },
  {
    _id: ObjectId('6a27da60f0dc415ed5748a62'),
    name: 'Sneha Gupta',
    age: 24,
    city: 'Kolkata',
    email: 'sneha@gmail.com',
    phone: '9988776655',
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