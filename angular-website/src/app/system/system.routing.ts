import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: SystemComponent }
];

export const SystemRoutes = RouterModule.forChild(routes);
