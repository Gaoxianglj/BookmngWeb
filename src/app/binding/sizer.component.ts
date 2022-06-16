import {
  Component,
  Input,
  Output,
  EventEmitter, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent {
    @Input()  size: number = 0;
    @Output() sizeChange = new EventEmitter<number>();

    dec() { this.resize(-1); }
    inc() { this.resize(+1); }

    resize(delta: number) {
      this.size = Math.min(40, Math.max(8, +this.size + delta));
      this.sizeChange.emit(this.size);
    }
  ngOnChanges(name:string,age:number): string {
    return `我叫${name}，我今年${age}岁`;
  }

}
