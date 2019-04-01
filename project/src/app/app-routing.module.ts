import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Route [] = [
  { path:'View1',component:View1Component

  },
  {
    path:'View2',component:View2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
