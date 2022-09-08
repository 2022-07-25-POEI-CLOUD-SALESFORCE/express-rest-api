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

  delete = async (request, response) => {};

  create = async (request, response) => {};

  update = async (request, response) => {};
}

module.exports.CategorieController = CategorieController;
