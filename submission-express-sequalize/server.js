const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080
const corsOptions = {
    origin: 'localhost:8080'
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, () => console.log(`Server berjalan pada ${port}`));

const db = require('./model');
db.sequelize.sync()
    .then(() => {
        console.log('database tersinkronasi')
    })
    .catch((err) => {
        console.log(`database belum tersinkronasi : ${err.message}`)
    });

//Routes method
const bio = require('./controller/bio-controller')
// app.get('/', (req, res) => {
//     bio.show(req, res);
// })
app.post('/', (req, res) => {
    bio.create(req, res);
})
module.exports = db;

