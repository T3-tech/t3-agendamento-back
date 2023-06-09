const conexao = require("../infra/connection");

class Profissional {
    adiciona(profissional, res) {
        const sql = "INSERT INTO profissional SET ?";
        conexao.query(sql, profissional, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(profissional);
            }
        });
    }
    lista(res) {
        const sql =
            "SELECT P.id, P.nome, S.id as id_servico, S.nome as servico from profissional P INNER JOIN servico S ON P. id_servico = S.id;";
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT P.id, P.nome, S.id as id_servico, S.nome as servico from profissional P INNER JOIN servico S ON P. id_servico = S.id WHERE P.id=${id}`;
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json();
            } else {
                res.status(200).json(resultado);
            }
        });
    }
    altera(id, valores, res) {
        const sql = "UPDATE profissional SET ? WHERE id=?";
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                this.buscaPorId(id, res);
            }
        });
    }
    deleta(id, res) {
        const sql = "DELETE FROM profissional WHERE id=?";
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({
                    message: "Profissional deletado com sucesso",
                });
            }
        });
    }
}

module.exports = new Profissional();
