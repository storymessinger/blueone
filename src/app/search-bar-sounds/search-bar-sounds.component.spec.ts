import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarSoundsComponent } from './search-bar-sounds.component';

describe('SearchBarSoundsComponent', () => {
  let component: SearchBarSoundsComponent;
  let fixture: ComponentFixture<SearchBarSoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarSoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
