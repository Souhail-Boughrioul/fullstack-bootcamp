import User from '#@/modules/auth/model/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

export async function signup({ name, email, password, role }) {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('USER_EXISTS');

  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await User.create({ name, email, password: hashed, role: role || 'member' });
  return user;
}

export async function login({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('INVALID_CREDENTIALS');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('INVALID_CREDENTIALS');

  const token = jwt.sign(
    { sub: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { user, token };
}

export async function getUserById(id) {
  return User.findById(id).select('-password');
}
