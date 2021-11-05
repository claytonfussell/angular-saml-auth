import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoComponent } from './sso/sso.component';
import { LoginComponent } from './login/login.component';
import { SiteComponent } from './site/site.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sso',
    component: SsoComponent,
  },
  {
    path: 'site',
    component: SiteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
