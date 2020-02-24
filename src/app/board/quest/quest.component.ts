import { Component, Input, Output } from '@angular/core';
import { IQuest } from '../../shared/quest';
import { QuestService } from '../../shared/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  constructor(private questService: QuestService) { }
  @Input() quest: IQuest;

  onClick(quest) {
    this.questService.acceptQuest({...quest, isAccepted: true });
  }
}
