import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsDetailComponent } from './sounds-detail.component';

describe('SoundsDetailComponent', () => {
  let component: SoundsDetailComponent;
  let fixture: ComponentFixture<SoundsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
