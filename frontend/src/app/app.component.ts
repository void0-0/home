import { Component } from "@angular/core";

import { HlmButtonDirective } from "@spartan-ng/helm/button";

@Component({
    selector: "app-root",
    imports: [HlmButtonDirective],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title = "home";
}
