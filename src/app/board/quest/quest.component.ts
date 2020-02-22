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

  public isLoading: boolean = false;

  constructor(
    private questService: QuestService
  ) {}

  public acceptQuest(): void {
    this.isLoading = true;
    const acceptedQuest = {
      ...this.quest,
      isAccepted: true,
    };
    this.questService.updateQuest(acceptedQuest)
      .subscribe(
        () => this.isLoading = false,
        () => this.isLoading = false,
      );
    }
    
    public declineQuest(): void {
    this.isLoading = true;
    const declinedQuest = {
      ...this.quest,
      isAccepted: false,
    };
    this.questService.updateQuest(declinedQuest)
      .subscribe(
        () => this.isLoading = false,
        () => this.isLoading = false,
      );
  }
}
