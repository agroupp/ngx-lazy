import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector  } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const lazyConfig = [
  {
    selector: 'app-hello-world',
    loadChildren: () =>
      import('./hello/hello.module').then(m => m.HelloModule)
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLazyElModule.forRoot(lazyConfig),
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('app-ngx-lazy', myElement);
  }
  ngDoBootstrap() {}
}
