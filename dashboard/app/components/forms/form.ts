import {Component, OnInit} from '@angular/core';
import {
      FORM_DIRECTIVES,
      REACTIVE_FORM_DIRECTIVES,
      FormBuilder,
      FormGroup,
      FormControl,
      AbstractControl,
      Validators
      } from '@angular/forms';
import { MdCard } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdSpinner, MdProgressCircle } from '@angular2-material/progress-circle';

@Component({
  selector: 'form-test',
  viewProviders: [FormBuilder],
  templateUrl: './app/components/forms/form.html',
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MdButton,
    MdCheckbox,
    MdSpinner,
    MdProgressCircle,
    MdCard,
    MdInput],
    providers: []
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  submit(): void {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
    
    console.log('FormComponent ngOnInit() called');
  }
}
