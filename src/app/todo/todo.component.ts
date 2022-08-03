import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo-item/Item";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [

        new Todo(1,"hello","lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam. ",false),

    ];
  }

  ngOnInit(): void { }
}
