import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data: any;
    
  private messageSource = new BehaviorSubject(this.data);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data: any) {
    this.messageSource.next(data);
  }
}
