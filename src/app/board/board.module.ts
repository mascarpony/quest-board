import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { QuestComponent } from './quest/quest.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [QuestsBoardComponent, QuestComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
  ],
  exports: [QuestComponent]
})
export class BoardModule { }
