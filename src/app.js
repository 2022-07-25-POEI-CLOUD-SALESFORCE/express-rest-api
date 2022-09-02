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

app.delete("/api/categories/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const index = categories.findIndex((category) => category.id === id);
  categories.splice(index, 1);
  response.send("Supprimé avec succès");
});

// Mis à jour
// {nom:"Toto"}
// /api/categories/1 , {nom:"Toto"}
app.put("/api/categories/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const category = categories.find((category) => category.id === id);
  category.nom = request.body.name;
  Object.assign(category, request.body);
  response.send("Catégorie mis à jour avec succès");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

//CRUD (Create Read Update Delete)
