import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyQuestsRoutingModule } from './my-quests-routing.module';
import { MyQuestsComponent } from './my-quests/my-quests.component';
import { SharedModule } from '../shared/shared.module';
import { BoardModule } from '../board/board.module';


@NgModule({
  declarations: [MyQuestsComponent],
  imports: [
    CommonModule,
    MyQuestsRoutingModule,
    BoardModule,
    SharedModule,
  ]
})
export class MyQuestsModule { }
