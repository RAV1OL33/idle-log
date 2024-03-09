import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsRoutingModule } from './table-of-contents-routing.module';
import { SimpleBacklogSAComponent } from './pages/simple-backlog/simple-backlog.component';

@NgModule({
  imports: [
    CommonModule,
    TableOfContentsRoutingModule,
    //pages
    SimpleBacklogSAComponent,
  ],
})
export class TableOfContentsModule {}
