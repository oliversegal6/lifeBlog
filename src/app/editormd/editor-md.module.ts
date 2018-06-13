import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorMdDirective} from './director/editor-md.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [EditorMdDirective],
  exports: [EditorMdDirective],
  bootstrap: [EditorMdModule]
})
export class EditorMdModule {
}
