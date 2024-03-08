import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsRoutingModule } from './table-of-contents-routing.module';
import { SimpleBacklogComponent } from './pages/simple-backlog/simple-backlog.component';



@NgModule({
  declarations: [
    SimpleBacklogComponent,
  ],
  imports: [
    CommonModule, TableOfContentsRoutingModule
  ]
})
export class TableOfContentsModule { }
