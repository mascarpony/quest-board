import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuest } from './quest';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const BASIC_URL = 'http://localhost:3000/quests';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  private quests: BehaviorSubject<IQuest[]> = new BehaviorSubject<IQuest[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<IQuest[]>(BASIC_URL)
      .pipe(take(1))
      .subscribe(quests => this.quests.next(quests));
  }

  getQuests(): Observable<IQuest[]> {
    return this.quests.asObservable();
  }

  completeQuest(id: number): Observable<IQuest> {
    return this.http.patch<IQuest>(`${BASIC_URL}/${id}`, {isAccepted: true})
    .pipe(tap (updatedQuest => {

      let readyToUpQuest = this.quests.getValue().find(quest => quest.id == updatedQuest.id);
      readyToUpQuest.isAccepted = true;

      let updatedQuests = [...this.quests.getValue()];
      this.quests.next(updatedQuests);

    }));
  }

  addQuest(quest: IQuest): Observable<IQuest> {
    return this.http.post<IQuest>(BASIC_URL, quest).pipe(tap(newQuest => {
        const updatedQuests = [...this.quests.getValue(), newQuest];
        console.log(this.quests);
        this.quests.next(updatedQuests);
      }));
  }
}
