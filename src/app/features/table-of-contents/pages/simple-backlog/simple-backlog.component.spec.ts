import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBacklogComponent } from './simple-backlog.component';

describe('SimpleBacklogComponent', () => {
  let component: SimpleBacklogComponent;
  let fixture: ComponentFixture<SimpleBacklogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleBacklogComponent]
    });
    fixture = TestBed.createComponent(SimpleBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
