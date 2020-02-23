import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IQuest } from '../../shared/quest';
import { QuestService } from 'src/app/shared/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  constructor(private QuestService: QuestService) {}
  @Input() quest: IQuest;

  toggleAccept(quest: IQuest) {
    this.QuestService.updateQuest({...quest, isAccepted: !quest.isAccepted})
    .subscribe(() => quest.isAccepted = !quest.isAccepted)
  }
}
