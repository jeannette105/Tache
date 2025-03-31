const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: { type: String, required: true }, // Titre de la tâche
  description: { type: String, required: true }, // Description de la tâche
  dueDate: { type: Date, required: true }, // Date d'échéance de la tâche
  status: { type: String, enum: ['En cours', 'Terminée'], default: 'En cours' }, // Statut de la tâche
  createdAt: { type: Date, default: Date.now }, // Date de création de la tâche
});

module.exports = mongoose.model('Task', taskSchema);
