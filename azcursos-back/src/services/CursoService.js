const Curso = require("../models/Curso");

const CursoService = {
    async listarCursos() {
        const cursos = await Curso.findAll();

        return cursos.map((curso) => ({
            id: curso.id,
            nome: curso.nome,
            descricao: curso.descricao,
            capa: curso.capa,
            inscricoes: 0, // TODO implementar contagem de inscrições
            inicio: new Date(curso.inicio).toLocaleDateString("pt-br"),
            inscrito: false // Implementar
        }));
    }
}

module.exports = CursoService;