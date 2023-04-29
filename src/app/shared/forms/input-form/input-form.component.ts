import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormComponent),
      multi: true,
    },
  ],
})
export class InputFormComponent implements ControlValueAccessor {
  @Input() label = '';

  private _text: string = '';

  set text(text: string) {
    this.propagateChange(text);
    this._text = text;
  }
  get text() {
    return this._text;
  }

  propagateChange = (_: string) => {};

  writeValue(value: any): void {
    if (value) {
      this.text = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  setDisabledState(_: boolean): void {}
}
