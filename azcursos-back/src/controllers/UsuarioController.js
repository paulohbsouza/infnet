const UsuarioService = require('../services/UsuarioService')

const UsuarioController = {
    async cadastrar(req, res) {
        try {
            const resultado = await UsuarioService.cadastrar(req.body);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    async listar (req, res) {
        try {
            const usuarios = await UsuarioService.listar();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({mensagem: error.message});
        }
    },

    async login (req, res) {
        try {
            const token = await  UsuarioService.login(req.body);
            res.status(200).json(token);
        } catch (error) {
            res.status(500).json({mensagem: error.message});
        }
    }
}

module.exports = UsuarioController;