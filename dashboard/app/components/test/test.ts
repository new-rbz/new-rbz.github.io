/// <reference path="../../../typings/lodash/lodash.d.ts" />
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

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

import {
  CHART_DIRECTIVES,
  Highcharts,
  ChartComponent,
  ChartPointComponent,
  ChartSeriesComponent } from 'angular2-highcharts/index';
import { ListType } from './ListType'
import {GoogleSheetsService } from './googleSheetsService';
import {AutoGrowDirective} from './auto-grow.directive';
import _ from 'lodash';

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
    MdInput,
    AutoGrowDirective],
    providers: [GoogleSheetsService]
})
export class TestComponent implements OnInit {
  title: string;
  myForm: FormGroup;
  newTodo: FormControl;
  twoWayBound : string;
  submitted : string;
  options: Object;
  myserviceitems: string [];
  listTypes : ListType[] = [];

  constructor(private fb: FormBuilder, private svc:GoogleSheetsService, private changeDetector:ChangeDetectorRef ) {
    this.title = 'hello from test component';
  }

  ngOnInit(): void {
    this.getListTypes();
    console.log('TestComponent ngOnInit() called');
  }

  submit(): void {
    this.submitted = 'submitted';
  }

  getListTypes() : void {
    this.svc.getListTypes( (results:ListType[]) => {
       this.listTypes = _.each(results, x=> x.IsActive);
      this.changeDetector.detectChanges();
    });
  }
}
