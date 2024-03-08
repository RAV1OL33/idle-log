import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleBacklogComponent } from './pages';

const routes: Routes = [
  // { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: '', component: SimpleBacklogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableOfContentsRoutingModule {}
