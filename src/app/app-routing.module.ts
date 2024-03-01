import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeseroComponent } from './mesero/mesero.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CocineroComponent } from './cocinero/cocinero.component';

const routes: Routes = [
  { path: '', component: MeseroComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'cocinero', component: CocineroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
