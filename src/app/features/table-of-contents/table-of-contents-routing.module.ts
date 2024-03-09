import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleBacklogSAComponent } from './pages';

const routes: Routes = [
  // { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: '', component: SimpleBacklogSAComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableOfContentsRoutingModule {}
