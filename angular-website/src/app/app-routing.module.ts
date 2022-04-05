import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'app', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)},
  {path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule)},
  {path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},
  {path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
