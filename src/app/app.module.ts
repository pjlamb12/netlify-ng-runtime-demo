import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RuntimeConfigLoaderModule } from "runtime-config-loader";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RuntimeConfigLoaderModule.forRoot({
      configUrl: environment.runtimeConfigUrl
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
