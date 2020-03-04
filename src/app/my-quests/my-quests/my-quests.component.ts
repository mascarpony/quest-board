import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';

@Component({
  selector: 'app-quests-board',
  templateUrl: './my-quests.component.html',
  styleUrls: ['./my-quests.component.scss']
})
export class MyQuestsComponent implements OnInit {
  quests: IQuest[] = [];
  isNoQuestsAccepted: boolean;

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = quests;
          this.isNoQuestsAccepted = quests.every(item => !item.isAccepted);
        }
      });
  }
}
