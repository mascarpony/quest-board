import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyQuestsBoardComponent } from './my-quests-board/my-quests-board.component';


const routes: Routes = [{
  path: 'my-quests',
  component: MyQuestsBoardComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyQuestsRoutingModule { }
