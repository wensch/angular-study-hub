import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data$ = this.dataService.data$;

  constructor(private dataService: DataService) {}

  updateValue() {
    const newValue = Math.floor(Math.random() * 100);
    this.dataService.upateData(newValue);
  }
}
