import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';
import { Location } from '@angular/common'

@Component({
  selector: 'app-quests-board',
  templateUrl: './quests-board.component.html',
  styleUrls: ['./quests-board.component.scss']
})
export class QuestsBoardComponent implements OnInit {
  quests: IQuest[] = [];
  questsType:Boolean = false;

  constructor(private questService: QuestService, private location: Location) {
  }

  ngOnInit() {
    if (this.location.path() === '/my-quests') {
      this.questsType = true;
    } else if (this.location.path() === '/board'){
      this.questsType = false;
    }

    this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = quests.filter(el => el.isAccepted === this.questsType);
        }
      });
  }
}
