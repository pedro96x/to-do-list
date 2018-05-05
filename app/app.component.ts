import { Component } from '@angular/core';
import { PorHacer } from './por-hacer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  porhacer: PorHacer = new PorHacer();
  items = [];
   porhaceruno: PorHacer = new PorHacer();


//PREGUNTAR POR QUE ESTO NO FUNCIONA
  // porhaceruno={
  //   nombre:'Comprar leche',
  //   listo:'true'
  // }
  // porhaceruno["nombre"]="Comprar leche";
  // porhaceruno["listo"]='false';
  // agregar(porhaceruno); h

  agregar(y = PorHacer){

    this.items.push(y);

    this.porhacer = new PorHacer();
  }

  eliminar(x =PorHacer){

    this.items.forEach((j,index) => {
      if(j===x){
        this.items.splice(index,1);
      }
    });
  }

  hecho(j =PorHacer){
      // this.isTachado = !this.isTachado; 
      j.listo = !j.listo;
  }

}
