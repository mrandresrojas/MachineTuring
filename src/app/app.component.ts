import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MachineTuring';
  value = '';
  programa_turing = '0 _ 1 r 1,1 _ 1 r 2,2 _ 1 r 3';
  estados_acept = '3';

  estados_aceptacion = this.estados_acept.split(',', 100);
  cinta = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
  sentencias: Array<string> = this.programa_turing.split(',', 100);

  mostrar() {}
  MachineTuring() {
    let states: Array<string>;
    let state: string = '';
    for (var i = 0; i < this.sentencias.length; i++) {
      states = this.sentencias[i].split(' ', 100);

      for (var j = 0; j < 1; j++) {
        state = state + states[j];
      }
    }
    var statearray = state.split('', 100);
    console.log(statearray);

    for (var i = 0; i < statearray.length; i++) {
      
    }
  }
}
