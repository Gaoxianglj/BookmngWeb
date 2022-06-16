import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBackComponent } from './book-back.component';

describe('BookBackComponent', () => {
  let component: BookBackComponent;
  let fixture: ComponentFixture<BookBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
