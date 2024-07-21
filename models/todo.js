const mongoose = require('mongoose');

// Define the schema for the Todo
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true }
});

// Create and export the model
module.exports = mongoose.model('Todo', todoSchema);