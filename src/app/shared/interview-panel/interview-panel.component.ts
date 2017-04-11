import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { parse } from 'toml';
import { Converter } from "showdown/dist/showdown";

import { IInterviewPanel } from './interview-panel.interfaces';

declare var showdown: any;

@Component({
  selector: 'interview-panel',
  template: `
    <ace-editor 
    [autoUpdateContent]="true"
    (textChanged)="parseTOML($event);"
    #editor style="height:150px;"
    ></ace-editor>

    <div *ngFor="let quest of data?.problem; let idx = index;">
      <b>Ques {{idx + 1}}.</b><markdown>
        <div [innerHTML]="sanitizer.bypassSecurityTrustHtml(converter.makeHtml(quest?.question))"
        ></div>
      </markdown>
    </div>
  `
})
export class InterviewPanelComponent {

  data: IInterviewPanel.InterviewTest;
  converter: Converter;

  @ViewChild('editor') editor;
  text: string = "";

  constructor(public sanitizer: DomSanitizer) { }

  ngAfterViewInit() {

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor) {

      }
    })

    this.converter = new Converter();
  }

  parseTOML(term: string) {
    try {
      this.data = <IInterviewPanel.InterviewTest>(parse(term));

    } catch (error) {
      console.log(error);
    }
  }
}