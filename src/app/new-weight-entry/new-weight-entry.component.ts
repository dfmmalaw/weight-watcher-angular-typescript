import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  // this decorator allows us to get data from parent component (home in this case) and user property binding on DOM element
  @Input() showBodyFat: boolean;
  // this decorator raises an event that notifies parent component and can send data as well
  @Output() create = new EventEmitter();
  // when working with forms we always need a data model to hold our data
  model;
  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  createEntry() {
    let newEntry = Object.assign({}, this.model,{
      bodyfat: this.model.bodyfat / 100,
      date: new Date(this.model.date)
    })
    // button click raises event here using output property's emit method and passes data to home component
    this.create.emit(newEntry);
  }

  // need method to set model back to empty state and it is called everytime thhe component is initialized
  resetForm() {
    this.model = {}
  }

}
