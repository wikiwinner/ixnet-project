import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { FooterComponent } from './includes/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ChildComponentComponent } from './components/pricing/child-component/child-component.component';
import { AboutusComponent } from './components/about/aboutus/aboutus.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { ServiceComponent } from './components/services/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
   ContactComponent,
   BlogComponent,
   AboutComponent,
   PricingComponent,
   ServicesComponent,
   HomeComponent,
   ComponentsComponent,
   ChildComponentComponent,
   AboutusComponent,
   BlogSingleComponent,
   ServiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
