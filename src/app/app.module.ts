import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DemoDirective } from './directtives/demo.directive';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ParentComponent,
    ChildComponent,
    DemoDirective,
    HeaderComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FooterComponent,
    
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
