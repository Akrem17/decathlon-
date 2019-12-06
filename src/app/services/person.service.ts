import { Injectable } from '@angular/core';
import { PERSON } from '../shared/person';
import { person } from '../shared/data/coachs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }


  getAllPersons():PERSON []{

    return person;
    
    
    }
    getAllCoach():PERSON[]{
      // person.filter((pers) => {
      //   if(pers.type=='coach'){console.log(pers)}});
      return person.filter((pers) => (pers.type=='coach'));
    }
    getAllNu():PERSON[]{
      return person.filter((pers) => (pers.type=='nutrosionist'));

    }

}

