import { Component } from '@angular/core';
import { TuiDataListModule } from '@taiga-ui/core';
import { BacklogConstructorSAComponent } from './components';

@Component({
  standalone: true,
  selector: 'app-simple-backlog',
  templateUrl: './simple-backlog.component.html',
  styleUrls: ['./simple-backlog.component.scss'],
  imports: [TuiDataListModule, BacklogConstructorSAComponent],
})
export class SimpleBacklogSAComponent {}
