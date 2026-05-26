const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>CodeAlpha DevOps CI/CD Project</h1>
    <p>Welcome to the CodeAlpha DevOps CI/CD project! This project demonstrates a simple CI/CD pipeline using GitHub Actions.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
