import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsDetailComponent } from './moments-detail.component';

describe('MomentsDetailComponent', () => {
  let component: MomentsDetailComponent;
  let fixture: ComponentFixture<MomentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
