import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestBoardComponent } from './my-quest-board.component';

describe('MyQuestBoardComponent', () => {
  let component: MyQuestBoardComponent;
  let fixture: ComponentFixture<MyQuestBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
