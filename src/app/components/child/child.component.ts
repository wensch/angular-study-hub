import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})

export class ChildComponent {
  @Input() count: number | null = 0

  constructor() {
    console.log('🔄 ChildComponent renderizado!');
  }
}
