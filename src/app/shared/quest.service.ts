import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IQuest } from "./quest";
import { BehaviorSubject, Observable } from "rxjs";
import { take, tap } from "rxjs/operators";

const BASIC_URL = "http://localhost:3000/quests";

@Injectable({
  providedIn: "root"
})
export class QuestService {
  private quests: BehaviorSubject<IQuest[]> = new BehaviorSubject<IQuest[]>([]);

  constructor(private http: HttpClient) {
    this.http
      .get<IQuest[]>(BASIC_URL)
      .pipe(take(1))
      .subscribe(quests => this.quests.next(quests));
  }

  getQuests(): Observable<IQuest[]> {
    return this.quests.asObservable();
  }

  addQuest(quest: IQuest): Observable<IQuest> {
    return this.http.post<IQuest>(BASIC_URL, quest).pipe(
      tap(newQuest => {
        const updatedQuests = [...this.quests.getValue(), newQuest];
        this.quests.next(updatedQuests);
      })
    );
  }

  acceptQuest(id: number): Observable<IQuest> {
    const acception = {
      isAccepted: true
    };

    return this.http.patch<IQuest>(`${BASIC_URL}/${id}`, acception).pipe(
      tap(newQuest => {
        const newQuests = this.quests.getValue().map(quest =>
          quest.id === newQuest.id
            ? {
                ...quest,
                ...acception
              }
            : quest
        );
        this.quests.next(newQuests);
      })
    );
  }
}
