import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestComponent } from './quest.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuestComponent', () => {
  let component: QuestComponent;
  let fixture: ComponentFixture<QuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientTestingModule ],
      declarations: [ QuestComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestComponent);
    component = fixture.componentInstance;
  });

  it('should create QuestComponent', () => {
    expect(component).toBeTruthy();
  });
});
