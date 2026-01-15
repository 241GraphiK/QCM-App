const express = require("express");
const mongoose = require("mongoose");
const Result = require("./models/Result");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Sert les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Connexion MongoDB
mongoose.connect("mongodb://localhost:27017/qcm");

// Route POST pour enregistrer les résultats
app.post("/api/results", async (req, res) => {
  const { username, answers, score } = req.body;
  const result = new Result({ username, answers, score });
  await result.save();
  res.json({ message: "Résultat enregistré !" });
});

// Démarrage du serveur
app.listen(3000, () => console.log("Serveur en écoute sur port 3000"));