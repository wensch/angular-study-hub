import { StateService } from './../../services/state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  counter$ = this.stateService.counter$

  constructor(private stateService: StateService) { }

  increment() {
    this.stateService.increment()
  }

  decrement() {
    this.stateService.decrement()
  }
}
