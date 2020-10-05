import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";
import { BlocksComponent } from "./blocks/blocks.component";
import { CodePreviewComponent } from "./code-preview/code-preview.component";
import { GameInfoComponent } from "./game-info/game-info.component";
import { InsteadComponent } from "./instead/instead.component";
import "@clr/core/icon/register";


@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    GameInfoComponent,
    InsteadComponent,
    CodePreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
