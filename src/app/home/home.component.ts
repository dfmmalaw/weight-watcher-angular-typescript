import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';


@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // flag that controls visibility
  showBodyFat = true;
  // property will hold the data when it comes back from the server
  entries: Entry[];

  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    this.updateData();
  }

  // click event on button element invokes this method and ngIf structural directive hide/show associated element based on showbodyfat property defined at top of class.
  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  updateData() {
    // subscribing is what kicks off the http call in the service which returns an entries array which I am assigning to the entries property
    this.entriesSvc.getEntries().subscribe(entries => {
      this.entries = entries;
    })
  }

  // called when 'create' event is raised in new-weight-entry (child) component and it then invokes the addEntry method in the service
  createNewEntry(entry: Entry){
    this.entriesSvc.addEntry(entry).subscribe(() => {
      this.updateData();
    });
  }
}
