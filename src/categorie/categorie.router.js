const { Router } = require("express");
const { CategorieController } = require("./categorie.controller");
const { validateBody } = require("./middlewares/validate.body");
const categorieController = new CategorieController();

const categorieRouter = Router();

categorieRouter.get("/", categorieController.findAll);

categorieRouter.get("/:id", categorieController.findOne);

categorieRouter.post("/", [validateBody], categorieController.create);

categorieRouter.delete("/:id", categorieController.delete);

categorieRouter.put("/:id", validateBody, categorieController.update);

module.exports = categorieRouter;
