import { Component } from '@angular/core';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  // inject service via the constructor and services in Angular are singletons so same instance of server will be injected into any component importing it
  constructor() {}

  ngOnInit() {
  }
  

}
