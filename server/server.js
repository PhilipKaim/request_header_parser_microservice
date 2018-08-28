const express = require('express');
const os = require('os');

const app = express();
const port = process.ENV || 3000;

console.log(os.networkInterfaces());





app.listen(port, () => {
    console.log(`listening on port ${port}`);
});