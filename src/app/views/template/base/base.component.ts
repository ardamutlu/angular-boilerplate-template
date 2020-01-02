// Angular
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "zs-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {
  /**
   * Component constructor
   */
  constructor() {}

  ngOnInit(): void {}
}
