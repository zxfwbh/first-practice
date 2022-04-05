import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutes } from './application.routing';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutes
  ],
  declarations: [ApplicationComponent]
})
export class ApplicationModule { }
