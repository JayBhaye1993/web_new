import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms'
import { Blog } from '../../Interfaces/blog';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {


  constructor(private blogservice: BlogService) { }
  addBlog = new FormGroup({
    text: new FormControl(''),
    username: new FormControl('')
  });

  ngOnInit(): void {

  }

  saveBlog(): any { 
  
    this.blogservice.insertData(this.addBlog.value);
  }
}
