import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { PERSON } from '../shared/person';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {
coachs:PERSON[];
  constructor(private coachservice:PersonService) {


   }

  ngOnInit() {

    setTimeout(() => {
      this.coachs=this.coachservice.getAllCoach();
      console.log(this.coachs[0])
     
    }, 2000);
  }

}
