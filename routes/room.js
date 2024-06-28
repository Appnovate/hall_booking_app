var express = require('express');
const { getRoom, createRoom } = require('../controllers/room');
var router = express.Router()

router.get('/rooms',getRoom);

router.post('/rooms',createRoom);

module.exports=router;