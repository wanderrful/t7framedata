import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrameDataComponent } from './frame-data/frame-data.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: "/home", component: FrameDataComponent },
  { path: '**', component: FrameDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
