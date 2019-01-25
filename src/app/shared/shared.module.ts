import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[]
    }
  }
 }
