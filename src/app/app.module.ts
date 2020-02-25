import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BoardModule } from "./board/board.module";
import { AddQuestModule } from "./add-quest/add-quest.module";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { MyQuestModule } from "./my-quest-board/my-quest-board.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule,
    BoardModule,
    AppRoutingModule,
    AddQuestModule,
    MyQuestModule
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
