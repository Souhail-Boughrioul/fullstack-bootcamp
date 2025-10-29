import Project from '#@/modules/project/model/index.js';

export async function createProject(payload) {
  return Project.create(payload);
}

export async function findProjectById(id) {
  return Project.findById(id).populate('owner', 'name email role');
}

export async function updateProject(id, data) {
  return Project.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteProject(id) {
  return Project.findByIdAndDelete(id);
}

export async function listProjects({ ownerId, page = 1, limit = 20 } = {}) {
  const q = ownerId ? { owner: ownerId } : {};
  return Project.find(q)
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('owner', 'name email role');
}
