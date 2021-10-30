import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardPageComponent } from './project-card-page.component';

describe('ProjectCardPageComponent', () => {
  let component: ProjectCardPageComponent;
  let fixture: ComponentFixture<ProjectCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
