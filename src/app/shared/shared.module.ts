import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownRenderComponent } from './components/markdown-render/markdown-render.component';
import { MarkdownModule } from 'ngx-markdown';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    DragulaModule.forRoot(),
  ],
  declarations: [
    MarkdownRenderComponent,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownRenderComponent,
    DragulaModule
  ],
  entryComponents: []
})
export class SharedModule {
}
