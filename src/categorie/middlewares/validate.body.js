function validateBody(request, response, next) {
  const body = request.body;
  const validator = { errors: {}, isValid: true };
  if (!body.nom) {
    validator.errors.nom = "le nom ne peut pas être vide";
  }

  if (!body.description) {
    validator.errors.description = "la description ne peut pas être vide";
  }

  if (validator.errors.nom || validator.errors.description) {
    validator.isValid = false;
  }

  if (!validator.isValid) {
    return response.status(422).send(validator);
  }

  next();
}

module.exports.validateBody = validateBody;
