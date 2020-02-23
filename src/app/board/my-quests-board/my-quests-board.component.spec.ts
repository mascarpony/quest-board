import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestsBoardComponent } from './my-quests-board.component';

describe('MyQuestsBoardComponent', () => {
  let component: MyQuestsBoardComponent;
  let fixture: ComponentFixture<MyQuestsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
