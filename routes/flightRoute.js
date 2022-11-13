const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .post('/', controller.createFlight)
    .get('/', controller.getAllFlight)
    .get('/:id', controller.getSingleFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight);

module.exports = router;

