import { Component, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
todos= signal([
  {title:`Todo 1`, completed:false},
  {title:`Todo 2`, completed:false},
  {title:`Todo 3`, completed:false}
])

addTodo(){
this.todos.update(todos => [...todos,{title: `Todo ${todos.length+1}`,completed:false}])
}

removeTodo(index:number){
  this.todos.update(todos => todos.filter((_,i)=>i !== index))
}

clearCompleted(){
  this.todos.update(todos => todos.filter(todo =>!todo.completed))
}

toggleCompleted(index:number) {
  this.todos.update(todos =>{
    const todo = todos[index];
    return [...todos.slice(0,index),
      {...todo, completed:!todo.completed}, 
      ...todos.slice(index+1)]
  })
}
}
