import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  { path: 'manage', component: ApplicationComponent},
];

export const ApplicationRoutes = RouterModule.forChild(routes);
