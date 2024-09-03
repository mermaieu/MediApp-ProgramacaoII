```javascript
import express from "express";
```
- **Importa o módulo `express`**: Aqui você está importando a biblioteca `express`, que é um framework para Node.js utilizado para criar servidores web e APIs de forma simplificada.

```javascript
import bodyParser from "body-parser";
```
- **Importa o módulo `body-parser`**: O `body-parser` é um middleware para analisar o corpo das requisições HTTP. Embora o Express já inclua algumas funcionalidades similares, `body-parser` oferece algumas opções adicionais para lidar com o corpo das requisições.

```javascript
import router from "./routes/router.js";
```
- **Importa um roteador personalizado**: Aqui você está importando um módulo chamado `router` que está localizado no caminho `./routes/router.js`. Esse módulo deve exportar um roteador do Express que define várias rotas para o seu aplicativo.

```javascript
const app = express();  
```
- **Cria uma instância do aplicativo Express**: Aqui você está criando uma nova instância do aplicativo Express. Esta instância é o coração do seu servidor e é onde você configura middlewares, rotas e outras funcionalidades.

```javascript
const {json, urlencoded} = bodyParser;
```
- **Desestruturação das funções `json` e `urlencoded` do `body-parser`**: `body-parser` exporta algumas funções para tratar diferentes tipos de corpos de requisições. `json` é usado para analisar corpos de requisições JSON, e `urlencoded` é usado para analisar corpos de requisições codificados em URL (tipicamente de formulários HTML).

```javascript
app.use(json());
```
- **Adiciona o middleware `json`**: Aqui, você está dizendo ao Express para usar o middleware `json` do `body-parser`. Isso significa que o Express agora será capaz de processar requisições com corpos no formato JSON e convertê-los em objetos JavaScript acessíveis via `req.body`.

```javascript
app.use(urlencoded({extended: true}));
```
- **Adiciona o middleware `urlencoded`**: Aqui, você está dizendo ao Express para usar o middleware `urlencoded` do `body-parser`. O `extended: true` permite a análise de dados de formulários mais complexos, que podem incluir objetos aninhados e arrays.

```javascript
app.listen(3000, function() {
    console.log("Listening to port 3000"); 
});
```
- **Inicia o servidor na porta 3000**: Esta linha faz com que o servidor comece a escutar na porta 3000. Quando o servidor está rodando, a função de callback é executada e imprime "Listening to port 3000" no console, indicando que o servidor está ativo e aceitando conexões.

```javascript
app.use("/", router);
```
- **Configura o roteador para o caminho raiz**: Aqui, você está dizendo ao Express para usar o roteador importado no caminho raiz (`/`). Isso significa que qualquer requisição feita para o seu servidor será tratada pelo roteador importado. O roteador gerenciará as rotas e a lógica associada a essas rotas.

Em resumo, este código configura um servidor Express básico que usa o `body-parser` para analisar corpos de requisições e um roteador externo para definir rotas. O servidor está configurado para escutar na porta 3000.