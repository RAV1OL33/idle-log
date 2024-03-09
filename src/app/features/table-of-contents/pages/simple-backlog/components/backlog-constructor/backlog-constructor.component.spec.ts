import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogConstructorComponent } from './backlog-constructor.component';

describe('BacklogConstructorComponent', () => {
  let component: BacklogConstructorComponent;
  let fixture: ComponentFixture<BacklogConstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BacklogConstructorComponent]
    });
    fixture = TestBed.createComponent(BacklogConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
