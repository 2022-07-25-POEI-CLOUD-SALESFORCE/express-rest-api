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
}

module.exports = CategorieService;
