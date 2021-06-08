import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';



@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HelloComponent]
})
export class HelloModule {
  customElementComponent: Type<any> = HelloComponent;
}
