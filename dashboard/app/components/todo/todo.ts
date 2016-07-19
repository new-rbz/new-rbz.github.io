/// <reference path="./models/todoItem.ts"/>
import {Component, OnInit} from '@angular/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  Validators
} from '@angular/forms';

import {TodoItem} from './models/todoItem';

import { MdCard } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdSpinner, MdProgressCircle } from '@angular2-material/progress-circle';

import {TestComponent} from '../test/test';
import {FormComponent} from '../forms/form';

@Component({
  selector: 'todo',
  viewProviders: [FormBuilder],
  templateUrl: './app/components/todo/todo.html',
  directives: [
    FORM_DIRECTIVES,
    TestComponent,
    FormComponent,
    REACTIVE_FORM_DIRECTIVES,
    MdButton,
    MdCheckbox,
    MdSpinner,
    MdProgressCircle,
    MdCard,
    MdInput]
})
export class Todo implements OnInit {
  webSocket:$WebSocket;
  todos: Array<TodoItem>;
  fb: FormBuilder;
  myForm: FormGroup;
  newTodo: FormControl;

  constructor(fb: FormBuilder) {
    this.fb = fb;
    this.todos = new Array<TodoItem>();
    this.todos.push(new TodoItem('Hello world', false));

    this.buildForm();
  }

  ngOnInit(): void {
    this.webSocket = new $WebSocket("http://localhost:4080/");
    this.webSocket.send({message:'hello world'});

    console.log('ngOnInit() called');
  }

  buildForm(): void {
    this.newTodo = new FormControl('', Validators.required);

    this.myForm = this.fb.group({
      'newTodo': this.newTodo
    });
  }

  removeTodo(item: TodoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.todos.push(new TodoItem(this.newTodo.value, false));

      // How in hell do I reset this thing and prevent it from being validated?
      // The only thing that works is rebuilding the whole form/&%¤#""
      this.buildForm();
    }
  }

  toggleAll(completed: boolean) {
    this.todos.forEach(function(todo) {
      todo.completed = completed;
    });
  }
}
