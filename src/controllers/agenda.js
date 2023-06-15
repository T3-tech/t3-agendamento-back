const agenda = require("../models/agenda");
const rota = "/agenda";

module.exports = (app) => {

    app.post(rota,(req,res)=>{
        agenda.adiciona(req.body,res);
    })
    app.get(rota,(req,res)=>{
        agenda.lista(res);
    })
    app.get(`${rota}/:id`,(req,res)=>{
        const id = parseInt(req.params.id);
        agenda.buscaPorId(id,res);
    })
    app.put(`${rota}/:id`,(req,res)=>{
        const id = parseInt(req.params.id);
        agenda.altera(id,req.body,res);
    })
    app.delete(`${rota}/:id`,(req,res)=>{
        const id = parseInt(req.params.id);
        agenda.deleta(id,res);
    })
}