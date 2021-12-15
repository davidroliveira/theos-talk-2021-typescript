import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoservice: ProdutoService) { }

  public produtos: Produto[] = [];

  ngOnInit(): void {
    
    this.produtoservice.obterProdutos().subscribe(

      listaProdutos =>{
        this.produtos = listaProdutos;
        console.log(listaProdutos);
      },
      erro => {
        console.log(erro);
      }      

    )
  }
}
