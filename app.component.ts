import { Component, Input, OnInit, ViewChild } from '@angular/core';

interface Time {
  dayofweek: number,
  starthour: number,
  endhour: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  DaysOpenModal: any = ["Monday", "Sunday", "Saturday", "Friday", "Thursday", " Wednesday", "Tuesday"]
  TimeHours: any = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
  time: Time = {
    dayofweek: 0,
    starthour: 9,
    endhour: 17
  }
  selectedDayIndex = 0;

  ngOnInit(): void {
  }

  dateChanged = (newTime: any) => {
    this.time = newTime
  }

}
