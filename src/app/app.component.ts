import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MachineTuring';
  value = '';
  programa_turing="0 _ 1 r 1,1 _ 1 r 2,2 _ 1 r 3";
  estados_acept="3";
  test = this.programa_turing.split(",",100);
  estados_aceptacion=this.estados_acept.split(",",100)
  cinta=["_","_","_","_","_","_","_","_","_"];
  sentencias=this.programa_turing.split(",",100)

mostrar(){
console.log(this.test)


}
MachineTuring(){
  for (var i = 0; i < this.sentencias.length; i++){
    var states[] = (this.sentencias[i]);

  }
}


}
