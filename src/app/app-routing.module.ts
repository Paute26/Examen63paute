import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecargasComponent } from './recargas/recargas.component';

const routes: Routes = [
  { path: 'recargas', component: RecargasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
