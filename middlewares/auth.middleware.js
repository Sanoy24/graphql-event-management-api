const { verifyToken } = require("../utils/auth");
const User = require("../models/User.model");

const authMiddleware = async ({ req }) => {
	const authHeader = req.headers.authorization || "";
	const token = authHeader.split(" ")[1];

	if (!token) return { user: null };
	const decoded = verifyToken(token);
	const user = await User.findById(decoded.id);
	return { user };
};

module.exports = authMiddleware;
