import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconshowComponent } from './iconshow.component';

describe('IconshowComponent', () => {
  let component: IconshowComponent;
  let fixture: ComponentFixture<IconshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
