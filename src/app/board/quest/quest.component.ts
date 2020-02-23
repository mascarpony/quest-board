import { Component, Input } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  @Input() quest: IQuest;

  constructor(private questService: QuestService) {}

  accept() {
    this.questService.acceptQuest(this.quest.id);
  }
}
