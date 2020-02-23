import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';

@Component({
  selector: 'app-my-quests-board',
  templateUrl: './my-quests-board.component.html',
  styleUrls: ['./my-quests-board.component.scss']
})
export class MyQuestsBoardComponent implements OnInit {
  quests: IQuest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = quests.filter((val) => val.isAccepted);
        }
      });
  }

}
