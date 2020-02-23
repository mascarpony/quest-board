import { async, TestBed } from '@angular/core/testing';
import { QuestService } from './quest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuestService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  it('QuestService should be created', () => {
    const service: QuestService = TestBed.get(QuestService);
    expect(service).toBeTruthy();
  });
});
