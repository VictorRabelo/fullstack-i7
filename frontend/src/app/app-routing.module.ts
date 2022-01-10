import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  {path: 'home', component: LayoutComponent, data: { animation: 'LayoutPage' }, 
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
