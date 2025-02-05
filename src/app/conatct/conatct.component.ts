import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-conatct',
  imports: [StarComponent,CommonModule,FormsModule],
  templateUrl: './conatct.component.html',
  styleUrl: './conatct.component.css'
})
export class ConatctComponent {
isData:boolean=false
username:string =''
userAge:string =''
userEmail:string =''
userPassword:string =''
}
