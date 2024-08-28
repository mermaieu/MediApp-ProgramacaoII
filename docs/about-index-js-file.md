import express from "express";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();  
// Cria uma nova instância de uma aplicação Express.

const {json, urlencoded} = bodyParser;
// Para trabalhar com a parte de requisição e resposta.
// Desestrutura os métodos json e urlencoded do módulo body-parser.

app.use(json());
// Configura o body-parser para analisar dados JSON nas requisições.

app.use(urlencoded({extended: true}));
// Configura o body-parser para analisar dados URL-encoded nas requisições. 
// O parâmetro extended: true indica que o módulo deve suportar arrays 
// e objetos aninhados.

app.listen(3000, function() {
    console.log("Listening to port 3000");
    // Mensagem de console indicando que o servidor está ouvindo
    // na porta 3000.
    
});
// app.listen(3000, ...) inicia o servidor Express na porta 3000. 
// A função de callback dentro dos parênteses é executada quando 
// o servidor está ouvindo na porta especificada.

app.use("/", router);
// Montagem do módulo router na raiz da aplicação.
// Isso significa que todas as requisições HTTP que chegam na URL "/" 
// serão encaminhadas para as rotas definidas no módulo router.

