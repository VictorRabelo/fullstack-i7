import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule,
  ],
  exports:[
    UserFormComponent,
  ],
  entryComponents: [
    UserFormComponent,
  ],
})
export class SharedModule { }
