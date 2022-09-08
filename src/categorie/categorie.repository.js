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
}

module.exports = CategorieRepository;
