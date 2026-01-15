const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Result = require("./models/Result");

const app = express();
app.use(express.json());
app.use(cors());

// Connexion MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB Atlas"))
  .catch(err => console.error("❌ Erreur MongoDB:", err));

// Route POST
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

// Route GET
app.get("/api/results", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Démarrage serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur port ${PORT}`));
