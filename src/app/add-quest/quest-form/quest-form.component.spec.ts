import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestFormComponent } from './quest-form.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuestFormComponent', () => {
  let component: QuestFormComponent;
  let fixture: ComponentFixture<QuestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [ QuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestFormComponent);
    component = fixture.componentInstance;
  });

  it('should create QuestFormComponent', () => {
    expect(component).toBeTruthy();
  });
});
