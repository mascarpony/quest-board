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
  isFetching = false;

  constructor(private questService: QuestService) {}

  toggleQuest(status): void {
    this.isFetching = true;
    this.questService.updateQuest({
      ...this.quest,
      isAccepted: status
    }).subscribe(
      () => { this.isFetching = false; },
      () => {
        this.isFetching = false;
        alert('Something went wrong, please try again later...');
      }
    );
  }
}
