import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    CommonComponent,
    TestComponent
  ],
  imports: [
  ],
  exports: [
    CommonComponent
  ]
})
export class CommonModule { }
