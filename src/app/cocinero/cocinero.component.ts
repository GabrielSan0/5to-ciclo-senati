import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrl: './cocinero.component.css'
})
export class CocineroComponent implements OnInit{
 
  ngOnInit(): void {

    const mesaString = localStorage.getItem('mesaSeleccionada');
    const pedido = localStorage.getItem('pedidoSelecionado');
this.pedido=pedido;
this.mesa=mesaString;
  }
 
  pedido:any;
  mesa:any;
  
  concluirpedido(){
    
    Swal.fire({
      title: "Estas seguro ?",
      text: "Estas seguro de concluir este pedido.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Concluir"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Concluido!",
          text: "El pedido se ha concluido",
          icon: "success"
          
        })
        .then(() => {
          
      });
      }
    });

  }
}
