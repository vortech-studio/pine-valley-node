const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    followers: {
      type: Number,
      default: 0,
    },
    holes: {
      type: Number,
      required: true,
    },
    rating: {
      type: Map,
      of: Number,
    },
    services: {
      type: Map,
      of: String,
    },
    images: [Buffer],
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
