import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsNavComponent } from './rooms-nav.component';

describe('RoomsNavComponent', () => {
  let component: RoomsNavComponent;
  let fixture: ComponentFixture<RoomsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
