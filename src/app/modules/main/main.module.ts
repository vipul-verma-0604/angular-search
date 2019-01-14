import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from 'src/app/components/main/main.component';
import { NotSentComponent } from 'src/app/components/not-sent/not-sent.component';
import { CriteriaComponent } from 'src/app/components/criteria/criteria.component';
import { ResultComponent } from 'src/app/components/result/result.component';

@NgModule({
  declarations: [MainComponent, NotSentComponent, CriteriaComponent, ResultComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
