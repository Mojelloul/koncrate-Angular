import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from '../components/accueil/accueil.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ShowPostComponent } from '../components/show-post/show-post.component';
import { ServicesComponent } from '../components/services/services.component';
import { ShowServiceComponent } from '../components/show-service/show-service.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ServcesPageComponent } from '../components/servces-page/servces-page.component';


const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path:"blog", component: BlogComponent},
  {path:"blog/:slug", component: ShowPostComponent},
  {path:"sevices", component: ServcesPageComponent},
  {path:"services/:slug", component: ShowServiceComponent},
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"**", redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
