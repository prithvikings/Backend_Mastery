const validate = (schema) => async (req, res, next) => {
  try {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(422).json({
        status: 422,
        message: "Fill the input properly",
        extraDetails: result.error.issues.map((issue) => issue.message),
      });
    }
    req.body = result.data; // Store the validated data
    return next();
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server Error",
    });
  }
};

module.exports = validate;
