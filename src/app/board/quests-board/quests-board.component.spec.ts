import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestsBoardComponent } from './quests-board.component';
import { SharedModule } from '../../shared/shared.module';
import { QuestComponent } from '../../board/quest/quest.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuestsBoardComponent', () => {
  let component: QuestsBoardComponent;
  let fixture: ComponentFixture<QuestsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientTestingModule ],
      declarations: [ QuestsBoardComponent, QuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestsBoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
