import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPageComponent } from './work-order-page.component';

describe('WorkOrderPageComponent', () => {
  let component: WorkOrderPageComponent;
  let fixture: ComponentFixture<WorkOrderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderPageComponent]
    });
    fixture = TestBed.createComponent(WorkOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
