const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const filePath = path.join(__dirname, '../users.json');

// Helpers to read/write JSON
const readUsers = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

const writeUsers = (users) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error writing file:', err);
    throw new Error('Failed to save users');
  }
};

// POST /register
exports.registerUser = async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  if (!name || !lastName || !email || !username || !password)
    return res.status(400).json({ message: 'All fields are required' });

  const users = readUsers();

  // Check if username or email already exists
  if (users.find(u => u.username === username))
    return res.status(400).json({ message: 'Username already exists' });

  if (users.find(u => u.email === email))
    return res.status(400).json({ message: 'Email already exists' });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username: newUser.username } });
};

// POST /login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required' });

  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: 'User not registered' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid password' });

  res.json({ message: `Welcome ${user.username}! Login successful.` });
};

// GET /users
exports.getAllUsers = (req, res) => {
  const users = readUsers();
  res.json(users.map(u => ({ id: u.id, name: u.name, lastName: u.lastName, email: u.email, username: u.username })));
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ id: user.id, name: user.name, lastName: user.lastName, email: user.email, username: user.username });
};

// PUT /users/:id
exports.updateUser = (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  if (name) users[userIndex].name = name;
  if (lastName) users[userIndex].lastName = lastName;
  if (email) users[userIndex].email = email;
  if (username) users[userIndex].username = username;
  if (password) users[userIndex].password = bcrypt.hashSync(password, 10);

  writeUsers(users);
  res.json({ message: 'User updated successfully' });
};
