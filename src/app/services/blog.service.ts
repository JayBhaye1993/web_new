import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../Interfaces/blog';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = "https://localhost:7204/api";
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {

    return this.http.get<Blog[]>(`${this.baseUrl}/BlogManagement`);
  }

  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.baseUrl}/BlogManagement`, blog);

  }

  deleteBlog(id: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/BlogManagement/${id}`);
  }
  insertData(data: any) {
    console.log(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/vnd.api+json',
      'Accept':'application/vnd.api+json'
    });
    let options = { headers: headers };
    return this.http.post('${this.baseUrl}/BlogManagement/', data, options);
  }
}
