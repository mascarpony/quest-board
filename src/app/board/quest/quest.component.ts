import { Component, Input } from '@angular/core';
import { IQuest } from '../../shared/quest';
import { QuestService } from '../../shared/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  constructor(private questService: QuestService) {}
  public accept(): void {
    this.questService.acceptQuest(this.quest.id)
      .subscribe(() => undefined);
  }

  @Input() quest: IQuest;
}
