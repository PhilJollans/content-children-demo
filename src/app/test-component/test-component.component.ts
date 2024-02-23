import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TableColumnDirective } from '../table-column.directive';

@Component({
  standalone: true,
  selector: 'my-table',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent implements AfterContentInit {

  constructor() { }

  @ContentChildren(TableColumnDirective) columnList!: QueryList<TableColumnDirective>;
  
  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log('column template list');
    console.log(this.columnList.toArray());
  }
}
