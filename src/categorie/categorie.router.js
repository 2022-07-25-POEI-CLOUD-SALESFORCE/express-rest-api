const { Router } = require("express");
const { CategorieController } = require("./categorie.controller");
const { validateId } = require("./middlewares/validate.id");
const { validateBody } = require("./middlewares/validate.body");

const categorieController = new CategorieController();

//  api/categories
const categorieRouter = Router();

categorieRouter.get("/", categorieController.findAll);

categorieRouter.get("/:id", [validateId], categorieController.findOne);

categorieRouter.post("/", [validateBody], categorieController.create);

categorieRouter.delete("/:id", [validateId], categorieController.delete);

categorieRouter.put(
  "/:id",
  [validateId, validateBody],
  categorieController.update
);

module.exports.categorieRouter = categorieRouter;
