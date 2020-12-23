import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularjs';
  //form: any[] = [];
  form: FormGroup;

  

  constructor(private fb: FormBuilder){
  }

  ngOnInit(){
    this.form=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

public submit(){
  //console.log(this.form.value);
  console.log('form value',this.form.value);
  alert("Login Success!");

}

public enableSubmitBtn(): boolean{
  return this.form.valid;
}

}
