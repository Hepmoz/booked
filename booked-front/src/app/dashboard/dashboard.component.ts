import { Component, OnInit } from '@angular/core';
import { faHome, faQuoteRight, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  faHome = faHome;
  faQuoteRight = faQuoteRight;
  faBook = faBook;
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit() {
  }

}
