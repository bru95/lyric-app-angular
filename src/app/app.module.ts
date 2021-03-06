import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { SearchComponent } from './features/search/search.component';
import { LyricWrapperComponent } from './features/lyric-wrapper/lyric-wrapper.component';
import { FootrComponent } from './features/footr/footr.component';
import { LyricListComponent } from './features/lyric-wrapper/lyric-list/lyric-list.component';
import { LyricLetterComponent } from './features/lyric-wrapper/lyric-letter/lyric-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LyricWrapperComponent,
    FootrComponent,
    LyricListComponent,
    LyricLetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
