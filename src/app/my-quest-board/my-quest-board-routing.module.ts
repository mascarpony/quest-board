import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyQuestBoardComponent } from "./my-quest-board.component";

const routes: Routes = [
  {
    path: "my-quests",
    component: MyQuestBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyQuestBoardRoutingModule {}
