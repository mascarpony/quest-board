import { Component, Input } from '@angular/core';
import { IQuest } from '../../shared/quest';
import { QuestService } from '../../shared/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  @Input() quest: IQuest;
  constructor(private questService: QuestService) {}

  public acceptQuest() {
    this.quest.isAccepted = true;
    this.questService.updateQuest(this.quest).subscribe();
  }
}
