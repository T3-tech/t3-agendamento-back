const servico = require("../models/servico");
const rota = "/servico";

module.exports = (app) => {
    app.get(rota, (req, res) => {
        servico.lista(res);
    });

    app.get(`${rota}/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        servico.buscaPorId(id, res);
    });

    app.post(rota, (req, res) => {
        servico.adiciona(req.body, res);
    });

    app.put(`${rota}/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        servico.altera(id, valores, res);
    });

    app.delete(`${rota}/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        servico.deleta(id, res);
    });
};
