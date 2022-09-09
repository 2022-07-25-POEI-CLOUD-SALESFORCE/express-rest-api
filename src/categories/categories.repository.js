const fs = require("fs/promises");
const { generateRandomIndex } = require("../utils/generate-random-index");

class CategoriesRepository {
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
  //{ name:"esfsdjfkdsjf",description:"adfjdslfsjklsdjfds"}
  async createOne(categoriesObj) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    const id = generateRandomIndex();
    categoriesObj.id = id;
    categories[id] = categoriesObj;
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }
  async updateOne(id, categoriesObj) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    categories[id] = { id, ...categoriesObj };
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

module.exports = CategoriesRepository;
