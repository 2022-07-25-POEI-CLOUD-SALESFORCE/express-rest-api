const express = require("express");
const cors = require("cors");
const categoriesRouter = require("./categories/categories.router");
const productsRouter = require("./products/products.router");
const { logger } = require("./middlewares/logger");

const app = express();

// const corsOptions = {
//   origin: "*",
// };

const whiteliste = ["http://localhost:7000"];

app.use(express.json());
app.use(logger);
app.use(cors());
// app.use(cors(corsOptions));
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (whiteliste.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Non autorisé par CORS"));
//       }
//     },
//   })
// );

app.use("/api/categories", categoriesRouter);
app.use("/api/products", productsRouter);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

/**
 *  # Supprimer une catégorie
 *  # Créer une categorie
 *  # Mettre à jour une catégorie
 */

/**
 *  Créer un produit pour une categorie(id) donnée.Tous les champs sont obligatoires
 *  Modifier un produit
 *  Supprimer un produit
 *  Récupérer tous les produits
 *  Récupérer un produit par son id
 *  Récupérer tous les produit pour une catégorie donnée
 * {
 *   id:1,
 *   nom:"PS 5",
 *   prixHT : 400,
 *   id_categorie:1,
 *   description :"sdsdfjnk"
 * }
 */
