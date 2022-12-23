import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from '../app/components/account/account.component';
import { BalanceComponent } from '../app/components/balance/balance.component';
import { NoticesComponent } from './components/notices/notices.component';
import { LoansComponent } from './components/loans/loans.component';
import { CardsComponent } from './components/cards/cards.component';
import { AuthKeyCloakGuard } from './routeguards/auth.routeguard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'notices', component: NoticesComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthKeyCloakGuard], data: { }},
  { path: 'myAccount', component: AccountComponent, canActivate: [AuthKeyCloakGuard], data: { roles: ['USER'] }},
  { path: 'myBalance', component: BalanceComponent, canActivate: [AuthKeyCloakGuard], data: { roles: ['ADMIN', 'USER'] }},
  { path: 'myLoans', component: LoansComponent, canActivate: [AuthKeyCloakGuard], data: { }},
  { path: 'myCards', component: CardsComponent, canActivate: [AuthKeyCloakGuard], data: { roles: ['USER'] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
