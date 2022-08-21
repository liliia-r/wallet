import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';

import { HomePageRoutingModule } from './home-page-routing.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HomePageComponent, NavigationComponent],
  imports: [CommonModule, HomePageRoutingModule, CoreModule],
  exports: [HomePageComponent],
})
export class HomePageModule { }
