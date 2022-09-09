const { response } = require("express");
const CategoriesService = require("./categories.service");

class CategoriesController {
  constructor() {
    this.categoriesService = new CategoriesService();
  }

  findAll = async (_, response) => {
    const categories = await this.categoriesService.findAll();
    return response.send(categories);
  };

  findOne = async (request, response) => {
    try {
      const id = request.params.id;
      const categories = await this.categoriesService.findOne(id);
      response.send(categories);
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  delete = async (request, response) => {
    try {
      const id = request.params.id;
      await this.categoriesService.deleteOne(id);
      response.send("Catégorie supprimé avec succès");
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  create = async (request, response) => {
    try {
      await this.categoriesService.createOne(request.body);
      response.status(201).send("Catégorie créée avec succès");
    } catch (err) {
      response.sendStatus(500);
      console.log(err);
    }
  };

  update = async (request, response) => {
    try {
      const id = request.params.id;
      await this.categoriesService.updateOne(id, request.body);
      response.send("Catégorie mis à jour avec succès");
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };

  findProducts = async (request, response) => {
    try {
      const id = request.params.id;
      const products = await this.categoriesService.findProducts(id);
      response.send(products);
    } catch (err) {
      console.log("Erreur : ", err.message);
      response.status(404).send(err.message);
    }
  };
}

module.exports.CategoriesController = CategoriesController;
