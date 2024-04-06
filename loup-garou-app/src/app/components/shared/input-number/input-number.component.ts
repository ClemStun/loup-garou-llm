import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  @Input() label = '';
  @Input() isAlternative = false;
  @Input() value!: number;

  @Output() valueEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  emitValue() {
    this.valueEmitter.emit(this.value);
  }

  reduceValue() {
    if (this.value > 0) {
      this.value--;
      this.emitValue();
    }
  }

  addValue() {  
    this.value++;
    this.emitValue();
  }
}
