import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-de-usuario',
  templateUrl: './perfil-de-usuario.page.html',
  styleUrls: ['./perfil-de-usuario.page.scss'],
})
export class PerfilDeUsuarioPage implements OnInit {

  private url_perfiles: string = 'https://dummyjson.com/auth/login ';


  constructor() { }

  ngOnInit() {
  }

}
