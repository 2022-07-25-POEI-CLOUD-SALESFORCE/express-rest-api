const CategorieRepository = require("./categorie.repository");

class CategorieService {
  constructor() {
    this.categorieRepository = new CategorieRepository();
  }

  findAll() {
    return this.categorieRepository.findAll();
  }

  async findOne(id) {
    const categorie = await this.categorieRepository.findOne(id);
    if (!categorie) throw new Error(`Cannot find categorie with id ${id}`);
    return categorie;
  }

  createOne(objectCategorie) {
    return this.categorieRepository.createOne(objectCategorie);
  }
  async updateOne(id, objectCategorie) {
    const categorie = await this.categorieRepository.findOne(id);
    if (!categorie) throw new Error(`Cannot find categorie with id ${id}`);
    return this.categorieRepository.updateOne(id, objectCategorie);
  }
  async deleteOne(id) {
    const categorie = await this.categorieRepository.findOne(id);
    if (!categorie) throw new Error(`Cannot find categorie with id ${id}`);
    return this.categorieRepository.deleteOne(id);
  }
}

module.exports = CategorieService;
