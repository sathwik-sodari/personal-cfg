import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMenteeComponent } from './register-mentee.component';

describe('RegisterMenteeComponent', () => {
  let component: RegisterMenteeComponent;
  let fixture: ComponentFixture<RegisterMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMenteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
