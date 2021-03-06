import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';
import {EditorConfig} from './model/editor-config';

declare var editormd: any;

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {
  @Input() editormdConfig: EditorConfig;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete: EventEmitter<any> = new EventEmitter();
  edit: any;

  ngAfterViewInit(): void {
    this.edit = editormd(this.id, this.editormdConfig);
    this.onComplete.emit(this.edit);
  }

  constructor(@Attribute('id') private id: string) {
  }
}
