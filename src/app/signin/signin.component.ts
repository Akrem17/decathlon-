import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    
    this.myForm = this.fb.group({
      email: '',
      Password:''
  })
  
  }

  onSubmit(form: FormGroup) {
    console.log('name', form.value);
  
  }

}
