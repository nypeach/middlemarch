const express = require('express');
const router = express.Router();
const hello = require('./hello.js');

router.get('/hello', hello.hello);

module.exports = router;