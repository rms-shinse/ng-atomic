import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/organisms/header/header.component";
import { RepositoryCardComponent } from "./components/molecules/repository-card/repository-card.component";
import { TemplateProfilePageComponent } from "./components/templates/template-profile-page/template-profile-page.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    HeaderComponent,
    RepositoryCardComponent,
    TemplateProfilePageComponent
  ],
  imports: [BrowserModule],
  exports: [TemplateProfilePageComponent]
})
export class UiModule {}
