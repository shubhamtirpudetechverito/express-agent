require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('express-agent'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`express-agent listening on ${port}`));