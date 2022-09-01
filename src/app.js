const express = require("express");
const res = require("express/lib/response");

// Catégories :  /api/categories
// Produits : /api/products

const categories = [
  { id: 1, nom: "Jeux vidéos" },
  { id: 2, nom: "Ordinateurs" },
];

const app = express();

app.use(express.json());

app.get("/api/categories", (request, response) => {
  response.send(categories);
});

app.get("/api/categories/:id", (request, response) => {
  //   response.send(request.params.id);
  const id = parseInt(request.params.id);

  //   const category = categories.find(function (category) {
  //     return category.id === parseInt(id);
  //   });

  const category = categories.find((category) => category.id === parseInt(id));

  response.send(category);
});

app.post("/api/categories", (request, response) => {
  categories.push(request.body);
  response.send("Catégorie créée avec succès");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

//CRUD (Create Read Update Delete)
