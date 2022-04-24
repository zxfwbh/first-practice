import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component.component';

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ComponentComponent },
];

export const ComponentRoutes = RouterModule.forChild(routes);
