import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {


  @Output() onDateChange = new EventEmitter<Date>()

  @Input() dayOfWeek = 0;

  DaysOpenModal: any = ["Monday", "Sunday", "Saturday", "Friday", "Thursday"," Wednesday", "Tuesday"]
  TimeHours: any = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
  constructor() { }
  time: any = {
    dayofweek: 0,
    starthour: 9,
    endhour: 17
  }
  ngOnInit(): void {

  }
  ngAfterContentInit() {
    this.time.dayofweek = this.dayOfWeek;
    this.onDateChange.emit(this.time)
  }
  dateChanged(event: any) {
    let type = event.type
    let changedData = event.position

    switch (type) {
      case 'dayofweek':
        this.time[type] = changedData;
        break;
      case 'starthour':
        this.time[type] = changedData;
        break;
      case 'endhour':
        this.time[type] = changedData;
        break;
    }
    this.onDateChange.emit(this.time)
  }
}
