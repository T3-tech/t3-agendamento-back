const profissional = require("../models/profissional");
const rota = "/profissional";

module.exports = (app) =>{

    app.get(rota,(req,res)=>{
        profissional.lista(res);
    })
    app.get(`${rota}/:id`,(req,res)=>{
        const id = parseInt(req.params.id);
        profissional.buscaPorId(id,res);
    })
    app.post(rota,(req,res)=>{
        profissional.adiciona(req.body,res);
    })
    app.put(`${rota}/:id`,(req,res)=>{
        const id = parseInt(req.params.id);
        const valores = req.body;
        profissional.altera(id,valores,res)
    })
    app.delete(`${rota}/:id`,(req,res)=>{
        const id = parseInt(req.params.id);
        profissional.deleta(id,res)
    })
};