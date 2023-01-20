import { NgModule } from '@angular/core';
import { GuardsCheckEnd, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar',
    pathMatch: 'full'
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'perfil',
    canActivate:[GuardsCheckEnd],
    loadChildren: () => import('./perfil-de-usuario/perfil-de-usuario.module').then( m => m.PerfilDeUsuarioPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, {
       preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
