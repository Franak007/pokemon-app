import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: `navbar.component.html`,
  styles: []
})
export class NavbarComponent {

  //Cette variable se change à la connection
  isConnected: number = 0;

}
