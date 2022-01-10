import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ControllerBase } from '@app/controller/controller.base';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent extends ControllerBase {

  constructor(private title: Title) { 
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('MyApp | Full-Stack');
  }

}
