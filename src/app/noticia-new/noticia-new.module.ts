import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaNewPageRoutingModule } from './noticia-new-routing.module';

import { NoticiaNewPage } from './noticia-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaNewPageRoutingModule
  ],
  declarations: [NoticiaNewPage]
})
export class NoticiaNewPageModule {}
