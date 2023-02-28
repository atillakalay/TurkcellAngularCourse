import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapassInputComponent } from './datapass-input.component';

describe('DatapassInputComponent', () => {
  let component: DatapassInputComponent;
  let fixture: ComponentFixture<DatapassInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapassInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
