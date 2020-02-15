import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TestTransComponent } from './test-trans/test-trans.component';
import { testTransModule } from './test-trans/test-trans.module';
import { HttpClientModule } from '@angular/common/http';
import { Test2Component } from './test2/test2.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';


const appRoutes: Routes = [

{
  path:'tans',
  loadChildren: () => import('./test-trans/test-trans.module').then(m => m.testTransModule)
}

]
@NgModule({
  declarations: [
    AppComponent,
   
 
  ],
  imports: [
    BrowserModule,
    testTransModule,
 HttpClientModule,
    RouterModule.forRoot(appRoutes),

    
  ],
  providers: [TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
