const express = require('express');
const router = express.Router();

const argonautesCtrl = require('../controllers/argonautes.controller');

router.get("/", argonautesCtrl.getAllClient);
router.post("/", argonautesCtrl.createClient);

module.exports = router;