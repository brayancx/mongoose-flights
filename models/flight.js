const { Schema, model } = require("mongoose");

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
      required: true,
    },
    flightNo: { type: Number, min: 10, max: 9999, required: true },
    departs: {
      type: Date,
      required: true,
      default: () => {
        const today = new Date();
        const oneYearFromToday = new Date(
          today.getFullYear() + 1,
          today.getMonth(),
          today.getDate()
        );
        return oneYearFromToday;
      },
    },
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      default: "SAN",
    },
    destinations: [{ type: Schema.Types.ObjectId, ref: "Destination" }],
  },
  { timestamps: true }
);

const Flight = model("Flight", flightSchema);
module.exports = Flight;