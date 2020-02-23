import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuest } from './quest';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';

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

  getAllQuests(): Observable<IQuest[]> {
    return this.quests.asObservable();
  }

  getAcceptedQuests(): Observable<IQuest[]> {
    return this.quests.asObservable().pipe(map(quests => quests.filter(quest => quest.isAccepted)));
  }

  getAvailableQuests(): Observable<IQuest[]> {
    return this.quests.asObservable().pipe(map(quests => quests.filter(quest => !quest.isAccepted)));
  }

  addQuest(quest: IQuest): Observable<IQuest> {
    return this.http
      .post<IQuest>(BASIC_URL, quest)
      .pipe(tap(newQuest => {
        const updatedQuests = [...this.quests.getValue(), newQuest];
        this.quests.next(updatedQuests);
      }));
  }

  acceptQuest(questId: number): void {
    this.http
      .patch<IQuest>(`${BASIC_URL}/${questId}`, { isAccepted: true })
      .pipe(
        tap(acceptedQuest => {
          const updatedQuests = this.quests.getValue().map(quest => {
            if (quest.id === acceptedQuest.id) {
              return acceptedQuest;
            }
            return quest;
          });
          this.quests.next(updatedQuests);
        })
      ).subscribe();
  }
}
