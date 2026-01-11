const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'portfolio-html')));

// Rediriger toutes les requêtes non gérées vers index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio-html', 'index.html'));
});

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});