import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [

  {path: 'login',component: LoginComponent},
  {path: 'main-page',component: MainPageComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'}
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())]
}
