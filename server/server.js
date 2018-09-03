const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/api/whoami', (req, res) => {
    var ipaddress = req.ip;
    var language = req.headers["Accept-Language"];
    var software = req.headers['User-Agent'];

    res.send({ ipaddress, language, software });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});