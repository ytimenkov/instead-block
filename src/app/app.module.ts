import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";
import { BlocksComponent } from "./blocks/blocks.component";
import { GameInfoComponent } from './game-info/game-info.component';



@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
