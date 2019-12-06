import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DecathlonService } from '../services/decathlon.service';
import { sport } from '../shared/sport';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.scss']
})
export class InscritComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private deca:DecathlonService) { }
  spor :string[];
  ngOnInit() {

    this.myForm = this.fb.group({
      firstname: '',
      lastname:'',
      email: '',
      message: '',
      password:'',
      passwordv:'',
      etablissement:''
  }
  
  )

  

  let sportaa = []
  this.deca.getSports().subscribe(s=>{
    for( var i=0;i<10;i++){
     
      sportaa.push(s.data[i].attributes.name)
    }

    console.log(sportaa)
    
  
    this.spor=sportaa;
    // sportaa.push(s.data[0].attributes.name);
    // console.log(sportaa)



  })


 
}

onSubmit(form: FormGroup) {
  console.log('name', form.value);

}
}
