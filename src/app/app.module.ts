import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RainbowTypingDirective } from './rainbow-typing.directive';
import { CvComponent } from './cv/cv.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TestDefaultImageComponent } from './test-default-image/test-default-image.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { EmbaucheListComponent } from './embauche-list/embauche-list.component';
import { HeaderComponent } from './header/header.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ReactiveFormsModule } from '@angular/forms';  // Import du module ReactiveFormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    BusinessCardComponent,
    ParentComponent,
    ChildComponent,
    RainbowTypingDirective,
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvDetailComponent,
    DefaultImagePipe,
    TestDefaultImageComponent,
    MiniWordComponent,
    EmbaucheListComponent,
    HeaderComponent,
    AuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule, // Requis pour les animations de ngx-toastr
    ToastrModule.forRoot({
      timeOut: 3000, // Durée du toast
      positionClass: 'toast-top-right', // Position
      preventDuplicates: true, // Pas de doublons
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
