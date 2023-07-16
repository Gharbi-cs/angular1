import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',//hedha 7atito f app.component html bech ye5ademli sales person list 
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

 salesPersonList : SalesPerson[]=[
   new SalesPerson("Asma","Gharbi","asmagharbi02@gmail.com",500),
   new SalesPerson("Sarra","rouahi","Sarragharbi02@gmail.com",400),
   new SalesPerson("Amine","Hmem","Aminegharbi02@gmail.com",200),
   new SalesPerson("Alaa","Rezgi","Alaagharbi02@gmail.com",800),
 ]
}
