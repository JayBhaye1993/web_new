import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blog } from '../../Interfaces/blog';
import { BlogService } from '../../services/blog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  datasaved = false;
  blogs: Blog[] = [];

  constructor(private blogservice: BlogService) { }
  ngOnInit(): void {
    this.blogservice.getBlogs().subscribe((blogs: any) => {
      this.blogs = blogs
      console.log(this.blogs);
    });
  }

  removeBlog(id: number): any {
    this.blogservice.deleteBlog(id).subscribe((blogs: any) => {
      this.blogs = blogs
      console.log(this.blogs);
    });
  }
  editBlog(id: number): any {
    this.blogservice.deleteBlog(id).subscribe((blogs: any) => {
      this.blogs = blogs
      console.log(this.blogs);
    });
  }

}
