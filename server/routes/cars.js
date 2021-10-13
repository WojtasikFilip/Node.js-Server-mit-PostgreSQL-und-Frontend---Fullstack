const express = require('express');
const { getCars, changeStatusCar, deleteCar, addCar, getCar } = require('../controllers/cars');

const router = express.Router();

router.get('/cars', getCars);
router.get('/cars/:id', getCar);
router.patch('/cars/:id', changeStatusCar);
router.delete('/cars/:id', deleteCar);
router.post('/cars', addCar);

module.exports = router;
