import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CustomPipe } from './pipes/custom.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { CustomValidatorsComponent } from './components/custom-validators/custom-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    PostFormComponent,
    UserDetailsComponent,
    CustomPipe,
    SummaryPipe,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    CustomValidatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
