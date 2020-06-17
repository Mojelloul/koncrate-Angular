import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  rowsServices=3;
  rowsPostes=4;
  constructor() { }

  ngOnInit(): void {
  }

}
