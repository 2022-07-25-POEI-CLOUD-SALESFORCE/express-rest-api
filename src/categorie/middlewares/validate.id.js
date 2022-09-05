const { categories } = require("../../categories");

function validateId(request, response, next) {
  const id = parseInt(request.params.id);
  const category = categories.find((category) => category.id === parseInt(id));
  if (!category) {
    return response.sendStatus(404);
  }
  request.category = category;
  next();
}

module.exports.validateId = validateId;
