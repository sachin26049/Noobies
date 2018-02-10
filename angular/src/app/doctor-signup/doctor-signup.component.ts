import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  name: String;
  age: number;
  sex: String;
  degree: String;
  specialist: String;
  clinic: String;
  address: String;
  time_to: any;
  time_from: any;
  time_to_a: String;
  time_from_p: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }


    onSignupSubmit() {
    console.log('1');
    const user = {
      name: this.name,
      age:this.age,
      sex:this.sex,
      specialist:this.specialist,
      degree: this.degree,
      clinic: this.clinic,
      address: this.address,
      time_to: this.time_to,
      time_from: this.time_from,
      time_to_a: this.time_to_a,
      time_from_p: this.time_from_p,
      email: this.email,
      username: this.username,
      password: this.password
     };
  console.log(JSON.stringify(user));
    // Required Fields
    if ( !this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
console.log('trying');
    // Register user
    this.authService.registerDoctor(user).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

}
