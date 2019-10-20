import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { LoginComponent } from './pages/login/login.component';
import { FormuserComponent } from './pages/formuser/formuser.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: CarComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: FormuserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
