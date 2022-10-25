import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoService} from "./todo/services/todo.service";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
