import * as projectService from '#@/modules/project/services/index.js';

export async function isAdminOrOwner(req, res, next) {
  if (req.user?.role === 'admin') return next();

  const id = req.params.id;
  if (!id) return res.status(403).json({ message: 'Forbidden' });

  const project = await projectService.findProjectById(id);
  if (!project) return res.status(404).json({ message: 'Not found' });

  if (String(project.owner._id) !== String(req.user.sub)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
}
