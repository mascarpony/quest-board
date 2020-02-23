import { Pipe, PipeTransform } from '@angular/core';
import {IQuest} from '../quest';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(quests: IQuest[], filter: string = ''): IQuest[] {
    switch (filter.toLocaleLowerCase()) {
      case `accepted`:
        return quests.filter(quest => quest.isAccepted)
      case `!accepted`:
        return quests.filter(quest => !quest.isAccepted);
      default:
        return quests;
    }
  }
}
