import {Component, OnInit} from '@angular/core';
import {
      FORM_DIRECTIVES,
      REACTIVE_FORM_DIRECTIVES,
      FormBuilder,
      FormGroup,
      FormControl,
      AbstractControl
      } from '@angular/forms';
import {Validators} from '@angular/forms';
import { MdCard } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdSpinner, MdProgressCircle } from '@angular2-material/progress-circle';

import { CHART_DIRECTIVES, Highcharts, ChartComponent, ChartPointComponent, ChartSeriesComponent } from 'angular2-highcharts/index';

@Component({
  selector: 'test',
  viewProviders: [FormBuilder],
  templateUrl: './app/components/test/test.html',
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    CHART_DIRECTIVES,
    MdButton,
    MdCheckbox,
    MdSpinner,
    MdProgressCircle,
    MdCard,
    MdInput]
})
export class TestComponent implements OnInit {
  title: string;
  fb: FormBuilder;
  myForm: FormGroup;
  newTodo: FormControl;
  twoWayBound : string;
  submitted : string;
  options: Object;

  states : string[] = ['TX', 'NY', 'CA'];

  submit(): void {
    this.submitted = 'submitted';
  }

  constructor(fb: FormBuilder) {
    this.fb = fb;
    this.title = 'hello from test component';

    this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }
}
