const CategoriesRepository = require("./categories.repository");

class CategoriesService {
  constructor() {
    this.categoriesRepository = new CategoriesRepository();
  }

  findAll() {
    return this.categoriesRepository.findAll();
  }

  async findOne(id) {
    const categories = await this.categoriesRepository.findOne(id);
    if (!categories) throw new Error(`Cannot find categories with id ${id}`);
    return categories;
  }

  createOne(objectCategories) {
    return this.categoriesRepository.createOne(objectCategories);
  }
  async updateOne(id, objectCategories) {
    const categories = await this.categoriesRepository.findOne(id);
    if (!categories) throw new Error(`Cannot find categories with id ${id}`);
    return this.categoriesRepository.updateOne(id, objectCategories);
  }
  async deleteOne(id) {
    const categories = await this.categoriesRepository.findOne(id);
    if (!categories) throw new Error(`Cannot find categories with id ${id}`);
    return this.categoriesRepository.deleteOne(id);
  }
}

module.exports = CategoriesService;
