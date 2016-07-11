import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthHttp } from 'angular2-jwt';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const QUOTE_URL = 'http://localhost:3002/api/quote';

@Injectable()
export class ProfileService {
  constructor(public authHttp: AuthHttp) {}

  public getSecretThing() : Observable<any> {
    return this.authHttp.get(QUOTE_URL)
    .map((response: Response) => {
      let tmp  = response.json();
      console.log(tmp);
      return tmp;
    })
    .catch((err: any) => 
    {
      console.log(err);
      return Observable.throw(err);
    });
  }
}
