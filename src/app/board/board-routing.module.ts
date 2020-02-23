import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { MyQuestsComponent } from './my-quests/my-quests.component';

const routes: Routes = [
  {
    path: 'board',
    component: QuestsBoardComponent
  },
  {
    path: 'my-quests',
    component: MyQuestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
