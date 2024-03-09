import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO add types
export const SHARED_COMPONENTS: any[] = [];

@NgModule({
  declarations: SHARED_COMPONENTS,
  imports: [
    // Angular modules
    CommonModule,
  ],
})
export class CoreModule {}
