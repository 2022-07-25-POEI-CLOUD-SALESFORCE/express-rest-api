const { Router } = require("express");
const { CategorieController } = require("./categorie.controller");
const { checkExistence } = require("./middlewares/check.existence");
const { validateBody } = require("./middlewares/validate.body");

const categorieController = new CategorieController();

//  api/categories
const categorieRouter = Router();

categorieRouter.get("/", categorieController.findAll);

categorieRouter.get("/:id", [checkExistence], categorieController.findOne);

categorieRouter.post("/", [validateBody], categorieController.create);

categorieRouter.delete("/:id", [checkExistence], categorieController.delete);

categorieRouter.put(
  "/:id",
  [checkExistence, validateBody],
  categorieController.update
);

module.exports.categorieRouter = categorieRouter;
