const fs = require("fs/promises");
const { generateRandomIndex } = require("../utils/generate-random-index");

class ProductsRepository {
  async findAll() {
    const products = JSON.parse(await fs.readFile("./products.json", "utf8"));
    return products;
  }
  async findOne(id) {
    const product = JSON.parse(await fs.readFile("./products.json", "utf8"))[
      id
    ];
    return product;
  }

  async createOne(categoriesObj) {
    const products = JSON.parse(await fs.readFile("./products.json", "utf8"));
    const id = generateRandomIndex();
    products[id] = { id, ...categoriesObj };
    await fs.writeFile("./products.json", JSON.stringify(products));
  }
  async updateOne(id, categoriesObj) {
    const products = JSON.parse(await fs.readFile("./products.json", "utf8"));
    products[id] = categoriesObj;
    await fs.writeFile("./products.json", JSON.stringify(products));
  }
  async deleteOne(id) {
    const products = JSON.parse(await fs.readFile("./products.json", "utf8"));
    delete products[id];
    await fs.writeFile("./products.json", JSON.stringify(products));
  }
}

module.exports = ProductsRepository;
