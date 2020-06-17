import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  slug: string = 'propos';
  page:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getPageAbout(this.slug);
  }

  getPageAbout(slug){
    this.commonService.getOne(slug).subscribe((page:any)=> this.page = page.data)
  }
}
