const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import du modèle Result
const Result = require("./models/Result");

const app = express();
app.use(express.json());
app.use(cors());

// Connexion MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connecté à MongoDB Atlas"))
.catch(err => console.error("❌ Erreur MongoDB:", err));

// Route POST : enregistrement d’un score
app.post("/api/results", async (req, res) => {
  try {
    const { username, answers, score } = req.body;
    const result = new Result({ username, answers, score });
    await result.save();
    console.log("✅ Résultat enregistré :", result);
    res.status(201).json({ message: "Résultat enregistré !" });
  } catch (err) {
    console.error("❌ Erreur sauvegarde:", err);
    res.status(500).json({ error: err.message });
  }
});

// Route GET : récupération des scores
app.get("/api/results", async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Démarrage serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur port ${PORT}`));
