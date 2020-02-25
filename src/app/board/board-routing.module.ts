import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestsBoardComponent } from './quests-board/quests-board.component';
import { ActiveQuestsComponent } from './active-quests/active-quests.component';


const routes: Routes = [{
  path: 'board',
  component: QuestsBoardComponent,
},
{
  path: "quests",
  component: ActiveQuestsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
