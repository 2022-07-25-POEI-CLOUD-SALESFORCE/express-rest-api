function validateBody(request, response, next) {
  const body = request.body;
  const validator = { errors: {}, isValid: true };
  if (!body.name) {
    validator.errors.name = "le name ne peut pas être vide";
  }

  // if (!body.description) {
  //   validator.errors.description = "la description ne peut pas être vide";
  // }

  if (validator.errors.name /*|| validator.errors.description*/) {
    validator.isValid = false;
  }

  if (!validator.isValid) {
    return response.status(422).send(validator);
  }

  next();
}

module.exports.validateBody = validateBody;
