import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectHomeComponent } from './create-project-home.component';

describe('CreateProjectHomeComponent', () => {
  let component: CreateProjectHomeComponent;
  let fixture: ComponentFixture<CreateProjectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
