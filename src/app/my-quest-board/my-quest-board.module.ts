import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyQuestBoardRoutingModule } from "./my-quest-board-routing.module";
import { MyQuestBoardComponent } from "./my-quest-board.component";
import { SharedModule } from "../shared/shared.module";
import { BoardModule } from "../board/board.module";

@NgModule({
  declarations: [MyQuestBoardComponent],
  imports: [CommonModule, MyQuestBoardRoutingModule, BoardModule, SharedModule]
})
export class MyQuestModule {}
