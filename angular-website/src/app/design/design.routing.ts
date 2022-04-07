import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design.component';

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: DesignComponent }
];

export const DesignRoutes = RouterModule.forChild(routes);
