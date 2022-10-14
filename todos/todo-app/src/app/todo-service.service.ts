import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./Todo";


@Injectable({
  providedIn: 'root'
})

export class TodoService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "api/todos"
  }

  getTodo() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(todo: { summary: string; description: string; id: number }) : Observable<Todo>{
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(todo: Todo) : Observable<Todo>{
    return this.http.delete<Todo>(this.url + "/" + todo.id);
  }
}
