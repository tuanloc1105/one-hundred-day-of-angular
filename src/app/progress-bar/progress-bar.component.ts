import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnChanges, OnInit {
  constructor() {
    console.log('================== this is constructor ==================');
    console.log({
      // progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
    console.log('====================================');
  }

  // Nhận giá trị khi khởi tạo ==> Do chỉ khởi tạo 1 lần nên không khuyến khích
  ngOnInit(): void {
    console.log('================== this is ngOnInit ==================');
    console.log({
      // progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
    console.log('====================================');
  }

  // Nhận giá trị khi thay đổi ==> Có thể dùng onChange để thực hiện validation
  ngOnChanges(changes: SimpleChanges): void {
    console.log('================== this is ngOnChanges ==================');
    console.log({
      // progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
    console.log('====================================');
  }

  @Input() set progress(value: Number) {
    console.log('================== this is getter ==================');
    console.log(this._progress);
    console.log('====================================');
    this._progress = value
  }

  private _progress: Number = 50;

  get progress(): Number {
    return this._progress
  }

  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
}
