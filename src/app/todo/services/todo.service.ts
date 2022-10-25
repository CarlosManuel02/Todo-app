import {Injectable} from "@angular/core";
import {TodoInterface} from "../interfaces/todo.interface";


@Injectable()
export class TodoService {

    filter: 'all' | 'active' | 'done' = 'all';

    constructor() {
        this._allTodos = JSON.parse(localStorage.getItem('todos')!) || [];
    }

    private _allTodos: TodoInterface[] = [];

    get allTodos(): TodoInterface[] {
        if (this.filter === 'all') {
            return [...this._allTodos];
        }
        return this._allTodos.filter((item) => this.filter === 'done' ? item.done : !item.done);
    }

    addTodo(description: string): void {
        if (description == null || description.trim() === '') {
            return;
        }
        if (this.allTodos.find((todo) => todo.description.trim() === description.trim()) || description.length > 70) {
            alert("Text to long or already exists");
            return;
        } else {
            this._allTodos.push({
                description,
                done: false
            });
        }

        console.log(this.allTodos);
        localStorage.setItem('todos', JSON.stringify(this._allTodos));

    }


    clearCompleted() {
        this._allTodos = this._allTodos.filter((todo) => !todo.done);
        localStorage.setItem('todos', JSON.stringify(this.allTodos));
    }

    toggleDone = (todo: TodoInterface) => todo.done = !todo.done;
}
