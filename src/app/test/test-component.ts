import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TableColumnDirective } from '../table-column.directive';

@Component({
  standalone: true,
  selector: 'my-table',
  templateUrl: './test-component.html',
  styleUrl: './test-component.scss'
})
export class TestComponent implements AfterContentInit {

  @ContentChildren(TableColumnDirective) columnList!: QueryList<TableColumnDirective>;
  
  ngAfterContentInit(){
    console.log('column template list');
    console.log(this.columnList.toArray());
  }
}
