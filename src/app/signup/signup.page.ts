import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  fname: string = " ";
  lname: string = " ";
  email: string = " ";
  pass: string = " ";

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(
     "SIGN UP SUCCESS"
    )
 }

}
