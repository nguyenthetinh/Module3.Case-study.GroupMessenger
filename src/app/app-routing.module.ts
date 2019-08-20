import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupMessengerComponent} from './group-messenger/group-messenger.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
