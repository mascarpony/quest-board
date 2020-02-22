import { Component, OnInit, OnDestroy } from '@angular/core';
import { IQuest } from 'src/app/shared/quest';
import { QuestService } from 'src/app/shared/quest.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-quests',
  templateUrl: './my-quests.component.html',
  styleUrls: ['./my-quests.component.scss']
})
export class MyQuestsComponent implements OnInit, OnDestroy {
  quests: IQuest[] = [];

  private subscription: Subscription;

  constructor(private questService: QuestService) { }

  ngOnInit(): void {
    this.subscription = this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = this.acceptedQuests(quests);
        }
      })
  }
  
  private acceptedQuests(quests: IQuest[]): IQuest[] | [] {
    return quests.filter(quest => quest.isAccepted);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
