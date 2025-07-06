import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'tm-rich-text-editor',
  templateUrl: './tm-rich-text-editor.component.html',
  styleUrls: ['./tm-rich-text-editor.component.css']
})
export class TmRichTextEditorComponent {
  
  @ViewChild('editor') editor!: ElementRef<HTMLDivElement>;

  public isBoldActive = signal(false);
  public isItalicActive = signal(false);
  public isUnderlineActive = signal(false);

  setBold() {
    this.editor.nativeElement.focus();
    document.execCommand('bold');
    this.updateActiveStyles();
  }

  setItalic() {
    this.editor.nativeElement.focus();
    document.execCommand('italic');
    this.updateActiveStyles();
  }

  setUnderline() {
    this.editor.nativeElement.focus();
    document.execCommand('underline');
    this.updateActiveStyles();
  }

  updateActiveStyles() {
    this.isBoldActive.set(document.queryCommandState('bold'));
    this.isItalicActive.set(document.queryCommandState('italic'));
    this.isUnderlineActive.set(document.queryCommandState('underline'));
  }

  onSelectionChange() {
    this.updateActiveStyles();
  }
}
