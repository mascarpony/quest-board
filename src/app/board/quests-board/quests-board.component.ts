import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';

@Component({
  selector: 'app-quests-board',
  templateUrl: './quests-board.component.html',
  styleUrls: ['./quests-board.component.scss']
})
export class QuestsBoardComponent implements OnInit {
  quests: IQuest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = quests.filter((value) => !value.isAccepted);
        }
      });
  }

}
