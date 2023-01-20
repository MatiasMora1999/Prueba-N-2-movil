import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

private url_login: string = 'https://dummyjson.com/auth/login';

  constructor(
    private Cliente: HttpClient
  ) { }

  irAPerfil(){
  }

  ngOnInit() {
  }

}
