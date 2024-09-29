import mongoose, { Schema } from 'mongoose';


// Define the Paint schema
const AdminSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    
  },
  { timestamps: true }
);

// Create the Paint model
const Admin= mongoose.model('adminpassus', AdminSchema);

module.exports = { Admin };

