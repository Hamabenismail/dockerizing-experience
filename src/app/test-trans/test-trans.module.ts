import { TestTransComponent } from './test-trans.component';
import { NgModule } from '@angular/core';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Test2Component } from '../test2/test2.component';
import { TestRoutingModule } from './test-trans.routing.module';

export function httpLoaderFacotry(http:HttpClient){
    return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  }
  
@NgModule({
    imports: [
      TestRoutingModule,
      HttpClientModule,
        TranslateModule.forChild({
            loader:{
              provide:TranslateLoader,
              useFactory:httpLoaderFacotry,
              deps:[HttpClient]
            }
          }),
    ],
    declarations: [TestTransComponent,Test2Component]
  })
  export class testTransModule {
  }
  