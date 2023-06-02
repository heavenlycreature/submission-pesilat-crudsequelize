const db = require('../model')
const Bio = db.bio;
const Op = db.Sequelize.Op;

//create data
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
    //show bio
    Bio.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: 'Error tidak dapat menampilkan data'
            })
        })
}
//deleting the bio
exports.deleting = (req, res) => {
    if (!db) {
        res.status(400).send({
            message: 'Data kosong!'
        });
        return;
    }
    //deleting bio
    Bio.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(
            res.send({
                message: `Sukses menghapus data dengan id = ${req.params.id}!`
            })
        )
        .catch(err => {
            res.status(500).send({
                message: 'Error tidak dapat menghapus data'
            })
        })
}
//update the data
exports.update = (req, res) => {
    if (!req.body.nama) {
        res.status(400).send({
            message: 'nama tidak boleh kosong!'
        })
    }
    if (!req.body.tempatLahir) {
        res.status(400).send({
            message: 'tempatLahir tidak boleh kosong!'
        })
    }
    if (!req.body.tanggalLahir) {
        res.status(400).send({
            message: 'tanggalLahir tidak boleh kosong!'
        })
    }
    if (!req.body.alamat) {
        res.status(400).send({
            message: 'alamat tidak boleh kosong!'
        })
    }
    Bio.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        data.nama = req.body.nama;
        data.tempatLahir = req.body.tempatLahir;
        data.tanggalLahir = req.body.tanggalLahir;
        data.alamat = req.body.alamat;
        data.save();
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: `Tidak dapat mengupdate data ${err.message}`
            })
        })
}