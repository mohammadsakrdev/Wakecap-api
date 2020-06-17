const mongoose = require('mongoose');

const { Schema } = mongoose;

const AssetSchema = new Schema(
  {
    workerId: {
      type: Schema.ObjectId,
      ref: 'worker'
    },
    clientId: {
      type: Schema.ObjectId,
      ref: 'Client'
    },
    siteId: {
      type: Schema.ObjectId,
      ref: 'Site'
    },
    location: {
      coordinates: [Number],
      type: {
        type: String,
        default: 'Point'
      }
    },
    isActive: { type: Boolean, required: true },
    duration: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Asset = mongoose.model('Asset', AssetSchema);
module.exports = Asset;
