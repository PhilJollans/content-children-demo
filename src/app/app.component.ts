import { Component } from '@angular/core';
import { TestComponent } from './test/test-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    TestComponent
  ]
})
export class AppComponent {
}
