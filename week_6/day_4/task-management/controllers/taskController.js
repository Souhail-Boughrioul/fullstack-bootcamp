const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../tasks.json');

// Helper: read tasks safely
const readTasks = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

// Helper: write tasks safely
const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error('Error writing file:', err);
    throw new Error('Failed to save tasks');
  }
};

// GET /tasks
exports.getAllTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

// GET /tasks/:id
exports.getTaskById = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

// POST /tasks
exports.createTask = (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description)
    return res.status(400).json({ message: 'Title and description are required' });

  const tasks = readTasks();

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    status: status || 'pending',
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
};

// PUT /tasks/:id
exports.updateTask = (req, res) => {
  const { title, description, status } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1)
    return res.status(404).json({ message: 'Task not found' });

  if (!title && !description && !status)
    return res.status(400).json({ message: 'At least one field is required to update' });

  // Update fields
  if (title) tasks[taskIndex].title = title;
  if (description) tasks[taskIndex].description = description;
  if (status) tasks[taskIndex].status = status;

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
};

// DELETE /tasks/:id
exports.deleteTask = (req, res) => {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1)
    return res.status(404).json({ message: 'Task not found' });

  const deletedTask = tasks.splice(taskIndex, 1);
  writeTasks(tasks);

  res.json({ message: 'Task deleted', task: deletedTask[0] });
};
