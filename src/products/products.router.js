const { Router } = require("express");
const { ProductsController } = require("./products.controller");
const { validateBody } = require("./middlewares/validate.body");
const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.get("/", productsController.findAll);

productsRouter.get("/:id", productsController.findOne);

productsRouter.post("/", [validateBody], productsController.create);

productsRouter.delete("/:id", productsController.delete);

productsRouter.put("/:id", validateBody, productsController.update);

module.exports = productsRouter;
