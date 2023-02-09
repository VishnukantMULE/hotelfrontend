import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcrudComponent } from './hotelcrud.component';

describe('HotelcrudComponent', () => {
  let component: HotelcrudComponent;
  let fixture: ComponentFixture<HotelcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
