import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service'
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  heading : string;
  subHeading : string;
  image : string = 'https://firebasestorage.googleapis.com/v0/b/pasc-blogs.appspot.com/o/posts%2Fdemo-detail.jpeg?alt=media&token=3ff60e63-8eef-4b67-bee5-089b0b7e83da';
  content : string = null;
  uploadPer : Observable<number>
  downloadURL : Observable<string>
  created : boolean;
  category : string;
  public Editor = ClassicEditor;
  constructor(private blogService : BlogService, private storage : AngularFireStorage,public authService : AuthService , public router : Router) { }

  ngOnInit() {
  }
  createPost()
  {
    const data = {
      content : this.content,
      heading : this.heading,
      subHeading : this.subHeading,
      image : this.image,
      date : new Date().toISOString(),
      category : this.category,
      author : this.authService.authState.displayName,
      approve : null,
      id : null
    };
    this.created = true;
    this.blogService.create(data)
    setTimeout(() => {
      this.created = false;
      this.router.navigate(['/blogs'])
    }, 3000);
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
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          this.downloadURL.subscribe(url => (this.image = url));
        })
     )
    .subscribe()
      console.log('Image Uploaded');
    }
  }
  
}
