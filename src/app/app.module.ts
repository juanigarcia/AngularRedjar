import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent
  ],
  imports: [
    BrowserModule, 
    CommonsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
