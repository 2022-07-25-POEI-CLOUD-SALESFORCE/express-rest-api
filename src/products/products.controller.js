const CategoriesService = require("../categories/categories.service");
const ProductsService = require("./products.service");

class ProductsController {
  constructor() {
    this.productsService = new ProductsService();
    this.categoriesService = new CategoriesService();
  }

  findAll = async (_, response) => {
    const products = await this.productsService.findAll();
    return response.send(products);
  };

  findOne = async (request, response) => {
    try {
      const id = request.params.id;
      const product = await this.productsService.findOne(id);
      response.send(product);
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  delete = async (request, response) => {
    try {
      const id = request.params.id;
      await this.productsService.deleteOne(id);
      response.send("Produit supprimé avec succès");
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  create = async (request, response) => {
    try {
      await this.categoriesService.findOne(request.body.categoryId);
      await await this.productsService.createOne(request.body);
      response.status(201).send("Produit créé avec succès");
    } catch (err) {
      response.sendStatus(400);
      console.log(err.message);
    }
  };

  update = async (request, response) => {
    try {
      const id = request.params.id;
      await this.productsService.updateOne(id, request.body);
      response.send("Produit mis à jour avec succès");
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };
}

module.exports.ProductsController = ProductsController;
