import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { BoardRoutingModule } from './board-routing.module';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { QuestComponent } from './quest/quest.component';
import { MyQuestsComponent } from './my-quests/my-quests.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    QuestsBoardComponent,
    MyQuestsComponent,
    QuestComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BoardRoutingModule,
    SharedModule,
  ]
})
export class BoardModule { }
