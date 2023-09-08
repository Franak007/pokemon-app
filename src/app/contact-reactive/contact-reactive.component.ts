import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-reactive',
  templateUrl: `contact-reactive.component.html`,
  styles: []
})
export class ContactReactiveComponent {

  public loginForm: FormGroup = new FormGroup<any>({
    username:new FormControl(''),
    password:new FormControl(''),
  })
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      console.log(this.loginForm.get("password")?.value);

    }
    else {
      console.log('no no no !');
    }
  }
}
