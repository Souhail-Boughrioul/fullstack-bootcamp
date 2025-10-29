import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: String,
  done: { type: Boolean, default: false }
}, { _id: false });

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasks: [TaskSchema]
}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);
