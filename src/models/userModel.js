const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true }, // Nom de l'utilisateur
  email: { type: String, required: true, unique: true }, // Email unique pour chaque utilisateur
  age: { type: Number, required: true }, // Âge de l'utilisateur
  password: { type: String, required: true }, // Mot de passe pour l'authentification
  Date: { type: Date, default: Date.now }, // Date de création de l'utilisateur
});

module.exports = mongoose.model('User', userSchema);