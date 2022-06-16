import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLogComponent } from './the-log.component';

describe('TheLogComponent', () => {
  let component: TheLogComponent;
  let fixture: ComponentFixture<TheLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
