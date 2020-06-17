import { ServiceService } from './../../services/service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
  @Input() rowsOfServices:number;
  services:any[];
  constructor(private myService:ServiceService) { }

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices(){
    this.myService.getAll(this.rowsOfServices).subscribe(
      (services: any) => this.services = services.data
    )
  }
}
