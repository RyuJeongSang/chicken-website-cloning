import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetiContainerComponent } from './competi-container.component';

describe('CompetiContainerComponent', () => {
  let component: CompetiContainerComponent;
  let fixture: ComponentFixture<CompetiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetiContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
