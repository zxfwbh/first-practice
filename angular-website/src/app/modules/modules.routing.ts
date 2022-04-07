import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ModulesComponent }
];

export const ModulesRoutes = RouterModule.forChild(routes);
