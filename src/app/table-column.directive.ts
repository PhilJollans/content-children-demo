import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[tableColumn]'
})
export class TableColumnDirective 
{
  constructor(public readonly template: TemplateRef<any>) { }
  @Input('tableColumn') columnName: string = '';
}
