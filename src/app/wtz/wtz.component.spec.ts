import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WTZComponent } from './wtz.component';

describe('WTZComponent', () => {
  let component: WTZComponent;
  let fixture: ComponentFixture<WTZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WTZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WTZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
