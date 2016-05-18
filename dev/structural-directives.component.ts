import {Component} from 'angular2/core';

@Component({
    selector: 'my-structural-directives',
    template: `
    <section class="directive">
    <h2>*ngIf</h2>
    <div>
        Enter a number highr than 10
        <br>
        <input type="text" #number (keyup)="0">
      </div>
      <div *ngIf="number.value > 10">
        <h5>A heading</h5>
        Number is greater than 10
      </div>
    </section>
    <section class="directive">
        <h2>*ngFor</h2>
           <div>
              <ul>
                <li *ngFor="#item of list, #i = index">{{item}} {{i}}</li>
              </ul>
           </div>
    </section>

    <section class="directive">
        <h2>[ngSwitch]</h2>
        <div>
            Enter red, blue or green
            <br>
            <input type="text" #color (keyup)="0">
        </div>
        <div [ngSwitch]="color.value">
            <template [ngSwitchWhen]="'red'"><span style="color: red">
            Color is Red
            </span></template>
              <template [ngSwitchWhen]="'blue'"><span style="color: blue">
            Color is Red
            </span></template>
              <template [ngSwitchWhen]="'green'"><span style="color: green\">
            Color is Red
            </span></template>
              <template ngSwitchDefault><span>
            Dont know this color
            </span></template>
        </div>
    </section>

    `,

})
export class StructuralDirectives {
    list = ['Apple', 'Milk', 'Bread'];
}