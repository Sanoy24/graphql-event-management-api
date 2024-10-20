const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema(
	{
		event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
		buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		price: { type: Number, required: true },
		status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Ticket", ticketSchema);
