import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainAboutMeComponent } from './explain-about-me.component';

describe('ExplainAboutMeComponent', () => {
  let component: ExplainAboutMeComponent;
  let fixture: ComponentFixture<ExplainAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
