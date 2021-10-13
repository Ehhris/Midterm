import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  private selectedSegment:string ='contact'

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }

  onSubmit() {
    alert(
     "SENT SUCCESSFULLY"
    )
 }
}
