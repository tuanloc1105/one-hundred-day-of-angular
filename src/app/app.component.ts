import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: String =
    'one-hundred-day-of-angular, learn with Angular version ' + VERSION.major;

  isDanger = false;
  isWarning = false;

  currentProgress = 88;

  dangerColor = 'black';
  warningColor = 'none';

  classes = 'box red-border yellow-background';

  public toggleDanger(): void {
    this.isDanger = !this.isDanger;
    this.dangerColor = this.isDanger ? 'red' : 'black';
  }

  public toggleWarning(): void {
    this.isWarning = !this.isWarning;
    this.warningColor = this.isWarning ? 'yellow' : 'none';
  }

  public toggleCurrentProgess(): void {
    this.currentProgress = this.currentProgress + 1;
    if (this.currentProgress == 100) {
      this.currentProgress = 0;
    }
  }
}
