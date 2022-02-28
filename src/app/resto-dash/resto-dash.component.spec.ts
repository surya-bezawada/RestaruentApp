import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoDashComponent } from './resto-dash.component';

describe('RestoDashComponent', () => {
  let component: RestoDashComponent;
  let fixture: ComponentFixture<RestoDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
