import { Component, OnInit } from '@angular/core';
import {EventsService  } from '../services/events.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EVENT } from '../shared/event';

@Component({
  selector: 'app-eventd',
  templateUrl: './eventd.component.html',
  styleUrls: ['./eventd.component.scss']
})
export class EventdComponent implements OnInit {
selectedEvent:EVENT;
  constructor(private eventServ:EventsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id:string = this.route.snapshot.params['id'].toString();

    setTimeout(() => {
      this.eventServ.getEventById("0");
      this.selectedEvent=this.eventServ.getEventById(id);
      console.log(this.selectedEvent)
    }, 2000);

  }

}
