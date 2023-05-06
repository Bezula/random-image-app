import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDevPipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [UppercaseDevPipe],
  imports: [CommonModule],
  exports: [UppercaseDevPipe],
})
export class CoreModule {}
