import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { TodosStore } from '../store/todos.store';
import { VISIBILITY_FILTER } from '../filters/filter.model';
import { Todo, createTodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.updateRoot({
      ui: {
        filter
      }
    });
  }

  
  complete({ id, completed }: Todo) {
    //call backend and do below on success
    this.todosStore.update(id, {
      completed
    });
  }


  add(title: string) {
    const todo = createTodo({ title });
    //Call backend and do below on success
    this.todosStore.add(todo);
  }


  delete(id: ID) {
    this.todosStore.remove(id);
  }

}
