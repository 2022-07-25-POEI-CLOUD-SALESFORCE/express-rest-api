const CategorieService = require("./categorie.service");

class CategorieController {
  constructor() {
    this.categorieService = new CategorieService();
  }

  findAll = async (_, response) => {
    const categories = await this.categorieService.findAll();
    return response.send(categories);
  };

  findOne = async (request, response) => {
    try {
      const id = request.params.id;
      const category = await this.categorieService.findOne(id);
      response.send(category);
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  delete = async (request, response) => {
    try {
      const id = request.params.id;
      await this.categorieService.deleteOne(id);
      response.send("Catégorie supprimé avec succès");
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  create = async (request, response) => {
    try {
      await this.categorieService.createOne(request.body);
      response.status(201).send("Catégorie créée avec succès");
    } catch (err) {
      response.sendStatus(500);
      console.log(err);
    }
  };

  update = async (request, response) => {
    try {
      const id = request.params.id;
      await this.categorieService.updateOne(id, request.body);
      response.send("Catégorie mis à jour avec succès");
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };
}

module.exports.CategorieController = CategorieController;
