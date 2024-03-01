import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeseroComponent } from './mesero/mesero.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CocineroComponent } from './cocinero/cocinero.component';

@NgModule({
  declarations: [
    AppComponent,
    MeseroComponent,
    PedidoComponent,
    CocineroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
