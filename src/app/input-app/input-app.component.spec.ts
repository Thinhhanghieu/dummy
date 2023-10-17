import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAppComponent } from './input-app.component';

describe('InputAppComponent', () => {
  let component: InputAppComponent;
  let fixture: ComponentFixture<InputAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAppComponent]
    });
    fixture = TestBed.createComponent(InputAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
