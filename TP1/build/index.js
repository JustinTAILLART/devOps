"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
const http_1 = require("http");
const x = process.env.PING_LISTEN_PORT; //
const server = (0, http_1.createServer)(function (req, res) {
    var route = req.url;
    try {
        if (req.method === "GET") {
            if (route == "/ping") {
                res.setHeader("Content-Type", "application/json");
                res.write(JSON.stringify(req.headers));
                res.end();
            }
            else {
                res.statusCode = 404;
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
server.listen(8080);
const address = server.address();
console.log(address);
