import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-hook',
  templateUrl: './ng-onchange-hook.component.html',
  styleUrls: ['./ng-onchange-hook.component.css']
})
export class NgOnchangeHookComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  @Input() count: number | undefined
}
