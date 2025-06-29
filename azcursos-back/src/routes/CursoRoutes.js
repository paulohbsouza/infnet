const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');
const authMiddleware = require("../middlewares/authMiddleware");
const InscricaoController = require("../controllers/InscricaoController");

router.use(authMiddleware);

router.get('/', CursoController.listarCursos);
router.get('/inscritos/:idUsuario', CursoController.listarCursosInscritos)

router.post('/:idCurso', InscricaoController.inscrever);
router.patch('/:idCurso', InscricaoController.cancelar);

module.exports = router;