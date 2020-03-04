import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyQuestsComponent } from './my-quests.component';
import { SharedModule } from '../../shared/shared.module';
import { QuestComponent } from '../../board/quest/quest.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyQuestsComponent', () => {
  let component: MyQuestsComponent;
  let fixture: ComponentFixture<MyQuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientTestingModule ],
      declarations: [ MyQuestsComponent, QuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestsComponent);
    component = fixture.componentInstance;
  });

  it('MyQuestsComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
