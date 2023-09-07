import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: `contact.component.html`,
  styles: []
})
export class ContactComponent {

  emojiName: string = "🚫";
  emojiPassword: string = "🚫";

  onSubmit(form: NgForm) {
    let username: string = form.value.username;
    let password: string = form.value.password;

    if (username.length <= 2) {
      this.emojiName = "🚫";
    } else {
      this.emojiName = "🟢"
    }

    if (password.length > 6) {
      this.emojiPassword = "🚫";
    } else {
      this.emojiPassword = "🟢"
    }

    console.log(form.value.username);
    console.log(form.value);
    form.resetForm();
  }

  protected readonly onsubmit = onsubmit;
}
