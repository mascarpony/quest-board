import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveQuestsComponent } from './active-quests.component';

describe('ActiveQuestsComponent', () => {
  let component: ActiveQuestsComponent;
  let fixture: ComponentFixture<ActiveQuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveQuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
