import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular-feb12';
  nombreDeBoton = "haz click";
  valorDeInput = "Hola!";

  cambiarTitulo():void{
    this.title="Otro titulo";
    this.nombreDeBoton="Click Realizado";
    this.valorDeInput = "Nuevo Valor";
  }

  imprimirEnConsola():void{
    console.log(this.valorDeInput);
  }

}
