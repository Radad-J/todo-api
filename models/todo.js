const mongoose = require('mongoose');

// Define the schema for the Todo
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

// Create and export the model
module.exports = mongoose.model('Todo', todoSchema);