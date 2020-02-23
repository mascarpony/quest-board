import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyQuestsRoutingModule } from './my-quests-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyQuestsBoardComponent } from './my-quests-board/my-quests-board.component';
import { MyQuestComponent } from './my-quest/my-quest.component';


@NgModule({
  declarations: [MyQuestsBoardComponent, MyQuestComponent],
  imports: [
    CommonModule,
    MyQuestsRoutingModule,
    SharedModule,
  ]
})
export class MyQuestsModule { }
