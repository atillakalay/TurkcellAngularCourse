import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangeHookComponent } from './ng-onchange-hook.component';

describe('NgOnchangeHookComponent', () => {
  let component: NgOnchangeHookComponent;
  let fixture: ComponentFixture<NgOnchangeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnchangeHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnchangeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
