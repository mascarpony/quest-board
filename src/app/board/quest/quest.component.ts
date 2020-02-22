import { Component, Input } from '@angular/core';
import { IQuest } from '../../shared/quest';
import { QuestService } from 'src/app/shared/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  @Input() quest: IQuest;

  constructor(
    private questService: QuestService
  ) {}

  public acceptQuest(): void {
    const acceptedQuest = {
      ...this.quest,
      isAccepted: true,
    };
    this.questService.acceptQuest(acceptedQuest)
      .subscribe(() => undefined);
  }
}
