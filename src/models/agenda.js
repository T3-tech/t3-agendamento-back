const conexao = require("../infra/connection");

class Agenda {
    adiciona(agenda, res) {
        const sql = "INSERT INTO agenda SET ?";
        conexao.query(sql, agenda, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(agenda);
            }
        });
    }

    lista(res) {
        const sql =
            "SELECT A.id, A.data, S.nome as nome_servico, P.nome as nome_profissional, A.cliente FROM agenda A INNER JOIN servico S ON A.id_servico = S.id INNER JOIN profissional P ON A.id_profissional = P.id";
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT A.id, A.data, S.nome as nome_servico, P.nome as nome_profissional, A.cliente FROM agenda A INNER JOIN servico S ON A.id_servico = S.id INNER JOIN profissional P ON A.id_profissional = P.id where A.id=${id}`;
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    altera(id, valores, res) {
        const sql = "UPDATE agenda SET ? WHERE id=?";
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                this.buscaPorId(id, res);
            }
        });
    }

    deleta(id, res) {
        const sql = "DELETE FROM agenda WHERE id=?";
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({
                    message: "Agenda deletado com sucesso",
                });
            }
        });
    }
}

module.exports = new Agenda();
