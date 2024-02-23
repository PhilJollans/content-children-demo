import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test-component';
import { TableColumnDirective } from './table-column.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    TestComponent,
    CommonModule,
    TableColumnDirective,
  ]
})
export class AppComponent {
}
