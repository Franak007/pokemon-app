import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: `contact.component.html`,
  styles: []
})
export class ContactComponent {
  contactForm: NgForm
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  protected readonly onsubmit = onsubmit;
}
