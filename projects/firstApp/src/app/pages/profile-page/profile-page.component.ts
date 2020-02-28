import { Component, OnInit } from "@angular/core";
import { ProfilePageProps } from "projects/ui/src/lib/components/templates/template-profile-page/template-profile-page.component";

@Component({
  selector: "first-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"]
})
export class ProfilePageComponent implements OnInit {
  data: ProfilePageProps = {
    repositories: [],
    name: "",
    nickname: ""
  };

  constructor() {}

  ngOnInit(): void {
    this.data = {
      repositories: [
        "helloworld",
        "rails_seed",
        "dotfiles",
        "hello-play-assets",
        "ng-devmark",
        "kotlin-graphql-sample"
      ],
      name: "Shinse Tanaka",
      nickname: "rms-shinse"
    };
  }
}
