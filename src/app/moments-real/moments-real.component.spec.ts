import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsRealComponent } from './moments-real.component';

describe('MomentsRealComponent', () => {
  let component: MomentsRealComponent;
  let fixture: ComponentFixture<MomentsRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentsRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentsRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
