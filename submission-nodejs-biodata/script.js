const http = require('http');

const port = 8080;
const name = 'Olifian Lepin';
const tl = "Kab. Bogor";
const ttl = "5 Juli 2003";
const alamat = "Kp. leuwinutug Rt.02/Rw.06, Citereup";
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<p>Nama : ${name}</p>`);
    res.write(`<p>Tempat Lahir : ${tl}</p>`);
    res.write(`<p>Tanggal Lahir : ${ttl}</p>`);
    res.write(`<p>Alamat : ${alamat}</p>`);
    res.end;
}).listen(port, () => {
    console.log(`It works! Server berjalan pada localhost : ${port}...`)
})