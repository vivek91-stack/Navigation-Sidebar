import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { PostsComponent } from './comps/posts/posts.component';
import { ContactComponent } from './comps/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    ContactComponent
  ],
  imports: [BrowserModule,SidebarModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
