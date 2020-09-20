import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly/core';
import { loadWorkspace, localStorageKey } from 'src/files';
import { InsteadObject, InsteadRoom } from 'src/objects';
import { createInsteadTheme, createToolBox } from 'src/toolbox';


@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  workspace?: Blockly.Workspace;

  constructor() { }

  ngOnInit(): void {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: createToolBox(),
      theme: createInsteadTheme(),
      move: { scrollbars: true, wheel: true },
      zoom: { controls: true, },
    });

    this.workspace.addChangeListener((e: any) => { InsteadObject.objectLifecycleListener(e) });
    this.workspace.addChangeListener((e: any) => { InsteadRoom.objectLifecycleListener(e) });

    if (window.localStorage[localStorageKey]) {
      console.log("Loading saved workspace");
      loadWorkspace(window.localStorage[localStorageKey], this.workspace);
    } else {
      console.log("Loading default workspace");
      const file = require("data/playground.xml").default;
      const client = new XMLHttpRequest();
      const workspace = this.workspace;
      client.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
          loadWorkspace(this.responseText, workspace);
        }
      };
      client.open("GET", file, true);
      client.send();
    }
  }

}
