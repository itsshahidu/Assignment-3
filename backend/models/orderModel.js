import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    payment: {
      paymentMethod: { type: String, required: true },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
    },
    prices: {
      items: { type: Number, required: true, default: 0.0 },
      tax: { type: Number, required: true, default: 0.0 },
      shipping: { type: Number, required: true, default: 0.0 },
      total: { type: Number, required: true, default: 0.0 },
    },
    status: {
      isPaid: { type: Boolean, required: true, default: false },
      paidAt: { type: Date },
      isDelivered: { type: Boolean, required: true, default: false },
      deliveredAt: { type: Date },
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
