import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaNewPage } from './noticia-new.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaNewPageRoutingModule {}
