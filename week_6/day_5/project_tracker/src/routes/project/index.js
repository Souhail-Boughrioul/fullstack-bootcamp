import { Router } from 'express';
import * as projectService from '#@/modules/project/services/index.js';
import { auth } from '#@/middlewares/auth.js';
import { isAdminOrOwner } from '#@/middlewares/roles.js';

const router = Router();

router.post('/', auth, async (req, res) => {
  try {
    const payload = { ...req.body, owner: req.user.sub };
    const project = await projectService.createProject(payload);
    res.status(201).json({ project });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const ownerId = req.user.role === 'admin' ? undefined : req.user.sub;
    const projects = await projectService.listProjects({ ownerId });
    res.status(200).json({ projects });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', auth, isAdminOrOwner, async (req, res) => {
  const project = await projectService.findProjectById(req.params.id);
  if (!project) return res.status(404).json({ message: 'Not found' });
  res.status(200).json({ project });
});

router.put('/:id', auth, isAdminOrOwner, async (req, res) => {
  try {
    const updated = await projectService.updateProject(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ project: updated });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', auth, isAdminOrOwner, async (req, res) => {
  try {
    const deleted = await projectService.deleteProject(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
