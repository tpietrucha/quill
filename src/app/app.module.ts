import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { QuillModule } from 'ngx-quill'
import { AppComponent } from './app.component'
import { BubbleEditorComponent } from './bubble-editor/bubble-editor.component'
import { EmojiComponent } from './emoji/emoji.component'
import { MentionComponent } from './mention/mention.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EmojiComponent,
    BubbleEditorComponent,
    MentionComponent
  ],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }
