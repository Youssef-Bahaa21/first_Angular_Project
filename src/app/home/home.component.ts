import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  imports: [AppComponent, StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
