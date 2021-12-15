import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Produto } from "../entities/produto.entity";

export class ProdutoController {

    private ProdutoRepository = getRepository(Produto);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ProdutoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.ProdutoRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.ProdutoRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        this.ProdutoRepository.update(request.body.id, request.body);
        return this.ProdutoRepository.findOne(request.body.id);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let ProdutoToRemove = await this.ProdutoRepository.findOne(request.params.id);
        this.ProdutoRepository.remove(ProdutoToRemove);
        return ProdutoToRemove;
    }

}