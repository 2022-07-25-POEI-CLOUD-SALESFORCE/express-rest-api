const { Router } = require("express");
const { CategoriesController } = require("./categories.controller");
const { validateBody } = require("./middlewares/validate.body");
const categoriesController = new CategoriesController();

const categoriesRouter = Router();

categoriesRouter.get("/", categoriesController.findAll);

categoriesRouter.get("/:id", categoriesController.findOne);

categoriesRouter.post("/", [validateBody], categoriesController.create);

categoriesRouter.delete("/:id", categoriesController.delete);

categoriesRouter.put("/:id", validateBody, categoriesController.update);

module.exports = categoriesRouter;
