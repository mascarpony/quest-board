import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestFormComponent } from './quest-form/quest-form.component';


const routes: Routes = [{
  path: 'add-quest',
  component: QuestFormComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddQuestRoutingModule { }
