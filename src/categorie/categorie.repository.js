const fs = require("fs/promises");
const { generateRandomIndex } = require("../utils/generate-random-index");

class CategorieRepository {
  async findAll() {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    return categories;
  }
  async findOne(id) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    return categories[id];
  }

  async createOne(categoryObj) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    const id = generateRandomIndex();
    categories[id] = { id, ...categoryObj };
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }
  async updateOne(id, categoryObj) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    categories[id] = categoryObj;
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }
  async deleteOne(id) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    delete categories[id];
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }
}

module.exports = CategorieRepository;
