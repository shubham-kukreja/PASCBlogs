import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service'
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  heading : string;
  subHeading : string = null;
  image : string = null;
  content : string;
  uploadPer : Observable<number>
  downloadURL : Observable<string>
  constructor(private blogService : BlogService, private storage : AngularFireStorage) { }

  ngOnInit() {
  }
  createPost()
  {
    const data = {
      content : this.content,
      heading : this.heading,
      subHeading : this.subHeading,
      image : this.image,
      date : new Date().toISOString()
    };
    this.blogService.create(data)
  }
  uploadImage(event)
  {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    const fileRef = this.storage.ref(path);
    if(file.type.split('/')[0] !== 'image') {
      return alert("Choose A Image File")
    }
    else {
      const task = this.storage.upload(path, file)
      this.uploadPer = task.percentageChanges()
      task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL())
     )
    .subscribe()
      console.log('Image Uploaded');
      console.log(task);
      
    }
  }
}
