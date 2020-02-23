import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quests-board',
  templateUrl: './quests-board.component.html',
  styleUrls: ['./quests-board.component.scss']
})
export class QuestsBoardComponent implements OnInit {
  quests: IQuest[] = [];
  filter: string = '!accepted';
  constructor(
    private questService: QuestService,
    private location: Location,
  ) {this.location = location }

  ngOnInit() {
    if(this.location.path() === '/my-quests') {
      this.filter = 'accepted'
    };
    this.questService.getQuests()
      .subscribe(quests => {
        if (quests && quests.length) {
          this.quests = quests;
        }
      });
  }

}
