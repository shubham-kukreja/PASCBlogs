import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../app/services/blog.service';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.css']
})
export class ViewGalleryComponent implements OnInit {
  items;
  constructor(public blogService : BlogService) { }

  ngOnInit() {
    this.blogService.getImages().subscribe(item => {this.items = item})
  }

}
