import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ui-repository-card",
  templateUrl: "./repository-card.component.html",
  styleUrls: ["./repository-card.component.scss"]
})
export class RepositoryCardComponent implements OnInit {
  @Input() name = "";

  constructor() {}

  ngOnInit(): void {}
}
