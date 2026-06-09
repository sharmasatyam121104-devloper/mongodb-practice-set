// 6: Show only name and email of all users.

db.users.find({},{name: 1, email: 1, _id: 0});

[
  { name: 'Rahul Sharma', email: 'rahul@gmail.com' },
  { name: 'Priya Singh', email: 'priya@yahoo.com' },
  { name: 'Amit Verma', email: 'amit@gmail.com' },
  { name: 'Sneha Gupta', email: 'sneha@gmail.com' },
  { name: 'Rohit Kumar', email: 'rohit@yahoo.com' },
  { name: 'Ankit Raj', email: 'ankit@gmail.com' },
  { name: 'Neha Agarwal', email: 'neha@gmail.com' },
  { name: 'Riya Das', email: 'riya@gmail.com' },
  { name: 'Karan Malhotra', email: 'karan@yahoo.com' },
  { name: 'Pooja Mishra', email: 'pooja@gmail.com' }
]