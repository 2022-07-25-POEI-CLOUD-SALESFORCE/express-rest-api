const express = require("express");
const { categorieRouter } = require("./categorie/categorie.router");
const { logger } = require("./middlewares/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/categories", categorieRouter);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
