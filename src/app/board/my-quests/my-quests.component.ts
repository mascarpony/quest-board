import { Component, OnInit } from "@angular/core";
import { QuestService } from "../../shared/quest.service";
import { IQuest } from "../../shared/quest";

@Component({
  selector: "app-my-quests",
  templateUrl: "./my-quests.component.html",
  styleUrls: ["./my-quests.component.scss"]
})
export class MyQuestsComponent implements OnInit {
  acceptedQuests: IQuest[] = [];

  constructor(private questService: QuestService) {}

  ngOnInit() {
    this.questService.getQuests().subscribe(quests => {
      if (quests && quests.length) {
        this.acceptedQuests = quests.filter(quest => quest.isAccepted);
      }
    });
  }
}
