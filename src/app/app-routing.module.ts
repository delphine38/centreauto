import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/Accueil.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
