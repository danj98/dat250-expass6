import {Component, OnInit} from '@angular/core';
import { Todo } from "./Todo";
import { TodoService} from "./todo-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'todo-app';

  id: number;
  summary: string;
  description: string;
  todos: Todo[];

  constructor(private todoServer: TodoService ) {
    this.id = 0;
    this.summary = "";
    this.description = ""
    this.todos = [];
  }

  ngOnInit(): void {
  }

  getTodo() {
    this.todoServer.getTodo().subscribe(res => {}, error => {
      alert("Failed to get todos");
    });
  }

  addTodo() {
    let todo = {
      id: this.id,
      summary: this.summary,
      description: this.description,
    };
    this.todoServer.addTodo(todo).subscribe(res => {}, error => {
      alert("Failed to add todo");
    });
  }

  deleteTodo(todo: Todo) {
    this.todoServer.deleteTodo(todo).subscribe(res => {}, error => {
      alert("Failed to delete todo");
    });
  }


}
