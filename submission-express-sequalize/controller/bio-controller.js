const db = require('../model')
const Bio = db.bio;
const Op = db.Sequelize.Op;

//create table
exports.create = (req, res) => {
    //validate
    if (!req.body.nama) {
        res.status(400).send({
            message: 'Data tidak boleh kosong!'
        });
        return;
    }
    //create bio object
    const bio = {
        nama: req.body.nama,
        tempatLahir: req.body.tempatLahir,
        tanggalLahir: req.body.tanggalLahir,
        alamat: req.body.alamat,
    }
    //saving data
    Bio.create(bio)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: 'Error tidak dapat menambahkan data'
            });
        });
};
//showing the data
const show = (req, res) => {

}
//deleting the book
const deleting = (req, res) => {

}
// module.exports = { create, show, deleting };