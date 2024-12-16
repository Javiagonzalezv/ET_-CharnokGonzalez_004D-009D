import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { autorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate :[autorizadoGuard]
  },
  {
    path: 'class-management',
    loadChildren: () => import('./class-management/class-management.module').then( m => m.ClassManagementPageModule),
    canActivate :[autorizadoGuard]
  },
  {
    path: 'attendance-list',
    loadChildren: () => import('./attendance-list/attendance-list.module').then( m => m.AttendanceListPageModule),
    canActivate :[autorizadoGuard]
  },
  {
    path: 'absence-justification',
    loadChildren: () => import('./absence-justification/absence-justification.module').then( m => m.AbsenceJustificationPageModule),
    canActivate :[autorizadoGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
