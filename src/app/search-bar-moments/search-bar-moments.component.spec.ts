import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarMomentsComponent } from './search-bar-moments.component';

describe('SearchBarMomentsComponent', () => {
  let component: SearchBarMomentsComponent;
  let fixture: ComponentFixture<SearchBarMomentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarMomentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
