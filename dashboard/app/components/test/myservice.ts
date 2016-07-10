import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
public  get() : string [] {
    let result : string[] = ['Object 1', 'Object 2', 'Object 3'];
    return result;
  }
}
