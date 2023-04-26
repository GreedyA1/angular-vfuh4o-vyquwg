import { Component, Type } from '@angular/core';
import { newComponent } from './newComponent.component';
import { newComponent2 } from './newComponent2.component';

export interface ExampleTab {
  label: string;
  content: string;
  component: Type<any>;
}

/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'tab-group-async-example',
  templateUrl: 'tab-group-async-example.html',
})
export class TabGroupAsyncExample {
  asyncTabs: ExampleTab[];

  constructor() {
    this.asyncTabs = [
      { label: 'First', content: 'Content 1', component: newComponent },
      { label: 'Second', content: 'Content 2', component: newComponent },
      { label: 'Third', content: 'Content 3', component: newComponent2 },
      { label: 'Third', content: 'Content 4', component: newComponent2 },
      { label: 'Third', content: 'Content 5', component: newComponent2 },
      { label: 'Third', content: 'Content 6', component: newComponent },
      { label: 'Third', content: 'Content 7', component: newComponent },
    ];
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
