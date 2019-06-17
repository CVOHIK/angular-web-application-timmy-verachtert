import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Map1Component } from './map1/map1.component';
import { Map2Component } from './map2/map2.component';
import { Map3Component } from './map3/map3.component';

const routes: Routes = [
  {path:"map1",component:Map1Component},
  {path:"map2",component:Map2Component},
  {path:"map3",component:Map3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){}
}
