import { Component, OnInit, Input } from "@angular/core";

export interface ProfilePageProps {
  repositories: Array<string>;
  name: string;
  nickname: string;
}

const initialProps = () => {
  return {
    repositories: [],
    name: "",
    nickname: ""
  };
};

@Component({
  selector: "ui-template-profile-page",
  templateUrl: "./template-profile-page.component.html",
  styleUrls: ["./template-profile-page.component.scss"]
})
export class TemplateProfilePageComponent implements OnInit {
  @Input() props = initialProps();

  constructor() {}

  ngOnInit(): void {}
}
