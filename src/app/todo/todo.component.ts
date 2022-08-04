import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { first } from "rxjs";
import { TodocrudService } from "../todocrud.service";
import { Todo } from "./todo-item/Item";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  doneStatus: boolean = false;
  @ViewChild("in_title") in_title!: ElementRef;
  @ViewChild("in_done") in_done!: ElementRef;
  @ViewChild("in_desc") in_desc!: ElementRef;

  constructor(crudService: TodocrudService) {
    crudService.getTodos().pipe(first()).subscribe((data: []) => {
      data.forEach(element => {
        this.todos.push(new Todo(element["id"], element["title"], element["desc"], element["done"]));
      });;
    });
  }

  ngOnInit(): void { }

  destroyTodoHandlerParent(todo: Todo): void {
    console.log("destroyTodoCaught");
    this.todos = this.todos.filter(t => t !== todo);
  }

  toggleFormDone(): void {
    this.doneStatus = !this.doneStatus;
  }

  addTodo() {
    console.log("addTodo");
    console.log(this.in_title.nativeElement.value);
    console.log(this.in_done.nativeElement.checked);
    console.log(this.in_desc.nativeElement.value);

    this.todos.push(new Todo(1, this.in_title.nativeElement.value, this.in_desc.nativeElement.value, this.in_done.nativeElement.checked));
    this.in_title.nativeElement.value = "";
    this.in_desc.nativeElement.value = "";
    this.in_done.nativeElement.checked = false;

  }
}


