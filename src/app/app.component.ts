import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SplashScreenService, TranslationService } from "./core/_base/layout";

// language list
import { locale as enLang } from "./core/_config/i18n/en";
import { locale as trLang } from "./core/_config/i18n/tr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = "Angular Boilerplate Template";
  loader: boolean;
  private unsubscribe: Subscription[] = [];

  /**
   * Component constructor
   * @param splashScreenService: SplashScreenService
   * @param router: Router
   * @param translationService: TranslationService
   */
  constructor(
    private translationService: TranslationService,
    private router: Router,
    private splashScreenService: SplashScreenService
  ) {
    // register translations
    this.translationService.loadTranslations(enLang, trLang);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // enable/disable loader
    this.loader = true;
    const routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // hide splash screen
        this.splashScreenService.hide();

        // scroll to top on every route change
        window.scrollTo(0, 0);

        // to display back the body content
        setTimeout(() => {
          document.body.classList.add("zs-page--loaded");
        }, 500);
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  /**
   * On Destroy
   */
  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
}
