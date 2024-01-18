var express = require('express');
const { getSerials, createSerial, getSerialById, updateSerial, deleteSerial } = require('../controllers/serialsController');
var router = express.Router();

router.get('/', getSerials);
router.post('/', createSerial);
router.get('/:id', getSerialById);
router.put('/:id', updateSerial);
router.delete('/:id', deleteSerial);

module.exports = router;
