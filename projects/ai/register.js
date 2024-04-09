const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();
const PORT = 3005;

app.use(express.static('public'));

// Middleware om JSON-body's te parseren
app.use(bodyParser.json());

// Endpoint voor het verwerken van registratiegegevens
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Simpele validatie
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Vul alle vereiste velden in.' });
  }

  // Simulatie van opslag in een database
  const user = {
    username,
    email,
    password
  };

  // Lees de bestaande gebruikersgegevens uit de database
  let users = [];
  try {
    const usersData = fs.readFileSync('users.json');
    users = JSON.parse(usersData);
  } catch (error) {
    console.error('Er is een fout opgetreden bij het lezen van gebruikersgegevens:', error);
  }

  // Voeg de nieuwe gebruiker toe aan de database
  users.push(user);

  // Schrijf de bijgewerkte gebruikersgegevens terug naar de database
  try {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
    console.log('Gebruiker geregistreerd:', user);
    res.status(200).json({ message: 'Registratie succesvol!' });
  } catch (error) {
    console.error('Er is een fout opgetreden bij het schrijven van gebruikersgegevens:', error);
    res.status(500).json({ message: 'Er is een interne serverfout opgetreden.' });
  }
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server is gestart op http://localhost:${PORT}`);
});
