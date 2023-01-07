import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsBoxComponent } from './sns-box.component';

describe('SnsBoxComponent', () => {
  let component: SnsBoxComponent;
  let fixture: ComponentFixture<SnsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
