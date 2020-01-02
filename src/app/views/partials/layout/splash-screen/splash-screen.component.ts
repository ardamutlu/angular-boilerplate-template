// Angular
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// Layout
import { SplashScreenService } from "../../../../core/_base/layout";

@Component({
  selector: "zs-splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.scss"]
})
export class SplashScreenComponent implements OnInit {
  // Public proprties
  @ViewChild("splashScreen", { static: true }) splashScreen: ElementRef;

  /**
   * Component constructor
   *
   * @param el: ElementRef
   * @param splashScreenService: SplachScreenService
   */
  constructor(
    private el: ElementRef,
    private splashScreenService: SplashScreenService
  ) {}

  /**
   * On init
   */
  ngOnInit(): void {
    // init splash screen, see loader option in layout.config.ts
    this.splashScreenService.init(this.splashScreen);
  }
}
