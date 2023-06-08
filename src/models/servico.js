const conexao = require("../infra/connection");

class Servico {
    adiciona(servico, res) {
        const sql = "INSERT INTO servico SET ?";

        conexao.query(sql, servico, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(servico);
            }
        });
    }

    lista(res) {
        const sql = "SELECT * FROM servico";

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM servico WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const servico = resultados[0];
            if (resultados.length === 0) {
                res.status(404).json({ message: "Serviço não encontrado" });
            } else if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(servico);
            }
        });
    }

    altera(id, valores, res) {
        const sql = "UPDATE servico SET ? WHERE id=?";

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ ...valores, id });
            }
        });
    }

    deleta(id, res) {
        const sql = "DELETE FROM servico WHERE id=?";

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = new Servico();
