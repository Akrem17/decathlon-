import { Component, OnInit } from '@angular/core';
import { EVENT } from '../shared/event';
import { events } from '../shared/data/events';
import {EventsService  } from '../services/events.service';
import { DecathlonService } from '../services/decathlon.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
events:EVENT[];
  constructor(private eventServ:EventsService,private deca:DecathlonService) { }

  ngOnInit() {
  setTimeout(() => {
    this.events=this.eventServ.getEvents();
    this.deca.getSports();

  }, 2000);

  }

}
