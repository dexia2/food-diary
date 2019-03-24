'use strict';

// Router
const router = require('express').Router();
const foods = require('./index');

// Tasks
router.get('/', foods.findAll);
router.post('/', foods.buggyRoute);

// Export the router
module.exports = router;