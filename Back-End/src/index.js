const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const routes = require('./routes');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

dotenv.config()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true,
}));

db.sequelize.sync().then(() => {
    console.log('thanh cong')
    // app.listen(port, () => {
    //     console.log(`Example app listening at http://localhost:${port}`)
    // });
})
