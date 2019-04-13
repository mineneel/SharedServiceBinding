import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
message: any;
fullData: any;

  constructor(private data: SharedService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe((fullData) => {
      this.fullData = fullData;
      this.message = this.fullData.message;
      console.log(this.message);
    });
  }

  update() {
    this.message.name = 'Updated Name';
  }

  print() {
    console.log(this.fullData);
  }

}
