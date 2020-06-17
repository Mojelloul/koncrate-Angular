import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent implements OnInit {

  service:any;
  slug:string;
  constructor(private postService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service =  this.route.snapshot.params.slug;
    this.getService(this.service);
  }

  getService(slug:string){
    this.postService.getOne(slug).subscribe((service:any)=>this.service=service.data);
    console.log(this.service);
  }

}
