import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[] = [
    {id:1,nombre:'Pedro',apellido:'Nicolás',email:'pedro.nicolas.perez96@gmail.com ',createAt:'2020-05-03'},
  ];



  constructor() { }
  ngOnInit() {
  }

}
