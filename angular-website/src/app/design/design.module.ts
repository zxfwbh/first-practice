import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutes } from './design.routing';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutes
  ],
  declarations: [DesignComponent]
})
export class DesignModule { }
