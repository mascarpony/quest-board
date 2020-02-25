import { Component, OnInit, Input } from '@angular/core';
import { QuestService } from '../../shared/quest.service';
import { IQuest } from '../../shared/quest';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quests-board',
  templateUrl: './quests-board.component.html',
  styleUrls: ['./quests-board.component.scss']
})
export class QuestsBoardComponent implements OnInit {
  quests: IQuest[] = [];

  constructor(
    private questService: QuestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.questService.getQuests().subscribe(quests => {
        if (quests && quests.length) {
          this.quests = quests.filter(quest =>
            data.onlyAccepted ? quest.isAccepted : !quest.isAccepted
          );
        }
      });
    });
  }
}
