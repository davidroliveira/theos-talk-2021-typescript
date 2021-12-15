import {ProdutoController} from "../controllers/produto.controller";

export const Routes = [{
    method: "get",
    route: "/produtos",
    controller: ProdutoController,
    action: "all"
}, {
    method: "get",
    route: "/produtos/:id",
    controller: ProdutoController,
    action: "one"
}, {
    method: "post",
    route: "/produtos",
    controller: ProdutoController,
    action: "save"
}, {
    method: "put",
    route: "/produtos",
    controller: ProdutoController,
    action: "update"
}, {
    method: "delete",
    route: "/produtos/:id",
    controller: ProdutoController,
    action: "remove"
}];