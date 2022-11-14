import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCheckboxComponent } from './language-checkbox.component';

describe('LanguageCheckboxComponent', () => {
  let component: LanguageCheckboxComponent;
  let fixture: ComponentFixture<LanguageCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
