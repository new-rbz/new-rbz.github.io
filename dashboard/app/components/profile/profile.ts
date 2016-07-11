import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import {ProfileService} from './profile.service'

@Component({
	selector: 'profile',
  template: `
	 <img src="{{profile.picture}}" style="width: 50px" /> {{profile.name}}    
   <h2>Chuck quote of the day</h2>
   {{quote}}
	`,
  providers: [ProfileService]
})
export class Profile implements OnInit, OnDestroy, AfterContentInit {
  profile: any;
  quote: any;

  constructor(private profileService : ProfileService){}

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.getSecretThing();
  }

  ngOnDestroy() : void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  getSecretThing() {
    this.profileService.getSecretThing().subscribe(
        data => {
          console.log("the quote:", data);
          this.quote = data;
        },
        err => console.log(err), 
        () => console.log('Completed query for quote of the day.')
    );
  }
}
