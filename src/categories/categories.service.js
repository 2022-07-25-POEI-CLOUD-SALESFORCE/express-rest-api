const ProductsService = require("../products/products.service");
const CategoriesRepository = require("./categories.repository");

class CategoriesService {
  constructor() {
    this.categoriesRepository = new CategoriesRepository();
    this.productsService = new ProductsService();
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

  async findProducts(id) {
    await this.findOne(id);
    const products = await this.productsService.findAll();
    const productsByCategory = [];
    for (let attr in products) {
      if (products[attr].categoryId === parseInt(id)) {
        productsByCategory.push(products[attr]);
      }
    }
    return productsByCategory;
  }
}

module.exports = CategoriesService;
