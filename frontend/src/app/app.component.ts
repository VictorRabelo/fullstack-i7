import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAppAnimation } from './animations';
import { ControllerBase } from './controller/controller.base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    slideInAppAnimation
  ]
})
export class AppComponent extends ControllerBase {
  title = 'Site de Cadastro';

  constructor() {
    super();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
  }
}
