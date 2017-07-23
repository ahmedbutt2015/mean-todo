import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any[]

  constructor(private _todoService:TodoService) {
  }

  ngOnInit() {
    this._todoService.getAllTaks().subscribe(todos => {
      this.todos = todos
    })
  }

  addTodo(event, task) {
    this._todoService.addTask(task.value).subscribe(todo => {
      console.log(todo)
      this.todos.push({name: task.value, _id: todo._id})
      task.value = ""
    })
  }

  deleteTodo(event, id) {
    console.log(id)
    this._todoService.deleteTask(id).subscribe(todo => {
      // this.todos.push({name: task.value, _id: todo._id})
    })

  }

}
