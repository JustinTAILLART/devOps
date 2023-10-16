"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
ce sont des modules de la librairie HTTP:
  IncomingMessage = pour la requête
  ServerReponse = pour la reponse
  createServer = pour le serveur
*/
const http_1 = require("http");
/*
permet de récupérer une variable d'environnoment(port de connexion) avec le nom PING_LISTEN_PORT
et on la set dans le terminale avec "set PING_LISTEN_PORT = 8080"
*/
const x = process.env.PING_LISTEN_PORT;
/*création du serveur et ce qu'il se passe dessus*/
const server = (0, http_1.createServer)(function (req, res) {
    var route = req.url;
    try { // un try-catch sert à faire un test et s'il y a un problème il exécute le catch
        if (req.method === "GET") { //permet de verifier si la requête est de type GET
            if (route === "/ping") { //vérifie si la route de la requête est un /ping
                res.setHeader("Content-Type", "application/json"); //permet d'indiquer que le contenu de la réponse va être en json
                res.write(JSON.stringify(req.headers)); //convertit les headers de notre requête en json et l'envoie
                res.end(); //fin de la réponse
            }
            else {
                res.statusCode = 404; //si nos condition sont pas rempli on renvoie une erreur 404
                res.end();
            }
        }
    }
    catch (error) {
        res.statusCode = 500;
        console.log(error);
        res.end();
    }
});
server.listen(x !== null && x !== void 0 ? x : 8080);
const address = server.address();
console.log(address);
