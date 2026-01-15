const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Import du modèle
const Result = require("./models/Result");

const app = express();
app.use(express.json());
app.use(cors());

// Sert les fichiers statiques (frontend)
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ Connexion MongoDB avec gestion des erreurs
mongoose.connect("mongodb://localhost:27017/qcm", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("❌ Erreur MongoDB:", err));

// ✅ Route POST pour enregistrer les résultats
app.post("/api/results", async (req, res) => {
  try {
    const { username, answers, score } = req.body;
    const result = new Result({ username, answers, score });
    await result.save();
    res.status(201).json({ message: "Résultat enregistré !" });
  } catch (err) {
    console.error("Erreur sauvegarde:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Route GET pour consulter tous les résultats
app.get("/api/results", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    console.error("Erreur récupération:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Démarrage du serveur
app.listen(3000, () => console.log("🚀 Serveur en écoute sur port 3000"));
