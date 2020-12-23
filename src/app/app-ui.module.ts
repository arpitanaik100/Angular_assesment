import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  imports: uiModules,
  exports: uiModules
})
export class AppUiModule { }