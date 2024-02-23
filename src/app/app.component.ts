import { Component } from '@angular/core';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    TestComponentComponent
  ]
})
export class AppComponent {
}
