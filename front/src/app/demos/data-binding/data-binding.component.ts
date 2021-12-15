import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styles: [],
})
export class DataBindingComponent implements OnInit {
  public contadorClique: number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }
/* Simulado efeito Two-way Binding
  keyup(event: any) {
    this.nome = event.target.value;
   }
*/
  constructor() { }

  ngOnInit(): void { }
}
