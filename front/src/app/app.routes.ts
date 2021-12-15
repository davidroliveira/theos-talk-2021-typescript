import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'feature-data-binding', component: DataBindingComponent},
  {path: 'produtos', component: ListaProdutoComponent},
  {path: 'produtos-detalhe/:id', component: ListaProdutoComponent /*To-do Criar componente de detalhe com base no selecionado no ListaProdutoComponent*/},
  {path: 'carrinho/:id', component: ListaProdutoComponent /*To-do Criar componente de comprar com base no selecionado no ListaProdutoComponent*/}
];