const app = require("./config/customExpress");
const pg = require("./infra/connection");
const rotaServico = require("./controllers/servico");

pg.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        rotaServico(app);

        console.log("Database connected");
        app.listen(8000, () => {
            console.log("Server running on port 8000");
        });
    }
});
