import { Router } from 'express';
import { signup, login } from '#@/modules/auth/services/index.js';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const user = await signup(req.body);
    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    if (err.message === 'USER_EXISTS') return res.status(409).json({ message: 'Email already registered' });
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { token, user } = await login(req.body);
    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router;
