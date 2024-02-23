import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[tableColumn]',
  standalone: true,
})
export class TableColumnDirective 
{
  constructor() { }
  @Input('columnName') columnName: string = '';
}
