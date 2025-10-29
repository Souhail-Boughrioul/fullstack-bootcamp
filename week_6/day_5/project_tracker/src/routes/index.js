import { Router } from 'express';
import authModule from '#@/modules/auth/index.js';
import projectRoutes from '#@/routes/project/index.js';

const router = Router();

router.use('/auth', authModule);
router.use('/projects', projectRoutes);

router.get('/', (req, res) => res.json({ message: 'Welcome to the Project Tracker API' }));

export default router;
