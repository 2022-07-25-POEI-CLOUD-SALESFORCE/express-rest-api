const express = require("express");

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
  const id = parseInt(request.params.id);
  const category = categories.find((category) => category.id === parseInt(id));
  response.send(category);
});

app.post("/api/categories", (request, response) => {
  categories.push(request.body);
  response.send("Catégorie créée avec succès");
});

app.delete("/api/categories/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const category = categories.find((category) => category.id === parseInt(id));
  const categoryIndex = categories.indexOf(category);
  if (categoryIndex === -1) {
    return response.send("Rien à supprimer");
  }
  categories.splice(categoryIndex, 1);
  response.send("Supprimé avec succès");
});

app.put("/api/categories/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const category = categories.find((category) => category.id === id);
  Object.assign(category, request.body);
  response.send("Catégorie mis à jour ave c succès");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
