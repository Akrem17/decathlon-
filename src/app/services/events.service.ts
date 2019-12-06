import { Injectable } from '@angular/core';
import { EVENT } from '../shared/event';
import { events } from '../shared/data/events';
// import {  } from '../shared/dish';
// import { events } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

getEvents():EVENT []{

return events


}

getEventById(id:string):EVENT{
  return events.filter((event) => (event.id == id))[0];
}
}
