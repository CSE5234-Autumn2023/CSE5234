const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const InventorySchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for todo
const Todo = mongoose.model('inventory', TodoSchema);

module.exports = Todo;