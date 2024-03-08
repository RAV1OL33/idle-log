import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'backlog', pathMatch: 'full' },
  {
    path: 'backlog',

    loadChildren: () =>
      import('./features/table-of-contents/table-of-contents.module').then(
        (m) => m.TableOfContentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
