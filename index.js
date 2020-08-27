const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log(`localhost:${PORT}`));

app.get("/", (req, res) => res.send("hello from get"));
app.get("/profiles", (req, res) => res.send("you r on my profile"));