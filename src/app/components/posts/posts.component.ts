import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() rowsOfPostes:number;
  posts:any[];
  constructor(private postServices:PostService) { }

  ngOnInit(): void {
    this.getAllPoste();
  }

  getAllPoste(){
    this.postServices.getAll(this.rowsOfPostes).subscribe(
      (posts: any) => this.posts = posts.data
    )
  }
  changerpage(){
  }
}
