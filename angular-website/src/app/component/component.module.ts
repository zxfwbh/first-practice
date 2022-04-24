import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { ComponentRoutes } from './component.routing';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutes
  ],
  declarations: [ComponentComponent]
})
export class ComponentModule { }
