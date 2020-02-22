import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quests-board',
  templateUrl: './quests-board.component.html',
  styleUrls: ['./quests-board.component.scss']
})
export class QuestsBoardComponent implements OnInit, OnDestroy {
  quests: IQuest[] = [];

  public isThereQuests: boolean = false;

  private subscription: Subscription;

  constructor(private questService: QuestService) { }

  ngOnInit(): void {
    this.subscription = this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = this.unacceptedQuests(quests);
          this.isThereQuests = this.quests.length > 0;
        }
      })
  }

  private unacceptedQuests(quests: IQuest[]): IQuest[] | [] {
    return quests.filter(quest => !quest.isAccepted);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
