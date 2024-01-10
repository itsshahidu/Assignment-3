import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('654321', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'shahid@email.com',
    password: bcrypt.hashSync('654321', 10),
  },
  {
    name: 'Jane Doe',
    email: 'khan@email.com',
    password: bcrypt.hashSync('654321', 10),
  },
];

export default users;
