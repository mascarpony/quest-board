import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { QuestComponent } from './quest/quest.component';
import { SharedModule } from '../shared/shared.module';
import { ActiveQuestsComponent } from "./active-quests/active-quests.component";


@NgModule({
  declarations: [QuestsBoardComponent, QuestComponent, ActiveQuestsComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
  ]
})
export class BoardModule { }
