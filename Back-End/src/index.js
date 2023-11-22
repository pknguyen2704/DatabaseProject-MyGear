const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 3001

const routes = require('./routes');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const db = require('./models/index.js');

dotenv.config();
app.use(bodyParser.json());

routes(app);

db.sequelize.sync().then(() => {
    console.log("thanh cong");
})
app.listen(3001, (req, res) => {
    console.log("Server listening on " + 3001);
})