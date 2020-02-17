import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { Usuario } from './models/user.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'curso-angular-feb12';
  nombreDeBoton = "haz click";
  valorDeInput = "Hola!";
  list: Usuario[];

  constructor (private phService:PlaceholderService) {}
  
  /*async ngOnInit() {
    let usuarios = await this.phService.getUsers()
    console.log(usuarios[0].email)
  }*/

  ngOnInit() {
    this.phService.getUsersAlt().subscribe(valor=>this.mostrarUsuarios(valor));
    console.log("hola");
  }

  cambiarTitulo():void{
    this.title="Otro titulo";
    this.nombreDeBoton="Click Realizado";
    this.valorDeInput = "Nuevo Valor";
  }

  imprimirEnConsola():void{
    console.log(this.valorDeInput);
  }

  mostrarUsuarios(e: Usuario[]) {
    this.list=e
  }

}
