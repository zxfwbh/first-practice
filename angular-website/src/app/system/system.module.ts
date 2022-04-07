import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutes } from './system.routing';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutes
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
