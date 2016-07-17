import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class YahooDataService {
  constructor(private http:Http) {}

  public issueRequest (query : string) : Observable<Response> {
      return this.http.get("http://query.yahooapis.com/v1/public/yql?q=" 
      + query + 
      "&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
      // .subscribe((data) => {
      //   if (!data.json().query.results || !data.json().query.results.quote) {
      //     toaster.pop('error', 'Invalid Response: Results returned null', 'This is most likely caused by having bad ticker symbol');
      //     console.error('Invalid Response: Results returned null. This is most likely caused by having bad ticker symbol');
      //     console.error(query, data);
      //   }

      //   return data.json();
      // },
      // error => {
      //  toaster.pop(
      //     'Error',
      //     "Failed to contact Yahoo Finance",
      //     "Failed to get the name, status is " + error);

      //   console.log("Failed to get the name, status is " + error + "response is ", error);
      // });
    };
}