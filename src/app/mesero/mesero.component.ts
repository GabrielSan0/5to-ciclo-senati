import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrl: './mesero.component.css'
})
export class MeseroComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private router: Router) { }

  

  selecionarmesa(mesa: number){
    console.log("mesa selecionada " + mesa)
    
    localStorage.setItem('mesaSeleccionada', mesa.toString());
    this.router.navigate(['/pedido']);
  }
}
