import { Component } from '@angular/core';
import { ControllerBase } from '@app/controller/controller.base';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent extends ControllerBase {
  
  public today: number = Date.now();

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
