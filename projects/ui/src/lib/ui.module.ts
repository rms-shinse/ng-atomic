import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/organisms/header/header.component";
import { RepositoryCardComponent } from "./components/molecules/repository-card/repository-card.component";
import { TemplateProfilePageComponent } from "./components/templates/template-profile-page/template-profile-page.component";

@NgModule({
  declarations: [
    HeaderComponent,
    RepositoryCardComponent,
    TemplateProfilePageComponent
  ],
  imports: [],
  exports: [TemplateProfilePageComponent]
})
export class UiModule {}
