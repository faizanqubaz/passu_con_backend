import mongoose, { Schema } from 'mongoose';

// Define the Ibex schema
const IbexSchema = new Schema(
  {
    ibexname: { type: String, required: true },
    description: { type: String, required: true },
    ibexrate: { type: Number, required: true }, // Assuming rate is a number
    guideName: { type: String, required: true },
    ibexsize: { type: String, required: true },
    priceOld: { type: String, required: true },
    newPrice: { type: String, required: true },
    huntername: { type: String, required: true },
    hunterlocation: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    huntdate: { type: Date, required: true },
    huntType:{type:String,required:true},
    ibexphotos: [{ type: String, required: true }], // Array of photo URLs
    guidephotos: [{ type: String, required: true }], // Array of guide photo URLs
  },
  { timestamps: true }
);

// Create the Ibex model
const Ibex = mongoose.model('Ibex', IbexSchema);

export { Ibex };
