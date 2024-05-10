import { Document, Schema, model, models } from "mongoose";

// Define a schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    default: 'Lamps'
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const Product = model('Product', productSchema);

export default Product;
