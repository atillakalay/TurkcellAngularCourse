import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveType2Component } from './reactive-type2.component';

describe('ReactiveType2Component', () => {
  let component: ReactiveType2Component;
  let fixture: ComponentFixture<ReactiveType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveType2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
