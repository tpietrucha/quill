import { Component, ViewChild } from '@angular/core'
import { QuillEditorComponent } from 'ngx-quill'
import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js' /* added emoji plugin */
import 'quill-mention' /* added mention plugin */
@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html'
})
export class MentionComponent {
  @ViewChild(QuillEditorComponent) editor: QuillEditorComponent
  content = ''

  modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      'mention': {
          allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
          onSelect: (item, insertItem) => {
              const editor = this.editor.quillEditor as Quill
              insertItem(item)
              // necessary because quill-mention triggers changes as 'api' instead of 'user'
              editor.insertText(editor.getLength() - 1, '', 'user')
          },
          source: (searchTerm, renderList) => {
              const values = [
                  {id: 1, value: 'Grzegorz Kaczor'},
                  {id: 2, value: 'Anna Szopinska'},
                  {id: 3, value: 'Tomasz Pietrucha'}
              ]

              if (searchTerm.length === 0) {
                  renderList(values, searchTerm)
              } else {
                  const matches = []

                  values.forEach((entry) => {
                      if (entry.value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                          matches.push(entry)
                      }
                  })
                  renderList(matches, searchTerm)
              }
          }
      }, /* added mention */
      'syntax': true,
      'toolbar': {
          container: ['emoji']
      }
  }
    addBindingCreated(quill) {
        quill.keyboard.addBinding({
            key: 'B',
            shiftKey: true
        }, (range, context) => {
            // tslint:disable-next-line:no-console
            console.log('KEYBINDING SHIFT + B', range, context)
        })
    }
}
