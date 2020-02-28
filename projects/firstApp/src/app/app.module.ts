import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { UiModule } from "projects/ui/src/public-api";

@NgModule({
  declarations: [AppComponent, ProfilePageComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
