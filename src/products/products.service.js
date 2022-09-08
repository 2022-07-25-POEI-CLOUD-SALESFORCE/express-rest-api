const CategoriesService = require("../categories/categories.service");
const ProductsRepository = require("./products.repository");

class ProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  findAll() {
    return this.productsRepository.findAll();
  }

  async findOne(id) {
    const products = await this.productsRepository.findOne(id);
    if (!products) throw new Error(`Cannot find products with id ${id}`);
    return products;
  }

  createOne(objectProducts) {
    return this.productsRepository.createOne(objectProducts);
  }
  async updateOne(id, objectProducts) {
    const products = await this.productsRepository.findOne(id);
    if (!products) throw new Error(`Cannot find products with id ${id}`);
    return this.productsRepository.updateOne(id, objectProducts);
  }
  async deleteOne(id) {
    const products = await this.productsRepository.findOne(id);
    if (!products) throw new Error(`Cannot find products with id ${id}`);
    return this.productsRepository.deleteOne(id);
  }
}

module.exports = ProductsService;
