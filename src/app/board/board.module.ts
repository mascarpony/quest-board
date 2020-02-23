import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { QuestComponent } from './quest/quest.component';
import { SharedModule } from '../shared/shared.module';
import { MyQuestsBoardComponent } from './my-quests-board/my-quests-board.component';


@NgModule({
  declarations: [QuestsBoardComponent, MyQuestsBoardComponent, QuestComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
  ]
})
export class BoardModule { }
