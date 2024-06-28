var express = require('express');
const { getBooking, createBooking, listBooking } = require('../controllers/booking');
var router = express.Router()

router.get('/booking',getBooking);

router.get('/booking/list',listBooking);

router.post('/booking',createBooking);

module.exports=router;