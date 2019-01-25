import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './services/todos.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TodosService],
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() core:CoreModule){
    if(core){
      throw new Error('You shall not run!');
    }
  }
}