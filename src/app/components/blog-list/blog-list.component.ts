import { Component, OnInit } from '@angular/core';
import { Blog } from '../../shared/blog';
import { BLOGS } from '../../shared/blogsData';
import { Observable } from 'rxjs'
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  
  blogs : Blog[];
  constructor(private blogService : BlogService) { }

  ngOnInit() {
    console.log("Hey")
    this.blogService.getBlogsFromFirestore().subscribe(item => {this.blogs = item})
  }

}
