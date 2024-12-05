import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { ParentComponent } from './parent/parent.component';
import { Component1Component } from './component1/component1.component';
import { TestDefaultImageComponent } from './test-default-image/test-default-image.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'component1', component: Component1Component },
  { path: 'business-card', component: BusinessCardComponent },
  { path: 'cv', component: CvComponent },
  { path: 'test-default-image', component: TestDefaultImageComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: '', redirectTo: '/cv', pathMatch: 'full' }, // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
