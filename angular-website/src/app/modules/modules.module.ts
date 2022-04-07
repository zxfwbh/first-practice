import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { ModulesRoutes } from './modules.routing';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutes
  ],
  declarations: [ModulesComponent]
})
export class ModulesModule { }
