// models/visitRequestModel.js

import mongoose from "mongoose";

const visitRequestSchema = new mongoose.Schema(
  {
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },

    requestedDate: {
      type: Date,
      required: true,
    },

    timeSlot: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

// Prevent duplicate pending requests for same tenant/property/date/time slot
visitRequestSchema.index(
  {
    tenant: 1,
    property: 1,
    requestedDate: 1,
    timeSlot: 1,
  },
  {
    unique: true,
  },
);

const VisitRequest = mongoose.model("VisitRequest", visitRequestSchema);

export default VisitRequest;
