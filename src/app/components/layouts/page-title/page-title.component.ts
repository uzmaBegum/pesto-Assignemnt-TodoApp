import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {


  ngOnInit() {
    this.getDateandTime();
    this.getTimeStamp();
  }


  
  getDateandTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var fullDate = dd + '-' + mm + '-' + yyyy;

    return fullDate;
  }

  getTimeStamp() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    var newTime = hours + ':' + minutes + ' ' + meridiem;
    return newTime;
  }
}
