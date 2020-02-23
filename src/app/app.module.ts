import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from './board/board.module';
import { AddQuestModule } from './add-quest/add-quest.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MyQuestsModule } from './my-quests/my-quests.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    BoardModule,
    AddQuestModule,
    MyQuestsModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
