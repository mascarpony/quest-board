import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestsBoardComponent } from './quests-board.component';

describe('QuestsBoardComponent', () => {
  let component: QuestsBoardComponent;
  let fixture: ComponentFixture<QuestsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
