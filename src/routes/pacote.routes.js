const express = require('express');
const router = express.Router();
const PacoteController = require('../controllers/PacoteController');

router.post('/', PacoteController.criar);
router.get('/', PacoteController.listar);
router.put('/:id', PacoteController.atualizar);
router.delete('/:id', PacoteController.deletar);

module.exports = router;
