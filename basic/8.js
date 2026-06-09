// 8. Find users whose email contains gmail.

db.users.find({email: /gmail/});

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
    _id: ObjectId('6a27da60f0dc415ed5748a68'),
    name: 'Pooja Mishra',
    age: 28,
    city: 'Lucknow',
    email: 'pooja@gmail.com',
    phone: '7766554433',
    isActive: true
  }
]