import { Component, OnInit } from '@angular/core';
import { Todo } from "../Todo";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoId: number;
  todoSum: string;
  todoDes: string;
  todosArr: Todo[];

  constructor(private todoService: TodoService) {
    this.todoId = 0;
    this.todoSum = "";
    this.todoDes = "";
    this.todosArr = [];
  }

  ngOnInit(): void {
  }

  getTodos() {
    this.todoService.getTodos().subscribe(res => {}, error => {
      alert("Failed to get todos");
    });
  }

  addTodo() {
    let todo = {
      id: this.todoId,
      summary: this.todoSum,
      description: this.todoDes,
    };
    this.todoService.addTodo(todo).subscribe(res => {}, error => {
      alert("Failed to add todo");
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(res => {}, error => {
      alert("Failed to delete todo");
    });
  }

}
