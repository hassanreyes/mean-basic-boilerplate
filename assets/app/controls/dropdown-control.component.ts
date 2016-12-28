import {    Component,
            EventEmitter, 
            Input, 
            Output }            from "@angular/core";
import { ValueLabelPair }       from "../common/commons";


@Component({
  selector: 'dropdown',
  template: `
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {{selected ? selected.label : placeHolder}}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
        <li *ngFor="let value of values" (click)="selectItem(value)"><a>{{value.label}}</a></li>
      </ul>
    <div>
  `
})
export class DropdownComponent {
  @Input()
  values: ValueLabelPair[];
  
  @Input()
  placeHolder: String = "Select:";
  
  @Input()
  @Output()
  selected: ValueLabelPair;
  
  @Output()
  select: EventEmitter<ValueLabelPair>;

  constructor() {
    this.select = new EventEmitter<ValueLabelPair>();
  }

  selectItem(item: ValueLabelPair) {
    this.selected = item;
    this.select.emit(item);
  }
}