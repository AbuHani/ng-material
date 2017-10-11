import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';

export const ROUTES: Routes = [
  { path: 'demo/:username', component: ToolbarDemoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarDemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
