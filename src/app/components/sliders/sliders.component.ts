import { SlideService } from './../../services/slide.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  mySliders: any[];
  constructor(private slideService:SlideService) { }

  ngOnInit(): void {
    this.getAllSlides();
  }
  
  getAllSlides(){
    this.slideService.getAll().subscribe(
      (slides: any) => this.mySliders = slides.data
    )
  }
}
