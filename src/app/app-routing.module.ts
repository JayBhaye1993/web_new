import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Blog/blog/blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
   { path: 'addblog', component: AddBlogComponent },
  { path: '', redirectTo: 'addblog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
