import { Component } from '@angular/core';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
 



  pedido:any;
  pedidoselecionado(pedido:number){
    const mesaString = localStorage.getItem('mesaSeleccionada');
    Swal.fire({
      title: "Estas seguro ?",
      text: "Estas seguro de reservar este pedido.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reservar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Reservado!",
          text: "Se ha reservado el pedido",
          icon: "success"
          
        })
        .then(() => {
          window.location.href = ''; 
      });
      }
    });
    localStorage.setItem('pedidoSelecionado', pedido.toString());
    console.log("el pedido selecionado es el " + pedido + "de la mesa " + mesaString)
    
  }


}
