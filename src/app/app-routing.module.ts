import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameDataComponent } from './frame-data/frame-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/kazuya', pathMatch: 'full' },
  { path: ':character', component: FrameDataComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
