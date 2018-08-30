const express = require('express');

const app = express();
const port = process.ENV || 3000;

app.get('/api/whoami', (req, res) => {
    var ip = req.ip;
    console.log(req.headers['accept-language']);
    

    res.send({ip});
});





app.listen(port, () => {
    console.log(`listening on port ${port}`);
});