const express = require('express');
const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Server berjalan pada localhost : ${port}`);
})
app.get('/', (req, res) => {
    res.send('Hello world!');
})
app.get('/biodata', (req, res) => {
    const name = req.query.nama;
    const tl = req.query.tempatLahir;
    const ttl = req.query.tanggalLahir;
    const address = req.query.alamat;

    res.json({
        'Nama': name,
        'Tempat Lahir': tl,
        'Tanggal Lahir': ttl,
        'Alamat': address
    })

})
app.post('/biodata', (req, res) => {
    const name = req.query.nama;
    const tl = req.query.tempatLahir;
    const ttl = req.query.tanggalLahir;
    const address = req.query.alamat;

    res.json({
        'Nama': name,
        'Tempat Lahir': tl,
        'Tanggal Lahir': ttl,
        'Alamat': address
    })
})

