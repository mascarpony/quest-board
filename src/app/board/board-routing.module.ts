import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { MyQuestsBoardComponent } from './my-quests-board/my-quests-board.component';


const routes: Routes = [{
  path: 'board',
  component: QuestsBoardComponent,
}, {
  path: 'my-quests',
  component: MyQuestsBoardComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
