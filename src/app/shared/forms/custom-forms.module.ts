import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [InputFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputFormComponent],
})
export class CustomFormsModule {}
