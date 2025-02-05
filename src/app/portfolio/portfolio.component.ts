import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
arrImges:Image[]=[
  {img:'poert1.png'},
  {img:'port2.png'},
  {img:'port3.png'}  ,
  {img:'poert1.png'},
  {img:'port2.png'},
  {img:'port3.png'}
];
modalImg!:string;
modalview:boolean=true;
showModal(e:MouseEvent ,img:HTMLImageElement){if (e.target==img) {
  this.modalview=false
  
}else{
  this.modalview=true
}

}}
interface Image { 
  img:string
}