const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((error) => error.message);

    return res.status(400).json({
      message: "Validation failed",
      errors: messages
    });
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID"
    });
  }

  // Duplicate unique field
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];

    return res.status(409).json({
      message: `${field} already exists`
    });
  }

  res.status(500).json({
    message: "Internal server error"
  });
};

module.exports = errorHandler;