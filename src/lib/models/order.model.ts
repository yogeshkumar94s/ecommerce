import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    qty: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
