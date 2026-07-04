import mongoose, { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema({
  _id: { auto: true, type: mongoose.Types.ObjectId },
  category: { ref: 'Category', type: mongoose.Types.ObjectId },
  description: String,
  images: [{ type: String }],
  NamaProduk: { type: String },
  price: { required: true, type: Number },
  properties: { type: Object },

  title: { required: true, type: String },
});

export const Product = models['Product'] || model('Product', ProductSchema);
