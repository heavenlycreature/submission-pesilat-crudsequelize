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
exports.show = (req, res) => {
    if (!db) {
        res.status(400).send({
            message: 'Data kosong!'
        });
        return;
    }
    //getting biodata
    const bio = {
        nama: req.params.nama,
        tempatLahir: req.params.tempatLahir,
        tanggalLahir: req.params.tanggalLahir,
        alamat: req.params.alamat,
    }
    //show bio
    Bio.findAll(bio)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: 'Error tidak dapat menampilkan data'
            })
        })
}
//deleting the book
exports.deleting = (req, res) => {
    if (!db) {
        res.status(400).send({
            message: 'Data kosong!'
        });
        return;
    }
    //getting biodata
    const bio = {
        where: {
            id: req.params.id
        }
    }
    //show bio
    Bio.destroy(bio)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: 'Error tidak dapat menghapus data'
            })
        })
}