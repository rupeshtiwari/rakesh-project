import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidPackageDialogComponent } from './bid-package-dialog.component';

describe('BidPackageDialogComponent', () => {
  let component: BidPackageDialogComponent;
  let fixture: ComponentFixture<BidPackageDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BidPackageDialogComponent]
    });
    fixture = TestBed.createComponent(BidPackageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
