import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Todo = {
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centred-page flex flex-col gap-4 items-center">
      
      <input
        #todoInput
        type="text"
        class="input input-bordered"
        placeholder="Add new todo"
        (keydown.enter)="addTodo(todoInput)"
      >
      
      <div 
        *ngFor="let todo of todos"
        [ngClass]="{ 'line-through': todo.completed }"
      >
        <input
          type="checkbox"
          class="checkbox"
          [checked]="todo.completed"
          (change)="toggleTodo(todo.id)"
        >
        {{ todo.title }}
        <button class="btn" (click)="removeTodo(todo.id)">remove</button>
      </div>

      <button class="btn" (click)="saveAll()">Save</button>
    </div>    
  `,
  styles: [`
    
  `],
})
export class AppComponent {

  todos: Todo[] = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ]

  addTodo(todoInput: HTMLInputElement) {
    const newTodo: Todo = {
      id: Date.now(),
      title: todoInput.value,
      completed: false
    }

    this.todos.push(newTodo);
    todoInput.value = '';
  }

  removeTodo(id: number) {
    const index = this.todos.findIndex( t => t.id === id);
    this.todos.splice(index, 1);
  }

  toggleTodo(id: number) {
    const index = this.todos.findIndex( t => t.id === id);
    this.todos[index].completed = !this.todos[index].completed
  }

  saveAll() {
    console.log('TODOS: ', this.todos);
  }
}
