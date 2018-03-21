import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramadosPage } from './programados';

@NgModule({
  declarations: [
    ProgramadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramadosPage),
  ],
})
export class ProgramadosPageModule {}
