import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { QuestComponent } from './quest/quest.component';
import { MyQuestsComponent } from './my-quests/my-quests.component';
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from '../utils/loader/loader.component';


@NgModule({
  declarations: [
    QuestsBoardComponent,
    MyQuestsComponent,
    QuestComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
  ]
})
export class BoardModule { }
