import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyQuestsComponent } from '../my-quests/my-quests/my-quests.component';


const routes: Routes = [{
  path: 'my-quests',
  component: MyQuestsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyQuestsRoutingModule { }
