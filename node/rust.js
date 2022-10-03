var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const port = 3333;
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
app.listen(port, () => console.log(`server running on port ${port}\nhttp://localhost:${port}/`));
// Auto-open in browser
var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
child_process.exec(start + ` http://localhost:${port}/`);
