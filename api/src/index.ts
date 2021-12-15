import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes/produto.routes";

createConnection().then(async connection => {

    const app = express();
    const cors = require('cors');

    app.use(bodyParser.json());
    app.use(cors());

    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });
    
    app.listen(3000);

    console.log("Typescript server has started on port 3000. Open http://localhost:3000/produtos to see results");

}).then(() => console.log('Banco de dados MSSQL conectado'))
  .catch(error => console.log(error));