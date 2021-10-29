import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontationDialogComponent } from './dontation-dialog.component';

describe('DontationDialogComponent', () => {
  let component: DontationDialogComponent;
  let fixture: ComponentFixture<DontationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DontationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DontationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
