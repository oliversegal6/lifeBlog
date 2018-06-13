import { Component } from '@angular/core';
import {EditorConfig} from './editormd/director/model/editor-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Life Blog';
  conf = new EditorConfig();
  editorInstance: any;

  onComplate(editorInstance: any) {
    this.editorInstance = editorInstance;
  }
}
