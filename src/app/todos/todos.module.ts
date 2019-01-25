import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosFiltersComponent } from './filters/todos-filters';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,TodosRoutingModule],
  exports: [],
  declarations: [TodoComponent, TodosComponent, TodosPageComponent,TodosFiltersComponent]
})
export class TodosModule {}
