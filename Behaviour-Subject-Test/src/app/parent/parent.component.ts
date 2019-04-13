import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  obj: any = {
              'message': {'name': 'value1', 'xxx': 'value2', 'aaa': 'value3'},
              'main': {'name': 'value4', 'xxx': 'value5', 'aaa': 'value6'},  
              'recon': {'name': 'value7', 'xxx': 'value8', 'aaa': 'value9'}  
  };

  constructor(private data: SharedService) { }

  ngOnInit() {
    this.data.changeMessage(this.obj);
  }

}
