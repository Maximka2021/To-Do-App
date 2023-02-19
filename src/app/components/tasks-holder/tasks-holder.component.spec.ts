import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksHolderComponent } from './tasks-holder.component';

describe('TasksHolderComponent', () => {
  let component: TasksHolderComponent;
  let fixture: ComponentFixture<TasksHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
