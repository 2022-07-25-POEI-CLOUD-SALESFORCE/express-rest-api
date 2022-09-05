class Category {
  findAll(_, response) {
    response.send(categories);
  }

  findOne(request, response) {
    response.send(request.category);
  }

  delete(request, response) {
    const categoryIndex = categories.indexOf(request.category);
    categories.splice(categoryIndex, 1);
    response.send("Supprimé avec succès");
  }

  create(request, response) {
    const id = generateRandomIndex();
    const category = categories.find(
      (category) => category.nom === request.body.nom
    );
    if (category) {
      return response
        .status(400)
        .send(
          `Vous ne pouvez pas avoir 2 catégories avec le nom ${request.body.nom}`
        );
    }
    categories.push({ id, ...request.body });
    response.send("Catégorie créée avec succès");
  }

  update(request, response) {
    const category = categories.find(
      (category) => category.nom === request.body.nom
    );
    if (category && category.id !== parseInt(request.params.id)) {
      return response
        .status(400)
        .send(
          `Vous ne pouvez pas avoir 2 catégories avec le nom ${request.body.nom}`
        );
    }
    Object.assign(request.category, request.body);
    response.send("Catégorie mis à jour avec succès");
  }
}

module.exports.CategorieController = CategorieController;
