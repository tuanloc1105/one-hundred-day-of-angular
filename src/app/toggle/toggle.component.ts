import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleChecked(): boolean {
    // this.checked = !this.checked;
    return !this.checked;
  }

}
