const express = require("express");

// Catégories :  /api/categories
// Produits : /api/products

const categories = [
  {
    id: 1,
    nom: "Jeux vidéos",
    description: "C'est pour ceux qui adorent chirer",
  },
  {
    id: 2,
    nom: "Ordinateurs",
    description: "Ceci inclut les laptop & ordinateurs de bureau",
  },
];

const app = express();

app.use(express.json());
app.use(logger);

function logger(request, _, next) {
  console.log(
    `# ${request.method}  ${request.url} Data ${JSON.stringify(request?.body)}`
  );
  next();
}

function generateRandomIndex() {
  return Math.floor(Math.random() * 999) + 1;
}

function validateCategory(request, response, next) {
  const id = parseInt(request.params.id);
  const category = categories.find((category) => category.id === parseInt(id));
  if (!category) {
    return response.sendStatus(404);
  }
  request.category = category;
  next();
}

function validateBody(request, response, next) {
  // V1
  const validator = {
    errors: {},
    isValid: true,
  };

  if (!request.body.nom) {
    validator.errors.nom = "le nom ne peut pas être vide";
  }

  if (!request.body.description) {
    validator.errors.description = "la description ne peut pas être vide";
  }

  if (validator.errors.nom || validator.errors.description) {
    validator.isValid = false;
  }

  // V2
  // const fields = ["nom", "description"];

  // const request = {
  //   body: {
  //     nom: "sdfjdsklfdsk",
  //     description: "dsfjdsfjdslkfdj",
  //   },
  // };

  // const validator = {
  //   errors: {},
  //   isValid: true,
  // };

  // for (let field of fields) {
  //   //nom
  //   if (!request.body[field]) {
  //     //if(!request.body["description"])
  //     validator.errors[field] = `${field} ne peut pas être vide`;
  //   }
  // }

  // for (let field of fields) {
  //   //nom
  //   if (!request.body[field]) {
  //     //!request.body["nom"]
  //     validator.isValid = false;
  //     break;
  //   }
  // }

  if (!validator.isValid) {
    // return response.sendStatus(422);
    return response.status(422).send(validator);
  }

  next();
}

app.get("/api/categories", (_, response) => {
  response.send(categories);
});

app.get("/api/categories/:id", validateCategory, (request, response) => {
  response.send(request.category);
});

app.post("/api/categories", [validateBody], (request, response) => {
  const id = generateRandomIndex();
  categories.push({ id, ...request.body });
  response.send("Catégorie créée avec succès");
});

app.delete("/api/categories/:id", validateCategory, (request, response) => {
  const categoryIndex = categories.indexOf(request.category);
  categories.splice(categoryIndex, 1);
  response.send("Supprimé avec succès");
});

app.put(
  "/api/categories/:id",
  [validateCategory, validateBody],
  (request, response) => {
    Object.assign(request.category, request.body);
    response.send("Catégorie mis à jour avec succès");
  }
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

// # 1. Mettre à jour la route PUT /api/categories/:id
// # 2. Mettre à jour la route DELETE /api/categories/:id
// # 3. Créer un middleware de Logging
//      # POST /api/categories , BODY {}

// #1. Ajouter un champs description dans les catégories
// #2. Ajouter une logique de validation pour la création et mis à jour des categories
// #3. Si le nom est vide, écrire : "Le nom ne peut pas être vide"
// #4. Si la description est vide, écrire : "La description ne peut pas être vide"
// #5. En cas d'erreur, renvoyer un objet d'erreur
//    exemple :
// Si seul le nom est vide, renvoyer : body :{description:"effwfewf"}
// {
//   errors: {
//     nom: "Le nom ne peut pas être vide",
//   }
// }

// Si seul la description est vide, renvoyer  : body {nom:"sdffdsf"}
// {
//   errors: {
//     description: "La description ne peut pas être vide",
//   }
// }

// Si les 2 sont vides:
// {
//   errors: {
//     nom: "Le nom ne peut pas être vide",
//     description: "La description ne peut pas être vide",
//   }
// }

// Ne pas envoyer un id.
// L'id est généré à partir d'un nombre aléatoire entre 1 et 999(Math.random)
