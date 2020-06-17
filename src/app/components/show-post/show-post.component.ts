import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  post:any;
  slug:string;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug =  this.route.snapshot.params.slug;
    this.getPost(this.slug);
  }

  getPost(slug:string){
    this.postService.getOne(slug).subscribe((post:any)=>this.post=post.data);
    console.log(this.post);
  }
}
