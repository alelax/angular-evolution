import { AfterViewInit, Component, computed, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
      <h1 class="page-title">Todo List</h1>
          
        <div>
            {{ totalCompleted() }} completed | {{ todoToComplete() }} todos
        </div>
        <input 
          type="text"
          class="input input-bordered"
          #inputRef
          (keydown.enter)="addTodo(inputRef)"
          placeholder="add todo"
        >

        <ul>
          @for (todo of todos(); track todo.id) {
            <li class="flex justify-between">
              <div class="flex gap-3">
                <input 
                  type="checkbox" [checked]="todo.completed"
                  (change)="toggleTodo(todo)"
                >
                <span [ngClass]="{'line-through': todo.completed}">
                    {{todo.title}}
                </span>
              </div>
              <button (click)="removeTodo(todo)">❌</button>
            </li>
          }
          </ul>
          
          <pre>{{todos() | json}}</pre>
    </div>
  `,
  styles: [``],
})
export class AppComponent {

  todos = signal<Todo[]>([
    { id: 1, title: 'Todo 1', completed: true },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: true },
  ])

  totalCompleted = computed(() => this.todos().filter(t => t.completed).length);
  todoToComplete = computed(() => this.todos().filter(t => !t.completed).length);

  addTodo(input: HTMLInputElement) {

    const newTodo: Todo = {
      id: Date.now(),
      title: input.value,
      completed: false
    }

    this.todos.update(todos => [...todos, newTodo]);
    input.value = '';
  }

  removeTodo(todoToRemove: Todo) {
    this.todos.update(todos => todos.filter(t => t.id !== todoToRemove.id))
  }

  toggleTodo(todoToToggle: Todo) {
    this.todos.update(todos => todos.map(t => t.id === todoToToggle.id ? {...t, completed: !t.completed} : t))
  }


}


