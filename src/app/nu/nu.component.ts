import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { PERSON } from '../shared/person';

@Component({
  selector: 'app-nu',
  templateUrl: './nu.component.html',
  styleUrls: ['./nu.component.scss']
})
export class NuComponent implements OnInit {
 nuts:PERSON[]
  constructor(private NuService:PersonService) { }

  ngOnInit() {
    this.nuts=this.NuService.getAllNu();
  }

}
