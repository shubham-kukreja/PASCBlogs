import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
    blog ;

  constructor(private blogService : BlogService, 
    private route : ActivatedRoute,
    private location : Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.blog = this.blogService.getSelectedBlogFromFirestore(id).subscribe(data => this.blog = data);
    console.log(id)
    this.blogService.provideId(id);
  }
  markCompleted(id : string) {
    this.blogService.approve(id);
  }
  deleteBlog(id : string) {
    this.blogService.delete(id);
  }
  
}
