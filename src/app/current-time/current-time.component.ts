import { Component, OnInit } from '@angular/core';
import { CurrentTimeService } from 'src/current-time.service';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  currentTime:String = "";

  constructor(private timeService:CurrentTimeService) { }

  ngOnInit(): void {

    this.timeService.getCurrentTime().subscribe((time: string) => {
      this.currentTime = time;
    })
  }
}
