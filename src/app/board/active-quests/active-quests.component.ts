import { Component, OnInit } from '@angular/core';
import { IQuest } from "../../shared/quest";
import { QuestService } from "../../shared/quest.service";

@Component({
  selector: 'app-active-quests',
  templateUrl: './active-quests.component.html',
  styleUrls: ['./active-quests.component.scss']
})


export class ActiveQuestsComponent implements OnInit {

  constructor( private questService: QuestService ) { }
  activeQuests:IQuest[] = [];

  ngOnInit() {

    this.questService.getQuests().subscribe(questItems => {
      if (questItems) {
        this.activeQuests = questItems.filter(questItem => questItem.isAccepted);
      }
    });

  }

}
