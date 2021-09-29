import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcountComponent } from './bookcount.component';

describe('BookcountComponent', () => {
  let component: BookcountComponent;
  let fixture: ComponentFixture<BookcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
