import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { PostsComponent } from './components/posts/posts.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { PostService } from './services/post.service';
import { ServiceService } from './services/service.service';
import { MessageService } from './services/message.service';
import { SlideService } from './services/slide.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ServcesPageComponent } from './components/servces-page/servces-page.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutComponent,
    BlogComponent,
    BreadcrumbComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    MessageComponent,
    PostsComponent,
    ServiceComponent,
    ServicesComponent,
    ShowPostComponent,
    ShowServiceComponent,
    SlidersComponent,
    PageNotFoundComponent,
    ServcesPageComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RoutesRoutingModule
    
  ],
  providers: [PostService,ServiceService,MessageService,CommonService,SlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
