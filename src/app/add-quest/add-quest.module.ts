import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuestRoutingModule } from './add-quest-routing.module';
import { QuestFormComponent } from './quest-form/quest-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [QuestFormComponent],
  imports: [
    CommonModule,
    AddQuestRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AddQuestModule { }
