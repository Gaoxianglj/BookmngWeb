import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingListUserComponent } from './ranking-list-user.component';

describe('RankingListUserComponent', () => {
  let component: RankingListUserComponent;
  let fixture: ComponentFixture<RankingListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
