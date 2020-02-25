import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuestService } from '../../shared/quest.service';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.component.html',
  styleUrls: ['./quest-form.component.scss']
})

export class QuestFormComponent {
  questForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    customer: ['', Validators.required],
    complexity: [1, Validators.required],
    reward: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private questService: QuestService,
    ) { }

  onSubmit() {
    const reward = this.questForm.value.reward.split(',').map(item => item.trim());
    this.questService.addQuest({...this.questForm.value, reward, isAccepted: false})
      .subscribe(responce => {
        this.questForm.reset();
      });
  }

}
