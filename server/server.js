const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get('/api/whoami', (req, res) => {
    var ipaddress = req.ip;

    var language = req.header['accept-language'];
    var software = req.header['user-agent'];

    res.send({ ipaddress, language, software });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});