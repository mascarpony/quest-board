import { Component, OnInit } from "@angular/core";
import { QuestService } from "../shared/quest.service";
import { IQuest } from "../shared/quest";

@Component({
  selector: "app-my-quest-board",
  templateUrl: "./my-quest-board.component.html",
  styleUrls: ["./my-quest-board.component.scss"]
})
export class MyQuestBoardComponent implements OnInit {
  quests: IQuest[] = [];

  constructor(private questService: QuestService) {}

  ngOnInit() {
    this.questService.getQuests().subscribe(quests => {
      if (quests && quests.length) {
        this.quests = quests.filter(temp => temp.isAccepted);
      }
    });
  }
}
