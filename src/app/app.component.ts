import {Component} from '@angular/core';
import {TodoInterface} from "./todo/interfaces/todo.interface";
import {TodoService} from "./todo/services/todo.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TodoInterface-app';

    constructor(private todoService: TodoService) {
    }


    get todos(): TodoInterface[] {
        return this.todoService.allTodos;
    }

    addTodo(todo: string): void {
        this.todoService.addTodo(todo);
    }

    clearCompleted(): void {
        this.todoService.clearCompleted();
    }

    toggleDone = (todo: TodoInterface) => this.todoService.toggleDone(todo);

}
