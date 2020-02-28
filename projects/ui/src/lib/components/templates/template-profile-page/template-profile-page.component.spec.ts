import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProfilePageComponent } from './template-profile-page.component';

describe('TemplateProfilePageComponent', () => {
  let component: TemplateProfilePageComponent;
  let fixture: ComponentFixture<TemplateProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
